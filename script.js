// Basic interactions to update UI state based on control panel inputs
document.addEventListener('DOMContentLoaded', () => {
    
    // Magnet Strength Slider
    const strengthSlider = document.getElementById('strength-slider');
    const strengthVal = document.getElementById('strength-val');
    
    strengthSlider.addEventListener('input', (e) => {
        strengthVal.textContent = e.target.value + '%';
        // TODO: Pass value to physics engine
    });

    // Loop Area Slider
    const areaSlider = document.getElementById('area-slider');
    const areaVal = document.getElementById('area-val');
    
    areaSlider.addEventListener('input', (e) => {
        areaVal.textContent = e.target.value + '%';
        // TODO: Update loop visual size and physics constraints
    });

    // Indicator Toggle (Lightbulb vs Voltmeter)
    const iconBtns = document.querySelectorAll('.icon-btn');
    iconBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            iconBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // TODO: Swap UI elements on the canvas overlay
        });
    });

    // Play/Pause
    const btnPlay = document.querySelector('.btn-play');
    const btnPause = document.querySelector('.btn-pause');
    const wheel = document.querySelector('.wheel');
    const magnet = document.querySelector('.magnet-bar');
    const gauge = document.querySelector('.gauge');

    btnPause.addEventListener('click', () => {
        btnPause.classList.add('active');
        btnPlay.classList.remove('active');
        // Pause CSS Animations
        wheel.style.animationPlayState = 'paused';
        magnet.style.animationPlayState = 'paused';
        gauge.style.animationPlayState = 'paused';
        // TODO: Pause Physics Engine
    });

    btnPlay.addEventListener('click', () => {
        btnPlay.classList.add('active');
        btnPause.classList.remove('active');
        // Resume CSS Animations
        wheel.style.animationPlayState = 'running';
        magnet.style.animationPlayState = 'running';
        gauge.style.animationPlayState = 'running';
        // TODO: Resume Physics Engine
    });
});
