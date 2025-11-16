/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ "./node_modules/d3-force/src/center.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/center.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {
  var nodes, strength = 1;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  return force;
}


/***/ }),

/***/ "./node_modules/d3-force/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-force/src/jiggle.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/jiggle.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(random) {
  return (random() - 0.5) * 1e-6;
}


/***/ }),

/***/ "./node_modules/d3-force/src/lcg.js":
/*!******************************************!*\
  !*** ./node_modules/d3-force/src/lcg.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}


/***/ }),

/***/ "./node_modules/d3-force/src/link.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-force/src/link.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle.js */ "./node_modules/d3-force/src/jiggle.js");



function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(30),
      distances,
      nodes,
      count,
      bias,
      random,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        y = target.y + target.vy - source.y - source.vy || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeDistance(), force) : distance;
  };

  return force;
}


/***/ }),

/***/ "./node_modules/d3-force/src/manyBody.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/manyBody.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-quadtree */ "./node_modules/d3-quadtree/src/quadtree.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jiggle.js */ "./node_modules/d3-force/src/jiggle.js");
/* harmony import */ var _simulation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simulation.js */ "./node_modules/d3-force/src/simulation.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var nodes,
      node,
      random,
      alpha,
      strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = (0,d3_quadtree__WEBPACK_IMPORTED_MODULE_0__["default"])(nodes, _simulation_js__WEBPACK_IMPORTED_MODULE_3__.x, _simulation_js__WEBPACK_IMPORTED_MODULE_3__.y).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, weight = 0, x, y, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += x * x;
        if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += x * x;
      if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
}


/***/ }),

/***/ "./node_modules/d3-force/src/simulation.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-force/src/simulation.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   x: () => (/* binding */ x),
/* harmony export */   y: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lcg.js */ "./node_modules/d3-force/src/lcg.js");




function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = new Map(),
      stepper = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(step),
      event = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"])("tick", "end"),
      random = (0,_lcg_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i, n = nodes.length, node;

    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;

      forces.forEach(function(force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    randomSource: function(_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/add.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-quadtree/src/add.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAll: () => (/* binding */ addAll),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  const x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
}

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/cover.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/cover.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
    var z = x1 - x0 || 1,
        node = this._root,
        parent,
        i;

    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
      i = (y < y0) << 1 | (x < x0);
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0: x1 = x0 + z, y1 = y0 + z; break;
        case 1: x0 = x1 - z, y1 = y0 + z; break;
        case 2: x1 = x0 + z, y0 = y1 - z; break;
        case 3: x0 = x1 - z, y0 = y1 - z; break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/data.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/data.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/extent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/extent.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/find.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/find.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[3], xm, ym, x2, y2),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[2], x1, ym, xm, y2),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[1], xm, y1, x2, ym),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/quad.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/quad.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/quadtree.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-quadtree/src/quadtree.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ quadtree)
/* harmony export */ });
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ "./node_modules/d3-quadtree/src/add.js");
/* harmony import */ var _cover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cover.js */ "./node_modules/d3-quadtree/src/cover.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./node_modules/d3-quadtree/src/data.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent.js */ "./node_modules/d3-quadtree/src/extent.js");
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find.js */ "./node_modules/d3-quadtree/src/find.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-quadtree/src/remove.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root.js */ "./node_modules/d3-quadtree/src/root.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./size.js */ "./node_modules/d3-quadtree/src/size.js");
/* harmony import */ var _visit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visit.js */ "./node_modules/d3-quadtree/src/visit.js");
/* harmony import */ var _visitAfter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visitAfter.js */ "./node_modules/d3-quadtree/src/visitAfter.js");
/* harmony import */ var _x_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./x.js */ "./node_modules/d3-quadtree/src/x.js");
/* harmony import */ var _y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./y.js */ "./node_modules/d3-quadtree/src/y.js");













function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? _x_js__WEBPACK_IMPORTED_MODULE_10__.defaultX : x, y == null ? _y_js__WEBPACK_IMPORTED_MODULE_11__.defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = _add_js__WEBPACK_IMPORTED_MODULE_0__["default"];
treeProto.addAll = _add_js__WEBPACK_IMPORTED_MODULE_0__.addAll;
treeProto.cover = _cover_js__WEBPACK_IMPORTED_MODULE_1__["default"];
treeProto.data = _data_js__WEBPACK_IMPORTED_MODULE_2__["default"];
treeProto.extent = _extent_js__WEBPACK_IMPORTED_MODULE_3__["default"];
treeProto.find = _find_js__WEBPACK_IMPORTED_MODULE_4__["default"];
treeProto.remove = _remove_js__WEBPACK_IMPORTED_MODULE_5__["default"];
treeProto.removeAll = _remove_js__WEBPACK_IMPORTED_MODULE_5__.removeAll;
treeProto.root = _root_js__WEBPACK_IMPORTED_MODULE_6__["default"];
treeProto.size = _size_js__WEBPACK_IMPORTED_MODULE_7__["default"];
treeProto.visit = _visit_js__WEBPACK_IMPORTED_MODULE_8__["default"];
treeProto.visitAfter = _visitAfter_js__WEBPACK_IMPORTED_MODULE_9__["default"];
treeProto.x = _x_js__WEBPACK_IMPORTED_MODULE_10__["default"];
treeProto.y = _y_js__WEBPACK_IMPORTED_MODULE_11__["default"];


/***/ }),

/***/ "./node_modules/d3-quadtree/src/remove.js":
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/remove.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   removeAll: () => (/* binding */ removeAll)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
}

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/root.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/root.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this._root;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/size.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/size.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/visit.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/visit.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
    }
  }
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/visitAfter.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-quadtree/src/visitAfter.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/x.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/x.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultX: () => (/* binding */ defaultX)
/* harmony export */ });
function defaultX(d) {
  return d[0];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/y.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/y.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultY: () => (/* binding */ defaultY)
/* harmony export */ });
function defaultY(d) {
  return d[1];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timer: () => (/* binding */ Timer),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   timer: () => (/* binding */ timer),
/* harmony export */   timerFlush: () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.26.3
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const swalPrefix = 'swal2-';

  /**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
  const swalClasses = classNames.reduce((acc, className) => {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  const icons = ['success', 'warning', 'info', 'question', 'error'];
  const iconTypes = icons.reduce((acc, icon) => {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  const consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */
  const warnAboutDeprecation = (deprecatedParam, useInstead = null) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ''}`);
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {(() => *) | *} arg
   * @returns {*}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {*} arg
   * @returns {Promise<*>}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`));

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    const otherFocusableElements = popup.querySelectorAll(focusable);
    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      const head = parsed.querySelector('head');
      if (head) {
        Array.from(head.childNodes).forEach(child => {
          elem.appendChild(child);
        });
      }
      const body = parsed.querySelector('body');
      if (body) {
        Array.from(body.childNodes).forEach(child => {
          if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
            elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
          } else {
            elem.appendChild(child);
          }
        });
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (!params.customClass) {
      return;
    }
    const customClass = params.customClass[(/** @type {keyof SweetAlertCustomClass} */className)];
    if (!customClass) {
      return;
    }
    if (typeof customClass !== 'string' && !customClass.forEach) {
      warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
      return;
    }
    addClass(elem, customClass);
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          if (condition) {
            elem.classList.add(className);
          } else {
            elem.classList.remove(className);
          }
        });
      } else {
        if (condition) {
          target.classList.add(className);
        } else {
          target.classList.remove(className);
        }
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {string | number | null | undefined} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(`${value}`)}`) {
      value = parseInt(value);
    }
    if (value || parseInt(`${value}`) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? `${value}px` : value);
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const show = (elem, display = 'flex') => {
    if (!elem) {
      return;
    }
    elem.style.display = display;
  };

  /**
   * @param {HTMLElement | null} elem
   */
  const hide = elem => {
    if (!elem) {
      return;
    }
    elem.style.display = 'none';
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const showWhenInnerHtmlPresent = (elem, display = 'block') => {
    if (!elem) {
      return;
    }
    new MutationObserver(() => {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement | null} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {boolean | string | null | undefined} condition
   * @param {string} display
   */
  const toggle = (elem, condition, display = 'flex') => {
    if (condition) {
      show(elem, display);
    } else {
      hide(elem);
    }
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

  /**
   * @param {HTMLElement} element
   * @param {HTMLElement} stopElement
   * @returns {boolean}
   */
  const selfOrParentIsScrollable = (element, stopElement) => {
    let parent = element;
    while (parent && parent !== stopElement) {
      if (isScrollable(parent)) {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  };

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    container.dataset['swal2Theme'] = params.theme;
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    if (params.topLayer) {
      container.setAttribute('popover', '');
      container.showPopover();
    }
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {object} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {object} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Apply custom background colors to action buttons
    if (params.confirmButtonColor) {
      confirmButton.style.setProperty('--swal2-confirm-button-background-color', params.confirmButtonColor);
    }
    if (params.denyButtonColor) {
      denyButton.style.setProperty('--swal2-deny-button-background-color', params.denyButtonColor);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.setProperty('--swal2-cancel-button-background-color', params.cancelButtonColor);
    }

    // Apply the outline color to action buttons
    applyOutlineColor(confirmButton);
    applyOutlineColor(denyButton);
    applyOutlineColor(cancelButton);
  }

  /**
   * @param {HTMLElement} button
   */
  function applyOutlineColor(button) {
    const buttonStyle = window.getComputedStyle(button);
    if (buttonStyle.getPropertyValue('--swal2-action-button-focus-box-shadow')) {
      // If the button already has a custom outline color, no need to change it
      return;
    }
    const outlineColor = buttonStyle.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, 'rgba($1, $2, $3, 0.5)');
    button.style.setProperty('--swal2-action-button-focus-box-shadow', buttonStyle.getPropertyValue('--swal2-outline').replace(/ rgba\(.*/, ` ${outlineColor}`));
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params[`show${buttonName}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses[`grow-${grow}`]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>


  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(' | ')}, got "${params.input}"`);
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (!inputContainer) {
      return;
    }
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const input = getInput$1(popup, inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    if (!params.input) {
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (inputContainer) {
      applyCustomClass(inputContainer, params, 'input');
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder && params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */
  const getInputContainer = inputType => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    return getDirectChildByClass(popup, swalClasses[(/** @type {SwalClass} */inputType)] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
  (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder || params.inputLabel);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, Boolean(params.footer), 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);

    // Re-adjust the success icon on system theme change
    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQueryList.addEventListener('change', adjustSuccessIconBackgroundColor);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  /**
   *
   * @param {SweetAlertOptions} params
   * @returns {string}
   */
  const successIconHtml = params => `
  ${params.animation ? '<div class="swal2-success-circular-line-left"></div>' : ''}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${params.animation ? '<div class="swal2-success-fix"></div>' : ''}
  ${params.animation ? '<div class="swal2-success-circular-line-right"></div>' : ''}
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    let oldContent = icon.innerHTML;
    let newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml(params);
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  let dragging = false;
  let mousedownX = 0;
  let mousedownY = 0;
  let initialX = 0;
  let initialY = 0;

  /**
   * @param {HTMLElement} popup
   */
  const addDraggableListeners = popup => {
    popup.addEventListener('mousedown', down);
    document.body.addEventListener('mousemove', move);
    popup.addEventListener('mouseup', up);
    popup.addEventListener('touchstart', down);
    document.body.addEventListener('touchmove', move);
    popup.addEventListener('touchend', up);
  };

  /**
   * @param {HTMLElement} popup
   */
  const removeDraggableListeners = popup => {
    popup.removeEventListener('mousedown', down);
    document.body.removeEventListener('mousemove', move);
    popup.removeEventListener('mouseup', up);
    popup.removeEventListener('touchstart', down);
    document.body.removeEventListener('touchmove', move);
    popup.removeEventListener('touchend', up);
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const down = event => {
    const popup = getPopup();
    if (event.target === popup || getIcon().contains(/** @type {HTMLElement} */event.target)) {
      dragging = true;
      const clientXY = getClientXY(event);
      mousedownX = clientXY.clientX;
      mousedownY = clientXY.clientY;
      initialX = parseInt(popup.style.insetInlineStart) || 0;
      initialY = parseInt(popup.style.insetBlockStart) || 0;
      addClass(popup, 'swal2-dragging');
    }
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const move = event => {
    const popup = getPopup();
    if (dragging) {
      let {
        clientX,
        clientY
      } = getClientXY(event);
      popup.style.insetInlineStart = `${initialX + (clientX - mousedownX)}px`;
      popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
    }
  };
  const up = () => {
    const popup = getPopup();
    dragging = false;
    removeClass(popup, 'swal2-dragging');
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   * @returns {{ clientX: number, clientY: number }}
   */
  const getClientXY = event => {
    let clientX = 0,
      clientY = 0;
    if (event.type.startsWith('mouse')) {
      clientX = /** @type {MouseEvent} */event.clientX;
      clientY = /** @type {MouseEvent} */event.clientY;
    } else if (event.type.startsWith('touch')) {
      clientX = /** @type {TouchEvent} */event.touches[0].clientX;
      clientY = /** @type {TouchEvent} */event.touches[0].clientY;
    }
    return {
      clientX,
      clientY
    };
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      const loader = getLoader();
      if (loader) {
        popup.insertBefore(loader, getIcon());
      }
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
    if (params.draggable && !params.toast) {
      addClass(popup, swalClasses.draggable);
      addDraggableListeners(popup);
    } else {
      removeClass(popup, swalClasses.draggable);
      removeDraggableListeners(popup);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    const showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    // TODO: remove in the next major
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    const {
      progressSteps,
      currentProgressStep
    } = params;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, Boolean(params.title || params.titleText), 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    const popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
    globalState.eventEmitter.emit('didRender', popup);
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @type {Record<DismissReason, DismissReason>} */
  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const addKeydownHandler = (globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(innerParams, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  const setFocus = (index, increment) => {
    var _dom$getPopup;
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // shift + tab when .swal2-popup is focused
      if (index === -2) {
        index = focusableElements.length - 1;
      }

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const keydownHandler = (innerParams, event, dismissWith) => {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    const input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const actions = getActions();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (let i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    event.preventDefault();
    if (callIfFunction(innerParams.allowEscapeKey)) {
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const container = getContainer();
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.contains(container)) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  const iOSfix = () => {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    const htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && !selfOrParentIsScrollable(target, htmlContainer) &&
    // #2823
    target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {object} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  let previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  const replaceScrollbarWithPadding = initialBodyOverflow => {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoReplaceScrollbarWithPadding = () => {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = `${previousBodyPadding}px`;
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {() => void} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {SweetAlertResult | undefined} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {Error | string} error
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {SweetAlertResult | undefined} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    var _globalState$eventEmi;
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willClose', popup);
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {() => void} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    /**
     * @param {AnimationEvent | TransitionEvent} e
     */
    const swalCloseAnimationFinished = function (e) {
      if (e.target === popup) {
        var _globalState$swalClos;
        (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === void 0 || _globalState$swalClos.call(globalState);
        delete globalState.swalCloseEventFinishedCallback;
        popup.removeEventListener('animationend', swalCloseAnimationFinished);
        popup.removeEventListener('transitionend', swalCloseAnimationFinished);
      }
    };
    popup.addEventListener('animationend', swalCloseAnimationFinished);
    popup.addEventListener('transitionend', swalCloseAnimationFinished);
  };

  /**
   * @param {SweetAlert} instance
   * @param {() => void} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      var _globalState$eventEmi2;
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didClose');
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal();
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {*} inputOptions
     */
    const processInputOptions = inputOptions => {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    const select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement('input');
      const radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {*} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  const formatInputOptions = inputOptions => {
    /** @type {InputOptionFlattened[]} */
    const result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }
    const input = instance.getInput();
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close(/** @type SweetAlertResult */{
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close(/** @type SweetAlertResult */{
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const succeedWith = (instance, value) => {
    instance.close(/** @type SweetAlertResult */{
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    const innerParams = privateProps.innerParams.get(this);
    const domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    const popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    draggable: false,
    animation: true,
    theme: 'light',
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true,
    topLayer: false
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'theme', 'willClose'];

  /** @type {Record<string, string | undefined>} */
  const deprecatedParams = {
    allowEnterKey: undefined
  };
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'draggable', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    const isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    if (params.theme && !['light', 'dark', 'auto', 'minimal', 'borderless', 'bootstrap-4', 'bootstrap-4-light', 'bootstrap-4-dark', 'bootstrap-5', 'bootstrap-5-light', 'bootstrap-5-dark', 'material-ui', 'material-ui-light', 'material-ui-dark', 'embed-iframe', 'bulma', 'bulma-light', 'bulma-dark'].includes(params.theme)) {
      warn(`Invalid theme "${params.theme}"`);
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const container = getContainer();
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    showWarningsForParams(updatedParams);
    container.dataset['swal2Theme'] = updatedParams.theme;
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    globalState.eventEmitter.emit('didDestroy');
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handlePopupClick = (innerParams, domCache, dismissWith) => {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleToastClick = (innerParams, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  let ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = () => {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = e => {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = () => {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleModalClick = (innerParams, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = args => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire(...args) {
    return new this(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  const increaseTimer = ms => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  // Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957

  class EventEmitter {
    constructor() {
      /** @type {Events} */
      this.events = {};
    }

    /**
     * @param {string} eventName
     * @returns {EventHandlers}
     */
    _getHandlersByEventName(eventName) {
      if (typeof this.events[eventName] === 'undefined') {
        // not Set because we need to keep the FIFO order
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
        this.events[eventName] = [];
      }
      return this.events[eventName];
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    on(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      if (!currentHandlers.includes(eventHandler)) {
        currentHandlers.push(eventHandler);
      }
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    once(eventName, eventHandler) {
      /**
       * @param {Array} args
       */
      const onceFn = (...args) => {
        this.removeListener(eventName, onceFn);
        eventHandler.apply(this, args);
      };
      this.on(eventName, onceFn);
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     */
    emit(eventName, ...args) {
      this._getHandlersByEventName(eventName).forEach(
      /**
       * @param {EventHandler} eventHandler
       */
      eventHandler => {
        try {
          eventHandler.apply(this, args);
        } catch (error) {
          console.error(error);
        }
      });
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    removeListener(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      const index = currentHandlers.indexOf(eventHandler);
      if (index > -1) {
        currentHandlers.splice(index, 1);
      }
    }

    /**
     * @param {string} eventName
     */
    removeAllListeners(eventName) {
      if (this.events[eventName] !== undefined) {
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
        this.events[eventName].length = 0;
      }
    }
    reset() {
      this.events = {};
    }
  }

  globalState.eventEmitter = new EventEmitter();

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const on = (eventName, eventHandler) => {
    globalState.eventEmitter.on(eventName, eventHandler);
  };

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const once = (eventName, eventHandler) => {
    globalState.eventEmitter.once(eventName, eventHandler);
  };

  /**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */
  const off = (eventName, eventHandler) => {
    // Remove all handlers for all events
    if (!eventName) {
      globalState.eventEmitter.reset();
      return;
    }
    if (eventHandler) {
      // Remove a specific handler
      globalState.eventEmitter.removeListener(eventName, eventHandler);
    } else {
      // Remove all handlers for a specific event
      globalState.eventEmitter.removeAllListeners(eventName);
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    off: off,
    on: on,
    once: once,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  class Timer {
    /**
     * @param {() => void} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    stop() {
      if (this.started && this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {boolean}
     */
    isRunning() {
      return this.running;
    }
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? (/** @type {HTMLTemplateElement} */document.querySelector(params.template)) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, string | boolean | number>}
   */
  const getSwalParams = templateContent => {
    /** @type {Record<string, string | boolean | number>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, () => void>}
   */
  const getSwalFunctionParams = templateContent => {
    /** @type {Record<string, () => void>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, string | boolean>}
   */
  const getSwalButtons = templateContent => {
    /** @type {Record<string, string | boolean>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      if (!type || !['confirm', 'cancel', 'deny'].includes(type)) {
        return;
      }
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src') || undefined;
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width') || undefined;
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height') || undefined;
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt') || undefined;
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {object}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {object}
   */
  const getSwalInput = templateContent => {
    /** @type {object} */
    const result = {};
    /** @type {HTMLElement | null} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        if (!optionValue) {
          return;
        }
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, string>}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    /** @type {Record<string, string>} */
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement | null} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    globalState.eventEmitter.emit('willOpen', popup);
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    globalState.eventEmitter.emit('didOpen', popup);
  };

  /**
   * @param {AnimationEvent} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener('animationend', swalOpenAnimationFinished);
    popup.removeEventListener('transitionend', swalOpenAnimationFinished);
    container.style.overflowY = 'auto';

    // no-transition is added in init() in case one swal is opened right after another
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener('animationend', swalOpenAnimationFinished);
      popup.addEventListener('transitionend', swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(() => {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  let currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  class SweetAlert {
    /**
     * @param {...(SweetAlertOptions | string)} args
     * @this {SweetAlert}
     */
    constructor(...args) {
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, void 0);
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      const outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }
    _main(userParams, mixinParams = {}) {
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
        const {
          isAwaitingPromise
        } = globalState.currentInstance;
        globalState.currentInstance._destroy();
        if (!isAwaitingPromise) {
          swalPromiseResolve({
            isDismissed: true
          });
        }
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
      return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
    }
    finally(onFinally) {
      return _classPrivateFieldGet2(_promise, this).finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        instance.close({
          isDismissed: true,
          dismiss,
          isConfirmed: false,
          isDenied: false
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    // TODO: this is dumb, remove `allowEnterKey` param in the next major version
    if (!callIfFunction(innerParams.allowEnterKey)) {
      warnAboutDeprecation('allowEnterKey');
      blurActiveElement();
      return;
    }
    if (focusAutofocus(domCache)) {
      return;
    }
    if (focusButton(domCache, innerParams)) {
      return;
    }
    setFocus(-1, 1);
  };

  /**
   * @param {DomCache} domCache
   * @returns {boolean}
   */
  const focusAutofocus = domCache => {
    const autofocusElements = Array.from(domCache.popup.querySelectorAll('[autofocus]'));
    for (const autofocusElement of autofocusElements) {
      if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
        autofocusElement.focus();
        return true;
      }
    }
    return false;
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...(SweetAlertOptions | string | undefined)} args
     * @returns {SweetAlertResult | Promise<SweetAlertResult> | undefined}
     */
    SweetAlert[key] = function (...args) {
      if (currentInstance && currentInstance[key]) {
        return currentInstance[key](...args);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.26.3';

  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

/***/ }),

/***/ "./src/common/utils.ts":
/*!*****************************!*\
  !*** ./src/common/utils.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseButtonEnum: () => (/* binding */ MouseButtonEnum),
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

// ============================================================================
// 列挙体
// ============================================================================
// マウスボタンの列挙体
var MouseButtonEnum;
(function (MouseButtonEnum) {
    MouseButtonEnum[MouseButtonEnum["Left"] = 0] = "Left";
    MouseButtonEnum[MouseButtonEnum["Middle"] = 1] = "Middle";
    MouseButtonEnum[MouseButtonEnum["Right"] = 2] = "Right";
})(MouseButtonEnum || (MouseButtonEnum = {}));
// ============================================================================
// ユーティリティクラス
// ============================================================================
class Utils {
    // 確認ダイアログを表示してアクションを実行
    static confirmAction(message, action) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "確認",
            text: message,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "はい、実行します",
            cancelButtonText: "いいえ",
        }).then((result) => {
            if (result.isConfirmed) {
                action();
            }
        });
    }
    // エラーメッセージを表示する
    static errorAction(message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: "error",
            title: "Oops...",
            text: message,
            footer: "",
        });
    }
    // 位置に近い点を取得する
    static findPointAt(x, y, vertices, edges) {
        // 頂点を検索
        let point = Utils.findVertexAt(x, y, vertices);
        // 見つからない場合
        if (point == null) {
            // 制御点を検索
            point = Utils.findControlAt(x, y, edges);
        }
        return point;
    }
    // 位置に近い頂点を取得する
    static findVertexAt(x, y, vertices) {
        const foundVertex = vertices.find((vertex) => vertex.isNear(x, y));
        return foundVertex ? foundVertex : null;
    }
    // 位置に近い制御点を取得する
    static findControlAt(x, y, edges) {
        const foundControl = edges.find((edge) => edge.control.isNear(x, y));
        return foundControl ? foundControl.control : null;
    }
    // 位置に近い辺を取得する
    static findEdgeAt(x, y, edges) {
        const foundEdge = edges.find((edge) => edge.isNear(x, y));
        return foundEdge ? foundEdge : null;
    }
}


/***/ }),

/***/ "./src/component/AdjacencyMatrix.ts":
/*!******************************************!*\
  !*** ./src/component/AdjacencyMatrix.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdjacencyMatrix: () => (/* binding */ AdjacencyMatrix)
/* harmony export */ });
/* harmony import */ var _object_Edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/Edge */ "./src/object/Edge.ts");
/* harmony import */ var _object_Vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/Vertex */ "./src/object/Vertex.ts");


// ============================================================================
// 隣接行列クラス
// ============================================================================
class AdjacencyMatrix {
    // 隣接行列
    matrix = null;
    // k3,3探索結果
    resultK33 = null;
    // k5探索結果
    resultK5 = null;
    constructor(arg1, arg2) {
        if (arg1 === null) {
            throw new Error("Null argument passed to the constructor");
        }
        else if (Array.isArray(arg1) && arg1.every((item) => typeof item === "number") && arg2 === undefined) {
            this.matrix = this.generateMatrix(arg1);
        }
        else if (Array.isArray(arg1) && arg1.every((item) => item instanceof _object_Vertex__WEBPACK_IMPORTED_MODULE_1__.Vertex) && Array.isArray(arg2) && arg2.every((item) => item instanceof _object_Edge__WEBPACK_IMPORTED_MODULE_0__.Edge)) {
            this.matrix = this.convertMatrix(arg1, arg2);
        }
        else {
            throw new Error("Invalid arguments passed to the constructor");
        }
        // K3,3
        this.resultK33 = this.searchK33();
        // K5
        this.resultK5 = this.searchK5();
    }
    // 隣接行列を取得する
    getMatrix() {
        return this.matrix;
    }
    // K33の探索結果を取得する
    getResultK33() {
        return this.resultK33;
    }
    // K5の探索結果を取得する
    getResultK5() {
        return this.resultK5;
    }
    // 描画可能化か
    isGraphical() {
        return this.matrix !== null;
    }
    // K33が存在するか
    hasK33() {
        return this.matrix !== null && this.resultK33 !== null;
    }
    // K5が存在するか
    hasK5() {
        return this.matrix !== null && this.resultK5 !== null;
    }
    // 平面グラフか
    isPlanarGraph() {
        return this.matrix !== null && this.resultK33 === null && this.resultK5 === null;
    }
    // 頂点オブジェクト配列から、隣接行列に変換
    convertMatrix(vertices, edges) {
        // 頂点の数に基づいて、初期値が0の隣接行列を生成
        const adjacencyMatrix = vertices.map(() => Array(vertices.length).fill(0));
        // 全ての辺に対して処理を実行
        edges.forEach((edge) => {
            const toIndex = vertices.indexOf(edge.to);
            const fromIndex = vertices.indexOf(edge.from);
            // 無向グラフの場合、対称性を保つために両方向に1を設定
            adjacencyMatrix[fromIndex][toIndex] = 1;
            adjacencyMatrix[toIndex][fromIndex] = 1;
        });
        return adjacencyMatrix;
    }
    // 次数配列から、隣接行列を生成する
    // ハベル・ハキミの定理を参考にしたが、引数の次数配列順で実行する
    // これにより、次数配列の順序が異なると結果も異なる
    generateMatrix(degreeSequence) {
        // 隣接行列の初期化: 全ての要素を0で埋めたn x nの行列を作成
        const n = degreeSequence.length;
        const matrix = degreeSequence.map(() => new Array(n).fill(0));
        // 残次数を格納する配列
        const remainingDegrees = [...degreeSequence];
        // 頂点インデックス配列を生成
        const connections = Array.from({ length: n }, (_, index) => index);
        // 各頂点に対して接続していく
        for (let i = 0; i < n; i++) {
            if (remainingDegrees[i] > 0) {
                // 残り次数が最大でかつインデックスが小さい順に接続対象をソート
                connections.sort((a, b) => {
                    if (remainingDegrees[a] === remainingDegrees[b])
                        return a - b;
                    return remainingDegrees[b] - remainingDegrees[a];
                });
                let attempts = remainingDegrees[i];
                for (let j = 0, k = 0; k < attempts && j < n; j++) {
                    const connIndex = connections[j];
                    // 自分自身を除く、残り次数が正の頂点と接続
                    if (i !== connIndex && remainingDegrees[connIndex] > 0 && matrix[i][connIndex] === 0) {
                        matrix[i][connIndex] = 1;
                        matrix[connIndex][i] = 1;
                        remainingDegrees[connIndex]--;
                        remainingDegrees[i]--;
                        k++;
                    }
                }
                // 接続対象が足りない場合は実現不可能
                if (remainingDegrees[i] > 0) {
                    return null;
                }
            }
        }
        // 生成された隣接行列を返す
        return matrix;
    }
    // K3,3を探索して、存在する場合は、K3,3を構成するindex配列を取得する
    searchK33() {
        // 隣接行列化できてない場合は、判定対象外
        if (!this.matrix) {
            return null;
        }
        // 頂点数６未満は、判定対象外
        const n = this.matrix.length;
        if (n < 6) {
            return null;
        }
        // 隣接行列をbigintのビットマスクとして表現する
        const adjacencyMasks = [];
        for (let i = 0; i < n; i++) {
            let mask = 0n;
            for (let j = 0; j < n; j++) {
                // 接続情報に、ビットを立てる
                if (this.matrix[i][j]) {
                    mask |= 1n << BigInt(j);
                }
            }
            adjacencyMasks.push(mask);
        }
        // バックトラッキング法による K3,3 探索
        const firstGroup = this.backtrack(adjacencyMasks, n, 3);
        if (firstGroup) {
            // 第二グループの生成
            const secondIntersection = adjacencyMasks[firstGroup[0]] & adjacencyMasks[firstGroup[1]] & adjacencyMasks[firstGroup[2]];
            return [firstGroup, this.getIndicesFromBigInt(secondIntersection)];
        }
        else {
            return null;
        }
    }
    // K5を探索して、存在する場合は、K5を構成するindex配列を取得する
    searchK5() {
        // 隣接行列化できてない場合は、判定対象外
        if (!this.matrix) {
            return null;
        }
        // 頂点数５未満は、判定対象外
        const n = this.matrix.length;
        if (n < 5) {
            return null;
        }
        // 隣接行列をbigintのビットマスクとして表現する
        const adjacencyMasks = [];
        for (let i = 0; i < n; i++) {
            let mask = 0n;
            for (let j = 0; j < n; j++) {
                // 接続情報と、対角成分に、ビットを立てる
                if (this.matrix[i][j] || i === j) {
                    mask |= 1n << BigInt(j);
                }
            }
            adjacencyMasks.push(mask);
        }
        // バックトラッキングによる K5 探索
        return this.backtrack(adjacencyMasks, n, 5);
    }
    // バックトラッキング探索（再帰関数）
    backtrack(adjacencyMasks, totalNum, selectNum, start = 0, count = 0, selected = []) {
        // 探索結果が見つかった
        if (count === selectNum) {
            return selected.map((info) => info.index);
        }
        // 探索する
        for (let i = start; i < totalNum; i++) {
            // 残りの探索数が不足する場合は、探索不要
            if (count + totalNum - i < selectNum) {
                break;
            }
            // 論理積算出
            const newIntersection = count === 0 ? adjacencyMasks[i] : selected[count - 1].intersection & adjacencyMasks[i];
            // 論理積のビット数が指定数未満は次のindexへ
            if (this.getIndicesFromBigInt(newIntersection).length >= selectNum) {
                selected.push({ index: i, intersection: newIntersection });
                // 探索深度を増やす
                const result = this.backtrack(adjacencyMasks, totalNum, selectNum, i + 1, count + 1, selected);
                // 探索状態を戻す
                selected.pop();
                //　結果があれば呼び出しもとへ返却
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }
    // ビットマスクでビットインデックスの配列を取得する
    getIndicesFromBigInt(value) {
        const indices = [];
        let index = 0;
        while (value > 0n) {
            if (value & 1n) {
                indices.push(index);
            }
            value >>= 1n;
            index += 1;
        }
        return indices;
    }
}


/***/ }),

/***/ "./src/component/DegreeSequence.ts":
/*!*****************************************!*\
  !*** ./src/component/DegreeSequence.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DegreeSeqEnum: () => (/* binding */ DegreeSeqEnum),
/* harmony export */   DegreeSequence: () => (/* binding */ DegreeSequence)
/* harmony export */ });
/* harmony import */ var _AdjacencyMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdjacencyMatrix */ "./src/component/AdjacencyMatrix.ts");

// ============================================================================
// 列挙体
// ============================================================================
var DegreeSeqEnum;
(function (DegreeSeqEnum) {
    DegreeSeqEnum["Array"] = "\u6B21\u6570\u914D\u5217";
    DegreeSeqEnum["RunLength"] = "\u30E9\u30F3\u30EC\u30F3\u30B0\u30B9\u5727\u7E2E";
})(DegreeSeqEnum || (DegreeSeqEnum = {}));
// ============================================================================
// 次数配列クラス
// ============================================================================
class DegreeSequence {
    // 次数配列
    sequence;
    // 隣接行列
    adjacencyMatrix = null;
    constructor() {
        this.sequence = [];
    }
    // 次数配列として有効か
    isValid() {
        // 最大次数は頂点数より小さい
        const maxDegree = Math.max(...this.sequence);
        if (!(maxDegree < this.vertexCount())) {
            return false;
        }
        // 次数合計が偶数である
        if (!(this.totalDegree() % 2 == 0)) {
            return false;
        }
        return true;
    }
    // 頂点の数を取得する
    vertexCount() {
        return this.sequence.length;
    }
    // 辺の数を取得する
    edgeCount() {
        return Math.floor(this.totalDegree() / 2);
    }
    // 次数合計を取得する
    totalDegree() {
        const initialValue = 0;
        return this.sequence.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    }
    // 次数配列形式の文字列取得
    getArrayString() {
        return this.sequence.join(", ");
    }
    // ランレングス圧縮形式の文字列取得
    getRunLengthString() {
        if (this.sequence.length === 0)
            return "";
        let result = [];
        let current = this.sequence[0];
        let count = 1;
        for (let i = 1; i < this.sequence.length; i++) {
            if (this.sequence[i] === current) {
                count++;
            }
            else {
                result.push(`${current}*${count}`);
                current = this.sequence[i];
                count = 1;
            }
        }
        // 最後の要素を追加
        result.push(`${current}*${count}`);
        return result.join(", ");
    }
    // 頂点オブジェクト配列から、次数配列にセットする
    setVertices(vertices, edges) {
        this.sequence = vertices.map((vertex) => vertex.getDegree());
        // 隣接行列
        this.adjacencyMatrix = new _AdjacencyMatrix__WEBPACK_IMPORTED_MODULE_0__.AdjacencyMatrix(vertices, edges);
    }
    // 入力文字から、次数配列にセットする
    setValue(degreeMode, value) {
        let cleanedValue = value
            // 連続するカンマやアスタリスクを一つにする
            .replace(/([,*])\1+/g, "$1")
            // 最後のカンマやアスタリスクを削除
            .replace(/[,*]$/, "");
        // 文字列を、次数配列に変換
        switch (degreeMode) {
            case DegreeSeqEnum.Array:
                this.sequence = this.convertArrayStringToDegrees(cleanedValue);
                break;
            case DegreeSeqEnum.RunLength:
                this.sequence = this.convertRunLengthStringToDegrees(cleanedValue);
                break;
        }
    }
    // 次数配列から隣接行列を生成する
    generateAdjacencyMatrix() {
        // 隣接行列
        this.adjacencyMatrix = new _AdjacencyMatrix__WEBPACK_IMPORTED_MODULE_0__.AdjacencyMatrix(this.sequence);
        return this.adjacencyMatrix;
    }
    getAdjacencyMatrix() {
        return this.adjacencyMatrix;
    }
    // ランレングス圧縮形式の文字列から、次数配列に変換
    convertRunLengthStringToDegrees(input) {
        if (!input)
            return [];
        return input.split(",").reduce((acc, part) => {
            const [value, count] = part.split("*").map(Number);
            // 数が 0 でない場合のみ追加
            if (count !== 0) {
                for (let i = 0; i < count; i++) {
                    acc.push(value);
                }
            }
            return acc;
        }, []);
    }
    // 次数配列形式の文字列から、次数配列に変換
    convertArrayStringToDegrees(input) {
        return input
            .split(",")
            .filter((item) => item !== "")
            .map(Number);
    }
}


/***/ }),

/***/ "./src/component/GraphIO.ts":
/*!**********************************!*\
  !*** ./src/component/GraphIO.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphIO: () => (/* binding */ GraphIO)
/* harmony export */ });
/* harmony import */ var _object_Edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/Edge */ "./src/object/Edge.ts");
/* harmony import */ var _object_Vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/Vertex */ "./src/object/Vertex.ts");
// GraphIO.ts


// ============================================================================
// グラフ保存読込クラス
// ============================================================================
class GraphIO {
    graphManager;
    constructor(graphManager) {
        this.graphManager = graphManager;
    }
    // グラフの状態をJSONとして保存
    saveToJson() {
        const saveData = {
            vertices: this.graphManager.vertices.map((vertex, index) => ({
                id: index,
                x: vertex.x,
                y: vertex.y,
            })),
            edges: this.graphManager.edges.map((edge) => ({
                from: this.graphManager.vertices.indexOf(edge.from),
                to: this.graphManager.vertices.indexOf(edge.to),
                control: {
                    x: edge.control.x,
                    y: edge.control.y,
                },
            })),
            origin: { x: this.graphManager.origin.x, y: this.graphManager.origin.y },
            scale: this.graphManager.scale,
        };
        return JSON.stringify(saveData);
    }
    // JSONからグラフの状態をロード
    loadFromJson(jsonString) {
        const loadData = JSON.parse(jsonString);
        this.graphManager.vertices = loadData.vertices.map((vData) => new _object_Vertex__WEBPACK_IMPORTED_MODULE_1__.Vertex(vData.x, vData.y));
        this.graphManager.edges = loadData.edges.map((eData) => {
            const fromVertex = this.graphManager.vertices[eData.from];
            const toVertex = this.graphManager.vertices[eData.to];
            const edge = new _object_Edge__WEBPACK_IMPORTED_MODULE_0__.Edge(fromVertex, toVertex);
            edge.control.x = eData.control.x;
            edge.control.y = eData.control.y;
            return edge;
        });
        this.graphManager.origin = loadData.origin;
        this.graphManager.scale = loadData.scale;
        this.graphManager.currentZoomIndex = this.graphManager.zoomLevels.indexOf(loadData.scale);
        // 次数配列の更新
        this.graphManager.updateDegreeSequence(this.graphManager.vertices, this.graphManager.edges);
        this.graphManager.drawGraph();
    }
}


/***/ }),

/***/ "./src/component/GraphManager.ts":
/*!***************************************!*\
  !*** ./src/component/GraphManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeDrawingEnum: () => (/* binding */ EdgeDrawingEnum),
/* harmony export */   GraphLayoutEnum: () => (/* binding */ GraphLayoutEnum),
/* harmony export */   GraphManager: () => (/* binding */ GraphManager)
/* harmony export */ });
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/center.js");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/link.js");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/manyBody.js");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/simulation.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.ts");
/* harmony import */ var _object_Control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../object/Control */ "./src/object/Control.ts");
/* harmony import */ var _object_Edge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../object/Edge */ "./src/object/Edge.ts");
/* harmony import */ var _object_Vertex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../object/Vertex */ "./src/object/Vertex.ts");
/* harmony import */ var _DegreeSequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DegreeSequence */ "./src/component/DegreeSequence.ts");
/* harmony import */ var _GraphIO__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GraphIO */ "./src/component/GraphIO.ts");
/* harmony import */ var _HistoryManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HistoryManager */ "./src/component/HistoryManager.ts");








// ============================================================================
// 列挙体
// ============================================================================
// グラフレイアウトモードの列挙体
var GraphLayoutEnum;
(function (GraphLayoutEnum) {
    GraphLayoutEnum["ForceDirect"] = "\u529B\u6307\u5411";
    GraphLayoutEnum["Fixed"] = "\u56FA\u5B9A";
})(GraphLayoutEnum || (GraphLayoutEnum = {}));
// 辺の描画モードの列挙体
var EdgeDrawingEnum;
(function (EdgeDrawingEnum) {
    EdgeDrawingEnum["straightLine"] = "\u76F4\u7DDA";
    EdgeDrawingEnum["bezierCurve"] = "\u30DA\u30B8\u30A7\u66F2\u7DDA";
})(EdgeDrawingEnum || (EdgeDrawingEnum = {}));
// ============================================================================
// グラフクラス
// ============================================================================
class GraphManager {
    // キャンバス
    canvas;
    MAX_CANVAS_WIDTH = 20000;
    MAX_CANVAS_HEIGHT = 10000;
    ctx;
    // グリッド表示状態
    showGrid = true;
    // グラフレイアウトモード
    layoutMode = GraphLayoutEnum.ForceDirect;
    edgeDrawing = EdgeDrawingEnum.straightLine;
    // マウス位置
    mouse = { x: 0, y: 0 };
    // オブジェクト管理
    vertices = [];
    edges = [];
    degreeSequence = new _DegreeSequence__WEBPACK_IMPORTED_MODULE_8__.DegreeSequence();
    // 履歴管理
    historyManager = new _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.HistoryManager();
    // オブジェクト操作
    selectedVertices = [];
    selectedEdges = [];
    draggingPoint = null;
    activeEdge = null;
    // ズーム機能関連
    origin = { x: 0, y: 0 };
    scale = 1;
    zoomLevels = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.75, 2.0, 2.5, 3.0, 3.5, 4.0];
    currentZoomIndex = this.zoomLevels.indexOf(1.0);
    // パン機能
    isDragging = false;
    lastPos = { x: 0, y: 0 };
    // コールバック関数
    updateDegreeSequence;
    updateInfo;
    // 頂点情報表示
    showIndex = true;
    showDegree = false;
    // オブジェクト操作
    canTransForm = true;
    canAddRemove = true;
    // 保存読込処理
    graphIO;
    constructor(canvas, updateDegreeSequence, updateInfo) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.updateDegreeSequence = updateDegreeSequence;
        this.updateInfo = updateInfo;
        this.setupEvents();
        this.resizeCanvas();
        this.graphIO = new _GraphIO__WEBPACK_IMPORTED_MODULE_9__.GraphIO(this);
    }
    // ============================================================================
    // イベント処理
    // ============================================================================
    // イベント登録
    setupEvents() {
        this.canvas.addEventListener("dblclick", this.handleDoubleClick.bind(this));
        this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
        this.canvas.addEventListener("mouseout", this.handleMouseOut.bind(this));
        this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
        this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
        this.canvas.addEventListener("contextmenu", this.handleContextMenu.bind(this));
        this.canvas.addEventListener("wheel", this.handleWheel.bind(this));
        window.addEventListener("resize", this.resizeCanvas.bind(this));
        this.setGraphLayout(this.layoutMode);
    }
    // ダブルクリック
    handleDoubleClick(e) {
        if (this.canAddRemove) {
            this.mouse = this.getMousePosition(e);
            this.addVertexAction(this.mouse.x, this.mouse.y);
            this.drawGraph();
        }
    }
    // マウスムーブ
    handleMouseMove(e) {
        this.mouse = this.getMousePosition(e);
        // 頂点か制御点の移動
        if (this.draggingPoint && this.canTransForm) {
            this.draggingPoint.x = this.mouse.x;
            this.draggingPoint.y = this.mouse.y;
            this.canvas.style.cursor = "move";
        }
        // キャンバスの移動
        else if (this.isDragging) {
            const dx = e.clientX - this.lastPos.x;
            const dy = e.clientY - this.lastPos.y;
            this.origin.x += dx;
            this.origin.y += dy;
            // 移動制限
            this.limitCanvasPan();
            this.lastPos.x = e.clientX;
            this.lastPos.y = e.clientY;
        }
        // 頂点選択済みの場合
        else if (this.selectedVertices.length > 0) {
            this.canvas.style.cursor = "crosshair";
        }
        else if (this.canTransForm) {
            // 辺の近くの場合
            const edge = _common_utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
            edge && (this.activeEdge = edge);
            // 頂点か制御点の近くの場合
            const point = _common_utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findPointAt(this.mouse.x, this.mouse.y, this.vertices, this.edges);
            this.canvas.style.cursor = point ? "move" : "default";
        }
        this.drawGraph();
    }
    // マウスアウト
    handleMouseOut(e) {
        this.canvas.style.cursor = "default";
        this.handleMouseUp(e);
    }
    // マウスダウン
    handleMouseDown(e) {
        // 左クリック以外は処理なし
        if (e.button !== _common_utils__WEBPACK_IMPORTED_MODULE_4__.MouseButtonEnum.Left) {
            return;
        }
        // Shiftキーが押されている場合、選択をトグルする
        const shiftKey = e.shiftKey;
        this.mouse = this.getMousePosition(e);
        const vertex = _common_utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
        const edge = _common_utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
        const control = _common_utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findControlAt(this.mouse.x, this.mouse.y, this.edges);
        // 判定のため一時退避
        const tempSelectedVertices = this.selectedVertices;
        // 選択状態の初期化
        if (!shiftKey) {
            this.initSelected();
        }
        // 制御点の場合（ペジェ曲線の場合、選択可能）
        if (control && this.edgeDrawing === EdgeDrawingEnum.bezierCurve) {
            // ドラッグ開始
            this.draggingPoint = control;
        }
        // 頂点の場合
        else if (vertex) {
            if (!shiftKey) {
                this.initSelected();
            }
            if (this.selectedVertices.includes(vertex)) {
                vertex.isSelected = false;
                this.selectedVertices = this.selectedVertices.filter((v) => v !== vertex);
            }
            else {
                // 頂点を選択済みにする
                vertex.isSelected = true;
                this.selectedVertices.push(vertex);
            }
            if (tempSelectedVertices.length > 0) {
                // 選択済み頂点と、異なる頂点が取得できた場合
                if (!tempSelectedVertices.includes(vertex) && this.canAddRemove) {
                    this.addEdgeAction(tempSelectedVertices, vertex);
                }
            }
            // カーソルを選択用に変更
            this.canvas.style.cursor = "crosshair";
            // ドラッグ開始
            this.draggingPoint = vertex;
        }
        // 辺の場合
        else if (edge) {
            if (!shiftKey) {
                this.initSelected();
            }
            if (this.selectedEdges.includes(edge)) {
                edge.isSelected = false;
                this.selectedEdges = this.selectedEdges.filter((e) => e !== edge);
            }
            else {
                // 辺を選択済みにする
                edge.isSelected = true;
                this.selectedEdges.push(edge);
            }
        }
        // キャンバスの選択
        else {
            this.isDragging = true;
            this.lastPos.x = e.clientX;
            this.lastPos.y = e.clientY;
        }
        this.drawGraph();
    }
    // マウスアップ
    handleMouseUp(e) {
        if (this.draggingPoint instanceof _object_Control__WEBPACK_IMPORTED_MODULE_5__.Control) {
            // バウンディングボックスの再算出
        }
        this.draggingPoint = null;
        this.isDragging = false;
        this.drawGraph();
    }
    // 右クリック
    handleContextMenu(e) {
        // コンテキストメニューを表示させない
        e.preventDefault();
        // 選択状態の初期化
        this.initSelected();
        // 追加削除できない場合は、処理終了
        if (!this.canAddRemove) {
            return;
        }
        this.mouse = this.getMousePosition(e);
        const vertex = _common_utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
        const edge = _common_utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
        // 削除処理
        if (vertex) {
            // 頂点を削除
            this.deleteVertexAction(vertex);
        }
        else if (edge) {
            // 辺を削除
            this.deleteEdgeAction(edge);
        }
        this.drawGraph();
    }
    // マウスホイール
    handleWheel(e) {
        e.preventDefault();
        this.mouse = this.getMousePosition(e);
        // ズームレベルの更新
        if (e.deltaY < 0) {
            // ズームイン
            this.currentZoomIndex = Math.min(this.currentZoomIndex + 1, this.zoomLevels.length - 1);
        }
        else {
            // ズームアウト
            this.currentZoomIndex = Math.max(this.currentZoomIndex - 1, 0);
        }
        // 新しいスケールを取得し、スケールが変更されたか確認
        const newScale = this.zoomLevels[this.currentZoomIndex];
        if (newScale !== this.scale) {
            // マウス位置をズームイン、ズームアウトする
            // scaleのキャンバスのマウス位置の割合と、newScaleのキャンバスのマウス位置の割合が同じため下記の式が成り立つ
            // (mouse + origin / scale) / (canvas / scale) = (mouse + newOrigin / newScale) / (canvas / newScale)
            // これを newOrigin について解くと、次の通りになる
            this.origin.x = this.mouse.x * (this.scale - newScale) + this.origin.x;
            this.origin.y = this.mouse.y * (this.scale - newScale) + this.origin.y;
            this.scale = newScale;
            // 移動制限
            this.limitCanvasPan();
        }
        this.drawGraph();
    }
    // ============================================================================
    // 処理関数
    // ============================================================================
    // マウス位置を取得する
    getMousePosition(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left - this.origin.x) / this.scale;
        const y = (e.clientY - rect.top - this.origin.y) / this.scale;
        return { x, y };
    }
    // 選択状態を初期化する
    initSelected() {
        this.selectedVertices.forEach((v) => (v.isSelected = false));
        this.selectedEdges.forEach((e) => (e.isSelected = false));
        this.selectedVertices = [];
        this.selectedEdges = [];
        this.canvas.style.cursor = "default";
    }
    // キャンバスの移動制限
    limitCanvasPan() {
        const maxX = this.MAX_CANVAS_WIDTH * this.scale - this.canvas.width;
        const maxY = this.MAX_CANVAS_HEIGHT * this.scale - this.canvas.height;
        this.origin.x = this.origin.x + maxX < 0 ? -maxX : this.origin.x;
        this.origin.y = this.origin.y + maxY < 0 ? -maxY : this.origin.y;
        this.origin.x = 0 < this.origin.x ? 0 : this.origin.x;
        this.origin.y = 0 < this.origin.y ? 0 : this.origin.y;
    }
    // リサイズ
    resizeCanvas() {
        this.canvas.width = window.innerWidth * 0.8;
        this.canvas.height = window.innerHeight - 90;
        // 中心を初期描画位置にする
        this.origin.x = (this.MAX_CANVAS_WIDTH - this.canvas.width / this.scale) / 2;
        this.origin.y = (this.MAX_CANVAS_HEIGHT - this.canvas.height / this.scale) / 2;
        // 座標をピクセルに変換し、値をマイナス変換をする（originの仕様）
        this.origin.x = -this.origin.x * this.scale;
        this.origin.y = -this.origin.y * this.scale;
        this.drawGraph();
    }
    // グラフの初期化
    initGraph() {
        this.vertices = [];
        this.edges = [];
        this.initSelected();
        this.scale = 1;
        this.currentZoomIndex = 10;
        this.draggingPoint = null;
        this.activeEdge = null;
        this.isDragging = false;
        this.lastPos = { x: 0, y: 0 };
        // 履歴の初期化
        this.historyManager.init();
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices, this.edges);
        this.resizeCanvas();
    }
    // TODO:辺をすべて直線にする
    straightenEdges() {
        for (let edge of this.edges) {
            edge.straightenEdge();
        }
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices, this.edges);
        this.drawGraph();
    }
    // ============================================================================
    // 操作処理
    // ============================================================================
    // 頂点を追加するアクション
    addVertexAction(x, y) {
        const vertex = new _object_Vertex__WEBPACK_IMPORTED_MODULE_7__.Vertex(x, y);
        this.addVertex(vertex);
        // 履歴スタック
        this.historyManager.addAction({ type: _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Add, target: vertex, index: this.vertices.indexOf(vertex) });
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices, this.edges);
    }
    // 辺を追加するアクション
    addEdgeAction(selectedVertices, to) {
        const actions = [];
        let isAddEdge = false;
        for (const from of selectedVertices) {
            // 異なる２頂点か？
            if (from && to && from !== to) {
                // 重複辺を取得
                const duplicateEdge = this.edges.find((edge) => (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from));
                // 重複辺は削除
                if (duplicateEdge) {
                    // 履歴スタック
                    actions.push({ type: _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Delete, target: duplicateEdge, index: this.edges.indexOf(duplicateEdge) });
                    this.deleteEdge(duplicateEdge);
                }
                // 新しい辺を追加
                const edge = new _object_Edge__WEBPACK_IMPORTED_MODULE_6__.Edge(from, to);
                this.addEdge(edge);
                // 履歴スタック
                actions.push({ type: _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Add, target: edge, index: this.edges.indexOf(edge) });
                isAddEdge = true;
            }
        }
        // 辺を追加した場合の処理
        if (isAddEdge) {
            // 履歴スタック
            this.historyManager.addGropuedAction({ actions: actions });
            // 次数配列の更新
            this.updateDegreeSequence(this.vertices, this.edges);
        }
    }
    // 頂点を削除するアクション
    deleteVertexAction(vertex) {
        // 履歴配列
        const actions = [];
        // 配列コピー（削除でindexが変わらないように）
        const vertexEdges = [...vertex.edges];
        // 頂点に接続された辺を削除
        vertexEdges.forEach((edge) => {
            // 履歴スタック
            actions.push({ type: _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Delete, target: edge, index: this.edges.indexOf(edge) });
            this.deleteEdge(edge);
        });
        // 履歴スタック
        actions.push({ type: _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Delete, target: vertex, index: this.vertices.indexOf(vertex) });
        this.deleteVertex(vertex);
        this.historyManager.addGropuedAction({ actions: actions });
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices, this.edges);
    }
    // 辺を削除するアクション
    deleteEdgeAction(edge) {
        // 履歴スタック
        this.historyManager.addAction({ type: _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Delete, target: edge, index: this.edges.indexOf(edge) });
        this.deleteEdge(edge);
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices, this.edges);
    }
    // 頂点追加
    addVertex(vertex, index = this.vertices.length) {
        this.vertices.splice(index, 0, vertex);
    }
    // 頂点削除
    deleteVertex(vertex) {
        this.vertices.splice(this.vertices.indexOf(vertex), 1);
    }
    // 辺追加
    addEdge(edge, index = this.edges.length) {
        this.edges.splice(index, 0, edge);
        edge.from.addEdge(edge);
        edge.to.addEdge(edge);
    }
    // 辺削除
    deleteEdge(edge) {
        edge.from.deleteEdge(edge);
        edge.to.deleteEdge(edge);
        this.edges.splice(this.edges.indexOf(edge), 1);
    }
    // 戻せるか
    canUndo() {
        return this.historyManager.canUndo();
    }
    // 戻す
    undo() {
        if (!this.historyManager.canUndo()) {
            return;
        }
        // 履歴情報を取得し、逆操作するためリバースする
        const actions = [...this.historyManager.undo().actions].reverse();
        // Undoを実行
        actions.forEach((action) => {
            if (action.target instanceof _object_Vertex__WEBPACK_IMPORTED_MODULE_7__.Vertex) {
                // 頂点Actionのundo
                const vertex = action.target;
                switch (action.type) {
                    case _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Add:
                        this.deleteVertex(vertex);
                        break;
                    case _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Delete:
                        this.addVertex(vertex, action.index);
                        vertex.edges.forEach((edge) => {
                            this.addEdge(edge, action.index);
                        });
                        break;
                }
            }
            else if (action.target instanceof _object_Edge__WEBPACK_IMPORTED_MODULE_6__.Edge) {
                // 辺ActionのUndo
                const edge = action.target;
                switch (action.type) {
                    case _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Add:
                        this.deleteEdge(edge);
                        break;
                    case _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Delete:
                        this.addEdge(edge, action.index);
                }
            }
        });
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices, this.edges);
        this.drawGraph();
    }
    // やり直せるか
    canRedo() {
        return this.historyManager.canRedo();
    }
    // やり直す
    redo() {
        if (!this.historyManager.canRedo()) {
            return;
        }
        // 履歴情報を取得
        const groupedAction = this.historyManager.redo();
        // Redoを実行
        groupedAction.actions.forEach((action) => {
            if (action.target instanceof _object_Vertex__WEBPACK_IMPORTED_MODULE_7__.Vertex) {
                // 頂点ActionのRedo
                const vertex = action.target;
                switch (action.type) {
                    case _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Add:
                        this.addVertex(vertex);
                        break;
                    case _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Delete:
                        this.deleteVertex(vertex);
                        break;
                }
            }
            else if (action.target instanceof _object_Edge__WEBPACK_IMPORTED_MODULE_6__.Edge) {
                // 辺ActionのRedo
                const edge = action.target;
                switch (action.type) {
                    case _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Add:
                        this.addEdge(edge);
                        break;
                    case _HistoryManager__WEBPACK_IMPORTED_MODULE_10__.ActionType.Delete:
                        this.deleteEdge(edge);
                }
            }
        });
        // 次数配列の更新
        this.drawGraph();
    }
    // ============================================================================
    // 各種表示切り替え操作
    // ============================================================================
    // グリッド表示
    setShowGrid(showGrid) {
        this.showGrid = showGrid;
        this.drawGraph();
    }
    // グリッド表示するか
    isShowGrid() {
        return this.showGrid;
    }
    // グラフレイアウトモード
    setGraphLayout(graphLayout) {
        this.layoutMode = graphLayout;
        this.changeGraphLayout();
    }
    // グラフレイアウトモードが力指向か
    isGraphLayoutForceDirect() {
        return this.layoutMode === GraphLayoutEnum.ForceDirect;
    }
    // グラフレイアウトモードが固定か
    isGraphLayoutFixed() {
        return this.layoutMode === GraphLayoutEnum.Fixed;
    }
    // 辺の描画モード
    setEdgeDrawing(edgeDrawing) {
        this.edgeDrawing = edgeDrawing;
        this.drawGraph();
    }
    // 辺の描画モードが直線か
    isEdgeDrawingStraightLine() {
        return this.edgeDrawing === EdgeDrawingEnum.straightLine;
    }
    // 辺の描画モードがペジェ曲線か
    isEdgeDrawingBezierCurve() {
        return this.edgeDrawing === EdgeDrawingEnum.bezierCurve;
    }
    // 頂点indexの表示
    setShowIndex(showIndex) {
        this.showIndex = showIndex;
        this.drawGraph();
    }
    // 頂点indexの表示状態を取得
    isShowIndex() {
        return this.showIndex;
    }
    // 頂点次数の表示
    setShowDegree(showDegree) {
        this.showDegree = showDegree;
        this.drawGraph();
    }
    // 頂点次数の表示状態を取得
    isShowDegree() {
        return this.showDegree;
    }
    // オブジェクトの移動変形可否を取得
    getCanTransForm() {
        return this.canTransForm;
    }
    // オブジェクトの移動変形可否をセット
    setCanTransForm(canTransForm) {
        this.canTransForm = canTransForm;
        this.drawGraph();
    }
    // オブジェクトの追加削除可否を取得
    getCanAddRemove() {
        return this.canAddRemove;
    }
    // オブジェクトの追加削除可否をセット
    setCanAddRemove(canAddRemove) {
        this.canAddRemove = canAddRemove;
        this.drawGraph();
    }
    // ============================================================================
    // 描画処理
    // ============================================================================
    // グリッドの描画
    drawGrid() {
        if (!this.showGrid) {
            return;
        }
        const gridSize = 100;
        const gridCountX = Math.ceil(this.MAX_CANVAS_WIDTH / gridSize);
        const gridCountY = Math.ceil(this.MAX_CANVAS_HEIGHT / gridSize);
        this.ctx.save();
        this.ctx.strokeStyle = "#e0e0e0";
        this.ctx.lineWidth = 1;
        // グリッド線を描画
        for (let i = 0; i <= gridCountX; i++) {
            const x = i * gridSize;
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.MAX_CANVAS_HEIGHT);
            this.ctx.stroke();
        }
        for (let j = 0; j <= gridCountY; j++) {
            const y = j * gridSize;
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.MAX_CANVAS_WIDTH, y);
            this.ctx.stroke();
        }
        this.ctx.restore();
    }
    // グラフ描画
    drawGraph() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.origin.x, this.origin.y);
        this.ctx.scale(this.scale, this.scale);
        // グリッドの描画
        this.drawGrid();
        // 力指向モードによって辺の描画を切り替える
        if (this.layoutMode === GraphLayoutEnum.Fixed && this.edgeDrawing === EdgeDrawingEnum.bezierCurve) {
            // ペジェ曲線の描画
            this.edges.forEach((edge) => edge.drawBezier(this.ctx, this.canTransForm));
            // 制御点の描画
            if (this.canTransForm) {
                this.activeEdge && this.edges.includes(this.activeEdge) && this.activeEdge.control.draw(this.ctx);
                this.draggingPoint instanceof _object_Control__WEBPACK_IMPORTED_MODULE_5__.Control && this.draggingPoint.draw(this.ctx);
            }
        }
        else {
            // 直線の描画
            this.edges.forEach((edge) => edge.draw(this.ctx));
        }
        // 頂点の描画
        this.vertices.forEach((vertex, index) => vertex.draw(this.ctx, this.showIndex, index, this.showDegree));
        this.ctx.restore();
        // 画面上の情報更新
        this.updateInfo({
            vertices: this.vertices,
            edges: this.edges,
            degreeSequence: this.degreeSequence,
            origin: this.origin,
            scale: this.scale,
        });
        // 情報表示（倍率と座標）
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.font = "16px Sans-serif";
        const zoomText = `倍率: ${this.scale.toFixed(2)}x  座標: (${this.mouse.x.toFixed(0)}, ${this.mouse.y.toFixed(0)})`;
        const zoomTextWidth = this.ctx.measureText(zoomText).width;
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, this.canvas.height - 30, zoomTextWidth + 20, 30);
        this.ctx.fillStyle = "black";
        this.ctx.fillText(zoomText, 10, this.canvas.height - 10);
        this.ctx.restore();
    }
    // ============================================================================
    // 力指向アルゴリズム
    // ============================================================================
    intervalId = null;
    // グラフレイアウトモード変更
    changeGraphLayout() {
        // 初期化
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        // 力指向モード、
        if (this.layoutMode === GraphLayoutEnum.ForceDirect) {
            this.edgeDrawing = EdgeDrawingEnum.straightLine;
            this.intervalId = setInterval(() => {
                this.updateForceDirectedLayout();
            }, 50);
        }
    }
    // 力指向レイアウトの更新
    updateForceDirectedLayout() {
        // 斥力
        const repulsionConstant = 200;
        // 引力
        const attractionConstant = 200;
        const maxDisplacement = 50;
        const minDistance = 10;
        // 初期変位を0で設定
        let displacements = this.vertices.map(() => ({ x: 0, y: 0 }));
        // 斥力
        this.vertices.forEach((from, i) => {
            this.vertices.forEach((to, j) => {
                if (i !== j) {
                    const dx = from.x - to.x;
                    const dy = from.y - to.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < repulsionConstant * 1.5) {
                        distance = Math.max(distance, minDistance);
                        const force = repulsionConstant / distance;
                        displacements[i].x += (dx / distance) * force;
                        displacements[i].y += (dy / distance) * force;
                    }
                }
            });
        });
        // 引力
        this.edges.forEach((edge) => {
            const fromIndex = this.vertices.indexOf(edge.from);
            const toIndex = this.vertices.indexOf(edge.to);
            const dx = edge.from.x - edge.to.x;
            const dy = edge.from.y - edge.to.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const force = distance / attractionConstant;
            displacements[fromIndex].x -= (dx / distance) * force;
            displacements[fromIndex].y -= (dy / distance) * force;
            displacements[toIndex].x += (dx / distance) * force;
            displacements[toIndex].y += (dy / distance) * force;
        });
        // 移動座標設定
        displacements.forEach((displacement, index) => {
            const scalar = Math.sqrt(displacement.x * displacement.x + displacement.y * displacement.y);
            if (scalar > 0) {
                const limitedDispX = (displacement.x / scalar) * Math.min(scalar, maxDisplacement);
                const limitedDispY = (displacement.y / scalar) * Math.min(scalar, maxDisplacement);
                this.vertices[index].x += Math.round(limitedDispX);
                this.vertices[index].y += Math.round(limitedDispY);
            }
        });
        this.drawGraph();
    }
    // ============================================================================
    // 保存読込処理
    // ============================================================================
    // グラフの状態をJSONとして保存
    saveToJson() {
        return this.graphIO.saveToJson();
    }
    // JSONからグラフの状態をロード
    loadFromJson(jsonString) {
        this.graphIO.loadFromJson(jsonString);
    }
    // ============================================================================
    // グラフ生成
    // ============================================================================
    createGraphFromMatrix() {
        this.historyManager.init();
        const adjacencyMatrix = this.degreeSequence.generateAdjacencyMatrix();
        if (!adjacencyMatrix) {
            return;
        }
        const matrix = adjacencyMatrix.getMatrix();
        if (!matrix) {
            return;
        }
        // キャンバスの中心座標を取得
        const centerX = this.MAX_CANVAS_WIDTH / 2;
        const centerY = this.MAX_CANVAS_HEIGHT / 2;
        // 力指向レイアウトを適用して頂点を配置
        this.vertices = this.applyForceDirectedLayout(matrix, centerX, centerY);
        this.edges = [];
        // 辺の作成
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i + 1; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1) {
                    const newEdge = new _object_Edge__WEBPACK_IMPORTED_MODULE_6__.Edge(this.vertices[i], this.vertices[j]);
                    this.edges.push(newEdge);
                    this.vertices[i].addEdge(newEdge);
                    this.vertices[j].addEdge(newEdge);
                }
            }
        }
        this.resizeCanvas();
    }
    // 力指向レイアウト適用
    applyForceDirectedLayout(matrix, centerX, centerY) {
        const nodes = matrix.map((_, i) => ({ index: i }));
        const links = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i + 1; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1) {
                    links.push({ source: i, target: j });
                }
            }
        }
        // 力指向アルゴリズムの設定
        let simulation = d3_force__WEBPACK_IMPORTED_MODULE_3__["default"](nodes);
        simulation.force("link", d3_force__WEBPACK_IMPORTED_MODULE_1__["default"](links).distance(50));
        simulation.force("charge", d3_force__WEBPACK_IMPORTED_MODULE_2__["default"]().strength(-100));
        simulation.force("center", d3_force__WEBPACK_IMPORTED_MODULE_0__["default"](centerX, centerY));
        simulation.stop();
        // シミュレーションの実行
        for (let i = 0; i < 100; i++)
            simulation.tick();
        // 頂点オブジェクトの生成
        return nodes.map((node) => new _object_Vertex__WEBPACK_IMPORTED_MODULE_7__.Vertex(node.x, node.y));
    }
}


/***/ }),

/***/ "./src/component/HistoryManager.ts":
/*!*****************************************!*\
  !*** ./src/component/HistoryManager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   HistoryManager: () => (/* binding */ HistoryManager)
/* harmony export */ });
// ============================================================================
// 列挙体
// ============================================================================
// 実行タイプのEnum
var ActionType;
(function (ActionType) {
    ActionType["Add"] = "add";
    ActionType["Delete"] = "delete";
})(ActionType || (ActionType = {}));
// ============================================================================
// 履歴管理クラス
// ============================================================================
class HistoryManager {
    // 履歴管理配列
    history = [];
    currentPosition = -1;
    constructor() {
        this.init();
    }
    // 初期化
    init() {
        this.history = [];
        this.currentPosition = -1;
    }
    // Action追加
    addAction(action) {
        this.addGropuedAction({ actions: [action] });
    }
    // GroupedAction追加
    addGropuedAction(actions) {
        // 未来の履歴をすべて削除する
        this.history = this.history.slice(0, this.currentPosition + 1);
        this.history.push(actions);
        this.currentPosition++;
    }
    // 戻す
    undo() {
        if (this.currentPosition < 0)
            return null;
        const action = this.history[this.currentPosition];
        this.currentPosition--;
        return action;
    }
    // やり直す
    redo() {
        if (this.currentPosition >= this.history.length - 1)
            return null;
        const action = this.history[this.currentPosition + 1];
        this.currentPosition++;
        return action;
    }
    // 戻せるか
    canUndo() {
        return this.currentPosition >= 0;
    }
    // やり直せるか
    canRedo() {
        return this.currentPosition < this.history.length - 1;
    }
}


/***/ }),

/***/ "./src/object/Control.ts":
/*!*******************************!*\
  !*** ./src/object/Control.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/object/Point.ts");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");


// ============================================================================
// 制御点クラス
// ============================================================================
class Control extends _Point__WEBPACK_IMPORTED_MODULE_0__.Point {
    // 始点
    from;
    // 終点
    to;
    // 辺
    edge;
    // 制御点移動の影響倍率
    static IMPACT_FACTOR = 3;
    // 制御点の表示位置調整
    static ADJUST_VIEW = 20;
    constructor(from, to, edge) {
        super(0, 0);
        this.from = from;
        this.to = to;
        this.edge = edge;
        // 中点の座標にする
        this.init();
    }
    // 初期化
    init() {
        this.x = (this.from.x + this.to.x) / 2;
        this.y = (this.from.y + this.to.y) / 2 - Control.ADJUST_VIEW;
    }
    // 計算用の制御点座標（ペジェ曲線算出用）
    getCalcPosition() {
        const controlX = this.x;
        const controlY = this.y + Control.ADJUST_VIEW;
        const midpointX = (this.from.x + this.to.x) / 2;
        const midpointY = (this.from.y + this.to.y) / 2;
        const x = midpointX + Control.IMPACT_FACTOR * (controlX - midpointX);
        const y = midpointY + Control.IMPACT_FACTOR * (controlY - midpointY);
        return new _Position__WEBPACK_IMPORTED_MODULE_1__.Position(x, y);
    }
    // 描画
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}


/***/ }),

/***/ "./src/object/Edge.ts":
/*!****************************!*\
  !*** ./src/object/Edge.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control */ "./src/object/Control.ts");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");


// ============================================================================
// 辺クラス
// ============================================================================
class Edge {
    // 始点
    from;
    // 終点
    to;
    // 制御点
    control;
    // 選択されているか
    isSelected;
    constructor(from, to) {
        this.from = from;
        this.to = to;
        this.control = new _Control__WEBPACK_IMPORTED_MODULE_0__.Control(from, to, this);
        this.isSelected = false;
        // 頂点に辺を追加する
        this.from.addEdge(this);
        this.to.addEdge(this);
    }
    // 辺を直線にする
    straightenEdge() {
        this.control.init();
    }
    // 範囲内か
    isNear(mouseX, mouseY, tolerance = 10) {
        const calcPosition = this.control.getCalcPosition();
        // ベジェ曲線を分割して近似
        const segment = 10;
        for (let i = 0; i < segment; i++) {
            const t1 = i / segment;
            const t2 = (i + 1) / segment;
            const p1 = this.getBezierPosition(t1, calcPosition);
            const p2 = this.getBezierPosition(t2, calcPosition);
            if (this.pointToSegmentDistance(mouseX, mouseY, p1.x, p1.y, p2.x, p2.y) < tolerance) {
                return true;
            }
        }
        return false;
    }
    // ペジェ曲線の分割点
    getBezierPosition(t, calcPosition) {
        const x = (1 - t) * (1 - t) * this.from.x + 2 * (1 - t) * t * calcPosition.x + t * t * this.to.x;
        const y = (1 - t) * (1 - t) * this.from.y + 2 * (1 - t) * t * calcPosition.y + t * t * this.to.y;
        return new _Position__WEBPACK_IMPORTED_MODULE_1__.Position(x, y);
    }
    // 描画
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        ctx.lineTo(this.to.x, this.to.y);
        ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
        ctx.lineWidth = 4;
        ctx.stroke();
        this.control.init();
    }
    // 描画（ペジェ曲線）
    drawBezier(ctx, canTransForm) {
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        // 二次ベジェ曲線
        const calcPosition = this.control.getCalcPosition();
        ctx.quadraticCurveTo(calcPosition.x, calcPosition.y, this.to.x, this.to.y);
        ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
        ctx.lineWidth = 4;
        ctx.stroke();
        if (this.isSelected && canTransForm) {
            this.control.draw(ctx);
        }
    }
    // 点と直線の距離
    pointToSegmentDistance(px, py, x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        if (dx === 0 && dy === 0) {
            return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
        }
        const t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);
        const tClamped = Math.max(0, Math.min(1, t));
        const nearestX = x1 + tClamped * dx;
        const nearestY = y1 + tClamped * dy;
        return Math.sqrt((px - nearestX) ** 2 + (py - nearestY) ** 2);
    }
}


/***/ }),

/***/ "./src/object/Point.ts":
/*!*****************************!*\
  !*** ./src/object/Point.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Point: () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");

// ============================================================================
// 点クラス
// ============================================================================
class Point extends _Position__WEBPACK_IMPORTED_MODULE_0__.Position {
    // 半径
    radius;
    constructor(x, y) {
        super(x, y);
        this.radius = 4;
    }
    // 範囲内か
    isNear(x, y) {
        return Math.hypot(this.x - x, this.y - y) < this.radius * 2;
    }
}


/***/ }),

/***/ "./src/object/Position.ts":
/*!********************************!*\
  !*** ./src/object/Position.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Position: () => (/* binding */ Position)
/* harmony export */ });
// ============================================================================
// 位置クラス
// ============================================================================
class Position {
    // 座標
    x;
    y;
    constructor(x, y) {
        this.x = Math.round(x);
        this.y = Math.round(y);
    }
}


/***/ }),

/***/ "./src/object/Vertex.ts":
/*!******************************!*\
  !*** ./src/object/Vertex.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vertex: () => (/* binding */ Vertex)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/object/Point.ts");

// ============================================================================
// 頂点クラス
// ============================================================================
class Vertex extends _Point__WEBPACK_IMPORTED_MODULE_0__.Point {
    // 選択されているか
    isSelected;
    // 接続している辺
    edges;
    constructor(x, y) {
        super(x, y);
        this.radius = 10;
        this.isSelected = false;
        this.edges = [];
    }
    // 辺を追加
    addEdge(edge) {
        // 重複辺を取得
        const duplicateEdge = this.edges.find((item) => (item.from === edge.from && item.to === edge.to) || (item.from === edge.to && item.to === edge.from));
        // 重複辺は削除
        if (duplicateEdge) {
            this.deleteEdge(duplicateEdge);
        }
        this.edges.push(edge);
    }
    // 辺を削除
    deleteEdge(edge) {
        this.edges.splice(this.edges.indexOf(edge), 1);
    }
    // 次数取得
    getDegree() {
        return this.edges.length;
    }
    // 描画
    draw(ctx, showIndex, index, showDegree) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 100, 150, 1)";
        ctx.fill();
        ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
        ctx.lineWidth = 4;
        ctx.stroke();
        // 頂点情報の表示
        ctx.fillStyle = "black";
        ctx.font = "12px Sans-serif";
        if (showIndex) {
            ctx.fillText(`Index: ${index}`, this.x + this.radius + 5, this.y - this.radius - 5);
        }
        if (showDegree) {
            ctx.fillText(`Degree: ${this.getDegree()}`, this.x + this.radius + 5, this.y - this.radius + 15);
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils */ "./src/common/utils.ts");
/* harmony import */ var _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/DegreeSequence */ "./src/component/DegreeSequence.ts");
/* harmony import */ var _component_GraphManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/GraphManager */ "./src/component/GraphManager.ts");



// ============================================================================
// HTML項目関連処理
// ============================================================================
document.addEventListener("DOMContentLoaded", setup);
function setup() {
    // ============================================================================
    // 操作エリア - 戻す、やり直す
    // ============================================================================
    const undoButton = document.getElementById("undoButton");
    const redoButton = document.getElementById("redoButton");
    undoButton.addEventListener("click", clickUndo);
    redoButton.addEventListener("click", clickRedo);
    // 戻すボタンがクリックされた時の処理
    function clickUndo() {
        graphManager.undo();
        undoButton.disabled = !graphManager.canUndo();
    }
    // やり直すボタンがクリックされた時の処理
    function clickRedo() {
        graphManager.redo();
        redoButton.disabled = !graphManager.canRedo();
    }
    // ============================================================================
    // 操作エリア - 次数配列
    // ============================================================================
    const degreeToggle1 = document.getElementById("degreeToggle1");
    const degreeToggle2 = document.getElementById("degreeToggle2");
    const degreesInput = document.getElementById("degreeSequenceInput");
    const applyButton = document.getElementById("applyDegreeSequence");
    const initGraphButton = document.getElementById("initGraphButton");
    degreeToggle1.addEventListener("click", clickDegreeArray);
    degreeToggle2.addEventListener("click", clickRunLength);
    degreesInput.addEventListener("input", inputDegreeSequence);
    degreesInput.addEventListener("blur", blurDegreeSequence);
    applyButton.addEventListener("click", applyDegreeSequence);
    initGraphButton.addEventListener("click", initGraph);
    // トグルボタンの状態: 初期値は「次数配列」とする
    let degreeMode = _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.Array;
    // トグルボタンで、次数配列が選択された時の処理
    function clickDegreeArray() {
        degreeMode = _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.Array;
        degreeToggle1.textContent = degreeMode;
        degreeToggle1.classList.add("active");
        degreeToggle2.classList.remove("active");
        degreesInput.placeholder = "例: 4,4,4,3,3";
        degreesInput.value = graphManager.degreeSequence.getArrayString();
    }
    // トグルボタンで、ランレングス圧縮が選択された時の処理
    function clickRunLength() {
        degreeMode = _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.RunLength;
        degreeToggle2.textContent = degreeMode;
        degreeToggle2.classList.add("active");
        degreeToggle1.classList.remove("active");
        degreesInput.placeholder = "例: 4*3,3*2";
        degreesInput.value = graphManager.degreeSequence.getRunLengthString();
    }
    // 次数配列入力欄に入力した時の処理
    function inputDegreeSequence() {
        switch (degreeMode) {
            case _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.Array:
                // 数字、カンマを許容
                degreesInput.value = degreesInput.value.replace(/[^0-9, ]/g, "");
                break;
            case _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.RunLength:
                // 数字、カンマ、アスタリスクを許容
                degreesInput.value = degreesInput.value.replace(/[^0-9,* ]/g, "");
                break;
        }
    }
    // 次数配列入力欄のロストフォーカス時の処理
    function blurDegreeSequence() {
        graphManager.degreeSequence.setValue(degreeMode, degreesInput.value);
        // 値の設定
        switch (degreeMode) {
            case _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.Array:
                degreesInput.value = graphManager.degreeSequence.getArrayString();
                break;
            case _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.RunLength:
                degreesInput.value = graphManager.degreeSequence.getRunLengthString();
                break;
        }
        // 有効性判定
        if (graphManager.degreeSequence.isValid()) {
            degreesInput.classList.remove("is-invalid");
            degreesInput.classList.add("is-valid");
            applyButton.disabled = false;
        }
        else {
            degreesInput.classList.add("is-invalid");
            degreesInput.classList.remove("is-valid");
            applyButton.disabled = true;
        }
    }
    // 適用ボタンが押された時の処理
    function applyDegreeSequence() {
        if (graphManager.degreeSequence.vertexCount() > 1000) {
            _common_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.confirmAction("頂点の数が1000を超えるグラフは描画できません", () => { });
        }
        else if (graphManager.degreeSequence.vertexCount() > 500) {
            _common_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.confirmAction("頂点の数が大きいため、描画に数分かかる場合がありますがよろしいですか？", () => {
                graphManager.createGraphFromMatrix();
            });
        }
        else {
            graphManager.createGraphFromMatrix();
        }
    }
    // グラフの初期化
    function initGraph() {
        _common_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.confirmAction("グラフが初期化されますがよろしいですか？", () => {
            graphManager.initGraph();
            // 初期設定値
            setInitialValue();
        });
    }
    // 次数配列の更新（GraphManager内の変更を反映するためのコールバック関数）
    function updateDegreeSequence(vertices, edges) {
        graphManager.degreeSequence.setVertices(vertices, edges);
        // 値の設定
        switch (degreeMode) {
            case _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.Array:
                degreesInput.value = graphManager.degreeSequence.getArrayString();
                break;
            case _component_DegreeSequence__WEBPACK_IMPORTED_MODULE_1__.DegreeSeqEnum.RunLength:
                degreesInput.value = graphManager.degreeSequence.getRunLengthString();
                break;
        }
    }
    // ============================================================================
    // プロパティエリア - グラフ情報
    // ============================================================================
    const vertexDisplay = document.getElementById("vertexDisplay");
    const edgeDisplay = document.getElementById("edgeDisplay");
    const graphStatusDisplay = document.getElementById("graphStatusDisplay");
    const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay");
    const hasK33Display = document.getElementById("hasK33Display");
    const hasK5Display = document.getElementById("hasK5Display");
    const showIndexCheckbox = document.getElementById("showIndexCheckbox");
    const showDegreeCheckbox = document.getElementById("showDegreeCheckbox");
    const showGridCheckbox = document.getElementById("showGridCheckbox");
    showIndexCheckbox.addEventListener("change", showIndex);
    showDegreeCheckbox.addEventListener("change", showDegree);
    showGridCheckbox.addEventListener("change", showGrid);
    // オブジェクト情報の更新
    function updateInfo(info) {
        // 頂点と辺の数
        vertexDisplay.textContent = `頂点の数: ${info.vertices.length}`;
        edgeDisplay.textContent = `辺の数: ${info.edges.length}`;
        // 初期化
        graphStatusDisplay.textContent = "グラフ: 平面グラフ";
        graphStatusDisplay.style.color = "";
        graphStatusDisplay.style.fontWeight = "";
        maxGraphEdgeDisplay.textContent = " - ";
        hasK33Display.textContent = "k3,3: -";
        hasK33Display.style.color = "";
        hasK33Display.style.fontWeight = "";
        hasK5Display.textContent = "k5: -";
        hasK5Display.style.color = "";
        hasK5Display.style.fontWeight = "";
        // 最小限のグラフ判定
        if (info.vertices.length < 3) {
            return;
        }
        // 極大平面グラフ判定（ 3V - E = 6 ）
        const result = 3 * info.vertices.length - info.edges.length;
        // 隣接行列を取得
        const adjacencyMatrix = info.degreeSequence.getAdjacencyMatrix();
        // グラフ状態
        if (adjacencyMatrix === null) {
            // 描画不可能
            graphStatusDisplay.textContent = "グラフ: 実現不可";
            graphStatusDisplay.style.color = "red";
            graphStatusDisplay.style.fontWeight = "bold";
        }
        else if (adjacencyMatrix.hasK33() || adjacencyMatrix.hasK5()) {
            // 非平面グラフ
            graphStatusDisplay.textContent = "グラフ: 非平面グラフ";
            graphStatusDisplay.style.color = "red";
            graphStatusDisplay.style.fontWeight = "bold";
            // K3,3
            if (adjacencyMatrix && adjacencyMatrix.hasK33()) {
                const k33 = adjacencyMatrix.getResultK33();
                hasK33Display.textContent = `k3,3: ${k33.map((sub) => `(${sub.join(",")})`).join(", ")}`;
                hasK33Display.style.color = "red";
                hasK33Display.style.fontWeight = "bold";
            }
            // K5
            if (adjacencyMatrix && adjacencyMatrix.hasK5()) {
                const k5 = adjacencyMatrix.getResultK5();
                hasK5Display.textContent = `k5: (${k5.join(", ")})`;
                hasK5Display.style.color = "red";
                hasK5Display.style.fontWeight = "bold";
            }
        }
        else {
            // 平面グラフ
            if (result > 6) {
                graphStatusDisplay.textContent = "グラフ: 平面グラフ";
                graphStatusDisplay.style.color = "";
                graphStatusDisplay.style.fontWeight = "";
                maxGraphEdgeDisplay.textContent = `辺数 ${result - 6} 追加可能`;
            }
            else if (result == 6) {
                graphStatusDisplay.textContent = "グラフ: 極大平面グラフ";
                graphStatusDisplay.style.color = "blue";
                graphStatusDisplay.style.fontWeight = "bold";
                maxGraphEdgeDisplay.textContent = ` - `;
            }
        }
        // 戻す、やり直すボタンの有効無効化
        undoButton.disabled = !graphManager.canUndo();
        redoButton.disabled = !graphManager.canRedo();
    }
    // 頂点の番号を表示
    function showIndex() {
        graphManager.setShowIndex(showIndexCheckbox.checked);
    }
    // 頂点の次数を表示
    function showDegree() {
        graphManager.setShowDegree(showDegreeCheckbox.checked);
    }
    // グリッドを表示
    function showGrid() {
        graphManager.setShowGrid(showGridCheckbox.checked);
    }
    // ============================================================================
    // プロパティエリア - レイアウト
    // ============================================================================
    const graphLayoutToggle1 = document.getElementById("graphLayoutToggle1");
    const graphLayoutToggle2 = document.getElementById("graphLayoutToggle2");
    const drawEdgeToggle1 = document.getElementById("drawEdgeToggle1");
    const drawEdgeToggle2 = document.getElementById("drawEdgeToggle2");
    const canTransFormCheckbox = document.getElementById("canTransFormCheckbox");
    const canAddRemoveCheckbox = document.getElementById("canAddRemoveCheckbox");
    graphLayoutToggle1.addEventListener("click", clickGraphLayoutForceDirect);
    graphLayoutToggle2.addEventListener("click", clickGraphLayoutFixed);
    drawEdgeToggle1.addEventListener("click", clickEdgeDrawingStraightLine);
    drawEdgeToggle2.addEventListener("click", clickEdgeDrawingBezierCurve);
    canTransFormCheckbox.addEventListener("change", canTransForm);
    canAddRemoveCheckbox.addEventListener("change", canAddRemove);
    // グラフレイアウトの初期値は、力指向とする
    let graphLayoutMode = _component_GraphManager__WEBPACK_IMPORTED_MODULE_2__.GraphLayoutEnum.ForceDirect;
    // グラフレイアウトトグルボタンで、力指向が選択された時の処理
    function clickGraphLayoutForceDirect() {
        graphLayoutMode = _component_GraphManager__WEBPACK_IMPORTED_MODULE_2__.GraphLayoutEnum.ForceDirect;
        // オブジェクト配置モード
        graphLayoutToggle1.textContent = graphLayoutMode;
        graphLayoutToggle1.classList.add("active");
        graphLayoutToggle2.classList.remove("active");
        graphManager.setGraphLayout(graphLayoutMode);
        // 辺の描画モード
        drawEdgeToggle1.disabled = false;
        drawEdgeToggle1.classList.add("active");
        drawEdgeToggle2.disabled = true;
        drawEdgeToggle2.classList.remove("active");
        graphManager.setEdgeDrawing(_component_GraphManager__WEBPACK_IMPORTED_MODULE_2__.EdgeDrawingEnum.straightLine);
        // オブジェクト操作
        canTransFormCheckbox.checked = true;
        canTransFormCheckbox.disabled = true;
        graphManager.setCanTransForm(canTransFormCheckbox.checked);
    }
    // グラフレイアウトトグルボタンで、固定が選択された時の処理
    function clickGraphLayoutFixed() {
        graphLayoutMode = _component_GraphManager__WEBPACK_IMPORTED_MODULE_2__.GraphLayoutEnum.Fixed;
        // オブジェクト配置モード
        graphLayoutToggle2.textContent = graphLayoutMode;
        graphLayoutToggle2.classList.add("active");
        graphLayoutToggle1.classList.remove("active");
        graphManager.setGraphLayout(graphLayoutMode);
        // 辺の描画モード
        drawEdgeToggle1.disabled = false;
        drawEdgeToggle2.disabled = false;
        drawEdgeToggle1.classList.add("active");
        drawEdgeToggle2.classList.remove("active");
        // オブジェクト操作
        canTransFormCheckbox.disabled = false;
    }
    // 辺の描画トグルボタンで、直線が選択された時の処理
    function clickEdgeDrawingStraightLine() {
        drawEdgeToggle1.classList.add("active");
        drawEdgeToggle2.classList.remove("active");
        graphManager.setEdgeDrawing(_component_GraphManager__WEBPACK_IMPORTED_MODULE_2__.EdgeDrawingEnum.straightLine);
    }
    // 辺の描画トグルボタンで、直線が選択された時の処理
    function clickEdgeDrawingBezierCurve() {
        drawEdgeToggle1.classList.remove("active");
        drawEdgeToggle2.classList.add("active");
        graphManager.setEdgeDrawing(_component_GraphManager__WEBPACK_IMPORTED_MODULE_2__.EdgeDrawingEnum.bezierCurve);
    }
    // オブジェクトの移動変形可否
    function canTransForm() {
        graphManager.setCanTransForm(canTransFormCheckbox.checked);
    }
    // オブジェクトの追加削除可否
    function canAddRemove() {
        graphManager.setCanAddRemove(canAddRemoveCheckbox.checked);
    }
    // ============================================================================
    // プロパティエリア - データの入出力
    // ============================================================================
    const saveButton = document.getElementById("saveButton");
    const loadButton = document.getElementById("loadButton");
    const loadFileInput = document.getElementById("loadFileInput");
    saveButton.addEventListener("click", save);
    loadButton.addEventListener("click", uploadJson);
    loadFileInput.addEventListener("change", load);
    // 保存ボタンが押下された
    function save(e) {
        // データ取得
        const jsonData = graphManager.saveToJson();
        // ファイル名
        const date = new Date();
        const timestamp = date.getFullYear().toString() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + "_" + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
        const filename = `graph-data_${timestamp}.json`;
        // ダウンロードURL
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        // リンクをプログラム的にクリックしてダウンロードを実行
        a.click();
        document.body.removeChild(a);
        // 作成したURLを解放
        URL.revokeObjectURL(url);
    }
    // ボタンがクリックされたら、ファイル入力をトリガーする
    function uploadJson() {
        loadFileInput.click();
    }
    // ファイルが入力されたら、ロードする
    function load(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            // ファイル読み込み後のイベントハンドラ
            reader.onload = function (event) {
                const content = event.target.result;
                try {
                    // 読み込んだJSONデータでグラフをロード
                    graphManager.loadFromJson(content);
                }
                catch (error) {
                    _common_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.errorAction("JSONデータのロード中にエラーが発生しました: " + error.message);
                }
            };
            // ファイル読み込みエラーのハンドラ
            reader.onerror = function () {
                _common_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.errorAction("ファイルの読み込み中にエラーが発生しました。");
            };
            // ファイルをテキストとして読み込む
            reader.readAsText(file);
            // ファイル入力をリセット
            loadFileInput.value = "";
        }
    }
    // ============================================================================
    // 初期値設定
    // ============================================================================
    function setInitialValue() {
        undoButton.disabled = !graphManager.canUndo();
        redoButton.disabled = !graphManager.canRedo();
        // 次数配列のトグルボタン
        clickDegreeArray();
        // 表示切り替えのチェックボックス
        showIndexCheckbox.checked = graphManager.isShowIndex();
        showDegreeCheckbox.checked = graphManager.isShowDegree();
        showGridCheckbox.checked = graphManager.isShowGrid();
        // オブジェクト操作のチェックボックス
        canTransFormCheckbox.checked = graphManager.getCanTransForm();
        canAddRemoveCheckbox.checked = graphManager.getCanAddRemove();
        // グラフレイアウトのトグルボタン
        clickGraphLayoutForceDirect();
        // 初期グラフ
        degreesInput.value = "3, 3, 3, 3";
        blurDegreeSequence();
        applyDegreeSequence();
    }
    // ============================================================================
    // メイン処理
    // ============================================================================
    const canvas = document.getElementById("graphCanvas");
    const graphManager = new _component_GraphManager__WEBPACK_IMPORTED_MODULE_2__.GraphManager(canvas, updateDegreeSequence, updateInfo);
    // 初期設定値
    setInitialValue();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0VBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvRUFBZTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0EsNENBQTRDLDBCQUEwQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnREFBSztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnREFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUVBQVk7QUFDekM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2NlbnRlci5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvamlnZ2xlLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvbGNnLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvbGluay5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL21hbnlCb2R5LmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvc2ltdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2FkZC5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2NvdmVyLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2V4dGVudC5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvcXVhZHRyZWUuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9yb290LmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvc2l6ZS5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3Zpc2l0LmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvdmlzaXRBZnRlci5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3guanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy95LmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9jb21tb24vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL2NvbXBvbmVudC9BZGphY2VuY3lNYXRyaXgudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL2NvbXBvbmVudC9EZWdyZWVTZXF1ZW5jZS50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvY29tcG9uZW50L0dyYXBoSU8udHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL2NvbXBvbmVudC9HcmFwaE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL2NvbXBvbmVudC9IaXN0b3J5TWFuYWdlci50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvb2JqZWN0L0NvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL29iamVjdC9FZGdlLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9vYmplY3QvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL29iamVjdC9Qb3NpdGlvbi50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvb2JqZWN0L1ZlcnRleC50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BsYW5hci1ncmFwaC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG5vb3AgPSB7dmFsdWU6ICgpID0+IHt9fTtcblxuZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gYXJndW1lbnRzLmxlbmd0aCwgXyA9IHt9LCB0OyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKCEodCA9IGFyZ3VtZW50c1tpXSArIFwiXCIpIHx8ICh0IGluIF8pIHx8IC9bXFxzLl0vLnRlc3QodCkpIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgdHlwZTogXCIgKyB0KTtcbiAgICBfW3RdID0gW107XG4gIH1cbiAgcmV0dXJuIG5ldyBEaXNwYXRjaChfKTtcbn1cblxuZnVuY3Rpb24gRGlzcGF0Y2goXykge1xuICB0aGlzLl8gPSBfO1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMsIHR5cGVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICBpZiAodCAmJiAhdHlwZXMuaGFzT3duUHJvcGVydHkodCkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0KTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuRGlzcGF0Y2gucHJvdG90eXBlID0gZGlzcGF0Y2gucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRGlzcGF0Y2gsXG4gIG9uOiBmdW5jdGlvbih0eXBlbmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgXyA9IHRoaXMuXyxcbiAgICAgICAgVCA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiwgXyksXG4gICAgICAgIHQsXG4gICAgICAgIGkgPSAtMSxcbiAgICAgICAgbiA9IFQubGVuZ3RoO1xuXG4gICAgLy8gSWYgbm8gY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmV0dXJuIHRoZSBjYWxsYmFjayBvZiB0aGUgZ2l2ZW4gdHlwZSBhbmQgbmFtZS5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoKHQgPSAodHlwZW5hbWUgPSBUW2ldKS50eXBlKSAmJiAodCA9IGdldChfW3RdLCB0eXBlbmFtZS5uYW1lKSkpIHJldHVybiB0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGEgdHlwZSB3YXMgc3BlY2lmaWVkLCBzZXQgdGhlIGNhbGxiYWNrIGZvciB0aGUgZ2l2ZW4gdHlwZSBhbmQgbmFtZS5cbiAgICAvLyBPdGhlcndpc2UsIGlmIGEgbnVsbCBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZW1vdmUgY2FsbGJhY2tzIG9mIHRoZSBnaXZlbiBuYW1lLlxuICAgIGlmIChjYWxsYmFjayAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNhbGxiYWNrOiBcIiArIGNhbGxiYWNrKTtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKHQgPSAodHlwZW5hbWUgPSBUW2ldKS50eXBlKSBfW3RdID0gc2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIGVsc2UgaWYgKGNhbGxiYWNrID09IG51bGwpIGZvciAodCBpbiBfKSBfW3RdID0gc2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUsIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBjb3B5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29weSA9IHt9LCBfID0gdGhpcy5fO1xuICAgIGZvciAodmFyIHQgaW4gXykgY29weVt0XSA9IF9bdF0uc2xpY2UoKTtcbiAgICByZXR1cm4gbmV3IERpc3BhdGNoKGNvcHkpO1xuICB9LFxuICBjYWxsOiBmdW5jdGlvbih0eXBlLCB0aGF0KSB7XG4gICAgaWYgKChuID0gYXJndW1lbnRzLmxlbmd0aCAtIDIpID4gMCkgZm9yICh2YXIgYXJncyA9IG5ldyBBcnJheShuKSwgaSA9IDAsIG4sIHQ7IGkgPCBuOyArK2kpIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIGlmICghdGhpcy5fLmhhc093blByb3BlcnR5KHR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdHlwZSk7XG4gICAgZm9yICh0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9LFxuICBhcHBseTogZnVuY3Rpb24odHlwZSwgdGhhdCwgYXJncykge1xuICAgIGlmICghdGhpcy5fLmhhc093blByb3BlcnR5KHR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdHlwZSk7XG4gICAgZm9yICh2YXIgdCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0KHR5cGUsIG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0eXBlLmxlbmd0aCwgYzsgaSA8IG47ICsraSkge1xuICAgIGlmICgoYyA9IHR5cGVbaV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXQodHlwZSwgbmFtZSwgY2FsbGJhY2spIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0eXBlLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgIGlmICh0eXBlW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHR5cGVbaV0gPSBub29wLCB0eXBlID0gdHlwZS5zbGljZSgwLCBpKS5jb25jYXQodHlwZS5zbGljZShpICsgMSkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChjYWxsYmFjayAhPSBudWxsKSB0eXBlLnB1c2goe25hbWU6IG5hbWUsIHZhbHVlOiBjYWxsYmFja30pO1xuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGF0Y2g7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBub2Rlcywgc3RyZW5ndGggPSAxO1xuXG4gIGlmICh4ID09IG51bGwpIHggPSAwO1xuICBpZiAoeSA9PSBudWxsKSB5ID0gMDtcblxuICBmdW5jdGlvbiBmb3JjZSgpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgc3ggPSAwLFxuICAgICAgICBzeSA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBub2RlID0gbm9kZXNbaV0sIHN4ICs9IG5vZGUueCwgc3kgKz0gbm9kZS55O1xuICAgIH1cblxuICAgIGZvciAoc3ggPSAoc3ggLyBuIC0geCkgKiBzdHJlbmd0aCwgc3kgPSAoc3kgLyBuIC0geSkgKiBzdHJlbmd0aCwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS54IC09IHN4LCBub2RlLnkgLT0gc3k7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBub2RlcyA9IF87XG4gIH07XG5cbiAgZm9yY2UueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gK18sIGZvcmNlKSA6IHg7XG4gIH07XG5cbiAgZm9yY2UueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gK18sIGZvcmNlKSA6IHk7XG4gIH07XG5cbiAgZm9yY2Uuc3RyZW5ndGggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RyZW5ndGggPSArXywgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyYW5kb20pIHtcbiAgcmV0dXJuIChyYW5kb20oKSAtIDAuNSkgKiAxZS02O1xufVxuIiwiLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2NvbmdydWVudGlhbF9nZW5lcmF0b3IjUGFyYW1ldGVyc19pbl9jb21tb25fdXNlXG5jb25zdCBhID0gMTY2NDUyNTtcbmNvbnN0IGMgPSAxMDEzOTA0MjIzO1xuY29uc3QgbSA9IDQyOTQ5NjcyOTY7IC8vIDJeMzJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCBzID0gMTtcbiAgcmV0dXJuICgpID0+IChzID0gKGEgKiBzICsgYykgJSBtKSAvIG07XG59XG4iLCJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBqaWdnbGUgZnJvbSBcIi4vamlnZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGluZGV4KGQpIHtcbiAgcmV0dXJuIGQuaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmQobm9kZUJ5SWQsIG5vZGVJZCkge1xuICB2YXIgbm9kZSA9IG5vZGVCeUlkLmdldChub2RlSWQpO1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcihcIm5vZGUgbm90IGZvdW5kOiBcIiArIG5vZGVJZCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsaW5rcykge1xuICB2YXIgaWQgPSBpbmRleCxcbiAgICAgIHN0cmVuZ3RoID0gZGVmYXVsdFN0cmVuZ3RoLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgZGlzdGFuY2UgPSBjb25zdGFudCgzMCksXG4gICAgICBkaXN0YW5jZXMsXG4gICAgICBub2RlcyxcbiAgICAgIGNvdW50LFxuICAgICAgYmlhcyxcbiAgICAgIHJhbmRvbSxcbiAgICAgIGl0ZXJhdGlvbnMgPSAxO1xuXG4gIGlmIChsaW5rcyA9PSBudWxsKSBsaW5rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGRlZmF1bHRTdHJlbmd0aChsaW5rKSB7XG4gICAgcmV0dXJuIDEgLyBNYXRoLm1pbihjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0sIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZShhbHBoYSkge1xuICAgIGZvciAodmFyIGsgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBrIDwgaXRlcmF0aW9uczsgKytrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGluaywgc291cmNlLCB0YXJnZXQsIHgsIHksIGwsIGI7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbGluayA9IGxpbmtzW2ldLCBzb3VyY2UgPSBsaW5rLnNvdXJjZSwgdGFyZ2V0ID0gbGluay50YXJnZXQ7XG4gICAgICAgIHggPSB0YXJnZXQueCArIHRhcmdldC52eCAtIHNvdXJjZS54IC0gc291cmNlLnZ4IHx8IGppZ2dsZShyYW5kb20pO1xuICAgICAgICB5ID0gdGFyZ2V0LnkgKyB0YXJnZXQudnkgLSBzb3VyY2UueSAtIHNvdXJjZS52eSB8fCBqaWdnbGUocmFuZG9tKTtcbiAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgbCA9IChsIC0gZGlzdGFuY2VzW2ldKSAvIGwgKiBhbHBoYSAqIHN0cmVuZ3Roc1tpXTtcbiAgICAgICAgeCAqPSBsLCB5ICo9IGw7XG4gICAgICAgIHRhcmdldC52eCAtPSB4ICogKGIgPSBiaWFzW2ldKTtcbiAgICAgICAgdGFyZ2V0LnZ5IC09IHkgKiBiO1xuICAgICAgICBzb3VyY2UudnggKz0geCAqIChiID0gMSAtIGIpO1xuICAgICAgICBzb3VyY2UudnkgKz0geSAqIGI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG5cbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbSA9IGxpbmtzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJ5SWQgPSBuZXcgTWFwKG5vZGVzLm1hcCgoZCwgaSkgPT4gW2lkKGQsIGksIG5vZGVzKSwgZF0pKSxcbiAgICAgICAgbGluaztcblxuICAgIGZvciAoaSA9IDAsIGNvdW50ID0gbmV3IEFycmF5KG4pOyBpIDwgbTsgKytpKSB7XG4gICAgICBsaW5rID0gbGlua3NbaV0sIGxpbmsuaW5kZXggPSBpO1xuICAgICAgaWYgKHR5cGVvZiBsaW5rLnNvdXJjZSAhPT0gXCJvYmplY3RcIikgbGluay5zb3VyY2UgPSBmaW5kKG5vZGVCeUlkLCBsaW5rLnNvdXJjZSk7XG4gICAgICBpZiAodHlwZW9mIGxpbmsudGFyZ2V0ICE9PSBcIm9iamVjdFwiKSBsaW5rLnRhcmdldCA9IGZpbmQobm9kZUJ5SWQsIGxpbmsudGFyZ2V0KTtcbiAgICAgIGNvdW50W2xpbmsuc291cmNlLmluZGV4XSA9IChjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0gfHwgMCkgKyAxO1xuICAgICAgY291bnRbbGluay50YXJnZXQuaW5kZXhdID0gKGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgYmlhcyA9IG5ldyBBcnJheShtKTsgaSA8IG07ICsraSkge1xuICAgICAgbGluayA9IGxpbmtzW2ldLCBiaWFzW2ldID0gY291bnRbbGluay5zb3VyY2UuaW5kZXhdIC8gKGNvdW50W2xpbmsuc291cmNlLmluZGV4XSArIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSk7XG4gICAgfVxuXG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG0pLCBpbml0aWFsaXplU3RyZW5ndGgoKTtcbiAgICBkaXN0YW5jZXMgPSBuZXcgQXJyYXkobSksIGluaXRpYWxpemVEaXN0YW5jZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0cmVuZ3RoKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICBzdHJlbmd0aHNbaV0gPSArc3RyZW5ndGgobGlua3NbaV0sIGksIGxpbmtzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplRGlzdGFuY2UoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBsaW5rcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIGRpc3RhbmNlc1tpXSA9ICtkaXN0YW5jZShsaW5rc1tpXSwgaSwgbGlua3MpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5saW5rcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsaW5rcyA9IF8sIGluaXRpYWxpemUoKSwgZm9yY2UpIDogbGlua3M7XG4gIH07XG5cbiAgZm9yY2UuaWQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaWQgPSBfLCBmb3JjZSkgOiBpZDtcbiAgfTtcblxuICBmb3JjZS5pdGVyYXRpb25zID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGl0ZXJhdGlvbnMgPSArXywgZm9yY2UpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplU3RyZW5ndGgoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UuZGlzdGFuY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGlzdGFuY2UgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZURpc3RhbmNlKCksIGZvcmNlKSA6IGRpc3RhbmNlO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsImltcG9ydCB7cXVhZHRyZWV9IGZyb20gXCJkMy1xdWFkdHJlZVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgamlnZ2xlIGZyb20gXCIuL2ppZ2dsZS5qc1wiO1xuaW1wb3J0IHt4LCB5fSBmcm9tIFwiLi9zaW11bGF0aW9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZXMsXG4gICAgICBub2RlLFxuICAgICAgcmFuZG9tLFxuICAgICAgYWxwaGEsXG4gICAgICBzdHJlbmd0aCA9IGNvbnN0YW50KC0zMCksXG4gICAgICBzdHJlbmd0aHMsXG4gICAgICBkaXN0YW5jZU1pbjIgPSAxLFxuICAgICAgZGlzdGFuY2VNYXgyID0gSW5maW5pdHksXG4gICAgICB0aGV0YTIgPSAwLjgxO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKF8pIHtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgdHJlZSA9IHF1YWR0cmVlKG5vZGVzLCB4LCB5KS52aXNpdEFmdGVyKGFjY3VtdWxhdGUpO1xuICAgIGZvciAoYWxwaGEgPSBfLCBpID0gMDsgaSA8IG47ICsraSkgbm9kZSA9IG5vZGVzW2ldLCB0cmVlLnZpc2l0KGFwcGx5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlO1xuICAgIHN0cmVuZ3RocyA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBub2RlID0gbm9kZXNbaV0sIHN0cmVuZ3Roc1tub2RlLmluZGV4XSA9ICtzdHJlbmd0aChub2RlLCBpLCBub2Rlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBhY2N1bXVsYXRlKHF1YWQpIHtcbiAgICB2YXIgc3RyZW5ndGggPSAwLCBxLCBjLCB3ZWlnaHQgPSAwLCB4LCB5LCBpO1xuXG4gICAgLy8gRm9yIGludGVybmFsIG5vZGVzLCBhY2N1bXVsYXRlIGZvcmNlcyBmcm9tIGNoaWxkIHF1YWRyYW50cy5cbiAgICBpZiAocXVhZC5sZW5ndGgpIHtcbiAgICAgIGZvciAoeCA9IHkgPSBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgICBpZiAoKHEgPSBxdWFkW2ldKSAmJiAoYyA9IE1hdGguYWJzKHEudmFsdWUpKSkge1xuICAgICAgICAgIHN0cmVuZ3RoICs9IHEudmFsdWUsIHdlaWdodCArPSBjLCB4ICs9IGMgKiBxLngsIHkgKz0gYyAqIHEueTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcXVhZC54ID0geCAvIHdlaWdodDtcbiAgICAgIHF1YWQueSA9IHkgLyB3ZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gRm9yIGxlYWYgbm9kZXMsIGFjY3VtdWxhdGUgZm9yY2VzIGZyb20gY29pbmNpZGVudCBxdWFkcmFudHMuXG4gICAgZWxzZSB7XG4gICAgICBxID0gcXVhZDtcbiAgICAgIHEueCA9IHEuZGF0YS54O1xuICAgICAgcS55ID0gcS5kYXRhLnk7XG4gICAgICBkbyBzdHJlbmd0aCArPSBzdHJlbmd0aHNbcS5kYXRhLmluZGV4XTtcbiAgICAgIHdoaWxlIChxID0gcS5uZXh0KTtcbiAgICB9XG5cbiAgICBxdWFkLnZhbHVlID0gc3RyZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseShxdWFkLCB4MSwgXywgeDIpIHtcbiAgICBpZiAoIXF1YWQudmFsdWUpIHJldHVybiB0cnVlO1xuXG4gICAgdmFyIHggPSBxdWFkLnggLSBub2RlLngsXG4gICAgICAgIHkgPSBxdWFkLnkgLSBub2RlLnksXG4gICAgICAgIHcgPSB4MiAtIHgxLFxuICAgICAgICBsID0geCAqIHggKyB5ICogeTtcblxuICAgIC8vIEFwcGx5IHRoZSBCYXJuZXMtSHV0IGFwcHJveGltYXRpb24gaWYgcG9zc2libGUuXG4gICAgLy8gTGltaXQgZm9yY2VzIGZvciB2ZXJ5IGNsb3NlIG5vZGVzOyByYW5kb21pemUgZGlyZWN0aW9uIGlmIGNvaW5jaWRlbnQuXG4gICAgaWYgKHcgKiB3IC8gdGhldGEyIDwgbCkge1xuICAgICAgaWYgKGwgPCBkaXN0YW5jZU1heDIpIHtcbiAgICAgICAgaWYgKHggPT09IDApIHggPSBqaWdnbGUocmFuZG9tKSwgbCArPSB4ICogeDtcbiAgICAgICAgaWYgKHkgPT09IDApIHkgPSBqaWdnbGUocmFuZG9tKSwgbCArPSB5ICogeTtcbiAgICAgICAgaWYgKGwgPCBkaXN0YW5jZU1pbjIpIGwgPSBNYXRoLnNxcnQoZGlzdGFuY2VNaW4yICogbCk7XG4gICAgICAgIG5vZGUudnggKz0geCAqIHF1YWQudmFsdWUgKiBhbHBoYSAvIGw7XG4gICAgICAgIG5vZGUudnkgKz0geSAqIHF1YWQudmFsdWUgKiBhbHBoYSAvIGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHByb2Nlc3MgcG9pbnRzIGRpcmVjdGx5LlxuICAgIGVsc2UgaWYgKHF1YWQubGVuZ3RoIHx8IGwgPj0gZGlzdGFuY2VNYXgyKSByZXR1cm47XG5cbiAgICAvLyBMaW1pdCBmb3JjZXMgZm9yIHZlcnkgY2xvc2Ugbm9kZXM7IHJhbmRvbWl6ZSBkaXJlY3Rpb24gaWYgY29pbmNpZGVudC5cbiAgICBpZiAocXVhZC5kYXRhICE9PSBub2RlIHx8IHF1YWQubmV4dCkge1xuICAgICAgaWYgKHggPT09IDApIHggPSBqaWdnbGUocmFuZG9tKSwgbCArPSB4ICogeDtcbiAgICAgIGlmICh5ID09PSAwKSB5ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geSAqIHk7XG4gICAgICBpZiAobCA8IGRpc3RhbmNlTWluMikgbCA9IE1hdGguc3FydChkaXN0YW5jZU1pbjIgKiBsKTtcbiAgICB9XG5cbiAgICBkbyBpZiAocXVhZC5kYXRhICE9PSBub2RlKSB7XG4gICAgICB3ID0gc3RyZW5ndGhzW3F1YWQuZGF0YS5pbmRleF0gKiBhbHBoYSAvIGw7XG4gICAgICBub2RlLnZ4ICs9IHggKiB3O1xuICAgICAgbm9kZS52eSArPSB5ICogdztcbiAgICB9IHdoaWxlIChxdWFkID0gcXVhZC5uZXh0KTtcbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLmRpc3RhbmNlTWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRpc3RhbmNlTWluMiA9IF8gKiBfLCBmb3JjZSkgOiBNYXRoLnNxcnQoZGlzdGFuY2VNaW4yKTtcbiAgfTtcblxuICBmb3JjZS5kaXN0YW5jZU1heCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkaXN0YW5jZU1heDIgPSBfICogXywgZm9yY2UpIDogTWF0aC5zcXJ0KGRpc3RhbmNlTWF4Mik7XG4gIH07XG5cbiAgZm9yY2UudGhldGEgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGhldGEyID0gXyAqIF8sIGZvcmNlKSA6IE1hdGguc3FydCh0aGV0YTIpO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHt0aW1lcn0gZnJvbSBcImQzLXRpbWVyXCI7XG5pbXBvcnQgbGNnIGZyb20gXCIuL2xjZy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24geChkKSB7XG4gIHJldHVybiBkLng7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5KGQpIHtcbiAgcmV0dXJuIGQueTtcbn1cblxudmFyIGluaXRpYWxSYWRpdXMgPSAxMCxcbiAgICBpbml0aWFsQW5nbGUgPSBNYXRoLlBJICogKDMgLSBNYXRoLnNxcnQoNSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2Rlcykge1xuICB2YXIgc2ltdWxhdGlvbixcbiAgICAgIGFscGhhID0gMSxcbiAgICAgIGFscGhhTWluID0gMC4wMDEsXG4gICAgICBhbHBoYURlY2F5ID0gMSAtIE1hdGgucG93KGFscGhhTWluLCAxIC8gMzAwKSxcbiAgICAgIGFscGhhVGFyZ2V0ID0gMCxcbiAgICAgIHZlbG9jaXR5RGVjYXkgPSAwLjYsXG4gICAgICBmb3JjZXMgPSBuZXcgTWFwKCksXG4gICAgICBzdGVwcGVyID0gdGltZXIoc3RlcCksXG4gICAgICBldmVudCA9IGRpc3BhdGNoKFwidGlja1wiLCBcImVuZFwiKSxcbiAgICAgIHJhbmRvbSA9IGxjZygpO1xuXG4gIGlmIChub2RlcyA9PSBudWxsKSBub2RlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgdGljaygpO1xuICAgIGV2ZW50LmNhbGwoXCJ0aWNrXCIsIHNpbXVsYXRpb24pO1xuICAgIGlmIChhbHBoYSA8IGFscGhhTWluKSB7XG4gICAgICBzdGVwcGVyLnN0b3AoKTtcbiAgICAgIGV2ZW50LmNhbGwoXCJlbmRcIiwgc2ltdWxhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGljayhpdGVyYXRpb25zKSB7XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7XG5cbiAgICBpZiAoaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkKSBpdGVyYXRpb25zID0gMTtcblxuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgaXRlcmF0aW9uczsgKytrKSB7XG4gICAgICBhbHBoYSArPSAoYWxwaGFUYXJnZXQgLSBhbHBoYSkgKiBhbHBoYURlY2F5O1xuXG4gICAgICBmb3JjZXMuZm9yRWFjaChmdW5jdGlvbihmb3JjZSkge1xuICAgICAgICBmb3JjZShhbHBoYSk7XG4gICAgICB9KTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLmZ4ID09IG51bGwpIG5vZGUueCArPSBub2RlLnZ4ICo9IHZlbG9jaXR5RGVjYXk7XG4gICAgICAgIGVsc2Ugbm9kZS54ID0gbm9kZS5meCwgbm9kZS52eCA9IDA7XG4gICAgICAgIGlmIChub2RlLmZ5ID09IG51bGwpIG5vZGUueSArPSBub2RlLnZ5ICo9IHZlbG9jaXR5RGVjYXk7XG4gICAgICAgIGVsc2Ugbm9kZS55ID0gbm9kZS5meSwgbm9kZS52eSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbXVsYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplTm9kZXMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS5pbmRleCA9IGk7XG4gICAgICBpZiAobm9kZS5meCAhPSBudWxsKSBub2RlLnggPSBub2RlLmZ4O1xuICAgICAgaWYgKG5vZGUuZnkgIT0gbnVsbCkgbm9kZS55ID0gbm9kZS5meTtcbiAgICAgIGlmIChpc05hTihub2RlLngpIHx8IGlzTmFOKG5vZGUueSkpIHtcbiAgICAgICAgdmFyIHJhZGl1cyA9IGluaXRpYWxSYWRpdXMgKiBNYXRoLnNxcnQoMC41ICsgaSksIGFuZ2xlID0gaSAqIGluaXRpYWxBbmdsZTtcbiAgICAgICAgbm9kZS54ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBub2RlLnkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNOYU4obm9kZS52eCkgfHwgaXNOYU4obm9kZS52eSkpIHtcbiAgICAgICAgbm9kZS52eCA9IG5vZGUudnkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVGb3JjZShmb3JjZSkge1xuICAgIGlmIChmb3JjZS5pbml0aWFsaXplKSBmb3JjZS5pbml0aWFsaXplKG5vZGVzLCByYW5kb20pO1xuICAgIHJldHVybiBmb3JjZTtcbiAgfVxuXG4gIGluaXRpYWxpemVOb2RlcygpO1xuXG4gIHJldHVybiBzaW11bGF0aW9uID0ge1xuICAgIHRpY2s6IHRpY2ssXG5cbiAgICByZXN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdGVwcGVyLnJlc3RhcnQoc3RlcCksIHNpbXVsYXRpb247XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0ZXBwZXIuc3RvcCgpLCBzaW11bGF0aW9uO1xuICAgIH0sXG5cbiAgICBub2RlczogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobm9kZXMgPSBfLCBpbml0aWFsaXplTm9kZXMoKSwgZm9yY2VzLmZvckVhY2goaW5pdGlhbGl6ZUZvcmNlKSwgc2ltdWxhdGlvbikgOiBub2RlcztcbiAgICB9LFxuXG4gICAgYWxwaGE6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGE7XG4gICAgfSxcblxuICAgIGFscGhhTWluOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYU1pbiA9ICtfLCBzaW11bGF0aW9uKSA6IGFscGhhTWluO1xuICAgIH0sXG5cbiAgICBhbHBoYURlY2F5OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYURlY2F5ID0gK18sIHNpbXVsYXRpb24pIDogK2FscGhhRGVjYXk7XG4gICAgfSxcblxuICAgIGFscGhhVGFyZ2V0OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYVRhcmdldCA9ICtfLCBzaW11bGF0aW9uKSA6IGFscGhhVGFyZ2V0O1xuICAgIH0sXG5cbiAgICB2ZWxvY2l0eURlY2F5OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2ZWxvY2l0eURlY2F5ID0gMSAtIF8sIHNpbXVsYXRpb24pIDogMSAtIHZlbG9jaXR5RGVjYXk7XG4gICAgfSxcblxuICAgIHJhbmRvbVNvdXJjZTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZG9tID0gXywgZm9yY2VzLmZvckVhY2goaW5pdGlhbGl6ZUZvcmNlKSwgc2ltdWxhdGlvbikgOiByYW5kb207XG4gICAgfSxcblxuICAgIGZvcmNlOiBmdW5jdGlvbihuYW1lLCBfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyAoKF8gPT0gbnVsbCA/IGZvcmNlcy5kZWxldGUobmFtZSkgOiBmb3JjZXMuc2V0KG5hbWUsIGluaXRpYWxpemVGb3JjZShfKSkpLCBzaW11bGF0aW9uKSA6IGZvcmNlcy5nZXQobmFtZSk7XG4gICAgfSxcblxuICAgIGZpbmQ6IGZ1bmN0aW9uKHgsIHksIHJhZGl1cykge1xuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZHgsXG4gICAgICAgICAgZHksXG4gICAgICAgICAgZDIsXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBjbG9zZXN0O1xuXG4gICAgICBpZiAocmFkaXVzID09IG51bGwpIHJhZGl1cyA9IEluZmluaXR5O1xuICAgICAgZWxzZSByYWRpdXMgKj0gcmFkaXVzO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgZHggPSB4IC0gbm9kZS54O1xuICAgICAgICBkeSA9IHkgLSBub2RlLnk7XG4gICAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICAgIGlmIChkMiA8IHJhZGl1cykgY2xvc2VzdCA9IG5vZGUsIHJhZGl1cyA9IGQyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICB9LFxuXG4gICAgb246IGZ1bmN0aW9uKG5hbWUsIF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSA/IChldmVudC5vbihuYW1lLCBfKSwgc2ltdWxhdGlvbikgOiBldmVudC5vbihuYW1lKTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkKSB7XG4gIGNvbnN0IHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQpLFxuICAgICAgeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCk7XG4gIHJldHVybiBhZGQodGhpcy5jb3Zlcih4LCB5KSwgeCwgeSwgZCk7XG59XG5cbmZ1bmN0aW9uIGFkZCh0cmVlLCB4LCB5LCBkKSB7XG4gIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkgcmV0dXJuIHRyZWU7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciBwYXJlbnQsXG4gICAgICBub2RlID0gdHJlZS5fcm9vdCxcbiAgICAgIGxlYWYgPSB7ZGF0YTogZH0sXG4gICAgICB4MCA9IHRyZWUuX3gwLFxuICAgICAgeTAgPSB0cmVlLl95MCxcbiAgICAgIHgxID0gdHJlZS5feDEsXG4gICAgICB5MSA9IHRyZWUuX3kxLFxuICAgICAgeG0sXG4gICAgICB5bSxcbiAgICAgIHhwLFxuICAgICAgeXAsXG4gICAgICByaWdodCxcbiAgICAgIGJvdHRvbSxcbiAgICAgIGksXG4gICAgICBqO1xuXG4gIC8vIElmIHRoZSB0cmVlIGlzIGVtcHR5LCBpbml0aWFsaXplIHRoZSByb290IGFzIGEgbGVhZi5cbiAgaWYgKCFub2RlKSByZXR1cm4gdHJlZS5fcm9vdCA9IGxlYWYsIHRyZWU7XG5cbiAgLy8gRmluZCB0aGUgZXhpc3RpbmcgbGVhZiBmb3IgdGhlIG5ldyBwb2ludCwgb3IgYWRkIGl0LlxuICB3aGlsZSAobm9kZS5sZW5ndGgpIHtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgICBpZiAocGFyZW50ID0gbm9kZSwgIShub2RlID0gbm9kZVtpID0gYm90dG9tIDw8IDEgfCByaWdodF0pKSByZXR1cm4gcGFyZW50W2ldID0gbGVhZiwgdHJlZTtcbiAgfVxuXG4gIC8vIElzIHRoZSBuZXcgcG9pbnQgaXMgZXhhY3RseSBjb2luY2lkZW50IHdpdGggdGhlIGV4aXN0aW5nIHBvaW50P1xuICB4cCA9ICt0cmVlLl94LmNhbGwobnVsbCwgbm9kZS5kYXRhKTtcbiAgeXAgPSArdHJlZS5feS5jYWxsKG51bGwsIG5vZGUuZGF0YSk7XG4gIGlmICh4ID09PSB4cCAmJiB5ID09PSB5cCkgcmV0dXJuIGxlYWYubmV4dCA9IG5vZGUsIHBhcmVudCA/IHBhcmVudFtpXSA9IGxlYWYgOiB0cmVlLl9yb290ID0gbGVhZiwgdHJlZTtcblxuICAvLyBPdGhlcndpc2UsIHNwbGl0IHRoZSBsZWFmIG5vZGUgdW50aWwgdGhlIG9sZCBhbmQgbmV3IHBvaW50IGFyZSBzZXBhcmF0ZWQuXG4gIGRvIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnRbaV0gPSBuZXcgQXJyYXkoNCkgOiB0cmVlLl9yb290ID0gbmV3IEFycmF5KDQpO1xuICAgIGlmIChyaWdodCA9IHggPj0gKHhtID0gKHgwICsgeDEpIC8gMikpIHgwID0geG07IGVsc2UgeDEgPSB4bTtcbiAgICBpZiAoYm90dG9tID0geSA+PSAoeW0gPSAoeTAgKyB5MSkgLyAyKSkgeTAgPSB5bTsgZWxzZSB5MSA9IHltO1xuICB9IHdoaWxlICgoaSA9IGJvdHRvbSA8PCAxIHwgcmlnaHQpID09PSAoaiA9ICh5cCA+PSB5bSkgPDwgMSB8ICh4cCA+PSB4bSkpKTtcbiAgcmV0dXJuIHBhcmVudFtqXSA9IG5vZGUsIHBhcmVudFtpXSA9IGxlYWYsIHRyZWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbGwoZGF0YSkge1xuICB2YXIgZCwgaSwgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB4eiA9IG5ldyBBcnJheShuKSxcbiAgICAgIHl6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgeDAgPSBJbmZpbml0eSxcbiAgICAgIHkwID0gSW5maW5pdHksXG4gICAgICB4MSA9IC1JbmZpbml0eSxcbiAgICAgIHkxID0gLUluZmluaXR5O1xuXG4gIC8vIENvbXB1dGUgdGhlIHBvaW50cyBhbmQgdGhlaXIgZXh0ZW50LlxuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKGlzTmFOKHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQgPSBkYXRhW2ldKSkgfHwgaXNOYU4oeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCkpKSBjb250aW51ZTtcbiAgICB4eltpXSA9IHg7XG4gICAgeXpbaV0gPSB5O1xuICAgIGlmICh4IDwgeDApIHgwID0geDtcbiAgICBpZiAoeCA+IHgxKSB4MSA9IHg7XG4gICAgaWYgKHkgPCB5MCkgeTAgPSB5O1xuICAgIGlmICh5ID4geTEpIHkxID0geTtcbiAgfVxuXG4gIC8vIElmIHRoZXJlIHdlcmUgbm8gKHZhbGlkKSBwb2ludHMsIGFib3J0LlxuICBpZiAoeDAgPiB4MSB8fCB5MCA+IHkxKSByZXR1cm4gdGhpcztcblxuICAvLyBFeHBhbmQgdGhlIHRyZWUgdG8gY292ZXIgdGhlIG5ldyBwb2ludHMuXG4gIHRoaXMuY292ZXIoeDAsIHkwKS5jb3Zlcih4MSwgeTEpO1xuXG4gIC8vIEFkZCB0aGUgbmV3IHBvaW50cy5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGFkZCh0aGlzLCB4eltpXSwgeXpbaV0sIGRhdGFbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5KSB7XG4gIGlmIChpc05hTih4ID0gK3gpIHx8IGlzTmFOKHkgPSAreSkpIHJldHVybiB0aGlzOyAvLyBpZ25vcmUgaW52YWxpZCBwb2ludHNcblxuICB2YXIgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSA9IHRoaXMuX3gxLFxuICAgICAgeTEgPSB0aGlzLl95MTtcblxuICAvLyBJZiB0aGUgcXVhZHRyZWUgaGFzIG5vIGV4dGVudCwgaW5pdGlhbGl6ZSB0aGVtLlxuICAvLyBJbnRlZ2VyIGV4dGVudCBhcmUgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgd2UgbGF0ZXIgZG91YmxlIHRoZSBleHRlbnQsXG4gIC8vIHRoZSBleGlzdGluZyBxdWFkcmFudCBib3VuZGFyaWVzIGRvbuKAmXQgY2hhbmdlIGR1ZSB0byBmbG9hdGluZyBwb2ludCBlcnJvciFcbiAgaWYgKGlzTmFOKHgwKSkge1xuICAgIHgxID0gKHgwID0gTWF0aC5mbG9vcih4KSkgKyAxO1xuICAgIHkxID0gKHkwID0gTWF0aC5mbG9vcih5KSkgKyAxO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBkb3VibGUgcmVwZWF0ZWRseSB0byBjb3Zlci5cbiAgZWxzZSB7XG4gICAgdmFyIHogPSB4MSAtIHgwIHx8IDEsXG4gICAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGk7XG5cbiAgICB3aGlsZSAoeDAgPiB4IHx8IHggPj0geDEgfHwgeTAgPiB5IHx8IHkgPj0geTEpIHtcbiAgICAgIGkgPSAoeSA8IHkwKSA8PCAxIHwgKHggPCB4MCk7XG4gICAgICBwYXJlbnQgPSBuZXcgQXJyYXkoNCksIHBhcmVudFtpXSA9IG5vZGUsIG5vZGUgPSBwYXJlbnQsIHogKj0gMjtcbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6IHgxID0geDAgKyB6LCB5MSA9IHkwICsgejsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogeDAgPSB4MSAtIHosIHkxID0geTAgKyB6OyBicmVhaztcbiAgICAgICAgY2FzZSAyOiB4MSA9IHgwICsgeiwgeTAgPSB5MSAtIHo7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IHgwID0geDEgLSB6LCB5MCA9IHkxIC0gejsgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jvb3QgJiYgdGhpcy5fcm9vdC5sZW5ndGgpIHRoaXMuX3Jvb3QgPSBub2RlO1xuICB9XG5cbiAgdGhpcy5feDAgPSB4MDtcbiAgdGhpcy5feTAgPSB5MDtcbiAgdGhpcy5feDEgPSB4MTtcbiAgdGhpcy5feTEgPSB5MTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSBbXTtcbiAgdGhpcy52aXNpdChmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCFub2RlLmxlbmd0aCkgZG8gZGF0YS5wdXNoKG5vZGUuZGF0YSk7IHdoaWxlIChub2RlID0gbm9kZS5uZXh0KVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuY292ZXIoK19bMF1bMF0sICtfWzBdWzFdKS5jb3ZlcigrX1sxXVswXSwgK19bMV1bMV0pXG4gICAgICA6IGlzTmFOKHRoaXMuX3gwKSA/IHVuZGVmaW5lZCA6IFtbdGhpcy5feDAsIHRoaXMuX3kwXSwgW3RoaXMuX3gxLCB0aGlzLl95MV1dO1xufVxuIiwiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5LCByYWRpdXMpIHtcbiAgdmFyIGRhdGEsXG4gICAgICB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxLFxuICAgICAgeTEsXG4gICAgICB4MixcbiAgICAgIHkyLFxuICAgICAgeDMgPSB0aGlzLl94MSxcbiAgICAgIHkzID0gdGhpcy5feTEsXG4gICAgICBxdWFkcyA9IFtdLFxuICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICBxLFxuICAgICAgaTtcblxuICBpZiAobm9kZSkgcXVhZHMucHVzaChuZXcgUXVhZChub2RlLCB4MCwgeTAsIHgzLCB5MykpO1xuICBpZiAocmFkaXVzID09IG51bGwpIHJhZGl1cyA9IEluZmluaXR5O1xuICBlbHNlIHtcbiAgICB4MCA9IHggLSByYWRpdXMsIHkwID0geSAtIHJhZGl1cztcbiAgICB4MyA9IHggKyByYWRpdXMsIHkzID0geSArIHJhZGl1cztcbiAgICByYWRpdXMgKj0gcmFkaXVzO1xuICB9XG5cbiAgd2hpbGUgKHEgPSBxdWFkcy5wb3AoKSkge1xuXG4gICAgLy8gU3RvcCBzZWFyY2hpbmcgaWYgdGhpcyBxdWFkcmFudCBjYW7igJl0IGNvbnRhaW4gYSBjbG9zZXIgbm9kZS5cbiAgICBpZiAoIShub2RlID0gcS5ub2RlKVxuICAgICAgICB8fCAoeDEgPSBxLngwKSA+IHgzXG4gICAgICAgIHx8ICh5MSA9IHEueTApID4geTNcbiAgICAgICAgfHwgKHgyID0gcS54MSkgPCB4MFxuICAgICAgICB8fCAoeTIgPSBxLnkxKSA8IHkwKSBjb250aW51ZTtcblxuICAgIC8vIEJpc2VjdCB0aGUgY3VycmVudCBxdWFkcmFudC5cbiAgICBpZiAobm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MSArIHgyKSAvIDIsXG4gICAgICAgICAgeW0gPSAoeTEgKyB5MikgLyAyO1xuXG4gICAgICBxdWFkcy5wdXNoKFxuICAgICAgICBuZXcgUXVhZChub2RlWzNdLCB4bSwgeW0sIHgyLCB5MiksXG4gICAgICAgIG5ldyBRdWFkKG5vZGVbMl0sIHgxLCB5bSwgeG0sIHkyKSxcbiAgICAgICAgbmV3IFF1YWQobm9kZVsxXSwgeG0sIHkxLCB4MiwgeW0pLFxuICAgICAgICBuZXcgUXVhZChub2RlWzBdLCB4MSwgeTEsIHhtLCB5bSlcbiAgICAgICk7XG5cbiAgICAgIC8vIFZpc2l0IHRoZSBjbG9zZXN0IHF1YWRyYW50IGZpcnN0LlxuICAgICAgaWYgKGkgPSAoeSA+PSB5bSkgPDwgMSB8ICh4ID49IHhtKSkge1xuICAgICAgICBxID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHF1YWRzW3F1YWRzLmxlbmd0aCAtIDFdID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMSAtIGldO1xuICAgICAgICBxdWFkc1txdWFkcy5sZW5ndGggLSAxIC0gaV0gPSBxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZpc2l0IHRoaXMgcG9pbnQuIChWaXNpdGluZyBjb2luY2lkZW50IHBvaW50cyBpc27igJl0IG5lY2Vzc2FyeSEpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgZHggPSB4IC0gK3RoaXMuX3guY2FsbChudWxsLCBub2RlLmRhdGEpLFxuICAgICAgICAgIGR5ID0geSAtICt0aGlzLl95LmNhbGwobnVsbCwgbm9kZS5kYXRhKSxcbiAgICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgaWYgKGQyIDwgcmFkaXVzKSB7XG4gICAgICAgIHZhciBkID0gTWF0aC5zcXJ0KHJhZGl1cyA9IGQyKTtcbiAgICAgICAgeDAgPSB4IC0gZCwgeTAgPSB5IC0gZDtcbiAgICAgICAgeDMgPSB4ICsgZCwgeTMgPSB5ICsgZDtcbiAgICAgICAgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIHRoaXMueDAgPSB4MDtcbiAgdGhpcy55MCA9IHkwO1xuICB0aGlzLngxID0geDE7XG4gIHRoaXMueTEgPSB5MTtcbn1cbiIsImltcG9ydCB0cmVlX2FkZCwge2FkZEFsbCBhcyB0cmVlX2FkZEFsbH0gZnJvbSBcIi4vYWRkLmpzXCI7XG5pbXBvcnQgdHJlZV9jb3ZlciBmcm9tIFwiLi9jb3Zlci5qc1wiO1xuaW1wb3J0IHRyZWVfZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgdHJlZV9leHRlbnQgZnJvbSBcIi4vZXh0ZW50LmpzXCI7XG5pbXBvcnQgdHJlZV9maW5kIGZyb20gXCIuL2ZpbmQuanNcIjtcbmltcG9ydCB0cmVlX3JlbW92ZSwge3JlbW92ZUFsbCBhcyB0cmVlX3JlbW92ZUFsbH0gZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgdHJlZV9yb290IGZyb20gXCIuL3Jvb3QuanNcIjtcbmltcG9ydCB0cmVlX3NpemUgZnJvbSBcIi4vc2l6ZS5qc1wiO1xuaW1wb3J0IHRyZWVfdmlzaXQgZnJvbSBcIi4vdmlzaXQuanNcIjtcbmltcG9ydCB0cmVlX3Zpc2l0QWZ0ZXIgZnJvbSBcIi4vdmlzaXRBZnRlci5qc1wiO1xuaW1wb3J0IHRyZWVfeCwge2RlZmF1bHRYfSBmcm9tIFwiLi94LmpzXCI7XG5pbXBvcnQgdHJlZV95LCB7ZGVmYXVsdFl9IGZyb20gXCIuL3kuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVhZHRyZWUobm9kZXMsIHgsIHkpIHtcbiAgdmFyIHRyZWUgPSBuZXcgUXVhZHRyZWUoeCA9PSBudWxsID8gZGVmYXVsdFggOiB4LCB5ID09IG51bGwgPyBkZWZhdWx0WSA6IHksIE5hTiwgTmFOLCBOYU4sIE5hTik7XG4gIHJldHVybiBub2RlcyA9PSBudWxsID8gdHJlZSA6IHRyZWUuYWRkQWxsKG5vZGVzKTtcbn1cblxuZnVuY3Rpb24gUXVhZHRyZWUoeCwgeSwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgdGhpcy5feCA9IHg7XG4gIHRoaXMuX3kgPSB5O1xuICB0aGlzLl94MCA9IHgwO1xuICB0aGlzLl95MCA9IHkwO1xuICB0aGlzLl94MSA9IHgxO1xuICB0aGlzLl95MSA9IHkxO1xuICB0aGlzLl9yb290ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBsZWFmX2NvcHkobGVhZikge1xuICB2YXIgY29weSA9IHtkYXRhOiBsZWFmLmRhdGF9LCBuZXh0ID0gY29weTtcbiAgd2hpbGUgKGxlYWYgPSBsZWFmLm5leHQpIG5leHQgPSBuZXh0Lm5leHQgPSB7ZGF0YTogbGVhZi5kYXRhfTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbnZhciB0cmVlUHJvdG8gPSBxdWFkdHJlZS5wcm90b3R5cGUgPSBRdWFkdHJlZS5wcm90b3R5cGU7XG5cbnRyZWVQcm90by5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjb3B5ID0gbmV3IFF1YWR0cmVlKHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSxcbiAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgbm9kZXMsXG4gICAgICBjaGlsZDtcblxuICBpZiAoIW5vZGUpIHJldHVybiBjb3B5O1xuXG4gIGlmICghbm9kZS5sZW5ndGgpIHJldHVybiBjb3B5Ll9yb290ID0gbGVhZl9jb3B5KG5vZGUpLCBjb3B5O1xuXG4gIG5vZGVzID0gW3tzb3VyY2U6IG5vZGUsIHRhcmdldDogY29weS5fcm9vdCA9IG5ldyBBcnJheSg0KX1dO1xuICB3aGlsZSAobm9kZSA9IG5vZGVzLnBvcCgpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGUuc291cmNlW2ldKSB7XG4gICAgICAgIGlmIChjaGlsZC5sZW5ndGgpIG5vZGVzLnB1c2goe3NvdXJjZTogY2hpbGQsIHRhcmdldDogbm9kZS50YXJnZXRbaV0gPSBuZXcgQXJyYXkoNCl9KTtcbiAgICAgICAgZWxzZSBub2RlLnRhcmdldFtpXSA9IGxlYWZfY29weShjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59O1xuXG50cmVlUHJvdG8uYWRkID0gdHJlZV9hZGQ7XG50cmVlUHJvdG8uYWRkQWxsID0gdHJlZV9hZGRBbGw7XG50cmVlUHJvdG8uY292ZXIgPSB0cmVlX2NvdmVyO1xudHJlZVByb3RvLmRhdGEgPSB0cmVlX2RhdGE7XG50cmVlUHJvdG8uZXh0ZW50ID0gdHJlZV9leHRlbnQ7XG50cmVlUHJvdG8uZmluZCA9IHRyZWVfZmluZDtcbnRyZWVQcm90by5yZW1vdmUgPSB0cmVlX3JlbW92ZTtcbnRyZWVQcm90by5yZW1vdmVBbGwgPSB0cmVlX3JlbW92ZUFsbDtcbnRyZWVQcm90by5yb290ID0gdHJlZV9yb290O1xudHJlZVByb3RvLnNpemUgPSB0cmVlX3NpemU7XG50cmVlUHJvdG8udmlzaXQgPSB0cmVlX3Zpc2l0O1xudHJlZVByb3RvLnZpc2l0QWZ0ZXIgPSB0cmVlX3Zpc2l0QWZ0ZXI7XG50cmVlUHJvdG8ueCA9IHRyZWVfeDtcbnRyZWVQcm90by55ID0gdHJlZV95O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZCkge1xuICBpZiAoaXNOYU4oeCA9ICt0aGlzLl94LmNhbGwobnVsbCwgZCkpIHx8IGlzTmFOKHkgPSArdGhpcy5feS5jYWxsKG51bGwsIGQpKSkgcmV0dXJuIHRoaXM7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciBwYXJlbnQsXG4gICAgICBub2RlID0gdGhpcy5fcm9vdCxcbiAgICAgIHJldGFpbmVyLFxuICAgICAgcHJldmlvdXMsXG4gICAgICBuZXh0LFxuICAgICAgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSA9IHRoaXMuX3gxLFxuICAgICAgeTEgPSB0aGlzLl95MSxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeG0sXG4gICAgICB5bSxcbiAgICAgIHJpZ2h0LFxuICAgICAgYm90dG9tLFxuICAgICAgaSxcbiAgICAgIGo7XG5cbiAgLy8gSWYgdGhlIHRyZWUgaXMgZW1wdHksIGluaXRpYWxpemUgdGhlIHJvb3QgYXMgYSBsZWFmLlxuICBpZiAoIW5vZGUpIHJldHVybiB0aGlzO1xuXG4gIC8vIEZpbmQgdGhlIGxlYWYgbm9kZSBmb3IgdGhlIHBvaW50LlxuICAvLyBXaGlsZSBkZXNjZW5kaW5nLCBhbHNvIHJldGFpbiB0aGUgZGVlcGVzdCBwYXJlbnQgd2l0aCBhIG5vbi1yZW1vdmVkIHNpYmxpbmcuXG4gIGlmIChub2RlLmxlbmd0aCkgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgICBpZiAoIShwYXJlbnQgPSBub2RlLCBub2RlID0gbm9kZVtpID0gYm90dG9tIDw8IDEgfCByaWdodF0pKSByZXR1cm4gdGhpcztcbiAgICBpZiAoIW5vZGUubGVuZ3RoKSBicmVhaztcbiAgICBpZiAocGFyZW50WyhpICsgMSkgJiAzXSB8fCBwYXJlbnRbKGkgKyAyKSAmIDNdIHx8IHBhcmVudFsoaSArIDMpICYgM10pIHJldGFpbmVyID0gcGFyZW50LCBqID0gaTtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIHBvaW50IHRvIHJlbW92ZS5cbiAgd2hpbGUgKG5vZGUuZGF0YSAhPT0gZCkgaWYgKCEocHJldmlvdXMgPSBub2RlLCBub2RlID0gbm9kZS5uZXh0KSkgcmV0dXJuIHRoaXM7XG4gIGlmIChuZXh0ID0gbm9kZS5uZXh0KSBkZWxldGUgbm9kZS5uZXh0O1xuXG4gIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb2luY2lkZW50IHBvaW50cywgcmVtb3ZlIGp1c3QgdGhlIHBvaW50LlxuICBpZiAocHJldmlvdXMpIHJldHVybiAobmV4dCA/IHByZXZpb3VzLm5leHQgPSBuZXh0IDogZGVsZXRlIHByZXZpb3VzLm5leHQpLCB0aGlzO1xuXG4gIC8vIElmIHRoaXMgaXMgdGhlIHJvb3QgcG9pbnQsIHJlbW92ZSBpdC5cbiAgaWYgKCFwYXJlbnQpIHJldHVybiB0aGlzLl9yb290ID0gbmV4dCwgdGhpcztcblxuICAvLyBSZW1vdmUgdGhpcyBsZWFmLlxuICBuZXh0ID8gcGFyZW50W2ldID0gbmV4dCA6IGRlbGV0ZSBwYXJlbnRbaV07XG5cbiAgLy8gSWYgdGhlIHBhcmVudCBub3cgY29udGFpbnMgZXhhY3RseSBvbmUgbGVhZiwgY29sbGFwc2Ugc3VwZXJmbHVvdXMgcGFyZW50cy5cbiAgaWYgKChub2RlID0gcGFyZW50WzBdIHx8IHBhcmVudFsxXSB8fCBwYXJlbnRbMl0gfHwgcGFyZW50WzNdKVxuICAgICAgJiYgbm9kZSA9PT0gKHBhcmVudFszXSB8fCBwYXJlbnRbMl0gfHwgcGFyZW50WzFdIHx8IHBhcmVudFswXSlcbiAgICAgICYmICFub2RlLmxlbmd0aCkge1xuICAgIGlmIChyZXRhaW5lcikgcmV0YWluZXJbal0gPSBub2RlO1xuICAgIGVsc2UgdGhpcy5fcm9vdCA9IG5vZGU7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbChkYXRhKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gZGF0YS5sZW5ndGg7IGkgPCBuOyArK2kpIHRoaXMucmVtb3ZlKGRhdGFbaV0pO1xuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fcm9vdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHRoaXMudmlzaXQoZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5sZW5ndGgpIGRvICsrc2l6ZTsgd2hpbGUgKG5vZGUgPSBub2RlLm5leHQpXG4gIH0pO1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsImltcG9ydCBRdWFkIGZyb20gXCIuL3F1YWQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyIHF1YWRzID0gW10sIHEsIG5vZGUgPSB0aGlzLl9yb290LCBjaGlsZCwgeDAsIHkwLCB4MSwgeTE7XG4gIGlmIChub2RlKSBxdWFkcy5wdXNoKG5ldyBRdWFkKG5vZGUsIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSk7XG4gIHdoaWxlIChxID0gcXVhZHMucG9wKCkpIHtcbiAgICBpZiAoIWNhbGxiYWNrKG5vZGUgPSBxLm5vZGUsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSkgJiYgbm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MCArIHgxKSAvIDIsIHltID0gKHkwICsgeTEpIC8gMjtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbM10pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHhtLCB5bSwgeDEsIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzJdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeW0sIHhtLCB5MSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMF0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5MCwgeG0sIHltKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgcXVhZHMgPSBbXSwgbmV4dCA9IFtdLCBxO1xuICBpZiAodGhpcy5fcm9vdCkgcXVhZHMucHVzaChuZXcgUXVhZCh0aGlzLl9yb290LCB0aGlzLl94MCwgdGhpcy5feTAsIHRoaXMuX3gxLCB0aGlzLl95MSkpO1xuICB3aGlsZSAocSA9IHF1YWRzLnBvcCgpKSB7XG4gICAgdmFyIG5vZGUgPSBxLm5vZGU7XG4gICAgaWYgKG5vZGUubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hpbGQsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSwgeG0gPSAoeDAgKyB4MSkgLyAyLCB5bSA9ICh5MCArIHkxKSAvIDI7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzBdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeTAsIHhtLCB5bSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMl0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5bSwgeG0sIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzNdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeW0sIHgxLCB5MSkpO1xuICAgIH1cbiAgICBuZXh0LnB1c2gocSk7XG4gIH1cbiAgd2hpbGUgKHEgPSBuZXh0LnBvcCgpKSB7XG4gICAgY2FsbGJhY2socS5ub2RlLCBxLngwLCBxLnkwLCBxLngxLCBxLnkxKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0WChkKSB7XG4gIHJldHVybiBkWzBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRoaXMuX3ggPSBfLCB0aGlzKSA6IHRoaXMuX3g7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdFkoZCkge1xuICByZXR1cm4gZFsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXykge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aGlzLl95ID0gXywgdGhpcykgOiB0aGlzLl95O1xufVxuIiwidmFyIGZyYW1lID0gMCwgLy8gaXMgYW4gYW5pbWF0aW9uIGZyYW1lIHBlbmRpbmc/XG4gICAgdGltZW91dCA9IDAsIC8vIGlzIGEgdGltZW91dCBwZW5kaW5nP1xuICAgIGludGVydmFsID0gMCwgLy8gYXJlIGFueSB0aW1lcnMgYWN0aXZlP1xuICAgIHBva2VEZWxheSA9IDEwMDAsIC8vIGhvdyBmcmVxdWVudGx5IHdlIGNoZWNrIGZvciBjbG9jayBza2V3XG4gICAgdGFza0hlYWQsXG4gICAgdGFza1RhaWwsXG4gICAgY2xvY2tMYXN0ID0gMCxcbiAgICBjbG9ja05vdyA9IDAsXG4gICAgY2xvY2tTa2V3ID0gMCxcbiAgICBjbG9jayA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gXCJvYmplY3RcIiAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZSA6IERhdGUsXG4gICAgc2V0RnJhbWUgPSB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KSA6IGZ1bmN0aW9uKGYpIHsgc2V0VGltZW91dChmLCAxNyk7IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBjbG9ja05vdyB8fCAoc2V0RnJhbWUoY2xlYXJOb3cpLCBjbG9ja05vdyA9IGNsb2NrLm5vdygpICsgY2xvY2tTa2V3KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOb3coKSB7XG4gIGNsb2NrTm93ID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKCkge1xuICB0aGlzLl9jYWxsID1cbiAgdGhpcy5fdGltZSA9XG4gIHRoaXMuX25leHQgPSBudWxsO1xufVxuXG5UaW1lci5wcm90b3R5cGUgPSB0aW1lci5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUaW1lcixcbiAgcmVzdGFydDogZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgdGltZSA9ICh0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lKSArIChkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheSk7XG4gICAgaWYgKCF0aGlzLl9uZXh0ICYmIHRhc2tUYWlsICE9PSB0aGlzKSB7XG4gICAgICBpZiAodGFza1RhaWwpIHRhc2tUYWlsLl9uZXh0ID0gdGhpcztcbiAgICAgIGVsc2UgdGFza0hlYWQgPSB0aGlzO1xuICAgICAgdGFza1RhaWwgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgc2xlZXAoKTtcbiAgfSxcbiAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2NhbGwpIHtcbiAgICAgIHRoaXMuX2NhbGwgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZSA9IEluZmluaXR5O1xuICAgICAgc2xlZXAoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyRmx1c2goKSB7XG4gIG5vdygpOyAvLyBHZXQgdGhlIGN1cnJlbnQgdGltZSwgaWYgbm90IGFscmVhZHkgc2V0LlxuICArK2ZyYW1lOyAvLyBQcmV0ZW5kIHdl4oCZdmUgc2V0IGFuIGFsYXJtLCBpZiB3ZSBoYXZlbuKAmXQgYWxyZWFkeS5cbiAgdmFyIHQgPSB0YXNrSGVhZCwgZTtcbiAgd2hpbGUgKHQpIHtcbiAgICBpZiAoKGUgPSBjbG9ja05vdyAtIHQuX3RpbWUpID49IDApIHQuX2NhbGwuY2FsbCh1bmRlZmluZWQsIGUpO1xuICAgIHQgPSB0Ll9uZXh0O1xuICB9XG4gIC0tZnJhbWU7XG59XG5cbmZ1bmN0aW9uIHdha2UoKSB7XG4gIGNsb2NrTm93ID0gKGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpKSArIGNsb2NrU2tldztcbiAgZnJhbWUgPSB0aW1lb3V0ID0gMDtcbiAgdHJ5IHtcbiAgICB0aW1lckZsdXNoKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZnJhbWUgPSAwO1xuICAgIG5hcCgpO1xuICAgIGNsb2NrTm93ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2tlKCkge1xuICB2YXIgbm93ID0gY2xvY2subm93KCksIGRlbGF5ID0gbm93IC0gY2xvY2tMYXN0O1xuICBpZiAoZGVsYXkgPiBwb2tlRGVsYXkpIGNsb2NrU2tldyAtPSBkZWxheSwgY2xvY2tMYXN0ID0gbm93O1xufVxuXG5mdW5jdGlvbiBuYXAoKSB7XG4gIHZhciB0MCwgdDEgPSB0YXNrSGVhZCwgdDIsIHRpbWUgPSBJbmZpbml0eTtcbiAgd2hpbGUgKHQxKSB7XG4gICAgaWYgKHQxLl9jYWxsKSB7XG4gICAgICBpZiAodGltZSA+IHQxLl90aW1lKSB0aW1lID0gdDEuX3RpbWU7XG4gICAgICB0MCA9IHQxLCB0MSA9IHQxLl9uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0MiA9IHQxLl9uZXh0LCB0MS5fbmV4dCA9IG51bGw7XG4gICAgICB0MSA9IHQwID8gdDAuX25leHQgPSB0MiA6IHRhc2tIZWFkID0gdDI7XG4gICAgfVxuICB9XG4gIHRhc2tUYWlsID0gdDA7XG4gIHNsZWVwKHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzbGVlcCh0aW1lKSB7XG4gIGlmIChmcmFtZSkgcmV0dXJuOyAvLyBTb29uZXN0IGFsYXJtIGFscmVhZHkgc2V0LCBvciB3aWxsIGJlLlxuICBpZiAodGltZW91dCkgdGltZW91dCA9IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgdmFyIGRlbGF5ID0gdGltZSAtIGNsb2NrTm93OyAvLyBTdHJpY3RseSBsZXNzIHRoYW4gaWYgd2UgcmVjb21wdXRlZCBjbG9ja05vdy5cbiAgaWYgKGRlbGF5ID4gMjQpIHtcbiAgICBpZiAodGltZSA8IEluZmluaXR5KSB0aW1lb3V0ID0gc2V0VGltZW91dCh3YWtlLCB0aW1lIC0gY2xvY2subm93KCkgLSBjbG9ja1NrZXcpO1xuICAgIGlmIChpbnRlcnZhbCkgaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWludGVydmFsKSBjbG9ja0xhc3QgPSBjbG9jay5ub3coKSwgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChwb2tlLCBwb2tlRGVsYXkpO1xuICAgIGZyYW1lID0gMSwgc2V0RnJhbWUod2FrZSk7XG4gIH1cbn1cbiIsIi8qIVxuKiBzd2VldGFsZXJ0MiB2MTEuMjYuM1xuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuU3dlZXRhbGVydDIgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF9hc3NlcnRDbGFzc0JyYW5kKGUsIHQsIG4pIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlID8gZSA9PT0gdCA6IGUuaGFzKHQpKSByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0IDogbjtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBlbGVtZW50IGlzIG5vdCBwcmVzZW50IG9uIHRoaXMgb2JqZWN0XCIpO1xuICB9XG4gIGZ1bmN0aW9uIF9jaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uKGUsIHQpIHtcbiAgICBpZiAodC5oYXMoZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgaW5pdGlhbGl6ZSB0aGUgc2FtZSBwcml2YXRlIGVsZW1lbnRzIHR3aWNlIG9uIGFuIG9iamVjdFwiKTtcbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQyKHMsIGEpIHtcbiAgICByZXR1cm4gcy5nZXQoX2Fzc2VydENsYXNzQnJhbmQocywgYSkpO1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKGUsIHQsIGEpIHtcbiAgICBfY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbihlLCB0KSwgdC5zZXQoZSwgYSk7XG4gIH1cbiAgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0MihzLCBhLCByKSB7XG4gICAgcmV0dXJuIHMuc2V0KF9hc3NlcnRDbGFzc0JyYW5kKHMsIGEpLCByKSwgcjtcbiAgfVxuXG4gIGNvbnN0IFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxuICAvKiogQHR5cGUge0dsb2JhbFN0YXRlfSAqL1xuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHt9O1xuICBjb25zdCBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCA9ICgpID0+IHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgcHJldmlvdXMgYWN0aXZlIChmb2N1c2VkKSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmV0dXJuRm9jdXNcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBjb25zdCByZXN0b3JlQWN0aXZlRWxlbWVudCA9IHJldHVybkZvY3VzID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXJldHVybkZvY3VzKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCk7IC8vIGlzc3Vlcy85MDBcblxuICAgICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN3YWxQcmVmaXggPSAnc3dhbDItJztcblxuICAvKipcbiAgICogQHR5cGVkZWYge1JlY29yZDxTd2FsQ2xhc3MsIHN0cmluZz59IFN3YWxDbGFzc2VzXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7J3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2luZm8nIHwgJ3F1ZXN0aW9uJyB8ICdlcnJvcid9IFN3YWxJY29uXG4gICAqIEB0eXBlZGVmIHtSZWNvcmQ8U3dhbEljb24sIHN0cmluZz59IFN3YWxJY29uc1xuICAgKi9cblxuICAvKiogQHR5cGUge1N3YWxDbGFzc1tdfSAqL1xuICBjb25zdCBjbGFzc05hbWVzID0gWydjb250YWluZXInLCAnc2hvd24nLCAnaGVpZ2h0LWF1dG8nLCAnaW9zZml4JywgJ3BvcHVwJywgJ21vZGFsJywgJ25vLWJhY2tkcm9wJywgJ25vLXRyYW5zaXRpb24nLCAndG9hc3QnLCAndG9hc3Qtc2hvd24nLCAnc2hvdycsICdoaWRlJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2h0bWwtY29udGFpbmVyJywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdkZW55JywgJ2NhbmNlbCcsICdmb290ZXInLCAnaWNvbicsICdpY29uLWNvbnRlbnQnLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAnbGFiZWwnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICdpbnB1dC1sYWJlbCcsICd2YWxpZGF0aW9uLW1lc3NhZ2UnLCAncHJvZ3Jlc3Mtc3RlcHMnLCAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwLWxpbmUnLCAnbG9hZGVyJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1zdGFydCcsICdjZW50ZXItZW5kJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbicsICdydGwnLCAndGltZXItcHJvZ3Jlc3MtYmFyJywgJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInLCAnc2Nyb2xsYmFyLW1lYXN1cmUnLCAnaWNvbi1zdWNjZXNzJywgJ2ljb24td2FybmluZycsICdpY29uLWluZm8nLCAnaWNvbi1xdWVzdGlvbicsICdpY29uLWVycm9yJywgJ2RyYWdnYWJsZScsICdkcmFnZ2luZyddO1xuICBjb25zdCBzd2FsQ2xhc3NlcyA9IGNsYXNzTmFtZXMucmVkdWNlKChhY2MsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGFjY1tjbGFzc05hbWVdID0gc3dhbFByZWZpeCArIGNsYXNzTmFtZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCAvKiogQHR5cGUge1N3YWxDbGFzc2VzfSAqL3t9KTtcblxuICAvKiogQHR5cGUge1N3YWxJY29uW119ICovXG4gIGNvbnN0IGljb25zID0gWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddO1xuICBjb25zdCBpY29uVHlwZXMgPSBpY29ucy5yZWR1Y2UoKGFjYywgaWNvbikgPT4ge1xuICAgIGFjY1tpY29uXSA9IHN3YWxQcmVmaXggKyBpY29uO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIC8qKiBAdHlwZSB7U3dhbEljb25zfSAqL3t9KTtcblxuICBjb25zdCBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBzdHIgPT4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXG4gIC8qKlxuICAgKiBTdGFuZGFyZGl6ZSBjb25zb2xlIHdhcm5pbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0IHdhcm4gPSBtZXNzYWdlID0+IHtcbiAgICBjb25zb2xlLndhcm4oYCR7Y29uc29sZVByZWZpeH0gJHt0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgPyBtZXNzYWdlLmpvaW4oJyAnKSA6IG1lc3NhZ2V9YCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YW5kYXJkaXplIGNvbnNvbGUgZXJyb3JzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqL1xuICBjb25zdCBlcnJvciA9IG1lc3NhZ2UgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoYCR7Y29uc29sZVByZWZpeH0gJHttZXNzYWdlfWApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIGdsb2JhbCBzdGF0ZSBmb3IgYHdhcm5PbmNlYFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdCBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMgPSBbXTtcblxuICAvKipcbiAgICogU2hvdyBhIGNvbnNvbGUgd2FybmluZywgYnV0IG9ubHkgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBzaG93blxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKi9cbiAgY29uc3Qgd2Fybk9uY2UgPSBtZXNzYWdlID0+IHtcbiAgICBpZiAoIXByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5pbmNsdWRlcyhtZXNzYWdlKSkge1xuICAgICAgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICB3YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBhIG9uZS10aW1lIGNvbnNvbGUgd2FybmluZyBhYm91dCBkZXByZWNhdGVkIHBhcmFtcy9tZXRob2RzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXByZWNhdGVkUGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmc/fSB1c2VJbnN0ZWFkXG4gICAqL1xuICBjb25zdCB3YXJuQWJvdXREZXByZWNhdGlvbiA9IChkZXByZWNhdGVkUGFyYW0sIHVzZUluc3RlYWQgPSBudWxsKSA9PiB7XG4gICAgd2Fybk9uY2UoYFwiJHtkZXByZWNhdGVkUGFyYW19XCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuJHt1c2VJbnN0ZWFkID8gYCBVc2UgXCIke3VzZUluc3RlYWR9XCIgaW5zdGVhZC5gIDogJyd9YCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIGBhcmdgIGlzIGEgZnVuY3Rpb24sIGNhbGwgaXQgKHdpdGggbm8gYXJndW1lbnRzIG9yIGNvbnRleHQpIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAgICogT3RoZXJ3aXNlLCBqdXN0IHBhc3MgdGhlIHZhbHVlIHRocm91Z2hcbiAgICpcbiAgICogQHBhcmFtIHsoKCkgPT4gKikgfCAqfSBhcmdcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBjb25zdCBjYWxsSWZGdW5jdGlvbiA9IGFyZyA9PiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gYXJnXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaGFzVG9Qcm9taXNlRm4gPSBhcmcgPT4gYXJnICYmIHR5cGVvZiBhcmcudG9Qcm9taXNlID09PSAnZnVuY3Rpb24nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IGFyZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cbiAgICovXG4gIGNvbnN0IGFzUHJvbWlzZSA9IGFyZyA9PiBoYXNUb1Byb21pc2VGbihhcmcpID8gYXJnLnRvUHJvbWlzZSgpIDogUHJvbWlzZS5yZXNvbHZlKGFyZyk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gYXJnXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNQcm9taXNlID0gYXJnID0+IGFyZyAmJiBQcm9taXNlLnJlc29sdmUoYXJnKSA9PT0gYXJnO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwb3B1cCBjb250YWluZXIgd2hpY2ggY29udGFpbnMgdGhlIGJhY2tkcm9wIGFuZCB0aGUgcG9wdXAgaXRzZWxmLlxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5jb250YWluZXJ9YCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclN0cmluZ1xuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZWxlbWVudEJ5U2VsZWN0b3IgPSBzZWxlY3RvclN0cmluZyA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKSA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGVsZW1lbnRCeUNsYXNzID0gY2xhc3NOYW1lID0+IHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldFBvcHVwID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucG9wdXApO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0SWNvbiA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmljb24pO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0SWNvbkNvbnRlbnQgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaWNvbi1jb250ZW50J10pO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRIdG1sQ29udGFpbmVyID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10pO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0SW1hZ2UgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pbWFnZSk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRQcm9ncmVzc1N0ZXBzID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ10pO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0Q29uZmlybUJ1dHRvbiA9ICgpID0+ICgvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL2VsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5jb25maXJtfWApKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldENhbmNlbEJ1dHRvbiA9ICgpID0+ICgvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL2VsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5jYW5jZWx9YCkpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0RGVueUJ1dHRvbiA9ICgpID0+ICgvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL2VsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5kZW55fWApKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldElucHV0TGFiZWwgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXSk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRMb2FkZXIgPSAoKSA9PiBlbGVtZW50QnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMubG9hZGVyfWApO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0QWN0aW9ucyA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmFjdGlvbnMpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0Rm9vdGVyID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuZm9vdGVyKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldFRpbWVyUHJvZ3Jlc3NCYXIgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10pO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0Q2xvc2VCdXR0b24gPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jbG9zZSk7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2prdXAvZm9jdXNhYmxlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gIGNvbnN0IGZvY3VzYWJsZSA9IGBcbiAgYVtocmVmXSxcbiAgYXJlYVtocmVmXSxcbiAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxuICB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksXG4gIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXG4gIGlmcmFtZSxcbiAgb2JqZWN0LFxuICBlbWJlZCxcbiAgW3RhYmluZGV4PVwiMFwiXSxcbiAgW2NvbnRlbnRlZGl0YWJsZV0sXG4gIGF1ZGlvW2NvbnRyb2xzXSxcbiAgdmlkZW9bY29udHJvbHNdLFxuICBzdW1tYXJ5XG5gO1xuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50W119XG4gICAqL1xuICBjb25zdCBnZXRGb2N1c2FibGVFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICAvKiogQHR5cGUge05vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+fSAqL1xuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4ID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpO1xuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4U29ydGVkID0gQXJyYXkuZnJvbShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleClcbiAgICAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCB0YWJpbmRleEEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCAnMCcpO1xuICAgICAgY29uc3QgdGFiaW5kZXhCID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgfHwgJzAnKTtcbiAgICAgIGlmICh0YWJpbmRleEEgPiB0YWJpbmRleEIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKHRhYmluZGV4QSA8IHRhYmluZGV4Qikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8qKiBAdHlwZSB7Tm9kZUxpc3RPZjxIVE1MRWxlbWVudD59ICovXG4gICAgY29uc3Qgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlKTtcbiAgICBjb25zdCBvdGhlckZvY3VzYWJsZUVsZW1lbnRzRmlsdGVyZWQgPSBBcnJheS5mcm9tKG90aGVyRm9jdXNhYmxlRWxlbWVudHMpLmZpbHRlcihlbCA9PiBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMScpO1xuICAgIHJldHVybiBbLi4ubmV3IFNldChmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleFNvcnRlZC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50c0ZpbHRlcmVkKSldLmZpbHRlcihlbCA9PiBpc1Zpc2libGUkMShlbCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzTW9kYWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLnNob3duKSAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNUb2FzdCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRvYXN0KTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc0xvYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBvcHVwLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlY3VyZWx5IHNldCBpbm5lckhUTUwgb2YgYW4gZWxlbWVudFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzE5MjZcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICAgKi9cbiAgY29uc3Qgc2V0SW5uZXJIdG1sID0gKGVsZW0sIGh0bWwpID0+IHtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgYHRleHQvaHRtbGApO1xuICAgICAgY29uc3QgaGVhZCA9IHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgICBpZiAoaGVhZCkge1xuICAgICAgICBBcnJheS5mcm9tKGhlYWQuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgYm9keSA9IHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICBBcnJheS5mcm9tKGJvZHkuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCB8fCBjaGlsZCBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQuY2xvbmVOb2RlKHRydWUpKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yNTA3XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBoYXNDbGFzcyA9IChlbGVtLCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc0xpc3QgPSBjbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW1vdmVDdXN0b21DbGFzc2VzID0gKGVsZW0sIHBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oZWxlbS5jbGFzc0xpc3QpLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhzd2FsQ2xhc3NlcykuaW5jbHVkZXMoY2xhc3NOYW1lKSAmJiAhT2JqZWN0LnZhbHVlcyhpY29uVHlwZXMpLmluY2x1ZGVzKGNsYXNzTmFtZSkgJiYgIU9iamVjdC52YWx1ZXMocGFyYW1zLnNob3dDbGFzcyB8fCB7fSkuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgY29uc3QgYXBwbHlDdXN0b21DbGFzcyA9IChlbGVtLCBwYXJhbXMsIGNsYXNzTmFtZSkgPT4ge1xuICAgIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKTtcbiAgICBpZiAoIXBhcmFtcy5jdXN0b21DbGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXN0b21DbGFzcyA9IHBhcmFtcy5jdXN0b21DbGFzc1soLyoqIEB0eXBlIHtrZXlvZiBTd2VldEFsZXJ0Q3VzdG9tQ2xhc3N9ICovY2xhc3NOYW1lKV07XG4gICAgaWYgKCFjdXN0b21DbGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGN1c3RvbUNsYXNzICE9PSAnc3RyaW5nJyAmJiAhY3VzdG9tQ2xhc3MuZm9yRWFjaCkge1xuICAgICAgd2FybihgSW52YWxpZCB0eXBlIG9mIGN1c3RvbUNsYXNzLiR7Y2xhc3NOYW1lfSEgRXhwZWN0ZWQgc3RyaW5nIG9yIGl0ZXJhYmxlIG9iamVjdCwgZ290IFwiJHt0eXBlb2YgY3VzdG9tQ2xhc3N9XCJgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWRkQ2xhc3MoZWxlbSwgY3VzdG9tQ2xhc3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9yZW5kZXJlcnMvcmVuZGVySW5wdXQnKS5JbnB1dENsYXNzIHwgU3dlZXRBbGVydElucHV0fSBpbnB1dENsYXNzXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldElucHV0JDEgPSAocG9wdXAsIGlucHV0Q2xhc3MpID0+IHtcbiAgICBpZiAoIWlucHV0Q2xhc3MpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKGlucHV0Q2xhc3MpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnBvcHVwfSA+IC4ke3N3YWxDbGFzc2VzW2lucHV0Q2xhc3NdfWApO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucG9wdXB9ID4gLiR7c3dhbENsYXNzZXMuY2hlY2tib3h9IGlucHV0YCk7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5wb3B1cH0gPiAuJHtzd2FsQ2xhc3Nlcy5yYWRpb30gaW5wdXQ6Y2hlY2tlZGApIHx8IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnBvcHVwfSA+IC4ke3N3YWxDbGFzc2VzLnJhZGlvfSBpbnB1dDpmaXJzdC1jaGlsZGApO1xuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucG9wdXB9ID4gLiR7c3dhbENsYXNzZXMucmFuZ2V9IGlucHV0YCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucG9wdXB9ID4gLiR7c3dhbENsYXNzZXMuaW5wdXR9YCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnR9IGlucHV0XG4gICAqL1xuICBjb25zdCBmb2N1c0lucHV0ID0gaW5wdXQgPT4ge1xuICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuICAgIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNDU5MTVcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfCBudWxsfSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgdW5kZWZpbmVkfSBjbGFzc0xpc3RcbiAgICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAgICovXG4gIGNvbnN0IHRvZ2dsZUNsYXNzID0gKHRhcmdldCwgY2xhc3NMaXN0LCBjb25kaXRpb24pID0+IHtcbiAgICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBjbGFzc0xpc3QuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfCBudWxsfSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgdW5kZWZpbmVkfSBjbGFzc0xpc3RcbiAgICovXG4gIGNvbnN0IGFkZENsYXNzID0gKHRhcmdldCwgY2xhc3NMaXN0KSA9PiB7XG4gICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSB8IG51bGx9IHRhcmdldFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdIHwgcmVhZG9ubHkgc3RyaW5nW10gfCB1bmRlZmluZWR9IGNsYXNzTGlzdFxuICAgKi9cbiAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAodGFyZ2V0LCBjbGFzc0xpc3QpID0+IHtcbiAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZGlyZWN0IGNoaWxkIG9mIGFuIGVsZW1lbnQgYnkgY2xhc3MgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgY29uc3QgZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzID0gKGVsZW0sIGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShlbGVtLmNoaWxkcmVuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaGFzQ2xhc3MoY2hpbGQsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgYXBwbHlOdW1lcmljYWxTdHlsZSA9IChlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IGAke3BhcnNlSW50KGAke3ZhbHVlfWApfWApIHtcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgfHwgcGFyc2VJbnQoYCR7dmFsdWV9YCkgPT09IDApIHtcbiAgICAgIGVsZW0uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBgJHt2YWx1ZX1weGAgOiB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bGx9IGVsZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlcbiAgICovXG4gIGNvbnN0IHNob3cgPSAoZWxlbSwgZGlzcGxheSA9ICdmbGV4JykgPT4ge1xuICAgIGlmICghZWxlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVsbH0gZWxlbVxuICAgKi9cbiAgY29uc3QgaGlkZSA9IGVsZW0gPT4ge1xuICAgIGlmICghZWxlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudWxsfSBlbGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5XG4gICAqL1xuICBjb25zdCBzaG93V2hlbklubmVySHRtbFByZXNlbnQgPSAoZWxlbSwgZGlzcGxheSA9ICdibG9jaycpID0+IHtcbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgdG9nZ2xlKGVsZW0sIGVsZW0uaW5uZXJIVE1MLCBkaXNwbGF5KTtcbiAgICB9KS5vYnNlcnZlKGVsZW0sIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBjb25zdCBzZXRTdHlsZSA9IChwYXJlbnQsIHNlbGVjdG9yLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH0gKi9cbiAgICBjb25zdCBlbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7Ym9vbGVhbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IGNvbmRpdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheVxuICAgKi9cbiAgY29uc3QgdG9nZ2xlID0gKGVsZW0sIGNvbmRpdGlvbiwgZGlzcGxheSA9ICdmbGV4JykgPT4ge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHNob3coZWxlbSwgZGlzcGxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGUoZWxlbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudWxsfSBlbGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNWaXNpYmxlJDEgPSBlbGVtID0+ICEhKGVsZW0gJiYgKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGFsbEJ1dHRvbnNBcmVIaWRkZW4gPSAoKSA9PiAhaXNWaXNpYmxlJDEoZ2V0Q29uZmlybUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlJDEoZ2V0RGVueUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlJDEoZ2V0Q2FuY2VsQnV0dG9uKCkpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNTY3JvbGxhYmxlID0gZWxlbSA9PiAhIShlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzdG9wRWxlbWVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IHNlbGZPclBhcmVudElzU2Nyb2xsYWJsZSA9IChlbGVtZW50LCBzdG9wRWxlbWVudCkgPT4ge1xuICAgIGxldCBwYXJlbnQgPSBlbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBzdG9wRWxlbWVudCkge1xuICAgICAgaWYgKGlzU2Nyb2xsYWJsZShwYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogYm9ycm93ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYzNTIxMTlcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGhhc0Nzc0FuaW1hdGlvbiA9IGVsZW0gPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgY29uc3QgYW5pbUR1cmF0aW9uID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdhbmltYXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIGNvbnN0IHRyYW5zRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXNldFxuICAgKi9cbiAgY29uc3QgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIgPSAodGltZXIsIHJlc2V0ID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIGlmICghdGltZXJQcm9ncmVzc0Jhcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNWaXNpYmxlJDEodGltZXJQcm9ncmVzc0JhcikpIHtcbiAgICAgIGlmIChyZXNldCkge1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gYHdpZHRoICR7dGltZXIgLyAxMDAwfXMgbGluZWFyYDtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzdG9wVGltZXJQcm9ncmVzc0JhciA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIGlmICghdGltZXJQcm9ncmVzc0Jhcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0aW1lclByb2dyZXNzQmFyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgY29uc3QgdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpbWVyUHJvZ3Jlc3NCYXIpLndpZHRoKTtcbiAgICBjb25zdCB0aW1lclByb2dyZXNzQmFyUGVyY2VudCA9IHRpbWVyUHJvZ3Jlc3NCYXJXaWR0aCAvIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggKiAxMDA7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3RpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50fSVgO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRlY3QgTm9kZSBlbnZcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc05vZGVFbnYgPSAoKSA9PiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xuXG4gIGNvbnN0IHN3ZWV0SFRNTCA9IGBcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cIiR7c3dhbENsYXNzZXMudGl0bGV9XCIgYXJpYS1kZXNjcmliZWRieT1cIiR7c3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ119XCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLnBvcHVwfVwiIHRhYmluZGV4PVwiLTFcIj5cbiAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jbG9zZX1cIj48L2J1dHRvbj5cbiAgIDx1bCBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ119XCI+PC91bD5cbiAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmljb259XCI+PC9kaXY+XG4gICA8aW1nIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5pbWFnZX1cIiAvPlxuICAgPGgyIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy50aXRsZX1cIiBpZD1cIiR7c3dhbENsYXNzZXMudGl0bGV9XCI+PC9oMj5cbiAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddfVwiIGlkPVwiJHtzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXX1cIj48L2Rpdj5cbiAgIDxpbnB1dCBjbGFzcz1cIiR7c3dhbENsYXNzZXMuaW5wdXR9XCIgaWQ9XCIke3N3YWxDbGFzc2VzLmlucHV0fVwiIC8+XG4gICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZmlsZX1cIiAvPlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMucmFuZ2V9XCI+XG4gICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiAvPlxuICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxuICAgPC9kaXY+XG4gICA8c2VsZWN0IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5zZWxlY3R9XCIgaWQ9XCIke3N3YWxDbGFzc2VzLnNlbGVjdH1cIj48L3NlbGVjdD5cbiAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLnJhZGlvfVwiPjwvZGl2PlxuICAgPGxhYmVsIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jaGVja2JveH1cIj5cbiAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtzd2FsQ2xhc3Nlcy5jaGVja2JveH1cIiAvPlxuICAgICA8c3BhbiBjbGFzcz1cIiR7c3dhbENsYXNzZXMubGFiZWx9XCI+PC9zcGFuPlxuICAgPC9sYWJlbD5cbiAgIDx0ZXh0YXJlYSBjbGFzcz1cIiR7c3dhbENsYXNzZXMudGV4dGFyZWF9XCIgaWQ9XCIke3N3YWxDbGFzc2VzLnRleHRhcmVhfVwiPjwvdGV4dGFyZWE+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ119XCIgaWQ9XCIke3N3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXX1cIj48L2Rpdj5cbiAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmFjdGlvbnN9XCI+XG4gICAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmxvYWRlcn1cIj48L2Rpdj5cbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmNvbmZpcm19XCI+PC9idXR0b24+XG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5kZW55fVwiPjwvYnV0dG9uPlxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuY2FuY2VsfVwiPjwvYnV0dG9uPlxuICAgPC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5mb290ZXJ9XCI+PC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciddfVwiPlxuICAgICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ119XCI+PC9kaXY+XG4gICA8L2Rpdj5cbiA8L2Rpdj5cbmAucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IHJlc2V0T2xkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG9sZENvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIGlmICghb2xkQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9sZENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ2hhcy1jb2x1bW4nXV0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEgPSAoKSA9PiB7XG4gICAgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgfTtcbiAgY29uc3QgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgY29uc3QgZmlsZSA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gICAgLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqL1xuICAgIGNvbnN0IHJhbmdlID0gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucmFuZ2V9IGlucHV0YCk7XG4gICAgLyoqIEB0eXBlIHtIVE1MT3V0cHV0RWxlbWVudH0gKi9cbiAgICBjb25zdCByYW5nZU91dHB1dCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnJhbmdlfSBvdXRwdXRgKTtcbiAgICBjb25zdCBzZWxlY3QgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqL1xuICAgIGNvbnN0IGNoZWNrYm94ID0gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMuY2hlY2tib3h9IGlucHV0YCk7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICBpbnB1dC5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIGZpbGUub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlJDE7XG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIHRleHRhcmVhLm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlJDE7XG4gICAgcmFuZ2Uub25pbnB1dCA9ICgpID0+IHtcbiAgICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSgpO1xuICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgICB9O1xuICAgIHJhbmdlLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxKCk7XG4gICAgICByYW5nZU91dHB1dC52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBjb25zdCBnZXRUYXJnZXQgPSB0YXJnZXQgPT4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2V0dXBBY2Nlc3NpYmlsaXR5ID0gcGFyYW1zID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdyb2xlJywgcGFyYW1zLnRvYXN0ID8gJ2FsZXJ0JyA6ICdkaWFsb2cnKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHBhcmFtcy50b2FzdCA/ICdwb2xpdGUnIDogJ2Fzc2VydGl2ZScpO1xuICAgIGlmICghcGFyYW1zLnRvYXN0KSB7XG4gICAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuICAgKi9cbiAgY29uc3Qgc2V0dXBSVEwgPSB0YXJnZXRFbGVtZW50ID0+IHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0RWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgYWRkQ2xhc3MoZ2V0Q29udGFpbmVyKCksIHN3YWxDbGFzc2VzLnJ0bCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbW9kYWwgKyBiYWNrZHJvcCB0byBET01cbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBpbml0ID0gcGFyYW1zID0+IHtcbiAgICAvLyBDbGVhbiB1cCB0aGUgb2xkIHBvcHVwIGNvbnRhaW5lciBpZiBpdCBleGlzdHNcbiAgICBjb25zdCBvbGRDb250YWluZXJFeGlzdGVkID0gcmVzZXRPbGRDb250YWluZXIoKTtcbiAgICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG4gICAgaWYgKG9sZENvbnRhaW5lckV4aXN0ZWQpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbJ25vLXRyYW5zaXRpb24nXSk7XG4gICAgfVxuICAgIHNldElubmVySHRtbChjb250YWluZXIsIHN3ZWV0SFRNTCk7XG4gICAgY29udGFpbmVyLmRhdGFzZXRbJ3N3YWwyVGhlbWUnXSA9IHBhcmFtcy50aGVtZTtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZ2V0VGFyZ2V0KHBhcmFtcy50YXJnZXQpO1xuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBpZiAocGFyYW1zLnRvcExheWVyKSB7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdwb3BvdmVyJywgJycpO1xuICAgICAgY29udGFpbmVyLnNob3dQb3BvdmVyKCk7XG4gICAgfVxuICAgIHNldHVwQWNjZXNzaWJpbGl0eShwYXJhbXMpO1xuICAgIHNldHVwUlRMKHRhcmdldEVsZW1lbnQpO1xuICAgIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBvYmplY3QgfCBzdHJpbmd9IHBhcmFtXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKi9cbiAgY29uc3QgcGFyc2VIdG1sVG9Db250YWluZXIgPSAocGFyYW0sIHRhcmdldCkgPT4ge1xuICAgIC8vIERPTSBlbGVtZW50XG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbSk7XG4gICAgfVxuXG4gICAgLy8gT2JqZWN0XG4gICAgZWxzZSBpZiAodHlwZW9mIHBhcmFtID09PSAnb2JqZWN0Jykge1xuICAgICAgaGFuZGxlT2JqZWN0KHBhcmFtLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIC8vIFBsYWluIHN0cmluZ1xuICAgIGVsc2UgaWYgKHBhcmFtKSB7XG4gICAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqL1xuICBjb25zdCBoYW5kbGVPYmplY3QgPSAocGFyYW0sIHRhcmdldCkgPT4ge1xuICAgIC8vIEpRdWVyeSBlbGVtZW50KHMpXG4gICAgaWYgKHBhcmFtLmpxdWVyeSkge1xuICAgICAgaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIHBhcmFtKTtcbiAgICB9XG5cbiAgICAvLyBGb3Igb3RoZXIgb2JqZWN0cyB1c2UgdGhlaXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgZWxzZSB7XG4gICAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbS50b1N0cmluZygpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcGFyYW0ge29iamVjdH0gZWxlbVxuICAgKi9cbiAgY29uc3QgaGFuZGxlSnF1ZXJ5RWxlbSA9ICh0YXJnZXQsIGVsZW0pID0+IHtcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoMCBpbiBlbGVtKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSBpbiBlbGVtOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1baV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJBY3Rpb25zID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIGNvbnN0IGxvYWRlciA9IGdldExvYWRlcigpO1xuICAgIGlmICghYWN0aW9ucyB8fCAhbG9hZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWN0aW9ucyAoYnV0dG9ucykgd3JhcHBlclxuICAgIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0RlbnlCdXR0b24gJiYgIXBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICBoaWRlKGFjdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93KGFjdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoYWN0aW9ucywgcGFyYW1zLCAnYWN0aW9ucycpO1xuXG4gICAgLy8gUmVuZGVyIGFsbCB0aGUgYnV0dG9uc1xuICAgIHJlbmRlckJ1dHRvbnMoYWN0aW9ucywgbG9hZGVyLCBwYXJhbXMpO1xuXG4gICAgLy8gTG9hZGVyXG4gICAgc2V0SW5uZXJIdG1sKGxvYWRlciwgcGFyYW1zLmxvYWRlckh0bWwgfHwgJycpO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MobG9hZGVyLCBwYXJhbXMsICdsb2FkZXInKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYWN0aW9uc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBsb2FkZXJcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJCdXR0b25zKGFjdGlvbnMsIGxvYWRlciwgcGFyYW1zKSB7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICBjb25zdCBkZW55QnV0dG9uID0gZ2V0RGVueUJ1dHRvbigpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICAgIGlmICghY29uZmlybUJ1dHRvbiB8fCAhZGVueUJ1dHRvbiB8fCAhY2FuY2VsQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIGJ1dHRvbnNcbiAgICByZW5kZXJCdXR0b24oY29uZmlybUJ1dHRvbiwgJ2NvbmZpcm0nLCBwYXJhbXMpO1xuICAgIHJlbmRlckJ1dHRvbihkZW55QnV0dG9uLCAnZGVueScsIHBhcmFtcyk7XG4gICAgcmVuZGVyQnV0dG9uKGNhbmNlbEJ1dHRvbiwgJ2NhbmNlbCcsIHBhcmFtcyk7XG4gICAgaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpO1xuICAgIGlmIChwYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoY2FuY2VsQnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoZGVueUJ1dHRvbiwgY29uZmlybUJ1dHRvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjYW5jZWxCdXR0b24sIGxvYWRlcik7XG4gICAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGRlbnlCdXR0b24sIGxvYWRlcik7XG4gICAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNvbmZpcm1CdXR0b24sIGxvYWRlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbmZpcm1CdXR0b25cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGVueUJ1dHRvblxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjYW5jZWxCdXR0b25cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25zU3R5bGluZyhjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICByZW1vdmVDbGFzcyhbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWRkQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG5cbiAgICAvLyBBcHBseSBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMgdG8gYWN0aW9uIGJ1dHRvbnNcbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yJywgcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcik7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZGVueUJ1dHRvbkNvbG9yKSB7XG4gICAgICBkZW55QnV0dG9uLnN0eWxlLnNldFByb3BlcnR5KCctLXN3YWwyLWRlbnktYnV0dG9uLWJhY2tncm91bmQtY29sb3InLCBwYXJhbXMuZGVueUJ1dHRvbkNvbG9yKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcikge1xuICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLnNldFByb3BlcnR5KCctLXN3YWwyLWNhbmNlbC1idXR0b24tYmFja2dyb3VuZC1jb2xvcicsIHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcik7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIG91dGxpbmUgY29sb3IgdG8gYWN0aW9uIGJ1dHRvbnNcbiAgICBhcHBseU91dGxpbmVDb2xvcihjb25maXJtQnV0dG9uKTtcbiAgICBhcHBseU91dGxpbmVDb2xvcihkZW55QnV0dG9uKTtcbiAgICBhcHBseU91dGxpbmVDb2xvcihjYW5jZWxCdXR0b24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvblxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlPdXRsaW5lQ29sb3IoYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShidXR0b24pO1xuICAgIGlmIChidXR0b25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLXN3YWwyLWFjdGlvbi1idXR0b24tZm9jdXMtYm94LXNoYWRvdycpKSB7XG4gICAgICAvLyBJZiB0aGUgYnV0dG9uIGFscmVhZHkgaGFzIGEgY3VzdG9tIG91dGxpbmUgY29sb3IsIG5vIG5lZWQgdG8gY2hhbmdlIGl0XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG91dGxpbmVDb2xvciA9IGJ1dHRvblN0eWxlLmJhY2tncm91bmRDb2xvci5yZXBsYWNlKC9yZ2JhP1xcKChcXGQrKSwgKFxcZCspLCAoXFxkKykuKi8sICdyZ2JhKCQxLCAkMiwgJDMsIDAuNSknKTtcbiAgICBidXR0b24uc3R5bGUuc2V0UHJvcGVydHkoJy0tc3dhbDItYWN0aW9uLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93JywgYnV0dG9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1zd2FsMi1vdXRsaW5lJykucmVwbGFjZSgvIHJnYmFcXCguKi8sIGAgJHtvdXRsaW5lQ29sb3J9YCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvblxuICAgKiBAcGFyYW0geydjb25maXJtJyB8ICdkZW55JyB8ICdjYW5jZWwnfSBidXR0b25UeXBlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKGJ1dHRvbiwgYnV0dG9uVHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgYnV0dG9uTmFtZSA9IC8qKiBAdHlwZSB7J0NvbmZpcm0nIHwgJ0RlbnknIHwgJ0NhbmNlbCd9ICovY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJ1dHRvblR5cGUpO1xuICAgIHRvZ2dsZShidXR0b24sIHBhcmFtc1tgc2hvdyR7YnV0dG9uTmFtZX1CdXR0b25gXSwgJ2lubGluZS1ibG9jaycpO1xuICAgIHNldElubmVySHRtbChidXR0b24sIHBhcmFtc1tgJHtidXR0b25UeXBlfUJ1dHRvblRleHRgXSB8fCAnJyk7IC8vIFNldCBjYXB0aW9uIHRleHRcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zW2Ake2J1dHRvblR5cGV9QnV0dG9uQXJpYUxhYmVsYF0gfHwgJycpOyAvLyBBUklBIGxhYmVsXG5cbiAgICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1tidXR0b25UeXBlXTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGJ1dHRvbiwgcGFyYW1zLCBgJHtidXR0b25UeXBlfUJ1dHRvbmApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJDbG9zZUJ1dHRvbiA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuICAgIGlmICghY2xvc2VCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0SW5uZXJIdG1sKGNsb3NlQnV0dG9uLCBwYXJhbXMuY2xvc2VCdXR0b25IdG1sIHx8ICcnKTtcblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoY2xvc2VCdXR0b24sIHBhcmFtcywgJ2Nsb3NlQnV0dG9uJyk7XG4gICAgdG9nZ2xlKGNsb3NlQnV0dG9uLCBwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2xvc2VCdXR0b25BcmlhTGFiZWwgfHwgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVyQ29udGFpbmVyID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmJhY2tkcm9wKTtcbiAgICBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLnBvc2l0aW9uKTtcbiAgICBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBwYXJhbXMuZ3Jvdyk7XG5cbiAgICAvLyBDdXN0b20gY2xhc3NcbiAgICBhcHBseUN1c3RvbUNsYXNzKGNvbnRhaW5lciwgcGFyYW1zLCAnY29udGFpbmVyJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydiYWNrZHJvcCddfSBiYWNrZHJvcFxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BQYXJhbShjb250YWluZXIsIGJhY2tkcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBiYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2Ryb3A7XG4gICAgfSBlbHNlIGlmICghYmFja2Ryb3ApIHtcbiAgICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydwb3NpdGlvbiddfSBwb3NpdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlUG9zaXRpb25QYXJhbShjb250YWluZXIsIHBvc2l0aW9uKSB7XG4gICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbcG9zaXRpb25dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybignVGhlIFwicG9zaXRpb25cIiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiY2VudGVyXCInKTtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnNbJ2dyb3cnXX0gZ3Jvd1xuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlR3Jvd1BhcmFtKGNvbnRhaW5lciwgZ3Jvdykge1xuICAgIGlmICghZ3Jvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2Bncm93LSR7Z3Jvd31gXSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtb2R1bGUgY29udGFpbnMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBTd2FsYCBoYXMuXG4gICAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICAgKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAgICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAgICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICAgKi9cblxuICB2YXIgcHJpdmF0ZVByb3BzID0ge1xuICAgIGlubmVyUGFyYW1zOiBuZXcgV2Vha01hcCgpLFxuICAgIGRvbUNhY2hlOiBuZXcgV2Vha01hcCgpXG4gIH07XG5cbiAgLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3N3ZWV0YWxlcnQyLmQudHNcIi8+XG5cblxuICAvKiogQHR5cGUge0lucHV0Q2xhc3NbXX0gKi9cbiAgY29uc3QgaW5wdXRDbGFzc2VzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVySW5wdXQgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgY29uc3QgcmVyZW5kZXIgPSAhaW5uZXJQYXJhbXMgfHwgcGFyYW1zLmlucHV0ICE9PSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgICBpbnB1dENsYXNzZXMuZm9yRWFjaChpbnB1dENsYXNzID0+IHtcbiAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlc1tpbnB1dENsYXNzXSk7XG4gICAgICBpZiAoIWlucHV0Q29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcbiAgICAgIHNldEF0dHJpYnV0ZXMoaW5wdXRDbGFzcywgcGFyYW1zLmlucHV0QXR0cmlidXRlcyk7XG5cbiAgICAgIC8vIHNldCBjbGFzc1xuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbaW5wdXRDbGFzc107XG4gICAgICBpZiAocmVyZW5kZXIpIHtcbiAgICAgICAgaGlkZShpbnB1dENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgaWYgKHJlcmVuZGVyKSB7XG4gICAgICAgIHNob3dJbnB1dChwYXJhbXMpO1xuICAgICAgfVxuICAgICAgLy8gc2V0IGN1c3RvbSBjbGFzc1xuICAgICAgc2V0Q3VzdG9tQ2xhc3MocGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2hvd0lucHV0ID0gcGFyYW1zID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKSB7XG4gICAgICBlcnJvcihgVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCAke09iamVjdC5rZXlzKHJlbmRlcklucHV0VHlwZSkuam9pbignIHwgJyl9LCBnb3QgXCIke3BhcmFtcy5pbnB1dH1cImApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dCk7XG4gICAgaWYgKCFpbnB1dENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IHJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKGlucHV0Q29udGFpbmVyLCBwYXJhbXMpO1xuICAgIHNob3coaW5wdXRDb250YWluZXIpO1xuXG4gICAgLy8gaW5wdXQgYXV0b2ZvY3VzXG4gICAgaWYgKHBhcmFtcy5pbnB1dEF1dG9Gb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqL1xuICBjb25zdCByZW1vdmVBdHRyaWJ1dGVzID0gaW5wdXQgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2ldLm5hbWU7XG4gICAgICBpZiAoIVsnaWQnLCAndHlwZScsICd2YWx1ZScsICdzdHlsZSddLmluY2x1ZGVzKGF0dHJOYW1lKSkge1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtJbnB1dENsYXNzfSBpbnB1dENsYXNzXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnNbJ2lucHV0QXR0cmlidXRlcyddfSBpbnB1dEF0dHJpYnV0ZXNcbiAgICovXG4gIGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoaW5wdXRDbGFzcywgaW5wdXRBdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5wdXQgPSBnZXRJbnB1dCQxKHBvcHVwLCBpbnB1dENsYXNzKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZXMoaW5wdXQpO1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiBpbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyLCBpbnB1dEF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBzZXRDdXN0b21DbGFzcyA9IHBhcmFtcyA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpO1xuICAgIGlmIChpbnB1dENvbnRhaW5lcikge1xuICAgICAgYXBwbHlDdXN0b21DbGFzcyhpbnB1dENvbnRhaW5lciwgcGFyYW1zLCAnaW5wdXQnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2V0SW5wdXRQbGFjZWhvbGRlciA9IChpbnB1dCwgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFpbnB1dC5wbGFjZWhvbGRlciAmJiBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SW5wdXR9IGlucHV0XG4gICAqIEBwYXJhbSB7SW5wdXR9IHByZXBlbmRUb1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNldElucHV0TGFiZWwgPSAoaW5wdXQsIHByZXBlbmRUbywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKHBhcmFtcy5pbnB1dExhYmVsKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBjb25zdCBsYWJlbENsYXNzID0gc3dhbENsYXNzZXNbJ2lucHV0LWxhYmVsJ107XG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0LmlkKTtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IGxhYmVsQ2xhc3M7XG4gICAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYWRkQ2xhc3MobGFiZWwsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dExhYmVsKTtcbiAgICAgIH1cbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHBhcmFtcy5pbnB1dExhYmVsO1xuICAgICAgcHJlcGVuZFRvLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBsYWJlbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRJbnB1dH0gaW5wdXRUeXBlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGNvbnN0IGdldElucHV0Q29udGFpbmVyID0gaW5wdXRUeXBlID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlc1soLyoqIEB0eXBlIHtTd2FsQ2xhc3N9ICovaW5wdXRUeXBlKV0gfHwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnQgfCBIVE1MT3V0cHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnNbJ2lucHV0VmFsdWUnXX0gaW5wdXRWYWx1ZVxuICAgKi9cbiAgY29uc3QgY2hlY2tBbmRTZXRJbnB1dFZhbHVlID0gKGlucHV0LCBpbnB1dFZhbHVlKSA9PiB7XG4gICAgaWYgKFsnc3RyaW5nJywgJ251bWJlciddLmluY2x1ZGVzKHR5cGVvZiBpbnB1dFZhbHVlKSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBgJHtpbnB1dFZhbHVlfWA7XG4gICAgfSBlbHNlIGlmICghaXNQcm9taXNlKGlucHV0VmFsdWUpKSB7XG4gICAgICB3YXJuKGBVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRWYWx1ZSEgRXhwZWN0ZWQgXCJzdHJpbmdcIiwgXCJudW1iZXJcIiBvciBcIlByb21pc2VcIiwgZ290IFwiJHt0eXBlb2YgaW5wdXRWYWx1ZX1cImApO1xuICAgIH1cbiAgfTtcblxuICAvKiogQHR5cGUge1JlY29yZDxTd2VldEFsZXJ0SW5wdXQsIChpbnB1dDogSW5wdXQgfCBIVE1MRWxlbWVudCwgcGFyYW1zOiBTd2VldEFsZXJ0T3B0aW9ucykgPT4gSW5wdXQ+fSAqL1xuICBjb25zdCByZW5kZXJJbnB1dFR5cGUgPSB7fTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUudGV4dCA9IHJlbmRlcklucHV0VHlwZS5lbWFpbCA9IHJlbmRlcklucHV0VHlwZS5wYXNzd29yZCA9IHJlbmRlcklucHV0VHlwZS5udW1iZXIgPSByZW5kZXJJbnB1dFR5cGUudGVsID0gcmVuZGVySW5wdXRUeXBlLnVybCA9IHJlbmRlcklucHV0VHlwZS5zZWFyY2ggPSByZW5kZXJJbnB1dFR5cGUuZGF0ZSA9IHJlbmRlcklucHV0VHlwZVsnZGF0ZXRpbWUtbG9jYWwnXSA9IHJlbmRlcklucHV0VHlwZS50aW1lID0gcmVuZGVySW5wdXRUeXBlLndlZWsgPSByZW5kZXJJbnB1dFR5cGUubW9udGggPSAvKiogQHR5cGUgeyhpbnB1dDogSW5wdXQgfCBIVE1MRWxlbWVudCwgcGFyYW1zOiBTd2VldEFsZXJ0T3B0aW9ucykgPT4gSW5wdXR9ICovXG4gIChpbnB1dCwgcGFyYW1zKSA9PiB7XG4gICAgY2hlY2tBbmRTZXRJbnB1dFZhbHVlKGlucHV0LCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgc2V0SW5wdXRMYWJlbChpbnB1dCwgaW5wdXQsIHBhcmFtcyk7XG4gICAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKTtcbiAgICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgIHJldHVybiBpbnB1dDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUuZmlsZSA9IChpbnB1dCwgcGFyYW1zKSA9PiB7XG4gICAgc2V0SW5wdXRMYWJlbChpbnB1dCwgaW5wdXQsIHBhcmFtcyk7XG4gICAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gcmFuZ2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLnJhbmdlID0gKHJhbmdlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBjb25zdCByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgIGNoZWNrQW5kU2V0SW5wdXRWYWx1ZShyYW5nZUlucHV0LCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgcmFuZ2VJbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgIGNoZWNrQW5kU2V0SW5wdXRWYWx1ZShyYW5nZU91dHB1dCwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHNldElucHV0TGFiZWwocmFuZ2VJbnB1dCwgcmFuZ2UsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxTZWxlY3RFbGVtZW50fSBzZWxlY3RcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MU2VsZWN0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5zZWxlY3QgPSAoc2VsZWN0LCBwYXJhbXMpID0+IHtcbiAgICBzZWxlY3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAocGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBzZXRJbm5lckh0bWwocGxhY2Vob2xkZXIsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gICAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBwbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgIH1cbiAgICBzZXRJbnB1dExhYmVsKHNlbGVjdCwgc2VsZWN0LCBwYXJhbXMpO1xuICAgIHJldHVybiBzZWxlY3Q7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gcmFkaW9cbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUucmFkaW8gPSByYWRpbyA9PiB7XG4gICAgcmFkaW8udGV4dENvbnRlbnQgPSAnJztcbiAgICByZXR1cm4gcmFkaW87XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTExhYmVsRWxlbWVudH0gY2hlY2tib3hDb250YWluZXJcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLmNoZWNrYm94ID0gKGNoZWNrYm94Q29udGFpbmVyLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBjaGVja2JveCA9IGdldElucHV0JDEoZ2V0UG9wdXAoKSwgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3gudmFsdWUgPSAnMSc7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IEJvb2xlYW4ocGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIGNvbnN0IGxhYmVsID0gY2hlY2tib3hDb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgIHNldElubmVySHRtbChsYWJlbCwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIgfHwgcGFyYW1zLmlucHV0TGFiZWwpO1xuICAgIHJldHVybiBjaGVja2JveDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MVGV4dEFyZWFFbGVtZW50fSB0ZXh0YXJlYVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxUZXh0QXJlYUVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUudGV4dGFyZWEgPSAodGV4dGFyZWEsIHBhcmFtcykgPT4ge1xuICAgIGNoZWNrQW5kU2V0SW5wdXRWYWx1ZSh0ZXh0YXJlYSwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIodGV4dGFyZWEsIHBhcmFtcyk7XG4gICAgc2V0SW5wdXRMYWJlbCh0ZXh0YXJlYSwgdGV4dGFyZWEsIHBhcmFtcyk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgY29uc3QgZ2V0TWFyZ2luID0gZWwgPT4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLm1hcmdpblJpZ2h0KTtcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjI5MVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8xNjk5XG4gICAgICBpZiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICBjb25zdCBpbml0aWFsUG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdldFBvcHVwKCkpLndpZHRoKTtcbiAgICAgICAgY29uc3QgdGV4dGFyZWFSZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHRleGFyZWEgaXMgc3RpbGwgaW4gZG9jdW1lbnQgKGkuZS4gcG9wdXAgd2Fzbid0IGNsb3NlZCBpbiB0aGUgbWVhbnRpbWUpXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRleHRhcmVhKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0ZXh0YXJlYVdpZHRoID0gdGV4dGFyZWEub2Zmc2V0V2lkdGggKyBnZXRNYXJnaW4odGV4dGFyZWEpO1xuICAgICAgICAgIGlmICh0ZXh0YXJlYVdpZHRoID4gaW5pdGlhbFBvcHVwV2lkdGgpIHtcbiAgICAgICAgICAgIGdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBgJHt0ZXh0YXJlYVdpZHRofXB4YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShnZXRQb3B1cCgpLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGV4dGFyZWFSZXNpemVIYW5kbGVyKS5vYnNlcnZlKHRleHRhcmVhLCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGV4dGFyZWE7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJDb250ZW50ID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBodG1sQ29udGFpbmVyID0gZ2V0SHRtbENvbnRhaW5lcigpO1xuICAgIGlmICghaHRtbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93V2hlbklubmVySHRtbFByZXNlbnQoaHRtbENvbnRhaW5lcik7XG4gICAgYXBwbHlDdXN0b21DbGFzcyhodG1sQ29udGFpbmVyLCBwYXJhbXMsICdodG1sQ29udGFpbmVyJyk7XG5cbiAgICAvLyBDb250ZW50IGFzIEhUTUxcbiAgICBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5odG1sLCBodG1sQ29udGFpbmVyKTtcbiAgICAgIHNob3coaHRtbENvbnRhaW5lciwgJ2Jsb2NrJyk7XG4gICAgfVxuXG4gICAgLy8gQ29udGVudCBhcyBwbGFpbiB0ZXh0XG4gICAgZWxzZSBpZiAocGFyYW1zLnRleHQpIHtcbiAgICAgIGh0bWxDb250YWluZXIudGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dDtcbiAgICAgIHNob3coaHRtbENvbnRhaW5lciwgJ2Jsb2NrJyk7XG4gICAgfVxuXG4gICAgLy8gTm8gY29udGVudFxuICAgIGVsc2Uge1xuICAgICAgaGlkZShodG1sQ29udGFpbmVyKTtcbiAgICB9XG4gICAgcmVuZGVySW5wdXQoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJGb290ZXIgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGdldEZvb3RlcigpO1xuICAgIGlmICghZm9vdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3dXaGVuSW5uZXJIdG1sUHJlc2VudChmb290ZXIpO1xuICAgIHRvZ2dsZShmb290ZXIsIEJvb2xlYW4ocGFyYW1zLmZvb3RlciksICdibG9jaycpO1xuICAgIGlmIChwYXJhbXMuZm9vdGVyKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuZm9vdGVyLCBmb290ZXIpO1xuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoZm9vdGVyLCBwYXJhbXMsICdmb290ZXInKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlckljb24gPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgY29uc3QgaWNvbiA9IGdldEljb24oKTtcbiAgICBpZiAoIWljb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgZ2l2ZW4gaWNvbiBhbHJlYWR5IHJlbmRlcmVkLCBhcHBseSB0aGUgc3R5bGluZyB3aXRob3V0IHJlLXJlbmRlcmluZyB0aGUgaWNvblxuICAgIGlmIChpbm5lclBhcmFtcyAmJiBwYXJhbXMuaWNvbiA9PT0gaW5uZXJQYXJhbXMuaWNvbikge1xuICAgICAgLy8gQ3VzdG9tIG9yIGRlZmF1bHQgY29udGVudFxuICAgICAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpO1xuICAgICAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXMuaWNvbiAmJiAhcGFyYW1zLmljb25IdG1sKSB7XG4gICAgICBoaWRlKGljb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmljb24gJiYgT2JqZWN0LmtleXMoaWNvblR5cGVzKS5pbmRleE9mKHBhcmFtcy5pY29uKSA9PT0gLTEpIHtcbiAgICAgIGVycm9yKGBVbmtub3duIGljb24hIEV4cGVjdGVkIFwic3VjY2Vzc1wiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiBvciBcInF1ZXN0aW9uXCIsIGdvdCBcIiR7cGFyYW1zLmljb259XCJgKTtcbiAgICAgIGhpZGUoaWNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3coaWNvbik7XG5cbiAgICAvLyBDdXN0b20gb3IgZGVmYXVsdCBjb250ZW50XG4gICAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpO1xuICAgIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcyk7XG5cbiAgICAvLyBBbmltYXRlIGljb25cbiAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuc2hvd0NsYXNzICYmIHBhcmFtcy5zaG93Q2xhc3MuaWNvbik7XG5cbiAgICAvLyBSZS1hZGp1c3QgdGhlIHN1Y2Nlc3MgaWNvbiBvbiBzeXN0ZW0gdGhlbWUgY2hhbmdlXG4gICAgY29uc3QgY29sb3JTY2hlbWVRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpO1xuICAgIGNvbG9yU2NoZW1lUXVlcnlMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dyb3VuZENvbG9yKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaWNvblxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IGFwcGx5U3R5bGVzID0gKGljb24sIHBhcmFtcykgPT4ge1xuICAgIGZvciAoY29uc3QgW2ljb25UeXBlLCBpY29uQ2xhc3NOYW1lXSBvZiBPYmplY3QuZW50cmllcyhpY29uVHlwZXMpKSB7XG4gICAgICBpZiAocGFyYW1zLmljb24gIT09IGljb25UeXBlKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGljb24sIGljb25DbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuaWNvbiAmJiBpY29uVHlwZXNbcGFyYW1zLmljb25dKTtcblxuICAgIC8vIEljb24gY29sb3JcbiAgICBzZXRDb2xvcihpY29uLCBwYXJhbXMpO1xuXG4gICAgLy8gU3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3JcbiAgICBhZGp1c3RTdWNjZXNzSWNvbkJhY2tncm91bmRDb2xvcigpO1xuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhpY29uLCBwYXJhbXMsICdpY29uJyk7XG4gIH07XG5cbiAgLy8gQWRqdXN0IHN1Y2Nlc3MgaWNvbiBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHRoZSBwb3B1cCBiYWNrZ3JvdW5kIGNvbG9yXG4gIGNvbnN0IGFkanVzdFN1Y2Nlc3NJY29uQmFja2dyb3VuZENvbG9yID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBvcHVwQmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocG9wdXApLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICAvKiogQHR5cGUge05vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+fSAqL1xuICAgIGNvbnN0IHN1Y2Nlc3NJY29uUGFydHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VjY2Vzc0ljb25QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3Qgc3VjY2Vzc0ljb25IdG1sID0gcGFyYW1zID0+IGBcbiAgJHtwYXJhbXMuYW5pbWF0aW9uID8gJzxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFwiPjwvZGl2PicgOiAnJ31cbiAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1yaW5nXCI+PC9kaXY+XG4gICR7cGFyYW1zLmFuaW1hdGlvbiA/ICc8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj4nIDogJyd9XG4gICR7cGFyYW1zLmFuaW1hdGlvbiA/ICc8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XCI+PC9kaXY+JyA6ICcnfVxuYDtcbiAgY29uc3QgZXJyb3JJY29uSHRtbCA9IGBcbiAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmtcIj5cbiAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLWxlZnRcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1yaWdodFwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuYDtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaWNvblxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNldENvbnRlbnQgPSAoaWNvbiwgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaWNvbiAmJiAhcGFyYW1zLmljb25IdG1sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBvbGRDb250ZW50ID0gaWNvbi5pbm5lckhUTUw7XG4gICAgbGV0IG5ld0NvbnRlbnQgPSAnJztcbiAgICBpZiAocGFyYW1zLmljb25IdG1sKSB7XG4gICAgICBuZXdDb250ZW50ID0gaWNvbkNvbnRlbnQocGFyYW1zLmljb25IdG1sKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnc3VjY2VzcycpIHtcbiAgICAgIG5ld0NvbnRlbnQgPSBzdWNjZXNzSWNvbkh0bWwocGFyYW1zKTtcbiAgICAgIG9sZENvbnRlbnQgPSBvbGRDb250ZW50LnJlcGxhY2UoLyBzdHlsZT1cIi4qP1wiL2csICcnKTsgLy8gdW5kbyBhZGp1c3RTdWNjZXNzSWNvbkJhY2tncm91bmRDb2xvcigpXG4gICAgfSBlbHNlIGlmIChwYXJhbXMuaWNvbiA9PT0gJ2Vycm9yJykge1xuICAgICAgbmV3Q29udGVudCA9IGVycm9ySWNvbkh0bWw7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuaWNvbikge1xuICAgICAgY29uc3QgZGVmYXVsdEljb25IdG1sID0ge1xuICAgICAgICBxdWVzdGlvbjogJz8nLFxuICAgICAgICB3YXJuaW5nOiAnIScsXG4gICAgICAgIGluZm86ICdpJ1xuICAgICAgfTtcbiAgICAgIG5ld0NvbnRlbnQgPSBpY29uQ29udGVudChkZWZhdWx0SWNvbkh0bWxbcGFyYW1zLmljb25dKTtcbiAgICB9XG4gICAgaWYgKG9sZENvbnRlbnQudHJpbSgpICE9PSBuZXdDb250ZW50LnRyaW0oKSkge1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIG5ld0NvbnRlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaWNvblxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNldENvbG9yID0gKGljb24sIHBhcmFtcykgPT4ge1xuICAgIGlmICghcGFyYW1zLmljb25Db2xvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpY29uLnN0eWxlLmNvbG9yID0gcGFyYW1zLmljb25Db2xvcjtcbiAgICBpY29uLnN0eWxlLmJvcmRlckNvbG9yID0gcGFyYW1zLmljb25Db2xvcjtcbiAgICBmb3IgKGNvbnN0IHNlbCBvZiBbJy5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwJywgJy5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZycsICcuc3dhbDIteC1tYXJrLWxpbmUtbGVmdCcsICcuc3dhbDIteC1tYXJrLWxpbmUtcmlnaHQnXSkge1xuICAgICAgc2V0U3R5bGUoaWNvbiwgc2VsLCAnYmFja2dyb3VuZC1jb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpO1xuICAgIH1cbiAgICBzZXRTdHlsZShpY29uLCAnLnN3YWwyLXN1Y2Nlc3MtcmluZycsICdib3JkZXItY29sb3InLCBwYXJhbXMuaWNvbkNvbG9yKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNvbnN0IGljb25Db250ZW50ID0gY29udGVudCA9PiBgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ2ljb24tY29udGVudCddfVwiPiR7Y29udGVudH08L2Rpdj5gO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVySW1hZ2UgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gZ2V0SW1hZ2UoKTtcbiAgICBpZiAoIWltYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcGFyYW1zLmltYWdlVXJsKSB7XG4gICAgICBoaWRlKGltYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvdyhpbWFnZSwgJycpO1xuXG4gICAgLy8gU3JjLCBhbHRcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQgfHwgJycpO1xuXG4gICAgLy8gV2lkdGgsIGhlaWdodFxuICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTtcblxuICAgIC8vIENsYXNzXG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuaW1hZ2U7XG4gICAgYXBwbHlDdXN0b21DbGFzcyhpbWFnZSwgcGFyYW1zLCAnaW1hZ2UnKTtcbiAgfTtcblxuICBsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgbGV0IG1vdXNlZG93blggPSAwO1xuICBsZXQgbW91c2Vkb3duWSA9IDA7XG4gIGxldCBpbml0aWFsWCA9IDA7XG4gIGxldCBpbml0aWFsWSA9IDA7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqL1xuICBjb25zdCBhZGREcmFnZ2FibGVMaXN0ZW5lcnMgPSBwb3B1cCA9PiB7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG93bik7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlKTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXApO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkb3duKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdmUpO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdXApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKi9cbiAgY29uc3QgcmVtb3ZlRHJhZ2dhYmxlTGlzdGVuZXJzID0gcG9wdXAgPT4ge1xuICAgIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd24pO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSk7XG4gICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwKTtcbiAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZG93bik7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3ZlKTtcbiAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVwKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50IHwgVG91Y2hFdmVudH0gZXZlbnRcbiAgICovXG4gIGNvbnN0IGRvd24gPSBldmVudCA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHBvcHVwIHx8IGdldEljb24oKS5jb250YWlucygvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL2V2ZW50LnRhcmdldCkpIHtcbiAgICAgIGRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNsaWVudFhZID0gZ2V0Q2xpZW50WFkoZXZlbnQpO1xuICAgICAgbW91c2Vkb3duWCA9IGNsaWVudFhZLmNsaWVudFg7XG4gICAgICBtb3VzZWRvd25ZID0gY2xpZW50WFkuY2xpZW50WTtcbiAgICAgIGluaXRpYWxYID0gcGFyc2VJbnQocG9wdXAuc3R5bGUuaW5zZXRJbmxpbmVTdGFydCkgfHwgMDtcbiAgICAgIGluaXRpYWxZID0gcGFyc2VJbnQocG9wdXAuc3R5bGUuaW5zZXRCbG9ja1N0YXJ0KSB8fCAwO1xuICAgICAgYWRkQ2xhc3MocG9wdXAsICdzd2FsMi1kcmFnZ2luZycpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50IHwgVG91Y2hFdmVudH0gZXZlbnRcbiAgICovXG4gIGNvbnN0IG1vdmUgPSBldmVudCA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgbGV0IHtcbiAgICAgICAgY2xpZW50WCxcbiAgICAgICAgY2xpZW50WVxuICAgICAgfSA9IGdldENsaWVudFhZKGV2ZW50KTtcbiAgICAgIHBvcHVwLnN0eWxlLmluc2V0SW5saW5lU3RhcnQgPSBgJHtpbml0aWFsWCArIChjbGllbnRYIC0gbW91c2Vkb3duWCl9cHhgO1xuICAgICAgcG9wdXAuc3R5bGUuaW5zZXRCbG9ja1N0YXJ0ID0gYCR7aW5pdGlhbFkgKyAoY2xpZW50WSAtIG1vdXNlZG93blkpfXB4YDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBkcmFnZ2luZyA9IGZhbHNlO1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCAnc3dhbDItZHJhZ2dpbmcnKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50IHwgVG91Y2hFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge3sgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIgfX1cbiAgICovXG4gIGNvbnN0IGdldENsaWVudFhZID0gZXZlbnQgPT4ge1xuICAgIGxldCBjbGllbnRYID0gMCxcbiAgICAgIGNsaWVudFkgPSAwO1xuICAgIGlmIChldmVudC50eXBlLnN0YXJ0c1dpdGgoJ21vdXNlJykpIHtcbiAgICAgIGNsaWVudFggPSAvKiogQHR5cGUge01vdXNlRXZlbnR9ICovZXZlbnQuY2xpZW50WDtcbiAgICAgIGNsaWVudFkgPSAvKiogQHR5cGUge01vdXNlRXZlbnR9ICovZXZlbnQuY2xpZW50WTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUuc3RhcnRzV2l0aCgndG91Y2gnKSkge1xuICAgICAgY2xpZW50WCA9IC8qKiBAdHlwZSB7VG91Y2hFdmVudH0gKi9ldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICBjbGllbnRZID0gLyoqIEB0eXBlIHtUb3VjaEV2ZW50fSAqL2V2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaWVudFgsXG4gICAgICBjbGllbnRZXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlclBvcHVwID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFjb250YWluZXIgfHwgIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2lkdGhcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIxNzBcbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICBhcHBseU51bWVyaWNhbFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgcGFyYW1zLndpZHRoKTtcbiAgICAgIHBvcHVwLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG4gICAgICBpZiAobG9hZGVyKSB7XG4gICAgICAgIHBvcHVwLmluc2VydEJlZm9yZShsb2FkZXIsIGdldEljb24oKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICdwYWRkaW5nJywgcGFyYW1zLnBhZGRpbmcpO1xuXG4gICAgLy8gQ29sb3JcbiAgICBpZiAocGFyYW1zLmNvbG9yKSB7XG4gICAgICBwb3B1cC5zdHlsZS5jb2xvciA9IHBhcmFtcy5jb2xvcjtcbiAgICB9XG5cbiAgICAvLyBCYWNrZ3JvdW5kXG4gICAgaWYgKHBhcmFtcy5iYWNrZ3JvdW5kKSB7XG4gICAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gICAgfVxuICAgIGhpZGUoZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSk7XG5cbiAgICAvLyBDbGFzc2VzXG4gICAgYWRkQ2xhc3NlcyQxKHBvcHVwLCBwYXJhbXMpO1xuICAgIGlmIChwYXJhbXMuZHJhZ2dhYmxlICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5kcmFnZ2FibGUpO1xuICAgICAgYWRkRHJhZ2dhYmxlTGlzdGVuZXJzKHBvcHVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmRyYWdnYWJsZSk7XG4gICAgICByZW1vdmVEcmFnZ2FibGVMaXN0ZW5lcnMocG9wdXApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBhZGRDbGFzc2VzJDEgPSAocG9wdXAsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHNob3dDbGFzcyA9IHBhcmFtcy5zaG93Q2xhc3MgfHwge307XG4gICAgLy8gRGVmYXVsdCBDbGFzcyArIHNob3dDbGFzcyB3aGVuIHVwZGF0aW5nIFN3YWwudXBkYXRlKHt9KVxuICAgIHBvcHVwLmNsYXNzTmFtZSA9IGAke3N3YWxDbGFzc2VzLnBvcHVwfSAke2lzVmlzaWJsZSQxKHBvcHVwKSA/IHNob3dDbGFzcy5wb3B1cCA6ICcnfWA7XG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhwb3B1cCwgcGFyYW1zLCAncG9wdXAnKTtcbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIG5leHQgbWFqb3JcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIEljb24gY2xhc3MgKCMxODQyKVxuICAgIGlmIChwYXJhbXMuaWNvbikge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW2BpY29uLSR7cGFyYW1zLmljb259YF0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlclByb2dyZXNzU3RlcHMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBnZXRQcm9ncmVzc1N0ZXBzKCk7XG4gICAgaWYgKCFwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHByb2dyZXNzU3RlcHMsXG4gICAgICBjdXJyZW50UHJvZ3Jlc3NTdGVwXG4gICAgfSA9IHBhcmFtcztcbiAgICBpZiAoIXByb2dyZXNzU3RlcHMgfHwgcHJvZ3Jlc3NTdGVwcy5sZW5ndGggPT09IDAgfHwgY3VycmVudFByb2dyZXNzU3RlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoY3VycmVudFByb2dyZXNzU3RlcCA+PSBwcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgICAgd2FybignSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICsgJyhjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApJyk7XG4gICAgfVxuICAgIHByb2dyZXNzU3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBFbCA9IGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApO1xuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpO1xuICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50UHJvZ3Jlc3NTdGVwKSB7XG4gICAgICAgIGFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJ10pO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ICE9PSBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgbGluZUVsID0gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKTtcbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lRWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RlcFxuICAgKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH1cbiAgICovXG4gIGNvbnN0IGNyZWF0ZVN0ZXBFbGVtZW50ID0gc3RlcCA9PiB7XG4gICAgY29uc3Qgc3RlcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwJ10pO1xuICAgIHNldElubmVySHRtbChzdGVwRWwsIHN0ZXApO1xuICAgIHJldHVybiBzdGVwRWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH1cbiAgICovXG4gIGNvbnN0IGNyZWF0ZUxpbmVFbGVtZW50ID0gcGFyYW1zID0+IHtcbiAgICBjb25zdCBsaW5lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZENsYXNzKGxpbmVFbCwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAtbGluZSddKTtcbiAgICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSkge1xuICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShsaW5lRWwsICd3aWR0aCcsIHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gbGluZUVsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVyVGl0bGUgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3dXaGVuSW5uZXJIdG1sUHJlc2VudCh0aXRsZSk7XG4gICAgdG9nZ2xlKHRpdGxlLCBCb29sZWFuKHBhcmFtcy50aXRsZSB8fCBwYXJhbXMudGl0bGVUZXh0KSwgJ2Jsb2NrJyk7XG4gICAgaWYgKHBhcmFtcy50aXRsZSkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLnRpdGxlLCB0aXRsZSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbXMudGl0bGVUZXh0O1xuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3ModGl0bGUsIHBhcmFtcywgJ3RpdGxlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXIgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIHJlbmRlclBvcHVwKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJQcm9ncmVzc1N0ZXBzKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkUmVuZGVyID09PSAnZnVuY3Rpb24nICYmIHBvcHVwKSB7XG4gICAgICBwYXJhbXMuZGlkUmVuZGVyKHBvcHVwKTtcbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUuZXZlbnRFbWl0dGVyLmVtaXQoJ2RpZFJlbmRlcicsIHBvcHVwKTtcbiAgfTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIFN3ZWV0QWxlcnQyIHBvcHVwIGlzIHNob3duXG4gICAqL1xuICBjb25zdCBpc1Zpc2libGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlzVmlzaWJsZSQxKGdldFBvcHVwKCkpO1xuICB9O1xuXG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gICAqL1xuICBjb25zdCBjbGlja0NvbmZpcm0gPSAoKSA9PiB7XG4gICAgdmFyIF9kb20kZ2V0Q29uZmlybUJ1dHRvbjtcbiAgICByZXR1cm4gKF9kb20kZ2V0Q29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKSkgPT09IG51bGwgfHwgX2RvbSRnZXRDb25maXJtQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9tJGdldENvbmZpcm1CdXR0b24uY2xpY2soKTtcbiAgfTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0RlbnknIGJ1dHRvblxuICAgKi9cbiAgY29uc3QgY2xpY2tEZW55ID0gKCkgPT4ge1xuICAgIHZhciBfZG9tJGdldERlbnlCdXR0b247XG4gICAgcmV0dXJuIChfZG9tJGdldERlbnlCdXR0b24gPSBnZXREZW55QnV0dG9uKCkpID09PSBudWxsIHx8IF9kb20kZ2V0RGVueUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvbSRnZXREZW55QnV0dG9uLmNsaWNrKCk7XG4gIH07XG5cbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICAgKi9cbiAgY29uc3QgY2xpY2tDYW5jZWwgPSAoKSA9PiB7XG4gICAgdmFyIF9kb20kZ2V0Q2FuY2VsQnV0dG9uO1xuICAgIHJldHVybiAoX2RvbSRnZXRDYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKSkgPT09IG51bGwgfHwgX2RvbSRnZXRDYW5jZWxCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kb20kZ2V0Q2FuY2VsQnV0dG9uLmNsaWNrKCk7XG4gIH07XG5cbiAgLyoqIEB0eXBlIHtSZWNvcmQ8RGlzbWlzc1JlYXNvbiwgRGlzbWlzc1JlYXNvbj59ICovXG4gIGNvbnN0IERpc21pc3NSZWFzb24gPSBPYmplY3QuZnJlZXplKHtcbiAgICBjYW5jZWw6ICdjYW5jZWwnLFxuICAgIGJhY2tkcm9wOiAnYmFja2Ryb3AnLFxuICAgIGNsb3NlOiAnY2xvc2UnLFxuICAgIGVzYzogJ2VzYycsXG4gICAgdGltZXI6ICd0aW1lcidcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7R2xvYmFsU3RhdGV9IGdsb2JhbFN0YXRlXG4gICAqL1xuICBjb25zdCByZW1vdmVLZXlkb3duSGFuZGxlciA9IGdsb2JhbFN0YXRlID0+IHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCAmJiBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7R2xvYmFsU3RhdGV9IGdsb2JhbFN0YXRlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7KGRpc21pc3M6IERpc21pc3NSZWFzb24pID0+IHZvaWR9IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBhZGRLZXlkb3duSGFuZGxlciA9IChnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgcmVtb3ZlS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUpO1xuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyID0gZSA9PiBrZXlkb3duSGFuZGxlcihpbm5lclBhcmFtcywgZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBnZXRQb3B1cCgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZW1lbnRcbiAgICovXG4gIGNvbnN0IHNldEZvY3VzID0gKGluZGV4LCBpbmNyZW1lbnQpID0+IHtcbiAgICB2YXIgX2RvbSRnZXRQb3B1cDtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKCk7XG4gICAgLy8gc2VhcmNoIGZvciB2aXNpYmxlIGVsZW1lbnRzIGFuZCBzZWxlY3QgdGhlIG5leHQgcG9zc2libGUgbWF0Y2hcbiAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50O1xuXG4gICAgICAvLyBzaGlmdCArIHRhYiB3aGVuIC5zd2FsMi1wb3B1cCBpcyBmb2N1c2VkXG4gICAgICBpZiAoaW5kZXggPT09IC0yKSB7XG4gICAgICAgIGluZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuICAgICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgIC8vIGdvIHRvIGxhc3QgaXRlbVxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcbiAgICAoX2RvbSRnZXRQb3B1cCA9IGdldFBvcHVwKCkpID09PSBudWxsIHx8IF9kb20kZ2V0UG9wdXAgPT09IHZvaWQgMCB8fCBfZG9tJGdldFBvcHVwLmZvY3VzKCk7XG4gIH07XG4gIGNvbnN0IGFycm93S2V5c05leHRCdXR0b24gPSBbJ0Fycm93UmlnaHQnLCAnQXJyb3dEb3duJ107XG4gIGNvbnN0IGFycm93S2V5c1ByZXZpb3VzQnV0dG9uID0gWydBcnJvd0xlZnQnLCAnQXJyb3dVcCddO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7KGRpc21pc3M6IERpc21pc3NSZWFzb24pID0+IHZvaWR9IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBrZXlkb3duSGFuZGxlciA9IChpbm5lclBhcmFtcywgZXZlbnQsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgICAgcmV0dXJuOyAvLyBUaGlzIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkXG4gICAgfVxuXG4gICAgLy8gSWdub3JlIGtleWRvd24gZHVyaW5nIElNRSBjb21wb3NpdGlvblxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9rZXlkb3duX2V2ZW50I2lnbm9yaW5nX2tleWRvd25fZHVyaW5nX2ltZV9jb21wb3NpdGlvblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvNzIwXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yNDA2XG4gICAgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5uZXJQYXJhbXMuc3RvcEtleWRvd25Qcm9wYWdhdGlvbikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gRU5URVJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBoYW5kbGVFbnRlcihldmVudCwgaW5uZXJQYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIFRBQlxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGhhbmRsZVRhYihldmVudCk7XG4gICAgfVxuXG4gICAgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgIGVsc2UgaWYgKFsuLi5hcnJvd0tleXNOZXh0QnV0dG9uLCAuLi5hcnJvd0tleXNQcmV2aW91c0J1dHRvbl0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgaGFuZGxlQXJyb3dzKGV2ZW50LmtleSk7XG4gICAgfVxuXG4gICAgLy8gRVNDXG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgaGFuZGxlRXNjKGV2ZW50LCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKi9cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoZXZlbnQsIGlubmVyUGFyYW1zKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yMzg2XG4gICAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IGdldElucHV0JDEoZ2V0UG9wdXAoKSwgaW5uZXJQYXJhbXMuaW5wdXQpO1xuICAgIGlmIChldmVudC50YXJnZXQgJiYgaW5wdXQgJiYgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZXZlbnQudGFyZ2V0Lm91dGVySFRNTCA9PT0gaW5wdXQub3V0ZXJIVE1MKSB7XG4gICAgICBpZiAoWyd0ZXh0YXJlYScsICdmaWxlJ10uaW5jbHVkZXMoaW5uZXJQYXJhbXMuaW5wdXQpKSB7XG4gICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgfVxuICAgICAgY2xpY2tDb25maXJtKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKi9cbiAgY29uc3QgaGFuZGxlVGFiID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICAgIGxldCBidG5JbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50ID09PSBmb2N1c2FibGVFbGVtZW50c1tpXSkge1xuICAgICAgICBidG5JbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEN5Y2xlIHRvIHRoZSBuZXh0IGJ1dHRvblxuICAgIGlmICghZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBDeWNsZSB0byB0aGUgcHJldiBidXR0b25cbiAgICBlbHNlIHtcbiAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICovXG4gIGNvbnN0IGhhbmRsZUFycm93cyA9IGtleSA9PiB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIGNvbnN0IGRlbnlCdXR0b24gPSBnZXREZW55QnV0dG9uKCk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgaWYgKCFhY3Rpb25zIHx8ICFjb25maXJtQnV0dG9uIHx8ICFkZW55QnV0dG9uIHx8ICFjYW5jZWxCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqIEB0eXBlIEhUTUxFbGVtZW50W10gKi9cbiAgICBjb25zdCBidXR0b25zID0gW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl07XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhYnV0dG9ucy5pbmNsdWRlcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzaWJsaW5nID0gYXJyb3dLZXlzTmV4dEJ1dHRvbi5pbmNsdWRlcyhrZXkpID8gJ25leHRFbGVtZW50U2libGluZycgOiAncHJldmlvdXNFbGVtZW50U2libGluZyc7XG4gICAgbGV0IGJ1dHRvblRvRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmICghYnV0dG9uVG9Gb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvblRvRm9jdXMgPSBidXR0b25Ub0ZvY3VzW3NpYmxpbmddO1xuICAgICAgaWYgKCFidXR0b25Ub0ZvY3VzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChidXR0b25Ub0ZvY3VzIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgJiYgaXNWaXNpYmxlJDEoYnV0dG9uVG9Gb2N1cykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChidXR0b25Ub0ZvY3VzIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgIGJ1dHRvblRvRm9jdXMuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHBhcmFtIHsoZGlzbWlzczogRGlzbWlzc1JlYXNvbikgPT4gdm9pZH0gZGlzbWlzc1dpdGhcbiAgICovXG4gIGNvbnN0IGhhbmRsZUVzYyA9IChldmVudCwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFc2NhcGVLZXkpKSB7XG4gICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmVzYyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1vZHVsZSBjb250YWlucyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAgICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gICAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICAgKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICAgKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gICAqL1xuXG4gIHZhciBwcml2YXRlTWV0aG9kcyA9IHtcbiAgICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKCksXG4gICAgc3dhbFByb21pc2VSZWplY3Q6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICAvLyBGcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLnBhY2llbGxvZ3JvdXAuY29tL2Jsb2cvMjAxOC8wNi90aGUtY3VycmVudC1zdGF0ZS1vZi1tb2RhbC1kaWFsb2ctYWNjZXNzaWJpbGl0eS9cbiAgLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4gIC8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4gIC8vIHJlYWRlcuKAmXMgbGlzdCBvZiBlbGVtZW50cyAoaGVhZGluZ3MsIGZvcm0gY29udHJvbHMsIGxhbmRtYXJrcywgZXRjLikgaW4gdGhlIGRvY3VtZW50LlxuXG4gIGNvbnN0IHNldEFyaWFIaWRkZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgYm9keUNoaWxkcmVuID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBib2R5Q2hpbGRyZW4uZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoY29udGFpbmVyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSB8fCAnJyk7XG4gICAgICB9XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdW5zZXRBcmlhSGlkZGVuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlDaGlsZHJlbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgYm9keUNoaWxkcmVuLmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSB8fCAnJyk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgaXNTYWZhcmlPcklPUyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEhd2luZG93Lkdlc3R1cmVFdmVudDsgLy8gdHJ1ZSBmb3IgU2FmYXJpIGRlc2t0b3AgKyBhbGwgaU9TIGJyb3dzZXJzIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83MDU4NTM5NFxuXG4gIC8qKlxuICAgKiBGaXggaU9TIHNjcm9sbGluZ1xuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTYyNjMwMlxuICAgKi9cbiAgY29uc3QgaU9TZml4ID0gKCkgPT4ge1xuICAgIGlmIChpc1NhZmFyaU9ySU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYCR7b2Zmc2V0ICogLTF9cHhgO1xuICAgICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICAgIGxvY2tCb2R5U2Nyb2xsKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzEyNDZcbiAgICovXG4gIGNvbnN0IGxvY2tCb2R5U2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICBsZXQgcHJldmVudFRvdWNoTW92ZTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY29udGFpbmVyLm9udG91Y2hzdGFydCA9IGV2ZW50ID0+IHtcbiAgICAgIHByZXZlbnRUb3VjaE1vdmUgPSBzaG91bGRQcmV2ZW50VG91Y2hNb3ZlKGV2ZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjb250YWluZXIub250b3VjaG1vdmUgPSBldmVudCA9PiB7XG4gICAgICBpZiAocHJldmVudFRvdWNoTW92ZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3Qgc2hvdWxkUHJldmVudFRvdWNoTW92ZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgaHRtbENvbnRhaW5lciA9IGdldEh0bWxDb250YWluZXIoKTtcbiAgICBpZiAoIWNvbnRhaW5lciB8fCAhaHRtbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNTdHlsdXMoZXZlbnQpIHx8IGlzWm9vbShldmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRhcmdldCA9PT0gY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc1Njcm9sbGFibGUoY29udGFpbmVyKSAmJiB0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhc2VsZk9yUGFyZW50SXNTY3JvbGxhYmxlKHRhcmdldCwgaHRtbENvbnRhaW5lcikgJiZcbiAgICAvLyAjMjgyM1xuICAgIHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmXG4gICAgLy8gIzE2MDNcbiAgICB0YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyAmJlxuICAgIC8vICMyMjY2XG4gICAgIShpc1Njcm9sbGFibGUoaHRtbENvbnRhaW5lcikgJiZcbiAgICAvLyAjMTk0NFxuICAgIGh0bWxDb250YWluZXIuY29udGFpbnModGFyZ2V0KSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTc4NlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1N0eWx1cyA9IGV2ZW50ID0+IHtcbiAgICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCAmJiBldmVudC50b3VjaGVzWzBdLnRvdWNoVHlwZSA9PT0gJ3N0eWx1cyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTg5MVxuICAgKlxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNab29tID0gZXZlbnQgPT4ge1xuICAgIHJldHVybiBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMTtcbiAgfTtcbiAgY29uc3QgdW5kb0lPU2ZpeCA9ICgpID0+IHtcbiAgICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1lYXN1cmUgc2Nyb2xsYmFyIHdpZHRoIGZvciBwYWRkaW5nIGJvZHkgZHVyaW5nIG1vZGFsIHNob3cvaGlkZVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvanMvc3JjL21vZGFsLmpzXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBjb25zdCBtZWFzdXJlU2Nyb2xsYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1snc2Nyb2xsYmFyLW1lYXN1cmUnXTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgfTtcblxuICAvKipcbiAgICogUmVtZW1iZXIgc3RhdGUgaW4gY2FzZXMgd2hlcmUgb3BlbmluZyBhbmQgaGFuZGxpbmcgYSBtb2RhbCB3aWxsIGZpZGRsZSB3aXRoIGl0LlxuICAgKiBAdHlwZSB7bnVtYmVyIHwgbnVsbH1cbiAgICovXG4gIGxldCBwcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxCb2R5T3ZlcmZsb3dcbiAgICovXG4gIGNvbnN0IHJlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZyA9IGluaXRpYWxCb2R5T3ZlcmZsb3cgPT4ge1xuICAgIC8vIGZvciBxdWV1ZXMsIGRvIG5vdCBkbyB0aGlzIG1vcmUgdGhhbiBvbmNlXG4gICAgaWYgKHByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0IHx8IGluaXRpYWxCb2R5T3ZlcmZsb3cgPT09ICdzY3JvbGwnIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjY2M1xuICAgICkge1xuICAgICAgLy8gYWRkIHBhZGRpbmcgc28gdGhlIGNvbnRlbnQgZG9lc24ndCBzaGlmdCBhZnRlciByZW1vdmFsIG9mIHNjcm9sbGJhclxuICAgICAgcHJldmlvdXNCb2R5UGFkZGluZyA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3ByZXZpb3VzQm9keVBhZGRpbmcgKyBtZWFzdXJlU2Nyb2xsYmFyKCl9cHhgO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdW5kb1JlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZyA9ICgpID0+IHtcbiAgICBpZiAocHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtwcmV2aW91c0JvZHlQYWRkaW5nfXB4YDtcbiAgICAgIHByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXR1cm5Gb2N1c1xuICAgKiBAcGFyYW0geygpID0+IHZvaWR9IGRpZENsb3NlXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKSB7XG4gICAgaWYgKGlzVG9hc3QoKSkge1xuICAgICAgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN0b3JlQWN0aXZlRWxlbWVudChyZXR1cm5Gb2N1cykudGhlbigoKSA9PiB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSkpO1xuICAgICAgcmVtb3ZlS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUpO1xuICAgIH1cblxuICAgIC8vIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjA4OFxuICAgIC8vIGZvciBzb21lIHJlYXNvbiByZW1vdmluZyB0aGUgY29udGFpbmVyIGluIFNhZmFyaSB3aWxsIHNjcm9sbCB0aGUgZG9jdW1lbnQgdG8gYm90dG9tXG4gICAgaWYgKGlzU2FmYXJpT3JJT1MpIHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50Jyk7XG4gICAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIHVuZG9SZXBsYWNlU2Nyb2xsYmFyV2l0aFBhZGRpbmcoKTtcbiAgICAgIHVuZG9JT1NmaXgoKTtcbiAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cbiAgICByZW1vdmVCb2R5Q2xhc3NlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBTd2VldEFsZXJ0MiBjbGFzc2VzIGZyb20gYm9keVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQm9keUNsYXNzZXMoKSB7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlcy5zaG93biwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3RhbmNlIG1ldGhvZCB0byBjbG9zZSBzd2VldEFsZXJ0XG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydFJlc3VsdCB8IHVuZGVmaW5lZH0gcmVzb2x2ZVZhbHVlXG4gICAqL1xuICBmdW5jdGlvbiBjbG9zZShyZXNvbHZlVmFsdWUpIHtcbiAgICByZXNvbHZlVmFsdWUgPSBwcmVwYXJlUmVzb2x2ZVZhbHVlKHJlc29sdmVWYWx1ZSk7XG4gICAgY29uc3Qgc3dhbFByb21pc2VSZXNvbHZlID0gcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLmdldCh0aGlzKTtcbiAgICBjb25zdCBkaWRDbG9zZSA9IHRyaWdnZXJDbG9zZVBvcHVwKHRoaXMpO1xuICAgIGlmICh0aGlzLmlzQXdhaXRpbmdQcm9taXNlKSB7XG4gICAgICAvLyBBIHN3YWwgYXdhaXRpbmcgZm9yIGEgcHJvbWlzZSAoYWZ0ZXIgYSBjbGljayBvbiBDb25maXJtIG9yIERlbnkpIGNhbm5vdCBiZSBkaXNtaXNzZWQgYW55bW9yZSAjMjMzNVxuICAgICAgaWYgKCFyZXNvbHZlVmFsdWUuaXNEaXNtaXNzZWQpIHtcbiAgICAgICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKHRoaXMpO1xuICAgICAgICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpZENsb3NlKSB7XG4gICAgICAvLyBSZXNvbHZlIFN3YWwgcHJvbWlzZVxuICAgICAgc3dhbFByb21pc2VSZXNvbHZlKHJlc29sdmVWYWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHRyaWdnZXJDbG9zZVBvcHVwID0gaW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaWYgKCFpbm5lclBhcmFtcyB8fCBoYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuc2hvd0NsYXNzLnBvcHVwKTtcbiAgICBhZGRDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKTtcbiAgICBjb25zdCBiYWNrZHJvcCA9IGdldENvbnRhaW5lcigpO1xuICAgIHJlbW92ZUNsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApO1xuICAgIGFkZENsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MuYmFja2Ryb3ApO1xuICAgIGhhbmRsZVBvcHVwQW5pbWF0aW9uKGluc3RhbmNlLCBwb3B1cCwgaW5uZXJQYXJhbXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Vycm9yIHwgc3RyaW5nfSBlcnJvclxuICAgKi9cbiAgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShlcnJvcikge1xuICAgIGNvbnN0IHJlamVjdFByb21pc2UgPSBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlamVjdC5nZXQodGhpcyk7XG4gICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKHRoaXMpO1xuICAgIGlmIChyZWplY3RQcm9taXNlKSB7XG4gICAgICAvLyBSZWplY3QgU3dhbCBwcm9taXNlXG4gICAgICByZWplY3RQcm9taXNlKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlQXdhaXRpbmdQcm9taXNlID0gaW5zdGFuY2UgPT4ge1xuICAgIGlmIChpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSkge1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlO1xuICAgICAgLy8gVGhlIGluc3RhbmNlIG1pZ2h0IGhhdmUgYmVlbiBwcmV2aW91c2x5IHBhcnRseSBkZXN0cm95ZWQsIHdlIG11c3QgcmVzdW1lIHRoZSBkZXN0cm95IHByb2Nlc3MgaW4gdGhpcyBjYXNlICMyMzM1XG4gICAgICBpZiAoIXByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpKSB7XG4gICAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRSZXN1bHQgfCB1bmRlZmluZWR9IHJlc29sdmVWYWx1ZVxuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydFJlc3VsdH1cbiAgICovXG4gIGNvbnN0IHByZXBhcmVSZXNvbHZlVmFsdWUgPSByZXNvbHZlVmFsdWUgPT4ge1xuICAgIC8vIFdoZW4gdXNlciBjYWxscyBTd2FsLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHJlc29sdmVWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgICAgaXNEZW5pZWQ6IGZhbHNlLFxuICAgICAgICBpc0Rpc21pc3NlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgaXNDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgaXNEZW5pZWQ6IGZhbHNlLFxuICAgICAgaXNEaXNtaXNzZWQ6IGZhbHNlXG4gICAgfSwgcmVzb2x2ZVZhbHVlKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKi9cbiAgY29uc3QgaGFuZGxlUG9wdXBBbmltYXRpb24gPSAoaW5zdGFuY2UsIHBvcHVwLCBpbm5lclBhcmFtcykgPT4ge1xuICAgIHZhciBfZ2xvYmFsU3RhdGUkZXZlbnRFbWk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgLy8gSWYgYW5pbWF0aW9uIGlzIHN1cHBvcnRlZCwgYW5pbWF0ZVxuICAgIGNvbnN0IGFuaW1hdGlvbklzU3VwcG9ydGVkID0gaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKTtcbiAgICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLndpbGxDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJQYXJhbXMud2lsbENsb3NlKHBvcHVwKTtcbiAgICB9XG4gICAgKF9nbG9iYWxTdGF0ZSRldmVudEVtaSA9IGdsb2JhbFN0YXRlLmV2ZW50RW1pdHRlcikgPT09IG51bGwgfHwgX2dsb2JhbFN0YXRlJGV2ZW50RW1pID09PSB2b2lkIDAgfHwgX2dsb2JhbFN0YXRlJGV2ZW50RW1pLmVtaXQoJ3dpbGxDbG9zZScsIHBvcHVwKTtcbiAgICBpZiAoYW5pbWF0aW9uSXNTdXBwb3J0ZWQpIHtcbiAgICAgIGFuaW1hdGVQb3B1cChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgaW5uZXJQYXJhbXMucmV0dXJuRm9jdXMsIGlubmVyUGFyYW1zLmRpZENsb3NlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCBpbm5lclBhcmFtcy5yZXR1cm5Gb2N1cywgaW5uZXJQYXJhbXMuZGlkQ2xvc2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXR1cm5Gb2N1c1xuICAgKiBAcGFyYW0geygpID0+IHZvaWR9IGRpZENsb3NlXG4gICAqL1xuICBjb25zdCBhbmltYXRlUG9wdXAgPSAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIHJldHVybkZvY3VzLCBkaWRDbG9zZSkgPT4ge1xuICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayA9IHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZS5iaW5kKG51bGwsIGluc3RhbmNlLCBjb250YWluZXIsIHJldHVybkZvY3VzLCBkaWRDbG9zZSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBbmltYXRpb25FdmVudCB8IFRyYW5zaXRpb25FdmVudH0gZVxuICAgICAqL1xuICAgIGNvbnN0IHN3YWxDbG9zZUFuaW1hdGlvbkZpbmlzaGVkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXApIHtcbiAgICAgICAgdmFyIF9nbG9iYWxTdGF0ZSRzd2FsQ2xvcztcbiAgICAgICAgKF9nbG9iYWxTdGF0ZSRzd2FsQ2xvcyA9IGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaykgPT09IG51bGwgfHwgX2dsb2JhbFN0YXRlJHN3YWxDbG9zID09PSB2b2lkIDAgfHwgX2dsb2JhbFN0YXRlJHN3YWxDbG9zLmNhbGwoZ2xvYmFsU3RhdGUpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBzd2FsQ2xvc2VBbmltYXRpb25GaW5pc2hlZCk7XG4gICAgICAgIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2FsQ2xvc2VBbmltYXRpb25GaW5pc2hlZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBzd2FsQ2xvc2VBbmltYXRpb25GaW5pc2hlZCk7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3YWxDbG9zZUFuaW1hdGlvbkZpbmlzaGVkKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0geygpID0+IHZvaWR9IGRpZENsb3NlXG4gICAqL1xuICBjb25zdCB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlID0gKGluc3RhbmNlLCBkaWRDbG9zZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFyIF9nbG9iYWxTdGF0ZSRldmVudEVtaTI7XG4gICAgICBpZiAodHlwZW9mIGRpZENsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpZENsb3NlLmJpbmQoaW5zdGFuY2UucGFyYW1zKSgpO1xuICAgICAgfVxuICAgICAgKF9nbG9iYWxTdGF0ZSRldmVudEVtaTIgPSBnbG9iYWxTdGF0ZS5ldmVudEVtaXR0ZXIpID09PSBudWxsIHx8IF9nbG9iYWxTdGF0ZSRldmVudEVtaTIgPT09IHZvaWQgMCB8fCBfZ2xvYmFsU3RhdGUkZXZlbnRFbWkyLmVtaXQoJ2RpZENsb3NlJyk7XG4gICAgICAvLyBpbnN0YW5jZSBtaWdodCBoYXZlIGJlZW4gZGVzdHJveWVkIGFscmVhZHlcbiAgICAgIGlmIChpbnN0YW5jZS5fZGVzdHJveSkge1xuICAgICAgICBpbnN0YW5jZS5fZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93cyBsb2FkZXIgKHNwaW5uZXIpLCB0aGlzIGlzIHVzZWZ1bCB3aXRoIEFKQVggcmVxdWVzdHMuXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGxvYWRlciBiZSBzaG93biBpbnN0ZWFkIG9mIHRoZSBcIkNvbmZpcm1cIiBidXR0b24uXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfSBbYnV0dG9uVG9SZXBsYWNlXVxuICAgKi9cbiAgY29uc3Qgc2hvd0xvYWRpbmcgPSBidXR0b25Ub1JlcGxhY2UgPT4ge1xuICAgIGxldCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgbmV3IFN3YWwoKTtcbiAgICB9XG4gICAgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG4gICAgaWYgKGlzVG9hc3QoKSkge1xuICAgICAgaGlkZShnZXRJY29uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBsYWNlQnV0dG9uKHBvcHVwLCBidXR0b25Ub1JlcGxhY2UpO1xuICAgIH1cbiAgICBzaG93KGxvYWRlcik7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCAndHJ1ZScpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgJ3RydWUnKTtcbiAgICBwb3B1cC5mb2N1cygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50IHwgbnVsbH0gW2J1dHRvblRvUmVwbGFjZV1cbiAgICovXG4gIGNvbnN0IHJlcGxhY2VCdXR0b24gPSAocG9wdXAsIGJ1dHRvblRvUmVwbGFjZSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG4gICAgaWYgKCFhY3Rpb25zIHx8ICFsb2FkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFidXR0b25Ub1JlcGxhY2UgJiYgaXNWaXNpYmxlJDEoZ2V0Q29uZmlybUJ1dHRvbigpKSkge1xuICAgICAgYnV0dG9uVG9SZXBsYWNlID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH1cbiAgICBzaG93KGFjdGlvbnMpO1xuICAgIGlmIChidXR0b25Ub1JlcGxhY2UpIHtcbiAgICAgIGhpZGUoYnV0dG9uVG9SZXBsYWNlKTtcbiAgICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uLXRvLXJlcGxhY2UnLCBidXR0b25Ub1JlcGxhY2UuY2xhc3NOYW1lKTtcbiAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGxvYWRlciwgYnV0dG9uVG9SZXBsYWNlKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoW3BvcHVwLCBhY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZSA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgcGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLnNvbWUoaSA9PiBpID09PSBwYXJhbXMuaW5wdXQpICYmIChoYXNUb1Byb21pc2VGbihwYXJhbXMuaW5wdXRWYWx1ZSkgfHwgaXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKSkpIHtcbiAgICAgIHNob3dMb2FkaW5nKGdldENvbmZpcm1CdXR0b24oKSk7XG4gICAgICBoYW5kbGVJbnB1dFZhbHVlKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydElucHV0VmFsdWV9XG4gICAqL1xuICBjb25zdCBnZXRJbnB1dFZhbHVlID0gKGluc3RhbmNlLCBpbm5lclBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gaW5zdGFuY2UuZ2V0SW5wdXQoKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShpbnB1dCk7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHJldHVybiBnZXRSYWRpb1ZhbHVlKGlucHV0KTtcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICByZXR1cm4gZ2V0RmlsZVZhbHVlKGlucHV0KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBjb25zdCBnZXRDaGVja2JveFZhbHVlID0gaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCA/IDEgOiAwO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0UmFkaW9WYWx1ZSA9IGlucHV0ID0+IGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHJldHVybnMge0ZpbGVMaXN0IHwgRmlsZSB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRGaWxlVmFsdWUgPSBpbnB1dCA9PiBpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlcy5sZW5ndGggPyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ211bHRpcGxlJykgIT09IG51bGwgPyBpbnB1dC5maWxlcyA6IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IGhhbmRsZUlucHV0T3B0aW9ucyA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpbnB1dE9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdCBwcm9jZXNzSW5wdXRPcHRpb25zID0gaW5wdXRPcHRpb25zID0+IHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHBvcHVsYXRlU2VsZWN0T3B0aW9ucyhwb3B1cCwgZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyksIHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3JhZGlvJykge1xuICAgICAgICBwb3B1bGF0ZVJhZGlvT3B0aW9ucyhwb3B1cCwgZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyksIHBhcmFtcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0T3B0aW9ucykgfHwgaXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgICBzaG93TG9hZGluZyhnZXRDb25maXJtQnV0dG9uKCkpO1xuICAgICAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpLnRoZW4oaW5wdXRPcHRpb25zID0+IHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zLmlucHV0T3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMocGFyYW1zLmlucHV0T3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yKGBVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3QsIE1hcCBvciBQcm9taXNlLCBnb3QgJHt0eXBlb2YgcGFyYW1zLmlucHV0T3B0aW9uc31gKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBoYW5kbGVJbnB1dFZhbHVlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaWRlKGlucHV0KTtcbiAgICBhc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpLnRoZW4oaW5wdXRWYWx1ZSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBgJHtwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDB9YCA6IGAke2lucHV0VmFsdWV9YDtcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGVycm9yKGBFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6ICR7ZXJyfWApO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7SW5wdXRPcHRpb25GbGF0dGVuZWRbXX0gaW5wdXRPcHRpb25zXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gcG9wdWxhdGVTZWxlY3RPcHRpb25zKHBvcHVwLCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICBpZiAoIXNlbGVjdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uVmFsdWVcbiAgICAgKi9cbiAgICBjb25zdCByZW5kZXJPcHRpb24gPSAocGFyZW50LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICBzZXRJbm5lckh0bWwob3B0aW9uLCBvcHRpb25MYWJlbCk7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvblZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9O1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGlucHV0T3B0aW9uID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICBjb25zdCBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgLy8gPG9wdGdyb3VwPiBzcGVjOlxuICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw0MDEvaW50ZXJhY3QvZm9ybXMuaHRtbCNoLTE3LjZcbiAgICAgIC8vIFwiLi4uYWxsIE9QVEdST1VQIGVsZW1lbnRzIG11c3QgYmUgc3BlY2lmaWVkIGRpcmVjdGx5IHdpdGhpbiBhIFNFTEVDVCBlbGVtZW50IChpLmUuLCBncm91cHMgbWF5IG5vdCBiZSBuZXN0ZWQpLi4uXCJcbiAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBpcyBhIDxvcHRncm91cD5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbkxhYmVsKSkge1xuICAgICAgICAvLyBpZiBpdCBpcyBhbiBhcnJheSwgdGhlbiBpdCBpcyBhbiA8b3B0Z3JvdXA+XG4gICAgICAgIGNvbnN0IG9wdGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgICAgb3B0Z3JvdXAubGFiZWwgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0Z3JvdXAuZGlzYWJsZWQgPSBmYWxzZTsgLy8gbm90IGNvbmZpZ3VyYWJsZSBmb3Igbm93XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRncm91cCk7XG4gICAgICAgIG9wdGlvbkxhYmVsLmZvckVhY2gobyA9PiByZW5kZXJPcHRpb24ob3B0Z3JvdXAsIG9bMV0sIG9bMF0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNhc2Ugb2YgPG9wdGlvbj5cbiAgICAgICAgcmVuZGVyT3B0aW9uKHNlbGVjdCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWxlY3QuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge0lucHV0T3B0aW9uRmxhdHRlbmVkW119IGlucHV0T3B0aW9uc1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHBvcHVsYXRlUmFkaW9PcHRpb25zKHBvcHVwLCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgIGNvbnN0IHJhZGlvID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgaWYgKCFyYWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChpbnB1dE9wdGlvbiA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICBjb25zdCByYWRpb0xhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNvbnN0IHJhZGlvTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICByYWRpb0lucHV0Lm5hbWUgPSBzd2FsQ2xhc3Nlcy5yYWRpbztcbiAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlO1xuICAgICAgaWYgKGlzU2VsZWN0ZWQocmFkaW9WYWx1ZSwgcGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNldElubmVySHRtbChsYWJlbCwgcmFkaW9MYWJlbCk7XG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xuICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIGNvbnN0IHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBgaW5wdXRPcHRpb25zYCBpbnRvIGFuIGFycmF5IG9mIGBbdmFsdWUsIGxhYmVsXWBzXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gaW5wdXRPcHRpb25zXG4gICAqIEB0eXBlZGVmIHtzdHJpbmdbXX0gSW5wdXRPcHRpb25GbGF0dGVuZWRcbiAgICogQHJldHVybnMge0lucHV0T3B0aW9uRmxhdHRlbmVkW119XG4gICAqL1xuICBjb25zdCBmb3JtYXRJbnB1dE9wdGlvbnMgPSBpbnB1dE9wdGlvbnMgPT4ge1xuICAgIC8qKiBAdHlwZSB7SW5wdXRPcHRpb25GbGF0dGVuZWRbXX0gKi9cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBpZiAoaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWVGb3JtYXR0ZWQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZUZvcm1hdHRlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjYXNlIG9mIDxvcHRncm91cD5cbiAgICAgICAgICB2YWx1ZUZvcm1hdHRlZCA9IGZvcm1hdElucHV0T3B0aW9ucyh2YWx1ZUZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVGb3JtYXR0ZWRdKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IHZhbHVlRm9ybWF0dGVkID0gaW5wdXRPcHRpb25zW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWVGb3JtYXR0ZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gY2FzZSBvZiA8b3B0Z3JvdXA+XG4gICAgICAgICAgdmFsdWVGb3JtYXR0ZWQgPSBmb3JtYXRJbnB1dE9wdGlvbnModmFsdWVGb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvblZhbHVlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydElucHV0VmFsdWV9IGlucHV0VmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1NlbGVjdGVkID0gKG9wdGlvblZhbHVlLCBpbnB1dFZhbHVlKSA9PiB7XG4gICAgcmV0dXJuICEhaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayA9IGluc3RhbmNlID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0KGluc3RhbmNlLCAnY29uZmlybScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtKGluc3RhbmNlLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IGhhbmRsZURlbnlCdXR0b25DbGljayA9IGluc3RhbmNlID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgaWYgKGlubmVyUGFyYW1zLnJldHVybklucHV0VmFsdWVPbkRlbnkpIHtcbiAgICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsICdkZW55Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHsoZGlzbWlzczogRGlzbWlzc1JlYXNvbikgPT4gdm9pZH0gZGlzbWlzc1dpdGhcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gKGluc3RhbmNlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jYW5jZWwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7J2NvbmZpcm0nIHwgJ2RlbnknfSB0eXBlXG4gICAqL1xuICBjb25zdCBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0ID0gKGluc3RhbmNlLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBlcnJvcihgVGhlIFwiaW5wdXRcIiBwYXJhbWV0ZXIgaXMgbmVlZGVkIHRvIGJlIHNldCB3aGVuIHVzaW5nIHJldHVybklucHV0VmFsdWVPbiR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUpfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGdldElucHV0VmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgIGhhbmRsZUlucHV0VmFsaWRhdG9yKGluc3RhbmNlLCBpbnB1dFZhbHVlLCB0eXBlKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0ICYmICFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZShpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSB8fCBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVueScpIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtKGluc3RhbmNlLCBpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0SW5wdXRWYWx1ZX0gaW5wdXRWYWx1ZVxuICAgKiBAcGFyYW0geydjb25maXJtJyB8ICdkZW55J30gdHlwZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlSW5wdXRWYWxpZGF0b3IgPSAoaW5zdGFuY2UsIGlucHV0VmFsdWUsIHR5cGUpID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmRpc2FibGVJbnB1dCgpO1xuICAgIGNvbnN0IHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBhc1Byb21pc2UoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKSk7XG4gICAgdmFsaWRhdGlvblByb21pc2UudGhlbih2YWxpZGF0aW9uTWVzc2FnZSA9PiB7XG4gICAgICBpbnN0YW5jZS5lbmFibGVCdXR0b25zKCk7XG4gICAgICBpbnN0YW5jZS5lbmFibGVJbnB1dCgpO1xuICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkZW55Jykge1xuICAgICAgICBkZW55KGluc3RhbmNlLCBpbnB1dFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICovXG4gIGNvbnN0IGRlbnkgPSAoaW5zdGFuY2UsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlIHx8IHVuZGVmaW5lZCk7XG4gICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkRlbnkpIHtcbiAgICAgIHNob3dMb2FkaW5nKGdldERlbnlCdXR0b24oKSk7XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5wcmVEZW55KSB7XG4gICAgICBpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSA9IHRydWU7IC8vIEZsYWdnaW5nIHRoZSBpbnN0YW5jZSBhcyBhd2FpdGluZyBhIHByb21pc2Ugc28gaXQncyBvd24gcHJvbWlzZSdzIHJlamVjdC9yZXNvbHZlIG1ldGhvZHMgZG9lc24ndCBnZXQgZGVzdHJveWVkIHVudGlsIHRoZSByZXN1bHQgZnJvbSB0aGlzIHByZURlbnkncyBwcm9taXNlIGlzIHJlY2VpdmVkXG4gICAgICBjb25zdCBwcmVEZW55UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gYXNQcm9taXNlKGlubmVyUGFyYW1zLnByZURlbnkodmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSkpO1xuICAgICAgcHJlRGVueVByb21pc2UudGhlbihwcmVEZW55VmFsdWUgPT4ge1xuICAgICAgICBpZiAocHJlRGVueVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKGluc3RhbmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnN0YW5jZS5jbG9zZSgvKiogQHR5cGUgU3dlZXRBbGVydFJlc3VsdCAqL3tcbiAgICAgICAgICAgIGlzRGVuaWVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHR5cGVvZiBwcmVEZW55VmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVEZW55VmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0V2l0aChpbnN0YW5jZSB8fCB1bmRlZmluZWQsIGVycm9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLmNsb3NlKC8qKiBAdHlwZSBTd2VldEFsZXJ0UmVzdWx0ICove1xuICAgICAgICBpc0RlbmllZDogdHJ1ZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICBjb25zdCBzdWNjZWVkV2l0aCA9IChpbnN0YW5jZSwgdmFsdWUpID0+IHtcbiAgICBpbnN0YW5jZS5jbG9zZSgvKiogQHR5cGUgU3dlZXRBbGVydFJlc3VsdCAqL3tcbiAgICAgIGlzQ29uZmlybWVkOiB0cnVlLFxuICAgICAgdmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JcbiAgICovXG4gIGNvbnN0IHJlamVjdFdpdGggPSAoaW5zdGFuY2UsIGVycm9yKSA9PiB7XG4gICAgaW5zdGFuY2UucmVqZWN0UHJvbWlzZShlcnJvcik7XG4gIH07XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgY29uZmlybSA9IChpbnN0YW5jZSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgdW5kZWZpbmVkKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgICAgc2hvd0xvYWRpbmcoKTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgIGluc3RhbmNlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgICAgIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlID0gdHJ1ZTsgLy8gRmxhZ2dpbmcgdGhlIGluc3RhbmNlIGFzIGF3YWl0aW5nIGEgcHJvbWlzZSBzbyBpdCdzIG93biBwcm9taXNlJ3MgcmVqZWN0L3Jlc29sdmUgbWV0aG9kcyBkb2Vzbid0IGdldCBkZXN0cm95ZWQgdW50aWwgdGhlIHJlc3VsdCBmcm9tIHRoaXMgcHJlQ29uZmlybSdzIHByb21pc2UgaXMgcmVjZWl2ZWRcbiAgICAgIGNvbnN0IHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKSk7XG4gICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKHByZUNvbmZpcm1WYWx1ZSA9PiB7XG4gICAgICAgIGlmIChpc1Zpc2libGUkMShnZXRWYWxpZGF0aW9uTWVzc2FnZSgpKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB0eXBlb2YgcHJlQ29uZmlybVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlQ29uZmlybVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0V2l0aChpbnN0YW5jZSB8fCB1bmRlZmluZWQsIGVycm9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlcyBsb2FkZXIgYW5kIHNob3dzIGJhY2sgdGhlIGJ1dHRvbiB3aGljaCB3YXMgaGlkZGVuIGJ5IC5zaG93TG9hZGluZygpXG4gICAqL1xuICBmdW5jdGlvbiBoaWRlTG9hZGluZygpIHtcbiAgICAvLyBkbyBub3RoaW5nIGlmIHBvcHVwIGlzIGNsb3NlZFxuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBoaWRlKGRvbUNhY2hlLmxvYWRlcik7XG4gICAgaWYgKGlzVG9hc3QoKSkge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLmljb24pIHtcbiAgICAgICAgc2hvdyhnZXRJY29uKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93UmVsYXRlZEJ1dHRvbihkb21DYWNoZSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICAgIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IHNob3dSZWxhdGVkQnV0dG9uID0gZG9tQ2FjaGUgPT4ge1xuICAgIGNvbnN0IGJ1dHRvblRvUmVwbGFjZSA9IGRvbUNhY2hlLnBvcHVwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZG9tQ2FjaGUubG9hZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24tdG8tcmVwbGFjZScpKTtcbiAgICBpZiAoYnV0dG9uVG9SZXBsYWNlLmxlbmd0aCkge1xuICAgICAgc2hvdyhidXR0b25Ub1JlcGxhY2VbMF0sICdpbmxpbmUtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKGFsbEJ1dHRvbnNBcmVIaWRkZW4oKSkge1xuICAgICAgaGlkZShkb21DYWNoZS5hY3Rpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGlucHV0IERPTSBub2RlLCB0aGlzIG1ldGhvZCB3b3JrcyB3aXRoIGlucHV0IHBhcmFtZXRlci5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBpZiAoIWRvbUNhY2hlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldElucHV0JDEoZG9tQ2FjaGUucG9wdXAsIGlubmVyUGFyYW1zLmlucHV0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGJ1dHRvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0QnV0dG9uc0Rpc2FibGVkKGluc3RhbmNlLCBidXR0b25zLCBkaXNhYmxlZCkge1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBkb21DYWNoZVtidXR0b25dLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgbnVsbH0gaW5wdXRcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0SW5wdXREaXNhYmxlZChpbnB1dCwgZGlzYWJsZWQpIHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCB8fCAhaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIC8qKiBAdHlwZSB7Tm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50Pn0gKi9cbiAgICAgIGNvbnN0IHJhZGlvcyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoYFtuYW1lPVwiJHtzd2FsQ2xhc3Nlcy5yYWRpb31cIl1gKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJhZGlvc1tpXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYWxsIHRoZSBidXR0b25zXG4gICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFsbCB0aGUgYnV0dG9uc1xuICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKCkge1xuICAgIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuICAgIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgaW5wdXQgZmllbGRcbiAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiBkaXNhYmxlSW5wdXQoKSB7XG4gICAgc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yXG4gICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGVycm9yKSB7XG4gICAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgc2V0SW5uZXJIdG1sKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLCBlcnJvcik7XG4gICAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddO1xuICAgIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBhZGRDbGFzcyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9XG4gICAgc2hvdyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAgICpcbiAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0aXRsZVRleHQ6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGh0bWw6ICcnLFxuICAgIGZvb3RlcjogJycsXG4gICAgaWNvbjogdW5kZWZpbmVkLFxuICAgIGljb25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGljb25IdG1sOiB1bmRlZmluZWQsXG4gICAgdGVtcGxhdGU6IHVuZGVmaW5lZCxcbiAgICB0b2FzdDogZmFsc2UsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgdGhlbWU6ICdsaWdodCcsXG4gICAgc2hvd0NsYXNzOiB7XG4gICAgICBwb3B1cDogJ3N3YWwyLXNob3cnLFxuICAgICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1zaG93JyxcbiAgICAgIGljb246ICdzd2FsMi1pY29uLXNob3cnXG4gICAgfSxcbiAgICBoaWRlQ2xhc3M6IHtcbiAgICAgIHBvcHVwOiAnc3dhbDItaGlkZScsXG4gICAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLWhpZGUnLFxuICAgICAgaWNvbjogJ3N3YWwyLWljb24taGlkZSdcbiAgICB9LFxuICAgIGN1c3RvbUNsYXNzOiB7fSxcbiAgICB0YXJnZXQ6ICdib2R5JyxcbiAgICBjb2xvcjogdW5kZWZpbmVkLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlaWdodEF1dG86IHRydWUsXG4gICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gICAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICAgIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgIHNob3dEZW55QnV0dG9uOiBmYWxzZSxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICBwcmVDb25maXJtOiB1bmRlZmluZWQsXG4gICAgcHJlRGVueTogdW5kZWZpbmVkLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGRlbnlCdXR0b25UZXh0OiAnTm8nLFxuICAgIGRlbnlCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGRlbnlCdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gICAgZm9jdXNDb25maXJtOiB0cnVlLFxuICAgIGZvY3VzRGVueTogZmFsc2UsXG4gICAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICAgIHJldHVybkZvY3VzOiB0cnVlLFxuICAgIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgY2xvc2VCdXR0b25IdG1sOiAnJnRpbWVzOycsXG4gICAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gICAgbG9hZGVySHRtbDogJycsXG4gICAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gICAgc2hvd0xvYWRlck9uRGVueTogZmFsc2UsXG4gICAgaW1hZ2VVcmw6IHVuZGVmaW5lZCxcbiAgICBpbWFnZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICBpbWFnZUFsdDogJycsXG4gICAgdGltZXI6IHVuZGVmaW5lZCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIHBhZGRpbmc6IHVuZGVmaW5lZCxcbiAgICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXG4gICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgICBpbnB1dExhYmVsOiAnJyxcbiAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICBpbnB1dE9wdGlvbnM6IHt9LFxuICAgIGlucHV0QXV0b0ZvY3VzOiB0cnVlLFxuICAgIGlucHV0QXV0b1RyaW06IHRydWUsXG4gICAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgICBpbnB1dFZhbGlkYXRvcjogdW5kZWZpbmVkLFxuICAgIHJldHVybklucHV0VmFsdWVPbkRlbnk6IGZhbHNlLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgZ3JvdzogZmFsc2UsXG4gICAgcG9zaXRpb246ICdjZW50ZXInLFxuICAgIHByb2dyZXNzU3RlcHM6IFtdLFxuICAgIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IHVuZGVmaW5lZCxcbiAgICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IHVuZGVmaW5lZCxcbiAgICB3aWxsT3BlbjogdW5kZWZpbmVkLFxuICAgIGRpZE9wZW46IHVuZGVmaW5lZCxcbiAgICBkaWRSZW5kZXI6IHVuZGVmaW5lZCxcbiAgICB3aWxsQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBkaWRDbG9zZTogdW5kZWZpbmVkLFxuICAgIGRpZERlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgICBzY3JvbGxiYXJQYWRkaW5nOiB0cnVlLFxuICAgIHRvcExheWVyOiBmYWxzZVxuICB9O1xuICBjb25zdCB1cGRhdGFibGVQYXJhbXMgPSBbJ2FsbG93RXNjYXBlS2V5JywgJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2JhY2tncm91bmQnLCAnYnV0dG9uc1N0eWxpbmcnLCAnY2FuY2VsQnV0dG9uQXJpYUxhYmVsJywgJ2NhbmNlbEJ1dHRvbkNvbG9yJywgJ2NhbmNlbEJ1dHRvblRleHQnLCAnY2xvc2VCdXR0b25BcmlhTGFiZWwnLCAnY2xvc2VCdXR0b25IdG1sJywgJ2NvbG9yJywgJ2NvbmZpcm1CdXR0b25BcmlhTGFiZWwnLCAnY29uZmlybUJ1dHRvbkNvbG9yJywgJ2NvbmZpcm1CdXR0b25UZXh0JywgJ2N1cnJlbnRQcm9ncmVzc1N0ZXAnLCAnY3VzdG9tQ2xhc3MnLCAnZGVueUJ1dHRvbkFyaWFMYWJlbCcsICdkZW55QnV0dG9uQ29sb3InLCAnZGVueUJ1dHRvblRleHQnLCAnZGlkQ2xvc2UnLCAnZGlkRGVzdHJveScsICdkcmFnZ2FibGUnLCAnZm9vdGVyJywgJ2hpZGVDbGFzcycsICdodG1sJywgJ2ljb24nLCAnaWNvbkNvbG9yJywgJ2ljb25IdG1sJywgJ2ltYWdlQWx0JywgJ2ltYWdlSGVpZ2h0JywgJ2ltYWdlVXJsJywgJ2ltYWdlV2lkdGgnLCAncHJlQ29uZmlybScsICdwcmVEZW55JywgJ3Byb2dyZXNzU3RlcHMnLCAncmV0dXJuRm9jdXMnLCAncmV2ZXJzZUJ1dHRvbnMnLCAnc2hvd0NhbmNlbEJ1dHRvbicsICdzaG93Q2xvc2VCdXR0b24nLCAnc2hvd0NvbmZpcm1CdXR0b24nLCAnc2hvd0RlbnlCdXR0b24nLCAndGV4dCcsICd0aXRsZScsICd0aXRsZVRleHQnLCAndGhlbWUnLCAnd2lsbENsb3NlJ107XG5cbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCB1bmRlZmluZWQ+fSAqL1xuICBjb25zdCBkZXByZWNhdGVkUGFyYW1zID0ge1xuICAgIGFsbG93RW50ZXJLZXk6IHVuZGVmaW5lZFxuICB9O1xuICBjb25zdCB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFsnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYWxsb3dFbnRlcktleScsICdiYWNrZHJvcCcsICdkcmFnZ2FibGUnLCAnZm9jdXNDb25maXJtJywgJ2ZvY3VzRGVueScsICdmb2N1c0NhbmNlbCcsICdyZXR1cm5Gb2N1cycsICdoZWlnaHRBdXRvJywgJ2tleWRvd25MaXN0ZW5lckNhcHR1cmUnXTtcblxuICAvKipcbiAgICogSXMgdmFsaWQgcGFyYW1ldGVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbU5hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1ZhbGlkUGFyYW1ldGVyID0gcGFyYW1OYW1lID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRQYXJhbXMsIHBhcmFtTmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHZhbGlkIHBhcmFtZXRlciBmb3IgU3dhbC51cGRhdGUoKSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtTmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzVXBkYXRhYmxlUGFyYW1ldGVyID0gcGFyYW1OYW1lID0+IHtcbiAgICByZXR1cm4gdXBkYXRhYmxlUGFyYW1zLmluZGV4T2YocGFyYW1OYW1lKSAhPT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbU5hbWVcbiAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGNvbnN0IGlzRGVwcmVjYXRlZFBhcmFtZXRlciA9IHBhcmFtTmFtZSA9PiB7XG4gICAgcmV0dXJuIGRlcHJlY2F0ZWRQYXJhbXNbcGFyYW1OYW1lXTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gICAqL1xuICBjb25zdCBjaGVja0lmUGFyYW1Jc1ZhbGlkID0gcGFyYW0gPT4ge1xuICAgIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oYFVua25vd24gcGFyYW1ldGVyIFwiJHtwYXJhbX1cImApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gICAqL1xuICBjb25zdCBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQgPSBwYXJhbSA9PiB7XG4gICAgaWYgKHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zLmluY2x1ZGVzKHBhcmFtKSkge1xuICAgICAgd2FybihgVGhlIHBhcmFtZXRlciBcIiR7cGFyYW19XCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzYCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1cbiAgICovXG4gIGNvbnN0IGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZCA9IHBhcmFtID0+IHtcbiAgICBjb25zdCBpc0RlcHJlY2F0ZWQgPSBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pO1xuICAgIGlmIChpc0RlcHJlY2F0ZWQpIHtcbiAgICAgIHdhcm5BYm91dERlcHJlY2F0aW9uKHBhcmFtLCBpc0RlcHJlY2F0ZWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2hvd1dhcm5pbmdzRm9yUGFyYW1zID0gcGFyYW1zID0+IHtcbiAgICBpZiAocGFyYW1zLmJhY2tkcm9wID09PSBmYWxzZSAmJiBwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnRoZW1lICYmICFbJ2xpZ2h0JywgJ2RhcmsnLCAnYXV0bycsICdtaW5pbWFsJywgJ2JvcmRlcmxlc3MnLCAnYm9vdHN0cmFwLTQnLCAnYm9vdHN0cmFwLTQtbGlnaHQnLCAnYm9vdHN0cmFwLTQtZGFyaycsICdib290c3RyYXAtNScsICdib290c3RyYXAtNS1saWdodCcsICdib290c3RyYXAtNS1kYXJrJywgJ21hdGVyaWFsLXVpJywgJ21hdGVyaWFsLXVpLWxpZ2h0JywgJ21hdGVyaWFsLXVpLWRhcmsnLCAnZW1iZWQtaWZyYW1lJywgJ2J1bG1hJywgJ2J1bG1hLWxpZ2h0JywgJ2J1bG1hLWRhcmsnXS5pbmNsdWRlcyhwYXJhbXMudGhlbWUpKSB7XG4gICAgICB3YXJuKGBJbnZhbGlkIHRoZW1lIFwiJHtwYXJhbXMudGhlbWV9XCJgKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgIGNoZWNrSWZQYXJhbUlzVmFsaWQocGFyYW0pO1xuICAgICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgICBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQocGFyYW0pO1xuICAgICAgfVxuICAgICAgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkKHBhcmFtKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgcG9wdXAgcGFyYW1ldGVycy5cbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGUocGFyYW1zKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBpZiAoIXBvcHVwIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgICB3YXJuKGBZb3UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgY2xvc2VkIG9yIGNsb3NpbmcgcG9wdXAsIHRoYXQgd29uJ3Qgd29yay4gVXNlIHRoZSB1cGRhdGUoKSBtZXRob2QgaW4gcHJlQ29uZmlybSBwYXJhbWV0ZXIgb3Igc2hvdyBhIG5ldyBwb3B1cC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSBmaWx0ZXJWYWxpZFBhcmFtcyhwYXJhbXMpO1xuICAgIGNvbnN0IHVwZGF0ZWRQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBpbm5lclBhcmFtcywgdmFsaWRVcGRhdGFibGVQYXJhbXMpO1xuICAgIHNob3dXYXJuaW5nc0ZvclBhcmFtcyh1cGRhdGVkUGFyYW1zKTtcbiAgICBjb250YWluZXIuZGF0YXNldFsnc3dhbDJUaGVtZSddID0gdXBkYXRlZFBhcmFtcy50aGVtZTtcbiAgICByZW5kZXIodGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gICAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdmFsdWU6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGFyYW1zLCBwYXJhbXMpLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgZmlsdGVyVmFsaWRQYXJhbXMgPSBwYXJhbXMgPT4ge1xuICAgIGNvbnN0IHZhbGlkVXBkYXRhYmxlUGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgIGlmIChpc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgICAgdmFsaWRVcGRhdGFibGVQYXJhbXNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oYEludmFsaWQgcGFyYW1ldGVyIHRvIHVwZGF0ZTogJHtwYXJhbX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsaWRVcGRhdGFibGVQYXJhbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3Bvc2UgdGhlIGN1cnJlbnQgU3dlZXRBbGVydDIgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIF9kZXN0cm95KCkge1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgICAgZGlzcG9zZVdlYWtNYXBzKHRoaXMpOyAvLyBUaGUgV2Vha01hcHMgbWlnaHQgaGF2ZSBiZWVuIHBhcnRseSBkZXN0cm95ZWQsIHdlIG11c3QgcmVjYWxsIGl0IHRvIGRpc3Bvc2UgYW55IHJlbWFpbmluZyBXZWFrTWFwcyAjMjMzNVxuICAgICAgcmV0dXJuOyAvLyBUaGlzIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYW5vdGhlciBTd2FsIGNsb3NpbmdcbiAgICBpZiAoZG9tQ2FjaGUucG9wdXAgJiYgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKTtcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2s7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaW5uZXJQYXJhbXMuZGlkRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJQYXJhbXMuZGlkRGVzdHJveSgpO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZS5ldmVudEVtaXR0ZXIuZW1pdCgnZGlkRGVzdHJveScpO1xuICAgIGRpc3Bvc2VTd2FsKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IGRpc3Bvc2VTd2FsID0gaW5zdGFuY2UgPT4ge1xuICAgIGRpc3Bvc2VXZWFrTWFwcyhpbnN0YW5jZSk7XG4gICAgLy8gVW5zZXQgdGhpcy5wYXJhbXMgc28gR0Mgd2lsbCBkaXNwb3NlIGl0ICgjMTU2OSlcbiAgICBkZWxldGUgaW5zdGFuY2UucGFyYW1zO1xuICAgIC8vIFVuc2V0IGdsb2JhbFN0YXRlIHByb3BzIHNvIEdDIHdpbGwgZGlzcG9zZSBnbG9iYWxTdGF0ZSAoIzE1NjkpXG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0O1xuICAgIC8vIFVuc2V0IGN1cnJlbnRJbnN0YW5jZVxuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IGRpc3Bvc2VXZWFrTWFwcyA9IGluc3RhbmNlID0+IHtcbiAgICAvLyBJZiB0aGUgY3VycmVudCBpbnN0YW5jZSBpcyBhd2FpdGluZyBhIHByb21pc2UgcmVzdWx0LCB3ZSBrZWVwIHRoZSBwcml2YXRlTWV0aG9kcyB0byBjYWxsIHRoZW0gb25jZSB0aGUgcHJvbWlzZSByZXN1bHQgaXMgcmV0cmlldmVkICMyMzM1XG4gICAgaWYgKGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlKSB7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcywgaW5zdGFuY2UpO1xuICAgICAgaW5zdGFuY2UuaXNBd2FpdGluZ1Byb21pc2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVNZXRob2RzLCBpbnN0YW5jZSk7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcywgaW5zdGFuY2UpO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlO1xuICAgICAgLy8gVW5zZXQgaW5zdGFuY2UgbWV0aG9kc1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmRpc2FibGVCdXR0b25zO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnM7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuZ2V0SW5wdXQ7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuZGlzYWJsZUlucHV0O1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmVuYWJsZUlucHV0O1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmhpZGVMb2FkaW5nO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmRpc2FibGVMb2FkaW5nO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmNsb3NlO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmNsb3NlUG9wdXA7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuY2xvc2VNb2RhbDtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5jbG9zZVRvYXN0O1xuICAgICAgZGVsZXRlIGluc3RhbmNlLnJlamVjdFByb21pc2U7XG4gICAgICBkZWxldGUgaW5zdGFuY2UudXBkYXRlO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLl9kZXN0cm95O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqL1xuICBjb25zdCB1bnNldFdlYWtNYXBzID0gKG9iaiwgaW5zdGFuY2UpID0+IHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gb2JqKSB7XG4gICAgICBvYmpbaV0uZGVsZXRlKGluc3RhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluc3RhbmNlTWV0aG9kcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgX2Rlc3Ryb3k6IF9kZXN0cm95LFxuICAgIGNsb3NlOiBjbG9zZSxcbiAgICBjbG9zZU1vZGFsOiBjbG9zZSxcbiAgICBjbG9zZVBvcHVwOiBjbG9zZSxcbiAgICBjbG9zZVRvYXN0OiBjbG9zZSxcbiAgICBkaXNhYmxlQnV0dG9uczogZGlzYWJsZUJ1dHRvbnMsXG4gICAgZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG4gICAgZGlzYWJsZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuICAgIGVuYWJsZUJ1dHRvbnM6IGVuYWJsZUJ1dHRvbnMsXG4gICAgZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuICAgIGdldElucHV0OiBnZXRJbnB1dCxcbiAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2U6IGhhbmRsZUF3YWl0aW5nUHJvbWlzZSxcbiAgICBoaWRlTG9hZGluZzogaGlkZUxvYWRpbmcsXG4gICAgcmVqZWN0UHJvbWlzZTogcmVqZWN0UHJvbWlzZSxcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlOiByZXNldFZhbGlkYXRpb25NZXNzYWdlLFxuICAgIHNob3dWYWxpZGF0aW9uTWVzc2FnZTogc2hvd1ZhbGlkYXRpb25NZXNzYWdlLFxuICAgIHVwZGF0ZTogdXBkYXRlXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0geyhkaXNtaXNzOiBEaXNtaXNzUmVhc29uKSA9PiB2b2lkfSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9IChpbm5lclBhcmFtcywgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBoYW5kbGVUb2FzdENsaWNrKGlubmVyUGFyYW1zLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgcG9wdXAgYnV0IG1vdXNldXAgb24gdGhlIGNvbnRhaW5lclxuICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBzbGlkZXJcbiAgICAgIGhhbmRsZU1vZGFsTW91c2Vkb3duKGRvbUNhY2hlKTtcblxuICAgICAgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIGNvbnRhaW5lciBidXQgbW91c2V1cCBvbiB0aGUgcG9wdXBcbiAgICAgIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93bihkb21DYWNoZSk7XG4gICAgICBoYW5kbGVNb2RhbENsaWNrKGlubmVyUGFyYW1zLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICogQHBhcmFtIHsoZGlzbWlzczogRGlzbWlzc1JlYXNvbikgPT4gdm9pZH0gZGlzbWlzc1dpdGhcbiAgICovXG4gIGNvbnN0IGhhbmRsZVRvYXN0Q2xpY2sgPSAoaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIC8vIENsb3NpbmcgdG9hc3QgYnkgaW50ZXJuYWwgY2xpY2tcbiAgICBkb21DYWNoZS5wb3B1cC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGlubmVyUGFyYW1zICYmIChpc0FueUJ1dHRvblNob3duKGlubmVyUGFyYW1zKSB8fCBpbm5lclBhcmFtcy50aW1lciB8fCBpbm5lclBhcmFtcy5pbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc0FueUJ1dHRvblNob3duID0gaW5uZXJQYXJhbXMgPT4ge1xuICAgIHJldHVybiAhIShpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93RGVueUJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDbG9zZUJ1dHRvbik7XG4gIH07XG4gIGxldCBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICovXG4gIGNvbnN0IGhhbmRsZU1vZGFsTW91c2Vkb3duID0gZG9tQ2FjaGUgPT4ge1xuICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2Vkb3duID0gKCkgPT4ge1xuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSAoKSA9PiB7fTtcbiAgICAgICAgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgICAvLyBoYXZlIGFueSBvdGhlciBkaXJlY3QgY2hpbGRyZW4gYXNpZGUgb2YgdGhlIHBvcHVwXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duID0gZG9tQ2FjaGUgPT4ge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNlZG93biA9IGUgPT4ge1xuICAgICAgLy8gcHJldmVudCB0aGUgbW9kYWwgdGV4dCBmcm9tIGJlaW5nIHNlbGVjdGVkIG9uIGRvdWJsZSBjbGljayBvbiB0aGUgY29udGFpbmVyIChhbGxvd091dHNpZGVDbGljazogZmFsc2UpXG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSAoKSA9PiB7fTtcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLnBvcHVwIHx8IGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZG9tQ2FjaGUucG9wdXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0geyhkaXNtaXNzOiBEaXNtaXNzUmVhc29uKSA9PiB2b2lkfSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgY29uc3QgaGFuZGxlTW9kYWxDbGljayA9IChpbm5lclBhcmFtcywgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGlmIChpZ25vcmVPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyICYmIGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSkge1xuICAgICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGlzSnF1ZXJ5RWxlbWVudCA9IGVsZW0gPT4gdHlwZW9mIGVsZW0gPT09ICdvYmplY3QnICYmIGVsZW0uanF1ZXJ5O1xuICBjb25zdCBpc0VsZW1lbnQgPSBlbGVtID0+IGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50IHx8IGlzSnF1ZXJ5RWxlbWVudChlbGVtKTtcbiAgY29uc3QgYXJnc1RvUGFyYW1zID0gYXJncyA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGFyZ3NbMF0pKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywgYXJnc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFsndGl0bGUnLCAnaHRtbCcsICdpY29uJ10uZm9yRWFjaCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYXJnID0gYXJnc1tpbmRleF07XG4gICAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fCBpc0VsZW1lbnQoYXJnKSkge1xuICAgICAgICAgIHBhcmFtc1tuYW1lXSA9IGFyZztcbiAgICAgICAgfSBlbHNlIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVycm9yKGBVbmV4cGVjdGVkIHR5cGUgb2YgJHtuYW1lfSEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIkVsZW1lbnRcIiwgZ290ICR7dHlwZW9mIGFyZ31gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1haW4gbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBTd2VldEFsZXJ0MiBwb3B1cFxuICAgKlxuICAgKiBAcGFyYW0gIHsuLi5Td2VldEFsZXJ0T3B0aW9uc30gYXJnc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTd2VldEFsZXJ0UmVzdWx0Pn1cbiAgICovXG4gIGZ1bmN0aW9uIGZpcmUoLi4uYXJncykge1xuICAgIHJldHVybiBuZXcgdGhpcyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4dGVuZGVkIHZlcnNpb24gb2YgYFN3YWxgIGNvbnRhaW5pbmcgYHBhcmFtc2AgYXMgZGVmYXVsdHMuXG4gICAqIFVzZWZ1bCBmb3IgcmV1c2luZyBTd2FsIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiBCZWZvcmU6XG4gICAqIGNvbnN0IHRleHRQcm9tcHRPcHRpb25zID0geyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH1cbiAgICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgU3dhbC5maXJlKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JyB9KVxuICAgKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JyB9KVxuICAgKlxuICAgKiBBZnRlcjpcbiAgICogY29uc3QgVGV4dFByb21wdCA9IFN3YWwubWl4aW4oeyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH0pXG4gICAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycpXG4gICAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nKVxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBtaXhpblBhcmFtc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIG1peGluKG1peGluUGFyYW1zKSB7XG4gICAgY2xhc3MgTWl4aW5Td2FsIGV4dGVuZHMgdGhpcyB7XG4gICAgICBfbWFpbihwYXJhbXMsIHByaW9yaXR5TWl4aW5QYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9tYWluKHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgbWl4aW5QYXJhbXMsIHByaW9yaXR5TWl4aW5QYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBNaXhpblN3YWw7XG4gIH1cblxuICAvKipcbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXMgc2V0LCByZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIE90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdCBnZXRUaW1lckxlZnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5nZXRUaW1lckxlZnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgY29uc3Qgc3RvcFRpbWVyID0gKCkgPT4ge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICBzdG9wVGltZXJQcm9ncmVzc0JhcigpO1xuICAgICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdCByZXN1bWVUaW1lciA9ICgpID0+IHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5zdGFydCgpO1xuICAgICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIocmVtYWluaW5nKTtcbiAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGNvbnN0IHRvZ2dsZVRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICByZXR1cm4gdGltZXIgJiYgKHRpbWVyLnJ1bm5pbmcgPyBzdG9wVGltZXIoKSA6IHJlc3VtZVRpbWVyKCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIGFuIHVwZGF0ZWQgdGltZXIuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgY29uc3QgaW5jcmVhc2VUaW1lciA9IG1zID0+IHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5pbmNyZWFzZShtcyk7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcsIHRydWUpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRpbWVyIGlzIHJ1bm5pbmcuIFJldHVybnMgdHJ1ZSBpZiB0aW1lciBpcyBydW5uaW5nXG4gICAqIG9yIGZhbHNlIGlmIHRpbWVyIGlzIHBhdXNlZCBvciBzdG9wcGVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNUaW1lclJ1bm5pbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuICEhKGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5pc1J1bm5pbmcoKSk7XG4gIH07XG5cbiAgbGV0IGJvZHlDbGlja0xpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgY29uc3QgY2xpY2tIYW5kbGVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKi9cbiAgZnVuY3Rpb24gYmluZENsaWNrSGFuZGxlcihhdHRyID0gJ2RhdGEtc3dhbC10ZW1wbGF0ZScpIHtcbiAgICBjbGlja0hhbmRsZXJzW2F0dHJdID0gdGhpcztcbiAgICBpZiAoIWJvZHlDbGlja0xpc3RlbmVyQWRkZWQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib2R5Q2xpY2tMaXN0ZW5lcik7XG4gICAgICBib2R5Q2xpY2tMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYm9keUNsaWNrTGlzdGVuZXIgPSBldmVudCA9PiB7XG4gICAgZm9yIChsZXQgZWwgPSBldmVudC50YXJnZXQ7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gY2xpY2tIYW5kbGVycykge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgY2xpY2tIYW5kbGVyc1thdHRyXS5maXJlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbXVkZ2UvNTgzMDM4Mj9wZXJtYWxpbmtfY29tbWVudF9pZD0yNjkxOTU3I2dpc3Rjb21tZW50LTI2OTE5NTdcblxuICBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLyoqIEB0eXBlIHtFdmVudHN9ICovXG4gICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRIYW5kbGVyc31cbiAgICAgKi9cbiAgICBfZ2V0SGFuZGxlcnNCeUV2ZW50TmFtZShldmVudE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gbm90IFNldCBiZWNhdXNlIHdlIG5lZWQgdG8ga2VlcCB0aGUgRklGTyBvcmRlclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvcHVsbC8yNzYzI2Rpc2N1c3Npb25fcjE3NDg5OTAzMzRcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RXZlbnRIYW5kbGVyfSBldmVudEhhbmRsZXJcbiAgICAgKi9cbiAgICBvbihldmVudE5hbWUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgY29uc3QgY3VycmVudEhhbmRsZXJzID0gdGhpcy5fZ2V0SGFuZGxlcnNCeUV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgaWYgKCFjdXJyZW50SGFuZGxlcnMuaW5jbHVkZXMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICBjdXJyZW50SGFuZGxlcnMucHVzaChldmVudEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0V2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyXG4gICAgICovXG4gICAgb25jZShldmVudE5hbWUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG9uY2VGbiA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBvbmNlRm4pO1xuICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9O1xuICAgICAgdGhpcy5vbihldmVudE5hbWUsIG9uY2VGbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAgICAgKi9cbiAgICBlbWl0KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgICAgdGhpcy5fZ2V0SGFuZGxlcnNCeUV2ZW50TmFtZShldmVudE5hbWUpLmZvckVhY2goXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7RXZlbnRIYW5kbGVyfSBldmVudEhhbmRsZXJcbiAgICAgICAqL1xuICAgICAgZXZlbnRIYW5kbGVyID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0V2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyXG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRIYW5kbGVycyA9IHRoaXMuX2dldEhhbmRsZXJzQnlFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudEhhbmRsZXJzLmluZGV4T2YoZXZlbnRIYW5kbGVyKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGN1cnJlbnRIYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKi9cbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnROYW1lKSB7XG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9wdWxsLzI3NjMjZGlzY3Vzc2lvbl9yMTc0OTIzOTIyMlxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB9XG4gIH1cblxuICBnbG9iYWxTdGF0ZS5ldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlclxuICAgKi9cbiAgY29uc3Qgb24gPSAoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpID0+IHtcbiAgICBnbG9iYWxTdGF0ZS5ldmVudEVtaXR0ZXIub24oZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7RXZlbnRIYW5kbGVyfSBldmVudEhhbmRsZXJcbiAgICovXG4gIGNvbnN0IG9uY2UgPSAoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpID0+IHtcbiAgICBnbG9iYWxTdGF0ZS5ldmVudEVtaXR0ZXIub25jZShldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnROYW1lXVxuICAgKiBAcGFyYW0ge0V2ZW50SGFuZGxlcn0gW2V2ZW50SGFuZGxlcl1cbiAgICovXG4gIGNvbnN0IG9mZiA9IChldmVudE5hbWUsIGV2ZW50SGFuZGxlcikgPT4ge1xuICAgIC8vIFJlbW92ZSBhbGwgaGFuZGxlcnMgZm9yIGFsbCBldmVudHNcbiAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgZ2xvYmFsU3RhdGUuZXZlbnRFbWl0dGVyLnJlc2V0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldmVudEhhbmRsZXIpIHtcbiAgICAgIC8vIFJlbW92ZSBhIHNwZWNpZmljIGhhbmRsZXJcbiAgICAgIGdsb2JhbFN0YXRlLmV2ZW50RW1pdHRlci5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBhbGwgaGFuZGxlcnMgZm9yIGEgc3BlY2lmaWMgZXZlbnRcbiAgICAgIGdsb2JhbFN0YXRlLmV2ZW50RW1pdHRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnROYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHN0YXRpY01ldGhvZHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGFyZ3NUb1BhcmFtczogYXJnc1RvUGFyYW1zLFxuICAgIGJpbmRDbGlja0hhbmRsZXI6IGJpbmRDbGlja0hhbmRsZXIsXG4gICAgY2xpY2tDYW5jZWw6IGNsaWNrQ2FuY2VsLFxuICAgIGNsaWNrQ29uZmlybTogY2xpY2tDb25maXJtLFxuICAgIGNsaWNrRGVueTogY2xpY2tEZW55LFxuICAgIGVuYWJsZUxvYWRpbmc6IHNob3dMb2FkaW5nLFxuICAgIGZpcmU6IGZpcmUsXG4gICAgZ2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcbiAgICBnZXRDYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbixcbiAgICBnZXRDbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24sXG4gICAgZ2V0Q29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbixcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICBnZXREZW55QnV0dG9uOiBnZXREZW55QnV0dG9uLFxuICAgIGdldEZvY3VzYWJsZUVsZW1lbnRzOiBnZXRGb2N1c2FibGVFbGVtZW50cyxcbiAgICBnZXRGb290ZXI6IGdldEZvb3RlcixcbiAgICBnZXRIdG1sQ29udGFpbmVyOiBnZXRIdG1sQ29udGFpbmVyLFxuICAgIGdldEljb246IGdldEljb24sXG4gICAgZ2V0SWNvbkNvbnRlbnQ6IGdldEljb25Db250ZW50LFxuICAgIGdldEltYWdlOiBnZXRJbWFnZSxcbiAgICBnZXRJbnB1dExhYmVsOiBnZXRJbnB1dExhYmVsLFxuICAgIGdldExvYWRlcjogZ2V0TG9hZGVyLFxuICAgIGdldFBvcHVwOiBnZXRQb3B1cCxcbiAgICBnZXRQcm9ncmVzc1N0ZXBzOiBnZXRQcm9ncmVzc1N0ZXBzLFxuICAgIGdldFRpbWVyTGVmdDogZ2V0VGltZXJMZWZ0LFxuICAgIGdldFRpbWVyUHJvZ3Jlc3NCYXI6IGdldFRpbWVyUHJvZ3Jlc3NCYXIsXG4gICAgZ2V0VGl0bGU6IGdldFRpdGxlLFxuICAgIGdldFZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSxcbiAgICBpbmNyZWFzZVRpbWVyOiBpbmNyZWFzZVRpbWVyLFxuICAgIGlzRGVwcmVjYXRlZFBhcmFtZXRlcjogaXNEZXByZWNhdGVkUGFyYW1ldGVyLFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgIGlzVGltZXJSdW5uaW5nOiBpc1RpbWVyUnVubmluZyxcbiAgICBpc1VwZGF0YWJsZVBhcmFtZXRlcjogaXNVcGRhdGFibGVQYXJhbWV0ZXIsXG4gICAgaXNWYWxpZFBhcmFtZXRlcjogaXNWYWxpZFBhcmFtZXRlcixcbiAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICBtaXhpbjogbWl4aW4sXG4gICAgb2ZmOiBvZmYsXG4gICAgb246IG9uLFxuICAgIG9uY2U6IG9uY2UsXG4gICAgcmVzdW1lVGltZXI6IHJlc3VtZVRpbWVyLFxuICAgIHNob3dMb2FkaW5nOiBzaG93TG9hZGluZyxcbiAgICBzdG9wVGltZXI6IHN0b3BUaW1lcixcbiAgICB0b2dnbGVUaW1lcjogdG9nZ2xlVGltZXJcbiAgfSk7XG5cbiAgY2xhc3MgVGltZXIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgZGVsYXkpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgIHRoaXMucmVtYWluaW5nID0gZGVsYXk7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5pZCA9IHNldFRpbWVvdXQodGhpcy5jYWxsYmFjaywgdGhpcy5yZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXJ0ZWQgJiYgdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nIC09IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydGVkLmdldFRpbWUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaW5jcmVhc2Uobikge1xuICAgICAgY29uc3QgcnVubmluZyA9IHRoaXMucnVubmluZztcbiAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW1haW5pbmcgKz0gbjtcbiAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRpbWVyTGVmdCgpIHtcbiAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1J1bm5pbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydW5uaW5nO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN3YWxTdHJpbmdQYXJhbXMgPSBbJ3N3YWwtdGl0bGUnLCAnc3dhbC1odG1sJywgJ3N3YWwtZm9vdGVyJ107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBnZXRUZW1wbGF0ZVBhcmFtcyA9IHBhcmFtcyA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgcGFyYW1zLnRlbXBsYXRlID09PSAnc3RyaW5nJyA/ICgvKiogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9ICovZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGVtcGxhdGUpKSA6IHBhcmFtcy50ZW1wbGF0ZTtcbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7RG9jdW1lbnRGcmFnbWVudH0gKi9cbiAgICBjb25zdCB0ZW1wbGF0ZUNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzKHRlbXBsYXRlQ29udGVudCk7XG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihnZXRTd2FsUGFyYW1zKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxGdW5jdGlvblBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsQnV0dG9ucyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsSW1hZ2UodGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEljb24odGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbElucHV0KHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxTdHJpbmdQYXJhbXModGVtcGxhdGVDb250ZW50LCBzd2FsU3RyaW5nUGFyYW1zKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+fVxuICAgKi9cbiAgY29uc3QgZ2V0U3dhbFBhcmFtcyA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPn0gKi9cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgY29uc3Qgc3dhbFBhcmFtcyA9IEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtcGFyYW0nKSk7XG4gICAgc3dhbFBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMocGFyYW0sIFsnbmFtZScsICd2YWx1ZSddKTtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IC8qKiBAdHlwZSB7a2V5b2YgU3dlZXRBbGVydE9wdGlvbnN9ICovcGFyYW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIGlmICghcGFyYW1OYW1lIHx8ICF2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGRlZmF1bHRQYXJhbXNbcGFyYW1OYW1lXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gdmFsdWUgIT09ICdmYWxzZSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZhdWx0UGFyYW1zW3BhcmFtTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcGFyYW1OYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCAoKSA9PiB2b2lkPn1cbiAgICovXG4gIGNvbnN0IGdldFN3YWxGdW5jdGlvblBhcmFtcyA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCAoKSA9PiB2b2lkPn0gKi9cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgY29uc3Qgc3dhbEZ1bmN0aW9ucyA9IEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtZnVuY3Rpb24tcGFyYW0nKSk7XG4gICAgc3dhbEZ1bmN0aW9ucy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IC8qKiBAdHlwZSB7a2V5b2YgU3dlZXRBbGVydE9wdGlvbnN9ICovcGFyYW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIGlmICghcGFyYW1OYW1lIHx8ICF2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXN1bHRbcGFyYW1OYW1lXSA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7dmFsdWV9YCkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbj59XG4gICAqL1xuICBjb25zdCBnZXRTd2FsQnV0dG9ucyA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuPn0gKi9cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgY29uc3Qgc3dhbEJ1dHRvbnMgPSBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLWJ1dHRvbicpKTtcbiAgICBzd2FsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGJ1dHRvbiwgWyd0eXBlJywgJ2NvbG9yJywgJ2FyaWEtbGFiZWwnXSk7XG4gICAgICBjb25zdCB0eXBlID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgaWYgKCF0eXBlIHx8ICFbJ2NvbmZpcm0nLCAnY2FuY2VsJywgJ2RlbnknXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXN1bHRbYCR7dHlwZX1CdXR0b25UZXh0YF0gPSBidXR0b24uaW5uZXJIVE1MO1xuICAgICAgcmVzdWx0W2BzaG93JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSl9QnV0dG9uYF0gPSB0cnVlO1xuICAgICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgICAgcmVzdWx0W2Ake3R5cGV9QnV0dG9uQ29sb3JgXSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgICB9XG4gICAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIHJlc3VsdFtgJHt0eXBlfUJ1dHRvbkFyaWFMYWJlbGBdID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtQaWNrPFN3ZWV0QWxlcnRPcHRpb25zLCAnaW1hZ2VVcmwnIHwgJ2ltYWdlV2lkdGgnIHwgJ2ltYWdlSGVpZ2h0JyB8ICdpbWFnZUFsdCc+fVxuICAgKi9cbiAgY29uc3QgZ2V0U3dhbEltYWdlID0gdGVtcGxhdGVDb250ZW50ID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH0gKi9cbiAgICBjb25zdCBpbWFnZSA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWltYWdlJyk7XG4gICAgaWYgKGltYWdlKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGltYWdlLCBbJ3NyYycsICd3aWR0aCcsICdoZWlnaHQnLCAnYWx0J10pO1xuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnc3JjJykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlVXJsID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKSB8fCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCd3aWR0aCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZVdpZHRoID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCd3aWR0aCcpIHx8IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZUhlaWdodCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykgfHwgdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnYWx0JykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlQWx0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdhbHQnKSB8fCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBjb25zdCBnZXRTd2FsSWNvbiA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9ICovXG4gICAgY29uc3QgaWNvbiA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWljb24nKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpY29uLCBbJ3R5cGUnLCAnY29sb3InXSk7XG4gICAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ3R5cGUnKSkge1xuICAgICAgICByZXN1bHQuaWNvbiA9IGljb24uZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICB9XG4gICAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgICAgcmVzdWx0Lmljb25Db2xvciA9IGljb24uZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgICAgfVxuICAgICAgcmVzdWx0Lmljb25IdG1sID0gaWNvbi5pbm5lckhUTUw7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBjb25zdCBnZXRTd2FsSW5wdXQgPSB0ZW1wbGF0ZUNvbnRlbnQgPT4ge1xuICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfSAqL1xuICAgIGNvbnN0IGlucHV0ID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW5wdXQsIFsndHlwZScsICdsYWJlbCcsICdwbGFjZWhvbGRlcicsICd2YWx1ZSddKTtcbiAgICAgIHJlc3VsdC5pbnB1dCA9IGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpIHx8ICd0ZXh0JztcbiAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ2xhYmVsJykpIHtcbiAgICAgICAgcmVzdWx0LmlucHV0TGFiZWwgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2xhYmVsJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICAgIHJlc3VsdC5pbnB1dFBsYWNlaG9sZGVyID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICByZXN1bHQuaW5wdXRWYWx1ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudFtdfSAqL1xuICAgIGNvbnN0IGlucHV0T3B0aW9ucyA9IEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtaW5wdXQtb3B0aW9uJykpO1xuICAgIGlmIChpbnB1dE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQuaW5wdXRPcHRpb25zID0ge307XG4gICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKG9wdGlvbiwgWyd2YWx1ZSddKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBvcHRpb24uaW5uZXJIVE1MO1xuICAgICAgICByZXN1bHQuaW5wdXRPcHRpb25zW29wdGlvblZhbHVlXSA9IG9wdGlvbk5hbWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyYW1OYW1lc1xuICAgKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn1cbiAgICovXG4gIGNvbnN0IGdldFN3YWxTdHJpbmdQYXJhbXMgPSAodGVtcGxhdGVDb250ZW50LCBwYXJhbU5hbWVzKSA9PiB7XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaSBpbiBwYXJhbU5hbWVzKSB7XG4gICAgICBjb25zdCBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuICAgICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9ICovXG4gICAgICBjb25zdCB0YWcgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvcihwYXJhbU5hbWUpO1xuICAgICAgaWYgKHRhZykge1xuICAgICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKHRhZywgW10pO1xuICAgICAgICByZXN1bHRbcGFyYW1OYW1lLnJlcGxhY2UoL15zd2FsLS8sICcnKV0gPSB0YWcuaW5uZXJIVE1MLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICovXG4gIGNvbnN0IHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzID0gdGVtcGxhdGVDb250ZW50ID0+IHtcbiAgICBjb25zdCBhbGxvd2VkRWxlbWVudHMgPSBzd2FsU3RyaW5nUGFyYW1zLmNvbmNhdChbJ3N3YWwtcGFyYW0nLCAnc3dhbC1mdW5jdGlvbi1wYXJhbScsICdzd2FsLWJ1dHRvbicsICdzd2FsLWltYWdlJywgJ3N3YWwtaWNvbicsICdzd2FsLWlucHV0JywgJ3N3YWwtaW5wdXQtb3B0aW9uJ10pO1xuICAgIEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIWFsbG93ZWRFbGVtZW50cy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICB3YXJuKGBVbnJlY29nbml6ZWQgZWxlbWVudCA8JHt0YWdOYW1lfT5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gYWxsb3dlZEF0dHJpYnV0ZXNcbiAgICovXG4gIGNvbnN0IHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMgPSAoZWwsIGFsbG93ZWRBdHRyaWJ1dGVzKSA9PiB7XG4gICAgQXJyYXkuZnJvbShlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUubmFtZSkgPT09IC0xKSB7XG4gICAgICAgIHdhcm4oW2BVbnJlY29nbml6ZWQgYXR0cmlidXRlIFwiJHthdHRyaWJ1dGUubmFtZX1cIiBvbiA8JHtlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9Pi5gLCBgJHthbGxvd2VkQXR0cmlidXRlcy5sZW5ndGggPyBgQWxsb3dlZCBhdHRyaWJ1dGVzIGFyZTogJHthbGxvd2VkQXR0cmlidXRlcy5qb2luKCcsICcpfWAgOiAnVG8gc2V0IHRoZSB2YWx1ZSwgdXNlIEhUTUwgd2l0aGluIHRoZSBlbGVtZW50Lid9YF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IFNIT1dfQ0xBU1NfVElNRU9VVCA9IDEwO1xuXG4gIC8qKlxuICAgKiBPcGVuIHBvcHVwLCBhZGQgbmVjZXNzYXJ5IGNsYXNzZXMgYW5kIHN0eWxlcywgZml4IHNjcm9sbGJhclxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IG9wZW5Qb3B1cCA9IHBhcmFtcyA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLndpbGxPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwYXJhbXMud2lsbE9wZW4ocG9wdXApO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZS5ldmVudEVtaXR0ZXIuZW1pdCgnd2lsbE9wZW4nLCBwb3B1cCk7XG4gICAgY29uc3QgYm9keVN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIGNvbnN0IGluaXRpYWxCb2R5T3ZlcmZsb3cgPSBib2R5U3R5bGVzLm92ZXJmbG93WTtcbiAgICBhZGRDbGFzc2VzKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcyk7XG5cbiAgICAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5KGNvbnRhaW5lciwgcG9wdXApO1xuICAgIH0sIFNIT1dfQ0xBU1NfVElNRU9VVCk7XG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgcGFyYW1zLnNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpO1xuICAgICAgc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cbiAgICBpZiAoIWlzVG9hc3QoKSAmJiAhZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5kaWRPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHBhcmFtcy5kaWRPcGVuKHBvcHVwKSk7XG4gICAgfVxuICAgIGdsb2JhbFN0YXRlLmV2ZW50RW1pdHRlci5lbWl0KCdkaWRPcGVuJywgcG9wdXApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FuaW1hdGlvbkV2ZW50fSBldmVudFxuICAgKi9cbiAgY29uc3Qgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG5cbiAgICAvLyBuby10cmFuc2l0aW9uIGlzIGFkZGVkIGluIGluaXQoKSBpbiBjYXNlIG9uZSBzd2FsIGlzIG9wZW5lZCByaWdodCBhZnRlciBhbm90aGVyXG4gICAgcmVtb3ZlQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1snbm8tdHJhbnNpdGlvbiddKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqL1xuICBjb25zdCBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5ID0gKGNvbnRhaW5lciwgcG9wdXApID0+IHtcbiAgICBpZiAoaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKSkge1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtib29sZWFufSBzY3JvbGxiYXJQYWRkaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbml0aWFsQm9keU92ZXJmbG93XG4gICAqL1xuICBjb25zdCBmaXhTY3JvbGxDb250YWluZXIgPSAoY29udGFpbmVyLCBzY3JvbGxiYXJQYWRkaW5nLCBpbml0aWFsQm9keU92ZXJmbG93KSA9PiB7XG4gICAgaU9TZml4KCk7XG4gICAgaWYgKHNjcm9sbGJhclBhZGRpbmcgJiYgaW5pdGlhbEJvZHlPdmVyZmxvdyAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIHJlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZyhpbml0aWFsQm9keU92ZXJmbG93KTtcbiAgICB9XG5cbiAgICAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IGFkZENsYXNzZXMgPSAoY29udGFpbmVyLCBwb3B1cCwgcGFyYW1zKSA9PiB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMuc2hvd0NsYXNzLmJhY2tkcm9wKTtcbiAgICBpZiAocGFyYW1zLmFuaW1hdGlvbikge1xuICAgICAgLy8gdGhpcyB3b3JrYXJvdW5kIHdpdGggb3BhY2l0eSBpcyBuZWVkZWQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjA1OVxuICAgICAgcG9wdXAuc3R5bGUuc2V0UHJvcGVydHkoJ29wYWNpdHknLCAnMCcsICdpbXBvcnRhbnQnKTtcbiAgICAgIHNob3cocG9wdXAsICdncmlkJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gQW5pbWF0ZSBwb3B1cCByaWdodCBhZnRlciBzaG93aW5nIGl0XG4gICAgICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuc2hvd0NsYXNzLnBvcHVwKTtcbiAgICAgICAgLy8gYW5kIHJlbW92ZSB0aGUgb3BhY2l0eSB3b3JrYXJvdW5kXG4gICAgICAgIHBvcHVwLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvcGFjaXR5Jyk7XG4gICAgICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpOyAvLyAxMG1zIGluIG9yZGVyIHRvIGZpeCAjMjA2MlxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93KHBvcHVwLCAnZ3JpZCcpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXMuc2hvd24pO1xuICAgIGlmIChwYXJhbXMuaGVpZ2h0QXV0byAmJiBwYXJhbXMuYmFja2Ryb3AgJiYgIXBhcmFtcy50b2FzdCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsaWRhdGlvbk1lc3NhZ2VdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nIHwgdm9pZD59XG4gICAgICovXG4gICAgZW1haWw6IChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSA9PiB7XG4gICAgICByZXR1cm4gL15bYS16QS1aMC05LitfJy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXSskLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWxpZGF0aW9uTWVzc2FnZV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCB2b2lkPn1cbiAgICAgKi9cbiAgICB1cmw6IChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSA9PiB7XG4gICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1IHdpdGggYSBzbWFsbCBjaGFuZ2UgZnJvbSAjMTMwNiBhbmQgIzIwMTNcbiAgICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fK34jPV17MSwyNTZ9XFwuW2Etel17Miw2M31cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLz1dKikkLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBVUkwnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpIHtcbiAgICAvLyBVc2UgZGVmYXVsdCBgaW5wdXRWYWxpZGF0b3JgIGZvciBzdXBwb3J0ZWQgaW5wdXQgdHlwZXMgaWYgbm90IHByb3ZpZGVkXG4gICAgaWYgKHBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnZW1haWwnKSB7XG4gICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzWydlbWFpbCddO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAndXJsJykge1xuICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gZGVmYXVsdElucHV0VmFsaWRhdG9yc1sndXJsJ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcykge1xuICAgIC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG4gICAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyk7XG4gICAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBwb3B1cFxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gICAgc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpO1xuXG4gICAgLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG4gICAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0Jyk7XG4gICAgfVxuICAgIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudChwYXJhbXMpO1xuXG4gICAgLy8gUmVwbGFjZSBuZXdsaW5lcyB3aXRoIDxicj4gaW4gdGl0bGVcbiAgICBpZiAodHlwZW9mIHBhcmFtcy50aXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcy50aXRsZSA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gICAgfVxuICAgIGluaXQocGFyYW1zKTtcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3dlZXRBbGVydH0gKi9cbiAgbGV0IGN1cnJlbnRJbnN0YW5jZTtcbiAgdmFyIF9wcm9taXNlID0gLyojX19QVVJFX18qL25ldyBXZWFrTWFwKCk7XG4gIGNsYXNzIFN3ZWV0QWxlcnQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Li4uKFN3ZWV0QWxlcnRPcHRpb25zIHwgc3RyaW5nKX0gYXJnc1xuICAgICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUge1Byb21pc2U8U3dlZXRBbGVydFJlc3VsdD59XG4gICAgICAgKi9cbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKHRoaXMsIF9wcm9taXNlLCB2b2lkIDApO1xuICAgICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuXG4gICAgICAvKiogQHR5cGUge1JlYWRvbmx5PFN3ZWV0QWxlcnRPcHRpb25zPn0gKi9cbiAgICAgIHRoaXMucGFyYW1zID0gb3V0ZXJQYXJhbXM7XG5cbiAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgIHRoaXMuaXNBd2FpdGluZ1Byb21pc2UgPSBmYWxzZTtcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldDIoX3Byb21pc2UsIHRoaXMsIHRoaXMuX21haW4oY3VycmVudEluc3RhbmNlLnBhcmFtcykpO1xuICAgIH1cbiAgICBfbWFpbih1c2VyUGFyYW1zLCBtaXhpblBhcmFtcyA9IHt9KSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JQYXJhbXMoT2JqZWN0LmFzc2lnbih7fSwgbWl4aW5QYXJhbXMsIHVzZXJQYXJhbXMpKTtcbiAgICAgIGlmIChnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgICAgY29uc3Qgc3dhbFByb21pc2VSZXNvbHZlID0gcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLmdldChnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaXNBd2FpdGluZ1Byb21pc2VcbiAgICAgICAgfSA9IGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZTtcbiAgICAgICAgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICAgIGlmICghaXNBd2FpdGluZ1Byb21pc2UpIHtcbiAgICAgICAgICBzd2FsUHJvbWlzZVJlc29sdmUoe1xuICAgICAgICAgICAgaXNEaXNtaXNzZWQ6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgICAgICAgdW5zZXRBcmlhSGlkZGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZTtcbiAgICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJlcGFyZVBhcmFtcyh1c2VyUGFyYW1zLCBtaXhpblBhcmFtcyk7XG4gICAgICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKTtcbiAgICAgIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpO1xuXG4gICAgICAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcbiAgICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuICAgICAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpO1xuICAgICAgY29uc3QgZG9tQ2FjaGUgPSBwb3B1bGF0ZURvbUNhY2hlKGN1cnJlbnRJbnN0YW5jZSk7XG4gICAgICByZW5kZXIoY3VycmVudEluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KGN1cnJlbnRJbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgcmV0dXJuIHN3YWxQcm9taXNlKGN1cnJlbnRJbnN0YW5jZSwgZG9tQ2FjaGUsIGlubmVyUGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcbiAgICB0aGVuKG9uRnVsZmlsbGVkKSB7XG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0MihfcHJvbWlzZSwgdGhpcykudGhlbihvbkZ1bGZpbGxlZCk7XG4gICAgfVxuICAgIGZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0MihfcHJvbWlzZSwgdGhpcykuZmluYWxseShvbkZpbmFsbHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY29uc3Qgc3dhbFByb21pc2UgPSAoaW5zdGFuY2UsIGRvbUNhY2hlLCBpbm5lclBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCBjbG9zaW5ncy9kaXNtaXNzYWxzXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7RGlzbWlzc1JlYXNvbn0gZGlzbWlzc1xuICAgICAgICovXG4gICAgICBjb25zdCBkaXNtaXNzV2l0aCA9IGRpc21pc3MgPT4ge1xuICAgICAgICBpbnN0YW5jZS5jbG9zZSh7XG4gICAgICAgICAgaXNEaXNtaXNzZWQ6IHRydWUsXG4gICAgICAgICAgZGlzbWlzcyxcbiAgICAgICAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgICAgICAgaXNEZW5pZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQoaW5zdGFuY2UsIHJlc29sdmUpO1xuICAgICAgcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZWplY3Quc2V0KGluc3RhbmNlLCByZWplY3QpO1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2soaW5zdGFuY2UpO1xuICAgICAgfTtcbiAgICAgIGRvbUNhY2hlLmRlbnlCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaGFuZGxlRGVueUJ1dHRvbkNsaWNrKGluc3RhbmNlKTtcbiAgICAgIH07XG4gICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2soaW5zdGFuY2UsIGRpc21pc3NXaXRoKTtcbiAgICAgIH07XG4gICAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNsb3NlKTtcbiAgICAgIH07XG4gICAgICBoYW5kbGVQb3B1cENsaWNrKGlubmVyUGFyYW1zLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgYWRkS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcbiAgICAgIHNldHVwVGltZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG4gICAgICBpbml0Rm9jdXMoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKTtcblxuICAgICAgLy8gU2Nyb2xsIGNvbnRhaW5lciB0byB0b3Agb24gb3BlbiAoIzEyNDcsICMxOTQ2KVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHVzZXJQYXJhbXNcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gbWl4aW5QYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgcHJlcGFyZVBhcmFtcyA9ICh1c2VyUGFyYW1zLCBtaXhpblBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlUGFyYW1zID0gZ2V0VGVtcGxhdGVQYXJhbXModXNlclBhcmFtcyk7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFBhcmFtcywgbWl4aW5QYXJhbXMsIHRlbXBsYXRlUGFyYW1zLCB1c2VyUGFyYW1zKTsgLy8gcHJlY2VkZW5jZSBpcyBkZXNjcmliZWQgaW4gIzIxMzFcbiAgICBwYXJhbXMuc2hvd0NsYXNzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFBhcmFtcy5zaG93Q2xhc3MsIHBhcmFtcy5zaG93Q2xhc3MpO1xuICAgIHBhcmFtcy5oaWRlQ2xhc3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLmhpZGVDbGFzcywgcGFyYW1zLmhpZGVDbGFzcyk7XG4gICAgaWYgKHBhcmFtcy5hbmltYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICBwYXJhbXMuc2hvd0NsYXNzID0ge1xuICAgICAgICBiYWNrZHJvcDogJ3N3YWwyLW5vYW5pbWF0aW9uJ1xuICAgICAgfTtcbiAgICAgIHBhcmFtcy5oaWRlQ2xhc3MgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyB7RG9tQ2FjaGV9XG4gICAqL1xuICBjb25zdCBwb3B1bGF0ZURvbUNhY2hlID0gaW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IGRvbUNhY2hlID0ge1xuICAgICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgICBjb250YWluZXI6IGdldENvbnRhaW5lcigpLFxuICAgICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgICAgY29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbigpLFxuICAgICAgZGVueUJ1dHRvbjogZ2V0RGVueUJ1dHRvbigpLFxuICAgICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICAgIGxvYWRlcjogZ2V0TG9hZGVyKCksXG4gICAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFxuICAgICAgcHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gICAgfTtcbiAgICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KGluc3RhbmNlLCBkb21DYWNoZSk7XG4gICAgcmV0dXJuIGRvbUNhY2hlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dsb2JhbFN0YXRlfSBnbG9iYWxTdGF0ZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0geyhkaXNtaXNzOiBEaXNtaXNzUmVhc29uKSA9PiB2b2lkfSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgY29uc3Qgc2V0dXBUaW1lciA9IChnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICBoaWRlKHRpbWVyUHJvZ3Jlc3NCYXIpO1xuICAgIGlmIChpbm5lclBhcmFtcy50aW1lcikge1xuICAgICAgZ2xvYmFsU3RhdGUudGltZW91dCA9IG5ldyBUaW1lcigoKSA9PiB7XG4gICAgICAgIGRpc21pc3NXaXRoKCd0aW1lcicpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICAgIGlmIChpbm5lclBhcmFtcy50aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICAgIHNob3codGltZXJQcm9ncmVzc0Jhcik7XG4gICAgICAgIGFwcGx5Q3VzdG9tQ2xhc3ModGltZXJQcm9ncmVzc0JhciwgaW5uZXJQYXJhbXMsICd0aW1lclByb2dyZXNzQmFyJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQucnVubmluZykge1xuICAgICAgICAgICAgLy8gdGltZXIgY2FuIGJlIGFscmVhZHkgc3RvcHBlZCBvciB1bnNldCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0Jhcihpbm5lclBhcmFtcy50aW1lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZm9jdXMgaW4gdGhlIHBvcHVwOlxuICAgKlxuICAgKiAxLiBJZiBgdG9hc3RgIGlzIGB0cnVlYCwgZG9uJ3Qgc3RlYWwgZm9jdXMgZnJvbSB0aGUgZG9jdW1lbnQuXG4gICAqIDIuIEVsc2UgaWYgdGhlcmUgaXMgYW4gW2F1dG9mb2N1c10gZWxlbWVudCwgZm9jdXMgaXQuXG4gICAqIDMuIEVsc2UgaWYgYGZvY3VzQ29uZmlybWAgaXMgYHRydWVgIGFuZCBjb25maXJtIGJ1dHRvbiBpcyB2aXNpYmxlLCBmb2N1cyBpdC5cbiAgICogNC4gRWxzZSBpZiBgZm9jdXNEZW55YCBpcyBgdHJ1ZWAgYW5kIGRlbnkgYnV0dG9uIGlzIHZpc2libGUsIGZvY3VzIGl0LlxuICAgKiA1LiBFbHNlIGlmIGBmb2N1c0NhbmNlbGAgaXMgYHRydWVgIGFuZCBjYW5jZWwgYnV0dG9uIGlzIHZpc2libGUsIGZvY3VzIGl0LlxuICAgKiA2LiBFbHNlIGZvY3VzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiBhIHBvcHVwIChpZiBhbnkpLlxuICAgKlxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKi9cbiAgY29uc3QgaW5pdEZvY3VzID0gKGRvbUNhY2hlLCBpbm5lclBhcmFtcykgPT4ge1xuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUT0RPOiB0aGlzIGlzIGR1bWIsIHJlbW92ZSBgYWxsb3dFbnRlcktleWAgcGFyYW0gaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxuICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgIHdhcm5BYm91dERlcHJlY2F0aW9uKCdhbGxvd0VudGVyS2V5Jyk7XG4gICAgICBibHVyQWN0aXZlRWxlbWVudCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9jdXNBdXRvZm9jdXMoZG9tQ2FjaGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmb2N1c0J1dHRvbihkb21DYWNoZSwgaW5uZXJQYXJhbXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEZvY3VzKC0xLCAxKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBmb2N1c0F1dG9mb2N1cyA9IGRvbUNhY2hlID0+IHtcbiAgICBjb25zdCBhdXRvZm9jdXNFbGVtZW50cyA9IEFycmF5LmZyb20oZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2F1dG9mb2N1c10nKSk7XG4gICAgZm9yIChjb25zdCBhdXRvZm9jdXNFbGVtZW50IG9mIGF1dG9mb2N1c0VsZW1lbnRzKSB7XG4gICAgICBpZiAoYXV0b2ZvY3VzRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzVmlzaWJsZSQxKGF1dG9mb2N1c0VsZW1lbnQpKSB7XG4gICAgICAgIGF1dG9mb2N1c0VsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBmb2N1c0J1dHRvbiA9IChkb21DYWNoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNEZW55ICYmIGlzVmlzaWJsZSQxKGRvbUNhY2hlLmRlbnlCdXR0b24pKSB7XG4gICAgICBkb21DYWNoZS5kZW55QnV0dG9uLmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZSQxKGRvbUNhY2hlLmNhbmNlbEJ1dHRvbikpIHtcbiAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5mb2N1c0NvbmZpcm0gJiYgaXNWaXNpYmxlJDEoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbikpIHtcbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGJsdXJBY3RpdmVFbGVtZW50ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEFzc2lnbiBpbnN0YW5jZSBtZXRob2RzIGZyb20gc3JjL2luc3RhbmNlTWV0aG9kcy8qLmpzIHRvIHByb3RvdHlwZVxuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5kaXNhYmxlQnV0dG9ucyA9IGRpc2FibGVCdXR0b25zO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5lbmFibGVCdXR0b25zID0gZW5hYmxlQnV0dG9ucztcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuZ2V0SW5wdXQgPSBnZXRJbnB1dDtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuZGlzYWJsZUlucHV0ID0gZGlzYWJsZUlucHV0O1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5lbmFibGVJbnB1dCA9IGVuYWJsZUlucHV0O1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5kaXNhYmxlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UgPSBzaG93VmFsaWRhdGlvbk1lc3NhZ2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5jbG9zZSA9IGNsb3NlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5jbG9zZVBvcHVwID0gY2xvc2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmNsb3NlTW9kYWwgPSBjbG9zZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuY2xvc2VUb2FzdCA9IGNsb3NlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5yZWplY3RQcm9taXNlID0gcmVqZWN0UHJvbWlzZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUudXBkYXRlID0gdXBkYXRlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5fZGVzdHJveSA9IF9kZXN0cm95O1xuXG4gIC8vIEFzc2lnbiBzdGF0aWMgbWV0aG9kcyBmcm9tIHNyYy9zdGF0aWNNZXRob2RzLyouanMgdG8gY29uc3RydWN0b3JcbiAgT2JqZWN0LmFzc2lnbihTd2VldEFsZXJ0LCBzdGF0aWNNZXRob2RzKTtcblxuICAvLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgT2JqZWN0LmtleXMoaW5zdGFuY2VNZXRob2RzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi4oU3dlZXRBbGVydE9wdGlvbnMgfCBzdHJpbmcgfCB1bmRlZmluZWQpfSBhcmdzXG4gICAgICogQHJldHVybnMge1N3ZWV0QWxlcnRSZXN1bHQgfCBQcm9taXNlPFN3ZWV0QWxlcnRSZXN1bHQ+IHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICBpZiAoY3VycmVudEluc3RhbmNlICYmIGN1cnJlbnRJbnN0YW5jZVtrZXldKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50SW5zdGFuY2Vba2V5XSguLi5hcmdzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH0pO1xuICBTd2VldEFsZXJ0LkRpc21pc3NSZWFzb24gPSBEaXNtaXNzUmVhc29uO1xuICBTd2VldEFsZXJ0LnZlcnNpb24gPSAnMTEuMjYuMyc7XG5cbiAgY29uc3QgU3dhbCA9IFN3ZWV0QWxlcnQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgU3dhbC5kZWZhdWx0ID0gU3dhbDtcblxuICByZXR1cm4gU3dhbDtcblxufSkpO1xuaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLlN3ZWV0YWxlcnQyKXt0aGlzLnN3YWwgPSB0aGlzLnN3ZWV0QWxlcnQgPSB0aGlzLlN3YWwgPSB0aGlzLlN3ZWV0QWxlcnQgPSB0aGlzLlN3ZWV0YWxlcnQyfVxuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZmdW5jdGlvbihlLHQpe3ZhciBuPWUuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2lmKGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKG4pLG4uc3R5bGVTaGVldCluLnN0eWxlU2hlZXQuZGlzYWJsZWR8fChuLnN0eWxlU2hlZXQuY3NzVGV4dD10KTtlbHNlIHRyeXtuLmlubmVySFRNTD10fWNhdGNoKGUpe24uaW5uZXJUZXh0PXR9fShkb2N1bWVudCxcIjpyb290ey0tc3dhbDItb3V0bGluZTogMCAwIDAgM3B4IHJnYmEoMTAwLCAxNTAsIDIwMCwgMC41KTstLXN3YWwyLWNvbnRhaW5lci1wYWRkaW5nOiAwLjYyNWVtOy0tc3dhbDItYmFja2Ryb3A6IHJnYmEoMCwgMCwgMCwgMC40KTstLXN3YWwyLWJhY2tkcm9wLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXM7LS1zd2FsMi13aWR0aDogMzJlbTstLXN3YWwyLXBhZGRpbmc6IDAgMCAxLjI1ZW07LS1zd2FsMi1ib3JkZXI6IG5vbmU7LS1zd2FsMi1ib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07LS1zd2FsMi1iYWNrZ3JvdW5kOiB3aGl0ZTstLXN3YWwyLWNvbG9yOiAjNTQ1NDU0Oy0tc3dhbDItc2hvdy1hbmltYXRpb246IHN3YWwyLXNob3cgMC4zczstLXN3YWwyLWhpZGUtYW5pbWF0aW9uOiBzd2FsMi1oaWRlIDAuMTVzIGZvcndhcmRzOy0tc3dhbDItaWNvbi16b29tOiAxOy0tc3dhbDItaWNvbi1hbmltYXRpb25zOiB0cnVlOy0tc3dhbDItdGl0bGUtcGFkZGluZzogMC44ZW0gMWVtIDA7LS1zd2FsMi1odG1sLWNvbnRhaW5lci1wYWRkaW5nOiAxZW0gMS42ZW0gMC4zZW07LS1zd2FsMi1pbnB1dC1ib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5Oy0tc3dhbDItaW5wdXQtYm9yZGVyLXJhZGl1czogMC4xODc1ZW07LS1zd2FsMi1pbnB1dC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAwIDAgM3B4IHRyYW5zcGFyZW50Oy0tc3dhbDItaW5wdXQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7LS1zd2FsMi1pbnB1dC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzOy0tc3dhbDItaW5wdXQtaG92ZXItYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMCAwIDNweCB0cmFuc3BhcmVudDstLXN3YWwyLWlucHV0LWZvY3VzLWJvcmRlcjogMXB4IHNvbGlkICNiNGRiZWQ7LS1zd2FsMi1pbnB1dC1mb2N1cy1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAwIDAgM3B4IHJnYmEoMTAwLCAxNTAsIDIwMCwgMC41KTstLXN3YWwyLXByb2dyZXNzLXN0ZXAtYmFja2dyb3VuZDogI2FkZDhlNjstLXN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1iYWNrZ3JvdW5kOiAjZjBmMGYwOy0tc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWNvbG9yOiAjNjY2Oy0tc3dhbDItZm9vdGVyLWJvcmRlci1jb2xvcjogI2VlZTstLXN3YWwyLWZvb3Rlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLXN3YWwyLWZvb3Rlci1jb2xvcjogaW5oZXJpdDstLXN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7LS1zd2FsMi1jbG9zZS1idXR0b24tcG9zaXRpb246IGluaXRpYWw7LS1zd2FsMi1jbG9zZS1idXR0b24taW5zZXQ6IGF1dG87LS1zd2FsMi1jbG9zZS1idXR0b24tZm9udC1zaXplOiAyLjVlbTstLXN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjogI2NjYzstLXN3YWwyLWNsb3NlLWJ1dHRvbi10cmFuc2l0aW9uOiBjb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7LS1zd2FsMi1jbG9zZS1idXR0b24tb3V0bGluZTogaW5pdGlhbDstLXN3YWwyLWNsb3NlLWJ1dHRvbi1ib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggdHJhbnNwYXJlbnQ7LS1zd2FsMi1jbG9zZS1idXR0b24tZm9jdXMtYm94LXNoYWRvdzogaW5zZXQgdmFyKC0tc3dhbDItb3V0bGluZSk7LS1zd2FsMi1jbG9zZS1idXR0b24taG92ZXItdHJhbnNmb3JtOiBub25lOy0tc3dhbDItYWN0aW9ucy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjstLXN3YWwyLWFjdGlvbnMtd2lkdGg6IGF1dG87LS1zd2FsMi1hY3Rpb25zLW1hcmdpbjogMS4yNWVtIGF1dG8gMDstLXN3YWwyLWFjdGlvbnMtcGFkZGluZzogMDstLXN3YWwyLWFjdGlvbnMtYm9yZGVyLXJhZGl1czogMDstLXN3YWwyLWFjdGlvbnMtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7LS1zd2FsMi1hY3Rpb24tYnV0dG9uLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzOy0tc3dhbDItYWN0aW9uLWJ1dHRvbi1ob3ZlcjogYmxhY2sgMTAlOy0tc3dhbDItYWN0aW9uLWJ1dHRvbi1hY3RpdmU6IGJsYWNrIDEwJTstLXN3YWwyLWNvbmZpcm0tYnV0dG9uLWJveC1zaGFkb3c6IG5vbmU7LS1zd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAwLjI1ZW07LS1zd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNzA2NmUwOy0tc3dhbDItY29uZmlybS1idXR0b24tY29sb3I6ICNmZmY7LS1zd2FsMi1kZW55LWJ1dHRvbi1ib3gtc2hhZG93OiBub25lOy0tc3dhbDItZGVueS1idXR0b24tYm9yZGVyLXJhZGl1czogMC4yNWVtOy0tc3dhbDItZGVueS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogI2RjMzc0MTstLXN3YWwyLWRlbnktYnV0dG9uLWNvbG9yOiAjZmZmOy0tc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3gtc2hhZG93OiBub25lOy0tc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAwLjI1ZW07LS1zd2FsMi1jYW5jZWwtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICM2ZTc4ODE7LS1zd2FsMi1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjZmZmOy0tc3dhbDItdG9hc3Qtc2hvdy1hbmltYXRpb246IHN3YWwyLXRvYXN0LXNob3cgMC41czstLXN3YWwyLXRvYXN0LWhpZGUtYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1oaWRlIDAuMXMgZm9yd2FyZHM7LS1zd2FsMi10b2FzdC1ib3JkZXI6IG5vbmU7LS1zd2FsMi10b2FzdC1ib3gtc2hhZG93OiAwIDAgMXB4IGhzbCgwZGVnIDAlIDAlIC8gMC4wNzUpLCAwIDFweCAycHggaHNsKDBkZWcgMCUgMCUgLyAwLjA3NSksIDFweCAycHggNHB4IGhzbCgwZGVnIDAlIDAlIC8gMC4wNzUpLCAxcHggM3B4IDhweCBoc2woMGRlZyAwJSAwJSAvIDAuMDc1KSwgMnB4IDRweCAxNnB4IGhzbCgwZGVnIDAlIDAlIC8gMC4wNzUpfVtkYXRhLXN3YWwyLXRoZW1lPWRhcmtdey0tc3dhbDItZGFyay10aGVtZS1ibGFjazogIzE5MTkxYTstLXN3YWwyLWRhcmstdGhlbWUtd2hpdGU6ICNlMWUxZTE7LS1zd2FsMi1iYWNrZ3JvdW5kOiB2YXIoLS1zd2FsMi1kYXJrLXRoZW1lLWJsYWNrKTstLXN3YWwyLWNvbG9yOiB2YXIoLS1zd2FsMi1kYXJrLXRoZW1lLXdoaXRlKTstLXN3YWwyLWZvb3Rlci1ib3JkZXItY29sb3I6ICM1NTU7LS1zd2FsMi1pbnB1dC1iYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc3dhbDItZGFyay10aGVtZS1ibGFjayksIHZhcigtLXN3YWwyLWRhcmstdGhlbWUtd2hpdGUpIDEwJSk7LS1zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtYmFja2dyb3VuZDogY29sb3ItbWl4KCBpbiBzcmdiLCB2YXIoLS1zd2FsMi1kYXJrLXRoZW1lLWJsYWNrKSwgdmFyKC0tc3dhbDItZGFyay10aGVtZS13aGl0ZSkgMTAlICk7LS1zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtY29sb3I6IHZhcigtLXN3YWwyLWRhcmstdGhlbWUtd2hpdGUpOy0tc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KX1AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1tkYXRhLXN3YWwyLXRoZW1lPWF1dG9dey0tc3dhbDItZGFyay10aGVtZS1ibGFjazogIzE5MTkxYTstLXN3YWwyLWRhcmstdGhlbWUtd2hpdGU6ICNlMWUxZTE7LS1zd2FsMi1iYWNrZ3JvdW5kOiB2YXIoLS1zd2FsMi1kYXJrLXRoZW1lLWJsYWNrKTstLXN3YWwyLWNvbG9yOiB2YXIoLS1zd2FsMi1kYXJrLXRoZW1lLXdoaXRlKTstLXN3YWwyLWZvb3Rlci1ib3JkZXItY29sb3I6ICM1NTU7LS1zd2FsMi1pbnB1dC1iYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc3dhbDItZGFyay10aGVtZS1ibGFjayksIHZhcigtLXN3YWwyLWRhcmstdGhlbWUtd2hpdGUpIDEwJSk7LS1zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtYmFja2dyb3VuZDogY29sb3ItbWl4KCBpbiBzcmdiLCB2YXIoLS1zd2FsMi1kYXJrLXRoZW1lLWJsYWNrKSwgdmFyKC0tc3dhbDItZGFyay10aGVtZS13aGl0ZSkgMTAlICk7LS1zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtY29sb3I6IHZhcigtLXN3YWwyLWRhcmstdGhlbWUtd2hpdGUpOy0tc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KX19Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wLC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3c6aGlkZGVufWJvZHkuc3dhbDItaGVpZ2h0LWF1dG97aGVpZ2h0OmF1dG8gIWltcG9ydGFudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLXBvcHVwe3BvaW50ZXItZXZlbnRzOmFsbH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse2JveC1zaGFkb3c6MCAwIDEwcHggdmFyKC0tc3dhbDItYmFja2Ryb3ApfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MzYwcHg7bWF4LXdpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApO3BvaW50ZXItZXZlbnRzOm5vbmV9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHtpbnNldDowIGF1dG8gYXV0byA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodHtpbnNldDowIDAgYXV0byBhdXRvfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0e2luc2V0OjAgYXV0byBhdXRvIDB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnR7aW5zZXQ6NTAlIGF1dG8gYXV0byAwO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7aW5zZXQ6NTAlIGF1dG8gYXV0byA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e2luc2V0OjUwJSAwIGF1dG8gYXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdHtpbnNldDphdXRvIGF1dG8gMCAwfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b217aW5zZXQ6YXV0byBhdXRvIDAgNTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHR7aW5zZXQ6YXV0byAwIDAgYXV0b31AbWVkaWEgcHJpbnR7Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wLC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3cteTpzY3JvbGwgIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3AsLnN3YWwyLXRvYXN0LXNob3duKT5bYXJpYS1oaWRkZW49dHJ1ZV17ZGlzcGxheTpub25lfWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCwuc3dhbDItdG9hc3Qtc2hvd24pIC5zd2FsMi1jb250YWluZXJ7cG9zaXRpb246c3RhdGljICFpbXBvcnRhbnR9fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKXtkaXNwbGF5OmdyaWQ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDYwO2luc2V0OjA7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtYXJlYXM6XFxcInRvcC1zdGFydCAgICAgdG9wICAgICAgICAgICAgdG9wLWVuZFxcXCIgXFxcImNlbnRlci1zdGFydCAgY2VudGVyICAgICAgICAgY2VudGVyLWVuZFxcXCIgXFxcImJvdHRvbS1zdGFydCAgYm90dG9tLWNlbnRlciAgYm90dG9tLWVuZFxcXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOm1pbm1heChtaW4tY29udGVudCwgYXV0bykgbWlubWF4KG1pbi1jb250ZW50LCBhdXRvKSBtaW5tYXgobWluLWNvbnRlbnQsIGF1dG8pO2hlaWdodDoxMDAlO3BhZGRpbmc6dmFyKC0tc3dhbDItY29udGFpbmVyLXBhZGRpbmcpO292ZXJmbG93LXg6aGlkZGVuO3RyYW5zaXRpb246dmFyKC0tc3dhbDItYmFja2Ryb3AtdHJhbnNpdGlvbik7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJhY2tkcm9wLXNob3csZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLW5vYW5pbWF0aW9ue2JhY2tncm91bmQ6dmFyKC0tc3dhbDItYmFja2Ryb3ApfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1iYWNrZHJvcC1oaWRle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3Atc3RhcnQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1zdGFydCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXN0YXJ0e2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwgMWZyKSBhdXRvIGF1dG99ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ib3R0b217Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gbWlubWF4KDAsIDFmcikgYXV0b31kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLWVuZCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWVuZCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWVuZHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBhdXRvIG1pbm1heCgwLCAxZnIpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3Atc3RhcnQ+LnN3YWwyLXBvcHVwe2FsaWduLXNlbGY6c3RhcnR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtwbGFjZS1zZWxmOnN0YXJ0IGNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcC1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztwbGFjZS1zZWxmOnN0YXJ0IGVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLXN0YXJ0Pi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWxlZnQ+LnN3YWwyLXBvcHVwe2dyaWQtcm93OjI7YWxpZ24tc2VsZjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlcj4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtncmlkLXJvdzoyO3BsYWNlLXNlbGY6Y2VudGVyIGNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztncmlkLXJvdzoyO3BsYWNlLXNlbGY6Y2VudGVyIGVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXN0YXJ0Pi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWxlZnQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MzthbGlnbi1zZWxmOmVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoyO2dyaWQtcm93OjM7cGxhY2Utc2VsZjplbmQgY2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ib3R0b20tZW5kPi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXJpZ2h0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjozO2dyaWQtcm93OjM7cGxhY2Utc2VsZjplbmQgZW5kfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ncm93LXJvdz4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWdyb3ctZnVsbHNjcmVlbj4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MS80O3dpZHRoOjEwMCV9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWdyb3ctY29sdW1uPi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuPi5zd2FsMi1wb3B1cHtncmlkLXJvdzoxLzQ7YWxpZ24tc2VsZjpzdHJldGNofWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1uby10cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZSAhaW1wb3J0YW50fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKVtwb3BvdmVyXXt3aWR0aDphdXRvO2JvcmRlcjowfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKXtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwgMTAwJSk7d2lkdGg6dmFyKC0tc3dhbDItd2lkdGgpO21heC13aWR0aDoxMDAlO3BhZGRpbmc6dmFyKC0tc3dhbDItcGFkZGluZyk7Ym9yZGVyOnZhcigtLXN3YWwyLWJvcmRlcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1zd2FsMi1ib3JkZXItcmFkaXVzKTtiYWNrZ3JvdW5kOnZhcigtLXN3YWwyLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLXN3YWwyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtO2NvbnRhaW5lci1uYW1lOnN3YWwyLXBvcHVwfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKTpmb2N1c3tvdXRsaW5lOm5vbmV9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcG9wdXApLnN3YWwyLWxvYWRpbmd7b3ZlcmZsb3cteTpoaWRkZW59ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcG9wdXApLnN3YWwyLWRyYWdnYWJsZXtjdXJzb3I6Z3JhYn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1wb3B1cCkuc3dhbDItZHJhZ2dhYmxlIGRpdjp3aGVyZSguc3dhbDItaWNvbil7Y3Vyc29yOmdyYWJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcG9wdXApLnN3YWwyLWRyYWdnaW5ne2N1cnNvcjpncmFiYmluZ31kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1wb3B1cCkuc3dhbDItZHJhZ2dpbmcgZGl2OndoZXJlKC5zd2FsMi1pY29uKXtjdXJzb3I6Z3JhYmJpbmd9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGgyOndoZXJlKC5zd2FsMi10aXRsZSl7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjA7cGFkZGluZzp2YXIoLS1zd2FsMi10aXRsZS1wYWRkaW5nKTtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtjdXJzb3I6aW5pdGlhbH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1hY3Rpb25zKXtkaXNwbGF5OmZsZXg7ei1pbmRleDoxO2JveC1zaXppbmc6Ym9yZGVyLWJveDtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnZhcigtLXN3YWwyLWFjdGlvbnMtanVzdGlmeS1jb250ZW50KTt3aWR0aDp2YXIoLS1zd2FsMi1hY3Rpb25zLXdpZHRoKTttYXJnaW46dmFyKC0tc3dhbDItYWN0aW9ucy1tYXJnaW4pO3BhZGRpbmc6dmFyKC0tc3dhbDItYWN0aW9ucy1wYWRkaW5nKTtib3JkZXItcmFkaXVzOnZhcigtLXN3YWwyLWFjdGlvbnMtYm9yZGVyLXJhZGl1cyk7YmFja2dyb3VuZDp2YXIoLS1zd2FsMi1hY3Rpb25zLWJhY2tncm91bmQpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWxvYWRlcil7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjIuMmVtO2hlaWdodDoyLjJlbTttYXJnaW46MCAxLjg3NWVtO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7Ym9yZGVyLXdpZHRoOi4yNWVtO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOiMyNzc4YzQgcmdiYSgwLDAsMCwwKSAjMjc3OGM0IHJnYmEoMCwwLDAsMCl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKXttYXJnaW46LjMxMjVlbTtwYWRkaW5nOi42MjVlbSAxLjFlbTt0cmFuc2l0aW9uOnZhcigtLXN3YWwyLWFjdGlvbi1idXR0b24tdHJhbnNpdGlvbik7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgwLDAsMCwwKTtmb250LXdlaWdodDo1MDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKTpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKTp3aGVyZSguc3dhbDItY29uZmlybSl7Ym9yZGVyLXJhZGl1czp2YXIoLS1zd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzKTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXN3YWwyLWNvbmZpcm0tYnV0dG9uLWJveC1zaGFkb3cpO2NvbG9yOnZhcigtLXN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yKTtmb250LXNpemU6MWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6d2hlcmUoLnN3YWwyLWNvbmZpcm0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN3YWwyLWNvbmZpcm0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IpLCB2YXIoLS1zd2FsMi1hY3Rpb24tYnV0dG9uLWhvdmVyKSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKTp3aGVyZSguc3dhbDItY29uZmlybSk6YWN0aXZle2JhY2tncm91bmQtY29sb3I6Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN3YWwyLWNvbmZpcm0tYnV0dG9uLWJhY2tncm91bmQtY29sb3IpLCB2YXIoLS1zd2FsMi1hY3Rpb24tYnV0dG9uLWFjdGl2ZSkpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6d2hlcmUoLnN3YWwyLWRlbnkpe2JvcmRlci1yYWRpdXM6dmFyKC0tc3dhbDItZGVueS1idXR0b24tYm9yZGVyLXJhZGl1cyk7YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6dmFyKC0tc3dhbDItZGVueS1idXR0b24tYmFja2dyb3VuZC1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS1zd2FsMi1kZW55LWJ1dHRvbi1ib3gtc2hhZG93KTtjb2xvcjp2YXIoLS1zd2FsMi1kZW55LWJ1dHRvbi1jb2xvcik7Zm9udC1zaXplOjFlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpOndoZXJlKC5zd2FsMi1kZW55KTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zd2FsMi1kZW55LWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKSwgdmFyKC0tc3dhbDItYWN0aW9uLWJ1dHRvbi1ob3ZlcikpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6d2hlcmUoLnN3YWwyLWRlbnkpOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOmNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zd2FsMi1kZW55LWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKSwgdmFyKC0tc3dhbDItYWN0aW9uLWJ1dHRvbi1hY3RpdmUpKX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpOndoZXJlKC5zd2FsMi1jYW5jZWwpe2JvcmRlci1yYWRpdXM6dmFyKC0tc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXItcmFkaXVzKTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zd2FsMi1jYW5jZWwtYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3gtc2hhZG93KTtjb2xvcjp2YXIoLS1zd2FsMi1jYW5jZWwtYnV0dG9uLWNvbG9yKTtmb250LXNpemU6MWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6d2hlcmUoLnN3YWwyLWNhbmNlbCk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc3dhbDItY2FuY2VsLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKSwgdmFyKC0tc3dhbDItYWN0aW9uLWJ1dHRvbi1ob3ZlcikpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6d2hlcmUoLnN3YWwyLWNhbmNlbCk6YWN0aXZle2JhY2tncm91bmQtY29sb3I6Y29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN3YWwyLWNhbmNlbC1idXR0b24tYmFja2dyb3VuZC1jb2xvciksIHZhcigtLXN3YWwyLWFjdGlvbi1idXR0b24tYWN0aXZlKSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKTpmb2N1cy12aXNpYmxle291dGxpbmU6bm9uZTtib3gtc2hhZG93OnZhcigtLXN3YWwyLWFjdGlvbi1idXR0b24tZm9jdXMtYm94LXNoYWRvdyl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKVtkaXNhYmxlZF06bm90KC5zd2FsMi1sb2FkaW5nKXtvcGFjaXR5Oi40fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItZm9vdGVyKXttYXJnaW46MWVtIDAgMDtwYWRkaW5nOjFlbSAxZW0gMDtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1zd2FsMi1mb290ZXItYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLXN3YWwyLWZvb3Rlci1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1zd2FsMi1mb290ZXItY29sb3IpO2ZvbnQtc2l6ZToxZW07dGV4dC1hbGlnbjpjZW50ZXI7Y3Vyc29yOmluaXRpYWx9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2dyaWQtY29sdW1uOmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tc3dhbDItYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1zd2FsMi1ib3JkZXItcmFkaXVzKX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIpe3dpZHRoOjEwMCU7aGVpZ2h0Oi4yNWVtO2JhY2tncm91bmQ6dmFyKC0tc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbWc6d2hlcmUoLnN3YWwyLWltYWdlKXttYXgtd2lkdGg6MTAwJTttYXJnaW46MmVtIGF1dG8gMWVtO2N1cnNvcjppbml0aWFsfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLWNsb3NlKXtwb3NpdGlvbjp2YXIoLS1zd2FsMi1jbG9zZS1idXR0b24tcG9zaXRpb24pO2luc2V0OnZhcigtLXN3YWwyLWNsb3NlLWJ1dHRvbi1pbnNldCk7ei1pbmRleDoyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuMmVtO2hlaWdodDoxLjJlbTttYXJnaW4tdG9wOjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbTotMS4yZW07cGFkZGluZzowO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOnZhcigtLXN3YWwyLWNsb3NlLWJ1dHRvbi10cmFuc2l0aW9uKTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOnZhcigtLXN3YWwyLWJvcmRlci1yYWRpdXMpO291dGxpbmU6dmFyKC0tc3dhbDItY2xvc2UtYnV0dG9uLW91dGxpbmUpO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtjb2xvcjp2YXIoLS1zd2FsMi1jbG9zZS1idXR0b24tY29sb3IpO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTtmb250LXNpemU6dmFyKC0tc3dhbDItY2xvc2UtYnV0dG9uLWZvbnQtc2l6ZSk7Y3Vyc29yOnBvaW50ZXI7anVzdGlmeS1zZWxmOmVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1jbG9zZSk6aG92ZXJ7dHJhbnNmb3JtOnZhcigtLXN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci10cmFuc2Zvcm0pO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtjb2xvcjojZjI3NDc0fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLWNsb3NlKTpmb2N1cy12aXNpYmxle291dGxpbmU6bm9uZTtib3gtc2hhZG93OnZhcigtLXN3YWwyLWNsb3NlLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1jbG9zZSk6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItaHRtbC1jb250YWluZXIpe3otaW5kZXg6MTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjowO3BhZGRpbmc6dmFyKC0tc3dhbDItaHRtbC1jb250YWluZXItcGFkZGluZyk7b3ZlcmZsb3c6YXV0bztjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtO2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZDtjdXJzb3I6aW5pdGlhbH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBzZWxlY3Q6d2hlcmUoLnN3YWwyLXNlbGVjdCksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcmFkaW8pLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBsYWJlbDp3aGVyZSguc3dhbDItY2hlY2tib3gpe21hcmdpbjoxZW0gMmVtIDNweH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpe2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDphdXRvO3RyYW5zaXRpb246dmFyKC0tc3dhbDItaW5wdXQtdHJhbnNpdGlvbik7Ym9yZGVyOnZhcigtLXN3YWwyLWlucHV0LWJvcmRlcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1zd2FsMi1pbnB1dC1ib3JkZXItcmFkaXVzKTtiYWNrZ3JvdW5kOnZhcigtLXN3YWwyLWlucHV0LWJhY2tncm91bmQpO2JveC1zaGFkb3c6dmFyKC0tc3dhbDItaW5wdXQtYm94LXNoYWRvdyk7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KS5zd2FsMi1pbnB1dGVycm9yLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItZmlsZSkuc3dhbDItaW5wdXRlcnJvcixkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgdGV4dGFyZWE6d2hlcmUoLnN3YWwyLXRleHRhcmVhKS5zd2FsMi1pbnB1dGVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0ICFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQgIWltcG9ydGFudH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KTpob3ZlcixkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpOmhvdmVyLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpOmhvdmVye2JveC1zaGFkb3c6dmFyKC0tc3dhbDItaW5wdXQtaG92ZXItYm94LXNoYWRvdyl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1pbnB1dCk6Zm9jdXMsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1maWxlKTpmb2N1cyxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgdGV4dGFyZWE6d2hlcmUoLnN3YWwyLXRleHRhcmVhKTpmb2N1c3tib3JkZXI6dmFyKC0tc3dhbDItaW5wdXQtZm9jdXMtYm9yZGVyKTtvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzp2YXIoLS1zd2FsMi1pbnB1dC1mb2N1cy1ib3gtc2hhZG93KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KTo6cGxhY2Vob2xkZXIsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1maWxlKTo6cGxhY2Vob2xkZXIsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIHRleHRhcmVhOndoZXJlKC5zd2FsMi10ZXh0YXJlYSk6OnBsYWNlaG9sZGVye2NvbG9yOiNjY2N9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYW5nZXttYXJnaW46MWVtIDJlbSAzcHg7YmFja2dyb3VuZDp2YXIoLS1zd2FsMi1iYWNrZ3JvdW5kKX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdlIGlucHV0e3dpZHRoOjgwJX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdlIG91dHB1dHt3aWR0aDoyMCU7Y29sb3I6aW5oZXJpdDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYW5nZSBpbnB1dCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdlIG91dHB1dHtoZWlnaHQ6Mi42MjVlbTtwYWRkaW5nOjA7Zm9udC1zaXplOjEuMTI1ZW07bGluZS1oZWlnaHQ6Mi42MjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWlucHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MCAuNzVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWZpbGV7d2lkdGg6NzUlO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1sZWZ0OmF1dG87YmFja2dyb3VuZDp2YXIoLS1zd2FsMi1pbnB1dC1iYWNrZ3JvdW5kKTtmb250LXNpemU6MS4xMjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXRleHRhcmVhe2hlaWdodDo2Ljc1ZW07cGFkZGluZzouNzVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXNlbGVjdHttaW4td2lkdGg6NTAlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6LjM3NWVtIC42MjVlbTtiYWNrZ3JvdW5kOnZhcigtLXN3YWwyLWlucHV0LWJhY2tncm91bmQpO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYWRpbyxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWNoZWNrYm94e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tc3dhbDItYmFja2dyb3VuZCk7Y29sb3I6aW5oZXJpdH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhZGlvIGxhYmVsLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItY2hlY2tib3ggbGFiZWx7bWFyZ2luOjAgLjZlbTtmb250LXNpemU6MS4xMjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhZGlvIGlucHV0LGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItY2hlY2tib3ggaW5wdXR7ZmxleC1zaHJpbms6MDttYXJnaW46MCAuNGVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBsYWJlbDp3aGVyZSguc3dhbDItaW5wdXQtbGFiZWwpe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gYXV0byAwfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSl7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjFlbSAwIDA7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6dmFyKC0tc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLXN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1jb2xvcik7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlKTo6YmVmb3Jle2NvbnRlbnQ6XFxcIiFcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBze2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjttYXgtd2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG87cGFkZGluZzowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtmb250LXdlaWdodDo2MDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwe3otaW5kZXg6MjA7ZmxleC1zaHJpbms6MDt3aWR0aDoyZW07aGVpZ2h0OjJlbTtib3JkZXItcmFkaXVzOjJlbTtiYWNrZ3JvdW5kOiMyNzc4YzQ7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyZW07dGV4dC1hbGlnbjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiMyNzc4YzR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOnZhcigtLXN3YWwyLXByb2dyZXNzLXN0ZXAtYmFja2dyb3VuZCk7Y29sb3I6I2ZmZn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7YmFja2dyb3VuZDp2YXIoLS1zd2FsMi1wcm9ncmVzcy1zdGVwLWJhY2tncm91bmQpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZXt6LWluZGV4OjEwO2ZsZXgtc2hyaW5rOjA7d2lkdGg6Mi41ZW07aGVpZ2h0Oi40ZW07bWFyZ2luOjAgLTFweDtiYWNrZ3JvdW5kOiMyNzc4YzR9ZGl2OndoZXJlKC5zd2FsMi1pY29uKXtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NWVtO2hlaWdodDo1ZW07bWFyZ2luOjIuNWVtIGF1dG8gLjZlbTt6b29tOnZhcigtLXN3YWwyLWljb24tem9vbSk7Ym9yZGVyOi4yNWVtIHNvbGlkIHJnYmEoMCwwLDAsMCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLWNvbG9yOiMwMDA7Zm9udC1mYW1pbHk6aW5oZXJpdDtsaW5lLWhlaWdodDo1ZW07Y3Vyc29yOmRlZmF1bHQ7dXNlci1zZWxlY3Q6bm9uZX1kaXY6d2hlcmUoLnN3YWwyLWljb24pIC5zd2FsMi1pY29uLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6My43NWVtfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzQ7Y29sb3I6I2YyNzQ3NH1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1ncm93OjF9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyLjMxMjVlbTt3aWR0aDoyLjkzNzVlbTtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzR9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDoxLjA2MjVlbTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6MWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1AY29udGFpbmVyIHN3YWwyLXBvcHVwIHN0eWxlKC0tc3dhbDItaWNvbi1hbmltYXRpb25zOnRydWUpe2Rpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93IC5zd2FsMi14LW1hcmt7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41c319ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi13YXJuaW5ne2JvcmRlci1jb2xvcjojZjhiYjg2O2NvbG9yOiNmOGJiODZ9QGNvbnRhaW5lciBzd2FsMi1wb3B1cCBzdHlsZSgtLXN3YWwyLWljb24tYW5pbWF0aW9uczp0cnVlKXtkaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXdhcm5pbmcuc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItd2FybmluZy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLWljb24tY29udGVudHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1pLW1hcmsgLjVzfX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWluZm97Ym9yZGVyLWNvbG9yOiMzZmMzZWU7Y29sb3I6IzNmYzNlZX1AY29udGFpbmVyIHN3YWwyLXBvcHVwIHN0eWxlKC0tc3dhbDItaWNvbi1hbmltYXRpb25zOnRydWUpe2Rpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItaW5mby5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1pbmZvLnN3YWwyLWljb24tc2hvdyAuc3dhbDItaWNvbi1jb250ZW50e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWktbWFyayAuOHN9fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItcXVlc3Rpb257Ym9yZGVyLWNvbG9yOiM4N2FkYmQ7Y29sb3I6Izg3YWRiZH1AY29udGFpbmVyIHN3YWwyLXBvcHVwIHN0eWxlKC0tc3dhbDItaWNvbi1hbmltYXRpb25zOnRydWUpe2Rpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItcXVlc3Rpb24uc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItcXVlc3Rpb24uc3dhbDItaWNvbi1zaG93IC5zd2FsMi1pY29uLWNvbnRlbnR7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtcXVlc3Rpb24tbWFyayAuOHN9fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Njtjb2xvcjojYTVkYzg2fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6My43NWVtO2hlaWdodDo3LjVlbTtib3JkZXItcmFkaXVzOjUwJX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XXt0b3A6LTAuNDM3NWVtO2xlZnQ6LTIuMDYzNWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm0tb3JpZ2luOjMuNzVlbSAzLjc1ZW07Ym9yZGVyLXJhZGl1czo3LjVlbSAwIDAgNy41ZW19ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotMC42ODc1ZW07bGVmdDoxLjg3NWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMy43NWVtO2JvcmRlci1yYWRpdXM6MCA3LjVlbSA3LjVlbSAwfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mjt0b3A6LTAuMjVlbTtsZWZ0Oi0wLjI1ZW07Ym94LXNpemluZzpjb250ZW50LWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTt0b3A6LjVlbTtsZWZ0OjEuNjI1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6NS42MjVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MjtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNhNWRjODZ9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9bG9uZ117dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9QGNvbnRhaW5lciBzd2FsMi1wb3B1cCBzdHlsZSgtLXN3YWwyLWljb24tYW5pbWF0aW9uczp0cnVlKXtkaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwe2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHthbmltYXRpb246c3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWlufX1bY2xhc3NePXN3YWwyXXstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0uc3dhbDItc2hvd3thbmltYXRpb246dmFyKC0tc3dhbDItc2hvdy1hbmltYXRpb24pfS5zd2FsMi1oaWRle2FuaW1hdGlvbjp2YXIoLS1zd2FsMi1oaWRlLWFuaW1hdGlvbil9LnN3YWwyLW5vYW5pbWF0aW9ue3RyYW5zaXRpb246bm9uZX0uc3dhbDItc2Nyb2xsYmFyLW1lYXN1cmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGx9LnN3YWwyLXJ0bCAuc3dhbDItY2xvc2V7bWFyZ2luLXJpZ2h0OmluaXRpYWw7bWFyZ2luLWxlZnQ6MH0uc3dhbDItcnRsIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXJ7cmlnaHQ6MDtsZWZ0OmF1dG99LnN3YWwyLXRvYXN0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtncmlkLWNvbHVtbjoxLzQgIWltcG9ydGFudDtncmlkLXJvdzoxLzQgIWltcG9ydGFudDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWluLWNvbnRlbnQgYXV0byBtaW4tY29udGVudDtwYWRkaW5nOjFlbTtvdmVyZmxvdy15OmhpZGRlbjtib3JkZXI6dmFyKC0tc3dhbDItdG9hc3QtYm9yZGVyKTtiYWNrZ3JvdW5kOnZhcigtLXN3YWwyLWJhY2tncm91bmQpO2JveC1zaGFkb3c6dmFyKC0tc3dhbDItdG9hc3QtYm94LXNoYWRvdyk7cG9pbnRlci1ldmVudHM6YWxsfS5zd2FsMi10b2FzdD4qe2dyaWQtY29sdW1uOjJ9LnN3YWwyLXRvYXN0IGgyOndoZXJlKC5zd2FsMi10aXRsZSl7bWFyZ2luOi41ZW0gMWVtO3BhZGRpbmc6MDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246aW5pdGlhbH0uc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmd7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItdG9hc3QgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KXtoZWlnaHQ6MmVtO21hcmdpbjouNWVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7Zm9udC1zaXplOjFlbX0uc3dhbDItdG9hc3QgZGl2OndoZXJlKC5zd2FsMi1mb290ZXIpe21hcmdpbjouNWVtIDAgMDtwYWRkaW5nOi41ZW0gMCAwO2ZvbnQtc2l6ZTouOGVtfS5zd2FsMi10b2FzdCBidXR0b246d2hlcmUoLnN3YWwyLWNsb3NlKXtncmlkLWNvbHVtbjozLzM7Z3JpZC1yb3c6MS85OTthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDouOGVtO2hlaWdodDouOGVtO21hcmdpbjowO2ZvbnQtc2l6ZToyZW19LnN3YWwyLXRvYXN0IGRpdjp3aGVyZSguc3dhbDItaHRtbC1jb250YWluZXIpe21hcmdpbjouNWVtIDFlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aW5pdGlhbDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246aW5pdGlhbH0uc3dhbDItdG9hc3QgZGl2OndoZXJlKC5zd2FsMi1odG1sLWNvbnRhaW5lcik6ZW1wdHl7cGFkZGluZzowfS5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGVye2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MS85OTthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46LjI1ZW19LnN3YWwyLXRvYXN0IC5zd2FsMi1pY29ue2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MS85OTthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDoyZW07bWluLXdpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjowIC41ZW0gMCAwfS5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEuOGVtO2ZvbnQtd2VpZ2h0OmJvbGR9LnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17dG9wOi44NzVlbTt3aWR0aDoxLjM3NWVtfS5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDouMzEyNWVtfS5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0Oi4zMTI1ZW19LnN3YWwyLXRvYXN0IGRpdjp3aGVyZSguc3dhbDItYWN0aW9ucyl7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7aGVpZ2h0OmF1dG87bWFyZ2luOjA7bWFyZ2luLXRvcDouNWVtO3BhZGRpbmc6MCAuNWVtfS5zd2FsMi10b2FzdCBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCl7bWFyZ2luOi4yNWVtIC41ZW07cGFkZGluZzouNGVtIC42ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxLjZlbTtoZWlnaHQ6M2VtO2JvcmRlci1yYWRpdXM6NTAlfS5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotMC44ZW07bGVmdDotMC41ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTtib3JkZXItcmFkaXVzOjRlbSAwIDAgNGVtfS5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LTAuMjVlbTtsZWZ0Oi45Mzc1ZW07dHJhbnNmb3JtLW9yaWdpbjowIDEuNWVtO2JvcmRlci1yYWRpdXM6MCA0ZW0gNGVtIDB9LnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHt0b3A6MDtsZWZ0Oi40Mzc1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6Mi42ODc1ZW19LnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtoZWlnaHQ6LjMxMjVlbX0uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX0uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19QGNvbnRhaW5lciBzd2FsMi1wb3B1cCBzdHlsZSgtLXN3YWwyLWljb24tYW5pbWF0aW9uczp0cnVlKXsuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwe2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3thbmltYXRpb246c3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfX0uc3dhbDItdG9hc3Quc3dhbDItc2hvd3thbmltYXRpb246dmFyKC0tc3dhbDItdG9hc3Qtc2hvdy1hbmltYXRpb24pfS5zd2FsMi10b2FzdC5zd2FsMi1oaWRle2FuaW1hdGlvbjp2YXIoLS1zd2FsMi10b2FzdC1oaWRlLWFuaW1hdGlvbil9QGtleWZyYW1lcyBzd2FsMi1zaG93ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAtNTBweCwgMCkgc2NhbGUoMC45KTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAtNTBweCwgMCkgc2NhbGUoMC45KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0wLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW19fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmV7MCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUle3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSgwLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSgwLjQpO29wYWNpdHk6MH04MCV7bWFyZ2luLXRvcDotMC4zNzVlbTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXF1ZXN0aW9uLW1hcmt7MCV7dHJhbnNmb3JtOnJvdGF0ZVkoLTM2MGRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlWSgwKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWktbWFya3swJXt0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7b3BhY2l0eTowfTI1JXt0cmFuc2Zvcm06cm90YXRlWigtMjVkZWcpO29wYWNpdHk6LjR9NTAle3RyYW5zZm9ybTpyb3RhdGVaKDE1ZGVnKTtvcGFjaXR5Oi44fTc1JXt0cmFuc2Zvcm06cm90YXRlWigtNWRlZyk7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZVgoMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LXNob3d7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyl9MzMle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooMGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAle3RyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOi41NjI1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDouMTI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOi42MjVlbTtsZWZ0Oi0wLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDoxLjYyNWVtO3JpZ2h0OjEuMzc1ZW07d2lkdGg6MH02NSV7dG9wOjEuMjVlbTtyaWdodDouOTM3NWVtO3dpZHRoOjB9ODQle3RvcDouOTM3NWVtO3JpZ2h0OjA7d2lkdGg6MS4xMjVlbX0xMDAle3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX19XCIpOyIsImltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g5YiX5oyZ5L2TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDjg57jgqbjgrnjg5zjgr/jg7Pjga7liJfmjJnkvZNcbmV4cG9ydCB2YXIgTW91c2VCdXR0b25FbnVtO1xuKGZ1bmN0aW9uIChNb3VzZUJ1dHRvbkVudW0pIHtcbiAgICBNb3VzZUJ1dHRvbkVudW1bTW91c2VCdXR0b25FbnVtW1wiTGVmdFwiXSA9IDBdID0gXCJMZWZ0XCI7XG4gICAgTW91c2VCdXR0b25FbnVtW01vdXNlQnV0dG9uRW51bVtcIk1pZGRsZVwiXSA9IDFdID0gXCJNaWRkbGVcIjtcbiAgICBNb3VzZUJ1dHRvbkVudW1bTW91c2VCdXR0b25FbnVtW1wiUmlnaHRcIl0gPSAyXSA9IFwiUmlnaHRcIjtcbn0pKE1vdXNlQnV0dG9uRW51bSB8fCAoTW91c2VCdXR0b25FbnVtID0ge30pKTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOODpuODvOODhuOCo+ODquODhuOCo+OCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgICAvLyDnorroqo3jg4DjgqTjgqLjg63jgrDjgpLooajnpLrjgZfjgabjgqLjgq/jgrfjg6fjg7PjgpLlrp/ooYxcbiAgICBzdGF0aWMgY29uZmlybUFjdGlvbihtZXNzYWdlLCBhY3Rpb24pIHtcbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIueiuuiqjVwiLFxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCLjga/jgYTjgIHlrp/ooYzjgZfjgb7jgZlcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwi44GE44GE44GIXCIsXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8g44Ko44Op44O844Oh44OD44K744O844K444KS6KGo56S644GZ44KLXG4gICAgc3RhdGljIGVycm9yQWN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIk9vcHMuLi5cIixcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICAgICAgICBmb290ZXI6IFwiXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyDkvY3nva7jgavov5HjgYTngrnjgpLlj5blvpfjgZnjgotcbiAgICBzdGF0aWMgZmluZFBvaW50QXQoeCwgeSwgdmVydGljZXMsIGVkZ2VzKSB7XG4gICAgICAgIC8vIOmggueCueOCkuaknOe0olxuICAgICAgICBsZXQgcG9pbnQgPSBVdGlscy5maW5kVmVydGV4QXQoeCwgeSwgdmVydGljZXMpO1xuICAgICAgICAvLyDopovjgaTjgYvjgonjgarjgYTloLTlkIhcbiAgICAgICAgaWYgKHBvaW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIOWItuW+oeeCueOCkuaknOe0olxuICAgICAgICAgICAgcG9pbnQgPSBVdGlscy5maW5kQ29udHJvbEF0KHgsIHksIGVkZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuICAgIC8vIOS9jee9ruOBq+i/keOBhOmggueCueOCkuWPluW+l+OBmeOCi1xuICAgIHN0YXRpYyBmaW5kVmVydGV4QXQoeCwgeSwgdmVydGljZXMpIHtcbiAgICAgICAgY29uc3QgZm91bmRWZXJ0ZXggPSB2ZXJ0aWNlcy5maW5kKCh2ZXJ0ZXgpID0+IHZlcnRleC5pc05lYXIoeCwgeSkpO1xuICAgICAgICByZXR1cm4gZm91bmRWZXJ0ZXggPyBmb3VuZFZlcnRleCA6IG51bGw7XG4gICAgfVxuICAgIC8vIOS9jee9ruOBq+i/keOBhOWItuW+oeeCueOCkuWPluW+l+OBmeOCi1xuICAgIHN0YXRpYyBmaW5kQ29udHJvbEF0KHgsIHksIGVkZ2VzKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kQ29udHJvbCA9IGVkZ2VzLmZpbmQoKGVkZ2UpID0+IGVkZ2UuY29udHJvbC5pc05lYXIoeCwgeSkpO1xuICAgICAgICByZXR1cm4gZm91bmRDb250cm9sID8gZm91bmRDb250cm9sLmNvbnRyb2wgOiBudWxsO1xuICAgIH1cbiAgICAvLyDkvY3nva7jgavov5HjgYTovrrjgpLlj5blvpfjgZnjgotcbiAgICBzdGF0aWMgZmluZEVkZ2VBdCh4LCB5LCBlZGdlcykge1xuICAgICAgICBjb25zdCBmb3VuZEVkZ2UgPSBlZGdlcy5maW5kKChlZGdlKSA9PiBlZGdlLmlzTmVhcih4LCB5KSk7XG4gICAgICAgIHJldHVybiBmb3VuZEVkZ2UgPyBmb3VuZEVkZ2UgOiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVkZ2UgfSBmcm9tIFwiLi4vb2JqZWN0L0VkZ2VcIjtcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gXCIuLi9vYmplY3QvVmVydGV4XCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDpmqPmjqXooYzliJfjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBBZGphY2VuY3lNYXRyaXgge1xuICAgIC8vIOmao+aOpeihjOWIl1xuICAgIG1hdHJpeCA9IG51bGw7XG4gICAgLy8gazMsM+aOoue0oue1kOaenFxuICAgIHJlc3VsdEszMyA9IG51bGw7XG4gICAgLy8gazXmjqLntKLntZDmnpxcbiAgICByZXN1bHRLNSA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoYXJnMSwgYXJnMikge1xuICAgICAgICBpZiAoYXJnMSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTnVsbCBhcmd1bWVudCBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnMSkgJiYgYXJnMS5ldmVyeSgoaXRlbSkgPT4gdHlwZW9mIGl0ZW0gPT09IFwibnVtYmVyXCIpICYmIGFyZzIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5tYXRyaXggPSB0aGlzLmdlbmVyYXRlTWF0cml4KGFyZzEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnMSkgJiYgYXJnMS5ldmVyeSgoaXRlbSkgPT4gaXRlbSBpbnN0YW5jZW9mIFZlcnRleCkgJiYgQXJyYXkuaXNBcnJheShhcmcyKSAmJiBhcmcyLmV2ZXJ5KChpdGVtKSA9PiBpdGVtIGluc3RhbmNlb2YgRWRnZSkpIHtcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gdGhpcy5jb252ZXJ0TWF0cml4KGFyZzEsIGFyZzIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBLMywzXG4gICAgICAgIHRoaXMucmVzdWx0SzMzID0gdGhpcy5zZWFyY2hLMzMoKTtcbiAgICAgICAgLy8gSzVcbiAgICAgICAgdGhpcy5yZXN1bHRLNSA9IHRoaXMuc2VhcmNoSzUoKTtcbiAgICB9XG4gICAgLy8g6Zqj5o6l6KGM5YiX44KS5Y+W5b6X44GZ44KLXG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gICAgfVxuICAgIC8vIEszM+OBruaOoue0oue1kOaenOOCkuWPluW+l+OBmeOCi1xuICAgIGdldFJlc3VsdEszMygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0SzMzO1xuICAgIH1cbiAgICAvLyBLNeOBruaOoue0oue1kOaenOOCkuWPluW+l+OBmeOCi1xuICAgIGdldFJlc3VsdEs1KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRLNTtcbiAgICB9XG4gICAgLy8g5o+P55S75Y+v6IO95YyW44GLXG4gICAgaXNHcmFwaGljYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeCAhPT0gbnVsbDtcbiAgICB9XG4gICAgLy8gSzMz44GM5a2Y5Zyo44GZ44KL44GLXG4gICAgaGFzSzMzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXggIT09IG51bGwgJiYgdGhpcy5yZXN1bHRLMzMgIT09IG51bGw7XG4gICAgfVxuICAgIC8vIEs144GM5a2Y5Zyo44GZ44KL44GLXG4gICAgaGFzSzUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeCAhPT0gbnVsbCAmJiB0aGlzLnJlc3VsdEs1ICE9PSBudWxsO1xuICAgIH1cbiAgICAvLyDlubPpnaLjgrDjg6njg5XjgYtcbiAgICBpc1BsYW5hckdyYXBoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXggIT09IG51bGwgJiYgdGhpcy5yZXN1bHRLMzMgPT09IG51bGwgJiYgdGhpcy5yZXN1bHRLNSA9PT0gbnVsbDtcbiAgICB9XG4gICAgLy8g6aCC54K544Kq44OW44K444Kn44Kv44OI6YWN5YiX44GL44KJ44CB6Zqj5o6l6KGM5YiX44Gr5aSJ5o+bXG4gICAgY29udmVydE1hdHJpeCh2ZXJ0aWNlcywgZWRnZXMpIHtcbiAgICAgICAgLy8g6aCC54K544Gu5pWw44Gr5Z+644Gl44GE44Gm44CB5Yid5pyf5YCk44GMMOOBrumao+aOpeihjOWIl+OCkueUn+aIkFxuICAgICAgICBjb25zdCBhZGphY2VuY3lNYXRyaXggPSB2ZXJ0aWNlcy5tYXAoKCkgPT4gQXJyYXkodmVydGljZXMubGVuZ3RoKS5maWxsKDApKTtcbiAgICAgICAgLy8g5YWo44Gm44Gu6L6644Gr5a++44GX44Gm5Yem55CG44KS5a6f6KGMXG4gICAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSB2ZXJ0aWNlcy5pbmRleE9mKGVkZ2UudG8pO1xuICAgICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gdmVydGljZXMuaW5kZXhPZihlZGdlLmZyb20pO1xuICAgICAgICAgICAgLy8g54Sh5ZCR44Kw44Op44OV44Gu5aC05ZCI44CB5a++56ew5oCn44KS5L+d44Gk44Gf44KB44Gr5Lih5pa55ZCR44GrMeOCkuioreWumlxuICAgICAgICAgICAgYWRqYWNlbmN5TWF0cml4W2Zyb21JbmRleF1bdG9JbmRleF0gPSAxO1xuICAgICAgICAgICAgYWRqYWNlbmN5TWF0cml4W3RvSW5kZXhdW2Zyb21JbmRleF0gPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFkamFjZW5jeU1hdHJpeDtcbiAgICB9XG4gICAgLy8g5qyh5pWw6YWN5YiX44GL44KJ44CB6Zqj5o6l6KGM5YiX44KS55Sf5oiQ44GZ44KLXG4gICAgLy8g44OP44OZ44Or44O744OP44Kt44Of44Gu5a6a55CG44KS5Y+C6ICD44Gr44GX44Gf44GM44CB5byV5pWw44Gu5qyh5pWw6YWN5YiX6aCG44Gn5a6f6KGM44GZ44KLXG4gICAgLy8g44GT44KM44Gr44KI44KK44CB5qyh5pWw6YWN5YiX44Gu6aCG5bqP44GM55Ww44Gq44KL44Go57WQ5p6c44KC55Ww44Gq44KLXG4gICAgZ2VuZXJhdGVNYXRyaXgoZGVncmVlU2VxdWVuY2UpIHtcbiAgICAgICAgLy8g6Zqj5o6l6KGM5YiX44Gu5Yid5pyf5YyWOiDlhajjgabjga7opoHntKDjgpIw44Gn5Z+L44KB44GfbiB4IG7jga7ooYzliJfjgpLkvZzmiJBcbiAgICAgICAgY29uc3QgbiA9IGRlZ3JlZVNlcXVlbmNlLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gZGVncmVlU2VxdWVuY2UubWFwKCgpID0+IG5ldyBBcnJheShuKS5maWxsKDApKTtcbiAgICAgICAgLy8g5q6L5qyh5pWw44KS5qC857SN44GZ44KL6YWN5YiXXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0RlZ3JlZXMgPSBbLi4uZGVncmVlU2VxdWVuY2VdO1xuICAgICAgICAvLyDpoILngrnjgqTjg7Pjg4fjg4Pjgq/jgrnphY3liJfjgpLnlJ/miJBcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBuIH0sIChfLCBpbmRleCkgPT4gaW5kZXgpO1xuICAgICAgICAvLyDlkITpoILngrnjgavlr77jgZfjgabmjqXntprjgZfjgabjgYTjgY9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZW1haW5pbmdEZWdyZWVzW2ldID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaui+OCiuasoeaVsOOBjOacgOWkp+OBp+OBi+OBpOOCpOODs+ODh+ODg+OCr+OCueOBjOWwj+OBleOBhOmghuOBq+aOpee2muWvvuixoeOCkuOCveODvOODiFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0RlZ3JlZXNbYV0gPT09IHJlbWFpbmluZ0RlZ3JlZXNbYl0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1haW5pbmdEZWdyZWVzW2JdIC0gcmVtYWluaW5nRGVncmVlc1thXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0ZW1wdHMgPSByZW1haW5pbmdEZWdyZWVzW2ldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwLCBrID0gMDsgayA8IGF0dGVtcHRzICYmIGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ubkluZGV4ID0gY29ubmVjdGlvbnNbal07XG4gICAgICAgICAgICAgICAgICAgIC8vIOiHquWIhuiHqui6q+OCkumZpOOBj+OAgeaui+OCiuasoeaVsOOBjOato+OBrumggueCueOBqOaOpee2mlxuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gY29ubkluZGV4ICYmIHJlbWFpbmluZ0RlZ3JlZXNbY29ubkluZGV4XSA+IDAgJiYgbWF0cml4W2ldW2Nvbm5JbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtjb25uSW5kZXhdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFtjb25uSW5kZXhdW2ldID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXNbY29ubkluZGV4XS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRGVncmVlc1tpXS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOaOpee2muWvvuixoeOBjOi2s+OCiuOBquOBhOWgtOWQiOOBr+Wun+ePvuS4jeWPr+iDvVxuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdEZWdyZWVzW2ldID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ44GV44KM44Gf6Zqj5o6l6KGM5YiX44KS6L+U44GZXG4gICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgfVxuICAgIC8vIEszLDPjgpLmjqLntKLjgZfjgabjgIHlrZjlnKjjgZnjgovloLTlkIjjga/jgIFLMywz44KS5qeL5oiQ44GZ44KLaW5kZXjphY3liJfjgpLlj5blvpfjgZnjgotcbiAgICBzZWFyY2hLMzMoKSB7XG4gICAgICAgIC8vIOmao+aOpeihjOWIl+WMluOBp+OBjeOBpuOBquOBhOWgtOWQiOOBr+OAgeWIpOWumuWvvuixoeWkllxuICAgICAgICBpZiAoIXRoaXMubWF0cml4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpoILngrnmlbDvvJbmnKrmuoDjga/jgIHliKTlrprlr77osaHlpJZcbiAgICAgICAgY29uc3QgbiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICAgICAgaWYgKG4gPCA2KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpmqPmjqXooYzliJfjgpJiaWdpbnTjga7jg5Pjg4Pjg4jjg57jgrnjgq/jgajjgZfjgabooajnj77jgZnjgotcbiAgICAgICAgY29uc3QgYWRqYWNlbmN5TWFza3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtYXNrID0gMG47XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIC8vIOaOpee2muaDheWgseOBq+OAgeODk+ODg+ODiOOCkueri+OBpuOCi1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeFtpXVtqXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrIHw9IDFuIDw8IEJpZ0ludChqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGphY2VuY3lNYXNrcy5wdXNoKG1hc2spO1xuICAgICAgICB9XG4gICAgICAgIC8vIOODkOODg+OCr+ODiOODqeODg+OCreODs+OCsOazleOBq+OCiOOCiyBLMywzIOaOoue0olxuICAgICAgICBjb25zdCBmaXJzdEdyb3VwID0gdGhpcy5iYWNrdHJhY2soYWRqYWNlbmN5TWFza3MsIG4sIDMpO1xuICAgICAgICBpZiAoZmlyc3RHcm91cCkge1xuICAgICAgICAgICAgLy8g56ys5LqM44Kw44Or44O844OX44Gu55Sf5oiQXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRJbnRlcnNlY3Rpb24gPSBhZGphY2VuY3lNYXNrc1tmaXJzdEdyb3VwWzBdXSAmIGFkamFjZW5jeU1hc2tzW2ZpcnN0R3JvdXBbMV1dICYgYWRqYWNlbmN5TWFza3NbZmlyc3RHcm91cFsyXV07XG4gICAgICAgICAgICByZXR1cm4gW2ZpcnN0R3JvdXAsIHRoaXMuZ2V0SW5kaWNlc0Zyb21CaWdJbnQoc2Vjb25kSW50ZXJzZWN0aW9uKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBLNeOCkuaOoue0ouOBl+OBpuOAgeWtmOWcqOOBmeOCi+WgtOWQiOOBr+OAgUs144KS5qeL5oiQ44GZ44KLaW5kZXjphY3liJfjgpLlj5blvpfjgZnjgotcbiAgICBzZWFyY2hLNSgpIHtcbiAgICAgICAgLy8g6Zqj5o6l6KGM5YiX5YyW44Gn44GN44Gm44Gq44GE5aC05ZCI44Gv44CB5Yik5a6a5a++6LGh5aSWXG4gICAgICAgIGlmICghdGhpcy5tYXRyaXgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmggueCueaVsO+8leacqua6gOOBr+OAgeWIpOWumuWvvuixoeWkllxuICAgICAgICBjb25zdCBuID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xuICAgICAgICBpZiAobiA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmao+aOpeihjOWIl+OCkmJpZ2ludOOBruODk+ODg+ODiOODnuOCueOCr+OBqOOBl+OBpuihqOePvuOBmeOCi1xuICAgICAgICBjb25zdCBhZGphY2VuY3lNYXNrcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgbGV0IG1hc2sgPSAwbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8g5o6l57aa5oOF5aCx44Go44CB5a++6KeS5oiQ5YiG44Gr44CB44OT44OD44OI44KS56uL44Gm44KLXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0cml4W2ldW2pdIHx8IGkgPT09IGopIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzayB8PSAxbiA8PCBCaWdJbnQoaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRqYWNlbmN5TWFza3MucHVzaChtYXNrKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg5Djg4Pjgq/jg4jjg6njg4Pjgq3jg7PjgrDjgavjgojjgosgSzUg5o6i57SiXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2t0cmFjayhhZGphY2VuY3lNYXNrcywgbiwgNSk7XG4gICAgfVxuICAgIC8vIOODkOODg+OCr+ODiOODqeODg+OCreODs+OCsOaOoue0ou+8iOWGjeW4sOmWouaVsO+8iVxuICAgIGJhY2t0cmFjayhhZGphY2VuY3lNYXNrcywgdG90YWxOdW0sIHNlbGVjdE51bSwgc3RhcnQgPSAwLCBjb3VudCA9IDAsIHNlbGVjdGVkID0gW10pIHtcbiAgICAgICAgLy8g5o6i57Si57WQ5p6c44GM6KaL44Gk44GL44Gj44GfXG4gICAgICAgIGlmIChjb3VudCA9PT0gc2VsZWN0TnVtKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQubWFwKChpbmZvKSA9PiBpbmZvLmluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmjqLntKLjgZnjgotcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgdG90YWxOdW07IGkrKykge1xuICAgICAgICAgICAgLy8g5q6L44KK44Gu5o6i57Si5pWw44GM5LiN6Laz44GZ44KL5aC05ZCI44Gv44CB5o6i57Si5LiN6KaBXG4gICAgICAgICAgICBpZiAoY291bnQgKyB0b3RhbE51bSAtIGkgPCBzZWxlY3ROdW0pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOirlueQhuepjeeul+WHulxuICAgICAgICAgICAgY29uc3QgbmV3SW50ZXJzZWN0aW9uID0gY291bnQgPT09IDAgPyBhZGphY2VuY3lNYXNrc1tpXSA6IHNlbGVjdGVkW2NvdW50IC0gMV0uaW50ZXJzZWN0aW9uICYgYWRqYWNlbmN5TWFza3NbaV07XG4gICAgICAgICAgICAvLyDoq5bnkIbnqY3jga7jg5Pjg4Pjg4jmlbDjgYzmjIflrprmlbDmnKrmuoDjga/mrKHjga5pbmRleOOBuFxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SW5kaWNlc0Zyb21CaWdJbnQobmV3SW50ZXJzZWN0aW9uKS5sZW5ndGggPj0gc2VsZWN0TnVtKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh7IGluZGV4OiBpLCBpbnRlcnNlY3Rpb246IG5ld0ludGVyc2VjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAvLyDmjqLntKLmt7HluqbjgpLlopfjgoTjgZlcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmJhY2t0cmFjayhhZGphY2VuY3lNYXNrcywgdG90YWxOdW0sIHNlbGVjdE51bSwgaSArIDEsIGNvdW50ICsgMSwgc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIC8vIOaOoue0oueKtuaFi+OCkuaIu+OBmVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnBvcCgpO1xuICAgICAgICAgICAgICAgIC8v44CA57WQ5p6c44GM44GC44KM44Gw5ZG844Gz5Ye644GX44KC44Go44G46L+U5Y20XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8g44OT44OD44OI44Oe44K544Kv44Gn44OT44OD44OI44Kk44Oz44OH44OD44Kv44K544Gu6YWN5YiX44KS5Y+W5b6X44GZ44KLXG4gICAgZ2V0SW5kaWNlc0Zyb21CaWdJbnQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAodmFsdWUgPiAwbikge1xuICAgICAgICAgICAgaWYgKHZhbHVlICYgMW4pIHtcbiAgICAgICAgICAgICAgICBpbmRpY2VzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPj49IDFuO1xuICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kaWNlcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBZGphY2VuY3lNYXRyaXggfSBmcm9tIFwiLi9BZGphY2VuY3lNYXRyaXhcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOWIl+aMmeS9k1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IHZhciBEZWdyZWVTZXFFbnVtO1xuKGZ1bmN0aW9uIChEZWdyZWVTZXFFbnVtKSB7XG4gICAgRGVncmVlU2VxRW51bVtcIkFycmF5XCJdID0gXCJcXHU2QjIxXFx1NjU3MFxcdTkxNERcXHU1MjE3XCI7XG4gICAgRGVncmVlU2VxRW51bVtcIlJ1bkxlbmd0aFwiXSA9IFwiXFx1MzBFOVxcdTMwRjNcXHUzMEVDXFx1MzBGM1xcdTMwQjBcXHUzMEI5XFx1NTcyN1xcdTdFMkVcIjtcbn0pKERlZ3JlZVNlcUVudW0gfHwgKERlZ3JlZVNlcUVudW0gPSB7fSkpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g5qyh5pWw6YWN5YiX44Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgRGVncmVlU2VxdWVuY2Uge1xuICAgIC8vIOasoeaVsOmFjeWIl1xuICAgIHNlcXVlbmNlO1xuICAgIC8vIOmao+aOpeihjOWIl1xuICAgIGFkamFjZW5jeU1hdHJpeCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSBbXTtcbiAgICB9XG4gICAgLy8g5qyh5pWw6YWN5YiX44Go44GX44Gm5pyJ5Yq544GLXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgLy8g5pyA5aSn5qyh5pWw44Gv6aCC54K55pWw44KI44KK5bCP44GV44GEXG4gICAgICAgIGNvbnN0IG1heERlZ3JlZSA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2UpO1xuICAgICAgICBpZiAoIShtYXhEZWdyZWUgPCB0aGlzLnZlcnRleENvdW50KCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5qyh5pWw5ZCI6KiI44GM5YG25pWw44Gn44GC44KLXG4gICAgICAgIGlmICghKHRoaXMudG90YWxEZWdyZWUoKSAlIDIgPT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8g6aCC54K544Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgdmVydGV4Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcXVlbmNlLmxlbmd0aDtcbiAgICB9XG4gICAgLy8g6L6644Gu5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgZWRnZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnRvdGFsRGVncmVlKCkgLyAyKTtcbiAgICB9XG4gICAgLy8g5qyh5pWw5ZCI6KiI44KS5Y+W5b6X44GZ44KLXG4gICAgdG90YWxEZWdyZWUoKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcXVlbmNlLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgKyBjdXJyZW50VmFsdWUsIGluaXRpYWxWYWx1ZSk7XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+W9ouW8j+OBruaWh+Wtl+WIl+WPluW+l1xuICAgIGdldEFycmF5U3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZS5qb2luKFwiLCBcIik7XG4gICAgfVxuICAgIC8vIOODqeODs+ODrOODs+OCsOOCueWcp+e4ruW9ouW8j+OBruaWh+Wtl+WIl+WPluW+l1xuICAgIGdldFJ1bkxlbmd0aFN0cmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VxdWVuY2UubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnNlcXVlbmNlWzBdO1xuICAgICAgICBsZXQgY291bnQgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcXVlbmNlW2ldID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2N1cnJlbnR9KiR7Y291bnR9YCk7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuc2VxdWVuY2VbaV07XG4gICAgICAgICAgICAgICAgY291bnQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOacgOW+jOOBruimgee0oOOCkui/veWKoFxuICAgICAgICByZXN1bHQucHVzaChgJHtjdXJyZW50fSoke2NvdW50fWApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgLy8g6aCC54K544Kq44OW44K444Kn44Kv44OI6YWN5YiX44GL44KJ44CB5qyh5pWw6YWN5YiX44Gr44K744OD44OI44GZ44KLXG4gICAgc2V0VmVydGljZXModmVydGljZXMsIGVkZ2VzKSB7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmdldERlZ3JlZSgpKTtcbiAgICAgICAgLy8g6Zqj5o6l6KGM5YiXXG4gICAgICAgIHRoaXMuYWRqYWNlbmN5TWF0cml4ID0gbmV3IEFkamFjZW5jeU1hdHJpeCh2ZXJ0aWNlcywgZWRnZXMpO1xuICAgIH1cbiAgICAvLyDlhaXlipvmloflrZfjgYvjgonjgIHmrKHmlbDphY3liJfjgavjgrvjg4Pjg4jjgZnjgotcbiAgICBzZXRWYWx1ZShkZWdyZWVNb2RlLCB2YWx1ZSkge1xuICAgICAgICBsZXQgY2xlYW5lZFZhbHVlID0gdmFsdWVcbiAgICAgICAgICAgIC8vIOmAo+e2muOBmeOCi+OCq+ODs+ODnuOChOOCouOCueOCv+ODquOCueOCr+OCkuS4gOOBpOOBq+OBmeOCi1xuICAgICAgICAgICAgLnJlcGxhY2UoLyhbLCpdKVxcMSsvZywgXCIkMVwiKVxuICAgICAgICAgICAgLy8g5pyA5b6M44Gu44Kr44Oz44Oe44KE44Ki44K544K/44Oq44K544Kv44KS5YmK6ZmkXG4gICAgICAgICAgICAucmVwbGFjZSgvWywqXSQvLCBcIlwiKTtcbiAgICAgICAgLy8g5paH5a2X5YiX44KS44CB5qyh5pWw6YWN5YiX44Gr5aSJ5o+bXG4gICAgICAgIHN3aXRjaCAoZGVncmVlTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBEZWdyZWVTZXFFbnVtLkFycmF5OlxuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2UgPSB0aGlzLmNvbnZlcnRBcnJheVN0cmluZ1RvRGVncmVlcyhjbGVhbmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEZWdyZWVTZXFFbnVtLlJ1bkxlbmd0aDpcbiAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5jb252ZXJ0UnVuTGVuZ3RoU3RyaW5nVG9EZWdyZWVzKGNsZWFuZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh5pWw6YWN5YiX44GL44KJ6Zqj5o6l6KGM5YiX44KS55Sf5oiQ44GZ44KLXG4gICAgZ2VuZXJhdGVBZGphY2VuY3lNYXRyaXgoKSB7XG4gICAgICAgIC8vIOmao+aOpeihjOWIl1xuICAgICAgICB0aGlzLmFkamFjZW5jeU1hdHJpeCA9IG5ldyBBZGphY2VuY3lNYXRyaXgodGhpcy5zZXF1ZW5jZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkamFjZW5jeU1hdHJpeDtcbiAgICB9XG4gICAgZ2V0QWRqYWNlbmN5TWF0cml4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGphY2VuY3lNYXRyaXg7XG4gICAgfVxuICAgIC8vIOODqeODs+ODrOODs+OCsOOCueWcp+e4ruW9ouW8j+OBruaWh+Wtl+WIl+OBi+OCieOAgeasoeaVsOmFjeWIl+OBq+WkieaPm1xuICAgIGNvbnZlcnRSdW5MZW5ndGhTdHJpbmdUb0RlZ3JlZXMoaW5wdXQpIHtcbiAgICAgICAgaWYgKCFpbnB1dClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnNwbGl0KFwiLFwiKS5yZWR1Y2UoKGFjYywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCBjb3VudF0gPSBwYXJ0LnNwbGl0KFwiKlwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgICAgIC8vIOaVsOOBjCAwIOOBp+OBquOBhOWgtOWQiOOBruOBv+i/veWKoFxuICAgICAgICAgICAgaWYgKGNvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+W9ouW8j+OBruaWh+Wtl+WIl+OBi+OCieOAgeasoeaVsOmFjeWIl+OBq+WkieaPm1xuICAgIGNvbnZlcnRBcnJheVN0cmluZ1RvRGVncmVlcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXRcbiAgICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFwiXCIpXG4gICAgICAgICAgICAubWFwKE51bWJlcik7XG4gICAgfVxufVxuIiwiLy8gR3JhcGhJTy50c1xuaW1wb3J0IHsgRWRnZSB9IGZyb20gXCIuLi9vYmplY3QvRWRnZVwiO1xuaW1wb3J0IHsgVmVydGV4IH0gZnJvbSBcIi4uL29iamVjdC9WZXJ0ZXhcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOOCsOODqeODleS/neWtmOiqrei+vOOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIEdyYXBoSU8ge1xuICAgIGdyYXBoTWFuYWdlcjtcbiAgICBjb25zdHJ1Y3RvcihncmFwaE1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIgPSBncmFwaE1hbmFnZXI7XG4gICAgfVxuICAgIC8vIOOCsOODqeODleOBrueKtuaFi+OCkkpTT07jgajjgZfjgabkv53lrZhcbiAgICBzYXZlVG9Kc29uKCkge1xuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IHtcbiAgICAgICAgICAgIHZlcnRpY2VzOiB0aGlzLmdyYXBoTWFuYWdlci52ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIHg6IHZlcnRleC54LFxuICAgICAgICAgICAgICAgIHk6IHZlcnRleC55LFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgZWRnZXM6IHRoaXMuZ3JhcGhNYW5hZ2VyLmVkZ2VzLm1hcCgoZWRnZSkgPT4gKHtcbiAgICAgICAgICAgICAgICBmcm9tOiB0aGlzLmdyYXBoTWFuYWdlci52ZXJ0aWNlcy5pbmRleE9mKGVkZ2UuZnJvbSksXG4gICAgICAgICAgICAgICAgdG86IHRoaXMuZ3JhcGhNYW5hZ2VyLnZlcnRpY2VzLmluZGV4T2YoZWRnZS50byksXG4gICAgICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICAgICAgICB4OiBlZGdlLmNvbnRyb2wueCxcbiAgICAgICAgICAgICAgICAgICAgeTogZWRnZS5jb250cm9sLnksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIG9yaWdpbjogeyB4OiB0aGlzLmdyYXBoTWFuYWdlci5vcmlnaW4ueCwgeTogdGhpcy5ncmFwaE1hbmFnZXIub3JpZ2luLnkgfSxcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLmdyYXBoTWFuYWdlci5zY2FsZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNhdmVEYXRhKTtcbiAgICB9XG4gICAgLy8gSlNPTuOBi+OCieOCsOODqeODleOBrueKtuaFi+OCkuODreODvOODiVxuICAgIGxvYWRGcm9tSnNvbihqc29uU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxvYWREYXRhID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudmVydGljZXMgPSBsb2FkRGF0YS52ZXJ0aWNlcy5tYXAoKHZEYXRhKSA9PiBuZXcgVmVydGV4KHZEYXRhLngsIHZEYXRhLnkpKTtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuZWRnZXMgPSBsb2FkRGF0YS5lZGdlcy5tYXAoKGVEYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcm9tVmVydGV4ID0gdGhpcy5ncmFwaE1hbmFnZXIudmVydGljZXNbZURhdGEuZnJvbV07XG4gICAgICAgICAgICBjb25zdCB0b1ZlcnRleCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLnZlcnRpY2VzW2VEYXRhLnRvXTtcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSBuZXcgRWRnZShmcm9tVmVydGV4LCB0b1ZlcnRleCk7XG4gICAgICAgICAgICBlZGdlLmNvbnRyb2wueCA9IGVEYXRhLmNvbnRyb2wueDtcbiAgICAgICAgICAgIGVkZ2UuY29udHJvbC55ID0gZURhdGEuY29udHJvbC55O1xuICAgICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5vcmlnaW4gPSBsb2FkRGF0YS5vcmlnaW47XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnNjYWxlID0gbG9hZERhdGEuc2NhbGU7XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmN1cnJlbnRab29tSW5kZXggPSB0aGlzLmdyYXBoTWFuYWdlci56b29tTGV2ZWxzLmluZGV4T2YobG9hZERhdGEuc2NhbGUpO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlRGVncmVlU2VxdWVuY2UodGhpcy5ncmFwaE1hbmFnZXIudmVydGljZXMsIHRoaXMuZ3JhcGhNYW5hZ2VyLmVkZ2VzKTtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuZHJhd0dyYXBoKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzLWZvcmNlXCI7XG5pbXBvcnQgeyBNb3VzZUJ1dHRvbkVudW0sIFV0aWxzIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gXCIuLi9vYmplY3QvQ29udHJvbFwiO1xuaW1wb3J0IHsgRWRnZSB9IGZyb20gXCIuLi9vYmplY3QvRWRnZVwiO1xuaW1wb3J0IHsgVmVydGV4IH0gZnJvbSBcIi4uL29iamVjdC9WZXJ0ZXhcIjtcbmltcG9ydCB7IERlZ3JlZVNlcXVlbmNlIH0gZnJvbSBcIi4vRGVncmVlU2VxdWVuY2VcIjtcbmltcG9ydCB7IEdyYXBoSU8gfSBmcm9tIFwiLi9HcmFwaElPXCI7XG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBIaXN0b3J5TWFuYWdlciB9IGZyb20gXCIuL0hpc3RvcnlNYW5hZ2VyXCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDliJfmjJnkvZNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOOCsOODqeODleODrOOCpOOCouOCpuODiOODouODvOODieOBruWIl+aMmeS9k1xuZXhwb3J0IHZhciBHcmFwaExheW91dEVudW07XG4oZnVuY3Rpb24gKEdyYXBoTGF5b3V0RW51bSkge1xuICAgIEdyYXBoTGF5b3V0RW51bVtcIkZvcmNlRGlyZWN0XCJdID0gXCJcXHU1MjlCXFx1NjMwN1xcdTU0MTFcIjtcbiAgICBHcmFwaExheW91dEVudW1bXCJGaXhlZFwiXSA9IFwiXFx1NTZGQVxcdTVCOUFcIjtcbn0pKEdyYXBoTGF5b3V0RW51bSB8fCAoR3JhcGhMYXlvdXRFbnVtID0ge30pKTtcbi8vIOi+uuOBruaPj+eUu+ODouODvOODieOBruWIl+aMmeS9k1xuZXhwb3J0IHZhciBFZGdlRHJhd2luZ0VudW07XG4oZnVuY3Rpb24gKEVkZ2VEcmF3aW5nRW51bSkge1xuICAgIEVkZ2VEcmF3aW5nRW51bVtcInN0cmFpZ2h0TGluZVwiXSA9IFwiXFx1NzZGNFxcdTdEREFcIjtcbiAgICBFZGdlRHJhd2luZ0VudW1bXCJiZXppZXJDdXJ2ZVwiXSA9IFwiXFx1MzBEQVxcdTMwQjhcXHUzMEE3XFx1NjZGMlxcdTdEREFcIjtcbn0pKEVkZ2VEcmF3aW5nRW51bSB8fCAoRWRnZURyYXdpbmdFbnVtID0ge30pKTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOOCsOODqeODleOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIEdyYXBoTWFuYWdlciB7XG4gICAgLy8g44Kt44Oj44Oz44OQ44K5XG4gICAgY2FudmFzO1xuICAgIE1BWF9DQU5WQVNfV0lEVEggPSAyMDAwMDtcbiAgICBNQVhfQ0FOVkFTX0hFSUdIVCA9IDEwMDAwO1xuICAgIGN0eDtcbiAgICAvLyDjgrDjg6rjg4Pjg4nooajnpLrnirbmhYtcbiAgICBzaG93R3JpZCA9IHRydWU7XG4gICAgLy8g44Kw44Op44OV44Os44Kk44Ki44Km44OI44Oi44O844OJXG4gICAgbGF5b3V0TW9kZSA9IEdyYXBoTGF5b3V0RW51bS5Gb3JjZURpcmVjdDtcbiAgICBlZGdlRHJhd2luZyA9IEVkZ2VEcmF3aW5nRW51bS5zdHJhaWdodExpbmU7XG4gICAgLy8g44Oe44Km44K55L2N572uXG4gICAgbW91c2UgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jnrqHnkIZcbiAgICB2ZXJ0aWNlcyA9IFtdO1xuICAgIGVkZ2VzID0gW107XG4gICAgZGVncmVlU2VxdWVuY2UgPSBuZXcgRGVncmVlU2VxdWVuY2UoKTtcbiAgICAvLyDlsaXmrbTnrqHnkIZcbiAgICBoaXN0b3J5TWFuYWdlciA9IG5ldyBIaXN0b3J5TWFuYWdlcigpO1xuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOaTjeS9nFxuICAgIHNlbGVjdGVkVmVydGljZXMgPSBbXTtcbiAgICBzZWxlY3RlZEVkZ2VzID0gW107XG4gICAgZHJhZ2dpbmdQb2ludCA9IG51bGw7XG4gICAgYWN0aXZlRWRnZSA9IG51bGw7XG4gICAgLy8g44K644O844Og5qmf6IO96Zai6YCjXG4gICAgb3JpZ2luID0geyB4OiAwLCB5OiAwIH07XG4gICAgc2NhbGUgPSAxO1xuICAgIHpvb21MZXZlbHMgPSBbMC4xLCAwLjIsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOSwgMS4wLCAxLjEsIDEuMiwgMS4zLCAxLjQsIDEuNSwgMS43NSwgMi4wLCAyLjUsIDMuMCwgMy41LCA0LjBdO1xuICAgIGN1cnJlbnRab29tSW5kZXggPSB0aGlzLnpvb21MZXZlbHMuaW5kZXhPZigxLjApO1xuICAgIC8vIOODkeODs+apn+iDvVxuICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBsYXN0UG9zID0geyB4OiAwLCB5OiAwIH07XG4gICAgLy8g44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gICAgdXBkYXRlRGVncmVlU2VxdWVuY2U7XG4gICAgdXBkYXRlSW5mbztcbiAgICAvLyDpoILngrnmg4XloLHooajnpLpcbiAgICBzaG93SW5kZXggPSB0cnVlO1xuICAgIHNob3dEZWdyZWUgPSBmYWxzZTtcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmk43kvZxcbiAgICBjYW5UcmFuc0Zvcm0gPSB0cnVlO1xuICAgIGNhbkFkZFJlbW92ZSA9IHRydWU7XG4gICAgLy8g5L+d5a2Y6Kqt6L685Yem55CGXG4gICAgZ3JhcGhJTztcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHVwZGF0ZURlZ3JlZVNlcXVlbmNlLCB1cGRhdGVJbmZvKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSA9IHVwZGF0ZURlZ3JlZVNlcXVlbmNlO1xuICAgICAgICB0aGlzLnVwZGF0ZUluZm8gPSB1cGRhdGVJbmZvO1xuICAgICAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhJTyA9IG5ldyBHcmFwaElPKHRoaXMpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g44Kk44OZ44Oz44OI5Yem55CGXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCpOODmeODs+ODiOeZu+mMslxuICAgIHNldHVwRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgdGhpcy5oYW5kbGVEb3VibGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHRoaXMuaGFuZGxlTW91c2VPdXQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHRoaXMuaGFuZGxlQ29udGV4dE1lbnUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLmhhbmRsZVdoZWVsLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUNhbnZhcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zZXRHcmFwaExheW91dCh0aGlzLmxheW91dE1vZGUpO1xuICAgIH1cbiAgICAvLyDjg4Djg5bjg6vjgq/jg6rjg4Pjgq9cbiAgICBoYW5kbGVEb3VibGVDbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbkFkZFJlbW92ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4QWN0aW9uKHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g44Oe44Km44K544Og44O844OWXG4gICAgaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgLy8g6aCC54K544GL5Yi25b6h54K544Gu56e75YuVXG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nUG9pbnQgJiYgdGhpcy5jYW5UcmFuc0Zvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludC54ID0gdGhpcy5tb3VzZS54O1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50LnkgPSB0aGlzLm1vdXNlLnk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcIm1vdmVcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7np7vli5VcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkeCA9IGUuY2xpZW50WCAtIHRoaXMubGFzdFBvcy54O1xuICAgICAgICAgICAgY29uc3QgZHkgPSBlLmNsaWVudFkgLSB0aGlzLmxhc3RQb3MueTtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnggKz0gZHg7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbi55ICs9IGR5O1xuICAgICAgICAgICAgLy8g56e75YuV5Yi26ZmQXG4gICAgICAgICAgICB0aGlzLmxpbWl0Q2FudmFzUGFuKCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3MueCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcy55ID0gZS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmggueCuemBuOaKnua4iOOBv+OBruWgtOWQiFxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVmVydGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNhblRyYW5zRm9ybSkge1xuICAgICAgICAgICAgLy8g6L6644Gu6L+R44GP44Gu5aC05ZCIXG4gICAgICAgICAgICBjb25zdCBlZGdlID0gVXRpbHMuZmluZEVkZ2VBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy5lZGdlcyk7XG4gICAgICAgICAgICBlZGdlICYmICh0aGlzLmFjdGl2ZUVkZ2UgPSBlZGdlKTtcbiAgICAgICAgICAgIC8vIOmggueCueOBi+WItuW+oeeCueOBrui/keOBj+OBruWgtOWQiFxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBVdGlscy5maW5kUG9pbnRBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy52ZXJ0aWNlcywgdGhpcy5lZGdlcyk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBwb2ludCA/IFwibW92ZVwiIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8g44Oe44Km44K544Ki44Km44OIXG4gICAgaGFuZGxlTW91c2VPdXQoZSkge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZVVwKGUpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjg4Djgqbjg7NcbiAgICBoYW5kbGVNb3VzZURvd24oZSkge1xuICAgICAgICAvLyDlt6bjgq/jg6rjg4Pjgq/ku6XlpJbjga/lh6bnkIbjgarjgZdcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSBNb3VzZUJ1dHRvbkVudW0uTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNoaWZ044Kt44O844GM5oq844GV44KM44Gm44GE44KL5aC05ZCI44CB6YG45oqe44KS44OI44Kw44Or44GZ44KLXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZS5zaGlmdEtleTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gVXRpbHMuZmluZFZlcnRleEF0KHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55LCB0aGlzLnZlcnRpY2VzKTtcbiAgICAgICAgY29uc3QgZWRnZSA9IFV0aWxzLmZpbmRFZGdlQXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMuZWRnZXMpO1xuICAgICAgICBjb25zdCBjb250cm9sID0gVXRpbHMuZmluZENvbnRyb2xBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy5lZGdlcyk7XG4gICAgICAgIC8vIOWIpOWumuOBruOBn+OCgeS4gOaZgumAgOmBv1xuICAgICAgICBjb25zdCB0ZW1wU2VsZWN0ZWRWZXJ0aWNlcyA9IHRoaXMuc2VsZWN0ZWRWZXJ0aWNlcztcbiAgICAgICAgLy8g6YG45oqe54q25oWL44Gu5Yid5pyf5YyWXG4gICAgICAgIGlmICghc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yi25b6h54K544Gu5aC05ZCI77yI44Oa44K444Kn5puy57ea44Gu5aC05ZCI44CB6YG45oqe5Y+v6IO977yJXG4gICAgICAgIGlmIChjb250cm9sICYmIHRoaXMuZWRnZURyYXdpbmcgPT09IEVkZ2VEcmF3aW5nRW51bS5iZXppZXJDdXJ2ZSkge1xuICAgICAgICAgICAgLy8g44OJ44Op44OD44Kw6ZaL5aeLXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUG9pbnQgPSBjb250cm9sO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmggueCueOBruWgtOWQiFxuICAgICAgICBlbHNlIGlmICh2ZXJ0ZXgpIHtcbiAgICAgICAgICAgIGlmICghc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxlY3RlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRWZXJ0aWNlcy5pbmNsdWRlcyh2ZXJ0ZXgpKSB7XG4gICAgICAgICAgICAgICAgdmVydGV4LmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmVydGljZXMgPSB0aGlzLnNlbGVjdGVkVmVydGljZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSB2ZXJ0ZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g6aCC54K544KS6YG45oqe5riI44G/44Gr44GZ44KLXG4gICAgICAgICAgICAgICAgdmVydGV4LmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVtcFNlbGVjdGVkVmVydGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIOmBuOaKnua4iOOBv+mggueCueOBqOOAgeeVsOOBquOCi+mggueCueOBjOWPluW+l+OBp+OBjeOBn+WgtOWQiFxuICAgICAgICAgICAgICAgIGlmICghdGVtcFNlbGVjdGVkVmVydGljZXMuaW5jbHVkZXModmVydGV4KSAmJiB0aGlzLmNhbkFkZFJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVkZ2VBY3Rpb24odGVtcFNlbGVjdGVkVmVydGljZXMsIHZlcnRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g44Kr44O844K944Or44KS6YG45oqe55So44Gr5aSJ5pu0XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgICAgICAgLy8g44OJ44Op44OD44Kw6ZaL5aeLXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUG9pbnQgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L6644Gu5aC05ZCIXG4gICAgICAgIGVsc2UgaWYgKGVkZ2UpIHtcbiAgICAgICAgICAgIGlmICghc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxlY3RlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFZGdlcy5pbmNsdWRlcyhlZGdlKSkge1xuICAgICAgICAgICAgICAgIGVkZ2UuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlcyA9IHRoaXMuc2VsZWN0ZWRFZGdlcy5maWx0ZXIoKGUpID0+IGUgIT09IGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g6L6644KS6YG45oqe5riI44G/44Gr44GZ44KLXG4gICAgICAgICAgICAgICAgZWRnZS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7pgbjmip5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0UG9zLnggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3MueSA9IGUuY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjgqLjg4Pjg5dcbiAgICBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdQb2ludCBpbnN0YW5jZW9mIENvbnRyb2wpIHtcbiAgICAgICAgICAgIC8vIOODkOOCpuODs+ODh+OCo+ODs+OCsOODnOODg+OCr+OCueOBruWGjeeul+WHulxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDlj7Pjgq/jg6rjg4Pjgq9cbiAgICBoYW5kbGVDb250ZXh0TWVudShlKSB7XG4gICAgICAgIC8vIOOCs+ODs+ODhuOCreOCueODiOODoeODi+ODpeODvOOCkuihqOekuuOBleOBm+OBquOBhFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIOmBuOaKnueKtuaFi+OBruWIneacn+WMllxuICAgICAgICB0aGlzLmluaXRTZWxlY3RlZCgpO1xuICAgICAgICAvLyDov73liqDliYrpmaTjgafjgY3jgarjgYTloLTlkIjjga/jgIHlh6bnkIbntYLkuoZcbiAgICAgICAgaWYgKCF0aGlzLmNhbkFkZFJlbW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91c2UgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IFV0aWxzLmZpbmRWZXJ0ZXhBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy52ZXJ0aWNlcyk7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBVdGlscy5maW5kRWRnZUF0KHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55LCB0aGlzLmVkZ2VzKTtcbiAgICAgICAgLy8g5YmK6Zmk5Yem55CGXG4gICAgICAgIGlmICh2ZXJ0ZXgpIHtcbiAgICAgICAgICAgIC8vIOmggueCueOCkuWJiumZpFxuICAgICAgICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhBY3Rpb24odmVydGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlZGdlKSB7XG4gICAgICAgICAgICAvLyDovrrjgpLliYrpmaRcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRWRnZUFjdGlvbihlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjg5vjgqTjg7zjg6tcbiAgICBoYW5kbGVXaGVlbChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgLy8g44K644O844Og44Os44OZ44Or44Gu5pu05pawXG4gICAgICAgIGlmIChlLmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAgIC8vIOOCuuODvOODoOOCpOODs1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Wm9vbUluZGV4ID0gTWF0aC5taW4odGhpcy5jdXJyZW50Wm9vbUluZGV4ICsgMSwgdGhpcy56b29tTGV2ZWxzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g44K644O844Og44Ki44Km44OIXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRab29tSW5kZXggPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRab29tSW5kZXggLSAxLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmlrDjgZfjgYTjgrnjgrHjg7zjg6vjgpLlj5blvpfjgZfjgIHjgrnjgrHjg7zjg6vjgYzlpInmm7TjgZXjgozjgZ/jgYvnorroqo1cbiAgICAgICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLnpvb21MZXZlbHNbdGhpcy5jdXJyZW50Wm9vbUluZGV4XTtcbiAgICAgICAgaWYgKG5ld1NjYWxlICE9PSB0aGlzLnNjYWxlKSB7XG4gICAgICAgICAgICAvLyDjg57jgqbjgrnkvY3nva7jgpLjgrrjg7zjg6DjgqTjg7PjgIHjgrrjg7zjg6DjgqLjgqbjg4jjgZnjgotcbiAgICAgICAgICAgIC8vIHNjYWxl44Gu44Kt44Oj44Oz44OQ44K544Gu44Oe44Km44K55L2N572u44Gu5Ymy5ZCI44Go44CBbmV3U2NhbGXjga7jgq3jg6Pjg7Pjg5Djgrnjga7jg57jgqbjgrnkvY3nva7jga7libLlkIjjgYzlkIzjgZjjgZ/jgoHkuIvoqJjjga7lvI/jgYzmiJDjgornq4vjgaRcbiAgICAgICAgICAgIC8vIChtb3VzZSArIG9yaWdpbiAvIHNjYWxlKSAvIChjYW52YXMgLyBzY2FsZSkgPSAobW91c2UgKyBuZXdPcmlnaW4gLyBuZXdTY2FsZSkgLyAoY2FudmFzIC8gbmV3U2NhbGUpXG4gICAgICAgICAgICAvLyDjgZPjgozjgpIgbmV3T3JpZ2luIOOBq+OBpOOBhOOBpuino+OBj+OBqOOAgeasoeOBrumAmuOCiuOBq+OBquOCi1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueCA9IHRoaXMubW91c2UueCAqICh0aGlzLnNjYWxlIC0gbmV3U2NhbGUpICsgdGhpcy5vcmlnaW4ueDtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnkgPSB0aGlzLm1vdXNlLnkgKiAodGhpcy5zY2FsZSAtIG5ld1NjYWxlKSArIHRoaXMub3JpZ2luLnk7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gbmV3U2NhbGU7XG4gICAgICAgICAgICAvLyDnp7vli5XliLbpmZBcbiAgICAgICAgICAgIHRoaXMubGltaXRDYW52YXNQYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5Yem55CG6Zai5pWwXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOODnuOCpuOCueS9jee9ruOCkuWPluW+l+OBmeOCi1xuICAgIGdldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHggPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gdGhpcy5vcmlnaW4ueCkgLyB0aGlzLnNjYWxlO1xuICAgICAgICBjb25zdCB5ID0gKGUuY2xpZW50WSAtIHJlY3QudG9wIC0gdGhpcy5vcmlnaW4ueSkgLyB0aGlzLnNjYWxlO1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfVxuICAgIC8vIOmBuOaKnueKtuaFi+OCkuWIneacn+WMluOBmeOCi1xuICAgIGluaXRTZWxlY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZlcnRpY2VzLmZvckVhY2goKHYpID0+ICh2LmlzU2VsZWN0ZWQgPSBmYWxzZSkpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZXMuZm9yRWFjaCgoZSkgPT4gKGUuaXNTZWxlY3RlZCA9IGZhbHNlKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgfVxuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruenu+WLleWItumZkFxuICAgIGxpbWl0Q2FudmFzUGFuKCkge1xuICAgICAgICBjb25zdCBtYXhYID0gdGhpcy5NQVhfQ0FOVkFTX1dJRFRIICogdGhpcy5zY2FsZSAtIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBtYXhZID0gdGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAqIHRoaXMuc2NhbGUgLSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMub3JpZ2luLnggPSB0aGlzLm9yaWdpbi54ICsgbWF4WCA8IDAgPyAtbWF4WCA6IHRoaXMub3JpZ2luLng7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSB0aGlzLm9yaWdpbi55ICsgbWF4WSA8IDAgPyAtbWF4WSA6IHRoaXMub3JpZ2luLnk7XG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAwIDwgdGhpcy5vcmlnaW4ueCA/IDAgOiB0aGlzLm9yaWdpbi54O1xuICAgICAgICB0aGlzLm9yaWdpbi55ID0gMCA8IHRoaXMub3JpZ2luLnkgPyAwIDogdGhpcy5vcmlnaW4ueTtcbiAgICB9XG4gICAgLy8g44Oq44K144Kk44K6XG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC44O1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA5MDtcbiAgICAgICAgLy8g5Lit5b+D44KS5Yid5pyf5o+P55S75L2N572u44Gr44GZ44KLXG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAodGhpcy5NQVhfQ0FOVkFTX1dJRFRIIC0gdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLnNjYWxlKSAvIDI7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSAodGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAtIHRoaXMuY2FudmFzLmhlaWdodCAvIHRoaXMuc2NhbGUpIC8gMjtcbiAgICAgICAgLy8g5bqn5qiZ44KS44OU44Kv44K744Or44Gr5aSJ5o+b44GX44CB5YCk44KS44Oe44Kk44OK44K55aSJ5o+b44KS44GZ44KL77yIb3JpZ2lu44Gu5LuV5qeY77yJXG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAtdGhpcy5vcmlnaW4ueCAqIHRoaXMuc2NhbGU7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSAtdGhpcy5vcmlnaW4ueSAqIHRoaXMuc2NhbGU7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOOCsOODqeODleOBruWIneacn+WMllxuICAgIGluaXRHcmFwaCgpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgIHRoaXMuaW5pdFNlbGVjdGVkKCk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRab29tSW5kZXggPSAxMDtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVFZGdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBvcyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAvLyDlsaXmrbTjga7liJ3mnJ/ljJZcbiAgICAgICAgdGhpcy5oaXN0b3J5TWFuYWdlci5pbml0KCk7XG4gICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlKHRoaXMudmVydGljZXMsIHRoaXMuZWRnZXMpO1xuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgIH1cbiAgICAvLyBUT0RPOui+uuOCkuOBmeOBueOBpuebtOe3muOBq+OBmeOCi1xuICAgIHN0cmFpZ2h0ZW5FZGdlcygpIHtcbiAgICAgICAgZm9yIChsZXQgZWRnZSBvZiB0aGlzLmVkZ2VzKSB7XG4gICAgICAgICAgICBlZGdlLnN0cmFpZ2h0ZW5FZGdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5qyh5pWw6YWN5YiX44Gu5pu05pawXG4gICAgICAgIHRoaXMudXBkYXRlRGVncmVlU2VxdWVuY2UodGhpcy52ZXJ0aWNlcywgdGhpcy5lZGdlcyk7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDmk43kvZzlh6bnkIZcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g6aCC54K544KS6L+95Yqg44GZ44KL44Ki44Kv44K344On44OzXG4gICAgYWRkVmVydGV4QWN0aW9uKHgsIHkpIHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gbmV3IFZlcnRleCh4LCB5KTtcbiAgICAgICAgdGhpcy5hZGRWZXJ0ZXgodmVydGV4KTtcbiAgICAgICAgLy8g5bGl5q2044K544K/44OD44KvXG4gICAgICAgIHRoaXMuaGlzdG9yeU1hbmFnZXIuYWRkQWN0aW9uKHsgdHlwZTogQWN0aW9uVHlwZS5BZGQsIHRhcmdldDogdmVydGV4LCBpbmRleDogdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHZlcnRleCkgfSk7XG4gICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlKHRoaXMudmVydGljZXMsIHRoaXMuZWRnZXMpO1xuICAgIH1cbiAgICAvLyDovrrjgpLov73liqDjgZnjgovjgqLjgq/jgrfjg6fjg7NcbiAgICBhZGRFZGdlQWN0aW9uKHNlbGVjdGVkVmVydGljZXMsIHRvKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IGlzQWRkRWRnZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGZyb20gb2Ygc2VsZWN0ZWRWZXJ0aWNlcykge1xuICAgICAgICAgICAgLy8g55Ww44Gq44KL77yS6aCC54K544GL77yfXG4gICAgICAgICAgICBpZiAoZnJvbSAmJiB0byAmJiBmcm9tICE9PSB0bykge1xuICAgICAgICAgICAgICAgIC8vIOmHjeikh+i+uuOCkuWPluW+l1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUVkZ2UgPSB0aGlzLmVkZ2VzLmZpbmQoKGVkZ2UpID0+IChlZGdlLmZyb20gPT09IGZyb20gJiYgZWRnZS50byA9PT0gdG8pIHx8IChlZGdlLmZyb20gPT09IHRvICYmIGVkZ2UudG8gPT09IGZyb20pKTtcbiAgICAgICAgICAgICAgICAvLyDph43opIfovrrjga/liYrpmaRcbiAgICAgICAgICAgICAgICBpZiAoZHVwbGljYXRlRWRnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlsaXmrbTjgrnjgr/jg4Pjgq9cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKHsgdHlwZTogQWN0aW9uVHlwZS5EZWxldGUsIHRhcmdldDogZHVwbGljYXRlRWRnZSwgaW5kZXg6IHRoaXMuZWRnZXMuaW5kZXhPZihkdXBsaWNhdGVFZGdlKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFZGdlKGR1cGxpY2F0ZUVkZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDmlrDjgZfjgYTovrrjgpLov73liqBcbiAgICAgICAgICAgICAgICBjb25zdCBlZGdlID0gbmV3IEVkZ2UoZnJvbSwgdG8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICAgICAgICAgICAgICAvLyDlsaXmrbTjgrnjgr/jg4Pjgq9cbiAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goeyB0eXBlOiBBY3Rpb25UeXBlLkFkZCwgdGFyZ2V0OiBlZGdlLCBpbmRleDogdGhpcy5lZGdlcy5pbmRleE9mKGVkZ2UpIH0pO1xuICAgICAgICAgICAgICAgIGlzQWRkRWRnZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L6644KS6L+95Yqg44GX44Gf5aC05ZCI44Gu5Yem55CGXG4gICAgICAgIGlmIChpc0FkZEVkZ2UpIHtcbiAgICAgICAgICAgIC8vIOWxpeattOOCueOCv+ODg+OCr1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5TWFuYWdlci5hZGRHcm9wdWVkQWN0aW9uKHsgYWN0aW9uczogYWN0aW9ucyB9KTtcbiAgICAgICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzLCB0aGlzLmVkZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDpoILngrnjgpLliYrpmaTjgZnjgovjgqLjgq/jgrfjg6fjg7NcbiAgICBkZWxldGVWZXJ0ZXhBY3Rpb24odmVydGV4KSB7XG4gICAgICAgIC8vIOWxpeattOmFjeWIl1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgICAgIC8vIOmFjeWIl+OCs+ODlOODvO+8iOWJiumZpOOBp2luZGV444GM5aSJ44KP44KJ44Gq44GE44KI44GG44Gr77yJXG4gICAgICAgIGNvbnN0IHZlcnRleEVkZ2VzID0gWy4uLnZlcnRleC5lZGdlc107XG4gICAgICAgIC8vIOmggueCueOBq+aOpee2muOBleOCjOOBn+i+uuOCkuWJiumZpFxuICAgICAgICB2ZXJ0ZXhFZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICAgICAgICAvLyDlsaXmrbTjgrnjgr/jg4Pjgq9cbiAgICAgICAgICAgIGFjdGlvbnMucHVzaCh7IHR5cGU6IEFjdGlvblR5cGUuRGVsZXRlLCB0YXJnZXQ6IGVkZ2UsIGluZGV4OiB0aGlzLmVkZ2VzLmluZGV4T2YoZWRnZSkgfSk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVkZ2UoZWRnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlsaXmrbTjgrnjgr/jg4Pjgq9cbiAgICAgICAgYWN0aW9ucy5wdXNoKHsgdHlwZTogQWN0aW9uVHlwZS5EZWxldGUsIHRhcmdldDogdmVydGV4LCBpbmRleDogdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHZlcnRleCkgfSk7XG4gICAgICAgIHRoaXMuZGVsZXRlVmVydGV4KHZlcnRleCk7XG4gICAgICAgIHRoaXMuaGlzdG9yeU1hbmFnZXIuYWRkR3JvcHVlZEFjdGlvbih7IGFjdGlvbnM6IGFjdGlvbnMgfSk7XG4gICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlKHRoaXMudmVydGljZXMsIHRoaXMuZWRnZXMpO1xuICAgIH1cbiAgICAvLyDovrrjgpLliYrpmaTjgZnjgovjgqLjgq/jgrfjg6fjg7NcbiAgICBkZWxldGVFZGdlQWN0aW9uKGVkZ2UpIHtcbiAgICAgICAgLy8g5bGl5q2044K544K/44OD44KvXG4gICAgICAgIHRoaXMuaGlzdG9yeU1hbmFnZXIuYWRkQWN0aW9uKHsgdHlwZTogQWN0aW9uVHlwZS5EZWxldGUsIHRhcmdldDogZWRnZSwgaW5kZXg6IHRoaXMuZWRnZXMuaW5kZXhPZihlZGdlKSB9KTtcbiAgICAgICAgdGhpcy5kZWxldGVFZGdlKGVkZ2UpO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzLCB0aGlzLmVkZ2VzKTtcbiAgICB9XG4gICAgLy8g6aCC54K56L+95YqgXG4gICAgYWRkVmVydGV4KHZlcnRleCwgaW5kZXggPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLnNwbGljZShpbmRleCwgMCwgdmVydGV4KTtcbiAgICB9XG4gICAgLy8g6aCC54K55YmK6ZmkXG4gICAgZGVsZXRlVmVydGV4KHZlcnRleCkge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLnNwbGljZSh0aGlzLnZlcnRpY2VzLmluZGV4T2YodmVydGV4KSwgMSk7XG4gICAgfVxuICAgIC8vIOi+uui/veWKoFxuICAgIGFkZEVkZ2UoZWRnZSwgaW5kZXggPSB0aGlzLmVkZ2VzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmVkZ2VzLnNwbGljZShpbmRleCwgMCwgZWRnZSk7XG4gICAgICAgIGVkZ2UuZnJvbS5hZGRFZGdlKGVkZ2UpO1xuICAgICAgICBlZGdlLnRvLmFkZEVkZ2UoZWRnZSk7XG4gICAgfVxuICAgIC8vIOi+uuWJiumZpFxuICAgIGRlbGV0ZUVkZ2UoZWRnZSkge1xuICAgICAgICBlZGdlLmZyb20uZGVsZXRlRWRnZShlZGdlKTtcbiAgICAgICAgZWRnZS50by5kZWxldGVFZGdlKGVkZ2UpO1xuICAgICAgICB0aGlzLmVkZ2VzLnNwbGljZSh0aGlzLmVkZ2VzLmluZGV4T2YoZWRnZSksIDEpO1xuICAgIH1cbiAgICAvLyDmiLvjgZvjgovjgYtcbiAgICBjYW5VbmRvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5TWFuYWdlci5jYW5VbmRvKCk7XG4gICAgfVxuICAgIC8vIOaIu+OBmVxuICAgIHVuZG8oKSB7XG4gICAgICAgIGlmICghdGhpcy5oaXN0b3J5TWFuYWdlci5jYW5VbmRvKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDlsaXmrbTmg4XloLHjgpLlj5blvpfjgZfjgIHpgIbmk43kvZzjgZnjgovjgZ/jgoHjg6rjg5Djg7zjgrnjgZnjgotcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IFsuLi50aGlzLmhpc3RvcnlNYW5hZ2VyLnVuZG8oKS5hY3Rpb25zXS5yZXZlcnNlKCk7XG4gICAgICAgIC8vIFVuZG/jgpLlrp/ooYxcbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24udGFyZ2V0IGluc3RhbmNlb2YgVmVydGV4KSB7XG4gICAgICAgICAgICAgICAgLy8g6aCC54K5QWN0aW9u44GudW5kb1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IGFjdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEFjdGlvblR5cGUuQWRkOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVWZXJ0ZXgodmVydGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEFjdGlvblR5cGUuRGVsZXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgodmVydGV4LCBhY3Rpb24uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4LmVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVkZ2UoZWRnZSwgYWN0aW9uLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aW9uLnRhcmdldCBpbnN0YW5jZW9mIEVkZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDovrpBY3Rpb27jga5VbmRvXG4gICAgICAgICAgICAgICAgY29uc3QgZWRnZSA9IGFjdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEFjdGlvblR5cGUuQWRkOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFZGdlKGVkZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZS5EZWxldGU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVkZ2UoZWRnZSwgYWN0aW9uLmluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzLCB0aGlzLmVkZ2VzKTtcbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8g44KE44KK55u044Gb44KL44GLXG4gICAgY2FuUmVkbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeU1hbmFnZXIuY2FuUmVkbygpO1xuICAgIH1cbiAgICAvLyDjgoTjgornm7TjgZlcbiAgICByZWRvKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGlzdG9yeU1hbmFnZXIuY2FuUmVkbygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5bGl5q205oOF5aCx44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IGdyb3VwZWRBY3Rpb24gPSB0aGlzLmhpc3RvcnlNYW5hZ2VyLnJlZG8oKTtcbiAgICAgICAgLy8gUmVkb+OCkuWun+ihjFxuICAgICAgICBncm91cGVkQWN0aW9uLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnRhcmdldCBpbnN0YW5jZW9mIFZlcnRleCkge1xuICAgICAgICAgICAgICAgIC8vIOmggueCuUFjdGlvbuOBrlJlZG9cbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBhY3Rpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlLkFkZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4KHZlcnRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlLkRlbGV0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVmVydGV4KHZlcnRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3Rpb24udGFyZ2V0IGluc3RhbmNlb2YgRWRnZSkge1xuICAgICAgICAgICAgICAgIC8vIOi+ukFjdGlvbuOBrlJlZG9cbiAgICAgICAgICAgICAgICBjb25zdCBlZGdlID0gYWN0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZS5BZGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlLkRlbGV0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRWRnZShlZGdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOWQhOeoruihqOekuuWIh+OCiuabv+OBiOaTjeS9nFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjgrDjg6rjg4Pjg4nooajnpLpcbiAgICBzZXRTaG93R3JpZChzaG93R3JpZCkge1xuICAgICAgICB0aGlzLnNob3dHcmlkID0gc2hvd0dyaWQ7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOOCsOODquODg+ODieihqOekuuOBmeOCi+OBi1xuICAgIGlzU2hvd0dyaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3dHcmlkO1xuICAgIH1cbiAgICAvLyDjgrDjg6njg5Xjg6zjgqTjgqLjgqbjg4jjg6Ljg7zjg4lcbiAgICBzZXRHcmFwaExheW91dChncmFwaExheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dE1vZGUgPSBncmFwaExheW91dDtcbiAgICAgICAgdGhpcy5jaGFuZ2VHcmFwaExheW91dCgpO1xuICAgIH1cbiAgICAvLyDjgrDjg6njg5Xjg6zjgqTjgqLjgqbjg4jjg6Ljg7zjg4njgYzlipvmjIflkJHjgYtcbiAgICBpc0dyYXBoTGF5b3V0Rm9yY2VEaXJlY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dE1vZGUgPT09IEdyYXBoTGF5b3V0RW51bS5Gb3JjZURpcmVjdDtcbiAgICB9XG4gICAgLy8g44Kw44Op44OV44Os44Kk44Ki44Km44OI44Oi44O844OJ44GM5Zu65a6a44GLXG4gICAgaXNHcmFwaExheW91dEZpeGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRNb2RlID09PSBHcmFwaExheW91dEVudW0uRml4ZWQ7XG4gICAgfVxuICAgIC8vIOi+uuOBruaPj+eUu+ODouODvOODiVxuICAgIHNldEVkZ2VEcmF3aW5nKGVkZ2VEcmF3aW5nKSB7XG4gICAgICAgIHRoaXMuZWRnZURyYXdpbmcgPSBlZGdlRHJhd2luZztcbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8g6L6644Gu5o+P55S744Oi44O844OJ44GM55u057ea44GLXG4gICAgaXNFZGdlRHJhd2luZ1N0cmFpZ2h0TGluZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZURyYXdpbmcgPT09IEVkZ2VEcmF3aW5nRW51bS5zdHJhaWdodExpbmU7XG4gICAgfVxuICAgIC8vIOi+uuOBruaPj+eUu+ODouODvOODieOBjOODmuOCuOOCp+absue3muOBi1xuICAgIGlzRWRnZURyYXdpbmdCZXppZXJDdXJ2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZURyYXdpbmcgPT09IEVkZ2VEcmF3aW5nRW51bS5iZXppZXJDdXJ2ZTtcbiAgICB9XG4gICAgLy8g6aCC54K5aW5kZXjjga7ooajnpLpcbiAgICBzZXRTaG93SW5kZXgoc2hvd0luZGV4KSB7XG4gICAgICAgIHRoaXMuc2hvd0luZGV4ID0gc2hvd0luZGV4O1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDpoILngrlpbmRleOOBruihqOekuueKtuaFi+OCkuWPluW+l1xuICAgIGlzU2hvd0luZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93SW5kZXg7XG4gICAgfVxuICAgIC8vIOmggueCueasoeaVsOOBruihqOekulxuICAgIHNldFNob3dEZWdyZWUoc2hvd0RlZ3JlZSkge1xuICAgICAgICB0aGlzLnNob3dEZWdyZWUgPSBzaG93RGVncmVlO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDpoILngrnmrKHmlbDjga7ooajnpLrnirbmhYvjgpLlj5blvpdcbiAgICBpc1Nob3dEZWdyZWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3dEZWdyZWU7XG4gICAgfVxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOBruenu+WLleWkieW9ouWPr+WQpuOCkuWPluW+l1xuICAgIGdldENhblRyYW5zRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuVHJhbnNGb3JtO1xuICAgIH1cbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7np7vli5XlpInlvaLlj6/lkKbjgpLjgrvjg4Pjg4hcbiAgICBzZXRDYW5UcmFuc0Zvcm0oY2FuVHJhbnNGb3JtKSB7XG4gICAgICAgIHRoaXMuY2FuVHJhbnNGb3JtID0gY2FuVHJhbnNGb3JtO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7ov73liqDliYrpmaTlj6/lkKbjgpLlj5blvpdcbiAgICBnZXRDYW5BZGRSZW1vdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbkFkZFJlbW92ZTtcbiAgICB9XG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44Gu6L+95Yqg5YmK6Zmk5Y+v5ZCm44KS44K744OD44OIXG4gICAgc2V0Q2FuQWRkUmVtb3ZlKGNhbkFkZFJlbW92ZSkge1xuICAgICAgICB0aGlzLmNhbkFkZFJlbW92ZSA9IGNhbkFkZFJlbW92ZTtcbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOaPj+eUu+WHpueQhlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjgrDjg6rjg4Pjg4njga7mj4/nlLtcbiAgICBkcmF3R3JpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dHcmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JpZFNpemUgPSAxMDA7XG4gICAgICAgIGNvbnN0IGdyaWRDb3VudFggPSBNYXRoLmNlaWwodGhpcy5NQVhfQ0FOVkFTX1dJRFRIIC8gZ3JpZFNpemUpO1xuICAgICAgICBjb25zdCBncmlkQ291bnRZID0gTWF0aC5jZWlsKHRoaXMuTUFYX0NBTlZBU19IRUlHSFQgLyBncmlkU2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiNlMGUwZTBcIjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgLy8g44Kw44Oq44OD44OJ57ea44KS5o+P55S7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGdyaWRDb3VudFg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeCA9IGkgKiBncmlkU2l6ZTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgsIDApO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHgsIHRoaXMuTUFYX0NBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gZ3JpZENvdW50WTsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gaiAqIGdyaWRTaXplO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgeSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5NQVhfQ0FOVkFTX1dJRFRILCB5KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgLy8g44Kw44Op44OV5o+P55S7XG4gICAgZHJhd0dyYXBoKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcbiAgICAgICAgLy8g44Kw44Oq44OD44OJ44Gu5o+P55S7XG4gICAgICAgIHRoaXMuZHJhd0dyaWQoKTtcbiAgICAgICAgLy8g5Yqb5oyH5ZCR44Oi44O844OJ44Gr44KI44Gj44Gm6L6644Gu5o+P55S744KS5YiH44KK5pu/44GI44KLXG4gICAgICAgIGlmICh0aGlzLmxheW91dE1vZGUgPT09IEdyYXBoTGF5b3V0RW51bS5GaXhlZCAmJiB0aGlzLmVkZ2VEcmF3aW5nID09PSBFZGdlRHJhd2luZ0VudW0uYmV6aWVyQ3VydmUpIHtcbiAgICAgICAgICAgIC8vIOODmuOCuOOCp+absue3muOBruaPj+eUu1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5mb3JFYWNoKChlZGdlKSA9PiBlZGdlLmRyYXdCZXppZXIodGhpcy5jdHgsIHRoaXMuY2FuVHJhbnNGb3JtKSk7XG4gICAgICAgICAgICAvLyDliLblvqHngrnjga7mj4/nlLtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblRyYW5zRm9ybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlRWRnZSAmJiB0aGlzLmVkZ2VzLmluY2x1ZGVzKHRoaXMuYWN0aXZlRWRnZSkgJiYgdGhpcy5hY3RpdmVFZGdlLmNvbnRyb2wuZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50IGluc3RhbmNlb2YgQ29udHJvbCAmJiB0aGlzLmRyYWdnaW5nUG9pbnQuZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDnm7Tnt5rjga7mj4/nlLtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZWRnZS5kcmF3KHRoaXMuY3R4KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6aCC54K544Gu5o+P55S7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpbmRleCkgPT4gdmVydGV4LmRyYXcodGhpcy5jdHgsIHRoaXMuc2hvd0luZGV4LCBpbmRleCwgdGhpcy5zaG93RGVncmVlKSk7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgLy8g55S76Z2i5LiK44Gu5oOF5aCx5pu05pawXG4gICAgICAgIHRoaXMudXBkYXRlSW5mbyh7XG4gICAgICAgICAgICB2ZXJ0aWNlczogdGhpcy52ZXJ0aWNlcyxcbiAgICAgICAgICAgIGVkZ2VzOiB0aGlzLmVkZ2VzLFxuICAgICAgICAgICAgZGVncmVlU2VxdWVuY2U6IHRoaXMuZGVncmVlU2VxdWVuY2UsXG4gICAgICAgICAgICBvcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmg4XloLHooajnpLrvvIjlgI3njofjgajluqfmqJnvvIlcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjE2cHggU2Fucy1zZXJpZlwiO1xuICAgICAgICBjb25zdCB6b29tVGV4dCA9IGDlgI3njoc6ICR7dGhpcy5zY2FsZS50b0ZpeGVkKDIpfXggIOW6p+aomTogKCR7dGhpcy5tb3VzZS54LnRvRml4ZWQoMCl9LCAke3RoaXMubW91c2UueS50b0ZpeGVkKDApfSlgO1xuICAgICAgICBjb25zdCB6b29tVGV4dFdpZHRoID0gdGhpcy5jdHgubWVhc3VyZVRleHQoem9vbVRleHQpLndpZHRoO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIHRoaXMuY2FudmFzLmhlaWdodCAtIDMwLCB6b29tVGV4dFdpZHRoICsgMjAsIDMwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh6b29tVGV4dCwgMTAsIHRoaXMuY2FudmFzLmhlaWdodCAtIDEwKTtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5Yqb5oyH5ZCR44Ki44Or44K044Oq44K644OgXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGludGVydmFsSWQgPSBudWxsO1xuICAgIC8vIOOCsOODqeODleODrOOCpOOCouOCpuODiOODouODvOODieWkieabtFxuICAgIGNoYW5nZUdyYXBoTGF5b3V0KCkge1xuICAgICAgICAvLyDliJ3mnJ/ljJZcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDlipvmjIflkJHjg6Ljg7zjg4njgIFcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0TW9kZSA9PT0gR3JhcGhMYXlvdXRFbnVtLkZvcmNlRGlyZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmVkZ2VEcmF3aW5nID0gRWRnZURyYXdpbmdFbnVtLnN0cmFpZ2h0TGluZTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcmNlRGlyZWN0ZWRMYXlvdXQoKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlipvmjIflkJHjg6zjgqTjgqLjgqbjg4jjga7mm7TmlrBcbiAgICB1cGRhdGVGb3JjZURpcmVjdGVkTGF5b3V0KCkge1xuICAgICAgICAvLyDmlqXliptcbiAgICAgICAgY29uc3QgcmVwdWxzaW9uQ29uc3RhbnQgPSAyMDA7XG4gICAgICAgIC8vIOW8leWKm1xuICAgICAgICBjb25zdCBhdHRyYWN0aW9uQ29uc3RhbnQgPSAyMDA7XG4gICAgICAgIGNvbnN0IG1heERpc3BsYWNlbWVudCA9IDUwO1xuICAgICAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDEwO1xuICAgICAgICAvLyDliJ3mnJ/lpInkvY3jgpIw44Gn6Kit5a6aXG4gICAgICAgIGxldCBkaXNwbGFjZW1lbnRzID0gdGhpcy52ZXJ0aWNlcy5tYXAoKCkgPT4gKHsgeDogMCwgeTogMCB9KSk7XG4gICAgICAgIC8vIOaWpeWKm1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKGZyb20sIGkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodG8sIGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeCA9IGZyb20ueCAtIHRvLng7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gZnJvbS55IC0gdG8ueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgcmVwdWxzaW9uQ29uc3RhbnQgKiAxLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5tYXgoZGlzdGFuY2UsIG1pbkRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcmNlID0gcmVwdWxzaW9uQ29uc3RhbnQgLyBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbaV0ueCArPSAoZHggLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbaV0ueSArPSAoZHkgLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5byV5YqbXG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKGVkZ2UuZnJvbSk7XG4gICAgICAgICAgICBjb25zdCB0b0luZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKGVkZ2UudG8pO1xuICAgICAgICAgICAgY29uc3QgZHggPSBlZGdlLmZyb20ueCAtIGVkZ2UudG8ueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZWRnZS5mcm9tLnkgLSBlZGdlLnRvLnk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICBjb25zdCBmb3JjZSA9IGRpc3RhbmNlIC8gYXR0cmFjdGlvbkNvbnN0YW50O1xuICAgICAgICAgICAgZGlzcGxhY2VtZW50c1tmcm9tSW5kZXhdLnggLT0gKGR4IC8gZGlzdGFuY2UpICogZm9yY2U7XG4gICAgICAgICAgICBkaXNwbGFjZW1lbnRzW2Zyb21JbmRleF0ueSAtPSAoZHkgLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbdG9JbmRleF0ueCArPSAoZHggLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbdG9JbmRleF0ueSArPSAoZHkgLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOenu+WLleW6p+aomeioreWumlxuICAgICAgICBkaXNwbGFjZW1lbnRzLmZvckVhY2goKGRpc3BsYWNlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxhciA9IE1hdGguc3FydChkaXNwbGFjZW1lbnQueCAqIGRpc3BsYWNlbWVudC54ICsgZGlzcGxhY2VtZW50LnkgKiBkaXNwbGFjZW1lbnQueSk7XG4gICAgICAgICAgICBpZiAoc2NhbGFyID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbWl0ZWREaXNwWCA9IChkaXNwbGFjZW1lbnQueCAvIHNjYWxhcikgKiBNYXRoLm1pbihzY2FsYXIsIG1heERpc3BsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGltaXRlZERpc3BZID0gKGRpc3BsYWNlbWVudC55IC8gc2NhbGFyKSAqIE1hdGgubWluKHNjYWxhciwgbWF4RGlzcGxhY2VtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzW2luZGV4XS54ICs9IE1hdGgucm91bmQobGltaXRlZERpc3BYKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzW2luZGV4XS55ICs9IE1hdGgucm91bmQobGltaXRlZERpc3BZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDkv53lrZjoqq3ovrzlh6bnkIZcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g44Kw44Op44OV44Gu54q25oWL44KSSlNPTuOBqOOBl+OBpuS/neWtmFxuICAgIHNhdmVUb0pzb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoSU8uc2F2ZVRvSnNvbigpO1xuICAgIH1cbiAgICAvLyBKU09O44GL44KJ44Kw44Op44OV44Gu54q25oWL44KS44Ot44O844OJXG4gICAgbG9hZEZyb21Kc29uKGpzb25TdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ncmFwaElPLmxvYWRGcm9tSnNvbihqc29uU3RyaW5nKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCsOODqeODleeUn+aIkFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjcmVhdGVHcmFwaEZyb21NYXRyaXgoKSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeU1hbmFnZXIuaW5pdCgpO1xuICAgICAgICBjb25zdCBhZGphY2VuY3lNYXRyaXggPSB0aGlzLmRlZ3JlZVNlcXVlbmNlLmdlbmVyYXRlQWRqYWNlbmN5TWF0cml4KCk7XG4gICAgICAgIGlmICghYWRqYWNlbmN5TWF0cml4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0cml4ID0gYWRqYWNlbmN5TWF0cml4LmdldE1hdHJpeCgpO1xuICAgICAgICBpZiAoIW1hdHJpeCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOOCreODo+ODs+ODkOOCueOBruS4reW/g+W6p+aomeOCkuWPluW+l1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gdGhpcy5NQVhfQ0FOVkFTX1dJRFRIIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IHRoaXMuTUFYX0NBTlZBU19IRUlHSFQgLyAyO1xuICAgICAgICAvLyDlipvmjIflkJHjg6zjgqTjgqLjgqbjg4jjgpLpgannlKjjgZfjgabpoILngrnjgpLphY3nva5cbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHRoaXMuYXBwbHlGb3JjZURpcmVjdGVkTGF5b3V0KG1hdHJpeCwgY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcbiAgICAgICAgLy8g6L6644Gu5L2c5oiQXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBtYXRyaXhbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0cml4W2ldW2pdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VkZ2UgPSBuZXcgRWRnZSh0aGlzLnZlcnRpY2VzW2ldLCB0aGlzLnZlcnRpY2VzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzW2ldLmFkZEVkZ2UobmV3RWRnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXNbal0uYWRkRWRnZShuZXdFZGdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICB9XG4gICAgLy8g5Yqb5oyH5ZCR44Os44Kk44Ki44Km44OI6YGp55SoXG4gICAgYXBwbHlGb3JjZURpcmVjdGVkTGF5b3V0KG1hdHJpeCwgY2VudGVyWCwgY2VudGVyWSkge1xuICAgICAgICBjb25zdCBub2RlcyA9IG1hdHJpeC5tYXAoKF8sIGkpID0+ICh7IGluZGV4OiBpIH0pKTtcbiAgICAgICAgY29uc3QgbGlua3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG1hdHJpeFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChtYXRyaXhbaV1bal0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlua3MucHVzaCh7IHNvdXJjZTogaSwgdGFyZ2V0OiBqIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlipvmjIflkJHjgqLjg6vjgrTjg6rjgrrjg6Djga7oqK3lrppcbiAgICAgICAgbGV0IHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24obm9kZXMpO1xuICAgICAgICBzaW11bGF0aW9uLmZvcmNlKFwibGlua1wiLCBkMy5mb3JjZUxpbmsobGlua3MpLmRpc3RhbmNlKDUwKSk7XG4gICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJjaGFyZ2VcIiwgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC0xMDApKTtcbiAgICAgICAgc2ltdWxhdGlvbi5mb3JjZShcImNlbnRlclwiLCBkMy5mb3JjZUNlbnRlcihjZW50ZXJYLCBjZW50ZXJZKSk7XG4gICAgICAgIHNpbXVsYXRpb24uc3RvcCgpO1xuICAgICAgICAvLyDjgrfjg5/jg6Xjg6zjg7zjgrfjg6fjg7Pjga7lrp/ooYxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKylcbiAgICAgICAgICAgIHNpbXVsYXRpb24udGljaygpO1xuICAgICAgICAvLyDpoILngrnjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcbiAgICAgICAgcmV0dXJuIG5vZGVzLm1hcCgobm9kZSkgPT4gbmV3IFZlcnRleChub2RlLngsIG5vZGUueSkpO1xuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOWIl+aMmeS9k1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g5a6f6KGM44K/44Kk44OX44GuRW51bVxuZXhwb3J0IHZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIkFkZFwiXSA9IFwiYWRkXCI7XG4gICAgQWN0aW9uVHlwZVtcIkRlbGV0ZVwiXSA9IFwiZGVsZXRlXCI7XG59KShBY3Rpb25UeXBlIHx8IChBY3Rpb25UeXBlID0ge30pKTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOWxpeattOeuoeeQhuOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlNYW5hZ2VyIHtcbiAgICAvLyDlsaXmrbTnrqHnkIbphY3liJdcbiAgICBoaXN0b3J5ID0gW107XG4gICAgY3VycmVudFBvc2l0aW9uID0gLTE7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICAvLyDliJ3mnJ/ljJZcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSAtMTtcbiAgICB9XG4gICAgLy8gQWN0aW9u6L+95YqgXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xuICAgICAgICB0aGlzLmFkZEdyb3B1ZWRBY3Rpb24oeyBhY3Rpb25zOiBbYWN0aW9uXSB9KTtcbiAgICB9XG4gICAgLy8gR3JvdXBlZEFjdGlvbui/veWKoFxuICAgIGFkZEdyb3B1ZWRBY3Rpb24oYWN0aW9ucykge1xuICAgICAgICAvLyDmnKrmnaXjga7lsaXmrbTjgpLjgZnjgbnjgabliYrpmaTjgZnjgotcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gdGhpcy5oaXN0b3J5LnNsaWNlKDAsIHRoaXMuY3VycmVudFBvc2l0aW9uICsgMSk7XG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKGFjdGlvbnMpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbisrO1xuICAgIH1cbiAgICAvLyDmiLvjgZlcbiAgICB1bmRvKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UG9zaXRpb24gPCAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuaGlzdG9yeVt0aGlzLmN1cnJlbnRQb3NpdGlvbl07XG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLS07XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuICAgIC8vIOOChOOCiuebtOOBmVxuICAgIHJlZG8oKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQb3NpdGlvbiA+PSB0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmhpc3RvcnlbdGhpcy5jdXJyZW50UG9zaXRpb24gKyAxXTtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24rKztcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG4gICAgLy8g5oi744Gb44KL44GLXG4gICAgY2FuVW5kbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBvc2l0aW9uID49IDA7XG4gICAgfVxuICAgIC8vIOOChOOCiuebtOOBm+OCi+OBi1xuICAgIGNhblJlZG8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQb3NpdGlvbiA8IHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vUG9zaXRpb25cIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOWItuW+oeeCueOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIENvbnRyb2wgZXh0ZW5kcyBQb2ludCB7XG4gICAgLy8g5aeL54K5XG4gICAgZnJvbTtcbiAgICAvLyDntYLngrlcbiAgICB0bztcbiAgICAvLyDovrpcbiAgICBlZGdlO1xuICAgIC8vIOWItuW+oeeCueenu+WLleOBruW9semfv+WAjeeOh1xuICAgIHN0YXRpYyBJTVBBQ1RfRkFDVE9SID0gMztcbiAgICAvLyDliLblvqHngrnjga7ooajnpLrkvY3nva7oqr/mlbRcbiAgICBzdGF0aWMgQURKVVNUX1ZJRVcgPSAyMDtcbiAgICBjb25zdHJ1Y3Rvcihmcm9tLCB0bywgZWRnZSkge1xuICAgICAgICBzdXBlcigwLCAwKTtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLmVkZ2UgPSBlZGdlO1xuICAgICAgICAvLyDkuK3ngrnjga7luqfmqJnjgavjgZnjgotcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIC8vIOWIneacn+WMllxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMueCA9ICh0aGlzLmZyb20ueCArIHRoaXMudG8ueCkgLyAyO1xuICAgICAgICB0aGlzLnkgPSAodGhpcy5mcm9tLnkgKyB0aGlzLnRvLnkpIC8gMiAtIENvbnRyb2wuQURKVVNUX1ZJRVc7XG4gICAgfVxuICAgIC8vIOioiOeul+eUqOOBruWItuW+oeeCueW6p+aome+8iOODmuOCuOOCp+absue3mueul+WHuueUqO+8iVxuICAgIGdldENhbGNQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFggPSB0aGlzLng7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xZID0gdGhpcy55ICsgQ29udHJvbC5BREpVU1RfVklFVztcbiAgICAgICAgY29uc3QgbWlkcG9pbnRYID0gKHRoaXMuZnJvbS54ICsgdGhpcy50by54KSAvIDI7XG4gICAgICAgIGNvbnN0IG1pZHBvaW50WSA9ICh0aGlzLmZyb20ueSArIHRoaXMudG8ueSkgLyAyO1xuICAgICAgICBjb25zdCB4ID0gbWlkcG9pbnRYICsgQ29udHJvbC5JTVBBQ1RfRkFDVE9SICogKGNvbnRyb2xYIC0gbWlkcG9pbnRYKTtcbiAgICAgICAgY29uc3QgeSA9IG1pZHBvaW50WSArIENvbnRyb2wuSU1QQUNUX0ZBQ1RPUiAqIChjb250cm9sWSAtIG1pZHBvaW50WSk7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oeCwgeSk7XG4gICAgfVxuICAgIC8vIOaPj+eUu1xuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gXCIuL0NvbnRyb2xcIjtcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vUG9zaXRpb25cIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOi+uuOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIEVkZ2Uge1xuICAgIC8vIOWni+eCuVxuICAgIGZyb207XG4gICAgLy8g57WC54K5XG4gICAgdG87XG4gICAgLy8g5Yi25b6h54K5XG4gICAgY29udHJvbDtcbiAgICAvLyDpgbjmip7jgZXjgozjgabjgYTjgovjgYtcbiAgICBpc1NlbGVjdGVkO1xuICAgIGNvbnN0cnVjdG9yKGZyb20sIHRvKSB7XG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICAgIHRoaXMudG8gPSB0bztcbiAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2woZnJvbSwgdG8sIHRoaXMpO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8g6aCC54K544Gr6L6644KS6L+95Yqg44GZ44KLXG4gICAgICAgIHRoaXMuZnJvbS5hZGRFZGdlKHRoaXMpO1xuICAgICAgICB0aGlzLnRvLmFkZEVkZ2UodGhpcyk7XG4gICAgfVxuICAgIC8vIOi+uuOCkuebtOe3muOBq+OBmeOCi1xuICAgIHN0cmFpZ2h0ZW5FZGdlKCkge1xuICAgICAgICB0aGlzLmNvbnRyb2wuaW5pdCgpO1xuICAgIH1cbiAgICAvLyDnr4Tlm7LlhoXjgYtcbiAgICBpc05lYXIobW91c2VYLCBtb3VzZVksIHRvbGVyYW5jZSA9IDEwKSB7XG4gICAgICAgIGNvbnN0IGNhbGNQb3NpdGlvbiA9IHRoaXMuY29udHJvbC5nZXRDYWxjUG9zaXRpb24oKTtcbiAgICAgICAgLy8g44OZ44K444Kn5puy57ea44KS5YiG5Ymy44GX44Gm6L+R5Ly8XG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSAxMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHQxID0gaSAvIHNlZ21lbnQ7XG4gICAgICAgICAgICBjb25zdCB0MiA9IChpICsgMSkgLyBzZWdtZW50O1xuICAgICAgICAgICAgY29uc3QgcDEgPSB0aGlzLmdldEJlemllclBvc2l0aW9uKHQxLCBjYWxjUG9zaXRpb24pO1xuICAgICAgICAgICAgY29uc3QgcDIgPSB0aGlzLmdldEJlemllclBvc2l0aW9uKHQyLCBjYWxjUG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRUb1NlZ21lbnREaXN0YW5jZShtb3VzZVgsIG1vdXNlWSwgcDEueCwgcDEueSwgcDIueCwgcDIueSkgPCB0b2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIOODmuOCuOOCp+absue3muOBruWIhuWJsueCuVxuICAgIGdldEJlemllclBvc2l0aW9uKHQsIGNhbGNQb3NpdGlvbikge1xuICAgICAgICBjb25zdCB4ID0gKDEgLSB0KSAqICgxIC0gdCkgKiB0aGlzLmZyb20ueCArIDIgKiAoMSAtIHQpICogdCAqIGNhbGNQb3NpdGlvbi54ICsgdCAqIHQgKiB0aGlzLnRvLng7XG4gICAgICAgIGNvbnN0IHkgPSAoMSAtIHQpICogKDEgLSB0KSAqIHRoaXMuZnJvbS55ICsgMiAqICgxIC0gdCkgKiB0ICogY2FsY1Bvc2l0aW9uLnkgKyB0ICogdCAqIHRoaXMudG8ueTtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbih4LCB5KTtcbiAgICB9XG4gICAgLy8g5o+P55S7XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMuZnJvbS54LCB0aGlzLmZyb20ueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy50by54LCB0aGlzLnRvLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmlzU2VsZWN0ZWQgPyBcInJlZFwiIDogXCJyZ2JhKDEzNSwgMjA2LCAyNTAsIDAuODUpXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY29udHJvbC5pbml0KCk7XG4gICAgfVxuICAgIC8vIOaPj+eUu++8iOODmuOCuOOCp+absue3mu+8iVxuICAgIGRyYXdCZXppZXIoY3R4LCBjYW5UcmFuc0Zvcm0pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMuZnJvbS54LCB0aGlzLmZyb20ueSk7XG4gICAgICAgIC8vIOS6jOasoeODmeOCuOOCp+absue3mlxuICAgICAgICBjb25zdCBjYWxjUG9zaXRpb24gPSB0aGlzLmNvbnRyb2wuZ2V0Q2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKGNhbGNQb3NpdGlvbi54LCBjYWxjUG9zaXRpb24ueSwgdGhpcy50by54LCB0aGlzLnRvLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmlzU2VsZWN0ZWQgPyBcInJlZFwiIDogXCJyZ2JhKDEzNSwgMjA2LCAyNTAsIDAuODUpXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQgJiYgY2FuVHJhbnNGb3JtKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuZHJhdyhjdHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOeCueOBqOebtOe3muOBrui3nembolxuICAgIHBvaW50VG9TZWdtZW50RGlzdGFuY2UocHgsIHB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICBjb25zdCBkeCA9IHgyIC0geDE7XG4gICAgICAgIGNvbnN0IGR5ID0geTIgLSB5MTtcbiAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KChweCAtIHgxKSAqKiAyICsgKHB5IC0geTEpICoqIDIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHQgPSAoKHB4IC0geDEpICogZHggKyAocHkgLSB5MSkgKiBkeSkgLyAoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCB0Q2xhbXBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcbiAgICAgICAgY29uc3QgbmVhcmVzdFggPSB4MSArIHRDbGFtcGVkICogZHg7XG4gICAgICAgIGNvbnN0IG5lYXJlc3RZID0geTEgKyB0Q2xhbXBlZCAqIGR5O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KChweCAtIG5lYXJlc3RYKSAqKiAyICsgKHB5IC0gbmVhcmVzdFkpICoqIDIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vUG9zaXRpb25cIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOeCueOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIFBvaW50IGV4dGVuZHMgUG9zaXRpb24ge1xuICAgIC8vIOWNiuW+hFxuICAgIHJhZGl1cztcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHN1cGVyKHgsIHkpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDQ7XG4gICAgfVxuICAgIC8vIOevhOWbsuWGheOBi1xuICAgIGlzTmVhcih4LCB5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMueCAtIHgsIHRoaXMueSAtIHkpIDwgdGhpcy5yYWRpdXMgKiAyO1xuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOS9jee9ruOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgICAvLyDluqfmqJlcbiAgICB4O1xuICAgIHk7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHgpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vUG9pbnRcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOmggueCueOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIFZlcnRleCBleHRlbmRzIFBvaW50IHtcbiAgICAvLyDpgbjmip7jgZXjgozjgabjgYTjgovjgYtcbiAgICBpc1NlbGVjdGVkO1xuICAgIC8vIOaOpee2muOBl+OBpuOBhOOCi+i+ulxuICAgIGVkZ2VzO1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gMTA7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgfVxuICAgIC8vIOi+uuOCkui/veWKoFxuICAgIGFkZEVkZ2UoZWRnZSkge1xuICAgICAgICAvLyDph43opIfovrrjgpLlj5blvpdcbiAgICAgICAgY29uc3QgZHVwbGljYXRlRWRnZSA9IHRoaXMuZWRnZXMuZmluZCgoaXRlbSkgPT4gKGl0ZW0uZnJvbSA9PT0gZWRnZS5mcm9tICYmIGl0ZW0udG8gPT09IGVkZ2UudG8pIHx8IChpdGVtLmZyb20gPT09IGVkZ2UudG8gJiYgaXRlbS50byA9PT0gZWRnZS5mcm9tKSk7XG4gICAgICAgIC8vIOmHjeikh+i+uuOBr+WJiumZpFxuICAgICAgICBpZiAoZHVwbGljYXRlRWRnZSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFZGdlKGR1cGxpY2F0ZUVkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG4gICAgLy8g6L6644KS5YmK6ZmkXG4gICAgZGVsZXRlRWRnZShlZGdlKSB7XG4gICAgICAgIHRoaXMuZWRnZXMuc3BsaWNlKHRoaXMuZWRnZXMuaW5kZXhPZihlZGdlKSwgMSk7XG4gICAgfVxuICAgIC8vIOasoeaVsOWPluW+l1xuICAgIGdldERlZ3JlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRnZXMubGVuZ3RoO1xuICAgIH1cbiAgICAvLyDmj4/nlLtcbiAgICBkcmF3KGN0eCwgc2hvd0luZGV4LCBpbmRleCwgc2hvd0RlZ3JlZSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAxMDAsIDE1MCwgMSlcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5pc1NlbGVjdGVkID8gXCJyZWRcIiA6IFwicmdiYSgxMzUsIDIwNiwgMjUwLCAwLjg1KVwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyDpoILngrnmg4XloLHjga7ooajnpLpcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjEycHggU2Fucy1zZXJpZlwiO1xuICAgICAgICBpZiAoc2hvd0luZGV4KSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYEluZGV4OiAke2luZGV4fWAsIHRoaXMueCArIHRoaXMucmFkaXVzICsgNSwgdGhpcy55IC0gdGhpcy5yYWRpdXMgLSA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0RlZ3JlZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGBEZWdyZWU6ICR7dGhpcy5nZXREZWdyZWUoKX1gLCB0aGlzLnggKyB0aGlzLnJhZGl1cyArIDUsIHRoaXMueSAtIHRoaXMucmFkaXVzICsgMTUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBEZWdyZWVTZXFFbnVtIH0gZnJvbSBcIi4vY29tcG9uZW50L0RlZ3JlZVNlcXVlbmNlXCI7XG5pbXBvcnQgeyBFZGdlRHJhd2luZ0VudW0sIEdyYXBoTGF5b3V0RW51bSwgR3JhcGhNYW5hZ2VyIH0gZnJvbSBcIi4vY29tcG9uZW50L0dyYXBoTWFuYWdlclwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSFRNTOmgheebrumWoumAo+WHpueQhlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc2V0dXApO1xuZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOaTjeS9nOOCqOODquOCoiAtIOaIu+OBmeOAgeOChOOCiuebtOOBmVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCB1bmRvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bmRvQnV0dG9uXCIpO1xuICAgIGNvbnN0IHJlZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZG9CdXR0b25cIik7XG4gICAgdW5kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tVbmRvKTtcbiAgICByZWRvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja1JlZG8pO1xuICAgIC8vIOaIu+OBmeODnOOCv+ODs+OBjOOCr+ODquODg+OCr+OBleOCjOOBn+aZguOBruWHpueQhlxuICAgIGZ1bmN0aW9uIGNsaWNrVW5kbygpIHtcbiAgICAgICAgZ3JhcGhNYW5hZ2VyLnVuZG8oKTtcbiAgICAgICAgdW5kb0J1dHRvbi5kaXNhYmxlZCA9ICFncmFwaE1hbmFnZXIuY2FuVW5kbygpO1xuICAgIH1cbiAgICAvLyDjgoTjgornm7TjgZnjg5zjgr/jg7PjgYzjgq/jg6rjg4Pjgq/jgZXjgozjgZ/mmYLjga7lh6bnkIZcbiAgICBmdW5jdGlvbiBjbGlja1JlZG8oKSB7XG4gICAgICAgIGdyYXBoTWFuYWdlci5yZWRvKCk7XG4gICAgICAgIHJlZG9CdXR0b24uZGlzYWJsZWQgPSAhZ3JhcGhNYW5hZ2VyLmNhblJlZG8oKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOaTjeS9nOOCqOODquOCoiAtIOasoeaVsOmFjeWIl1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCBkZWdyZWVUb2dnbGUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWdyZWVUb2dnbGUxXCIpO1xuICAgIGNvbnN0IGRlZ3JlZVRvZ2dsZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZVRvZ2dsZTJcIik7XG4gICAgY29uc3QgZGVncmVlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWdyZWVTZXF1ZW5jZUlucHV0XCIpO1xuICAgIGNvbnN0IGFwcGx5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBseURlZ3JlZVNlcXVlbmNlXCIpO1xuICAgIGNvbnN0IGluaXRHcmFwaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdEdyYXBoQnV0dG9uXCIpO1xuICAgIGRlZ3JlZVRvZ2dsZTEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrRGVncmVlQXJyYXkpO1xuICAgIGRlZ3JlZVRvZ2dsZTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrUnVuTGVuZ3RoKTtcbiAgICBkZWdyZWVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGlucHV0RGVncmVlU2VxdWVuY2UpO1xuICAgIGRlZ3JlZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBibHVyRGVncmVlU2VxdWVuY2UpO1xuICAgIGFwcGx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhcHBseURlZ3JlZVNlcXVlbmNlKTtcbiAgICBpbml0R3JhcGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRHcmFwaCk7XG4gICAgLy8g44OI44Kw44Or44Oc44K/44Oz44Gu54q25oWLOiDliJ3mnJ/lgKTjga/jgIzmrKHmlbDphY3liJfjgI3jgajjgZnjgotcbiAgICBsZXQgZGVncmVlTW9kZSA9IERlZ3JlZVNlcUVudW0uQXJyYXk7XG4gICAgLy8g44OI44Kw44Or44Oc44K/44Oz44Gn44CB5qyh5pWw6YWN5YiX44GM6YG45oqe44GV44KM44Gf5pmC44Gu5Yem55CGXG4gICAgZnVuY3Rpb24gY2xpY2tEZWdyZWVBcnJheSgpIHtcbiAgICAgICAgZGVncmVlTW9kZSA9IERlZ3JlZVNlcUVudW0uQXJyYXk7XG4gICAgICAgIGRlZ3JlZVRvZ2dsZTEudGV4dENvbnRlbnQgPSBkZWdyZWVNb2RlO1xuICAgICAgICBkZWdyZWVUb2dnbGUxLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGRlZ3JlZVRvZ2dsZTIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZGVncmVlc0lucHV0LnBsYWNlaG9sZGVyID0gXCLkvos6IDQsNCw0LDMsM1wiO1xuICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2UuZ2V0QXJyYXlTdHJpbmcoKTtcbiAgICB9XG4gICAgLy8g44OI44Kw44Or44Oc44K/44Oz44Gn44CB44Op44Oz44Os44Oz44Kw44K55Zyn57iu44GM6YG45oqe44GV44KM44Gf5pmC44Gu5Yem55CGXG4gICAgZnVuY3Rpb24gY2xpY2tSdW5MZW5ndGgoKSB7XG4gICAgICAgIGRlZ3JlZU1vZGUgPSBEZWdyZWVTZXFFbnVtLlJ1bkxlbmd0aDtcbiAgICAgICAgZGVncmVlVG9nZ2xlMi50ZXh0Q29udGVudCA9IGRlZ3JlZU1vZGU7XG4gICAgICAgIGRlZ3JlZVRvZ2dsZTIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZGVncmVlVG9nZ2xlMS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkZWdyZWVzSW5wdXQucGxhY2Vob2xkZXIgPSBcIuS+izogNCozLDMqMlwiO1xuICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2UuZ2V0UnVuTGVuZ3RoU3RyaW5nKCk7XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+WFpeWKm+ashOOBq+WFpeWKm+OBl+OBn+aZguOBruWHpueQhlxuICAgIGZ1bmN0aW9uIGlucHV0RGVncmVlU2VxdWVuY2UoKSB7XG4gICAgICAgIHN3aXRjaCAoZGVncmVlTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBEZWdyZWVTZXFFbnVtLkFycmF5OlxuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+OAgeOCq+ODs+ODnuOCkuioseWuuVxuICAgICAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGRlZ3JlZXNJbnB1dC52YWx1ZS5yZXBsYWNlKC9bXjAtOSwgXS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGVncmVlU2VxRW51bS5SdW5MZW5ndGg6XG4gICAgICAgICAgICAgICAgLy8g5pWw5a2X44CB44Kr44Oz44Oe44CB44Ki44K544K/44Oq44K544Kv44KS6Kix5a65XG4gICAgICAgICAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gZGVncmVlc0lucHV0LnZhbHVlLnJlcGxhY2UoL1teMC05LCogXS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmrKHmlbDphY3liJflhaXlipvmrITjga7jg63jgrnjg4jjg5Xjgqnjg7zjgqvjgrnmmYLjga7lh6bnkIZcbiAgICBmdW5jdGlvbiBibHVyRGVncmVlU2VxdWVuY2UoKSB7XG4gICAgICAgIGdyYXBoTWFuYWdlci5kZWdyZWVTZXF1ZW5jZS5zZXRWYWx1ZShkZWdyZWVNb2RlLCBkZWdyZWVzSW5wdXQudmFsdWUpO1xuICAgICAgICAvLyDlgKTjga7oqK3lrppcbiAgICAgICAgc3dpdGNoIChkZWdyZWVNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIERlZ3JlZVNlcUVudW0uQXJyYXk6XG4gICAgICAgICAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gZ3JhcGhNYW5hZ2VyLmRlZ3JlZVNlcXVlbmNlLmdldEFycmF5U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERlZ3JlZVNlcUVudW0uUnVuTGVuZ3RoOlxuICAgICAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGdyYXBoTWFuYWdlci5kZWdyZWVTZXF1ZW5jZS5nZXRSdW5MZW5ndGhTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyDmnInlirnmgKfliKTlrppcbiAgICAgICAgaWYgKGdyYXBoTWFuYWdlci5kZWdyZWVTZXF1ZW5jZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaXMtdmFsaWRcIik7XG4gICAgICAgICAgICBhcHBseUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVncmVlc0lucHV0LmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZhbGlkXCIpO1xuICAgICAgICAgICAgZGVncmVlc0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy12YWxpZFwiKTtcbiAgICAgICAgICAgIGFwcGx5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDpgannlKjjg5zjgr/jg7PjgYzmirzjgZXjgozjgZ/mmYLjga7lh6bnkIZcbiAgICBmdW5jdGlvbiBhcHBseURlZ3JlZVNlcXVlbmNlKCkge1xuICAgICAgICBpZiAoZ3JhcGhNYW5hZ2VyLmRlZ3JlZVNlcXVlbmNlLnZlcnRleENvdW50KCkgPiAxMDAwKSB7XG4gICAgICAgICAgICBVdGlscy5jb25maXJtQWN0aW9uKFwi6aCC54K544Gu5pWw44GMMTAwMOOCkui2heOBiOOCi+OCsOODqeODleOBr+aPj+eUu+OBp+OBjeOBvuOBm+OCk1wiLCAoKSA9PiB7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdyYXBoTWFuYWdlci5kZWdyZWVTZXF1ZW5jZS52ZXJ0ZXhDb3VudCgpID4gNTAwKSB7XG4gICAgICAgICAgICBVdGlscy5jb25maXJtQWN0aW9uKFwi6aCC54K544Gu5pWw44GM5aSn44GN44GE44Gf44KB44CB5o+P55S744Gr5pWw5YiG44GL44GL44KL5aC05ZCI44GM44GC44KK44G+44GZ44GM44KI44KN44GX44GE44Gn44GZ44GL77yfXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBncmFwaE1hbmFnZXIuY3JlYXRlR3JhcGhGcm9tTWF0cml4KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdyYXBoTWFuYWdlci5jcmVhdGVHcmFwaEZyb21NYXRyaXgoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDjgrDjg6njg5Xjga7liJ3mnJ/ljJZcbiAgICBmdW5jdGlvbiBpbml0R3JhcGgoKSB7XG4gICAgICAgIFV0aWxzLmNvbmZpcm1BY3Rpb24oXCLjgrDjg6njg5XjgYzliJ3mnJ/ljJbjgZXjgozjgb7jgZnjgYzjgojjgo3jgZfjgYTjgafjgZnjgYvvvJ9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgZ3JhcGhNYW5hZ2VyLmluaXRHcmFwaCgpO1xuICAgICAgICAgICAgLy8g5Yid5pyf6Kit5a6a5YCkXG4gICAgICAgICAgICBzZXRJbml0aWFsVmFsdWUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsO+8iEdyYXBoTWFuYWdlcuWGheOBruWkieabtOOCkuWPjeaYoOOBmeOCi+OBn+OCgeOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsO+8iVxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlZ3JlZVNlcXVlbmNlKHZlcnRpY2VzLCBlZGdlcykge1xuICAgICAgICBncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2Uuc2V0VmVydGljZXModmVydGljZXMsIGVkZ2VzKTtcbiAgICAgICAgLy8g5YCk44Gu6Kit5a6aXG4gICAgICAgIHN3aXRjaCAoZGVncmVlTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBEZWdyZWVTZXFFbnVtLkFycmF5OlxuICAgICAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGdyYXBoTWFuYWdlci5kZWdyZWVTZXF1ZW5jZS5nZXRBcnJheVN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEZWdyZWVTZXFFbnVtLlJ1bkxlbmd0aDpcbiAgICAgICAgICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2UuZ2V0UnVuTGVuZ3RoU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOODl+ODreODkeODhuOCo+OCqOODquOCoiAtIOOCsOODqeODleaDheWgsVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCB2ZXJ0ZXhEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJ0ZXhEaXNwbGF5XCIpO1xuICAgIGNvbnN0IGVkZ2VEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGdlRGlzcGxheVwiKTtcbiAgICBjb25zdCBncmFwaFN0YXR1c0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXBoU3RhdHVzRGlzcGxheVwiKTtcbiAgICBjb25zdCBtYXhHcmFwaEVkZ2VEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXhHcmFwaEVkZ2VEaXNwbGF5XCIpO1xuICAgIGNvbnN0IGhhc0szM0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhc0szM0Rpc3BsYXlcIik7XG4gICAgY29uc3QgaGFzSzVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXNLNURpc3BsYXlcIik7XG4gICAgY29uc3Qgc2hvd0luZGV4Q2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dJbmRleENoZWNrYm94XCIpO1xuICAgIGNvbnN0IHNob3dEZWdyZWVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd0RlZ3JlZUNoZWNrYm94XCIpO1xuICAgIGNvbnN0IHNob3dHcmlkQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dHcmlkQ2hlY2tib3hcIik7XG4gICAgc2hvd0luZGV4Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzaG93SW5kZXgpO1xuICAgIHNob3dEZWdyZWVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHNob3dEZWdyZWUpO1xuICAgIHNob3dHcmlkQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzaG93R3JpZCk7XG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI5oOF5aCx44Gu5pu05pawXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5mbyhpbmZvKSB7XG4gICAgICAgIC8vIOmggueCueOBqOi+uuOBruaVsFxuICAgICAgICB2ZXJ0ZXhEaXNwbGF5LnRleHRDb250ZW50ID0gYOmggueCueOBruaVsDogJHtpbmZvLnZlcnRpY2VzLmxlbmd0aH1gO1xuICAgICAgICBlZGdlRGlzcGxheS50ZXh0Q29udGVudCA9IGDovrrjga7mlbA6ICR7aW5mby5lZGdlcy5sZW5ndGh9YDtcbiAgICAgICAgLy8g5Yid5pyf5YyWXG4gICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS50ZXh0Q29udGVudCA9IFwi44Kw44Op44OVOiDlubPpnaLjgrDjg6njg5VcIjtcbiAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgICAgICBtYXhHcmFwaEVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gXCIgLSBcIjtcbiAgICAgICAgaGFzSzMzRGlzcGxheS50ZXh0Q29udGVudCA9IFwiazMsMzogLVwiO1xuICAgICAgICBoYXNLMzNEaXNwbGF5LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgICAgaGFzSzMzRGlzcGxheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICAgICAgaGFzSzVEaXNwbGF5LnRleHRDb250ZW50ID0gXCJrNTogLVwiO1xuICAgICAgICBoYXNLNURpc3BsYXkuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICBoYXNLNURpc3BsYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgICAgIC8vIOacgOWwj+mZkOOBruOCsOODqeODleWIpOWumlxuICAgICAgICBpZiAoaW5mby52ZXJ0aWNlcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5qW15aSn5bmz6Z2i44Kw44Op44OV5Yik5a6a77yIIDNWIC0gRSA9IDYg77yJXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IDMgKiBpbmZvLnZlcnRpY2VzLmxlbmd0aCAtIGluZm8uZWRnZXMubGVuZ3RoO1xuICAgICAgICAvLyDpmqPmjqXooYzliJfjgpLlj5blvpdcbiAgICAgICAgY29uc3QgYWRqYWNlbmN5TWF0cml4ID0gaW5mby5kZWdyZWVTZXF1ZW5jZS5nZXRBZGphY2VuY3lNYXRyaXgoKTtcbiAgICAgICAgLy8g44Kw44Op44OV54q25oWLXG4gICAgICAgIGlmIChhZGphY2VuY3lNYXRyaXggPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIOaPj+eUu+S4jeWPr+iDvVxuICAgICAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnRleHRDb250ZW50ID0gXCLjgrDjg6njg5U6IOWun+ePvuS4jeWPr1wiO1xuICAgICAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWRqYWNlbmN5TWF0cml4Lmhhc0szMygpIHx8IGFkamFjZW5jeU1hdHJpeC5oYXNLNSgpKSB7XG4gICAgICAgICAgICAvLyDpnZ7lubPpnaLjgrDjg6njg5VcbiAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS50ZXh0Q29udGVudCA9IFwi44Kw44Op44OVOiDpnZ7lubPpnaLjgrDjg6njg5VcIjtcbiAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICBncmFwaFN0YXR1c0Rpc3BsYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICAgICAgLy8gSzMsM1xuICAgICAgICAgICAgaWYgKGFkamFjZW5jeU1hdHJpeCAmJiBhZGphY2VuY3lNYXRyaXguaGFzSzMzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrMzMgPSBhZGphY2VuY3lNYXRyaXguZ2V0UmVzdWx0SzMzKCk7XG4gICAgICAgICAgICAgICAgaGFzSzMzRGlzcGxheS50ZXh0Q29udGVudCA9IGBrMywzOiAke2szMy5tYXAoKHN1YikgPT4gYCgke3N1Yi5qb2luKFwiLFwiKX0pYCkuam9pbihcIiwgXCIpfWA7XG4gICAgICAgICAgICAgICAgaGFzSzMzRGlzcGxheS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgaGFzSzMzRGlzcGxheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBLNVxuICAgICAgICAgICAgaWYgKGFkamFjZW5jeU1hdHJpeCAmJiBhZGphY2VuY3lNYXRyaXguaGFzSzUoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGs1ID0gYWRqYWNlbmN5TWF0cml4LmdldFJlc3VsdEs1KCk7XG4gICAgICAgICAgICAgICAgaGFzSzVEaXNwbGF5LnRleHRDb250ZW50ID0gYGs1OiAoJHtrNS5qb2luKFwiLCBcIil9KWA7XG4gICAgICAgICAgICAgICAgaGFzSzVEaXNwbGF5LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBoYXNLNURpc3BsYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5bmz6Z2i44Kw44Op44OVXG4gICAgICAgICAgICBpZiAocmVzdWx0ID4gNikge1xuICAgICAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS50ZXh0Q29udGVudCA9IFwi44Kw44Op44OVOiDlubPpnaLjgrDjg6njg5VcIjtcbiAgICAgICAgICAgICAgICBncmFwaFN0YXR1c0Rpc3BsYXkuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBtYXhHcmFwaEVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gYOi+uuaVsCAke3Jlc3VsdCAtIDZ9IOi/veWKoOWPr+iDvWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQgPT0gNikge1xuICAgICAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS50ZXh0Q29udGVudCA9IFwi44Kw44Op44OVOiDmpbXlpKflubPpnaLjgrDjg6njg5VcIjtcbiAgICAgICAgICAgICAgICBncmFwaFN0YXR1c0Rpc3BsYXkuc3R5bGUuY29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgICAgICAgICBncmFwaFN0YXR1c0Rpc3BsYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICAgICAgICAgIG1heEdyYXBoRWRnZURpc3BsYXkudGV4dENvbnRlbnQgPSBgIC0gYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmiLvjgZnjgIHjgoTjgornm7TjgZnjg5zjgr/jg7Pjga7mnInlirnnhKHlirnljJZcbiAgICAgICAgdW5kb0J1dHRvbi5kaXNhYmxlZCA9ICFncmFwaE1hbmFnZXIuY2FuVW5kbygpO1xuICAgICAgICByZWRvQnV0dG9uLmRpc2FibGVkID0gIWdyYXBoTWFuYWdlci5jYW5SZWRvKCk7XG4gICAgfVxuICAgIC8vIOmggueCueOBrueVquWPt+OCkuihqOekulxuICAgIGZ1bmN0aW9uIHNob3dJbmRleCgpIHtcbiAgICAgICAgZ3JhcGhNYW5hZ2VyLnNldFNob3dJbmRleChzaG93SW5kZXhDaGVja2JveC5jaGVja2VkKTtcbiAgICB9XG4gICAgLy8g6aCC54K544Gu5qyh5pWw44KS6KGo56S6XG4gICAgZnVuY3Rpb24gc2hvd0RlZ3JlZSgpIHtcbiAgICAgICAgZ3JhcGhNYW5hZ2VyLnNldFNob3dEZWdyZWUoc2hvd0RlZ3JlZUNoZWNrYm94LmNoZWNrZWQpO1xuICAgIH1cbiAgICAvLyDjgrDjg6rjg4Pjg4njgpLooajnpLpcbiAgICBmdW5jdGlvbiBzaG93R3JpZCgpIHtcbiAgICAgICAgZ3JhcGhNYW5hZ2VyLnNldFNob3dHcmlkKHNob3dHcmlkQ2hlY2tib3guY2hlY2tlZCk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjg5fjg63jg5Hjg4bjgqPjgqjjg6rjgqIgLSDjg6zjgqTjgqLjgqbjg4hcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgZ3JhcGhMYXlvdXRUb2dnbGUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFwaExheW91dFRvZ2dsZTFcIik7XG4gICAgY29uc3QgZ3JhcGhMYXlvdXRUb2dnbGUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFwaExheW91dFRvZ2dsZTJcIik7XG4gICAgY29uc3QgZHJhd0VkZ2VUb2dnbGUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcmF3RWRnZVRvZ2dsZTFcIik7XG4gICAgY29uc3QgZHJhd0VkZ2VUb2dnbGUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcmF3RWRnZVRvZ2dsZTJcIik7XG4gICAgY29uc3QgY2FuVHJhbnNGb3JtQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhblRyYW5zRm9ybUNoZWNrYm94XCIpO1xuICAgIGNvbnN0IGNhbkFkZFJlbW92ZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5BZGRSZW1vdmVDaGVja2JveFwiKTtcbiAgICBncmFwaExheW91dFRvZ2dsZTEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrR3JhcGhMYXlvdXRGb3JjZURpcmVjdCk7XG4gICAgZ3JhcGhMYXlvdXRUb2dnbGUyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0dyYXBoTGF5b3V0Rml4ZWQpO1xuICAgIGRyYXdFZGdlVG9nZ2xlMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tFZGdlRHJhd2luZ1N0cmFpZ2h0TGluZSk7XG4gICAgZHJhd0VkZ2VUb2dnbGUyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0VkZ2VEcmF3aW5nQmV6aWVyQ3VydmUpO1xuICAgIGNhblRyYW5zRm9ybUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2FuVHJhbnNGb3JtKTtcbiAgICBjYW5BZGRSZW1vdmVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNhbkFkZFJlbW92ZSk7XG4gICAgLy8g44Kw44Op44OV44Os44Kk44Ki44Km44OI44Gu5Yid5pyf5YCk44Gv44CB5Yqb5oyH5ZCR44Go44GZ44KLXG4gICAgbGV0IGdyYXBoTGF5b3V0TW9kZSA9IEdyYXBoTGF5b3V0RW51bS5Gb3JjZURpcmVjdDtcbiAgICAvLyDjgrDjg6njg5Xjg6zjgqTjgqLjgqbjg4jjg4jjgrDjg6vjg5zjgr/jg7PjgafjgIHlipvmjIflkJHjgYzpgbjmip7jgZXjgozjgZ/mmYLjga7lh6bnkIZcbiAgICBmdW5jdGlvbiBjbGlja0dyYXBoTGF5b3V0Rm9yY2VEaXJlY3QoKSB7XG4gICAgICAgIGdyYXBoTGF5b3V0TW9kZSA9IEdyYXBoTGF5b3V0RW51bS5Gb3JjZURpcmVjdDtcbiAgICAgICAgLy8g44Kq44OW44K444Kn44Kv44OI6YWN572u44Oi44O844OJXG4gICAgICAgIGdyYXBoTGF5b3V0VG9nZ2xlMS50ZXh0Q29udGVudCA9IGdyYXBoTGF5b3V0TW9kZTtcbiAgICAgICAgZ3JhcGhMYXlvdXRUb2dnbGUxLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGdyYXBoTGF5b3V0VG9nZ2xlMi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBncmFwaE1hbmFnZXIuc2V0R3JhcGhMYXlvdXQoZ3JhcGhMYXlvdXRNb2RlKTtcbiAgICAgICAgLy8g6L6644Gu5o+P55S744Oi44O844OJXG4gICAgICAgIGRyYXdFZGdlVG9nZ2xlMS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBkcmF3RWRnZVRvZ2dsZTEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZHJhd0VkZ2VUb2dnbGUyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZHJhd0VkZ2VUb2dnbGUyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGdyYXBoTWFuYWdlci5zZXRFZGdlRHJhd2luZyhFZGdlRHJhd2luZ0VudW0uc3RyYWlnaHRMaW5lKTtcbiAgICAgICAgLy8g44Kq44OW44K444Kn44Kv44OI5pON5L2cXG4gICAgICAgIGNhblRyYW5zRm9ybUNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBjYW5UcmFuc0Zvcm1DaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGdyYXBoTWFuYWdlci5zZXRDYW5UcmFuc0Zvcm0oY2FuVHJhbnNGb3JtQ2hlY2tib3guY2hlY2tlZCk7XG4gICAgfVxuICAgIC8vIOOCsOODqeODleODrOOCpOOCouOCpuODiOODiOOCsOODq+ODnOOCv+ODs+OBp+OAgeWbuuWumuOBjOmBuOaKnuOBleOCjOOBn+aZguOBruWHpueQhlxuICAgIGZ1bmN0aW9uIGNsaWNrR3JhcGhMYXlvdXRGaXhlZCgpIHtcbiAgICAgICAgZ3JhcGhMYXlvdXRNb2RlID0gR3JhcGhMYXlvdXRFbnVtLkZpeGVkO1xuICAgICAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jphY3nva7jg6Ljg7zjg4lcbiAgICAgICAgZ3JhcGhMYXlvdXRUb2dnbGUyLnRleHRDb250ZW50ID0gZ3JhcGhMYXlvdXRNb2RlO1xuICAgICAgICBncmFwaExheW91dFRvZ2dsZTIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZ3JhcGhMYXlvdXRUb2dnbGUxLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGdyYXBoTWFuYWdlci5zZXRHcmFwaExheW91dChncmFwaExheW91dE1vZGUpO1xuICAgICAgICAvLyDovrrjga7mj4/nlLvjg6Ljg7zjg4lcbiAgICAgICAgZHJhd0VkZ2VUb2dnbGUxLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGRyYXdFZGdlVG9nZ2xlMi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBkcmF3RWRnZVRvZ2dsZTEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZHJhd0VkZ2VUb2dnbGUyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOaTjeS9nFxuICAgICAgICBjYW5UcmFuc0Zvcm1DaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyDovrrjga7mj4/nlLvjg4jjgrDjg6vjg5zjgr/jg7PjgafjgIHnm7Tnt5rjgYzpgbjmip7jgZXjgozjgZ/mmYLjga7lh6bnkIZcbiAgICBmdW5jdGlvbiBjbGlja0VkZ2VEcmF3aW5nU3RyYWlnaHRMaW5lKCkge1xuICAgICAgICBkcmF3RWRnZVRvZ2dsZTEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZHJhd0VkZ2VUb2dnbGUyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGdyYXBoTWFuYWdlci5zZXRFZGdlRHJhd2luZyhFZGdlRHJhd2luZ0VudW0uc3RyYWlnaHRMaW5lKTtcbiAgICB9XG4gICAgLy8g6L6644Gu5o+P55S744OI44Kw44Or44Oc44K/44Oz44Gn44CB55u057ea44GM6YG45oqe44GV44KM44Gf5pmC44Gu5Yem55CGXG4gICAgZnVuY3Rpb24gY2xpY2tFZGdlRHJhd2luZ0JlemllckN1cnZlKCkge1xuICAgICAgICBkcmF3RWRnZVRvZ2dsZTEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZHJhd0VkZ2VUb2dnbGUyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGdyYXBoTWFuYWdlci5zZXRFZGdlRHJhd2luZyhFZGdlRHJhd2luZ0VudW0uYmV6aWVyQ3VydmUpO1xuICAgIH1cbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7np7vli5XlpInlvaLlj6/lkKZcbiAgICBmdW5jdGlvbiBjYW5UcmFuc0Zvcm0oKSB7XG4gICAgICAgIGdyYXBoTWFuYWdlci5zZXRDYW5UcmFuc0Zvcm0oY2FuVHJhbnNGb3JtQ2hlY2tib3guY2hlY2tlZCk7XG4gICAgfVxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOBrui/veWKoOWJiumZpOWPr+WQplxuICAgIGZ1bmN0aW9uIGNhbkFkZFJlbW92ZSgpIHtcbiAgICAgICAgZ3JhcGhNYW5hZ2VyLnNldENhbkFkZFJlbW92ZShjYW5BZGRSZW1vdmVDaGVja2JveC5jaGVja2VkKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOODl+ODreODkeODhuOCo+OCqOODquOCoiAtIOODh+ODvOOCv+OBruWFpeWHuuWKm1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlQnV0dG9uXCIpO1xuICAgIGNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRCdXR0b25cIik7XG4gICAgY29uc3QgbG9hZEZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEZpbGVJbnB1dFwiKTtcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlKTtcbiAgICBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGxvYWRKc29uKTtcbiAgICBsb2FkRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgbG9hZCk7XG4gICAgLy8g5L+d5a2Y44Oc44K/44Oz44GM5oq85LiL44GV44KM44GfXG4gICAgZnVuY3Rpb24gc2F2ZShlKSB7XG4gICAgICAgIC8vIOODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGdyYXBoTWFuYWdlci5zYXZlVG9Kc29uKCk7XG4gICAgICAgIC8vIOODleOCoeOCpOODq+WQjVxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgKyAoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArIChcIjBcIiArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgKyBcIl9cIiArIChcIjBcIiArIGRhdGUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgKFwiMFwiICsgZGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArIChcIjBcIiArIGRhdGUuZ2V0U2Vjb25kcygpKS5zbGljZSgtMik7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gYGdyYXBoLWRhdGFfJHt0aW1lc3RhbXB9Lmpzb25gO1xuICAgICAgICAvLyDjg4Djgqbjg7Pjg63jg7zjg4lVUkxcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtqc29uRGF0YV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIC8vIOODquODs+OCr+OCkuODl+ODreOCsOODqeODoOeahOOBq+OCr+ODquODg+OCr+OBl+OBpuODgOOCpuODs+ODreODvOODieOCkuWun+ihjFxuICAgICAgICBhLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgICAgIC8vIOS9nOaIkOOBl+OBn1VSTOOCkuino+aUvlxuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgfVxuICAgIC8vIOODnOOCv+ODs+OBjOOCr+ODquODg+OCr+OBleOCjOOBn+OCieOAgeODleOCoeOCpOODq+WFpeWKm+OCkuODiOODquOCrOODvOOBmeOCi1xuICAgIGZ1bmN0aW9uIHVwbG9hZEpzb24oKSB7XG4gICAgICAgIGxvYWRGaWxlSW5wdXQuY2xpY2soKTtcbiAgICB9XG4gICAgLy8g44OV44Kh44Kk44Or44GM5YWl5Yqb44GV44KM44Gf44KJ44CB44Ot44O844OJ44GZ44KLXG4gICAgZnVuY3Rpb24gbG9hZChlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAvLyDjg5XjgqHjgqTjg6voqq3jgb/ovrzjgb/lvozjga7jgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6lcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyDoqq3jgb/ovrzjgpPjgaBKU09O44OH44O844K/44Gn44Kw44Op44OV44KS44Ot44O844OJXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoTWFuYWdlci5sb2FkRnJvbUpzb24oY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5lcnJvckFjdGlvbihcIkpTT07jg4fjg7zjgr/jga7jg63jg7zjg4nkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86IFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIOODleOCoeOCpOODq+iqreOBv+i+vOOBv+OCqOODqeODvOOBruODj+ODs+ODieODqVxuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgVXRpbHMuZXJyb3JBY3Rpb24oXCLjg5XjgqHjgqTjg6vjga7oqq3jgb/ovrzjgb/kuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgIJcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8g44OV44Kh44Kk44Or44KS44OG44Kt44K544OI44Go44GX44Gm6Kqt44G/6L6844KAXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICAgICAgICAgIC8vIOODleOCoeOCpOODq+WFpeWKm+OCkuODquOCu+ODg+ODiFxuICAgICAgICAgICAgbG9hZEZpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOWIneacn+WApOioreWumlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmdW5jdGlvbiBzZXRJbml0aWFsVmFsdWUoKSB7XG4gICAgICAgIHVuZG9CdXR0b24uZGlzYWJsZWQgPSAhZ3JhcGhNYW5hZ2VyLmNhblVuZG8oKTtcbiAgICAgICAgcmVkb0J1dHRvbi5kaXNhYmxlZCA9ICFncmFwaE1hbmFnZXIuY2FuUmVkbygpO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7jg4jjgrDjg6vjg5zjgr/jg7NcbiAgICAgICAgY2xpY2tEZWdyZWVBcnJheSgpO1xuICAgICAgICAvLyDooajnpLrliIfjgormm7/jgYjjga7jg4Hjgqfjg4Pjgq/jg5zjg4Pjgq/jgrlcbiAgICAgICAgc2hvd0luZGV4Q2hlY2tib3guY2hlY2tlZCA9IGdyYXBoTWFuYWdlci5pc1Nob3dJbmRleCgpO1xuICAgICAgICBzaG93RGVncmVlQ2hlY2tib3guY2hlY2tlZCA9IGdyYXBoTWFuYWdlci5pc1Nob3dEZWdyZWUoKTtcbiAgICAgICAgc2hvd0dyaWRDaGVja2JveC5jaGVja2VkID0gZ3JhcGhNYW5hZ2VyLmlzU2hvd0dyaWQoKTtcbiAgICAgICAgLy8g44Kq44OW44K444Kn44Kv44OI5pON5L2c44Gu44OB44Kn44OD44Kv44Oc44OD44Kv44K5XG4gICAgICAgIGNhblRyYW5zRm9ybUNoZWNrYm94LmNoZWNrZWQgPSBncmFwaE1hbmFnZXIuZ2V0Q2FuVHJhbnNGb3JtKCk7XG4gICAgICAgIGNhbkFkZFJlbW92ZUNoZWNrYm94LmNoZWNrZWQgPSBncmFwaE1hbmFnZXIuZ2V0Q2FuQWRkUmVtb3ZlKCk7XG4gICAgICAgIC8vIOOCsOODqeODleODrOOCpOOCouOCpuODiOOBruODiOOCsOODq+ODnOOCv+ODs1xuICAgICAgICBjbGlja0dyYXBoTGF5b3V0Rm9yY2VEaXJlY3QoKTtcbiAgICAgICAgLy8g5Yid5pyf44Kw44Op44OVXG4gICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IFwiMywgMywgMywgM1wiO1xuICAgICAgICBibHVyRGVncmVlU2VxdWVuY2UoKTtcbiAgICAgICAgYXBwbHlEZWdyZWVTZXF1ZW5jZSgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g44Oh44Kk44Oz5Yem55CGXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhcGhDYW52YXNcIik7XG4gICAgY29uc3QgZ3JhcGhNYW5hZ2VyID0gbmV3IEdyYXBoTWFuYWdlcihjYW52YXMsIHVwZGF0ZURlZ3JlZVNlcXVlbmNlLCB1cGRhdGVJbmZvKTtcbiAgICAvLyDliJ3mnJ/oqK3lrprlgKRcbiAgICBzZXRJbml0aWFsVmFsdWUoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==