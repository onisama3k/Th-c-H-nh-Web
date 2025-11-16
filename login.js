// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Prevent click propagation on menu
    navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Toggle password visibility
function setupPasswordToggle() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
        });
    }
}

// Form validation
function validateForm() {
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.remove('show');
    });
    document.querySelectorAll('.form-group input').forEach(input => {
        input.classList.remove('error');
    });

    // Validate email
    if (!email.value.trim()) {
        showError(email, 'Email là bắt buộc');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email không hợp lệ');
        isValid = false;
    }

    // Validate password
    if (!password.value.trim()) {
        showError(password, 'Mật khẩu là bắt buộc');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    input.classList.add('error');
    let errorElement = input.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        input.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Form submission
function setupFormSubmission() {
    const form = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'block';

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message show';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <strong>Đăng nhập thành công!</strong> Đang chuyển hướng...
            `;
            form.parentNode.insertBefore(successMessage, form);
            
            // Simulate redirect
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
            
        } catch (error) {
            showError(document.getElementById('email'), 'Email hoặc mật khẩu không đúng');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
        }
    });
}

// Social login handlers
function setupSocialLogin() {
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            alert('Chức năng đăng nhập với Google sẽ được tích hợp sau');
        });
    }

    if (facebookBtn) {
        facebookBtn.addEventListener('click', () => {
            alert('Chức năng đăng nhập với Facebook sẽ được tích hợp sau');
        });
    }
}

// Real-time validation
function setupRealTimeValidation() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            if (emailInput.value && !isValidEmail(emailInput.value)) {
                showError(emailInput, 'Email không hợp lệ');
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('blur', () => {
            if (!passwordInput.value.trim()) {
                showError(passwordInput, 'Mật khẩu là bắt buộc');
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupPasswordToggle();
    setupFormSubmission();
    setupSocialLogin();
    setupRealTimeValidation();
});
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Giả lập kiểm tra — có thể thay bằng kiểm tra thật nếu cậu có backend
  if (email && password) {
    // Lưu thông tin người dùng
    localStorage.setItem("user", JSON.stringify({ name: email.split("@")[0] }));

    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
});
// an nut dang nhap
