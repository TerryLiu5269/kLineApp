import{C as x,E as ge,F as $,G as _e,I as y,J as I,P as z,a as d,c as ce,d as g,e as de,ea as be,f as le,g as T,h as he,i as ue,k as V,ka as C,l as W,m as me,n as L,o as pe,p as S,q as h,r as b,ra as ve,s as M,sa as ye,t as a,u as H,v as _,w as fe,x as v,y as j}from"./chunk-L2WA2HZR.js";var rt=(()=>{class i{constructor(e){this.http=e,this.apiUrl="https://api.binance.com/api/v3/ticker/24hr",this.klineWs=null,this.priceWs=null,this.priceUpdates$=new g,this.klineUpdates$=new g}getCurrencyPairs(){return this.http.get(this.apiUrl).pipe(T(e=>e.filter(t=>t.symbol.endsWith("USDT"))))}startPriceSocket(){let e="wss://stream.binance.com:9443/ws/!ticker@arr";this.priceWs=new WebSocket(e),this.priceWs.onmessage=t=>{let n=JSON.parse(t.data);this.priceUpdates$.next(n)}}getPriceUpdates(){return this.priceUpdates$.asObservable()}startKlineSocket(e,t){this.klineWs&&this.klineWs.close(),this.klineUpdates$=new g;let n=`wss://stream.binance.com:9443/ws/${e.toLowerCase()}@kline_${t}`;this.klineWs=new WebSocket(n),this.klineWs.onmessage=o=>{let r=JSON.parse(o.data);r.k&&r.k.i===t&&(console.log("message.k",r.k),this.klineUpdates$.next(r.k))},this.klineWs.onclose=()=>{this.klineWs=null}}stopKlineSocket(){this.klineWs&&(this.klineWs.close(),this.klineWs=null)}getKlineUpdates(){return this.klineUpdates$.asObservable()}getKlineData(e,t){let n=`https://api.binance.com/api/v3/klines?symbol=${e}&interval=${t}`;return this.http.get(n)}ngOnDestroy(){this.priceWs&&this.priceWs.close(),this.klineWs&&this.klineWs.close()}static{this.\u0275fac=function(t){return new(t||i)(a(ye))}}static{this.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Z;try{Z=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Z=!1}var f=(()=>{class i{constructor(e){this._platformId=e,this.isBrowser=this._platformId?ve(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Z)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(t){return new(t||i)(a(ge))}}static{this.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var R;function je(){if(R==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>R=!0}))}finally{R=R||!1}return R}function O(i){return je()?i:!!i.capture}var K;function Pe(){if(K==null){let i=typeof document<"u"?document.head:null;K=!!(i&&(i.createShadowRoot||i.attachShadow))}return K}function Ie(i){if(Pe()){let s=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&s instanceof ShadowRoot)return s}return null}function E(i){return i.composedPath?i.composedPath()[0]:i.target}function Ee(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Y(i){return Array.isArray(i)?i:[i]}function A(i){return i instanceof x?i.nativeElement:i}var we=new Set,k,Be=(()=>{class i{constructor(e,t){this._platform=e,this._nonce=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ve}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ue(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(t){return new(t||i)(a(f),a(_e,8))}}static{this.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Ue(i,s){if(!we.has(i))try{k||(k=document.createElement("style"),s&&k.setAttribute("nonce",s),k.setAttribute("type","text/css"),document.head.appendChild(k)),k.sheet&&(k.sheet.insertRule(`@media ${i} {body{ }}`,0),we.add(i))}catch(e){console.error(e)}}function Ve(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var ke=(()=>{class i{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new g}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ae(Y(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=Ae(Y(e)).map(r=>this._registerQuery(r).observable),o=he(n);return o=ue(o.pipe(W(1)),o.pipe(L(1),V(0))),o.pipe(T(r=>{let c={matches:!1,breakpoints:{}};return r.forEach(({matches:p,query:m})=>{c.matches=c.matches||p,c.breakpoints[m]=p}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new ce(r=>{let c=p=>this._zone.run(()=>r.next(p));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(pe(t),T(({matches:r})=>({query:e,matches:r})),S(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static{this.\u0275fac=function(t){return new(t||i)(a(Be),a(I))}}static{this.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Ae(i){return i.map(s=>s.split(",")).reduce((s,e)=>s.concat(e)).map(s=>s.trim())}function X(i){return i.buttons===0||i.detail===0}function Q(i){let s=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!s&&s.identifier===-1&&(s.radiusX==null||s.radiusX===1)&&(s.radiusY==null||s.radiusY===1)}var ze=new M("cdk-input-modality-detector-options"),Ke={ignoreKeys:[18,17,224,91,16]},Me=650,N=O({passive:!0,capture:!0}),Ze=(()=>{class i{get mostRecentModality(){return this._modality.value}constructor(e,t,n,o){this._platform=e,this._mostRecentTarget=null,this._modality=new de(null),this._lastTouchMs=0,this._onKeydown=r=>{this._options?.ignoreKeys?.some(c=>c===r.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=E(r))},this._onMousedown=r=>{Date.now()-this._lastTouchMs<Me||(this._modality.next(X(r)?"keyboard":"mouse"),this._mostRecentTarget=E(r))},this._onTouchstart=r=>{if(Q(r)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=E(r)},this._options=d(d({},Ke),o),this.modalityDetected=this._modality.pipe(L(1)),this.modalityChanged=this.modalityDetected.pipe(me()),e.isBrowser&&t.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,N),n.addEventListener("mousedown",this._onMousedown,N),n.addEventListener("touchstart",this._onTouchstart,N)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,N),document.removeEventListener("mousedown",this._onMousedown,N),document.removeEventListener("touchstart",this._onTouchstart,N))}static{this.\u0275fac=function(t){return new(t||i)(a(f),a(I),a(C),a(ze,8))}}static{this.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var B=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i}(B||{}),Ge=new M("cdk-focus-monitor-default-options"),P=O({passive:!0,capture:!0}),Qt=(()=>{class i{constructor(e,t,n,o,r){this._ngZone=e,this._platform=t,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new g,this._rootNodeFocusAndBlurListener=c=>{let p=E(c);for(let m=p;m;m=m.parentElement)c.type==="focus"?this._onFocus(c,m):this._onBlur(c,m)},this._document=o,this._detectionMode=r?.detectionMode||B.IMMEDIATE}monitor(e,t=!1){let n=A(e);if(!this._platform.isBrowser||n.nodeType!==1)return le();let o=Ie(n)||this._getDocument(),r=this._elementInfo.get(n);if(r)return t&&(r.checkChildren=!0),r.subject;let c={checkChildren:t,subject:new g,rootNode:o};return this._elementInfo.set(n,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=A(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let o=A(e),r=this._getDocument().activeElement;o===r?this._getClosestElementsInfo(o).forEach(([c,p])=>this._originChanged(c,t,p)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===B.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===B.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?Me:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),o=E(e);!n||!n.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,P),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,P)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(S(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,P),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,P),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,o)=>{(o===e||n.checkChildren&&o.contains(e))&&t.push([o,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(t))return!0}return!1}static{this.\u0275fac=function(t){return new(t||i)(a(I),a(f),a(Ze),a(C,8),a(Ge,8))}}static{this.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var D=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(D||{}),De="cdk-high-contrast-black-on-white",Te="cdk-high-contrast-white-on-black",q="cdk-high-contrast-active",xe=(()=>{class i{constructor(e,t){this._platform=e,this._document=t,this._breakpointSubscription=H(ke).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return D.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return D.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return D.BLACK_ON_WHITE}return D.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(q,De,Te),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===D.BLACK_ON_WHITE?e.add(q,De):t===D.WHITE_ON_BLACK&&e.add(q,Te)}}static{this.\u0275fac=function(t){return new(t||i)(a(f),a(C))}}static{this.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var J=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=v({type:i})}static{this.\u0275inj=b({})}}return i})();function Qe(){return!0}var Je=new M("mat-sanity-checks",{providedIn:"root",factory:Qe}),Ce=(()=>{class i{constructor(e,t,n){this._sanityChecks=t,this._document=n,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return Ee()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[e]}static{this.\u0275fac=function(t){return new(t||i)(a(xe),a(Je,8),a(C))}}static{this.\u0275mod=v({type:i})}static{this.\u0275inj=b({imports:[J,J]})}}return i})();var u=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(u||{}),ee=class{constructor(s,e,t,n=!1){this._renderer=s,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n,this.state=u.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Oe=O({passive:!0,capture:!0}),te=class{constructor(){this._events=new Map,this._delegateEventHandler=s=>{let e=E(s);e&&this._events.get(s.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(o=>o.handleEvent(s))})}}addHandler(s,e,t,n){let o=this._events.get(e);if(o){let r=o.get(t);r?r.add(n):o.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),s.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Oe)})}removeHandler(s,e,t){let n=this._events.get(s);if(!n)return;let o=n.get(e);o&&(o.delete(t),o.size===0&&n.delete(e),n.size===0&&(this._events.delete(s),document.removeEventListener(s,this._delegateEventHandler,Oe)))}},Ne={enterDuration:225,exitDuration:150},et=800,Fe=O({passive:!0,capture:!0}),Re=["mousedown","touchstart"],Le=["mouseup","mouseleave","touchend","touchcancel"],ie=class i{static{this._eventManager=new te}constructor(s,e,t,n){this._target=s,this._ngZone=e,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=A(t))}fadeInRipple(s,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=d(d({},Ne),t.animation);t.centered&&(s=n.left+n.width/2,e=n.top+n.height/2);let r=t.radius||tt(s,e,n),c=s-n.left,p=e-n.top,m=o.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${c-r}px`,l.style.top=`${p-r}px`,l.style.height=`${r*2}px`,l.style.width=`${r*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(l);let ne=window.getComputedStyle(l),Se=ne.transitionProperty,se=ne.transitionDuration,U=Se==="none"||se==="0s"||se==="0s, 0s"||n.width===0&&n.height===0,w=new ee(this,l,t,U);l.style.transform="scale3d(1, 1, 1)",w.state=u.FADING_IN,t.persistent||(this._mostRecentTransientRipple=w);let oe=null;return!U&&(m||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let re=()=>this._finishRippleTransition(w),ae=()=>this._destroyRipple(w);l.addEventListener("transitionend",re),l.addEventListener("transitioncancel",ae),oe={onTransitionEnd:re,onTransitionCancel:ae}}),this._activeRipples.set(w,oe),(U||!m)&&this._finishRippleTransition(w),w}fadeOutRipple(s){if(s.state===u.FADING_OUT||s.state===u.HIDDEN)return;let e=s.element,t=d(d({},Ne),s.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",s.state=u.FADING_OUT,(s._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(s)}fadeOutAll(){this._getActiveRipples().forEach(s=>s.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(s=>{s.config.persistent||s.fadeOut()})}setupTriggerEvents(s){let e=A(s);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Re.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(s){s.type==="mousedown"?this._onMousedown(s):s.type==="touchstart"?this._onTouchStart(s):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Le.forEach(e=>{this._triggerElement.addEventListener(e,this,Fe)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(s){s.state===u.FADING_IN?this._startFadeOutTransition(s):s.state===u.FADING_OUT&&this._destroyRipple(s)}_startFadeOutTransition(s){let e=s===this._mostRecentTransientRipple,{persistent:t}=s.config;s.state=u.VISIBLE,!t&&(!e||!this._isPointerDown)&&s.fadeOut()}_destroyRipple(s){let e=this._activeRipples.get(s)??null;this._activeRipples.delete(s),this._activeRipples.size||(this._containerRect=null),s===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),s.state=u.HIDDEN,e!==null&&(s.element.removeEventListener("transitionend",e.onTransitionEnd),s.element.removeEventListener("transitioncancel",e.onTransitionCancel)),s.element.remove()}_onMousedown(s){let e=X(s),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+et;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(s.clientX,s.clientY,this._target.rippleConfig))}_onTouchStart(s){if(!this._target.rippleDisabled&&!Q(s)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=s.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(s=>{let e=s.state===u.VISIBLE||s.config.terminateOnPointerUp&&s.state===u.FADING_IN;!s.config.persistent&&e&&s.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let s=this._triggerElement;s&&(Re.forEach(e=>i._eventManager.removeHandler(e,s,this)),this._pointerUpEventsRegistered&&(Le.forEach(e=>s.removeEventListener(e,this,Fe)),this._pointerUpEventsRegistered=!1))}};function tt(i,s,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(s-e.top),Math.abs(s-e.bottom));return Math.sqrt(t*t+n*n)}var it=new M("mat-ripple-global-options"),Vi=(()=>{class i{get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}constructor(e,t,n,o,r){this._elementRef=e,this._animationMode=r,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=o||{},this._rippleRenderer=new ie(this,t,e,n)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:d(d(d({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,d(d({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,d(d({},this.rippleConfig),e))}static{this.\u0275fac=function(t){return new(t||i)(y(x),y(I),y(f),y(it,8),y($,8))}}static{this.\u0275dir=j({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,n){t&2&&z("mat-ripple-unbounded",n.unbounded)},inputs:{color:[_.None,"matRippleColor","color"],unbounded:[_.None,"matRippleUnbounded","unbounded"],centered:[_.None,"matRippleCentered","centered"],radius:[_.None,"matRippleRadius","radius"],animation:[_.None,"matRippleAnimation","animation"],disabled:[_.None,"matRippleDisabled","disabled"],trigger:[_.None,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0})}}return i})(),Wi=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=v({type:i})}static{this.\u0275inj=b({imports:[Ce,Ce]})}}return i})(),Hi=(()=>{class i{constructor(e){this._animationMode=e,this.state="unchecked",this.disabled=!1,this.appearance="full"}static{this.\u0275fac=function(t){return new(t||i)(y($,8))}}static{this.\u0275cmp=fe({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&z("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationMode==="NoopAnimations")},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},standalone:!0,features:[be],decls:0,vars:0,template:function(t,n){},styles:['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],encapsulation:2,changeDetection:0})}}return i})();export{rt as a,Qt as b,Ce as c,Vi as d,Wi as e,Hi as f};
