import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton';

export default class XR {
  constructor() {
    this.experience = window.experience
    this.renderer = this.experience.renderer
    this.scene = this.experience.scene

    this.setXR()
  }

  setXR() {
    console.log('wow')
    this.renderer.instance.xr.enabled = true;
        
    const btn = new ARButton( this.renderer.instance, { sessionInit: { requiredFeatures: [ 'hit-test' ], optionalFeatures: [ 'dom-overlay' ], domOverlay: { root: document.body } } } );
    
    const self = this;

    this.hitTestSourceRequested = false;
    this.hitTestSource = null;
    
    function onSelect() {
        
    }

    this.controller = this.renderer.instance.xr.getController( 0 );
    this.controller.addEventListener( 'select', onSelect );
    
    this.scene.add( this.controller );  
  }

  update() {}

  destroy() {}
}