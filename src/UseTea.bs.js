// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";

function useTea(reducer, initialState) {
  var teaReducer = function (param, action) {
    var state = param.state;
    if (!action) {
      return {
              state: state,
              effects: []
            };
    }
    var result = Curry._2(reducer, state, action._0);
    return {
            state: result.state,
            effects: Belt_Array.concat(param.effects, result.effects)
          };
  };
  var match = React.useReducer(teaReducer, initialState);
  var dispatch = match[1];
  var match$1 = match[0];
  var effects = match$1.effects;
  var subDispatch = function (action) {
    Curry._1(dispatch, /* DomainAction */{
          _0: action
        });
  };
  React.useEffect((function () {
          Belt_Array.forEach(effects, (function (fx) {
                  Curry._1(fx, (function (action) {
                          Curry._1(dispatch, /* DomainAction */{
                                _0: action
                              });
                        }));
                }));
          Curry._1(dispatch, /* RemoveEffects */0);
        }), [effects]);
  return [
          match$1.state,
          subDispatch
        ];
}

export {
  useTea ,
}
/* react Not a pure module */