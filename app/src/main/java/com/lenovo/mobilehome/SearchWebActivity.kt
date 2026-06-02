package com.lenovo.mobilehome

import android.os.Bundle
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

        ViewCompat.setOnApplyWindowInsetsListener(binding.root) { view, insets ->
            val statusBar = insets.getInsets(WindowInsetsCompat.Type.statusBars())
            val navBar = insets.getInsets(WindowInsetsCompat.Type.navigationBars())
            binding.statusBarSpacer.updateLayoutParams {
                height = statusBar.top
            }
            view.updatePadding(bottom = navBar.bottom)
            insets
        }

        binding.root.findViewById<android.view.View>(R.id.btn_back).setOnClickListener {
            finish()
        }
    }
}
