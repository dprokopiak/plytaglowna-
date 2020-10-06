function info(pkt, inform){
   var punkt = document.getElementById(pkt);
   var information = document.getElementById(inform)

   punkt.addEventListener( 'mouseenter',  function () {
        information.classList.remove('hide');
        information.classList.add('show');
    })
    punkt.addEventListener( 'mouseleave',  function () {
        information.classList.remove('show');
        information.classList.add('hide');
    })




}
info( 'cpu', 'cpuInfo');
info( 'ram',   'ramInfo');
info( 'pci' , 'pciInfo'  ) ;
info('m2' , 'm2Info');
info('sata' , 'sataInfo');
info('chipset' , 'chipsetInfo');
info('zasilanie', 'zasilanieInfo');
info('express', 'expressInfo');
info('panel','panelInfo');
info('bios','biosInfo');