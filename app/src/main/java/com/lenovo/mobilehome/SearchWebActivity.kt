package com.lenovo.mobilehome

import android.os.Bundle
import android.view.inputmethod.InputMethodManager
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.updateLayoutParams
import androidx.core.view.updatePadding
import com.lenovo.mobilehome.databinding.ActivitySearchWebBinding

class SearchWebActivity : AppCompatActivity() {

    private lateinit var binding: ActivitySearchWebBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySearchWebBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // adjustNothing + manual inset handling:
        // - status bar drives the spacer height
        // - IME height drives padding on the root so the fixed bottom bars
        //   (input card + URL bar) ride up above the keyboard, and the
        //   NestedScrollView (weight=1) absorbs the rest
        ViewCompat.setOnApplyWindowInsetsListener(binding.root) { view, insets ->
            val statusBar = insets.getInsets(WindowInsetsCompat.Type.statusBars())
            val ime = insets.getInsets(WindowInsetsCompat.Type.ime())
            val navBar = insets.getInsets(WindowInsetsCompat.Type.navigationBars())

            binding.statusBarSpacer.updateLayoutParams { height = statusBar.top }

            // When keyboard is visible use IME height; otherwise fall back to nav bar
            val bottomPadding = if (ime.bottom > navBar.bottom) ime.bottom else navBar.bottom
            view.updatePadding(bottom = bottomPadding)

            insets
        }

        // Trigger keyboard on entry
        binding.searchInput.requestFocus()
        binding.searchInput.post {
            val imm = getSystemService(INPUT_METHOD_SERVICE) as InputMethodManager
            imm.showSoftInput(binding.searchInput, InputMethodManager.SHOW_IMPLICIT)
        }

        binding.btnBack.setOnClickListener { finish() }
    }
}
