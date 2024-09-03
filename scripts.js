// Placeholder if specific interactive behaviors are needed
document.querySelector('.title').addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
});

document.querySelector('.title').addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
});
