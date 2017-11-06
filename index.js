

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry(((f, a) => {
	
  return a.map(f);

}));
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return (() => {
  	
    return (new errType(message));
  
  });
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");
var events = require("events");
defCurried(emit, event(emitter, data), emitter.emit(event, data));
var bubble = (function bubble$(src, target, event) {
  /* bubble src/index.sibilant:10:0 */

  "cause an `event` on `src` to be emitted on another `target` emitter";
  return src.on(event, emit(event, target));
});
looseVar(EventEmitter, Interface.define("EventEmitter", lit(init(null, events.EventEmitter.call(this)), doc(("a simple wrapper around the " + "event" + " modules  type" + "EventEmitter")), extend(events.EventEmitter.prototype))));
exports.EventEmitter = EventEmitter;