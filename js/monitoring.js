/*
  Usage:
  - Call `showWrongCompartmentAlert()` when your backend/sensor logic detects a wrong compartment.
  - Example: showWrongCompartmentAlert('Sampah masuk ke compartment yang salah (Plastik -> Kertas)')
*/
(function(){
    var modal = document.getElementById('alertModal');
    var msg = document.getElementById('alertMessage');
    var closeBtn = document.getElementById('alertClose');
    var okBtn = document.getElementById('alertOk');

    function openModal(message){
        if (!modal) { console.warn('Modal element not found'); return; }
        if (msg) msg.textContent = message || 'Sampah masuk ke compartment yang salah';
        modal.setAttribute('aria-hidden','false');
        modal.classList.add('open');
    }
    function closeModal(){
        if (!modal) return;
        modal.setAttribute('aria-hidden','true');
        modal.classList.remove('open');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (okBtn) okBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });

    // Expose global function for integration with your sensor/WebSocket code
    window.showWrongCompartmentAlert = function(message){
        openModal(message);
    };

    // Developer test button: remove or hide in production if you don't need it
    var testBtn = document.getElementById('testWrongBtn');
    if (testBtn) testBtn.addEventListener('click', function(){ openModal(); });
})();
