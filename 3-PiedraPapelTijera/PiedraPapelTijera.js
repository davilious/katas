function papelPiedraTijera(usuario, node){

  var _utensilios = ['piedra','papel','tijera'],
      _usuario = 0, _maquina = 0, 
      _usuarioTirada = usuario || 'tijera', 
      _maquinaTirada = 0,
      elemento = document.getElementById(node),
      buttonPlay = document.getElementsByClassName('js-play')[0];

  function _getAleatorio(){
    var _nAleatorio = Math.random() * (2 - 0 + 1);
    return parseInt(_nAleatorio,10);
  }

  function _getMaquinaTirada(){
    _maquinaTirada = _utensilios[_getAleatorio()];
    return _maquinaTirada;
  }

  function _getUsuarioTirada(){
    return usuario;
  }

  function _jugando(){
    _getMaquinaTirada();
    if(_usuarioTirada == _maquinaTirada ){
      elemento.innerHTML = 'Empate, tira de nuevo';
    }
    if(  (_usuarioTirada == 'papel' && _maquinaTirada == 'piedra') 
      || (_usuarioTirada == 'tijera' && _maquinaTirada == 'papel')
      || (_usuarioTirada == 'piedra' && _maquinaTirada == 'tijera')){
      _usuario++;
      elemento.innerHTML = _usuario + ' para usuario';
      
    }
    if(  (_maquinaTirada == 'papel' && _usuarioTirada == 'piedra') 
      || (_maquinaTirada == 'tijera' && _usuarioTirada == 'papel')
      || (_maquinaTirada == 'piedra' && _usuarioTirada == 'tijera')){
      _maquina++;
      elemento.innerHTML = _maquina + ' para maquina';
    }
    if( _maquina == 5 || _usuario == 5 ){
      return _quienGana() ;
    }
  }
  function _quienGana(){
    var ganador = (_maquina > _usuario) ? 'Maquina' : 'User';
    var button = document.getElementsByClassName('js-play')[0];
    elemento.innerHTML = ganador + 'ha ganado. Maquina: ' + _maquina + '/ Usuario: ' + _usuario ;
    buttonPlay.setAttribute('disabled', true);
  }

  function resetContadores(){
    buttonPlay.removeAttribute("disabled");
    elemento.innerHTML = 'Valores reseteados';
    _usuario = 0, _maquina = 0;
  }


  function init(){
      return _jugando();
  }

  return {
    init: init,
    reset : resetContadores
  }
}