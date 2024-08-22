let lightmode = localStorage.getItem('lightmode');
const mudartema = document.getElementById('mudartema');
    
const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
    }
    
const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'inactive');
    }
    
    if (lightmode === 'active') enableLightmode();
    
mudartema.addEventListener('click', () => {
    lightmode = localStorage.getItem('lightmode');
    lightmode !== 'active' ? enableLightmode() : disableLightmode();
    });
    