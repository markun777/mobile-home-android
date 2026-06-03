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
    private var keyboardShown = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySearchWebBinding.inflate(layoutInflater)
        setContentView(binding.root)

        ViewCompat.setOnApplyWindowInsetsListener(binding.root) { view, insets ->
            val statusBar = insets.getInsets(WindowInsetsCompat.Type.statusBars())
            val ime = insets.getInsets(WindowInsetsCompat.Type.ime())
            val navBar = insets.getInsets(WindowInsetsCompat.Type.navigationBars())

            binding.statusBarSpacer.updateLayoutParams { height = statusBar.top }
            val bottomPadding = if (ime.bottom > navBar.bottom) ime.bottom else navBar.bottom
            view.updatePadding(bottom = bottomPadding)

            insets
        }

        binding.btnBack.setOnClickListener { finish() }
    }

    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        if (hasFocus && !keyboardShown) {
            keyboardShown = true
            binding.searchInput.requestFocus()
            binding.searchInput.postDelayed({
                val imm = getSystemService(INPUT_METHOD_SERVICE) as InputMethodManager
                imm.showSoftInput(binding.searchInput, InputMethodManager.SHOW_FORCED)
            }, 100)
        }
    }
}
