var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop2 in b || (b = {}))
    if (__hasOwnProp.call(b, prop2))
      __defNormalProp(a, prop2, b[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target2 = {};
  for (var prop2 in source)
    if (__hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
      target2[prop2] = source[prop2];
  if (source != null && __getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop2) < 0 && __propIsEnum.call(source, prop2))
        target2[prop2] = source[prop2];
    }
  return target2;
};
import { r as registerInstance, c as createEvent, h } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { c as createCommonjsModule } from "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
function OrderedMap(content2) {
  this.content = content2;
}
OrderedMap.prototype = {
  constructor: OrderedMap,
  find: function(key) {
    for (var i = 0; i < this.content.length; i += 2)
      if (this.content[i] === key)
        return i;
    return -1;
  },
  get: function(key) {
    var found2 = this.find(key);
    return found2 == -1 ? void 0 : this.content[found2 + 1];
  },
  update: function(key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found2 = self.find(key), content2 = self.content.slice();
    if (found2 == -1) {
      content2.push(newKey || key, value);
    } else {
      content2[found2 + 1] = value;
      if (newKey)
        content2[found2] = newKey;
    }
    return new OrderedMap(content2);
  },
  remove: function(key) {
    var found2 = this.find(key);
    if (found2 == -1)
      return this;
    var content2 = this.content.slice();
    content2.splice(found2, 2);
    return new OrderedMap(content2);
  },
  addToStart: function(key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content));
  },
  addToEnd: function(key, value) {
    var content2 = this.remove(key).content.slice();
    content2.push(key, value);
    return new OrderedMap(content2);
  },
  addBefore: function(place, key, value) {
    var without = this.remove(key), content2 = without.content.slice();
    var found2 = without.find(place);
    content2.splice(found2 == -1 ? content2.length : found2, 0, key, value);
    return new OrderedMap(content2);
  },
  forEach: function(f) {
    for (var i = 0; i < this.content.length; i += 2)
      f(this.content[i], this.content[i + 1]);
  },
  prepend: function(map16) {
    map16 = OrderedMap.from(map16);
    if (!map16.size)
      return this;
    return new OrderedMap(map16.content.concat(this.subtract(map16).content));
  },
  append: function(map16) {
    map16 = OrderedMap.from(map16);
    if (!map16.size)
      return this;
    return new OrderedMap(this.subtract(map16).content.concat(map16.content));
  },
  subtract: function(map16) {
    var result2 = this;
    map16 = OrderedMap.from(map16);
    for (var i = 0; i < map16.content.length; i += 2)
      result2 = result2.remove(map16.content[i]);
    return result2;
  },
  get size() {
    return this.content.length >> 1;
  }
};
OrderedMap.from = function(value) {
  if (value instanceof OrderedMap)
    return value;
  var content2 = [];
  if (value)
    for (var prop2 in value)
      content2.push(prop2, value[prop2]);
  return new OrderedMap(content2);
};
var orderedmap = OrderedMap;
function findDiffStart(a, b, pos) {
  for (var i = 0; ; i++) {
    if (i == a.childCount || i == b.childCount) {
      return a.childCount == b.childCount ? null : pos;
    }
    var childA = a.child(i), childB = b.child(i);
    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }
    if (!childA.sameMarkup(childB)) {
      return pos;
    }
    if (childA.isText && childA.text != childB.text) {
      for (var j = 0; childA.text[j] == childB.text[j]; j++) {
        pos++;
      }
      return pos;
    }
    if (childA.content.size || childB.content.size) {
      var inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null) {
        return inner;
      }
    }
    pos += childA.nodeSize;
  }
}
function findDiffEnd(a, b, posA, posB) {
  for (var iA = a.childCount, iB = b.childCount; ; ) {
    if (iA == 0 || iB == 0) {
      return iA == iB ? null : { a: posA, b: posB };
    }
    var childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
    if (childA == childB) {
      posA -= size;
      posB -= size;
      continue;
    }
    if (!childA.sameMarkup(childB)) {
      return { a: posA, b: posB };
    }
    if (childA.isText && childA.text != childB.text) {
      var same = 0, minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }
      return { a: posA, b: posB };
    }
    if (childA.content.size || childB.content.size) {
      var inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner) {
        return inner;
      }
    }
    posA -= size;
    posB -= size;
  }
}
var Fragment = function Fragment2(content2, size) {
  this.content = content2;
  this.size = size || 0;
  if (size == null) {
    for (var i = 0; i < content2.length; i++) {
      this.size += content2[i].nodeSize;
    }
  }
};
var prototypeAccessors$5 = { firstChild: { configurable: true }, lastChild: { configurable: true }, childCount: { configurable: true } };
Fragment.prototype.nodesBetween = function nodesBetween(from4, to, f, nodeStart, parent) {
  if (nodeStart === void 0)
    nodeStart = 0;
  for (var i = 0, pos = 0; pos < to; i++) {
    var child3 = this.content[i], end2 = pos + child3.nodeSize;
    if (end2 > from4 && f(child3, nodeStart + pos, parent, i) !== false && child3.content.size) {
      var start3 = pos + 1;
      child3.nodesBetween(Math.max(0, from4 - start3), Math.min(child3.content.size, to - start3), f, nodeStart + start3);
    }
    pos = end2;
  }
};
Fragment.prototype.descendants = function descendants(f) {
  this.nodesBetween(0, this.size, f);
};
Fragment.prototype.textBetween = function textBetween(from4, to, blockSeparator, leafText) {
  var text6 = "", separated = true;
  this.nodesBetween(from4, to, function(node4, pos) {
    if (node4.isText) {
      text6 += node4.text.slice(Math.max(from4, pos) - pos, to - pos);
      separated = !blockSeparator;
    } else if (node4.isLeaf && leafText) {
      text6 += typeof leafText === "function" ? leafText(node4) : leafText;
      separated = !blockSeparator;
    } else if (!separated && node4.isBlock) {
      text6 += blockSeparator;
      separated = true;
    }
  }, 0);
  return text6;
};
Fragment.prototype.append = function append(other) {
  if (!other.size) {
    return this;
  }
  if (!this.size) {
    return other;
  }
  var last = this.lastChild, first2 = other.firstChild, content2 = this.content.slice(), i = 0;
  if (last.isText && last.sameMarkup(first2)) {
    content2[content2.length - 1] = last.withText(last.text + first2.text);
    i = 1;
  }
  for (; i < other.content.length; i++) {
    content2.push(other.content[i]);
  }
  return new Fragment(content2, this.size + other.size);
};
Fragment.prototype.cut = function cut(from4, to) {
  if (to == null) {
    to = this.size;
  }
  if (from4 == 0 && to == this.size) {
    return this;
  }
  var result2 = [], size = 0;
  if (to > from4) {
    for (var i = 0, pos = 0; pos < to; i++) {
      var child3 = this.content[i], end2 = pos + child3.nodeSize;
      if (end2 > from4) {
        if (pos < from4 || end2 > to) {
          if (child3.isText) {
            child3 = child3.cut(Math.max(0, from4 - pos), Math.min(child3.text.length, to - pos));
          } else {
            child3 = child3.cut(Math.max(0, from4 - pos - 1), Math.min(child3.content.size, to - pos - 1));
          }
        }
        result2.push(child3);
        size += child3.nodeSize;
      }
      pos = end2;
    }
  }
  return new Fragment(result2, size);
};
Fragment.prototype.cutByIndex = function cutByIndex(from4, to) {
  if (from4 == to) {
    return Fragment.empty;
  }
  if (from4 == 0 && to == this.content.length) {
    return this;
  }
  return new Fragment(this.content.slice(from4, to));
};
Fragment.prototype.replaceChild = function replaceChild(index2, node4) {
  var current = this.content[index2];
  if (current == node4) {
    return this;
  }
  var copy5 = this.content.slice();
  var size = this.size + node4.nodeSize - current.nodeSize;
  copy5[index2] = node4;
  return new Fragment(copy5, size);
};
Fragment.prototype.addToStart = function addToStart(node4) {
  return new Fragment([node4].concat(this.content), this.size + node4.nodeSize);
};
Fragment.prototype.addToEnd = function addToEnd(node4) {
  return new Fragment(this.content.concat(node4), this.size + node4.nodeSize);
};
Fragment.prototype.eq = function eq(other) {
  if (this.content.length != other.content.length) {
    return false;
  }
  for (var i = 0; i < this.content.length; i++) {
    if (!this.content[i].eq(other.content[i])) {
      return false;
    }
  }
  return true;
};
prototypeAccessors$5.firstChild.get = function() {
  return this.content.length ? this.content[0] : null;
};
prototypeAccessors$5.lastChild.get = function() {
  return this.content.length ? this.content[this.content.length - 1] : null;
};
prototypeAccessors$5.childCount.get = function() {
  return this.content.length;
};
Fragment.prototype.child = function child(index2) {
  var found2 = this.content[index2];
  if (!found2) {
    throw new RangeError("Index " + index2 + " out of range for " + this);
  }
  return found2;
};
Fragment.prototype.maybeChild = function maybeChild(index2) {
  return this.content[index2];
};
Fragment.prototype.forEach = function forEach(f) {
  for (var i = 0, p = 0; i < this.content.length; i++) {
    var child3 = this.content[i];
    f(child3, p, i);
    p += child3.nodeSize;
  }
};
Fragment.prototype.findDiffStart = function findDiffStart$1(other, pos) {
  if (pos === void 0)
    pos = 0;
  return findDiffStart(this, other, pos);
};
Fragment.prototype.findDiffEnd = function findDiffEnd$1(other, pos, otherPos) {
  if (pos === void 0)
    pos = this.size;
  if (otherPos === void 0)
    otherPos = other.size;
  return findDiffEnd(this, other, pos, otherPos);
};
Fragment.prototype.findIndex = function findIndex(pos, round) {
  if (round === void 0)
    round = -1;
  if (pos == 0) {
    return retIndex(0, pos);
  }
  if (pos == this.size) {
    return retIndex(this.content.length, pos);
  }
  if (pos > this.size || pos < 0) {
    throw new RangeError("Position " + pos + " outside of fragment (" + this + ")");
  }
  for (var i = 0, curPos = 0; ; i++) {
    var cur = this.child(i), end2 = curPos + cur.nodeSize;
    if (end2 >= pos) {
      if (end2 == pos || round > 0) {
        return retIndex(i + 1, end2);
      }
      return retIndex(i, curPos);
    }
    curPos = end2;
  }
};
Fragment.prototype.toString = function toString() {
  return "<" + this.toStringInner() + ">";
};
Fragment.prototype.toStringInner = function toStringInner() {
  return this.content.join(", ");
};
Fragment.prototype.toJSON = function toJSON() {
  return this.content.length ? this.content.map(function(n) {
    return n.toJSON();
  }) : null;
};
Fragment.fromJSON = function fromJSON(schema2, value) {
  if (!value) {
    return Fragment.empty;
  }
  if (!Array.isArray(value)) {
    throw new RangeError("Invalid input for Fragment.fromJSON");
  }
  return new Fragment(value.map(schema2.nodeFromJSON));
};
Fragment.fromArray = function fromArray(array) {
  if (!array.length) {
    return Fragment.empty;
  }
  var joined, size = 0;
  for (var i = 0; i < array.length; i++) {
    var node4 = array[i];
    size += node4.nodeSize;
    if (i && node4.isText && array[i - 1].sameMarkup(node4)) {
      if (!joined) {
        joined = array.slice(0, i);
      }
      joined[joined.length - 1] = node4.withText(joined[joined.length - 1].text + node4.text);
    } else if (joined) {
      joined.push(node4);
    }
  }
  return new Fragment(joined || array, size);
};
Fragment.from = function from(nodes) {
  if (!nodes) {
    return Fragment.empty;
  }
  if (nodes instanceof Fragment) {
    return nodes;
  }
  if (Array.isArray(nodes)) {
    return this.fromArray(nodes);
  }
  if (nodes.attrs) {
    return new Fragment([nodes], nodes.nodeSize);
  }
  throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
};
Object.defineProperties(Fragment.prototype, prototypeAccessors$5);
var found = { index: 0, offset: 0 };
function retIndex(index2, offset2) {
  found.index = index2;
  found.offset = offset2;
  return found;
}
Fragment.empty = new Fragment([], 0);
function compareDeep(a, b) {
  if (a === b) {
    return true;
  }
  if (!(a && typeof a == "object") || !(b && typeof b == "object")) {
    return false;
  }
  var array = Array.isArray(a);
  if (Array.isArray(b) != array) {
    return false;
  }
  if (array) {
    if (a.length != b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!compareDeep(a[i], b[i])) {
        return false;
      }
    }
  } else {
    for (var p in a) {
      if (!(p in b) || !compareDeep(a[p], b[p])) {
        return false;
      }
    }
    for (var p$1 in b) {
      if (!(p$1 in a)) {
        return false;
      }
    }
  }
  return true;
}
var Mark$1 = function Mark(type, attrs2) {
  this.type = type;
  this.attrs = attrs2;
};
Mark$1.prototype.addToSet = function addToSet(set3) {
  var copy5, placed = false;
  for (var i = 0; i < set3.length; i++) {
    var other = set3[i];
    if (this.eq(other)) {
      return set3;
    }
    if (this.type.excludes(other.type)) {
      if (!copy5) {
        copy5 = set3.slice(0, i);
      }
    } else if (other.type.excludes(this.type)) {
      return set3;
    } else {
      if (!placed && other.type.rank > this.type.rank) {
        if (!copy5) {
          copy5 = set3.slice(0, i);
        }
        copy5.push(this);
        placed = true;
      }
      if (copy5) {
        copy5.push(other);
      }
    }
  }
  if (!copy5) {
    copy5 = set3.slice();
  }
  if (!placed) {
    copy5.push(this);
  }
  return copy5;
};
Mark$1.prototype.removeFromSet = function removeFromSet(set3) {
  for (var i = 0; i < set3.length; i++) {
    if (this.eq(set3[i])) {
      return set3.slice(0, i).concat(set3.slice(i + 1));
    }
  }
  return set3;
};
Mark$1.prototype.isInSet = function isInSet(set3) {
  for (var i = 0; i < set3.length; i++) {
    if (this.eq(set3[i])) {
      return true;
    }
  }
  return false;
};
Mark$1.prototype.eq = function eq2(other) {
  return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
};
Mark$1.prototype.toJSON = function toJSON2() {
  var obj = { type: this.type.name };
  for (var _ in this.attrs) {
    obj.attrs = this.attrs;
    break;
  }
  return obj;
};
Mark$1.fromJSON = function fromJSON2(schema2, json) {
  if (!json) {
    throw new RangeError("Invalid input for Mark.fromJSON");
  }
  var type = schema2.marks[json.type];
  if (!type) {
    throw new RangeError("There is no mark type " + json.type + " in this schema");
  }
  return type.create(json.attrs);
};
Mark$1.sameSet = function sameSet(a, b) {
  if (a == b) {
    return true;
  }
  if (a.length != b.length) {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (!a[i].eq(b[i])) {
      return false;
    }
  }
  return true;
};
Mark$1.setFrom = function setFrom(marks2) {
  if (!marks2 || marks2.length == 0) {
    return Mark$1.none;
  }
  if (marks2 instanceof Mark$1) {
    return [marks2];
  }
  var copy5 = marks2.slice();
  copy5.sort(function(a, b) {
    return a.type.rank - b.type.rank;
  });
  return copy5;
};
Mark$1.none = [];
function ReplaceError(message) {
  var err2 = Error.call(this, message);
  err2.__proto__ = ReplaceError.prototype;
  return err2;
}
ReplaceError.prototype = Object.create(Error.prototype);
ReplaceError.prototype.constructor = ReplaceError;
ReplaceError.prototype.name = "ReplaceError";
var Slice = function Slice2(content2, openStart, openEnd) {
  this.content = content2;
  this.openStart = openStart;
  this.openEnd = openEnd;
};
var prototypeAccessors$1$3 = { size: { configurable: true } };
prototypeAccessors$1$3.size.get = function() {
  return this.content.size - this.openStart - this.openEnd;
};
Slice.prototype.insertAt = function insertAt(pos, fragment) {
  var content2 = insertInto(this.content, pos + this.openStart, fragment, null);
  return content2 && new Slice(content2, this.openStart, this.openEnd);
};
Slice.prototype.removeBetween = function removeBetween(from4, to) {
  return new Slice(removeRange(this.content, from4 + this.openStart, to + this.openStart), this.openStart, this.openEnd);
};
Slice.prototype.eq = function eq3(other) {
  return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
};
Slice.prototype.toString = function toString2() {
  return this.content + "(" + this.openStart + "," + this.openEnd + ")";
};
Slice.prototype.toJSON = function toJSON3() {
  if (!this.content.size) {
    return null;
  }
  var json = { content: this.content.toJSON() };
  if (this.openStart > 0) {
    json.openStart = this.openStart;
  }
  if (this.openEnd > 0) {
    json.openEnd = this.openEnd;
  }
  return json;
};
Slice.fromJSON = function fromJSON3(schema2, json) {
  if (!json) {
    return Slice.empty;
  }
  var openStart = json.openStart || 0, openEnd = json.openEnd || 0;
  if (typeof openStart != "number" || typeof openEnd != "number") {
    throw new RangeError("Invalid input for Slice.fromJSON");
  }
  return new Slice(Fragment.fromJSON(schema2, json.content), openStart, openEnd);
};
Slice.maxOpen = function maxOpen(fragment, openIsolating) {
  if (openIsolating === void 0)
    openIsolating = true;
  var openStart = 0, openEnd = 0;
  for (var n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) {
    openStart++;
  }
  for (var n$1 = fragment.lastChild; n$1 && !n$1.isLeaf && (openIsolating || !n$1.type.spec.isolating); n$1 = n$1.lastChild) {
    openEnd++;
  }
  return new Slice(fragment, openStart, openEnd);
};
Object.defineProperties(Slice.prototype, prototypeAccessors$1$3);
function removeRange(content2, from4, to) {
  var ref = content2.findIndex(from4);
  var index2 = ref.index;
  var offset2 = ref.offset;
  var child3 = content2.maybeChild(index2);
  var ref$1 = content2.findIndex(to);
  var indexTo = ref$1.index;
  var offsetTo = ref$1.offset;
  if (offset2 == from4 || child3.isText) {
    if (offsetTo != to && !content2.child(indexTo).isText) {
      throw new RangeError("Removing non-flat range");
    }
    return content2.cut(0, from4).append(content2.cut(to));
  }
  if (index2 != indexTo) {
    throw new RangeError("Removing non-flat range");
  }
  return content2.replaceChild(index2, child3.copy(removeRange(child3.content, from4 - offset2 - 1, to - offset2 - 1)));
}
function insertInto(content2, dist, insert, parent) {
  var ref = content2.findIndex(dist);
  var index2 = ref.index;
  var offset2 = ref.offset;
  var child3 = content2.maybeChild(index2);
  if (offset2 == dist || child3.isText) {
    if (parent && !parent.canReplace(index2, index2, insert)) {
      return null;
    }
    return content2.cut(0, dist).append(insert).append(content2.cut(dist));
  }
  var inner = insertInto(child3.content, dist - offset2 - 1, insert);
  return inner && content2.replaceChild(index2, child3.copy(inner));
}
Slice.empty = new Slice(Fragment.empty, 0, 0);
function replace($from, $to, slice4) {
  if (slice4.openStart > $from.depth) {
    throw new ReplaceError("Inserted content deeper than insertion position");
  }
  if ($from.depth - slice4.openStart != $to.depth - slice4.openEnd) {
    throw new ReplaceError("Inconsistent open depths");
  }
  return replaceOuter($from, $to, slice4, 0);
}
function replaceOuter($from, $to, slice4, depth) {
  var index2 = $from.index(depth), node4 = $from.node(depth);
  if (index2 == $to.index(depth) && depth < $from.depth - slice4.openStart) {
    var inner = replaceOuter($from, $to, slice4, depth + 1);
    return node4.copy(node4.content.replaceChild(index2, inner));
  } else if (!slice4.content.size) {
    return close(node4, replaceTwoWay($from, $to, depth));
  } else if (!slice4.openStart && !slice4.openEnd && $from.depth == depth && $to.depth == depth) {
    var parent = $from.parent, content2 = parent.content;
    return close(parent, content2.cut(0, $from.parentOffset).append(slice4.content).append(content2.cut($to.parentOffset)));
  } else {
    var ref = prepareSliceForReplace(slice4, $from);
    var start3 = ref.start;
    var end2 = ref.end;
    return close(node4, replaceThreeWay($from, start3, end2, $to, depth));
  }
}
function checkJoin(main, sub2) {
  if (!sub2.type.compatibleContent(main.type)) {
    throw new ReplaceError("Cannot join " + sub2.type.name + " onto " + main.type.name);
  }
}
function joinable$1($before, $after, depth) {
  var node4 = $before.node(depth);
  checkJoin(node4, $after.node(depth));
  return node4;
}
function addNode(child3, target2) {
  var last = target2.length - 1;
  if (last >= 0 && child3.isText && child3.sameMarkup(target2[last])) {
    target2[last] = child3.withText(target2[last].text + child3.text);
  } else {
    target2.push(child3);
  }
}
function addRange($start, $end, depth, target2) {
  var node4 = ($end || $start).node(depth);
  var startIndex2 = 0, endIndex2 = $end ? $end.index(depth) : node4.childCount;
  if ($start) {
    startIndex2 = $start.index(depth);
    if ($start.depth > depth) {
      startIndex2++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target2);
      startIndex2++;
    }
  }
  for (var i = startIndex2; i < endIndex2; i++) {
    addNode(node4.child(i), target2);
  }
  if ($end && $end.depth == depth && $end.textOffset) {
    addNode($end.nodeBefore, target2);
  }
}
function close(node4, content2) {
  if (!node4.type.validContent(content2)) {
    throw new ReplaceError("Invalid content for node " + node4.type.name);
  }
  return node4.copy(content2);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
  var openStart = $from.depth > depth && joinable$1($from, $start, depth + 1);
  var openEnd = $to.depth > depth && joinable$1($end, $to, depth + 1);
  var content2 = [];
  addRange(null, $from, depth, content2);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content2);
  } else {
    if (openStart) {
      addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content2);
    }
    addRange($start, $end, depth, content2);
    if (openEnd) {
      addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content2);
    }
  }
  addRange($to, null, depth, content2);
  return new Fragment(content2);
}
function replaceTwoWay($from, $to, depth) {
  var content2 = [];
  addRange(null, $from, depth, content2);
  if ($from.depth > depth) {
    var type = joinable$1($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content2);
  }
  addRange($to, null, depth, content2);
  return new Fragment(content2);
}
function prepareSliceForReplace(slice4, $along) {
  var extra = $along.depth - slice4.openStart, parent = $along.node(extra);
  var node4 = parent.copy(slice4.content);
  for (var i = extra - 1; i >= 0; i--) {
    node4 = $along.node(i).copy(Fragment.from(node4));
  }
  return {
    start: node4.resolveNoCache(slice4.openStart + extra),
    end: node4.resolveNoCache(node4.content.size - slice4.openEnd - extra)
  };
}
var ResolvedPos = function ResolvedPos2(pos, path, parentOffset) {
  this.pos = pos;
  this.path = path;
  this.depth = path.length / 3 - 1;
  this.parentOffset = parentOffset;
};
var prototypeAccessors$2$1 = { parent: { configurable: true }, doc: { configurable: true }, textOffset: { configurable: true }, nodeAfter: { configurable: true }, nodeBefore: { configurable: true } };
ResolvedPos.prototype.resolveDepth = function resolveDepth(val) {
  if (val == null) {
    return this.depth;
  }
  if (val < 0) {
    return this.depth + val;
  }
  return val;
};
prototypeAccessors$2$1.parent.get = function() {
  return this.node(this.depth);
};
prototypeAccessors$2$1.doc.get = function() {
  return this.node(0);
};
ResolvedPos.prototype.node = function node(depth) {
  return this.path[this.resolveDepth(depth) * 3];
};
ResolvedPos.prototype.index = function index(depth) {
  return this.path[this.resolveDepth(depth) * 3 + 1];
};
ResolvedPos.prototype.indexAfter = function indexAfter(depth) {
  depth = this.resolveDepth(depth);
  return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
};
ResolvedPos.prototype.start = function start(depth) {
  depth = this.resolveDepth(depth);
  return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
};
ResolvedPos.prototype.end = function end(depth) {
  depth = this.resolveDepth(depth);
  return this.start(depth) + this.node(depth).content.size;
};
ResolvedPos.prototype.before = function before(depth) {
  depth = this.resolveDepth(depth);
  if (!depth) {
    throw new RangeError("There is no position before the top-level node");
  }
  return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
};
ResolvedPos.prototype.after = function after(depth) {
  depth = this.resolveDepth(depth);
  if (!depth) {
    throw new RangeError("There is no position after the top-level node");
  }
  return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
};
prototypeAccessors$2$1.textOffset.get = function() {
  return this.pos - this.path[this.path.length - 1];
};
prototypeAccessors$2$1.nodeAfter.get = function() {
  var parent = this.parent, index2 = this.index(this.depth);
  if (index2 == parent.childCount) {
    return null;
  }
  var dOff = this.pos - this.path[this.path.length - 1], child3 = parent.child(index2);
  return dOff ? parent.child(index2).cut(dOff) : child3;
};
prototypeAccessors$2$1.nodeBefore.get = function() {
  var index2 = this.index(this.depth);
  var dOff = this.pos - this.path[this.path.length - 1];
  if (dOff) {
    return this.parent.child(index2).cut(0, dOff);
  }
  return index2 == 0 ? null : this.parent.child(index2 - 1);
};
ResolvedPos.prototype.posAtIndex = function posAtIndex(index2, depth) {
  depth = this.resolveDepth(depth);
  var node4 = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
  for (var i = 0; i < index2; i++) {
    pos += node4.child(i).nodeSize;
  }
  return pos;
};
ResolvedPos.prototype.marks = function marks() {
  var parent = this.parent, index2 = this.index();
  if (parent.content.size == 0) {
    return Mark$1.none;
  }
  if (this.textOffset) {
    return parent.child(index2).marks;
  }
  var main = parent.maybeChild(index2 - 1), other = parent.maybeChild(index2);
  if (!main) {
    var tmp = main;
    main = other;
    other = tmp;
  }
  var marks2 = main.marks;
  for (var i = 0; i < marks2.length; i++) {
    if (marks2[i].type.spec.inclusive === false && (!other || !marks2[i].isInSet(other.marks))) {
      marks2 = marks2[i--].removeFromSet(marks2);
    }
  }
  return marks2;
};
ResolvedPos.prototype.marksAcross = function marksAcross($end) {
  var after2 = this.parent.maybeChild(this.index());
  if (!after2 || !after2.isInline) {
    return null;
  }
  var marks2 = after2.marks, next = $end.parent.maybeChild($end.index());
  for (var i = 0; i < marks2.length; i++) {
    if (marks2[i].type.spec.inclusive === false && (!next || !marks2[i].isInSet(next.marks))) {
      marks2 = marks2[i--].removeFromSet(marks2);
    }
  }
  return marks2;
};
ResolvedPos.prototype.sharedDepth = function sharedDepth(pos) {
  for (var depth = this.depth; depth > 0; depth--) {
    if (this.start(depth) <= pos && this.end(depth) >= pos) {
      return depth;
    }
  }
  return 0;
};
ResolvedPos.prototype.blockRange = function blockRange(other, pred) {
  if (other === void 0)
    other = this;
  if (other.pos < this.pos) {
    return other.blockRange(this);
  }
  for (var d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--) {
    if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) {
      return new NodeRange(this, other, d);
    }
  }
};
ResolvedPos.prototype.sameParent = function sameParent(other) {
  return this.pos - this.parentOffset == other.pos - other.parentOffset;
};
ResolvedPos.prototype.max = function max(other) {
  return other.pos > this.pos ? other : this;
};
ResolvedPos.prototype.min = function min(other) {
  return other.pos < this.pos ? other : this;
};
ResolvedPos.prototype.toString = function toString3() {
  var str = "";
  for (var i = 1; i <= this.depth; i++) {
    str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
  }
  return str + ":" + this.parentOffset;
};
ResolvedPos.resolve = function resolve(doc2, pos) {
  if (!(pos >= 0 && pos <= doc2.content.size)) {
    throw new RangeError("Position " + pos + " out of range");
  }
  var path = [];
  var start3 = 0, parentOffset = pos;
  for (var node4 = doc2; ; ) {
    var ref = node4.content.findIndex(parentOffset);
    var index2 = ref.index;
    var offset2 = ref.offset;
    var rem = parentOffset - offset2;
    path.push(node4, index2, start3 + offset2);
    if (!rem) {
      break;
    }
    node4 = node4.child(index2);
    if (node4.isText) {
      break;
    }
    parentOffset = rem - 1;
    start3 += offset2 + 1;
  }
  return new ResolvedPos(pos, path, parentOffset);
};
ResolvedPos.resolveCached = function resolveCached(doc2, pos) {
  for (var i = 0; i < resolveCache.length; i++) {
    var cached = resolveCache[i];
    if (cached.pos == pos && cached.doc == doc2) {
      return cached;
    }
  }
  var result2 = resolveCache[resolveCachePos] = ResolvedPos.resolve(doc2, pos);
  resolveCachePos = (resolveCachePos + 1) % resolveCacheSize;
  return result2;
};
Object.defineProperties(ResolvedPos.prototype, prototypeAccessors$2$1);
var resolveCache = [], resolveCachePos = 0, resolveCacheSize = 12;
var NodeRange = function NodeRange2($from, $to, depth) {
  this.$from = $from;
  this.$to = $to;
  this.depth = depth;
};
var prototypeAccessors$1$1$1 = { start: { configurable: true }, end: { configurable: true }, parent: { configurable: true }, startIndex: { configurable: true }, endIndex: { configurable: true } };
prototypeAccessors$1$1$1.start.get = function() {
  return this.$from.before(this.depth + 1);
};
prototypeAccessors$1$1$1.end.get = function() {
  return this.$to.after(this.depth + 1);
};
prototypeAccessors$1$1$1.parent.get = function() {
  return this.$from.node(this.depth);
};
prototypeAccessors$1$1$1.startIndex.get = function() {
  return this.$from.index(this.depth);
};
prototypeAccessors$1$1$1.endIndex.get = function() {
  return this.$to.indexAfter(this.depth);
};
Object.defineProperties(NodeRange.prototype, prototypeAccessors$1$1$1);
var emptyAttrs = /* @__PURE__ */ Object.create(null);
var Node$1 = function Node(type, attrs2, content2, marks2) {
  this.type = type;
  this.attrs = attrs2;
  this.content = content2 || Fragment.empty;
  this.marks = marks2 || Mark$1.none;
};
var prototypeAccessors$3$1 = { nodeSize: { configurable: true }, childCount: { configurable: true }, textContent: { configurable: true }, firstChild: { configurable: true }, lastChild: { configurable: true }, isBlock: { configurable: true }, isTextblock: { configurable: true }, inlineContent: { configurable: true }, isInline: { configurable: true }, isText: { configurable: true }, isLeaf: { configurable: true }, isAtom: { configurable: true } };
prototypeAccessors$3$1.nodeSize.get = function() {
  return this.isLeaf ? 1 : 2 + this.content.size;
};
prototypeAccessors$3$1.childCount.get = function() {
  return this.content.childCount;
};
Node$1.prototype.child = function child2(index2) {
  return this.content.child(index2);
};
Node$1.prototype.maybeChild = function maybeChild2(index2) {
  return this.content.maybeChild(index2);
};
Node$1.prototype.forEach = function forEach2(f) {
  this.content.forEach(f);
};
Node$1.prototype.nodesBetween = function nodesBetween2(from4, to, f, startPos) {
  if (startPos === void 0)
    startPos = 0;
  this.content.nodesBetween(from4, to, f, startPos, this);
};
Node$1.prototype.descendants = function descendants2(f) {
  this.nodesBetween(0, this.content.size, f);
};
prototypeAccessors$3$1.textContent.get = function() {
  return this.textBetween(0, this.content.size, "");
};
Node$1.prototype.textBetween = function textBetween2(from4, to, blockSeparator, leafText) {
  return this.content.textBetween(from4, to, blockSeparator, leafText);
};
prototypeAccessors$3$1.firstChild.get = function() {
  return this.content.firstChild;
};
prototypeAccessors$3$1.lastChild.get = function() {
  return this.content.lastChild;
};
Node$1.prototype.eq = function eq4(other) {
  return this == other || this.sameMarkup(other) && this.content.eq(other.content);
};
Node$1.prototype.sameMarkup = function sameMarkup(other) {
  return this.hasMarkup(other.type, other.attrs, other.marks);
};
Node$1.prototype.hasMarkup = function hasMarkup(type, attrs2, marks2) {
  return this.type == type && compareDeep(this.attrs, attrs2 || type.defaultAttrs || emptyAttrs) && Mark$1.sameSet(this.marks, marks2 || Mark$1.none);
};
Node$1.prototype.copy = function copy(content2) {
  if (content2 === void 0)
    content2 = null;
  if (content2 == this.content) {
    return this;
  }
  return new this.constructor(this.type, this.attrs, content2, this.marks);
};
Node$1.prototype.mark = function mark(marks2) {
  return marks2 == this.marks ? this : new this.constructor(this.type, this.attrs, this.content, marks2);
};
Node$1.prototype.cut = function cut2(from4, to) {
  if (from4 == 0 && to == this.content.size) {
    return this;
  }
  return this.copy(this.content.cut(from4, to));
};
Node$1.prototype.slice = function slice(from4, to, includeParents) {
  if (to === void 0)
    to = this.content.size;
  if (includeParents === void 0)
    includeParents = false;
  if (from4 == to) {
    return Slice.empty;
  }
  var $from = this.resolve(from4), $to = this.resolve(to);
  var depth = includeParents ? 0 : $from.sharedDepth(to);
  var start3 = $from.start(depth), node4 = $from.node(depth);
  var content2 = node4.content.cut($from.pos - start3, $to.pos - start3);
  return new Slice(content2, $from.depth - depth, $to.depth - depth);
};
Node$1.prototype.replace = function replace$1(from4, to, slice4) {
  return replace(this.resolve(from4), this.resolve(to), slice4);
};
Node$1.prototype.nodeAt = function nodeAt(pos) {
  for (var node4 = this; ; ) {
    var ref = node4.content.findIndex(pos);
    var index2 = ref.index;
    var offset2 = ref.offset;
    node4 = node4.maybeChild(index2);
    if (!node4) {
      return null;
    }
    if (offset2 == pos || node4.isText) {
      return node4;
    }
    pos -= offset2 + 1;
  }
};
Node$1.prototype.childAfter = function childAfter(pos) {
  var ref = this.content.findIndex(pos);
  var index2 = ref.index;
  var offset2 = ref.offset;
  return { node: this.content.maybeChild(index2), index: index2, offset: offset2 };
};
Node$1.prototype.childBefore = function childBefore(pos) {
  if (pos == 0) {
    return { node: null, index: 0, offset: 0 };
  }
  var ref = this.content.findIndex(pos);
  var index2 = ref.index;
  var offset2 = ref.offset;
  if (offset2 < pos) {
    return { node: this.content.child(index2), index: index2, offset: offset2 };
  }
  var node4 = this.content.child(index2 - 1);
  return { node: node4, index: index2 - 1, offset: offset2 - node4.nodeSize };
};
Node$1.prototype.resolve = function resolve2(pos) {
  return ResolvedPos.resolveCached(this, pos);
};
Node$1.prototype.resolveNoCache = function resolveNoCache(pos) {
  return ResolvedPos.resolve(this, pos);
};
Node$1.prototype.rangeHasMark = function rangeHasMark(from4, to, type) {
  var found2 = false;
  if (to > from4) {
    this.nodesBetween(from4, to, function(node4) {
      if (type.isInSet(node4.marks)) {
        found2 = true;
      }
      return !found2;
    });
  }
  return found2;
};
prototypeAccessors$3$1.isBlock.get = function() {
  return this.type.isBlock;
};
prototypeAccessors$3$1.isTextblock.get = function() {
  return this.type.isTextblock;
};
prototypeAccessors$3$1.inlineContent.get = function() {
  return this.type.inlineContent;
};
prototypeAccessors$3$1.isInline.get = function() {
  return this.type.isInline;
};
prototypeAccessors$3$1.isText.get = function() {
  return this.type.isText;
};
prototypeAccessors$3$1.isLeaf.get = function() {
  return this.type.isLeaf;
};
prototypeAccessors$3$1.isAtom.get = function() {
  return this.type.isAtom;
};
Node$1.prototype.toString = function toString4() {
  if (this.type.spec.toDebugString) {
    return this.type.spec.toDebugString(this);
  }
  var name = this.type.name;
  if (this.content.size) {
    name += "(" + this.content.toStringInner() + ")";
  }
  return wrapMarks(this.marks, name);
};
Node$1.prototype.contentMatchAt = function contentMatchAt(index2) {
  var match2 = this.type.contentMatch.matchFragment(this.content, 0, index2);
  if (!match2) {
    throw new Error("Called contentMatchAt on a node with invalid content");
  }
  return match2;
};
Node$1.prototype.canReplace = function canReplace(from4, to, replacement, start3, end2) {
  if (replacement === void 0)
    replacement = Fragment.empty;
  if (start3 === void 0)
    start3 = 0;
  if (end2 === void 0)
    end2 = replacement.childCount;
  var one = this.contentMatchAt(from4).matchFragment(replacement, start3, end2);
  var two = one && one.matchFragment(this.content, to);
  if (!two || !two.validEnd) {
    return false;
  }
  for (var i = start3; i < end2; i++) {
    if (!this.type.allowsMarks(replacement.child(i).marks)) {
      return false;
    }
  }
  return true;
};
Node$1.prototype.canReplaceWith = function canReplaceWith(from4, to, type, marks2) {
  if (marks2 && !this.type.allowsMarks(marks2)) {
    return false;
  }
  var start3 = this.contentMatchAt(from4).matchType(type);
  var end2 = start3 && start3.matchFragment(this.content, to);
  return end2 ? end2.validEnd : false;
};
Node$1.prototype.canAppend = function canAppend(other) {
  if (other.content.size) {
    return this.canReplace(this.childCount, this.childCount, other.content);
  } else {
    return this.type.compatibleContent(other.type);
  }
};
Node$1.prototype.check = function check() {
  if (!this.type.validContent(this.content)) {
    throw new RangeError("Invalid content for node " + this.type.name + ": " + this.content.toString().slice(0, 50));
  }
  var copy5 = Mark$1.none;
  for (var i = 0; i < this.marks.length; i++) {
    copy5 = this.marks[i].addToSet(copy5);
  }
  if (!Mark$1.sameSet(copy5, this.marks)) {
    throw new RangeError("Invalid collection of marks for node " + this.type.name + ": " + this.marks.map(function(m) {
      return m.type.name;
    }));
  }
  this.content.forEach(function(node4) {
    return node4.check();
  });
};
Node$1.prototype.toJSON = function toJSON4() {
  var obj = { type: this.type.name };
  for (var _ in this.attrs) {
    obj.attrs = this.attrs;
    break;
  }
  if (this.content.size) {
    obj.content = this.content.toJSON();
  }
  if (this.marks.length) {
    obj.marks = this.marks.map(function(n) {
      return n.toJSON();
    });
  }
  return obj;
};
Node$1.fromJSON = function fromJSON4(schema2, json) {
  if (!json) {
    throw new RangeError("Invalid input for Node.fromJSON");
  }
  var marks2 = null;
  if (json.marks) {
    if (!Array.isArray(json.marks)) {
      throw new RangeError("Invalid mark data for Node.fromJSON");
    }
    marks2 = json.marks.map(schema2.markFromJSON);
  }
  if (json.type == "text") {
    if (typeof json.text != "string") {
      throw new RangeError("Invalid text node in JSON");
    }
    return schema2.text(json.text, marks2);
  }
  var content2 = Fragment.fromJSON(schema2, json.content);
  return schema2.nodeType(json.type).create(json.attrs, content2, marks2);
};
Object.defineProperties(Node$1.prototype, prototypeAccessors$3$1);
var TextNode = /* @__PURE__ */ function(Node3) {
  function TextNode2(type, attrs2, content2, marks2) {
    Node3.call(this, type, attrs2, null, marks2);
    if (!content2) {
      throw new RangeError("Empty text nodes are not allowed");
    }
    this.text = content2;
  }
  if (Node3)
    TextNode2.__proto__ = Node3;
  TextNode2.prototype = Object.create(Node3 && Node3.prototype);
  TextNode2.prototype.constructor = TextNode2;
  var prototypeAccessors$12 = { textContent: { configurable: true }, nodeSize: { configurable: true } };
  TextNode2.prototype.toString = function toString8() {
    if (this.type.spec.toDebugString) {
      return this.type.spec.toDebugString(this);
    }
    return wrapMarks(this.marks, JSON.stringify(this.text));
  };
  prototypeAccessors$12.textContent.get = function() {
    return this.text;
  };
  TextNode2.prototype.textBetween = function textBetween3(from4, to) {
    return this.text.slice(from4, to);
  };
  prototypeAccessors$12.nodeSize.get = function() {
    return this.text.length;
  };
  TextNode2.prototype.mark = function mark3(marks2) {
    return marks2 == this.marks ? this : new TextNode2(this.type, this.attrs, this.text, marks2);
  };
  TextNode2.prototype.withText = function withText(text6) {
    if (text6 == this.text) {
      return this;
    }
    return new TextNode2(this.type, this.attrs, text6, this.marks);
  };
  TextNode2.prototype.cut = function cut3(from4, to) {
    if (from4 === void 0)
      from4 = 0;
    if (to === void 0)
      to = this.text.length;
    if (from4 == 0 && to == this.text.length) {
      return this;
    }
    return this.withText(this.text.slice(from4, to));
  };
  TextNode2.prototype.eq = function eq12(other) {
    return this.sameMarkup(other) && this.text == other.text;
  };
  TextNode2.prototype.toJSON = function toJSON7() {
    var base2 = Node3.prototype.toJSON.call(this);
    base2.text = this.text;
    return base2;
  };
  Object.defineProperties(TextNode2.prototype, prototypeAccessors$12);
  return TextNode2;
}(Node$1);
function wrapMarks(marks2, str) {
  for (var i = marks2.length - 1; i >= 0; i--) {
    str = marks2[i].type.name + "(" + str + ")";
  }
  return str;
}
var ContentMatch = function ContentMatch2(validEnd) {
  this.validEnd = validEnd;
  this.next = [];
  this.wrapCache = [];
};
var prototypeAccessors$4$1 = { inlineContent: { configurable: true }, defaultType: { configurable: true }, edgeCount: { configurable: true } };
ContentMatch.parse = function parse(string, nodeTypes) {
  var stream = new TokenStream(string, nodeTypes);
  if (stream.next == null) {
    return ContentMatch.empty;
  }
  var expr = parseExpr(stream);
  if (stream.next) {
    stream.err("Unexpected trailing text");
  }
  var match2 = dfa(nfa(expr));
  checkForDeadEnds(match2, stream);
  return match2;
};
ContentMatch.prototype.matchType = function matchType(type) {
  for (var i = 0; i < this.next.length; i += 2) {
    if (this.next[i] == type) {
      return this.next[i + 1];
    }
  }
  return null;
};
ContentMatch.prototype.matchFragment = function matchFragment(frag, start3, end2) {
  if (start3 === void 0)
    start3 = 0;
  if (end2 === void 0)
    end2 = frag.childCount;
  var cur = this;
  for (var i = start3; cur && i < end2; i++) {
    cur = cur.matchType(frag.child(i).type);
  }
  return cur;
};
prototypeAccessors$4$1.inlineContent.get = function() {
  var first2 = this.next[0];
  return first2 ? first2.isInline : false;
};
prototypeAccessors$4$1.defaultType.get = function() {
  for (var i = 0; i < this.next.length; i += 2) {
    var type = this.next[i];
    if (!(type.isText || type.hasRequiredAttrs())) {
      return type;
    }
  }
};
ContentMatch.prototype.compatible = function compatible(other) {
  for (var i = 0; i < this.next.length; i += 2) {
    for (var j = 0; j < other.next.length; j += 2) {
      if (this.next[i] == other.next[j]) {
        return true;
      }
    }
  }
  return false;
};
ContentMatch.prototype.fillBefore = function fillBefore(after2, toEnd, startIndex2) {
  if (toEnd === void 0)
    toEnd = false;
  if (startIndex2 === void 0)
    startIndex2 = 0;
  var seen = [this];
  function search(match2, types) {
    var finished = match2.matchFragment(after2, startIndex2);
    if (finished && (!toEnd || finished.validEnd)) {
      return Fragment.from(types.map(function(tp) {
        return tp.createAndFill();
      }));
    }
    for (var i = 0; i < match2.next.length; i += 2) {
      var type = match2.next[i], next = match2.next[i + 1];
      if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
        seen.push(next);
        var found2 = search(next, types.concat(type));
        if (found2) {
          return found2;
        }
      }
    }
  }
  return search(this, []);
};
ContentMatch.prototype.findWrapping = function findWrapping(target2) {
  for (var i = 0; i < this.wrapCache.length; i += 2) {
    if (this.wrapCache[i] == target2) {
      return this.wrapCache[i + 1];
    }
  }
  var computed = this.computeWrapping(target2);
  this.wrapCache.push(target2, computed);
  return computed;
};
ContentMatch.prototype.computeWrapping = function computeWrapping(target2) {
  var seen = /* @__PURE__ */ Object.create(null), active = [{ match: this, type: null, via: null }];
  while (active.length) {
    var current = active.shift(), match2 = current.match;
    if (match2.matchType(target2)) {
      var result2 = [];
      for (var obj = current; obj.type; obj = obj.via) {
        result2.push(obj.type);
      }
      return result2.reverse();
    }
    for (var i = 0; i < match2.next.length; i += 2) {
      var type = match2.next[i];
      if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || match2.next[i + 1].validEnd)) {
        active.push({ match: type.contentMatch, type, via: current });
        seen[type.name] = true;
      }
    }
  }
};
prototypeAccessors$4$1.edgeCount.get = function() {
  return this.next.length >> 1;
};
ContentMatch.prototype.edge = function edge(n) {
  var i = n << 1;
  if (i >= this.next.length) {
    throw new RangeError("There's no " + n + "th edge in this content match");
  }
  return { type: this.next[i], next: this.next[i + 1] };
};
ContentMatch.prototype.toString = function toString5() {
  var seen = [];
  function scan(m) {
    seen.push(m);
    for (var i = 1; i < m.next.length; i += 2) {
      if (seen.indexOf(m.next[i]) == -1) {
        scan(m.next[i]);
      }
    }
  }
  scan(this);
  return seen.map(function(m, i) {
    var out = i + (m.validEnd ? "*" : " ") + " ";
    for (var i$1 = 0; i$1 < m.next.length; i$1 += 2) {
      out += (i$1 ? ", " : "") + m.next[i$1].name + "->" + seen.indexOf(m.next[i$1 + 1]);
    }
    return out;
  }).join("\n");
};
Object.defineProperties(ContentMatch.prototype, prototypeAccessors$4$1);
ContentMatch.empty = new ContentMatch(true);
var TokenStream = function TokenStream2(string, nodeTypes) {
  this.string = string;
  this.nodeTypes = nodeTypes;
  this.inline = null;
  this.pos = 0;
  this.tokens = string.split(/\s*(?=\b|\W|$)/);
  if (this.tokens[this.tokens.length - 1] == "") {
    this.tokens.pop();
  }
  if (this.tokens[0] == "") {
    this.tokens.shift();
  }
};
var prototypeAccessors$1$2$1 = { next: { configurable: true } };
prototypeAccessors$1$2$1.next.get = function() {
  return this.tokens[this.pos];
};
TokenStream.prototype.eat = function eat(tok) {
  return this.next == tok && (this.pos++ || true);
};
TokenStream.prototype.err = function err(str) {
  throw new SyntaxError(str + " (in content expression '" + this.string + "')");
};
Object.defineProperties(TokenStream.prototype, prototypeAccessors$1$2$1);
function parseExpr(stream) {
  var exprs = [];
  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));
  return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
}
function parseExprSeq(stream) {
  var exprs = [];
  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");
  return exprs.length == 1 ? exprs[0] : { type: "seq", exprs };
}
function parseExprSubscript(stream) {
  var expr = parseExprAtom(stream);
  for (; ; ) {
    if (stream.eat("+")) {
      expr = { type: "plus", expr };
    } else if (stream.eat("*")) {
      expr = { type: "star", expr };
    } else if (stream.eat("?")) {
      expr = { type: "opt", expr };
    } else if (stream.eat("{")) {
      expr = parseExprRange(stream, expr);
    } else {
      break;
    }
  }
  return expr;
}
function parseNum(stream) {
  if (/\D/.test(stream.next)) {
    stream.err("Expected number, got '" + stream.next + "'");
  }
  var result2 = Number(stream.next);
  stream.pos++;
  return result2;
}
function parseExprRange(stream, expr) {
  var min2 = parseNum(stream), max2 = min2;
  if (stream.eat(",")) {
    if (stream.next != "}") {
      max2 = parseNum(stream);
    } else {
      max2 = -1;
    }
  }
  if (!stream.eat("}")) {
    stream.err("Unclosed braced range");
  }
  return { type: "range", min: min2, max: max2, expr };
}
function resolveName(stream, name) {
  var types = stream.nodeTypes, type = types[name];
  if (type) {
    return [type];
  }
  var result2 = [];
  for (var typeName in types) {
    var type$1 = types[typeName];
    if (type$1.groups.indexOf(name) > -1) {
      result2.push(type$1);
    }
  }
  if (result2.length == 0) {
    stream.err("No node type or group '" + name + "' found");
  }
  return result2;
}
function parseExprAtom(stream) {
  if (stream.eat("(")) {
    var expr = parseExpr(stream);
    if (!stream.eat(")")) {
      stream.err("Missing closing paren");
    }
    return expr;
  } else if (!/\W/.test(stream.next)) {
    var exprs = resolveName(stream, stream.next).map(function(type) {
      if (stream.inline == null) {
        stream.inline = type.isInline;
      } else if (stream.inline != type.isInline) {
        stream.err("Mixing inline and block content");
      }
      return { type: "name", value: type };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}
function nfa(expr) {
  var nfa2 = [[]];
  connect(compile4(expr, 0), node4());
  return nfa2;
  function node4() {
    return nfa2.push([]) - 1;
  }
  function edge2(from4, to, term) {
    var edge3 = { term, to };
    nfa2[from4].push(edge3);
    return edge3;
  }
  function connect(edges, to) {
    edges.forEach(function(edge3) {
      return edge3.to = to;
    });
  }
  function compile4(expr2, from4) {
    if (expr2.type == "choice") {
      return expr2.exprs.reduce(function(out, expr3) {
        return out.concat(compile4(expr3, from4));
      }, []);
    } else if (expr2.type == "seq") {
      for (var i = 0; ; i++) {
        var next = compile4(expr2.exprs[i], from4);
        if (i == expr2.exprs.length - 1) {
          return next;
        }
        connect(next, from4 = node4());
      }
    } else if (expr2.type == "star") {
      var loop = node4();
      edge2(from4, loop);
      connect(compile4(expr2.expr, loop), loop);
      return [edge2(loop)];
    } else if (expr2.type == "plus") {
      var loop$1 = node4();
      connect(compile4(expr2.expr, from4), loop$1);
      connect(compile4(expr2.expr, loop$1), loop$1);
      return [edge2(loop$1)];
    } else if (expr2.type == "opt") {
      return [edge2(from4)].concat(compile4(expr2.expr, from4));
    } else if (expr2.type == "range") {
      var cur = from4;
      for (var i$1 = 0; i$1 < expr2.min; i$1++) {
        var next$1 = node4();
        connect(compile4(expr2.expr, cur), next$1);
        cur = next$1;
      }
      if (expr2.max == -1) {
        connect(compile4(expr2.expr, cur), cur);
      } else {
        for (var i$2 = expr2.min; i$2 < expr2.max; i$2++) {
          var next$2 = node4();
          edge2(cur, next$2);
          connect(compile4(expr2.expr, cur), next$2);
          cur = next$2;
        }
      }
      return [edge2(cur)];
    } else if (expr2.type == "name") {
      return [edge2(from4, null, expr2.value)];
    }
  }
}
function cmp(a, b) {
  return b - a;
}
function nullFrom(nfa2, node4) {
  var result2 = [];
  scan(node4);
  return result2.sort(cmp);
  function scan(node5) {
    var edges = nfa2[node5];
    if (edges.length == 1 && !edges[0].term) {
      return scan(edges[0].to);
    }
    result2.push(node5);
    for (var i = 0; i < edges.length; i++) {
      var ref = edges[i];
      var term = ref.term;
      var to = ref.to;
      if (!term && result2.indexOf(to) == -1) {
        scan(to);
      }
    }
  }
}
function dfa(nfa2) {
  var labeled = /* @__PURE__ */ Object.create(null);
  return explore(nullFrom(nfa2, 0));
  function explore(states) {
    var out = [];
    states.forEach(function(node4) {
      nfa2[node4].forEach(function(ref) {
        var term = ref.term;
        var to = ref.to;
        if (!term) {
          return;
        }
        var known = out.indexOf(term), set3 = known > -1 && out[known + 1];
        nullFrom(nfa2, to).forEach(function(node5) {
          if (!set3) {
            out.push(term, set3 = []);
          }
          if (set3.indexOf(node5) == -1) {
            set3.push(node5);
          }
        });
      });
    });
    var state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa2.length - 1) > -1);
    for (var i = 0; i < out.length; i += 2) {
      var states$1 = out[i + 1].sort(cmp);
      state.next.push(out[i], labeled[states$1.join(",")] || explore(states$1));
    }
    return state;
  }
}
function checkForDeadEnds(match2, stream) {
  for (var i = 0, work = [match2]; i < work.length; i++) {
    var state = work[i], dead = !state.validEnd, nodes = [];
    for (var j = 0; j < state.next.length; j += 2) {
      var node4 = state.next[j], next = state.next[j + 1];
      nodes.push(node4.name);
      if (dead && !(node4.isText || node4.hasRequiredAttrs())) {
        dead = false;
      }
      if (work.indexOf(next) == -1) {
        work.push(next);
      }
    }
    if (dead) {
      stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
  }
}
function defaultAttrs(attrs2) {
  var defaults2 = /* @__PURE__ */ Object.create(null);
  for (var attrName in attrs2) {
    var attr = attrs2[attrName];
    if (!attr.hasDefault) {
      return null;
    }
    defaults2[attrName] = attr.default;
  }
  return defaults2;
}
function computeAttrs(attrs2, value) {
  var built = /* @__PURE__ */ Object.create(null);
  for (var name in attrs2) {
    var given = value && value[name];
    if (given === void 0) {
      var attr = attrs2[name];
      if (attr.hasDefault) {
        given = attr.default;
      } else {
        throw new RangeError("No value supplied for attribute " + name);
      }
    }
    built[name] = given;
  }
  return built;
}
function initAttrs(attrs2) {
  var result2 = /* @__PURE__ */ Object.create(null);
  if (attrs2) {
    for (var name in attrs2) {
      result2[name] = new Attribute(attrs2[name]);
    }
  }
  return result2;
}
var NodeType$1 = function NodeType(name, schema2, spec) {
  this.name = name;
  this.schema = schema2;
  this.spec = spec;
  this.groups = spec.group ? spec.group.split(" ") : [];
  this.attrs = initAttrs(spec.attrs);
  this.defaultAttrs = defaultAttrs(this.attrs);
  this.contentMatch = null;
  this.markSet = null;
  this.inlineContent = null;
  this.isBlock = !(spec.inline || name == "text");
  this.isText = name == "text";
};
var prototypeAccessors$5$1 = { isInline: { configurable: true }, isTextblock: { configurable: true }, isLeaf: { configurable: true }, isAtom: { configurable: true }, whitespace: { configurable: true } };
prototypeAccessors$5$1.isInline.get = function() {
  return !this.isBlock;
};
prototypeAccessors$5$1.isTextblock.get = function() {
  return this.isBlock && this.inlineContent;
};
prototypeAccessors$5$1.isLeaf.get = function() {
  return this.contentMatch == ContentMatch.empty;
};
prototypeAccessors$5$1.isAtom.get = function() {
  return this.isLeaf || this.spec.atom;
};
prototypeAccessors$5$1.whitespace.get = function() {
  return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
};
NodeType$1.prototype.hasRequiredAttrs = function hasRequiredAttrs() {
  for (var n in this.attrs) {
    if (this.attrs[n].isRequired) {
      return true;
    }
  }
  return false;
};
NodeType$1.prototype.compatibleContent = function compatibleContent(other) {
  return this == other || this.contentMatch.compatible(other.contentMatch);
};
NodeType$1.prototype.computeAttrs = function computeAttrs$1(attrs2) {
  if (!attrs2 && this.defaultAttrs) {
    return this.defaultAttrs;
  } else {
    return computeAttrs(this.attrs, attrs2);
  }
};
NodeType$1.prototype.create = function create(attrs2, content2, marks2) {
  if (this.isText) {
    throw new Error("NodeType.create can't construct text nodes");
  }
  return new Node$1(this, this.computeAttrs(attrs2), Fragment.from(content2), Mark$1.setFrom(marks2));
};
NodeType$1.prototype.createChecked = function createChecked(attrs2, content2, marks2) {
  content2 = Fragment.from(content2);
  if (!this.validContent(content2)) {
    throw new RangeError("Invalid content for node " + this.name);
  }
  return new Node$1(this, this.computeAttrs(attrs2), content2, Mark$1.setFrom(marks2));
};
NodeType$1.prototype.createAndFill = function createAndFill(attrs2, content2, marks2) {
  attrs2 = this.computeAttrs(attrs2);
  content2 = Fragment.from(content2);
  if (content2.size) {
    var before2 = this.contentMatch.fillBefore(content2);
    if (!before2) {
      return null;
    }
    content2 = before2.append(content2);
  }
  var after2 = this.contentMatch.matchFragment(content2).fillBefore(Fragment.empty, true);
  if (!after2) {
    return null;
  }
  return new Node$1(this, attrs2, content2.append(after2), Mark$1.setFrom(marks2));
};
NodeType$1.prototype.validContent = function validContent(content2) {
  var result2 = this.contentMatch.matchFragment(content2);
  if (!result2 || !result2.validEnd) {
    return false;
  }
  for (var i = 0; i < content2.childCount; i++) {
    if (!this.allowsMarks(content2.child(i).marks)) {
      return false;
    }
  }
  return true;
};
NodeType$1.prototype.allowsMarkType = function allowsMarkType(markType) {
  return this.markSet == null || this.markSet.indexOf(markType) > -1;
};
NodeType$1.prototype.allowsMarks = function allowsMarks(marks2) {
  if (this.markSet == null) {
    return true;
  }
  for (var i = 0; i < marks2.length; i++) {
    if (!this.allowsMarkType(marks2[i].type)) {
      return false;
    }
  }
  return true;
};
NodeType$1.prototype.allowedMarks = function allowedMarks(marks2) {
  if (this.markSet == null) {
    return marks2;
  }
  var copy5;
  for (var i = 0; i < marks2.length; i++) {
    if (!this.allowsMarkType(marks2[i].type)) {
      if (!copy5) {
        copy5 = marks2.slice(0, i);
      }
    } else if (copy5) {
      copy5.push(marks2[i]);
    }
  }
  return !copy5 ? marks2 : copy5.length ? copy5 : Mark$1.empty;
};
NodeType$1.compile = function compile(nodes, schema2) {
  var result2 = /* @__PURE__ */ Object.create(null);
  nodes.forEach(function(name, spec) {
    return result2[name] = new NodeType$1(name, schema2, spec);
  });
  var topType = schema2.spec.topNode || "doc";
  if (!result2[topType]) {
    throw new RangeError("Schema is missing its top node type ('" + topType + "')");
  }
  if (!result2.text) {
    throw new RangeError("Every schema needs a 'text' type");
  }
  for (var _ in result2.text.attrs) {
    throw new RangeError("The text node type should not have attributes");
  }
  return result2;
};
Object.defineProperties(NodeType$1.prototype, prototypeAccessors$5$1);
var Attribute = function Attribute2(options) {
  this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
  this.default = options.default;
};
var prototypeAccessors$1$3$1 = { isRequired: { configurable: true } };
prototypeAccessors$1$3$1.isRequired.get = function() {
  return !this.hasDefault;
};
Object.defineProperties(Attribute.prototype, prototypeAccessors$1$3$1);
var MarkType = function MarkType2(name, rank, schema2, spec) {
  this.name = name;
  this.schema = schema2;
  this.spec = spec;
  this.attrs = initAttrs(spec.attrs);
  this.rank = rank;
  this.excluded = null;
  var defaults2 = defaultAttrs(this.attrs);
  this.instance = defaults2 && new Mark$1(this, defaults2);
};
MarkType.prototype.create = function create2(attrs2) {
  if (!attrs2 && this.instance) {
    return this.instance;
  }
  return new Mark$1(this, computeAttrs(this.attrs, attrs2));
};
MarkType.compile = function compile2(marks2, schema2) {
  var result2 = /* @__PURE__ */ Object.create(null), rank = 0;
  marks2.forEach(function(name, spec) {
    return result2[name] = new MarkType(name, rank++, schema2, spec);
  });
  return result2;
};
MarkType.prototype.removeFromSet = function removeFromSet2(set3) {
  for (var i = 0; i < set3.length; i++) {
    if (set3[i].type == this) {
      set3 = set3.slice(0, i).concat(set3.slice(i + 1));
      i--;
    }
  }
  return set3;
};
MarkType.prototype.isInSet = function isInSet2(set3) {
  for (var i = 0; i < set3.length; i++) {
    if (set3[i].type == this) {
      return set3[i];
    }
  }
};
MarkType.prototype.excludes = function excludes(other) {
  return this.excluded.indexOf(other) > -1;
};
var Schema = function Schema2(spec) {
  this.spec = {};
  for (var prop2 in spec) {
    this.spec[prop2] = spec[prop2];
  }
  this.spec.nodes = orderedmap.from(spec.nodes);
  this.spec.marks = orderedmap.from(spec.marks);
  this.nodes = NodeType$1.compile(this.spec.nodes, this);
  this.marks = MarkType.compile(this.spec.marks, this);
  var contentExprCache = /* @__PURE__ */ Object.create(null);
  for (var prop$1 in this.nodes) {
    if (prop$1 in this.marks) {
      throw new RangeError(prop$1 + " can not be both a node and a mark");
    }
    var type = this.nodes[prop$1], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
    type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
    type.inlineContent = type.contentMatch.inlineContent;
    type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
  }
  for (var prop$2 in this.marks) {
    var type$1 = this.marks[prop$2], excl2 = type$1.spec.excludes;
    type$1.excluded = excl2 == null ? [type$1] : excl2 == "" ? [] : gatherMarks(this, excl2.split(" "));
  }
  this.nodeFromJSON = this.nodeFromJSON.bind(this);
  this.markFromJSON = this.markFromJSON.bind(this);
  this.topNodeType = this.nodes[this.spec.topNode || "doc"];
  this.cached = /* @__PURE__ */ Object.create(null);
  this.cached.wrappings = /* @__PURE__ */ Object.create(null);
};
Schema.prototype.node = function node2(type, attrs2, content2, marks2) {
  if (typeof type == "string") {
    type = this.nodeType(type);
  } else if (!(type instanceof NodeType$1)) {
    throw new RangeError("Invalid node type: " + type);
  } else if (type.schema != this) {
    throw new RangeError("Node type from different schema used (" + type.name + ")");
  }
  return type.createChecked(attrs2, content2, marks2);
};
Schema.prototype.text = function text(text$12, marks2) {
  var type = this.nodes.text;
  return new TextNode(type, type.defaultAttrs, text$12, Mark$1.setFrom(marks2));
};
Schema.prototype.mark = function mark2(type, attrs2) {
  if (typeof type == "string") {
    type = this.marks[type];
  }
  return type.create(attrs2);
};
Schema.prototype.nodeFromJSON = function nodeFromJSON(json) {
  return Node$1.fromJSON(this, json);
};
Schema.prototype.markFromJSON = function markFromJSON(json) {
  return Mark$1.fromJSON(this, json);
};
Schema.prototype.nodeType = function nodeType(name) {
  var found2 = this.nodes[name];
  if (!found2) {
    throw new RangeError("Unknown node type: " + name);
  }
  return found2;
};
function gatherMarks(schema2, marks2) {
  var found2 = [];
  for (var i = 0; i < marks2.length; i++) {
    var name = marks2[i], mark3 = schema2.marks[name], ok2 = mark3;
    if (mark3) {
      found2.push(mark3);
    } else {
      for (var prop2 in schema2.marks) {
        var mark$1 = schema2.marks[prop2];
        if (name == "_" || mark$1.spec.group && mark$1.spec.group.split(" ").indexOf(name) > -1) {
          found2.push(ok2 = mark$1);
        }
      }
    }
    if (!ok2) {
      throw new SyntaxError("Unknown mark type: '" + marks2[i] + "'");
    }
  }
  return found2;
}
var DOMParser = function DOMParser2(schema2, rules) {
  var this$1$1 = this;
  this.schema = schema2;
  this.rules = rules;
  this.tags = [];
  this.styles = [];
  rules.forEach(function(rule) {
    if (rule.tag) {
      this$1$1.tags.push(rule);
    } else if (rule.style) {
      this$1$1.styles.push(rule);
    }
  });
  this.normalizeLists = !this.tags.some(function(r) {
    if (!/^(ul|ol)\b/.test(r.tag) || !r.node) {
      return false;
    }
    var node4 = schema2.nodes[r.node];
    return node4.contentMatch.matchType(node4);
  });
};
DOMParser.prototype.parse = function parse2(dom, options) {
  if (options === void 0)
    options = {};
  var context = new ParseContext(this, options, false);
  context.addAll(dom, null, options.from, options.to);
  return context.finish();
};
DOMParser.prototype.parseSlice = function parseSlice(dom, options) {
  if (options === void 0)
    options = {};
  var context = new ParseContext(this, options, true);
  context.addAll(dom, null, options.from, options.to);
  return Slice.maxOpen(context.finish());
};
DOMParser.prototype.matchTag = function matchTag(dom, context, after2) {
  for (var i = after2 ? this.tags.indexOf(after2) + 1 : 0; i < this.tags.length; i++) {
    var rule = this.tags[i];
    if (matches(dom, rule.tag) && (rule.namespace === void 0 || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
      if (rule.getAttrs) {
        var result2 = rule.getAttrs(dom);
        if (result2 === false) {
          continue;
        }
        rule.attrs = result2;
      }
      return rule;
    }
  }
};
DOMParser.prototype.matchStyle = function matchStyle(prop2, value, context, after2) {
  for (var i = after2 ? this.styles.indexOf(after2) + 1 : 0; i < this.styles.length; i++) {
    var rule = this.styles[i];
    if (rule.style.indexOf(prop2) != 0 || rule.context && !context.matchesContext(rule.context) || rule.style.length > prop2.length && (rule.style.charCodeAt(prop2.length) != 61 || rule.style.slice(prop2.length + 1) != value)) {
      continue;
    }
    if (rule.getAttrs) {
      var result2 = rule.getAttrs(value);
      if (result2 === false) {
        continue;
      }
      rule.attrs = result2;
    }
    return rule;
  }
};
DOMParser.schemaRules = function schemaRules(schema2) {
  var result2 = [];
  function insert(rule) {
    var priority = rule.priority == null ? 50 : rule.priority, i = 0;
    for (; i < result2.length; i++) {
      var next = result2[i], nextPriority = next.priority == null ? 50 : next.priority;
      if (nextPriority < priority) {
        break;
      }
    }
    result2.splice(i, 0, rule);
  }
  var loop = function(name2) {
    var rules = schema2.marks[name2].spec.parseDOM;
    if (rules) {
      rules.forEach(function(rule) {
        insert(rule = copy$1(rule));
        rule.mark = name2;
      });
    }
  };
  for (var name in schema2.marks)
    loop(name);
  var loop$1 = function(name2) {
    var rules$1 = schema2.nodes[name$1].spec.parseDOM;
    if (rules$1) {
      rules$1.forEach(function(rule) {
        insert(rule = copy$1(rule));
        rule.node = name$1;
      });
    }
  };
  for (var name$1 in schema2.nodes)
    loop$1();
  return result2;
};
DOMParser.fromSchema = function fromSchema(schema2) {
  return schema2.cached.domParser || (schema2.cached.domParser = new DOMParser(schema2, DOMParser.schemaRules(schema2)));
};
var blockTags = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
};
var ignoreTags = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
};
var listTags = { ol: true, ul: true };
var OPT_PRESERVE_WS = 1, OPT_PRESERVE_WS_FULL = 2, OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base2) {
  if (preserveWhitespace != null) {
    return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
  }
  return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base2 & ~OPT_OPEN_LEFT;
}
var NodeContext = function NodeContext2(type, attrs2, marks2, pendingMarks, solid, match2, options) {
  this.type = type;
  this.attrs = attrs2;
  this.solid = solid;
  this.match = match2 || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  this.options = options;
  this.content = [];
  this.marks = marks2;
  this.activeMarks = Mark$1.none;
  this.pendingMarks = pendingMarks;
  this.stashMarks = [];
};
NodeContext.prototype.findWrapping = function findWrapping2(node4) {
  if (!this.match) {
    if (!this.type) {
      return [];
    }
    var fill = this.type.contentMatch.fillBefore(Fragment.from(node4));
    if (fill) {
      this.match = this.type.contentMatch.matchFragment(fill);
    } else {
      var start3 = this.type.contentMatch, wrap;
      if (wrap = start3.findWrapping(node4.type)) {
        this.match = start3;
        return wrap;
      } else {
        return null;
      }
    }
  }
  return this.match.findWrapping(node4.type);
};
NodeContext.prototype.finish = function finish(openEnd) {
  if (!(this.options & OPT_PRESERVE_WS)) {
    var last = this.content[this.content.length - 1], m;
    if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
      if (last.text.length == m[0].length) {
        this.content.pop();
      } else {
        this.content[this.content.length - 1] = last.withText(last.text.slice(0, last.text.length - m[0].length));
      }
    }
  }
  var content2 = Fragment.from(this.content);
  if (!openEnd && this.match) {
    content2 = content2.append(this.match.fillBefore(Fragment.empty, true));
  }
  return this.type ? this.type.create(this.attrs, content2, this.marks) : content2;
};
NodeContext.prototype.popFromStashMark = function popFromStashMark(mark3) {
  for (var i = this.stashMarks.length - 1; i >= 0; i--) {
    if (mark3.eq(this.stashMarks[i])) {
      return this.stashMarks.splice(i, 1)[0];
    }
  }
};
NodeContext.prototype.applyPending = function applyPending(nextType) {
  for (var i = 0, pending = this.pendingMarks; i < pending.length; i++) {
    var mark3 = pending[i];
    if ((this.type ? this.type.allowsMarkType(mark3.type) : markMayApply(mark3.type, nextType)) && !mark3.isInSet(this.activeMarks)) {
      this.activeMarks = mark3.addToSet(this.activeMarks);
      this.pendingMarks = mark3.removeFromSet(this.pendingMarks);
    }
  }
};
NodeContext.prototype.inlineContext = function inlineContext(node4) {
  if (this.type) {
    return this.type.inlineContent;
  }
  if (this.content.length) {
    return this.content[0].isInline;
  }
  return node4.parentNode && !blockTags.hasOwnProperty(node4.parentNode.nodeName.toLowerCase());
};
var ParseContext = function ParseContext2(parser, options, open3) {
  this.parser = parser;
  this.options = options;
  this.isOpen = open3;
  var topNode = options.topNode, topContext;
  var topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (open3 ? OPT_OPEN_LEFT : 0);
  if (topNode) {
    topContext = new NodeContext(topNode.type, topNode.attrs, Mark$1.none, Mark$1.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
  } else if (open3) {
    topContext = new NodeContext(null, null, Mark$1.none, Mark$1.none, true, null, topOptions);
  } else {
    topContext = new NodeContext(parser.schema.topNodeType, null, Mark$1.none, Mark$1.none, true, null, topOptions);
  }
  this.nodes = [topContext];
  this.open = 0;
  this.find = options.findPositions;
  this.needsBlock = false;
};
var prototypeAccessors$6 = { top: { configurable: true }, currentPos: { configurable: true } };
prototypeAccessors$6.top.get = function() {
  return this.nodes[this.open];
};
ParseContext.prototype.addDOM = function addDOM(dom) {
  if (dom.nodeType == 3) {
    this.addTextNode(dom);
  } else if (dom.nodeType == 1) {
    var style2 = dom.getAttribute("style");
    var marks2 = style2 ? this.readStyles(parseStyles(style2)) : null, top3 = this.top;
    if (marks2 != null) {
      for (var i = 0; i < marks2.length; i++) {
        this.addPendingMark(marks2[i]);
      }
    }
    this.addElement(dom);
    if (marks2 != null) {
      for (var i$1 = 0; i$1 < marks2.length; i$1++) {
        this.removePendingMark(marks2[i$1], top3);
      }
    }
  }
};
ParseContext.prototype.addTextNode = function addTextNode(dom) {
  var value = dom.nodeValue;
  var top3 = this.top;
  if (top3.options & OPT_PRESERVE_WS_FULL || top3.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
    if (!(top3.options & OPT_PRESERVE_WS)) {
      value = value.replace(/[ \t\r\n\u000c]+/g, " ");
      if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
        var nodeBefore = top3.content[top3.content.length - 1];
        var domNodeBefore = dom.previousSibling;
        if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == "BR" || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) {
          value = value.slice(1);
        }
      }
    } else if (!(top3.options & OPT_PRESERVE_WS_FULL)) {
      value = value.replace(/\r?\n|\r/g, " ");
    } else {
      value = value.replace(/\r\n?/g, "\n");
    }
    if (value) {
      this.insertNode(this.parser.schema.text(value));
    }
    this.findInText(dom);
  } else {
    this.findInside(dom);
  }
};
ParseContext.prototype.addElement = function addElement(dom, matchAfter) {
  var name = dom.nodeName.toLowerCase(), ruleID;
  if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) {
    normalizeList(dom);
  }
  var rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
  if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
    this.findInside(dom);
    this.ignoreFallback(dom);
  } else if (!rule || rule.skip || rule.closeParent) {
    if (rule && rule.closeParent) {
      this.open = Math.max(0, this.open - 1);
    } else if (rule && rule.skip.nodeType) {
      dom = rule.skip;
    }
    var sync2, top3 = this.top, oldNeedsBlock = this.needsBlock;
    if (blockTags.hasOwnProperty(name)) {
      sync2 = true;
      if (!top3.type) {
        this.needsBlock = true;
      }
    } else if (!dom.firstChild) {
      this.leafFallback(dom);
      return;
    }
    this.addAll(dom);
    if (sync2) {
      this.sync(top3);
    }
    this.needsBlock = oldNeedsBlock;
  } else {
    this.addElementByRule(dom, rule, rule.consuming === false ? ruleID : null);
  }
};
ParseContext.prototype.leafFallback = function leafFallback(dom) {
  if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) {
    this.addTextNode(dom.ownerDocument.createTextNode("\n"));
  }
};
ParseContext.prototype.ignoreFallback = function ignoreFallback(dom) {
  if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) {
    this.findPlace(this.parser.schema.text("-"));
  }
};
ParseContext.prototype.readStyles = function readStyles(styles) {
  var marks2 = Mark$1.none;
  style:
    for (var i = 0; i < styles.length; i += 2) {
      for (var after2 = null; ; ) {
        var rule = this.parser.matchStyle(styles[i], styles[i + 1], this, after2);
        if (!rule) {
          continue style;
        }
        if (rule.ignore) {
          return null;
        }
        marks2 = this.parser.schema.marks[rule.mark].create(rule.attrs).addToSet(marks2);
        if (rule.consuming === false) {
          after2 = rule;
        } else {
          break;
        }
      }
    }
  return marks2;
};
ParseContext.prototype.addElementByRule = function addElementByRule(dom, rule, continueAfter) {
  var this$1$1 = this;
  var sync2, nodeType2, markType, mark3;
  if (rule.node) {
    nodeType2 = this.parser.schema.nodes[rule.node];
    if (!nodeType2.isLeaf) {
      sync2 = this.enter(nodeType2, rule.attrs, rule.preserveWhitespace);
    } else if (!this.insertNode(nodeType2.create(rule.attrs))) {
      this.leafFallback(dom);
    }
  } else {
    markType = this.parser.schema.marks[rule.mark];
    mark3 = markType.create(rule.attrs);
    this.addPendingMark(mark3);
  }
  var startIn = this.top;
  if (nodeType2 && nodeType2.isLeaf) {
    this.findInside(dom);
  } else if (continueAfter) {
    this.addElement(dom, continueAfter);
  } else if (rule.getContent) {
    this.findInside(dom);
    rule.getContent(dom, this.parser.schema).forEach(function(node4) {
      return this$1$1.insertNode(node4);
    });
  } else {
    var contentDOM = rule.contentElement;
    if (typeof contentDOM == "string") {
      contentDOM = dom.querySelector(contentDOM);
    } else if (typeof contentDOM == "function") {
      contentDOM = contentDOM(dom);
    }
    if (!contentDOM) {
      contentDOM = dom;
    }
    this.findAround(dom, contentDOM, true);
    this.addAll(contentDOM, sync2);
  }
  if (sync2) {
    this.sync(startIn);
    this.open--;
  }
  if (mark3) {
    this.removePendingMark(mark3, startIn);
  }
};
ParseContext.prototype.addAll = function addAll(parent, sync2, startIndex2, endIndex2) {
  var index2 = startIndex2 || 0;
  for (var dom = startIndex2 ? parent.childNodes[startIndex2] : parent.firstChild, end2 = endIndex2 == null ? null : parent.childNodes[endIndex2]; dom != end2; dom = dom.nextSibling, ++index2) {
    this.findAtPoint(parent, index2);
    this.addDOM(dom);
    if (sync2 && blockTags.hasOwnProperty(dom.nodeName.toLowerCase())) {
      this.sync(sync2);
    }
  }
  this.findAtPoint(parent, index2);
};
ParseContext.prototype.findPlace = function findPlace(node4) {
  var route, sync2;
  for (var depth = this.open; depth >= 0; depth--) {
    var cx = this.nodes[depth];
    var found2 = cx.findWrapping(node4);
    if (found2 && (!route || route.length > found2.length)) {
      route = found2;
      sync2 = cx;
      if (!found2.length) {
        break;
      }
    }
    if (cx.solid) {
      break;
    }
  }
  if (!route) {
    return false;
  }
  this.sync(sync2);
  for (var i = 0; i < route.length; i++) {
    this.enterInner(route[i], null, false);
  }
  return true;
};
ParseContext.prototype.insertNode = function insertNode(node4) {
  if (node4.isInline && this.needsBlock && !this.top.type) {
    var block3 = this.textblockFromContext();
    if (block3) {
      this.enterInner(block3);
    }
  }
  if (this.findPlace(node4)) {
    this.closeExtra();
    var top3 = this.top;
    top3.applyPending(node4.type);
    if (top3.match) {
      top3.match = top3.match.matchType(node4.type);
    }
    var marks2 = top3.activeMarks;
    for (var i = 0; i < node4.marks.length; i++) {
      if (!top3.type || top3.type.allowsMarkType(node4.marks[i].type)) {
        marks2 = node4.marks[i].addToSet(marks2);
      }
    }
    top3.content.push(node4.mark(marks2));
    return true;
  }
  return false;
};
ParseContext.prototype.enter = function enter(type, attrs2, preserveWS) {
  var ok2 = this.findPlace(type.create(attrs2));
  if (ok2) {
    this.enterInner(type, attrs2, true, preserveWS);
  }
  return ok2;
};
ParseContext.prototype.enterInner = function enterInner(type, attrs2, solid, preserveWS) {
  this.closeExtra();
  var top3 = this.top;
  top3.applyPending(type);
  top3.match = top3.match && top3.match.matchType(type, attrs2);
  var options = wsOptionsFor(type, preserveWS, top3.options);
  if (top3.options & OPT_OPEN_LEFT && top3.content.length == 0) {
    options |= OPT_OPEN_LEFT;
  }
  this.nodes.push(new NodeContext(type, attrs2, top3.activeMarks, top3.pendingMarks, solid, null, options));
  this.open++;
};
ParseContext.prototype.closeExtra = function closeExtra(openEnd) {
  var i = this.nodes.length - 1;
  if (i > this.open) {
    for (; i > this.open; i--) {
      this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
    }
    this.nodes.length = this.open + 1;
  }
};
ParseContext.prototype.finish = function finish2() {
  this.open = 0;
  this.closeExtra(this.isOpen);
  return this.nodes[0].finish(this.isOpen || this.options.topOpen);
};
ParseContext.prototype.sync = function sync(to) {
  for (var i = this.open; i >= 0; i--) {
    if (this.nodes[i] == to) {
      this.open = i;
      return;
    }
  }
};
prototypeAccessors$6.currentPos.get = function() {
  this.closeExtra();
  var pos = 0;
  for (var i = this.open; i >= 0; i--) {
    var content2 = this.nodes[i].content;
    for (var j = content2.length - 1; j >= 0; j--) {
      pos += content2[j].nodeSize;
    }
    if (i) {
      pos++;
    }
  }
  return pos;
};
ParseContext.prototype.findAtPoint = function findAtPoint(parent, offset2) {
  if (this.find) {
    for (var i = 0; i < this.find.length; i++) {
      if (this.find[i].node == parent && this.find[i].offset == offset2) {
        this.find[i].pos = this.currentPos;
      }
    }
  }
};
ParseContext.prototype.findInside = function findInside(parent) {
  if (this.find) {
    for (var i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
        this.find[i].pos = this.currentPos;
      }
    }
  }
};
ParseContext.prototype.findAround = function findAround(parent, content2, before2) {
  if (parent != content2 && this.find) {
    for (var i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
        var pos = content2.compareDocumentPosition(this.find[i].node);
        if (pos & (before2 ? 2 : 4)) {
          this.find[i].pos = this.currentPos;
        }
      }
    }
  }
};
ParseContext.prototype.findInText = function findInText(textNode) {
  if (this.find) {
    for (var i = 0; i < this.find.length; i++) {
      if (this.find[i].node == textNode) {
        this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
      }
    }
  }
};
ParseContext.prototype.matchesContext = function matchesContext(context) {
  var this$1$1 = this;
  if (context.indexOf("|") > -1) {
    return context.split(/\s*\|\s*/).some(this.matchesContext, this);
  }
  var parts = context.split("/");
  var option = this.options.context;
  var useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
  var minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
  var match2 = function(i, depth) {
    for (; i >= 0; i--) {
      var part2 = parts[i];
      if (part2 == "") {
        if (i == parts.length - 1 || i == 0) {
          continue;
        }
        for (; depth >= minDepth; depth--) {
          if (match2(i - 1, depth)) {
            return true;
          }
        }
        return false;
      } else {
        var next = depth > 0 || depth == 0 && useRoot ? this$1$1.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
        if (!next || next.name != part2 && next.groups.indexOf(part2) == -1) {
          return false;
        }
        depth--;
      }
    }
    return true;
  };
  return match2(parts.length - 1, this.open);
};
ParseContext.prototype.textblockFromContext = function textblockFromContext() {
  var $context = this.options.context;
  if ($context) {
    for (var d = $context.depth; d >= 0; d--) {
      var deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
      if (deflt && deflt.isTextblock && deflt.defaultAttrs) {
        return deflt;
      }
    }
  }
  for (var name in this.parser.schema.nodes) {
    var type = this.parser.schema.nodes[name];
    if (type.isTextblock && type.defaultAttrs) {
      return type;
    }
  }
};
ParseContext.prototype.addPendingMark = function addPendingMark(mark3) {
  var found2 = findSameMarkInSet(mark3, this.top.pendingMarks);
  if (found2) {
    this.top.stashMarks.push(found2);
  }
  this.top.pendingMarks = mark3.addToSet(this.top.pendingMarks);
};
ParseContext.prototype.removePendingMark = function removePendingMark(mark3, upto) {
  for (var depth = this.open; depth >= 0; depth--) {
    var level = this.nodes[depth];
    var found2 = level.pendingMarks.lastIndexOf(mark3);
    if (found2 > -1) {
      level.pendingMarks = mark3.removeFromSet(level.pendingMarks);
    } else {
      level.activeMarks = mark3.removeFromSet(level.activeMarks);
      var stashMark = level.popFromStashMark(mark3);
      if (stashMark && level.type && level.type.allowsMarkType(stashMark.type)) {
        level.activeMarks = stashMark.addToSet(level.activeMarks);
      }
    }
    if (level == upto) {
      break;
    }
  }
};
Object.defineProperties(ParseContext.prototype, prototypeAccessors$6);
function normalizeList(dom) {
  for (var child3 = dom.firstChild, prevItem = null; child3; child3 = child3.nextSibling) {
    var name = child3.nodeType == 1 ? child3.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child3);
      child3 = prevItem;
    } else if (name == "li") {
      prevItem = child3;
    } else if (name) {
      prevItem = null;
    }
  }
}
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function parseStyles(style2) {
  var re2 = /\s*([\w-]+)\s*:\s*([^;]+)/g, m, result2 = [];
  while (m = re2.exec(style2)) {
    result2.push(m[1], m[2].trim());
  }
  return result2;
}
function copy$1(obj) {
  var copy5 = {};
  for (var prop2 in obj) {
    copy5[prop2] = obj[prop2];
  }
  return copy5;
}
function markMayApply(markType, nodeType2) {
  var nodes = nodeType2.schema.nodes;
  var loop = function(name2) {
    var parent = nodes[name2];
    if (!parent.allowsMarkType(markType)) {
      return;
    }
    var seen = [], scan = function(match2) {
      seen.push(match2);
      for (var i = 0; i < match2.edgeCount; i++) {
        var ref = match2.edge(i);
        var type = ref.type;
        var next = ref.next;
        if (type == nodeType2) {
          return true;
        }
        if (seen.indexOf(next) < 0 && scan(next)) {
          return true;
        }
      }
    };
    if (scan(parent.contentMatch)) {
      return { v: true };
    }
  };
  for (var name in nodes) {
    var returned = loop(name);
    if (returned)
      return returned.v;
  }
}
function findSameMarkInSet(mark3, set3) {
  for (var i = 0; i < set3.length; i++) {
    if (mark3.eq(set3[i])) {
      return set3[i];
    }
  }
}
var DOMSerializer = function DOMSerializer2(nodes, marks2) {
  this.nodes = nodes || {};
  this.marks = marks2 || {};
};
DOMSerializer.prototype.serializeFragment = function serializeFragment(fragment, options, target2) {
  var this$1$1 = this;
  if (options === void 0)
    options = {};
  if (!target2) {
    target2 = doc(options).createDocumentFragment();
  }
  var top3 = target2, active = null;
  fragment.forEach(function(node4) {
    if (active || node4.marks.length) {
      if (!active) {
        active = [];
      }
      var keep = 0, rendered = 0;
      while (keep < active.length && rendered < node4.marks.length) {
        var next = node4.marks[rendered];
        if (!this$1$1.marks[next.type.name]) {
          rendered++;
          continue;
        }
        if (!next.eq(active[keep]) || next.type.spec.spanning === false) {
          break;
        }
        keep += 2;
        rendered++;
      }
      while (keep < active.length) {
        top3 = active.pop();
        active.pop();
      }
      while (rendered < node4.marks.length) {
        var add3 = node4.marks[rendered++];
        var markDOM = this$1$1.serializeMark(add3, node4.isInline, options);
        if (markDOM) {
          active.push(add3, top3);
          top3.appendChild(markDOM.dom);
          top3 = markDOM.contentDOM || markDOM.dom;
        }
      }
    }
    top3.appendChild(this$1$1.serializeNodeInner(node4, options));
  });
  return target2;
};
DOMSerializer.prototype.serializeNodeInner = function serializeNodeInner(node4, options) {
  if (options === void 0)
    options = {};
  var ref = DOMSerializer.renderSpec(doc(options), this.nodes[node4.type.name](node4));
  var dom = ref.dom;
  var contentDOM = ref.contentDOM;
  if (contentDOM) {
    if (node4.isLeaf) {
      throw new RangeError("Content hole not allowed in a leaf node spec");
    }
    if (options.onContent) {
      options.onContent(node4, contentDOM, options);
    } else {
      this.serializeFragment(node4.content, options, contentDOM);
    }
  }
  return dom;
};
DOMSerializer.prototype.serializeNode = function serializeNode(node4, options) {
  if (options === void 0)
    options = {};
  var dom = this.serializeNodeInner(node4, options);
  for (var i = node4.marks.length - 1; i >= 0; i--) {
    var wrap = this.serializeMark(node4.marks[i], node4.isInline, options);
    if (wrap) {
      (wrap.contentDOM || wrap.dom).appendChild(dom);
      dom = wrap.dom;
    }
  }
  return dom;
};
DOMSerializer.prototype.serializeMark = function serializeMark(mark3, inline4, options) {
  if (options === void 0)
    options = {};
  var toDOM15 = this.marks[mark3.type.name];
  return toDOM15 && DOMSerializer.renderSpec(doc(options), toDOM15(mark3, inline4));
};
DOMSerializer.renderSpec = function renderSpec(doc2, structure, xmlNS) {
  if (xmlNS === void 0)
    xmlNS = null;
  if (typeof structure == "string") {
    return { dom: doc2.createTextNode(structure) };
  }
  if (structure.nodeType != null) {
    return { dom: structure };
  }
  if (structure.dom && structure.dom.nodeType != null) {
    return structure;
  }
  var tagName = structure[0], space = tagName.indexOf(" ");
  if (space > 0) {
    xmlNS = tagName.slice(0, space);
    tagName = tagName.slice(space + 1);
  }
  var contentDOM = null, dom = xmlNS ? doc2.createElementNS(xmlNS, tagName) : doc2.createElement(tagName);
  var attrs2 = structure[1], start3 = 1;
  if (attrs2 && typeof attrs2 == "object" && attrs2.nodeType == null && !Array.isArray(attrs2)) {
    start3 = 2;
    for (var name in attrs2) {
      if (attrs2[name] != null) {
        var space$1 = name.indexOf(" ");
        if (space$1 > 0) {
          dom.setAttributeNS(name.slice(0, space$1), name.slice(space$1 + 1), attrs2[name]);
        } else {
          dom.setAttribute(name, attrs2[name]);
        }
      }
    }
  }
  for (var i = start3; i < structure.length; i++) {
    var child3 = structure[i];
    if (child3 === 0) {
      if (i < structure.length - 1 || i > start3) {
        throw new RangeError("Content hole must be the only child of its parent node");
      }
      return { dom, contentDOM: dom };
    } else {
      var ref = DOMSerializer.renderSpec(doc2, child3, xmlNS);
      var inner = ref.dom;
      var innerContent = ref.contentDOM;
      dom.appendChild(inner);
      if (innerContent) {
        if (contentDOM) {
          throw new RangeError("Multiple content holes");
        }
        contentDOM = innerContent;
      }
    }
  }
  return { dom, contentDOM };
};
DOMSerializer.fromSchema = function fromSchema2(schema2) {
  return schema2.cached.domSerializer || (schema2.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema2), this.marksFromSchema(schema2)));
};
DOMSerializer.nodesFromSchema = function nodesFromSchema(schema2) {
  var result2 = gatherToDOM(schema2.nodes);
  if (!result2.text) {
    result2.text = function(node4) {
      return node4.text;
    };
  }
  return result2;
};
DOMSerializer.marksFromSchema = function marksFromSchema(schema2) {
  return gatherToDOM(schema2.marks);
};
function gatherToDOM(obj) {
  var result2 = {};
  for (var name in obj) {
    var toDOM15 = obj[name].spec.toDOM;
    if (toDOM15) {
      result2[name] = toDOM15;
    }
  }
  return result2;
}
function doc(options) {
  return options.document || window.document;
}
var lower16 = 65535;
var factor16 = Math.pow(2, 16);
function makeRecover(index2, offset2) {
  return index2 + offset2 * factor16;
}
function recoverIndex(value) {
  return value & lower16;
}
function recoverOffset(value) {
  return (value - (value & lower16)) / factor16;
}
var MapResult = function MapResult2(pos, deleted, recover2) {
  if (deleted === void 0)
    deleted = false;
  if (recover2 === void 0)
    recover2 = null;
  this.pos = pos;
  this.deleted = deleted;
  this.recover = recover2;
};
var StepMap = function StepMap2(ranges, inverted) {
  if (inverted === void 0)
    inverted = false;
  this.ranges = ranges;
  this.inverted = inverted;
};
StepMap.prototype.recover = function recover(value) {
  var diff = 0, index2 = recoverIndex(value);
  if (!this.inverted) {
    for (var i = 0; i < index2; i++) {
      diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    }
  }
  return this.ranges[index2 * 3] + diff + recoverOffset(value);
};
StepMap.prototype.mapResult = function mapResult(pos, assoc) {
  if (assoc === void 0)
    assoc = 1;
  return this._map(pos, assoc, false);
};
StepMap.prototype.map = function map(pos, assoc) {
  if (assoc === void 0)
    assoc = 1;
  return this._map(pos, assoc, true);
};
StepMap.prototype._map = function _map(pos, assoc, simple) {
  var diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0; i < this.ranges.length; i += 3) {
    var start3 = this.ranges[i] - (this.inverted ? diff : 0);
    if (start3 > pos) {
      break;
    }
    var oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end2 = start3 + oldSize;
    if (pos <= end2) {
      var side = !oldSize ? assoc : pos == start3 ? -1 : pos == end2 ? 1 : assoc;
      var result2 = start3 + diff + (side < 0 ? 0 : newSize);
      if (simple) {
        return result2;
      }
      var recover2 = pos == (assoc < 0 ? start3 : end2) ? null : makeRecover(i / 3, pos - start3);
      return new MapResult(result2, assoc < 0 ? pos != start3 : pos != end2, recover2);
    }
    diff += newSize - oldSize;
  }
  return simple ? pos + diff : new MapResult(pos + diff);
};
StepMap.prototype.touches = function touches(pos, recover2) {
  var diff = 0, index2 = recoverIndex(recover2);
  var oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0; i < this.ranges.length; i += 3) {
    var start3 = this.ranges[i] - (this.inverted ? diff : 0);
    if (start3 > pos) {
      break;
    }
    var oldSize = this.ranges[i + oldIndex], end2 = start3 + oldSize;
    if (pos <= end2 && i == index2 * 3) {
      return true;
    }
    diff += this.ranges[i + newIndex] - oldSize;
  }
  return false;
};
StepMap.prototype.forEach = function forEach3(f) {
  var oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0, diff = 0; i < this.ranges.length; i += 3) {
    var start3 = this.ranges[i], oldStart = start3 - (this.inverted ? diff : 0), newStart = start3 + (this.inverted ? 0 : diff);
    var oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
    f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
    diff += newSize - oldSize;
  }
};
StepMap.prototype.invert = function invert() {
  return new StepMap(this.ranges, !this.inverted);
};
StepMap.prototype.toString = function toString6() {
  return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
};
StepMap.offset = function offset(n) {
  return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
};
StepMap.empty = new StepMap([]);
var Mapping = function Mapping2(maps, mirror, from4, to) {
  this.maps = maps || [];
  this.from = from4 || 0;
  this.to = to == null ? this.maps.length : to;
  this.mirror = mirror;
};
Mapping.prototype.slice = function slice2(from4, to) {
  if (from4 === void 0)
    from4 = 0;
  if (to === void 0)
    to = this.maps.length;
  return new Mapping(this.maps, this.mirror, from4, to);
};
Mapping.prototype.copy = function copy2() {
  return new Mapping(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
};
Mapping.prototype.appendMap = function appendMap(map16, mirrors) {
  this.to = this.maps.push(map16);
  if (mirrors != null) {
    this.setMirror(this.maps.length - 1, mirrors);
  }
};
Mapping.prototype.appendMapping = function appendMapping(mapping) {
  for (var i = 0, startSize = this.maps.length; i < mapping.maps.length; i++) {
    var mirr = mapping.getMirror(i);
    this.appendMap(mapping.maps[i], mirr != null && mirr < i ? startSize + mirr : null);
  }
};
Mapping.prototype.getMirror = function getMirror(n) {
  if (this.mirror) {
    for (var i = 0; i < this.mirror.length; i++) {
      if (this.mirror[i] == n) {
        return this.mirror[i + (i % 2 ? -1 : 1)];
      }
    }
  }
};
Mapping.prototype.setMirror = function setMirror(n, m) {
  if (!this.mirror) {
    this.mirror = [];
  }
  this.mirror.push(n, m);
};
Mapping.prototype.appendMappingInverted = function appendMappingInverted(mapping) {
  for (var i = mapping.maps.length - 1, totalSize = this.maps.length + mapping.maps.length; i >= 0; i--) {
    var mirr = mapping.getMirror(i);
    this.appendMap(mapping.maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : null);
  }
};
Mapping.prototype.invert = function invert2() {
  var inverse = new Mapping();
  inverse.appendMappingInverted(this);
  return inverse;
};
Mapping.prototype.map = function map2(pos, assoc) {
  if (assoc === void 0)
    assoc = 1;
  if (this.mirror) {
    return this._map(pos, assoc, true);
  }
  for (var i = this.from; i < this.to; i++) {
    pos = this.maps[i].map(pos, assoc);
  }
  return pos;
};
Mapping.prototype.mapResult = function mapResult2(pos, assoc) {
  if (assoc === void 0)
    assoc = 1;
  return this._map(pos, assoc, false);
};
Mapping.prototype._map = function _map2(pos, assoc, simple) {
  var deleted = false;
  for (var i = this.from; i < this.to; i++) {
    var map16 = this.maps[i], result2 = map16.mapResult(pos, assoc);
    if (result2.recover != null) {
      var corr = this.getMirror(i);
      if (corr != null && corr > i && corr < this.to) {
        i = corr;
        pos = this.maps[corr].recover(result2.recover);
        continue;
      }
    }
    if (result2.deleted) {
      deleted = true;
    }
    pos = result2.pos;
  }
  return simple ? pos : new MapResult(pos, deleted);
};
function TransformError(message) {
  var err2 = Error.call(this, message);
  err2.__proto__ = TransformError.prototype;
  return err2;
}
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";
var Transform = function Transform2(doc2) {
  this.doc = doc2;
  this.steps = [];
  this.docs = [];
  this.mapping = new Mapping();
};
var prototypeAccessors$4 = { before: { configurable: true }, docChanged: { configurable: true } };
prototypeAccessors$4.before.get = function() {
  return this.docs.length ? this.docs[0] : this.doc;
};
Transform.prototype.step = function step(object) {
  var result2 = this.maybeStep(object);
  if (result2.failed) {
    throw new TransformError(result2.failed);
  }
  return this;
};
Transform.prototype.maybeStep = function maybeStep(step2) {
  var result2 = step2.apply(this.doc);
  if (!result2.failed) {
    this.addStep(step2, result2.doc);
  }
  return result2;
};
prototypeAccessors$4.docChanged.get = function() {
  return this.steps.length > 0;
};
Transform.prototype.addStep = function addStep(step2, doc2) {
  this.docs.push(this.doc);
  this.steps.push(step2);
  this.mapping.appendMap(step2.getMap());
  this.doc = doc2;
};
Object.defineProperties(Transform.prototype, prototypeAccessors$4);
function mustOverride() {
  throw new Error("Override me");
}
var stepsByID = /* @__PURE__ */ Object.create(null);
var Step = function Step2() {
};
Step.prototype.apply = function apply(_doc) {
  return mustOverride();
};
Step.prototype.getMap = function getMap() {
  return StepMap.empty;
};
Step.prototype.invert = function invert3(_doc) {
  return mustOverride();
};
Step.prototype.map = function map3(_mapping) {
  return mustOverride();
};
Step.prototype.merge = function merge(_other) {
  return null;
};
Step.prototype.toJSON = function toJSON5() {
  return mustOverride();
};
Step.fromJSON = function fromJSON5(schema2, json) {
  if (!json || !json.stepType) {
    throw new RangeError("Invalid input for Step.fromJSON");
  }
  var type = stepsByID[json.stepType];
  if (!type) {
    throw new RangeError("No step type " + json.stepType + " defined");
  }
  return type.fromJSON(schema2, json);
};
Step.jsonID = function jsonID(id, stepClass) {
  if (id in stepsByID) {
    throw new RangeError("Duplicate use of step JSON ID " + id);
  }
  stepsByID[id] = stepClass;
  stepClass.prototype.jsonID = id;
  return stepClass;
};
var StepResult = function StepResult2(doc2, failed) {
  this.doc = doc2;
  this.failed = failed;
};
StepResult.ok = function ok(doc2) {
  return new StepResult(doc2, null);
};
StepResult.fail = function fail(message) {
  return new StepResult(null, message);
};
StepResult.fromReplace = function fromReplace(doc2, from4, to, slice4) {
  try {
    return StepResult.ok(doc2.replace(from4, to, slice4));
  } catch (e) {
    if (e instanceof ReplaceError) {
      return StepResult.fail(e.message);
    }
    throw e;
  }
};
var ReplaceStep = /* @__PURE__ */ function(Step3) {
  function ReplaceStep2(from4, to, slice4, structure) {
    Step3.call(this);
    this.from = from4;
    this.to = to;
    this.slice = slice4;
    this.structure = !!structure;
  }
  if (Step3)
    ReplaceStep2.__proto__ = Step3;
  ReplaceStep2.prototype = Object.create(Step3 && Step3.prototype);
  ReplaceStep2.prototype.constructor = ReplaceStep2;
  ReplaceStep2.prototype.apply = function apply8(doc2) {
    if (this.structure && contentBetween(doc2, this.from, this.to)) {
      return StepResult.fail("Structure replace would overwrite content");
    }
    return StepResult.fromReplace(doc2, this.from, this.to, this.slice);
  };
  ReplaceStep2.prototype.getMap = function getMap2() {
    return new StepMap([this.from, this.to - this.from, this.slice.size]);
  };
  ReplaceStep2.prototype.invert = function invert4(doc2) {
    return new ReplaceStep2(this.from, this.from + this.slice.size, doc2.slice(this.from, this.to));
  };
  ReplaceStep2.prototype.map = function map16(mapping) {
    var from4 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from4.deleted && to.deleted) {
      return null;
    }
    return new ReplaceStep2(from4.pos, Math.max(from4.pos, to.pos), this.slice);
  };
  ReplaceStep2.prototype.merge = function merge3(other) {
    if (!(other instanceof ReplaceStep2) || other.structure || this.structure) {
      return null;
    }
    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      var slice4 = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new ReplaceStep2(this.from, this.to + (other.to - other.from), slice4, this.structure);
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      var slice$1 = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new ReplaceStep2(other.from, this.to, slice$1, this.structure);
    } else {
      return null;
    }
  };
  ReplaceStep2.prototype.toJSON = function toJSON7() {
    var json = { stepType: "replace", from: this.from, to: this.to };
    if (this.slice.size) {
      json.slice = this.slice.toJSON();
    }
    if (this.structure) {
      json.structure = true;
    }
    return json;
  };
  ReplaceStep2.fromJSON = function fromJSON8(schema2, json) {
    if (typeof json.from != "number" || typeof json.to != "number") {
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    }
    return new ReplaceStep2(json.from, json.to, Slice.fromJSON(schema2, json.slice), !!json.structure);
  };
  return ReplaceStep2;
}(Step);
Step.jsonID("replace", ReplaceStep);
var ReplaceAroundStep = /* @__PURE__ */ function(Step3) {
  function ReplaceAroundStep2(from4, to, gapFrom, gapTo, slice4, insert, structure) {
    Step3.call(this);
    this.from = from4;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice4;
    this.insert = insert;
    this.structure = !!structure;
  }
  if (Step3)
    ReplaceAroundStep2.__proto__ = Step3;
  ReplaceAroundStep2.prototype = Object.create(Step3 && Step3.prototype);
  ReplaceAroundStep2.prototype.constructor = ReplaceAroundStep2;
  ReplaceAroundStep2.prototype.apply = function apply8(doc2) {
    if (this.structure && (contentBetween(doc2, this.from, this.gapFrom) || contentBetween(doc2, this.gapTo, this.to))) {
      return StepResult.fail("Structure gap-replace would overwrite content");
    }
    var gap2 = doc2.slice(this.gapFrom, this.gapTo);
    if (gap2.openStart || gap2.openEnd) {
      return StepResult.fail("Gap is not a flat range");
    }
    var inserted = this.slice.insertAt(this.insert, gap2.content);
    if (!inserted) {
      return StepResult.fail("Content does not fit in gap");
    }
    return StepResult.fromReplace(doc2, this.from, this.to, inserted);
  };
  ReplaceAroundStep2.prototype.getMap = function getMap2() {
    return new StepMap([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  };
  ReplaceAroundStep2.prototype.invert = function invert4(doc2) {
    var gap2 = this.gapTo - this.gapFrom;
    return new ReplaceAroundStep2(this.from, this.from + this.slice.size + gap2, this.from + this.insert, this.from + this.insert + gap2, doc2.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  };
  ReplaceAroundStep2.prototype.map = function map16(mapping) {
    var from4 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    var gapFrom = mapping.map(this.gapFrom, -1), gapTo = mapping.map(this.gapTo, 1);
    if (from4.deleted && to.deleted || gapFrom < from4.pos || gapTo > to.pos) {
      return null;
    }
    return new ReplaceAroundStep2(from4.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
  };
  ReplaceAroundStep2.prototype.toJSON = function toJSON7() {
    var json = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    if (this.slice.size) {
      json.slice = this.slice.toJSON();
    }
    if (this.structure) {
      json.structure = true;
    }
    return json;
  };
  ReplaceAroundStep2.fromJSON = function fromJSON8(schema2, json) {
    if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") {
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    }
    return new ReplaceAroundStep2(json.from, json.to, json.gapFrom, json.gapTo, Slice.fromJSON(schema2, json.slice), json.insert, !!json.structure);
  };
  return ReplaceAroundStep2;
}(Step);
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc2, from4, to) {
  var $from = doc2.resolve(from4), dist = to - from4, depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    var next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf) {
        return true;
      }
      next = next.firstChild;
      dist--;
    }
  }
  return false;
}
function canCut(node4, start3, end2) {
  return (start3 == 0 || node4.canReplace(start3, node4.childCount)) && (end2 == node4.childCount || node4.canReplace(0, end2));
}
function liftTarget(range2) {
  var parent = range2.parent;
  var content2 = parent.content.cutByIndex(range2.startIndex, range2.endIndex);
  for (var depth = range2.depth; ; --depth) {
    var node4 = range2.$from.node(depth);
    var index2 = range2.$from.index(depth), endIndex2 = range2.$to.indexAfter(depth);
    if (depth < range2.depth && node4.canReplace(index2, endIndex2, content2)) {
      return depth;
    }
    if (depth == 0 || node4.type.spec.isolating || !canCut(node4, index2, endIndex2)) {
      break;
    }
  }
}
Transform.prototype.lift = function(range2, target2) {
  var $from = range2.$from;
  var $to = range2.$to;
  var depth = range2.depth;
  var gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
  var start3 = gapStart, end2 = gapEnd;
  var before2 = Fragment.empty, openStart = 0;
  for (var d = depth, splitting = false; d > target2; d--) {
    if (splitting || $from.index(d) > 0) {
      splitting = true;
      before2 = Fragment.from($from.node(d).copy(before2));
      openStart++;
    } else {
      start3--;
    }
  }
  var after2 = Fragment.empty, openEnd = 0;
  for (var d$1 = depth, splitting$1 = false; d$1 > target2; d$1--) {
    if (splitting$1 || $to.after(d$1 + 1) < $to.end(d$1)) {
      splitting$1 = true;
      after2 = Fragment.from($to.node(d$1).copy(after2));
      openEnd++;
    } else {
      end2++;
    }
  }
  return this.step(new ReplaceAroundStep(start3, end2, gapStart, gapEnd, new Slice(before2.append(after2), openStart, openEnd), before2.size - openStart, true));
};
function findWrapping3(range2, nodeType2, attrs2, innerRange) {
  if (innerRange === void 0)
    innerRange = range2;
  var around = findWrappingOutside(range2, nodeType2);
  var inner = around && findWrappingInside(innerRange, nodeType2);
  if (!inner) {
    return null;
  }
  return around.map(withAttrs).concat({ type: nodeType2, attrs: attrs2 }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
  return { type, attrs: null };
}
function findWrappingOutside(range2, type) {
  var parent = range2.parent;
  var startIndex2 = range2.startIndex;
  var endIndex2 = range2.endIndex;
  var around = parent.contentMatchAt(startIndex2).findWrapping(type);
  if (!around) {
    return null;
  }
  var outer = around.length ? around[0] : type;
  return parent.canReplaceWith(startIndex2, endIndex2, outer) ? around : null;
}
function findWrappingInside(range2, type) {
  var parent = range2.parent;
  var startIndex2 = range2.startIndex;
  var endIndex2 = range2.endIndex;
  var inner = parent.child(startIndex2);
  var inside = type.contentMatch.findWrapping(inner.type);
  if (!inside) {
    return null;
  }
  var lastType = inside.length ? inside[inside.length - 1] : type;
  var innerMatch = lastType.contentMatch;
  for (var i = startIndex2; innerMatch && i < endIndex2; i++) {
    innerMatch = innerMatch.matchType(parent.child(i).type);
  }
  if (!innerMatch || !innerMatch.validEnd) {
    return null;
  }
  return inside;
}
Transform.prototype.wrap = function(range2, wrappers) {
  var content2 = Fragment.empty;
  for (var i = wrappers.length - 1; i >= 0; i--) {
    content2 = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content2));
  }
  var start3 = range2.start, end2 = range2.end;
  return this.step(new ReplaceAroundStep(start3, end2, start3, end2, new Slice(content2, 0, 0), wrappers.length, true));
};
Transform.prototype.setBlockType = function(from4, to, type, attrs2) {
  var this$1$1 = this;
  if (to === void 0)
    to = from4;
  if (!type.isTextblock) {
    throw new RangeError("Type given to setBlockType should be a textblock");
  }
  var mapFrom = this.steps.length;
  this.doc.nodesBetween(from4, to, function(node4, pos) {
    if (node4.isTextblock && !node4.hasMarkup(type, attrs2) && canChangeType(this$1$1.doc, this$1$1.mapping.slice(mapFrom).map(pos), type)) {
      this$1$1.clearIncompatible(this$1$1.mapping.slice(mapFrom).map(pos, 1), type);
      var mapping = this$1$1.mapping.slice(mapFrom);
      var startM = mapping.map(pos, 1), endM = mapping.map(pos + node4.nodeSize, 1);
      this$1$1.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new Slice(Fragment.from(type.create(attrs2, null, node4.marks)), 0, 0), 1, true));
      return false;
    }
  });
  return this;
};
function canChangeType(doc2, pos, type) {
  var $pos = doc2.resolve(pos), index2 = $pos.index();
  return $pos.parent.canReplaceWith(index2, index2 + 1, type);
}
Transform.prototype.setNodeMarkup = function(pos, type, attrs2, marks2) {
  var node4 = this.doc.nodeAt(pos);
  if (!node4) {
    throw new RangeError("No node at given position");
  }
  if (!type) {
    type = node4.type;
  }
  var newNode = type.create(attrs2, null, marks2 || node4.marks);
  if (node4.isLeaf) {
    return this.replaceWith(pos, pos + node4.nodeSize, newNode);
  }
  if (!type.validContent(node4.content)) {
    throw new RangeError("Invalid content for node type " + type.name);
  }
  return this.step(new ReplaceAroundStep(pos, pos + node4.nodeSize, pos + 1, pos + node4.nodeSize - 1, new Slice(Fragment.from(newNode), 0, 0), 1, true));
};
function canSplit(doc2, pos, depth, typesAfter) {
  if (depth === void 0)
    depth = 1;
  var $pos = doc2.resolve(pos), base2 = $pos.depth - depth;
  var innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base2 < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) {
    return false;
  }
  for (var d = $pos.depth - 1, i = depth - 2; d > base2; d--, i--) {
    var node4 = $pos.node(d), index$1 = $pos.index(d);
    if (node4.type.spec.isolating) {
      return false;
    }
    var rest = node4.content.cutByIndex(index$1, node4.childCount);
    var after2 = typesAfter && typesAfter[i] || node4;
    if (after2 != node4) {
      rest = rest.replaceChild(0, after2.type.create(after2.attrs));
    }
    if (!node4.canReplace(index$1 + 1, node4.childCount) || !after2.type.validContent(rest)) {
      return false;
    }
  }
  var index2 = $pos.indexAfter(base2);
  var baseType = typesAfter && typesAfter[0];
  return $pos.node(base2).canReplaceWith(index2, index2, baseType ? baseType.type : $pos.node(base2 + 1).type);
}
Transform.prototype.split = function(pos, depth, typesAfter) {
  if (depth === void 0)
    depth = 1;
  var $pos = this.doc.resolve(pos), before2 = Fragment.empty, after2 = Fragment.empty;
  for (var d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before2 = Fragment.from($pos.node(d).copy(before2));
    var typeAfter = typesAfter && typesAfter[i];
    after2 = Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after2) : $pos.node(d).copy(after2));
  }
  return this.step(new ReplaceStep(pos, pos, new Slice(before2.append(after2), depth, depth), true));
};
function canJoin(doc2, pos) {
  var $pos = doc2.resolve(pos), index2 = $pos.index();
  return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index2, index2 + 1);
}
function joinable(a, b) {
  return a && b && !a.isLeaf && a.canAppend(b);
}
Transform.prototype.join = function(pos, depth) {
  if (depth === void 0)
    depth = 1;
  var step2 = new ReplaceStep(pos - depth, pos + depth, Slice.empty, true);
  return this.step(step2);
};
function insertPoint(doc2, pos, nodeType2) {
  var $pos = doc2.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType2)) {
    return pos;
  }
  if ($pos.parentOffset == 0) {
    for (var d = $pos.depth - 1; d >= 0; d--) {
      var index2 = $pos.index(d);
      if ($pos.node(d).canReplaceWith(index2, index2, nodeType2)) {
        return $pos.before(d + 1);
      }
      if (index2 > 0) {
        return null;
      }
    }
  }
  if ($pos.parentOffset == $pos.parent.content.size) {
    for (var d$1 = $pos.depth - 1; d$1 >= 0; d$1--) {
      var index$1 = $pos.indexAfter(d$1);
      if ($pos.node(d$1).canReplaceWith(index$1, index$1, nodeType2)) {
        return $pos.after(d$1 + 1);
      }
      if (index$1 < $pos.node(d$1).childCount) {
        return null;
      }
    }
  }
}
function dropPoint(doc2, pos, slice4) {
  var $pos = doc2.resolve(pos);
  if (!slice4.content.size) {
    return pos;
  }
  var content2 = slice4.content;
  for (var i = 0; i < slice4.openStart; i++) {
    content2 = content2.firstChild.content;
  }
  for (var pass = 1; pass <= (slice4.openStart == 0 && slice4.size ? 2 : 1); pass++) {
    for (var d = $pos.depth; d >= 0; d--) {
      var bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      var insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      var parent = $pos.node(d), fits = false;
      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content2);
      } else {
        var wrapping = parent.contentMatchAt(insertPos).findWrapping(content2.firstChild.type);
        fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }
      if (fits) {
        return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
      }
    }
  }
  return null;
}
function mapFragment(fragment, f, parent) {
  var mapped = [];
  for (var i = 0; i < fragment.childCount; i++) {
    var child3 = fragment.child(i);
    if (child3.content.size) {
      child3 = child3.copy(mapFragment(child3.content, f, child3));
    }
    if (child3.isInline) {
      child3 = f(child3, parent, i);
    }
    mapped.push(child3);
  }
  return Fragment.fromArray(mapped);
}
var AddMarkStep = /* @__PURE__ */ function(Step3) {
  function AddMarkStep2(from4, to, mark3) {
    Step3.call(this);
    this.from = from4;
    this.to = to;
    this.mark = mark3;
  }
  if (Step3)
    AddMarkStep2.__proto__ = Step3;
  AddMarkStep2.prototype = Object.create(Step3 && Step3.prototype);
  AddMarkStep2.prototype.constructor = AddMarkStep2;
  AddMarkStep2.prototype.apply = function apply8(doc2) {
    var this$1$1 = this;
    var oldSlice = doc2.slice(this.from, this.to), $from = doc2.resolve(this.from);
    var parent = $from.node($from.sharedDepth(this.to));
    var slice4 = new Slice(mapFragment(oldSlice.content, function(node4, parent2) {
      if (!node4.isAtom || !parent2.type.allowsMarkType(this$1$1.mark.type)) {
        return node4;
      }
      return node4.mark(this$1$1.mark.addToSet(node4.marks));
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc2, this.from, this.to, slice4);
  };
  AddMarkStep2.prototype.invert = function invert4() {
    return new RemoveMarkStep(this.from, this.to, this.mark);
  };
  AddMarkStep2.prototype.map = function map16(mapping) {
    var from4 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from4.deleted && to.deleted || from4.pos >= to.pos) {
      return null;
    }
    return new AddMarkStep2(from4.pos, to.pos, this.mark);
  };
  AddMarkStep2.prototype.merge = function merge3(other) {
    if (other instanceof AddMarkStep2 && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) {
      return new AddMarkStep2(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    }
  };
  AddMarkStep2.prototype.toJSON = function toJSON7() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  };
  AddMarkStep2.fromJSON = function fromJSON8(schema2, json) {
    if (typeof json.from != "number" || typeof json.to != "number") {
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    }
    return new AddMarkStep2(json.from, json.to, schema2.markFromJSON(json.mark));
  };
  return AddMarkStep2;
}(Step);
Step.jsonID("addMark", AddMarkStep);
var RemoveMarkStep = /* @__PURE__ */ function(Step3) {
  function RemoveMarkStep2(from4, to, mark3) {
    Step3.call(this);
    this.from = from4;
    this.to = to;
    this.mark = mark3;
  }
  if (Step3)
    RemoveMarkStep2.__proto__ = Step3;
  RemoveMarkStep2.prototype = Object.create(Step3 && Step3.prototype);
  RemoveMarkStep2.prototype.constructor = RemoveMarkStep2;
  RemoveMarkStep2.prototype.apply = function apply8(doc2) {
    var this$1$1 = this;
    var oldSlice = doc2.slice(this.from, this.to);
    var slice4 = new Slice(mapFragment(oldSlice.content, function(node4) {
      return node4.mark(this$1$1.mark.removeFromSet(node4.marks));
    }), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc2, this.from, this.to, slice4);
  };
  RemoveMarkStep2.prototype.invert = function invert4() {
    return new AddMarkStep(this.from, this.to, this.mark);
  };
  RemoveMarkStep2.prototype.map = function map16(mapping) {
    var from4 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from4.deleted && to.deleted || from4.pos >= to.pos) {
      return null;
    }
    return new RemoveMarkStep2(from4.pos, to.pos, this.mark);
  };
  RemoveMarkStep2.prototype.merge = function merge3(other) {
    if (other instanceof RemoveMarkStep2 && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) {
      return new RemoveMarkStep2(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    }
  };
  RemoveMarkStep2.prototype.toJSON = function toJSON7() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  };
  RemoveMarkStep2.fromJSON = function fromJSON8(schema2, json) {
    if (typeof json.from != "number" || typeof json.to != "number") {
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    }
    return new RemoveMarkStep2(json.from, json.to, schema2.markFromJSON(json.mark));
  };
  return RemoveMarkStep2;
}(Step);
Step.jsonID("removeMark", RemoveMarkStep);
Transform.prototype.addMark = function(from4, to, mark3) {
  var this$1$1 = this;
  var removed = [], added = [], removing = null, adding = null;
  this.doc.nodesBetween(from4, to, function(node4, pos, parent) {
    if (!node4.isInline) {
      return;
    }
    var marks2 = node4.marks;
    if (!mark3.isInSet(marks2) && parent.type.allowsMarkType(mark3.type)) {
      var start3 = Math.max(pos, from4), end2 = Math.min(pos + node4.nodeSize, to);
      var newSet = mark3.addToSet(marks2);
      for (var i = 0; i < marks2.length; i++) {
        if (!marks2[i].isInSet(newSet)) {
          if (removing && removing.to == start3 && removing.mark.eq(marks2[i])) {
            removing.to = end2;
          } else {
            removed.push(removing = new RemoveMarkStep(start3, end2, marks2[i]));
          }
        }
      }
      if (adding && adding.to == start3) {
        adding.to = end2;
      } else {
        added.push(adding = new AddMarkStep(start3, end2, mark3));
      }
    }
  });
  removed.forEach(function(s) {
    return this$1$1.step(s);
  });
  added.forEach(function(s) {
    return this$1$1.step(s);
  });
  return this;
};
Transform.prototype.removeMark = function(from4, to, mark3) {
  var this$1$1 = this;
  if (mark3 === void 0)
    mark3 = null;
  var matched = [], step2 = 0;
  this.doc.nodesBetween(from4, to, function(node4, pos) {
    if (!node4.isInline) {
      return;
    }
    step2++;
    var toRemove = null;
    if (mark3 instanceof MarkType) {
      var set3 = node4.marks, found2;
      while (found2 = mark3.isInSet(set3)) {
        (toRemove || (toRemove = [])).push(found2);
        set3 = found2.removeFromSet(set3);
      }
    } else if (mark3) {
      if (mark3.isInSet(node4.marks)) {
        toRemove = [mark3];
      }
    } else {
      toRemove = node4.marks;
    }
    if (toRemove && toRemove.length) {
      var end2 = Math.min(pos + node4.nodeSize, to);
      for (var i = 0; i < toRemove.length; i++) {
        var style2 = toRemove[i], found$1 = void 0;
        for (var j = 0; j < matched.length; j++) {
          var m = matched[j];
          if (m.step == step2 - 1 && style2.eq(matched[j].style)) {
            found$1 = m;
          }
        }
        if (found$1) {
          found$1.to = end2;
          found$1.step = step2;
        } else {
          matched.push({ style: style2, from: Math.max(pos, from4), to: end2, step: step2 });
        }
      }
    }
  });
  matched.forEach(function(m) {
    return this$1$1.step(new RemoveMarkStep(m.from, m.to, m.style));
  });
  return this;
};
Transform.prototype.clearIncompatible = function(pos, parentType, match2) {
  if (match2 === void 0)
    match2 = parentType.contentMatch;
  var node4 = this.doc.nodeAt(pos);
  var delSteps = [], cur = pos + 1;
  for (var i = 0; i < node4.childCount; i++) {
    var child3 = node4.child(i), end2 = cur + child3.nodeSize;
    var allowed = match2.matchType(child3.type, child3.attrs);
    if (!allowed) {
      delSteps.push(new ReplaceStep(cur, end2, Slice.empty));
    } else {
      match2 = allowed;
      for (var j = 0; j < child3.marks.length; j++) {
        if (!parentType.allowsMarkType(child3.marks[j].type)) {
          this.step(new RemoveMarkStep(cur, end2, child3.marks[j]));
        }
      }
    }
    cur = end2;
  }
  if (!match2.validEnd) {
    var fill = match2.fillBefore(Fragment.empty, true);
    this.replace(cur, cur, new Slice(fill, 0, 0));
  }
  for (var i$1 = delSteps.length - 1; i$1 >= 0; i$1--) {
    this.step(delSteps[i$1]);
  }
  return this;
};
function replaceStep(doc2, from4, to, slice4) {
  if (to === void 0)
    to = from4;
  if (slice4 === void 0)
    slice4 = Slice.empty;
  if (from4 == to && !slice4.size) {
    return null;
  }
  var $from = doc2.resolve(from4), $to = doc2.resolve(to);
  if (fitsTrivially($from, $to, slice4)) {
    return new ReplaceStep(from4, to, slice4);
  }
  return new Fitter($from, $to, slice4).fit();
}
Transform.prototype.replace = function(from4, to, slice4) {
  if (to === void 0)
    to = from4;
  if (slice4 === void 0)
    slice4 = Slice.empty;
  var step2 = replaceStep(this.doc, from4, to, slice4);
  if (step2) {
    this.step(step2);
  }
  return this;
};
Transform.prototype.replaceWith = function(from4, to, content2) {
  return this.replace(from4, to, new Slice(Fragment.from(content2), 0, 0));
};
Transform.prototype.delete = function(from4, to) {
  return this.replace(from4, to, Slice.empty);
};
Transform.prototype.insert = function(pos, content2) {
  return this.replaceWith(pos, pos, content2);
};
function fitsTrivially($from, $to, slice4) {
  return !slice4.openStart && !slice4.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice4.content);
}
var Fitter = function Fitter2($from, $to, slice4) {
  this.$to = $to;
  this.$from = $from;
  this.unplaced = slice4;
  this.frontier = [];
  for (var i = 0; i <= $from.depth; i++) {
    var node4 = $from.node(i);
    this.frontier.push({
      type: node4.type,
      match: node4.contentMatchAt($from.indexAfter(i))
    });
  }
  this.placed = Fragment.empty;
  for (var i$1 = $from.depth; i$1 > 0; i$1--) {
    this.placed = Fragment.from($from.node(i$1).copy(this.placed));
  }
};
var prototypeAccessors$1$2 = { depth: { configurable: true } };
prototypeAccessors$1$2.depth.get = function() {
  return this.frontier.length - 1;
};
Fitter.prototype.fit = function fit() {
  while (this.unplaced.size) {
    var fit2 = this.findFittable();
    if (fit2) {
      this.placeNodes(fit2);
    } else {
      this.openMore() || this.dropNode();
    }
  }
  var moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth;
  var $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
  if (!$to) {
    return null;
  }
  var content2 = this.placed, openStart = $from.depth, openEnd = $to.depth;
  while (openStart && openEnd && content2.childCount == 1) {
    content2 = content2.firstChild.content;
    openStart--;
    openEnd--;
  }
  var slice4 = new Slice(content2, openStart, openEnd);
  if (moveInline > -1) {
    return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice4, placedSize);
  }
  if (slice4.size || $from.pos != this.$to.pos) {
    return new ReplaceStep($from.pos, $to.pos, slice4);
  }
};
Fitter.prototype.findFittable = function findFittable() {
  for (var pass = 1; pass <= 2; pass++) {
    for (var sliceDepth = this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
      var fragment = void 0, parent = void 0;
      if (sliceDepth) {
        parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
        fragment = parent.content;
      } else {
        fragment = this.unplaced.content;
      }
      var first2 = fragment.firstChild;
      for (var frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
        var ref = this.frontier[frontierDepth];
        var type = ref.type;
        var match2 = ref.match;
        var wrap = void 0, inject = void 0;
        if (pass == 1 && (first2 ? match2.matchType(first2.type) || (inject = match2.fillBefore(Fragment.from(first2), false)) : type.compatibleContent(parent.type))) {
          return { sliceDepth, frontierDepth, parent, inject };
        } else if (pass == 2 && first2 && (wrap = match2.findWrapping(first2.type))) {
          return { sliceDepth, frontierDepth, parent, wrap };
        }
        if (parent && match2.matchType(parent.type)) {
          break;
        }
      }
    }
  }
};
Fitter.prototype.openMore = function openMore() {
  var ref = this.unplaced;
  var content2 = ref.content;
  var openStart = ref.openStart;
  var openEnd = ref.openEnd;
  var inner = contentAt(content2, openStart);
  if (!inner.childCount || inner.firstChild.isLeaf) {
    return false;
  }
  this.unplaced = new Slice(content2, openStart + 1, Math.max(openEnd, inner.size + openStart >= content2.size - openEnd ? openStart + 1 : 0));
  return true;
};
Fitter.prototype.dropNode = function dropNode() {
  var ref = this.unplaced;
  var content2 = ref.content;
  var openStart = ref.openStart;
  var openEnd = ref.openEnd;
  var inner = contentAt(content2, openStart);
  if (inner.childCount <= 1 && openStart > 0) {
    var openAtEnd = content2.size - openStart <= openStart + inner.size;
    this.unplaced = new Slice(dropFromFragment(content2, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
  } else {
    this.unplaced = new Slice(dropFromFragment(content2, openStart, 1), openStart, openEnd);
  }
};
Fitter.prototype.placeNodes = function placeNodes(ref) {
  var sliceDepth = ref.sliceDepth;
  var frontierDepth = ref.frontierDepth;
  var parent = ref.parent;
  var inject = ref.inject;
  var wrap = ref.wrap;
  while (this.depth > frontierDepth) {
    this.closeFrontierNode();
  }
  if (wrap) {
    for (var i = 0; i < wrap.length; i++) {
      this.openFrontierNode(wrap[i]);
    }
  }
  var slice4 = this.unplaced, fragment = parent ? parent.content : slice4.content;
  var openStart = slice4.openStart - sliceDepth;
  var taken = 0, add3 = [];
  var ref$1 = this.frontier[frontierDepth];
  var match2 = ref$1.match;
  var type = ref$1.type;
  if (inject) {
    for (var i$1 = 0; i$1 < inject.childCount; i$1++) {
      add3.push(inject.child(i$1));
    }
    match2 = match2.matchFragment(inject);
  }
  var openEndCount = fragment.size + sliceDepth - (slice4.content.size - slice4.openEnd);
  while (taken < fragment.childCount) {
    var next = fragment.child(taken), matches2 = match2.matchType(next.type);
    if (!matches2) {
      break;
    }
    taken++;
    if (taken > 1 || openStart == 0 || next.content.size) {
      match2 = matches2;
      add3.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
    }
  }
  var toEnd = taken == fragment.childCount;
  if (!toEnd) {
    openEndCount = -1;
  }
  this.placed = addToFragment(this.placed, frontierDepth, Fragment.from(add3));
  this.frontier[frontierDepth].match = match2;
  if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) {
    this.closeFrontierNode();
  }
  for (var i$2 = 0, cur = fragment; i$2 < openEndCount; i$2++) {
    var node4 = cur.lastChild;
    this.frontier.push({ type: node4.type, match: node4.contentMatchAt(node4.childCount) });
    cur = node4.content;
  }
  this.unplaced = !toEnd ? new Slice(dropFromFragment(slice4.content, sliceDepth, taken), slice4.openStart, slice4.openEnd) : sliceDepth == 0 ? Slice.empty : new Slice(dropFromFragment(slice4.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice4.openEnd : sliceDepth - 1);
};
Fitter.prototype.mustMoveInline = function mustMoveInline() {
  if (!this.$to.parent.isTextblock || this.$to.end() == this.$to.pos) {
    return -1;
  }
  var top3 = this.frontier[this.depth], level;
  if (!top3.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top3.type, top3.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) {
    return -1;
  }
  var ref = this.$to;
  var depth = ref.depth;
  var after2 = this.$to.after(depth);
  while (depth > 1 && after2 == this.$to.end(--depth)) {
    ++after2;
  }
  return after2;
};
Fitter.prototype.findCloseLevel = function findCloseLevel($to) {
  scan:
    for (var i = Math.min(this.depth, $to.depth); i >= 0; i--) {
      var ref = this.frontier[i];
      var match2 = ref.match;
      var type = ref.type;
      var dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
      var fit2 = contentAfterFits($to, i, type, match2, dropInner);
      if (!fit2) {
        continue;
      }
      for (var d = i - 1; d >= 0; d--) {
        var ref$1 = this.frontier[d];
        var match$1 = ref$1.match;
        var type$1 = ref$1.type;
        var matches2 = contentAfterFits($to, d, type$1, match$1, true);
        if (!matches2 || matches2.childCount) {
          continue scan;
        }
      }
      return { depth: i, fit: fit2, move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to };
    }
};
Fitter.prototype.close = function close2($to) {
  var close5 = this.findCloseLevel($to);
  if (!close5) {
    return null;
  }
  while (this.depth > close5.depth) {
    this.closeFrontierNode();
  }
  if (close5.fit.childCount) {
    this.placed = addToFragment(this.placed, close5.depth, close5.fit);
  }
  $to = close5.move;
  for (var d = close5.depth + 1; d <= $to.depth; d++) {
    var node4 = $to.node(d), add3 = node4.type.contentMatch.fillBefore(node4.content, true, $to.index(d));
    this.openFrontierNode(node4.type, node4.attrs, add3);
  }
  return $to;
};
Fitter.prototype.openFrontierNode = function openFrontierNode(type, attrs2, content2) {
  var top3 = this.frontier[this.depth];
  top3.match = top3.match.matchType(type);
  this.placed = addToFragment(this.placed, this.depth, Fragment.from(type.create(attrs2, content2)));
  this.frontier.push({ type, match: type.contentMatch });
};
Fitter.prototype.closeFrontierNode = function closeFrontierNode() {
  var open3 = this.frontier.pop();
  var add3 = open3.match.fillBefore(Fragment.empty, true);
  if (add3.childCount) {
    this.placed = addToFragment(this.placed, this.frontier.length, add3);
  }
};
Object.defineProperties(Fitter.prototype, prototypeAccessors$1$2);
function dropFromFragment(fragment, depth, count) {
  if (depth == 0) {
    return fragment.cutByIndex(count);
  }
  return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content2) {
  if (depth == 0) {
    return fragment.append(content2);
  }
  return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content2)));
}
function contentAt(fragment, depth) {
  for (var i = 0; i < depth; i++) {
    fragment = fragment.firstChild.content;
  }
  return fragment;
}
function closeNodeStart(node4, openStart, openEnd) {
  if (openStart <= 0) {
    return node4;
  }
  var frag = node4.content;
  if (openStart > 1) {
    frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
  }
  if (openStart > 0) {
    frag = node4.type.contentMatch.fillBefore(frag).append(frag);
    if (openEnd <= 0) {
      frag = frag.append(node4.type.contentMatch.matchFragment(frag).fillBefore(Fragment.empty, true));
    }
  }
  return node4.copy(frag);
}
function contentAfterFits($to, depth, type, match2, open3) {
  var node4 = $to.node(depth), index2 = open3 ? $to.indexAfter(depth) : $to.index(depth);
  if (index2 == node4.childCount && !type.compatibleContent(node4.type)) {
    return null;
  }
  var fit2 = match2.fillBefore(node4.content, true, index2);
  return fit2 && !invalidMarks(type, node4.content, index2) ? fit2 : null;
}
function invalidMarks(type, fragment, start3) {
  for (var i = start3; i < fragment.childCount; i++) {
    if (!type.allowsMarks(fragment.child(i).marks)) {
      return true;
    }
  }
  return false;
}
Transform.prototype.replaceRange = function(from4, to, slice4) {
  if (!slice4.size) {
    return this.deleteRange(from4, to);
  }
  var $from = this.doc.resolve(from4), $to = this.doc.resolve(to);
  if (fitsTrivially($from, $to, slice4)) {
    return this.step(new ReplaceStep(from4, to, slice4));
  }
  var targetDepths = coveredDepths($from, this.doc.resolve(to));
  if (targetDepths[targetDepths.length - 1] == 0) {
    targetDepths.pop();
  }
  var preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget);
  for (var d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    var spec = $from.node(d).type.spec;
    if (spec.defining || spec.isolating) {
      break;
    }
    if (targetDepths.indexOf(d) > -1) {
      preferredTarget = d;
    } else if ($from.before(d) == pos) {
      targetDepths.splice(1, 0, -d);
    }
  }
  var preferredTargetIndex = targetDepths.indexOf(preferredTarget);
  var leftNodes = [], preferredDepth = slice4.openStart;
  for (var content2 = slice4.content, i = 0; ; i++) {
    var node4 = content2.firstChild;
    leftNodes.push(node4);
    if (i == slice4.openStart) {
      break;
    }
    content2 = node4.content;
  }
  if (preferredDepth > 0 && leftNodes[preferredDepth - 1].type.spec.defining && $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 1].type) {
    preferredDepth -= 1;
  } else if (preferredDepth >= 2 && leftNodes[preferredDepth - 1].isTextblock && leftNodes[preferredDepth - 2].type.spec.defining && $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 2].type) {
    preferredDepth -= 2;
  }
  for (var j = slice4.openStart; j >= 0; j--) {
    var openDepth = (j + preferredDepth + 1) % (slice4.openStart + 1);
    var insert = leftNodes[openDepth];
    if (!insert) {
      continue;
    }
    for (var i$1 = 0; i$1 < targetDepths.length; i$1++) {
      var targetDepth = targetDepths[(i$1 + preferredTargetIndex) % targetDepths.length], expand = true;
      if (targetDepth < 0) {
        expand = false;
        targetDepth = -targetDepth;
      }
      var parent = $from.node(targetDepth - 1), index2 = $from.index(targetDepth - 1);
      if (parent.canReplaceWith(index2, index2, insert.type, insert.marks)) {
        return this.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new Slice(closeFragment(slice4.content, 0, slice4.openStart, openDepth), openDepth, slice4.openEnd));
      }
    }
  }
  var startSteps = this.steps.length;
  for (var i$2 = targetDepths.length - 1; i$2 >= 0; i$2--) {
    this.replace(from4, to, slice4);
    if (this.steps.length > startSteps) {
      break;
    }
    var depth = targetDepths[i$2];
    if (depth < 0) {
      continue;
    }
    from4 = $from.before(depth);
    to = $to.after(depth);
  }
  return this;
};
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    var first2 = fragment.firstChild;
    fragment = fragment.replaceChild(0, first2.copy(closeFragment(first2.content, depth + 1, oldOpen, newOpen, first2)));
  }
  if (depth > newOpen) {
    var match2 = parent.contentMatchAt(0);
    var start3 = match2.fillBefore(fragment).append(fragment);
    fragment = start3.append(match2.matchFragment(start3).fillBefore(Fragment.empty, true));
  }
  return fragment;
}
Transform.prototype.replaceRangeWith = function(from4, to, node4) {
  if (!node4.isInline && from4 == to && this.doc.resolve(from4).parent.content.size) {
    var point = insertPoint(this.doc, from4, node4.type);
    if (point != null) {
      from4 = to = point;
    }
  }
  return this.replaceRange(from4, to, new Slice(Fragment.from(node4), 0, 0));
};
Transform.prototype.deleteRange = function(from4, to) {
  var $from = this.doc.resolve(from4), $to = this.doc.resolve(to);
  var covered = coveredDepths($from, $to);
  for (var i = 0; i < covered.length; i++) {
    var depth = covered[i], last = i == covered.length - 1;
    if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) {
      return this.delete($from.start(depth), $to.end(depth));
    }
    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) {
      return this.delete($from.before(depth), $to.after(depth));
    }
  }
  for (var d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from4 - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d) {
      return this.delete($from.before(d), to);
    }
  }
  return this.delete(from4, to);
};
function coveredDepths($from, $to) {
  var result2 = [], minDepth = Math.min($from.depth, $to.depth);
  for (var d = minDepth; d >= 0; d--) {
    var start3 = $from.start(d);
    if (start3 < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) {
      break;
    }
    if (start3 == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start3 - 1) {
      result2.push(d);
    }
  }
  return result2;
}
var classesById = /* @__PURE__ */ Object.create(null);
var Selection = function Selection2($anchor, $head, ranges) {
  this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
  this.$anchor = $anchor;
  this.$head = $head;
};
var prototypeAccessors$3 = { anchor: { configurable: true }, head: { configurable: true }, from: { configurable: true }, to: { configurable: true }, $from: { configurable: true }, $to: { configurable: true }, empty: { configurable: true } };
prototypeAccessors$3.anchor.get = function() {
  return this.$anchor.pos;
};
prototypeAccessors$3.head.get = function() {
  return this.$head.pos;
};
prototypeAccessors$3.from.get = function() {
  return this.$from.pos;
};
prototypeAccessors$3.to.get = function() {
  return this.$to.pos;
};
prototypeAccessors$3.$from.get = function() {
  return this.ranges[0].$from;
};
prototypeAccessors$3.$to.get = function() {
  return this.ranges[0].$to;
};
prototypeAccessors$3.empty.get = function() {
  var ranges = this.ranges;
  for (var i = 0; i < ranges.length; i++) {
    if (ranges[i].$from.pos != ranges[i].$to.pos) {
      return false;
    }
  }
  return true;
};
Selection.prototype.content = function content() {
  return this.$from.node(0).slice(this.from, this.to, true);
};
Selection.prototype.replace = function replace2(tr, content2) {
  if (content2 === void 0)
    content2 = Slice.empty;
  var lastNode = content2.content.lastChild, lastParent = null;
  for (var i = 0; i < content2.openEnd; i++) {
    lastParent = lastNode;
    lastNode = lastNode.lastChild;
  }
  var mapFrom = tr.steps.length, ranges = this.ranges;
  for (var i$1 = 0; i$1 < ranges.length; i$1++) {
    var ref = ranges[i$1];
    var $from = ref.$from;
    var $to = ref.$to;
    var mapping = tr.mapping.slice(mapFrom);
    tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i$1 ? Slice.empty : content2);
    if (i$1 == 0) {
      selectionToInsertionEnd$1(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
    }
  }
};
Selection.prototype.replaceWith = function replaceWith(tr, node4) {
  var mapFrom = tr.steps.length, ranges = this.ranges;
  for (var i = 0; i < ranges.length; i++) {
    var ref = ranges[i];
    var $from = ref.$from;
    var $to = ref.$to;
    var mapping = tr.mapping.slice(mapFrom);
    var from4 = mapping.map($from.pos), to = mapping.map($to.pos);
    if (i) {
      tr.deleteRange(from4, to);
    } else {
      tr.replaceRangeWith(from4, to, node4);
      selectionToInsertionEnd$1(tr, mapFrom, node4.isInline ? -1 : 1);
    }
  }
};
Selection.findFrom = function findFrom($pos, dir, textOnly) {
  var inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
  if (inner) {
    return inner;
  }
  for (var depth = $pos.depth - 1; depth >= 0; depth--) {
    var found2 = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
    if (found2) {
      return found2;
    }
  }
};
Selection.near = function near($pos, bias) {
  if (bias === void 0)
    bias = 1;
  return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
};
Selection.atStart = function atStart(doc2) {
  return findSelectionIn(doc2, doc2, 0, 0, 1) || new AllSelection(doc2);
};
Selection.atEnd = function atEnd(doc2) {
  return findSelectionIn(doc2, doc2, doc2.content.size, doc2.childCount, -1) || new AllSelection(doc2);
};
Selection.fromJSON = function fromJSON6(doc2, json) {
  if (!json || !json.type) {
    throw new RangeError("Invalid input for Selection.fromJSON");
  }
  var cls = classesById[json.type];
  if (!cls) {
    throw new RangeError("No selection type " + json.type + " defined");
  }
  return cls.fromJSON(doc2, json);
};
Selection.jsonID = function jsonID2(id, selectionClass) {
  if (id in classesById) {
    throw new RangeError("Duplicate use of selection JSON ID " + id);
  }
  classesById[id] = selectionClass;
  selectionClass.prototype.jsonID = id;
  return selectionClass;
};
Selection.prototype.getBookmark = function getBookmark() {
  return TextSelection.between(this.$anchor, this.$head).getBookmark();
};
Object.defineProperties(Selection.prototype, prototypeAccessors$3);
Selection.prototype.visible = true;
var SelectionRange = function SelectionRange2($from, $to) {
  this.$from = $from;
  this.$to = $to;
};
var TextSelection = /* @__PURE__ */ function(Selection3) {
  function TextSelection2($anchor, $head) {
    if ($head === void 0)
      $head = $anchor;
    Selection3.call(this, $anchor, $head);
  }
  if (Selection3)
    TextSelection2.__proto__ = Selection3;
  TextSelection2.prototype = Object.create(Selection3 && Selection3.prototype);
  TextSelection2.prototype.constructor = TextSelection2;
  var prototypeAccessors$12 = { $cursor: { configurable: true } };
  prototypeAccessors$12.$cursor.get = function() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  };
  TextSelection2.prototype.map = function map16(doc2, mapping) {
    var $head = doc2.resolve(mapping.map(this.head));
    if (!$head.parent.inlineContent) {
      return Selection3.near($head);
    }
    var $anchor = doc2.resolve(mapping.map(this.anchor));
    return new TextSelection2($anchor.parent.inlineContent ? $anchor : $head, $head);
  };
  TextSelection2.prototype.replace = function replace4(tr, content2) {
    if (content2 === void 0)
      content2 = Slice.empty;
    Selection3.prototype.replace.call(this, tr, content2);
    if (content2 == Slice.empty) {
      var marks2 = this.$from.marksAcross(this.$to);
      if (marks2) {
        tr.ensureMarks(marks2);
      }
    }
  };
  TextSelection2.prototype.eq = function eq12(other) {
    return other instanceof TextSelection2 && other.anchor == this.anchor && other.head == this.head;
  };
  TextSelection2.prototype.getBookmark = function getBookmark2() {
    return new TextBookmark(this.anchor, this.head);
  };
  TextSelection2.prototype.toJSON = function toJSON7() {
    return { type: "text", anchor: this.anchor, head: this.head };
  };
  TextSelection2.fromJSON = function fromJSON8(doc2, json) {
    if (typeof json.anchor != "number" || typeof json.head != "number") {
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    }
    return new TextSelection2(doc2.resolve(json.anchor), doc2.resolve(json.head));
  };
  TextSelection2.create = function create5(doc2, anchor, head) {
    if (head === void 0)
      head = anchor;
    var $anchor = doc2.resolve(anchor);
    return new this($anchor, head == anchor ? $anchor : doc2.resolve(head));
  };
  TextSelection2.between = function between2($anchor, $head, bias) {
    var dPos = $anchor.pos - $head.pos;
    if (!bias || dPos) {
      bias = dPos >= 0 ? 1 : -1;
    }
    if (!$head.parent.inlineContent) {
      var found2 = Selection3.findFrom($head, bias, true) || Selection3.findFrom($head, -bias, true);
      if (found2) {
        $head = found2.$head;
      } else {
        return Selection3.near($head, bias);
      }
    }
    if (!$anchor.parent.inlineContent) {
      if (dPos == 0) {
        $anchor = $head;
      } else {
        $anchor = (Selection3.findFrom($anchor, -bias, true) || Selection3.findFrom($anchor, bias, true)).$anchor;
        if ($anchor.pos < $head.pos != dPos < 0) {
          $anchor = $head;
        }
      }
    }
    return new TextSelection2($anchor, $head);
  };
  Object.defineProperties(TextSelection2.prototype, prototypeAccessors$12);
  return TextSelection2;
}(Selection);
Selection.jsonID("text", TextSelection);
var TextBookmark = function TextBookmark2(anchor, head) {
  this.anchor = anchor;
  this.head = head;
};
TextBookmark.prototype.map = function map4(mapping) {
  return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
};
TextBookmark.prototype.resolve = function resolve3(doc2) {
  return TextSelection.between(doc2.resolve(this.anchor), doc2.resolve(this.head));
};
var NodeSelection = /* @__PURE__ */ function(Selection3) {
  function NodeSelection2($pos) {
    var node4 = $pos.nodeAfter;
    var $end = $pos.node(0).resolve($pos.pos + node4.nodeSize);
    Selection3.call(this, $pos, $end);
    this.node = node4;
  }
  if (Selection3)
    NodeSelection2.__proto__ = Selection3;
  NodeSelection2.prototype = Object.create(Selection3 && Selection3.prototype);
  NodeSelection2.prototype.constructor = NodeSelection2;
  NodeSelection2.prototype.map = function map16(doc2, mapping) {
    var ref = mapping.mapResult(this.anchor);
    var deleted = ref.deleted;
    var pos = ref.pos;
    var $pos = doc2.resolve(pos);
    if (deleted) {
      return Selection3.near($pos);
    }
    return new NodeSelection2($pos);
  };
  NodeSelection2.prototype.content = function content2() {
    return new Slice(Fragment.from(this.node), 0, 0);
  };
  NodeSelection2.prototype.eq = function eq12(other) {
    return other instanceof NodeSelection2 && other.anchor == this.anchor;
  };
  NodeSelection2.prototype.toJSON = function toJSON7() {
    return { type: "node", anchor: this.anchor };
  };
  NodeSelection2.prototype.getBookmark = function getBookmark2() {
    return new NodeBookmark(this.anchor);
  };
  NodeSelection2.fromJSON = function fromJSON8(doc2, json) {
    if (typeof json.anchor != "number") {
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    }
    return new NodeSelection2(doc2.resolve(json.anchor));
  };
  NodeSelection2.create = function create5(doc2, from4) {
    return new this(doc2.resolve(from4));
  };
  NodeSelection2.isSelectable = function isSelectable(node4) {
    return !node4.isText && node4.type.spec.selectable !== false;
  };
  return NodeSelection2;
}(Selection);
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
var NodeBookmark = function NodeBookmark2(anchor) {
  this.anchor = anchor;
};
NodeBookmark.prototype.map = function map5(mapping) {
  var ref = mapping.mapResult(this.anchor);
  var deleted = ref.deleted;
  var pos = ref.pos;
  return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
};
NodeBookmark.prototype.resolve = function resolve4(doc2) {
  var $pos = doc2.resolve(this.anchor), node4 = $pos.nodeAfter;
  if (node4 && NodeSelection.isSelectable(node4)) {
    return new NodeSelection($pos);
  }
  return Selection.near($pos);
};
var AllSelection = /* @__PURE__ */ function(Selection3) {
  function AllSelection2(doc2) {
    Selection3.call(this, doc2.resolve(0), doc2.resolve(doc2.content.size));
  }
  if (Selection3)
    AllSelection2.__proto__ = Selection3;
  AllSelection2.prototype = Object.create(Selection3 && Selection3.prototype);
  AllSelection2.prototype.constructor = AllSelection2;
  AllSelection2.prototype.replace = function replace4(tr, content2) {
    if (content2 === void 0)
      content2 = Slice.empty;
    if (content2 == Slice.empty) {
      tr.delete(0, tr.doc.content.size);
      var sel = Selection3.atStart(tr.doc);
      if (!sel.eq(tr.selection)) {
        tr.setSelection(sel);
      }
    } else {
      Selection3.prototype.replace.call(this, tr, content2);
    }
  };
  AllSelection2.prototype.toJSON = function toJSON7() {
    return { type: "all" };
  };
  AllSelection2.fromJSON = function fromJSON8(doc2) {
    return new AllSelection2(doc2);
  };
  AllSelection2.prototype.map = function map16(doc2) {
    return new AllSelection2(doc2);
  };
  AllSelection2.prototype.eq = function eq12(other) {
    return other instanceof AllSelection2;
  };
  AllSelection2.prototype.getBookmark = function getBookmark2() {
    return AllBookmark;
  };
  return AllSelection2;
}(Selection);
Selection.jsonID("all", AllSelection);
var AllBookmark = {
  map: function map6() {
    return this;
  },
  resolve: function resolve5(doc2) {
    return new AllSelection(doc2);
  }
};
function findSelectionIn(doc2, node4, pos, index2, dir, text6) {
  if (node4.inlineContent) {
    return TextSelection.create(doc2, pos);
  }
  for (var i = index2 - (dir > 0 ? 0 : 1); dir > 0 ? i < node4.childCount : i >= 0; i += dir) {
    var child3 = node4.child(i);
    if (!child3.isAtom) {
      var inner = findSelectionIn(doc2, child3, pos + dir, dir < 0 ? child3.childCount : 0, dir, text6);
      if (inner) {
        return inner;
      }
    } else if (!text6 && NodeSelection.isSelectable(child3)) {
      return NodeSelection.create(doc2, pos - (dir < 0 ? child3.nodeSize : 0));
    }
    pos += child3.nodeSize * dir;
  }
}
function selectionToInsertionEnd$1(tr, startLen, bias) {
  var last = tr.steps.length - 1;
  if (last < startLen) {
    return;
  }
  var step2 = tr.steps[last];
  if (!(step2 instanceof ReplaceStep || step2 instanceof ReplaceAroundStep)) {
    return;
  }
  var map16 = tr.mapping.maps[last], end2;
  map16.forEach(function(_from, _to, _newFrom, newTo) {
    if (end2 == null) {
      end2 = newTo;
    }
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end2), bias));
}
var UPDATED_SEL = 1, UPDATED_MARKS = 2, UPDATED_SCROLL = 4;
var Transaction = /* @__PURE__ */ function(Transform3) {
  function Transaction2(state) {
    Transform3.call(this, state.doc);
    this.time = Date.now();
    this.curSelection = state.selection;
    this.curSelectionFor = 0;
    this.storedMarks = state.storedMarks;
    this.updated = 0;
    this.meta = /* @__PURE__ */ Object.create(null);
  }
  if (Transform3)
    Transaction2.__proto__ = Transform3;
  Transaction2.prototype = Object.create(Transform3 && Transform3.prototype);
  Transaction2.prototype.constructor = Transaction2;
  var prototypeAccessors2 = { selection: { configurable: true }, selectionSet: { configurable: true }, storedMarksSet: { configurable: true }, isGeneric: { configurable: true }, scrolledIntoView: { configurable: true } };
  prototypeAccessors2.selection.get = function() {
    if (this.curSelectionFor < this.steps.length) {
      this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
      this.curSelectionFor = this.steps.length;
    }
    return this.curSelection;
  };
  Transaction2.prototype.setSelection = function setSelection2(selection) {
    if (selection.$from.doc != this.doc) {
      throw new RangeError("Selection passed to setSelection must point at the current document");
    }
    this.curSelection = selection;
    this.curSelectionFor = this.steps.length;
    this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
    this.storedMarks = null;
    return this;
  };
  prototypeAccessors2.selectionSet.get = function() {
    return (this.updated & UPDATED_SEL) > 0;
  };
  Transaction2.prototype.setStoredMarks = function setStoredMarks(marks2) {
    this.storedMarks = marks2;
    this.updated |= UPDATED_MARKS;
    return this;
  };
  Transaction2.prototype.ensureMarks = function ensureMarks2(marks2) {
    if (!Mark$1.sameSet(this.storedMarks || this.selection.$from.marks(), marks2)) {
      this.setStoredMarks(marks2);
    }
    return this;
  };
  Transaction2.prototype.addStoredMark = function addStoredMark(mark3) {
    return this.ensureMarks(mark3.addToSet(this.storedMarks || this.selection.$head.marks()));
  };
  Transaction2.prototype.removeStoredMark = function removeStoredMark(mark3) {
    return this.ensureMarks(mark3.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  };
  prototypeAccessors2.storedMarksSet.get = function() {
    return (this.updated & UPDATED_MARKS) > 0;
  };
  Transaction2.prototype.addStep = function addStep2(step2, doc2) {
    Transform3.prototype.addStep.call(this, step2, doc2);
    this.updated = this.updated & ~UPDATED_MARKS;
    this.storedMarks = null;
  };
  Transaction2.prototype.setTime = function setTime(time) {
    this.time = time;
    return this;
  };
  Transaction2.prototype.replaceSelection = function replaceSelection(slice4) {
    this.selection.replace(this, slice4);
    return this;
  };
  Transaction2.prototype.replaceSelectionWith = function replaceSelectionWith(node4, inheritMarks) {
    var selection = this.selection;
    if (inheritMarks !== false) {
      node4 = node4.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || Mark$1.none));
    }
    selection.replaceWith(this, node4);
    return this;
  };
  Transaction2.prototype.deleteSelection = function deleteSelection2() {
    this.selection.replace(this);
    return this;
  };
  Transaction2.prototype.insertText = function insertText(text6, from4, to) {
    if (to === void 0)
      to = from4;
    var schema2 = this.doc.type.schema;
    if (from4 == null) {
      if (!text6) {
        return this.deleteSelection();
      }
      return this.replaceSelectionWith(schema2.text(text6), true);
    } else {
      if (!text6) {
        return this.deleteRange(from4, to);
      }
      var marks2 = this.storedMarks;
      if (!marks2) {
        var $from = this.doc.resolve(from4);
        marks2 = to == from4 ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
      }
      this.replaceRangeWith(from4, to, schema2.text(text6, marks2));
      if (!this.selection.empty) {
        this.setSelection(Selection.near(this.selection.$to));
      }
      return this;
    }
  };
  Transaction2.prototype.setMeta = function setMeta2(key, value) {
    this.meta[typeof key == "string" ? key : key.key] = value;
    return this;
  };
  Transaction2.prototype.getMeta = function getMeta(key) {
    return this.meta[typeof key == "string" ? key : key.key];
  };
  prototypeAccessors2.isGeneric.get = function() {
    for (var _ in this.meta) {
      return false;
    }
    return true;
  };
  Transaction2.prototype.scrollIntoView = function scrollIntoView2() {
    this.updated |= UPDATED_SCROLL;
    return this;
  };
  prototypeAccessors2.scrolledIntoView.get = function() {
    return (this.updated & UPDATED_SCROLL) > 0;
  };
  Object.defineProperties(Transaction2.prototype, prototypeAccessors2);
  return Transaction2;
}(Transform);
function bind(f, self) {
  return !self || !f ? f : f.bind(self);
}
var FieldDesc = function FieldDesc2(name, desc, self) {
  this.name = name;
  this.init = bind(desc.init, self);
  this.apply = bind(desc.apply, self);
};
var baseFields = [
  new FieldDesc("doc", {
    init: function init(config2) {
      return config2.doc || config2.schema.topNodeType.createAndFill();
    },
    apply: function apply2(tr) {
      return tr.doc;
    }
  }),
  new FieldDesc("selection", {
    init: function init2(config2, instance) {
      return config2.selection || Selection.atStart(instance.doc);
    },
    apply: function apply3(tr) {
      return tr.selection;
    }
  }),
  new FieldDesc("storedMarks", {
    init: function init3(config2) {
      return config2.storedMarks || null;
    },
    apply: function apply4(tr, _marks, _old, state) {
      return state.selection.$cursor ? tr.storedMarks : null;
    }
  }),
  new FieldDesc("scrollToSelection", {
    init: function init4() {
      return 0;
    },
    apply: function apply5(tr, prev) {
      return tr.scrolledIntoView ? prev + 1 : prev;
    }
  })
];
var Configuration = function Configuration2(schema2, plugins) {
  var this$1$1 = this;
  this.schema = schema2;
  this.fields = baseFields.concat();
  this.plugins = [];
  this.pluginsByKey = /* @__PURE__ */ Object.create(null);
  if (plugins) {
    plugins.forEach(function(plugin) {
      if (this$1$1.pluginsByKey[plugin.key]) {
        throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
      }
      this$1$1.plugins.push(plugin);
      this$1$1.pluginsByKey[plugin.key] = plugin;
      if (plugin.spec.state) {
        this$1$1.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
      }
    });
  }
};
var EditorState = function EditorState2(config2) {
  this.config = config2;
};
var prototypeAccessors$1$1 = { schema: { configurable: true }, plugins: { configurable: true }, tr: { configurable: true } };
prototypeAccessors$1$1.schema.get = function() {
  return this.config.schema;
};
prototypeAccessors$1$1.plugins.get = function() {
  return this.config.plugins;
};
EditorState.prototype.apply = function apply6(tr) {
  return this.applyTransaction(tr).state;
};
EditorState.prototype.filterTransaction = function filterTransaction(tr, ignore) {
  if (ignore === void 0)
    ignore = -1;
  for (var i = 0; i < this.config.plugins.length; i++) {
    if (i != ignore) {
      var plugin = this.config.plugins[i];
      if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) {
        return false;
      }
    }
  }
  return true;
};
EditorState.prototype.applyTransaction = function applyTransaction(rootTr) {
  if (!this.filterTransaction(rootTr)) {
    return { state: this, transactions: [] };
  }
  var trs = [rootTr], newState = this.applyInner(rootTr), seen = null;
  for (; ; ) {
    var haveNew = false;
    for (var i = 0; i < this.config.plugins.length; i++) {
      var plugin = this.config.plugins[i];
      if (plugin.spec.appendTransaction) {
        var n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this;
        var tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
        if (tr && newState.filterTransaction(tr, i)) {
          tr.setMeta("appendedTransaction", rootTr);
          if (!seen) {
            seen = [];
            for (var j = 0; j < this.config.plugins.length; j++) {
              seen.push(j < i ? { state: newState, n: trs.length } : { state: this, n: 0 });
            }
          }
          trs.push(tr);
          newState = newState.applyInner(tr);
          haveNew = true;
        }
        if (seen) {
          seen[i] = { state: newState, n: trs.length };
        }
      }
    }
    if (!haveNew) {
      return { state: newState, transactions: trs };
    }
  }
};
EditorState.prototype.applyInner = function applyInner(tr) {
  if (!tr.before.eq(this.doc)) {
    throw new RangeError("Applying a mismatched transaction");
  }
  var newInstance = new EditorState(this.config), fields = this.config.fields;
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
  }
  for (var i$1 = 0; i$1 < applyListeners.length; i$1++) {
    applyListeners[i$1](this, tr, newInstance);
  }
  return newInstance;
};
prototypeAccessors$1$1.tr.get = function() {
  return new Transaction(this);
};
EditorState.create = function create3(config2) {
  var $config = new Configuration(config2.doc ? config2.doc.type.schema : config2.schema, config2.plugins);
  var instance = new EditorState($config);
  for (var i = 0; i < $config.fields.length; i++) {
    instance[$config.fields[i].name] = $config.fields[i].init(config2, instance);
  }
  return instance;
};
EditorState.prototype.reconfigure = function reconfigure(config2) {
  var $config = new Configuration(this.schema, config2.plugins);
  var fields = $config.fields, instance = new EditorState($config);
  for (var i = 0; i < fields.length; i++) {
    var name = fields[i].name;
    instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config2, instance);
  }
  return instance;
};
EditorState.prototype.toJSON = function toJSON6(pluginFields) {
  var result2 = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
  if (this.storedMarks) {
    result2.storedMarks = this.storedMarks.map(function(m) {
      return m.toJSON();
    });
  }
  if (pluginFields && typeof pluginFields == "object") {
    for (var prop2 in pluginFields) {
      if (prop2 == "doc" || prop2 == "selection") {
        throw new RangeError("The JSON fields `doc` and `selection` are reserved");
      }
      var plugin = pluginFields[prop2], state = plugin.spec.state;
      if (state && state.toJSON) {
        result2[prop2] = state.toJSON.call(plugin, this[plugin.key]);
      }
    }
  }
  return result2;
};
EditorState.fromJSON = function fromJSON7(config2, json, pluginFields) {
  if (!json) {
    throw new RangeError("Invalid input for EditorState.fromJSON");
  }
  if (!config2.schema) {
    throw new RangeError("Required config field 'schema' missing");
  }
  var $config = new Configuration(config2.schema, config2.plugins);
  var instance = new EditorState($config);
  $config.fields.forEach(function(field) {
    if (field.name == "doc") {
      instance.doc = Node$1.fromJSON(config2.schema, json.doc);
    } else if (field.name == "selection") {
      instance.selection = Selection.fromJSON(instance.doc, json.selection);
    } else if (field.name == "storedMarks") {
      if (json.storedMarks) {
        instance.storedMarks = json.storedMarks.map(config2.schema.markFromJSON);
      }
    } else {
      if (pluginFields) {
        for (var prop2 in pluginFields) {
          var plugin = pluginFields[prop2], state = plugin.spec.state;
          if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop2)) {
            instance[field.name] = state.fromJSON.call(plugin, config2, json[prop2], instance);
            return;
          }
        }
      }
      instance[field.name] = field.init(config2, instance);
    }
  });
  return instance;
};
EditorState.addApplyListener = function addApplyListener(f) {
  applyListeners.push(f);
};
EditorState.removeApplyListener = function removeApplyListener(f) {
  var found2 = applyListeners.indexOf(f);
  if (found2 > -1) {
    applyListeners.splice(found2, 1);
  }
};
Object.defineProperties(EditorState.prototype, prototypeAccessors$1$1);
var applyListeners = [];
function bindProps(obj, self, target2) {
  for (var prop2 in obj) {
    var val = obj[prop2];
    if (val instanceof Function) {
      val = val.bind(self);
    } else if (prop2 == "handleDOMEvents") {
      val = bindProps(val, self, {});
    }
    target2[prop2] = val;
  }
  return target2;
}
var Plugin = function Plugin2(spec) {
  this.props = {};
  if (spec.props) {
    bindProps(spec.props, this, this.props);
  }
  this.spec = spec;
  this.key = spec.key ? spec.key.key : createKey("plugin");
};
Plugin.prototype.getState = function getState(state) {
  return state[this.key];
};
var keys = /* @__PURE__ */ Object.create(null);
function createKey(name) {
  if (name in keys) {
    return name + "$" + ++keys[name];
  }
  keys[name] = 0;
  return name + "$";
}
var PluginKey = function PluginKey2(name) {
  if (name === void 0)
    name = "key";
  this.key = createKey(name);
};
PluginKey.prototype.get = function get(state) {
  return state.config.pluginsByKey[this.key];
};
PluginKey.prototype.getState = function getState2(state) {
  return state[this.key];
};
function deleteSelection$2(state, dispatch2) {
  if (state.selection.empty) {
    return false;
  }
  if (dispatch2) {
    dispatch2(state.tr.deleteSelection().scrollIntoView());
  }
  return true;
}
function joinBackward$2(state, dispatch2, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state) : $cursor.parentOffset > 0)) {
    return false;
  }
  var $cut = findCutBefore($cursor);
  if (!$cut) {
    var range2 = $cursor.blockRange(), target2 = range2 && liftTarget(range2);
    if (target2 == null) {
      return false;
    }
    if (dispatch2) {
      dispatch2(state.tr.lift(range2, target2).scrollIntoView());
    }
    return true;
  }
  var before2 = $cut.nodeBefore;
  if (!before2.type.spec.isolating && deleteBarrier(state, $cut, dispatch2)) {
    return true;
  }
  if ($cursor.parent.content.size == 0 && (textblockAt(before2, "end") || NodeSelection.isSelectable(before2))) {
    if (dispatch2) {
      var tr = state.tr.deleteRange($cursor.before(), $cursor.after());
      tr.setSelection(textblockAt(before2, "end") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : NodeSelection.create(tr.doc, $cut.pos - before2.nodeSize));
      dispatch2(tr.scrollIntoView());
    }
    return true;
  }
  if (before2.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch2) {
      dispatch2(state.tr.delete($cut.pos - before2.nodeSize, $cut.pos).scrollIntoView());
    }
    return true;
  }
  return false;
}
function textblockAt(node4, side, only) {
  for (; node4; node4 = side == "start" ? node4.firstChild : node4.lastChild) {
    if (node4.isTextblock) {
      return true;
    }
    if (only && node4.childCount != 1) {
      return false;
    }
  }
  return false;
}
function selectNodeBackward$2(state, dispatch2, view) {
  var ref = state.selection;
  var $head = ref.$head;
  var empty2 = ref.empty;
  var $cut = $head;
  if (!empty2) {
    return false;
  }
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("backward", state) : $head.parentOffset > 0) {
      return false;
    }
    $cut = findCutBefore($head);
  }
  var node4 = $cut && $cut.nodeBefore;
  if (!node4 || !NodeSelection.isSelectable(node4)) {
    return false;
  }
  if (dispatch2) {
    dispatch2(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos - node4.nodeSize)).scrollIntoView());
  }
  return true;
}
function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating) {
    for (var i = $pos.depth - 1; i >= 0; i--) {
      if ($pos.index(i) > 0) {
        return $pos.doc.resolve($pos.before(i + 1));
      }
      if ($pos.node(i).type.spec.isolating) {
        break;
      }
    }
  }
  return null;
}
function joinForward$2(state, dispatch2, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size)) {
    return false;
  }
  var $cut = findCutAfter($cursor);
  if (!$cut) {
    return false;
  }
  var after2 = $cut.nodeAfter;
  if (deleteBarrier(state, $cut, dispatch2)) {
    return true;
  }
  if ($cursor.parent.content.size == 0 && (textblockAt(after2, "start") || NodeSelection.isSelectable(after2))) {
    if (dispatch2) {
      var tr = state.tr.deleteRange($cursor.before(), $cursor.after());
      tr.setSelection(textblockAt(after2, "start") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
      dispatch2(tr.scrollIntoView());
    }
    return true;
  }
  if (after2.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch2) {
      dispatch2(state.tr.delete($cut.pos, $cut.pos + after2.nodeSize).scrollIntoView());
    }
    return true;
  }
  return false;
}
function selectNodeForward$2(state, dispatch2, view) {
  var ref = state.selection;
  var $head = ref.$head;
  var empty2 = ref.empty;
  var $cut = $head;
  if (!empty2) {
    return false;
  }
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size) {
      return false;
    }
    $cut = findCutAfter($head);
  }
  var node4 = $cut && $cut.nodeAfter;
  if (!node4 || !NodeSelection.isSelectable(node4)) {
    return false;
  }
  if (dispatch2) {
    dispatch2(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos)).scrollIntoView());
  }
  return true;
}
function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating) {
    for (var i = $pos.depth - 1; i >= 0; i--) {
      var parent = $pos.node(i);
      if ($pos.index(i) + 1 < parent.childCount) {
        return $pos.doc.resolve($pos.after(i + 1));
      }
      if (parent.type.spec.isolating) {
        break;
      }
    }
  }
  return null;
}
function lift$2(state, dispatch2) {
  var ref = state.selection;
  var $from = ref.$from;
  var $to = ref.$to;
  var range2 = $from.blockRange($to), target2 = range2 && liftTarget(range2);
  if (target2 == null) {
    return false;
  }
  if (dispatch2) {
    dispatch2(state.tr.lift(range2, target2).scrollIntoView());
  }
  return true;
}
function newlineInCode$2(state, dispatch2) {
  var ref = state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) {
    return false;
  }
  if (dispatch2) {
    dispatch2(state.tr.insertText("\n").scrollIntoView());
  }
  return true;
}
function defaultBlockAt(match2) {
  for (var i = 0; i < match2.edgeCount; i++) {
    var ref = match2.edge(i);
    var type = ref.type;
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
function exitCode$2(state, dispatch2) {
  var ref = state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) {
    return false;
  }
  var above = $head.node(-1), after2 = $head.indexAfter(-1), type = defaultBlockAt(above.contentMatchAt(after2));
  if (!above.canReplaceWith(after2, after2, type)) {
    return false;
  }
  if (dispatch2) {
    var pos = $head.after(), tr = state.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(Selection.near(tr.doc.resolve(pos), 1));
    dispatch2(tr.scrollIntoView());
  }
  return true;
}
function createParagraphNear$2(state, dispatch2) {
  var sel = state.selection;
  var $from = sel.$from;
  var $to = sel.$to;
  if (sel instanceof AllSelection || $from.parent.inlineContent || $to.parent.inlineContent) {
    return false;
  }
  var type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));
  if (!type || !type.isTextblock) {
    return false;
  }
  if (dispatch2) {
    var side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    var tr = state.tr.insert(side, type.createAndFill());
    tr.setSelection(TextSelection.create(tr.doc, side + 1));
    dispatch2(tr.scrollIntoView());
  }
  return true;
}
function liftEmptyBlock$2(state, dispatch2) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || $cursor.parent.content.size) {
    return false;
  }
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    var before2 = $cursor.before();
    if (canSplit(state.doc, before2)) {
      if (dispatch2) {
        dispatch2(state.tr.split(before2).scrollIntoView());
      }
      return true;
    }
  }
  var range2 = $cursor.blockRange(), target2 = range2 && liftTarget(range2);
  if (target2 == null) {
    return false;
  }
  if (dispatch2) {
    dispatch2(state.tr.lift(range2, target2).scrollIntoView());
  }
  return true;
}
function selectParentNode$2(state, dispatch2) {
  var ref = state.selection;
  var $from = ref.$from;
  var to = ref.to;
  var pos;
  var same = $from.sharedDepth(to);
  if (same == 0) {
    return false;
  }
  pos = $from.before(same);
  if (dispatch2) {
    dispatch2(state.tr.setSelection(NodeSelection.create(state.doc, pos)));
  }
  return true;
}
function joinMaybeClear(state, $pos, dispatch2) {
  var before2 = $pos.nodeBefore, after2 = $pos.nodeAfter, index2 = $pos.index();
  if (!before2 || !after2 || !before2.type.compatibleContent(after2.type)) {
    return false;
  }
  if (!before2.content.size && $pos.parent.canReplace(index2 - 1, index2)) {
    if (dispatch2) {
      dispatch2(state.tr.delete($pos.pos - before2.nodeSize, $pos.pos).scrollIntoView());
    }
    return true;
  }
  if (!$pos.parent.canReplace(index2, index2 + 1) || !(after2.isTextblock || canJoin(state.doc, $pos.pos))) {
    return false;
  }
  if (dispatch2) {
    dispatch2(state.tr.clearIncompatible($pos.pos, before2.type, before2.contentMatchAt(before2.childCount)).join($pos.pos).scrollIntoView());
  }
  return true;
}
function deleteBarrier(state, $cut, dispatch2) {
  var before2 = $cut.nodeBefore, after2 = $cut.nodeAfter, conn, match2;
  if (before2.type.spec.isolating || after2.type.spec.isolating) {
    return false;
  }
  if (joinMaybeClear(state, $cut, dispatch2)) {
    return true;
  }
  var canDelAfter = $cut.parent.canReplace($cut.index(), $cut.index() + 1);
  if (canDelAfter && (conn = (match2 = before2.contentMatchAt(before2.childCount)).findWrapping(after2.type)) && match2.matchType(conn[0] || after2.type).validEnd) {
    if (dispatch2) {
      var end2 = $cut.pos + after2.nodeSize, wrap = Fragment.empty;
      for (var i = conn.length - 1; i >= 0; i--) {
        wrap = Fragment.from(conn[i].create(null, wrap));
      }
      wrap = Fragment.from(before2.copy(wrap));
      var tr = state.tr.step(new ReplaceAroundStep($cut.pos - 1, end2, $cut.pos, end2, new Slice(wrap, 1, 0), conn.length, true));
      var joinAt = end2 + 2 * conn.length;
      if (canJoin(tr.doc, joinAt)) {
        tr.join(joinAt);
      }
      dispatch2(tr.scrollIntoView());
    }
    return true;
  }
  var selAfter = Selection.findFrom($cut, 1);
  var range2 = selAfter && selAfter.$from.blockRange(selAfter.$to), target2 = range2 && liftTarget(range2);
  if (target2 != null && target2 >= $cut.depth) {
    if (dispatch2) {
      dispatch2(state.tr.lift(range2, target2).scrollIntoView());
    }
    return true;
  }
  if (canDelAfter && textblockAt(after2, "start", true) && textblockAt(before2, "end")) {
    var at = before2, wrap$1 = [];
    for (; ; ) {
      wrap$1.push(at);
      if (at.isTextblock) {
        break;
      }
      at = at.lastChild;
    }
    var afterText = after2, afterDepth = 1;
    for (; !afterText.isTextblock; afterText = afterText.firstChild) {
      afterDepth++;
    }
    if (at.canReplace(at.childCount, at.childCount, afterText.content)) {
      if (dispatch2) {
        var end$1 = Fragment.empty;
        for (var i$1 = wrap$1.length - 1; i$1 >= 0; i$1--) {
          end$1 = Fragment.from(wrap$1[i$1].copy(end$1));
        }
        var tr$1 = state.tr.step(new ReplaceAroundStep($cut.pos - wrap$1.length, $cut.pos + after2.nodeSize, $cut.pos + afterDepth, $cut.pos + after2.nodeSize - afterDepth, new Slice(end$1, wrap$1.length, 0), 0, true));
        dispatch2(tr$1.scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function wrapIn$2(nodeType2, attrs2) {
  return function(state, dispatch2) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range2 = $from.blockRange($to), wrapping = range2 && findWrapping3(range2, nodeType2, attrs2);
    if (!wrapping) {
      return false;
    }
    if (dispatch2) {
      dispatch2(state.tr.wrap(range2, wrapping).scrollIntoView());
    }
    return true;
  };
}
function setBlockType(nodeType2, attrs2) {
  return function(state, dispatch2) {
    var ref = state.selection;
    var from4 = ref.from;
    var to = ref.to;
    var applicable = false;
    state.doc.nodesBetween(from4, to, function(node4, pos) {
      if (applicable) {
        return false;
      }
      if (!node4.isTextblock || node4.hasMarkup(nodeType2, attrs2)) {
        return;
      }
      if (node4.type == nodeType2) {
        applicable = true;
      } else {
        var $pos = state.doc.resolve(pos), index2 = $pos.index();
        applicable = $pos.parent.canReplaceWith(index2, index2 + 1, nodeType2);
      }
    });
    if (!applicable) {
      return false;
    }
    if (dispatch2) {
      dispatch2(state.tr.setBlockType(from4, to, nodeType2, attrs2).scrollIntoView());
    }
    return true;
  };
}
typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os != "undefined" ? os.platform() == "darwin" : false;
function wrapInList$2(listType, attrs2) {
  return function(state, dispatch2) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range2 = $from.blockRange($to), doJoin = false, outerRange = range2;
    if (!range2) {
      return false;
    }
    if (range2.depth >= 2 && $from.node(range2.depth - 1).type.compatibleContent(listType) && range2.startIndex == 0) {
      if ($from.index(range2.depth - 1) == 0) {
        return false;
      }
      var $insert = state.doc.resolve(range2.start - 2);
      outerRange = new NodeRange($insert, $insert, range2.depth);
      if (range2.endIndex < range2.parent.childCount) {
        range2 = new NodeRange($from, state.doc.resolve($to.end(range2.depth)), range2.depth);
      }
      doJoin = true;
    }
    var wrap = findWrapping3(outerRange, listType, attrs2, range2);
    if (!wrap) {
      return false;
    }
    if (dispatch2) {
      dispatch2(doWrapInList(state.tr, range2, wrap, doJoin, listType).scrollIntoView());
    }
    return true;
  };
}
function doWrapInList(tr, range2, wrappers, joinBefore, listType) {
  var content2 = Fragment.empty;
  for (var i = wrappers.length - 1; i >= 0; i--) {
    content2 = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content2));
  }
  tr.step(new ReplaceAroundStep(range2.start - (joinBefore ? 2 : 0), range2.end, range2.start, range2.end, new Slice(content2, 0, 0), wrappers.length, true));
  var found2 = 0;
  for (var i$1 = 0; i$1 < wrappers.length; i$1++) {
    if (wrappers[i$1].type == listType) {
      found2 = i$1 + 1;
    }
  }
  var splitDepth = wrappers.length - found2;
  var splitPos = range2.start + wrappers.length - (joinBefore ? 2 : 0), parent = range2.parent;
  for (var i$2 = range2.startIndex, e = range2.endIndex, first2 = true; i$2 < e; i$2++, first2 = false) {
    if (!first2 && canSplit(tr.doc, splitPos, splitDepth)) {
      tr.split(splitPos, splitDepth);
      splitPos += 2 * splitDepth;
    }
    splitPos += parent.child(i$2).nodeSize;
  }
  return tr;
}
function liftListItem$2(itemType) {
  return function(state, dispatch2) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range2 = $from.blockRange($to, function(node4) {
      return node4.childCount && node4.firstChild.type == itemType;
    });
    if (!range2) {
      return false;
    }
    if (!dispatch2) {
      return true;
    }
    if ($from.node(range2.depth - 1).type == itemType) {
      return liftToOuterList(state, dispatch2, itemType, range2);
    } else {
      return liftOutOfList(state, dispatch2, range2);
    }
  };
}
function liftToOuterList(state, dispatch2, itemType, range2) {
  var tr = state.tr, end2 = range2.end, endOfList = range2.$to.end(range2.depth);
  if (end2 < endOfList) {
    tr.step(new ReplaceAroundStep(end2 - 1, endOfList, end2, endOfList, new Slice(Fragment.from(itemType.create(null, range2.parent.copy())), 1, 0), 1, true));
    range2 = new NodeRange(tr.doc.resolve(range2.$from.pos), tr.doc.resolve(endOfList), range2.depth);
  }
  dispatch2(tr.lift(range2, liftTarget(range2)).scrollIntoView());
  return true;
}
function liftOutOfList(state, dispatch2, range2) {
  var tr = state.tr, list3 = range2.parent;
  for (var pos = range2.end, i = range2.endIndex - 1, e = range2.startIndex; i > e; i--) {
    pos -= list3.child(i).nodeSize;
    tr.delete(pos - 1, pos + 1);
  }
  var $start = tr.doc.resolve(range2.start), item = $start.nodeAfter;
  if (tr.mapping.map(range2.end) != range2.start + $start.nodeAfter.nodeSize) {
    return false;
  }
  var atStart2 = range2.startIndex == 0, atEnd2 = range2.endIndex == list3.childCount;
  var parent = $start.node(-1), indexBefore = $start.index(-1);
  if (!parent.canReplace(indexBefore + (atStart2 ? 0 : 1), indexBefore + 1, item.content.append(atEnd2 ? Fragment.empty : Fragment.from(list3)))) {
    return false;
  }
  var start3 = $start.pos, end2 = start3 + item.nodeSize;
  tr.step(new ReplaceAroundStep(start3 - (atStart2 ? 1 : 0), end2 + (atEnd2 ? 1 : 0), start3 + 1, end2 - 1, new Slice((atStart2 ? Fragment.empty : Fragment.from(list3.copy(Fragment.empty))).append(atEnd2 ? Fragment.empty : Fragment.from(list3.copy(Fragment.empty))), atStart2 ? 0 : 1, atEnd2 ? 0 : 1), atStart2 ? 0 : 1));
  dispatch2(tr.scrollIntoView());
  return true;
}
function sinkListItem$2(itemType) {
  return function(state, dispatch2) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range2 = $from.blockRange($to, function(node4) {
      return node4.childCount && node4.firstChild.type == itemType;
    });
    if (!range2) {
      return false;
    }
    var startIndex2 = range2.startIndex;
    if (startIndex2 == 0) {
      return false;
    }
    var parent = range2.parent, nodeBefore = parent.child(startIndex2 - 1);
    if (nodeBefore.type != itemType) {
      return false;
    }
    if (dispatch2) {
      var nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type;
      var inner = Fragment.from(nestedBefore ? itemType.create() : null);
      var slice4 = new Slice(Fragment.from(itemType.create(null, Fragment.from(parent.type.create(null, inner)))), nestedBefore ? 3 : 1, 0);
      var before2 = range2.start, after2 = range2.end;
      dispatch2(state.tr.step(new ReplaceAroundStep(before2 - (nestedBefore ? 3 : 1), after2, before2, after2, slice4, 1, true)).scrollIntoView());
    }
    return true;
  };
}
var result = {};
if (typeof navigator != "undefined" && typeof document != "undefined") {
  var ie_edge = /Edge\/(\d+)/.exec(navigator.userAgent);
  var ie_upto10 = /MSIE \d/.test(navigator.userAgent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  var ie$1 = result.ie = !!(ie_upto10 || ie_11up || ie_edge);
  result.ie_version = ie_upto10 ? document.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : null;
  result.gecko = !ie$1 && /gecko\/(\d+)/i.test(navigator.userAgent);
  result.gecko_version = result.gecko && +(/Firefox\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1];
  var chrome$1 = !ie$1 && /Chrome\/(\d+)/.exec(navigator.userAgent);
  result.chrome = !!chrome$1;
  result.chrome_version = chrome$1 && +chrome$1[1];
  result.safari = !ie$1 && /Apple Computer/.test(navigator.vendor);
  result.ios = result.safari && (/Mobile\/\w+/.test(navigator.userAgent) || navigator.maxTouchPoints > 2);
  result.mac = result.ios || /Mac/.test(navigator.platform);
  result.android = /Android \d/.test(navigator.userAgent);
  result.webkit = "webkitFontSmoothing" in document.documentElement.style;
  result.webkit_version = result.webkit && +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1];
}
var domIndex = function(node4) {
  for (var index2 = 0; ; index2++) {
    node4 = node4.previousSibling;
    if (!node4) {
      return index2;
    }
  }
};
var parentNode = function(node4) {
  var parent = node4.assignedSlot || node4.parentNode;
  return parent && parent.nodeType == 11 ? parent.host : parent;
};
var reusedRange = null;
var textRange = function(node4, from4, to) {
  var range2 = reusedRange || (reusedRange = document.createRange());
  range2.setEnd(node4, to == null ? node4.nodeValue.length : to);
  range2.setStart(node4, from4 || 0);
  return range2;
};
var isEquivalentPosition = function(node4, off, targetNode, targetOff) {
  return targetNode && (scanFor(node4, off, targetNode, targetOff, -1) || scanFor(node4, off, targetNode, targetOff, 1));
};
var atomElements = /^(img|br|input|textarea|hr)$/i;
function scanFor(node4, off, targetNode, targetOff, dir) {
  for (; ; ) {
    if (node4 == targetNode && off == targetOff) {
      return true;
    }
    if (off == (dir < 0 ? 0 : nodeSize(node4))) {
      var parent = node4.parentNode;
      if (parent.nodeType != 1 || hasBlockDesc(node4) || atomElements.test(node4.nodeName) || node4.contentEditable == "false") {
        return false;
      }
      off = domIndex(node4) + (dir < 0 ? 0 : 1);
      node4 = parent;
    } else if (node4.nodeType == 1) {
      node4 = node4.childNodes[off + (dir < 0 ? -1 : 0)];
      if (node4.contentEditable == "false") {
        return false;
      }
      off = dir < 0 ? nodeSize(node4) : 0;
    } else {
      return false;
    }
  }
}
function nodeSize(node4) {
  return node4.nodeType == 3 ? node4.nodeValue.length : node4.childNodes.length;
}
function isOnEdge(node4, offset2, parent) {
  for (var atStart2 = offset2 == 0, atEnd2 = offset2 == nodeSize(node4); atStart2 || atEnd2; ) {
    if (node4 == parent) {
      return true;
    }
    var index2 = domIndex(node4);
    node4 = node4.parentNode;
    if (!node4) {
      return false;
    }
    atStart2 = atStart2 && index2 == 0;
    atEnd2 = atEnd2 && index2 == nodeSize(node4);
  }
}
function hasBlockDesc(dom) {
  var desc;
  for (var cur = dom; cur; cur = cur.parentNode) {
    if (desc = cur.pmViewDesc) {
      break;
    }
  }
  return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
}
var selectionCollapsed = function(domSel) {
  var collapsed = domSel.isCollapsed;
  if (collapsed && result.chrome && domSel.rangeCount && !domSel.getRangeAt(0).collapsed) {
    collapsed = false;
  }
  return collapsed;
};
function keyEvent(keyCode, key) {
  var event = document.createEvent("Event");
  event.initEvent("keydown", true, true);
  event.keyCode = keyCode;
  event.key = event.code = key;
  return event;
}
function windowRect(doc2) {
  return {
    left: 0,
    right: doc2.documentElement.clientWidth,
    top: 0,
    bottom: doc2.documentElement.clientHeight
  };
}
function getSide(value, side) {
  return typeof value == "number" ? value : value[side];
}
function clientRect(node4) {
  var rect2 = node4.getBoundingClientRect();
  var scaleX = rect2.width / node4.offsetWidth || 1;
  var scaleY = rect2.height / node4.offsetHeight || 1;
  return {
    left: rect2.left,
    right: rect2.left + node4.clientWidth * scaleX,
    top: rect2.top,
    bottom: rect2.top + node4.clientHeight * scaleY
  };
}
function scrollRectIntoView(view, rect2, startDOM) {
  var scrollThreshold = view.someProp("scrollThreshold") || 0, scrollMargin = view.someProp("scrollMargin") || 5;
  var doc2 = view.dom.ownerDocument;
  for (var parent = startDOM || view.dom; ; parent = parentNode(parent)) {
    if (!parent) {
      break;
    }
    if (parent.nodeType != 1) {
      continue;
    }
    var atTop = parent == doc2.body || parent.nodeType != 1;
    var bounding = atTop ? windowRect(doc2) : clientRect(parent);
    var moveX = 0, moveY = 0;
    if (rect2.top < bounding.top + getSide(scrollThreshold, "top")) {
      moveY = -(bounding.top - rect2.top + getSide(scrollMargin, "top"));
    } else if (rect2.bottom > bounding.bottom - getSide(scrollThreshold, "bottom")) {
      moveY = rect2.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
    }
    if (rect2.left < bounding.left + getSide(scrollThreshold, "left")) {
      moveX = -(bounding.left - rect2.left + getSide(scrollMargin, "left"));
    } else if (rect2.right > bounding.right - getSide(scrollThreshold, "right")) {
      moveX = rect2.right - bounding.right + getSide(scrollMargin, "right");
    }
    if (moveX || moveY) {
      if (atTop) {
        doc2.defaultView.scrollBy(moveX, moveY);
      } else {
        var startX = parent.scrollLeft, startY = parent.scrollTop;
        if (moveY) {
          parent.scrollTop += moveY;
        }
        if (moveX) {
          parent.scrollLeft += moveX;
        }
        var dX = parent.scrollLeft - startX, dY = parent.scrollTop - startY;
        rect2 = { left: rect2.left - dX, top: rect2.top - dY, right: rect2.right - dX, bottom: rect2.bottom - dY };
      }
    }
    if (atTop) {
      break;
    }
  }
}
function storeScrollPos(view) {
  var rect2 = view.dom.getBoundingClientRect(), startY = Math.max(0, rect2.top);
  var refDOM, refTop;
  for (var x = (rect2.left + rect2.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect2.bottom); y += 5) {
    var dom = view.root.elementFromPoint(x, y);
    if (dom == view.dom || !view.dom.contains(dom)) {
      continue;
    }
    var localRect = dom.getBoundingClientRect();
    if (localRect.top >= startY - 20) {
      refDOM = dom;
      refTop = localRect.top;
      break;
    }
  }
  return { refDOM, refTop, stack: scrollStack(view.dom) };
}
function scrollStack(dom) {
  var stack = [], doc2 = dom.ownerDocument;
  for (; dom; dom = parentNode(dom)) {
    stack.push({ dom, top: dom.scrollTop, left: dom.scrollLeft });
    if (dom == doc2) {
      break;
    }
  }
  return stack;
}
function resetScrollPos(ref) {
  var refDOM = ref.refDOM;
  var refTop = ref.refTop;
  var stack = ref.stack;
  var newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
  restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
}
function restoreScrollStack(stack, dTop) {
  for (var i = 0; i < stack.length; i++) {
    var ref = stack[i];
    var dom = ref.dom;
    var top3 = ref.top;
    var left = ref.left;
    if (dom.scrollTop != top3 + dTop) {
      dom.scrollTop = top3 + dTop;
    }
    if (dom.scrollLeft != left) {
      dom.scrollLeft = left;
    }
  }
}
var preventScrollSupported = null;
function focusPreventScroll(dom) {
  if (dom.setActive) {
    return dom.setActive();
  }
  if (preventScrollSupported) {
    return dom.focus(preventScrollSupported);
  }
  var stored = scrollStack(dom);
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = { preventScroll: true };
      return true;
    }
  } : void 0);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    restoreScrollStack(stored, 0);
  }
}
function findOffsetInNode(node4, coords) {
  var closest, dxClosest = 2e8, coordsClosest, offset2 = 0;
  var rowBot = coords.top, rowTop = coords.top;
  for (var child3 = node4.firstChild, childIndex = 0; child3; child3 = child3.nextSibling, childIndex++) {
    var rects = void 0;
    if (child3.nodeType == 1) {
      rects = child3.getClientRects();
    } else if (child3.nodeType == 3) {
      rects = textRange(child3).getClientRects();
    } else {
      continue;
    }
    for (var i = 0; i < rects.length; i++) {
      var rect2 = rects[i];
      if (rect2.top <= rowBot && rect2.bottom >= rowTop) {
        rowBot = Math.max(rect2.bottom, rowBot);
        rowTop = Math.min(rect2.top, rowTop);
        var dx = rect2.left > coords.left ? rect2.left - coords.left : rect2.right < coords.left ? coords.left - rect2.right : 0;
        if (dx < dxClosest) {
          closest = child3;
          dxClosest = dx;
          coordsClosest = dx && closest.nodeType == 3 ? { left: rect2.right < coords.left ? rect2.right : rect2.left, top: coords.top } : coords;
          if (child3.nodeType == 1 && dx) {
            offset2 = childIndex + (coords.left >= (rect2.left + rect2.right) / 2 ? 1 : 0);
          }
          continue;
        }
      }
      if (!closest && (coords.left >= rect2.right && coords.top >= rect2.top || coords.left >= rect2.left && coords.top >= rect2.bottom)) {
        offset2 = childIndex + 1;
      }
    }
  }
  if (closest && closest.nodeType == 3) {
    return findOffsetInText(closest, coordsClosest);
  }
  if (!closest || dxClosest && closest.nodeType == 1) {
    return { node: node4, offset: offset2 };
  }
  return findOffsetInNode(closest, coordsClosest);
}
function findOffsetInText(node4, coords) {
  var len = node4.nodeValue.length;
  var range2 = document.createRange();
  for (var i = 0; i < len; i++) {
    range2.setEnd(node4, i + 1);
    range2.setStart(node4, i);
    var rect2 = singleRect(range2, 1);
    if (rect2.top == rect2.bottom) {
      continue;
    }
    if (inRect(coords, rect2)) {
      return { node: node4, offset: i + (coords.left >= (rect2.left + rect2.right) / 2 ? 1 : 0) };
    }
  }
  return { node: node4, offset: 0 };
}
function inRect(coords, rect2) {
  return coords.left >= rect2.left - 1 && coords.left <= rect2.right + 1 && coords.top >= rect2.top - 1 && coords.top <= rect2.bottom + 1;
}
function targetKludge(dom, coords) {
  var parent = dom.parentNode;
  if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left) {
    return parent;
  }
  return dom;
}
function posFromElement(view, elt, coords) {
  var ref = findOffsetInNode(elt, coords);
  var node4 = ref.node;
  var offset2 = ref.offset;
  var bias = -1;
  if (node4.nodeType == 1 && !node4.firstChild) {
    var rect2 = node4.getBoundingClientRect();
    bias = rect2.left != rect2.right && coords.left > (rect2.left + rect2.right) / 2 ? 1 : -1;
  }
  return view.docView.posFromDOM(node4, offset2, bias);
}
function posFromCaret(view, node4, offset2, coords) {
  var outside = -1;
  for (var cur = node4; ; ) {
    if (cur == view.dom) {
      break;
    }
    var desc = view.docView.nearestDesc(cur, true);
    if (!desc) {
      return null;
    }
    if (desc.node.isBlock && desc.parent) {
      var rect2 = desc.dom.getBoundingClientRect();
      if (rect2.left > coords.left || rect2.top > coords.top) {
        outside = desc.posBefore;
      } else if (rect2.right < coords.left || rect2.bottom < coords.top) {
        outside = desc.posAfter;
      } else {
        break;
      }
    }
    cur = desc.dom.parentNode;
  }
  return outside > -1 ? outside : view.docView.posFromDOM(node4, offset2);
}
function elementFromPoint(element, coords, box) {
  var len = element.childNodes.length;
  if (len && box.top < box.bottom) {
    for (var startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI; ; ) {
      var child3 = element.childNodes[i];
      if (child3.nodeType == 1) {
        var rects = child3.getClientRects();
        for (var j = 0; j < rects.length; j++) {
          var rect2 = rects[j];
          if (inRect(coords, rect2)) {
            return elementFromPoint(child3, coords, rect2);
          }
        }
      }
      if ((i = (i + 1) % len) == startI) {
        break;
      }
    }
  }
  return element;
}
function posAtCoords(view, coords) {
  var assign2, assign$12;
  var doc2 = view.dom.ownerDocument, node4, offset2;
  if (doc2.caretPositionFromPoint) {
    try {
      var pos$1 = doc2.caretPositionFromPoint(coords.left, coords.top);
      if (pos$1) {
        assign2 = pos$1, node4 = assign2.offsetNode, offset2 = assign2.offset;
      }
    } catch (_) {
    }
  }
  if (!node4 && doc2.caretRangeFromPoint) {
    var range2 = doc2.caretRangeFromPoint(coords.left, coords.top);
    if (range2) {
      assign$12 = range2, node4 = assign$12.startContainer, offset2 = assign$12.startOffset;
    }
  }
  var elt = (view.root.elementFromPoint ? view.root : doc2).elementFromPoint(coords.left, coords.top + 1), pos;
  if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
    var box = view.dom.getBoundingClientRect();
    if (!inRect(coords, box)) {
      return null;
    }
    elt = elementFromPoint(view.dom, coords, box);
    if (!elt) {
      return null;
    }
  }
  if (result.safari) {
    for (var p = elt; node4 && p; p = parentNode(p)) {
      if (p.draggable) {
        node4 = offset2 = null;
      }
    }
  }
  elt = targetKludge(elt, coords);
  if (node4) {
    if (result.gecko && node4.nodeType == 1) {
      offset2 = Math.min(offset2, node4.childNodes.length);
      if (offset2 < node4.childNodes.length) {
        var next = node4.childNodes[offset2], box$1;
        if (next.nodeName == "IMG" && (box$1 = next.getBoundingClientRect()).right <= coords.left && box$1.bottom > coords.top) {
          offset2++;
        }
      }
    }
    if (node4 == view.dom && offset2 == node4.childNodes.length - 1 && node4.lastChild.nodeType == 1 && coords.top > node4.lastChild.getBoundingClientRect().bottom) {
      pos = view.state.doc.content.size;
    } else if (offset2 == 0 || node4.nodeType != 1 || node4.childNodes[offset2 - 1].nodeName != "BR") {
      pos = posFromCaret(view, node4, offset2, coords);
    }
  }
  if (pos == null) {
    pos = posFromElement(view, elt, coords);
  }
  var desc = view.docView.nearestDesc(elt, true);
  return { pos, inside: desc ? desc.posAtStart - desc.border : -1 };
}
function singleRect(object, bias) {
  var rects = object.getClientRects();
  return !rects.length ? object.getBoundingClientRect() : rects[bias < 0 ? 0 : rects.length - 1];
}
var BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function coordsAtPos(view, pos, side) {
  var ref = view.docView.domFromPos(pos, side < 0 ? -1 : 1);
  var node4 = ref.node;
  var offset2 = ref.offset;
  var supportEmptyRange = result.webkit || result.gecko;
  if (node4.nodeType == 3) {
    if (supportEmptyRange && (BIDI.test(node4.nodeValue) || (side < 0 ? !offset2 : offset2 == node4.nodeValue.length))) {
      var rect2 = singleRect(textRange(node4, offset2, offset2), side);
      if (result.gecko && offset2 && /\s/.test(node4.nodeValue[offset2 - 1]) && offset2 < node4.nodeValue.length) {
        var rectBefore = singleRect(textRange(node4, offset2 - 1, offset2 - 1), -1);
        if (rectBefore.top == rect2.top) {
          var rectAfter = singleRect(textRange(node4, offset2, offset2 + 1), -1);
          if (rectAfter.top != rect2.top) {
            return flattenV(rectAfter, rectAfter.left < rectBefore.left);
          }
        }
      }
      return rect2;
    } else {
      var from4 = offset2, to = offset2, takeSide = side < 0 ? 1 : -1;
      if (side < 0 && !offset2) {
        to++;
        takeSide = -1;
      } else if (side >= 0 && offset2 == node4.nodeValue.length) {
        from4--;
        takeSide = 1;
      } else if (side < 0) {
        from4--;
      } else {
        to++;
      }
      return flattenV(singleRect(textRange(node4, from4, to), takeSide), takeSide < 0);
    }
  }
  if (!view.state.doc.resolve(pos).parent.inlineContent) {
    if (offset2 && (side < 0 || offset2 == nodeSize(node4))) {
      var before2 = node4.childNodes[offset2 - 1];
      if (before2.nodeType == 1) {
        return flattenH(before2.getBoundingClientRect(), false);
      }
    }
    if (offset2 < nodeSize(node4)) {
      var after2 = node4.childNodes[offset2];
      if (after2.nodeType == 1) {
        return flattenH(after2.getBoundingClientRect(), true);
      }
    }
    return flattenH(node4.getBoundingClientRect(), side >= 0);
  }
  if (offset2 && (side < 0 || offset2 == nodeSize(node4))) {
    var before$1 = node4.childNodes[offset2 - 1];
    var target2 = before$1.nodeType == 3 ? textRange(before$1, nodeSize(before$1) - (supportEmptyRange ? 0 : 1)) : before$1.nodeType == 1 && (before$1.nodeName != "BR" || !before$1.nextSibling) ? before$1 : null;
    if (target2) {
      return flattenV(singleRect(target2, 1), false);
    }
  }
  if (offset2 < nodeSize(node4)) {
    var after$1 = node4.childNodes[offset2];
    while (after$1.pmViewDesc && after$1.pmViewDesc.ignoreForCoords) {
      after$1 = after$1.nextSibling;
    }
    var target$1 = !after$1 ? null : after$1.nodeType == 3 ? textRange(after$1, 0, supportEmptyRange ? 0 : 1) : after$1.nodeType == 1 ? after$1 : null;
    if (target$1) {
      return flattenV(singleRect(target$1, -1), true);
    }
  }
  return flattenV(singleRect(node4.nodeType == 3 ? textRange(node4) : node4, -side), side >= 0);
}
function flattenV(rect2, left) {
  if (rect2.width == 0) {
    return rect2;
  }
  var x = left ? rect2.left : rect2.right;
  return { top: rect2.top, bottom: rect2.bottom, left: x, right: x };
}
function flattenH(rect2, top3) {
  if (rect2.height == 0) {
    return rect2;
  }
  var y = top3 ? rect2.top : rect2.bottom;
  return { top: y, bottom: y, left: rect2.left, right: rect2.right };
}
function withFlushedState(view, state, f) {
  var viewState = view.state, active = view.root.activeElement;
  if (viewState != state) {
    view.updateState(state);
  }
  if (active != view.dom) {
    view.focus();
  }
  try {
    return f();
  } finally {
    if (viewState != state) {
      view.updateState(viewState);
    }
    if (active != view.dom && active) {
      active.focus();
    }
  }
}
function endOfTextblockVertical(view, state, dir) {
  var sel = state.selection;
  var $pos = dir == "up" ? sel.$from : sel.$to;
  return withFlushedState(view, state, function() {
    var ref = view.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1);
    var dom = ref.node;
    for (; ; ) {
      var nearest = view.docView.nearestDesc(dom, true);
      if (!nearest) {
        break;
      }
      if (nearest.node.isBlock) {
        dom = nearest.dom;
        break;
      }
      dom = nearest.dom.parentNode;
    }
    var coords = coordsAtPos(view, $pos.pos, 1);
    for (var child3 = dom.firstChild; child3; child3 = child3.nextSibling) {
      var boxes = void 0;
      if (child3.nodeType == 1) {
        boxes = child3.getClientRects();
      } else if (child3.nodeType == 3) {
        boxes = textRange(child3, 0, child3.nodeValue.length).getClientRects();
      } else {
        continue;
      }
      for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2)) {
          return false;
        }
      }
    }
    return true;
  });
}
var maybeRTL = /[\u0590-\u08ac]/;
function endOfTextblockHorizontal(view, state, dir) {
  var ref = state.selection;
  var $head = ref.$head;
  if (!$head.parent.isTextblock) {
    return false;
  }
  var offset2 = $head.parentOffset, atStart2 = !offset2, atEnd2 = offset2 == $head.parent.content.size;
  var sel = view.root.getSelection();
  if (!maybeRTL.test($head.parent.textContent) || !sel.modify) {
    return dir == "left" || dir == "backward" ? atStart2 : atEnd2;
  }
  return withFlushedState(view, state, function() {
    var oldRange = sel.getRangeAt(0), oldNode = sel.focusNode, oldOff = sel.focusOffset;
    var oldBidiLevel = sel.caretBidiLevel;
    sel.modify("move", dir, "character");
    var parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
    var result2 = !parentDOM.contains(sel.focusNode.nodeType == 1 ? sel.focusNode : sel.focusNode.parentNode) || oldNode == sel.focusNode && oldOff == sel.focusOffset;
    sel.removeAllRanges();
    sel.addRange(oldRange);
    if (oldBidiLevel != null) {
      sel.caretBidiLevel = oldBidiLevel;
    }
    return result2;
  });
}
var cachedState = null, cachedDir = null, cachedResult = false;
function endOfTextblock(view, state, dir) {
  if (cachedState == state && cachedDir == dir) {
    return cachedResult;
  }
  cachedState = state;
  cachedDir = dir;
  return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view, state, dir) : endOfTextblockHorizontal(view, state, dir);
}
var NOT_DIRTY = 0, CHILD_DIRTY = 1, CONTENT_DIRTY = 2, NODE_DIRTY = 3;
var ViewDesc = function ViewDesc2(parent, children, dom, contentDOM) {
  this.parent = parent;
  this.children = children;
  this.dom = dom;
  dom.pmViewDesc = this;
  this.contentDOM = contentDOM;
  this.dirty = NOT_DIRTY;
};
var prototypeAccessors = { size: { configurable: true }, border: { configurable: true }, posBefore: { configurable: true }, posAtStart: { configurable: true }, posAfter: { configurable: true }, posAtEnd: { configurable: true }, contentLost: { configurable: true }, domAtom: { configurable: true }, ignoreForCoords: { configurable: true } };
ViewDesc.prototype.matchesWidget = function matchesWidget() {
  return false;
};
ViewDesc.prototype.matchesMark = function matchesMark() {
  return false;
};
ViewDesc.prototype.matchesNode = function matchesNode() {
  return false;
};
ViewDesc.prototype.matchesHack = function matchesHack(_nodeName) {
  return false;
};
ViewDesc.prototype.parseRule = function parseRule() {
  return null;
};
ViewDesc.prototype.stopEvent = function stopEvent() {
  return false;
};
prototypeAccessors.size.get = function() {
  var size = 0;
  for (var i = 0; i < this.children.length; i++) {
    size += this.children[i].size;
  }
  return size;
};
prototypeAccessors.border.get = function() {
  return 0;
};
ViewDesc.prototype.destroy = function destroy() {
  this.parent = null;
  if (this.dom.pmViewDesc == this) {
    this.dom.pmViewDesc = null;
  }
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].destroy();
  }
};
ViewDesc.prototype.posBeforeChild = function posBeforeChild(child3) {
  for (var i = 0, pos = this.posAtStart; i < this.children.length; i++) {
    var cur = this.children[i];
    if (cur == child3) {
      return pos;
    }
    pos += cur.size;
  }
};
prototypeAccessors.posBefore.get = function() {
  return this.parent.posBeforeChild(this);
};
prototypeAccessors.posAtStart.get = function() {
  return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
};
prototypeAccessors.posAfter.get = function() {
  return this.posBefore + this.size;
};
prototypeAccessors.posAtEnd.get = function() {
  return this.posAtStart + this.size - 2 * this.border;
};
ViewDesc.prototype.localPosFromDOM = function localPosFromDOM(dom, offset2, bias) {
  if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
    if (bias < 0) {
      var domBefore, desc;
      if (dom == this.contentDOM) {
        domBefore = dom.childNodes[offset2 - 1];
      } else {
        while (dom.parentNode != this.contentDOM) {
          dom = dom.parentNode;
        }
        domBefore = dom.previousSibling;
      }
      while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this)) {
        domBefore = domBefore.previousSibling;
      }
      return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
    } else {
      var domAfter, desc$1;
      if (dom == this.contentDOM) {
        domAfter = dom.childNodes[offset2];
      } else {
        while (dom.parentNode != this.contentDOM) {
          dom = dom.parentNode;
        }
        domAfter = dom.nextSibling;
      }
      while (domAfter && !((desc$1 = domAfter.pmViewDesc) && desc$1.parent == this)) {
        domAfter = domAfter.nextSibling;
      }
      return domAfter ? this.posBeforeChild(desc$1) : this.posAtEnd;
    }
  }
  var atEnd2;
  if (dom == this.dom && this.contentDOM) {
    atEnd2 = offset2 > domIndex(this.contentDOM);
  } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
    atEnd2 = dom.compareDocumentPosition(this.contentDOM) & 2;
  } else if (this.dom.firstChild) {
    if (offset2 == 0) {
      for (var search = dom; ; search = search.parentNode) {
        if (search == this.dom) {
          atEnd2 = false;
          break;
        }
        if (search.parentNode.firstChild != search) {
          break;
        }
      }
    }
    if (atEnd2 == null && offset2 == dom.childNodes.length) {
      for (var search$1 = dom; ; search$1 = search$1.parentNode) {
        if (search$1 == this.dom) {
          atEnd2 = true;
          break;
        }
        if (search$1.parentNode.lastChild != search$1) {
          break;
        }
      }
    }
  }
  return (atEnd2 == null ? bias > 0 : atEnd2) ? this.posAtEnd : this.posAtStart;
};
ViewDesc.prototype.nearestDesc = function nearestDesc(dom, onlyNodes) {
  for (var first2 = true, cur = dom; cur; cur = cur.parentNode) {
    var desc = this.getDesc(cur);
    if (desc && (!onlyNodes || desc.node)) {
      if (first2 && desc.nodeDOM && !(desc.nodeDOM.nodeType == 1 ? desc.nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : desc.nodeDOM == dom)) {
        first2 = false;
      } else {
        return desc;
      }
    }
  }
};
ViewDesc.prototype.getDesc = function getDesc(dom) {
  var desc = dom.pmViewDesc;
  for (var cur = desc; cur; cur = cur.parent) {
    if (cur == this) {
      return desc;
    }
  }
};
ViewDesc.prototype.posFromDOM = function posFromDOM(dom, offset2, bias) {
  for (var scan = dom; scan; scan = scan.parentNode) {
    var desc = this.getDesc(scan);
    if (desc) {
      return desc.localPosFromDOM(dom, offset2, bias);
    }
  }
  return -1;
};
ViewDesc.prototype.descAt = function descAt(pos) {
  for (var i = 0, offset2 = 0; i < this.children.length; i++) {
    var child3 = this.children[i], end2 = offset2 + child3.size;
    if (offset2 == pos && end2 != offset2) {
      while (!child3.border && child3.children.length) {
        child3 = child3.children[0];
      }
      return child3;
    }
    if (pos < end2) {
      return child3.descAt(pos - offset2 - child3.border);
    }
    offset2 = end2;
  }
};
ViewDesc.prototype.domFromPos = function domFromPos(pos, side) {
  if (!this.contentDOM) {
    return { node: this.dom, offset: 0 };
  }
  var i = 0, offset2 = 0;
  for (var curPos = 0; i < this.children.length; i++) {
    var child3 = this.children[i], end2 = curPos + child3.size;
    if (end2 > pos || child3 instanceof TrailingHackViewDesc) {
      offset2 = pos - curPos;
      break;
    }
    curPos = end2;
  }
  if (offset2) {
    return this.children[i].domFromPos(offset2 - this.children[i].border, side);
  }
  for (var prev = void 0; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.widget.type.side >= 0; i--) {
  }
  if (side <= 0) {
    var prev$1, enter3 = true;
    for (; ; i--, enter3 = false) {
      prev$1 = i ? this.children[i - 1] : null;
      if (!prev$1 || prev$1.dom.parentNode == this.contentDOM) {
        break;
      }
    }
    if (prev$1 && side && enter3 && !prev$1.border && !prev$1.domAtom) {
      return prev$1.domFromPos(prev$1.size, side);
    }
    return { node: this.contentDOM, offset: prev$1 ? domIndex(prev$1.dom) + 1 : 0 };
  } else {
    var next, enter$12 = true;
    for (; ; i++, enter$12 = false) {
      next = i < this.children.length ? this.children[i] : null;
      if (!next || next.dom.parentNode == this.contentDOM) {
        break;
      }
    }
    if (next && enter$12 && !next.border && !next.domAtom) {
      return next.domFromPos(0, side);
    }
    return { node: this.contentDOM, offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length };
  }
};
ViewDesc.prototype.parseRange = function parseRange(from4, to, base2) {
  if (base2 === void 0)
    base2 = 0;
  if (this.children.length == 0) {
    return { node: this.contentDOM, from: from4, to, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
  }
  var fromOffset = -1, toOffset = -1;
  for (var offset2 = base2, i = 0; ; i++) {
    var child3 = this.children[i], end2 = offset2 + child3.size;
    if (fromOffset == -1 && from4 <= end2) {
      var childBase = offset2 + child3.border;
      if (from4 >= childBase && to <= end2 - child3.border && child3.node && child3.contentDOM && this.contentDOM.contains(child3.contentDOM)) {
        return child3.parseRange(from4, to, childBase);
      }
      from4 = offset2;
      for (var j = i; j > 0; j--) {
        var prev = this.children[j - 1];
        if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
          fromOffset = domIndex(prev.dom) + 1;
          break;
        }
        from4 -= prev.size;
      }
      if (fromOffset == -1) {
        fromOffset = 0;
      }
    }
    if (fromOffset > -1 && (end2 > to || i == this.children.length - 1)) {
      to = end2;
      for (var j$1 = i + 1; j$1 < this.children.length; j$1++) {
        var next = this.children[j$1];
        if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
          toOffset = domIndex(next.dom);
          break;
        }
        to += next.size;
      }
      if (toOffset == -1) {
        toOffset = this.contentDOM.childNodes.length;
      }
      break;
    }
    offset2 = end2;
  }
  return { node: this.contentDOM, from: from4, to, fromOffset, toOffset };
};
ViewDesc.prototype.emptyChildAt = function emptyChildAt(side) {
  if (this.border || !this.contentDOM || !this.children.length) {
    return false;
  }
  var child3 = this.children[side < 0 ? 0 : this.children.length - 1];
  return child3.size == 0 || child3.emptyChildAt(side);
};
ViewDesc.prototype.domAfterPos = function domAfterPos(pos) {
  var ref = this.domFromPos(pos, 0);
  var node4 = ref.node;
  var offset2 = ref.offset;
  if (node4.nodeType != 1 || offset2 == node4.childNodes.length) {
    throw new RangeError("No node after pos " + pos);
  }
  return node4.childNodes[offset2];
};
ViewDesc.prototype.setSelection = function setSelection(anchor, head, root, force) {
  var from4 = Math.min(anchor, head), to = Math.max(anchor, head);
  for (var i = 0, offset2 = 0; i < this.children.length; i++) {
    var child3 = this.children[i], end2 = offset2 + child3.size;
    if (from4 > offset2 && to < end2) {
      return child3.setSelection(anchor - offset2 - child3.border, head - offset2 - child3.border, root, force);
    }
    offset2 = end2;
  }
  var anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
  var headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
  var domSel = root.getSelection();
  var brKludge = false;
  if ((result.gecko || result.safari) && anchor == head) {
    var node4 = anchorDOM.node;
    var offset$1 = anchorDOM.offset;
    if (node4.nodeType == 3) {
      brKludge = offset$1 && node4.nodeValue[offset$1 - 1] == "\n";
      if (brKludge && offset$1 == node4.nodeValue.length) {
        for (var scan = node4, after2 = void 0; scan; scan = scan.parentNode) {
          if (after2 = scan.nextSibling) {
            if (after2.nodeName == "BR") {
              anchorDOM = headDOM = { node: after2.parentNode, offset: domIndex(after2) + 1 };
            }
            break;
          }
          var desc = scan.pmViewDesc;
          if (desc && desc.node && desc.node.isBlock) {
            break;
          }
        }
      }
    } else {
      var prev = node4.childNodes[offset$1 - 1];
      brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
    }
  }
  if (result.gecko && domSel.focusNode && domSel.focusNode != headDOM.node && domSel.focusNode.nodeType == 1) {
    var after$1 = domSel.focusNode.childNodes[domSel.focusOffset];
    if (after$1 && after$1.contentEditable == "false") {
      force = true;
    }
  }
  if (!(force || brKludge && result.safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, domSel.focusNode, domSel.focusOffset)) {
    return;
  }
  var domSelExtended = false;
  if ((domSel.extend || anchor == head) && !brKludge) {
    domSel.collapse(anchorDOM.node, anchorDOM.offset);
    try {
      if (anchor != head) {
        domSel.extend(headDOM.node, headDOM.offset);
      }
      domSelExtended = true;
    } catch (err2) {
      if (!(err2 instanceof DOMException)) {
        throw err2;
      }
    }
  }
  if (!domSelExtended) {
    if (anchor > head) {
      var tmp = anchorDOM;
      anchorDOM = headDOM;
      headDOM = tmp;
    }
    var range2 = document.createRange();
    range2.setEnd(headDOM.node, headDOM.offset);
    range2.setStart(anchorDOM.node, anchorDOM.offset);
    domSel.removeAllRanges();
    domSel.addRange(range2);
  }
};
ViewDesc.prototype.ignoreMutation = function ignoreMutation(mutation) {
  return !this.contentDOM && mutation.type != "selection";
};
prototypeAccessors.contentLost.get = function() {
  return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
};
ViewDesc.prototype.markDirty = function markDirty(from4, to) {
  for (var offset2 = 0, i = 0; i < this.children.length; i++) {
    var child3 = this.children[i], end2 = offset2 + child3.size;
    if (offset2 == end2 ? from4 <= end2 && to >= offset2 : from4 < end2 && to > offset2) {
      var startInside = offset2 + child3.border, endInside = end2 - child3.border;
      if (from4 >= startInside && to <= endInside) {
        this.dirty = from4 == offset2 || to == end2 ? CONTENT_DIRTY : CHILD_DIRTY;
        if (from4 == startInside && to == endInside && (child3.contentLost || child3.dom.parentNode != this.contentDOM)) {
          child3.dirty = NODE_DIRTY;
        } else {
          child3.markDirty(from4 - startInside, to - startInside);
        }
        return;
      } else {
        child3.dirty = child3.dom == child3.contentDOM && child3.dom.parentNode == this.contentDOM && !child3.children.length ? CONTENT_DIRTY : NODE_DIRTY;
      }
    }
    offset2 = end2;
  }
  this.dirty = CONTENT_DIRTY;
};
ViewDesc.prototype.markParentsDirty = function markParentsDirty() {
  var level = 1;
  for (var node4 = this.parent; node4; node4 = node4.parent, level++) {
    var dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
    if (node4.dirty < dirty) {
      node4.dirty = dirty;
    }
  }
};
prototypeAccessors.domAtom.get = function() {
  return false;
};
prototypeAccessors.ignoreForCoords.get = function() {
  return false;
};
Object.defineProperties(ViewDesc.prototype, prototypeAccessors);
var nothing = [];
var WidgetViewDesc = /* @__PURE__ */ function(ViewDesc3) {
  function WidgetViewDesc2(parent, widget2, view, pos) {
    var self, dom = widget2.type.toDOM;
    if (typeof dom == "function") {
      dom = dom(view, function() {
        if (!self) {
          return pos;
        }
        if (self.parent) {
          return self.parent.posBeforeChild(self);
        }
      });
    }
    if (!widget2.type.spec.raw) {
      if (dom.nodeType != 1) {
        var wrap = document.createElement("span");
        wrap.appendChild(dom);
        dom = wrap;
      }
      dom.contentEditable = false;
      dom.classList.add("ProseMirror-widget");
    }
    ViewDesc3.call(this, parent, nothing, dom, null);
    this.widget = widget2;
    self = this;
  }
  if (ViewDesc3)
    WidgetViewDesc2.__proto__ = ViewDesc3;
  WidgetViewDesc2.prototype = Object.create(ViewDesc3 && ViewDesc3.prototype);
  WidgetViewDesc2.prototype.constructor = WidgetViewDesc2;
  var prototypeAccessors$12 = { domAtom: { configurable: true } };
  WidgetViewDesc2.prototype.matchesWidget = function matchesWidget2(widget2) {
    return this.dirty == NOT_DIRTY && widget2.type.eq(this.widget.type);
  };
  WidgetViewDesc2.prototype.parseRule = function parseRule2() {
    return { ignore: true };
  };
  WidgetViewDesc2.prototype.stopEvent = function stopEvent2(event) {
    var stop2 = this.widget.spec.stopEvent;
    return stop2 ? stop2(event) : false;
  };
  WidgetViewDesc2.prototype.ignoreMutation = function ignoreMutation2(mutation) {
    return mutation.type != "selection" || this.widget.spec.ignoreSelection;
  };
  WidgetViewDesc2.prototype.destroy = function destroy5() {
    this.widget.type.destroy(this.dom);
    ViewDesc3.prototype.destroy.call(this);
  };
  prototypeAccessors$12.domAtom.get = function() {
    return true;
  };
  Object.defineProperties(WidgetViewDesc2.prototype, prototypeAccessors$12);
  return WidgetViewDesc2;
}(ViewDesc);
var CompositionViewDesc = /* @__PURE__ */ function(ViewDesc3) {
  function CompositionViewDesc2(parent, dom, textDOM, text6) {
    ViewDesc3.call(this, parent, nothing, dom, null);
    this.textDOM = textDOM;
    this.text = text6;
  }
  if (ViewDesc3)
    CompositionViewDesc2.__proto__ = ViewDesc3;
  CompositionViewDesc2.prototype = Object.create(ViewDesc3 && ViewDesc3.prototype);
  CompositionViewDesc2.prototype.constructor = CompositionViewDesc2;
  var prototypeAccessors$22 = { size: { configurable: true } };
  prototypeAccessors$22.size.get = function() {
    return this.text.length;
  };
  CompositionViewDesc2.prototype.localPosFromDOM = function localPosFromDOM2(dom, offset2) {
    if (dom != this.textDOM) {
      return this.posAtStart + (offset2 ? this.size : 0);
    }
    return this.posAtStart + offset2;
  };
  CompositionViewDesc2.prototype.domFromPos = function domFromPos2(pos) {
    return { node: this.textDOM, offset: pos };
  };
  CompositionViewDesc2.prototype.ignoreMutation = function ignoreMutation2(mut) {
    return mut.type === "characterData" && mut.target.nodeValue == mut.oldValue;
  };
  Object.defineProperties(CompositionViewDesc2.prototype, prototypeAccessors$22);
  return CompositionViewDesc2;
}(ViewDesc);
var MarkViewDesc = /* @__PURE__ */ function(ViewDesc3) {
  function MarkViewDesc2(parent, mark3, dom, contentDOM) {
    ViewDesc3.call(this, parent, [], dom, contentDOM);
    this.mark = mark3;
  }
  if (ViewDesc3)
    MarkViewDesc2.__proto__ = ViewDesc3;
  MarkViewDesc2.prototype = Object.create(ViewDesc3 && ViewDesc3.prototype);
  MarkViewDesc2.prototype.constructor = MarkViewDesc2;
  MarkViewDesc2.create = function create5(parent, mark3, inline4, view) {
    var custom = view.nodeViews[mark3.type.name];
    var spec = custom && custom(mark3, view, inline4);
    if (!spec || !spec.dom) {
      spec = DOMSerializer.renderSpec(document, mark3.type.spec.toDOM(mark3, inline4));
    }
    return new MarkViewDesc2(parent, mark3, spec.dom, spec.contentDOM || spec.dom);
  };
  MarkViewDesc2.prototype.parseRule = function parseRule2() {
    if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView) {
      return null;
    }
    return { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  };
  MarkViewDesc2.prototype.matchesMark = function matchesMark2(mark3) {
    return this.dirty != NODE_DIRTY && this.mark.eq(mark3);
  };
  MarkViewDesc2.prototype.markDirty = function markDirty2(from4, to) {
    ViewDesc3.prototype.markDirty.call(this, from4, to);
    if (this.dirty != NOT_DIRTY) {
      var parent = this.parent;
      while (!parent.node) {
        parent = parent.parent;
      }
      if (parent.dirty < this.dirty) {
        parent.dirty = this.dirty;
      }
      this.dirty = NOT_DIRTY;
    }
  };
  MarkViewDesc2.prototype.slice = function slice4(from4, to, view) {
    var copy5 = MarkViewDesc2.create(this.parent, this.mark, true, view);
    var nodes = this.children, size = this.size;
    if (to < size) {
      nodes = replaceNodes(nodes, to, size, view);
    }
    if (from4 > 0) {
      nodes = replaceNodes(nodes, 0, from4, view);
    }
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].parent = copy5;
    }
    copy5.children = nodes;
    return copy5;
  };
  return MarkViewDesc2;
}(ViewDesc);
var NodeViewDesc = /* @__PURE__ */ function(ViewDesc3) {
  function NodeViewDesc2(parent, node4, outerDeco, innerDeco, dom, contentDOM, nodeDOM2, view, pos) {
    ViewDesc3.call(this, parent, node4.isLeaf ? nothing : [], dom, contentDOM);
    this.nodeDOM = nodeDOM2;
    this.node = node4;
    this.outerDeco = outerDeco;
    this.innerDeco = innerDeco;
    if (contentDOM) {
      this.updateChildren(view, pos);
    }
  }
  if (ViewDesc3)
    NodeViewDesc2.__proto__ = ViewDesc3;
  NodeViewDesc2.prototype = Object.create(ViewDesc3 && ViewDesc3.prototype);
  NodeViewDesc2.prototype.constructor = NodeViewDesc2;
  var prototypeAccessors$32 = { size: { configurable: true }, border: { configurable: true }, domAtom: { configurable: true } };
  NodeViewDesc2.create = function create5(parent, node4, outerDeco, innerDeco, view, pos) {
    var assign2;
    var custom = view.nodeViews[node4.type.name], descObj;
    var spec = custom && custom(node4, view, function() {
      if (!descObj) {
        return pos;
      }
      if (descObj.parent) {
        return descObj.parent.posBeforeChild(descObj);
      }
    }, outerDeco, innerDeco);
    var dom = spec && spec.dom, contentDOM = spec && spec.contentDOM;
    if (node4.isText) {
      if (!dom) {
        dom = document.createTextNode(node4.text);
      } else if (dom.nodeType != 3) {
        throw new RangeError("Text must be rendered as a DOM text node");
      }
    } else if (!dom) {
      assign2 = DOMSerializer.renderSpec(document, node4.type.spec.toDOM(node4)), dom = assign2.dom, contentDOM = assign2.contentDOM;
    }
    if (!contentDOM && !node4.isText && dom.nodeName != "BR") {
      if (!dom.hasAttribute("contenteditable")) {
        dom.contentEditable = false;
      }
      if (node4.type.spec.draggable) {
        dom.draggable = true;
      }
    }
    var nodeDOM2 = dom;
    dom = applyOuterDeco(dom, outerDeco, node4);
    if (spec) {
      return descObj = new CustomNodeViewDesc(parent, node4, outerDeco, innerDeco, dom, contentDOM, nodeDOM2, spec, view, pos + 1);
    } else if (node4.isText) {
      return new TextViewDesc(parent, node4, outerDeco, innerDeco, dom, nodeDOM2, view);
    } else {
      return new NodeViewDesc2(parent, node4, outerDeco, innerDeco, dom, contentDOM, nodeDOM2, view, pos + 1);
    }
  };
  NodeViewDesc2.prototype.parseRule = function parseRule2() {
    var this$1$1 = this;
    if (this.node.type.spec.reparseInView) {
      return null;
    }
    var rule = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre") {
      rule.preserveWhitespace = "full";
    }
    if (this.contentDOM && !this.contentLost) {
      rule.contentElement = this.contentDOM;
    } else {
      rule.getContent = function() {
        return this$1$1.contentDOM ? Fragment.empty : this$1$1.node.content;
      };
    }
    return rule;
  };
  NodeViewDesc2.prototype.matchesNode = function matchesNode2(node4, outerDeco, innerDeco) {
    return this.dirty == NOT_DIRTY && node4.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
  };
  prototypeAccessors$32.size.get = function() {
    return this.node.nodeSize;
  };
  prototypeAccessors$32.border.get = function() {
    return this.node.isLeaf ? 0 : 1;
  };
  NodeViewDesc2.prototype.updateChildren = function updateChildren(view, pos) {
    var this$1$1 = this;
    var inline4 = this.node.inlineContent, off = pos;
    var composition = view.composing && this.localCompositionInfo(view, pos);
    var localComposition = composition && composition.pos > -1 ? composition : null;
    var compositionInChild = composition && composition.pos < 0;
    var updater = new ViewTreeUpdater(this, localComposition && localComposition.node);
    iterDeco(this.node, this.innerDeco, function(widget2, i, insideNode) {
      if (widget2.spec.marks) {
        updater.syncToMarks(widget2.spec.marks, inline4, view);
      } else if (widget2.type.side >= 0 && !insideNode) {
        updater.syncToMarks(i == this$1$1.node.childCount ? Mark$1.none : this$1$1.node.child(i).marks, inline4, view);
      }
      updater.placeWidget(widget2, view, off);
    }, function(child3, outerDeco, innerDeco, i) {
      updater.syncToMarks(child3.marks, inline4, view);
      var compIndex;
      if (updater.findNodeMatch(child3, outerDeco, innerDeco, i))
        ;
      else if (compositionInChild && view.state.selection.from > off && view.state.selection.to < off + child3.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child3, outerDeco, innerDeco, compIndex, view))
        ;
      else if (updater.updateNextNode(child3, outerDeco, innerDeco, view, i))
        ;
      else {
        updater.addNode(child3, outerDeco, innerDeco, view, off);
      }
      off += child3.nodeSize;
    });
    updater.syncToMarks(nothing, inline4, view);
    if (this.node.isTextblock) {
      updater.addTextblockHacks();
    }
    updater.destroyRest();
    if (updater.changed || this.dirty == CONTENT_DIRTY) {
      if (localComposition) {
        this.protectLocalComposition(view, localComposition);
      }
      renderDescs(this.contentDOM, this.children, view);
      if (result.ios) {
        iosHacks(this.dom);
      }
    }
  };
  NodeViewDesc2.prototype.localCompositionInfo = function localCompositionInfo(view, pos) {
    var ref = view.state.selection;
    var from4 = ref.from;
    var to = ref.to;
    if (!(view.state.selection instanceof TextSelection) || from4 < pos || to > pos + this.node.content.size) {
      return;
    }
    var sel = view.root.getSelection();
    var textNode = nearbyTextNode(sel.focusNode, sel.focusOffset);
    if (!textNode || !this.dom.contains(textNode.parentNode)) {
      return;
    }
    if (this.node.inlineContent) {
      var text6 = textNode.nodeValue;
      var textPos = findTextInFragment(this.node.content, text6, from4 - pos, to - pos);
      return textPos < 0 ? null : { node: textNode, pos: textPos, text: text6 };
    } else {
      return { node: textNode, pos: -1 };
    }
  };
  NodeViewDesc2.prototype.protectLocalComposition = function protectLocalComposition(view, ref) {
    var node4 = ref.node;
    var pos = ref.pos;
    var text6 = ref.text;
    if (this.getDesc(node4)) {
      return;
    }
    var topNode = node4;
    for (; ; topNode = topNode.parentNode) {
      if (topNode.parentNode == this.contentDOM) {
        break;
      }
      while (topNode.previousSibling) {
        topNode.parentNode.removeChild(topNode.previousSibling);
      }
      while (topNode.nextSibling) {
        topNode.parentNode.removeChild(topNode.nextSibling);
      }
      if (topNode.pmViewDesc) {
        topNode.pmViewDesc = null;
      }
    }
    var desc = new CompositionViewDesc(this, topNode, node4, text6);
    view.compositionNodes.push(desc);
    this.children = replaceNodes(this.children, pos, pos + text6.length, view, desc);
  };
  NodeViewDesc2.prototype.update = function update3(node4, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || !node4.sameMarkup(this.node)) {
      return false;
    }
    this.updateInner(node4, outerDeco, innerDeco, view);
    return true;
  };
  NodeViewDesc2.prototype.updateInner = function updateInner(node4, outerDeco, innerDeco, view) {
    this.updateOuterDeco(outerDeco);
    this.node = node4;
    this.innerDeco = innerDeco;
    if (this.contentDOM) {
      this.updateChildren(view, this.posAtStart);
    }
    this.dirty = NOT_DIRTY;
  };
  NodeViewDesc2.prototype.updateOuterDeco = function updateOuterDeco(outerDeco) {
    if (sameOuterDeco(outerDeco, this.outerDeco)) {
      return;
    }
    var needsWrap = this.nodeDOM.nodeType != 1;
    var oldDOM = this.dom;
    this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
    if (this.dom != oldDOM) {
      oldDOM.pmViewDesc = null;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = outerDeco;
  };
  NodeViewDesc2.prototype.selectNode = function selectNode() {
    this.nodeDOM.classList.add("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable) {
      this.dom.draggable = true;
    }
  };
  NodeViewDesc2.prototype.deselectNode = function deselectNode() {
    this.nodeDOM.classList.remove("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable) {
      this.dom.removeAttribute("draggable");
    }
  };
  prototypeAccessors$32.domAtom.get = function() {
    return this.node.isAtom;
  };
  Object.defineProperties(NodeViewDesc2.prototype, prototypeAccessors$32);
  return NodeViewDesc2;
}(ViewDesc);
function docViewDesc(doc2, outerDeco, innerDeco, dom, view) {
  applyOuterDeco(dom, outerDeco, doc2);
  return new NodeViewDesc(null, doc2, outerDeco, innerDeco, dom, dom, dom, view, 0);
}
var TextViewDesc = /* @__PURE__ */ function(NodeViewDesc2) {
  function TextViewDesc2(parent, node4, outerDeco, innerDeco, dom, nodeDOM2, view) {
    NodeViewDesc2.call(this, parent, node4, outerDeco, innerDeco, dom, null, nodeDOM2, view);
  }
  if (NodeViewDesc2)
    TextViewDesc2.__proto__ = NodeViewDesc2;
  TextViewDesc2.prototype = Object.create(NodeViewDesc2 && NodeViewDesc2.prototype);
  TextViewDesc2.prototype.constructor = TextViewDesc2;
  var prototypeAccessors$42 = { domAtom: { configurable: true } };
  TextViewDesc2.prototype.parseRule = function parseRule2() {
    var skip = this.nodeDOM.parentNode;
    while (skip && skip != this.dom && !skip.pmIsDeco) {
      skip = skip.parentNode;
    }
    return { skip: skip || true };
  };
  TextViewDesc2.prototype.update = function update3(node4, outerDeco, _, view) {
    if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node4.sameMarkup(this.node)) {
      return false;
    }
    this.updateOuterDeco(outerDeco);
    if ((this.dirty != NOT_DIRTY || node4.text != this.node.text) && node4.text != this.nodeDOM.nodeValue) {
      this.nodeDOM.nodeValue = node4.text;
      if (view.trackWrites == this.nodeDOM) {
        view.trackWrites = null;
      }
    }
    this.node = node4;
    this.dirty = NOT_DIRTY;
    return true;
  };
  TextViewDesc2.prototype.inParent = function inParent() {
    var parentDOM = this.parent.contentDOM;
    for (var n = this.nodeDOM; n; n = n.parentNode) {
      if (n == parentDOM) {
        return true;
      }
    }
    return false;
  };
  TextViewDesc2.prototype.domFromPos = function domFromPos2(pos) {
    return { node: this.nodeDOM, offset: pos };
  };
  TextViewDesc2.prototype.localPosFromDOM = function localPosFromDOM2(dom, offset2, bias) {
    if (dom == this.nodeDOM) {
      return this.posAtStart + Math.min(offset2, this.node.text.length);
    }
    return NodeViewDesc2.prototype.localPosFromDOM.call(this, dom, offset2, bias);
  };
  TextViewDesc2.prototype.ignoreMutation = function ignoreMutation2(mutation) {
    return mutation.type != "characterData" && mutation.type != "selection";
  };
  TextViewDesc2.prototype.slice = function slice4(from4, to, view) {
    var node4 = this.node.cut(from4, to), dom = document.createTextNode(node4.text);
    return new TextViewDesc2(this.parent, node4, this.outerDeco, this.innerDeco, dom, dom, view);
  };
  TextViewDesc2.prototype.markDirty = function markDirty2(from4, to) {
    NodeViewDesc2.prototype.markDirty.call(this, from4, to);
    if (this.dom != this.nodeDOM && (from4 == 0 || to == this.nodeDOM.nodeValue.length)) {
      this.dirty = NODE_DIRTY;
    }
  };
  prototypeAccessors$42.domAtom.get = function() {
    return false;
  };
  Object.defineProperties(TextViewDesc2.prototype, prototypeAccessors$42);
  return TextViewDesc2;
}(NodeViewDesc);
var TrailingHackViewDesc = /* @__PURE__ */ function(ViewDesc3) {
  function TrailingHackViewDesc2() {
    ViewDesc3.apply(this, arguments);
  }
  if (ViewDesc3)
    TrailingHackViewDesc2.__proto__ = ViewDesc3;
  TrailingHackViewDesc2.prototype = Object.create(ViewDesc3 && ViewDesc3.prototype);
  TrailingHackViewDesc2.prototype.constructor = TrailingHackViewDesc2;
  var prototypeAccessors$52 = { domAtom: { configurable: true }, ignoreForCoords: { configurable: true } };
  TrailingHackViewDesc2.prototype.parseRule = function parseRule2() {
    return { ignore: true };
  };
  TrailingHackViewDesc2.prototype.matchesHack = function matchesHack2(nodeName) {
    return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
  };
  prototypeAccessors$52.domAtom.get = function() {
    return true;
  };
  prototypeAccessors$52.ignoreForCoords.get = function() {
    return this.dom.nodeName == "IMG";
  };
  Object.defineProperties(TrailingHackViewDesc2.prototype, prototypeAccessors$52);
  return TrailingHackViewDesc2;
}(ViewDesc);
var CustomNodeViewDesc = /* @__PURE__ */ function(NodeViewDesc2) {
  function CustomNodeViewDesc2(parent, node4, outerDeco, innerDeco, dom, contentDOM, nodeDOM2, spec, view, pos) {
    NodeViewDesc2.call(this, parent, node4, outerDeco, innerDeco, dom, contentDOM, nodeDOM2, view, pos);
    this.spec = spec;
  }
  if (NodeViewDesc2)
    CustomNodeViewDesc2.__proto__ = NodeViewDesc2;
  CustomNodeViewDesc2.prototype = Object.create(NodeViewDesc2 && NodeViewDesc2.prototype);
  CustomNodeViewDesc2.prototype.constructor = CustomNodeViewDesc2;
  CustomNodeViewDesc2.prototype.update = function update3(node4, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY) {
      return false;
    }
    if (this.spec.update) {
      var result2 = this.spec.update(node4, outerDeco, innerDeco);
      if (result2) {
        this.updateInner(node4, outerDeco, innerDeco, view);
      }
      return result2;
    } else if (!this.contentDOM && !node4.isLeaf) {
      return false;
    } else {
      return NodeViewDesc2.prototype.update.call(this, node4, outerDeco, innerDeco, view);
    }
  };
  CustomNodeViewDesc2.prototype.selectNode = function selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : NodeViewDesc2.prototype.selectNode.call(this);
  };
  CustomNodeViewDesc2.prototype.deselectNode = function deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : NodeViewDesc2.prototype.deselectNode.call(this);
  };
  CustomNodeViewDesc2.prototype.setSelection = function setSelection2(anchor, head, root, force) {
    this.spec.setSelection ? this.spec.setSelection(anchor, head, root) : NodeViewDesc2.prototype.setSelection.call(this, anchor, head, root, force);
  };
  CustomNodeViewDesc2.prototype.destroy = function destroy5() {
    if (this.spec.destroy) {
      this.spec.destroy();
    }
    NodeViewDesc2.prototype.destroy.call(this);
  };
  CustomNodeViewDesc2.prototype.stopEvent = function stopEvent2(event) {
    return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
  };
  CustomNodeViewDesc2.prototype.ignoreMutation = function ignoreMutation2(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : NodeViewDesc2.prototype.ignoreMutation.call(this, mutation);
  };
  return CustomNodeViewDesc2;
}(NodeViewDesc);
function renderDescs(parentDOM, descs, view) {
  var dom = parentDOM.firstChild, written = false;
  for (var i = 0; i < descs.length; i++) {
    var desc = descs[i], childDOM = desc.dom;
    if (childDOM.parentNode == parentDOM) {
      while (childDOM != dom) {
        dom = rm(dom);
        written = true;
      }
      dom = dom.nextSibling;
    } else {
      written = true;
      parentDOM.insertBefore(childDOM, dom);
    }
    if (desc instanceof MarkViewDesc) {
      var pos = dom ? dom.previousSibling : parentDOM.lastChild;
      renderDescs(desc.contentDOM, desc.children, view);
      dom = pos ? pos.nextSibling : parentDOM.firstChild;
    }
  }
  while (dom) {
    dom = rm(dom);
    written = true;
  }
  if (written && view.trackWrites == parentDOM) {
    view.trackWrites = null;
  }
}
function OuterDecoLevel(nodeName) {
  if (nodeName) {
    this.nodeName = nodeName;
  }
}
OuterDecoLevel.prototype = /* @__PURE__ */ Object.create(null);
var noDeco = [new OuterDecoLevel()];
function computeOuterDeco(outerDeco, node4, needsWrap) {
  if (outerDeco.length == 0) {
    return noDeco;
  }
  var top3 = needsWrap ? noDeco[0] : new OuterDecoLevel(), result2 = [top3];
  for (var i = 0; i < outerDeco.length; i++) {
    var attrs2 = outerDeco[i].type.attrs;
    if (!attrs2) {
      continue;
    }
    if (attrs2.nodeName) {
      result2.push(top3 = new OuterDecoLevel(attrs2.nodeName));
    }
    for (var name in attrs2) {
      var val = attrs2[name];
      if (val == null) {
        continue;
      }
      if (needsWrap && result2.length == 1) {
        result2.push(top3 = new OuterDecoLevel(node4.isInline ? "span" : "div"));
      }
      if (name == "class") {
        top3.class = (top3.class ? top3.class + " " : "") + val;
      } else if (name == "style") {
        top3.style = (top3.style ? top3.style + ";" : "") + val;
      } else if (name != "nodeName") {
        top3[name] = val;
      }
    }
  }
  return result2;
}
function patchOuterDeco(outerDOM, nodeDOM2, prevComputed, curComputed) {
  if (prevComputed == noDeco && curComputed == noDeco) {
    return nodeDOM2;
  }
  var curDOM = nodeDOM2;
  for (var i = 0; i < curComputed.length; i++) {
    var deco = curComputed[i], prev = prevComputed[i];
    if (i) {
      var parent = void 0;
      if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.tagName.toLowerCase() == deco.nodeName) {
        curDOM = parent;
      } else {
        parent = document.createElement(deco.nodeName);
        parent.pmIsDeco = true;
        parent.appendChild(curDOM);
        prev = noDeco[0];
        curDOM = parent;
      }
    }
    patchAttributes(curDOM, prev || noDeco[0], deco);
  }
  return curDOM;
}
function patchAttributes(dom, prev, cur) {
  for (var name in prev) {
    if (name != "class" && name != "style" && name != "nodeName" && !(name in cur)) {
      dom.removeAttribute(name);
    }
  }
  for (var name$1 in cur) {
    if (name$1 != "class" && name$1 != "style" && name$1 != "nodeName" && cur[name$1] != prev[name$1]) {
      dom.setAttribute(name$1, cur[name$1]);
    }
  }
  if (prev.class != cur.class) {
    var prevList = prev.class ? prev.class.split(" ").filter(Boolean) : nothing;
    var curList = cur.class ? cur.class.split(" ").filter(Boolean) : nothing;
    for (var i = 0; i < prevList.length; i++) {
      if (curList.indexOf(prevList[i]) == -1) {
        dom.classList.remove(prevList[i]);
      }
    }
    for (var i$1 = 0; i$1 < curList.length; i$1++) {
      if (prevList.indexOf(curList[i$1]) == -1) {
        dom.classList.add(curList[i$1]);
      }
    }
    if (dom.classList.length == 0) {
      dom.removeAttribute("class");
    }
  }
  if (prev.style != cur.style) {
    if (prev.style) {
      var prop2 = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, m;
      while (m = prop2.exec(prev.style)) {
        dom.style.removeProperty(m[1]);
      }
    }
    if (cur.style) {
      dom.style.cssText += cur.style;
    }
  }
}
function applyOuterDeco(dom, deco, node4) {
  return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node4, dom.nodeType != 1));
}
function sameOuterDeco(a, b) {
  if (a.length != b.length) {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (!a[i].type.eq(b[i].type)) {
      return false;
    }
  }
  return true;
}
function rm(dom) {
  var next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}
var ViewTreeUpdater = function ViewTreeUpdater2(top3, lockedNode) {
  this.top = top3;
  this.lock = lockedNode;
  this.index = 0;
  this.stack = [];
  this.changed = false;
  this.preMatch = preMatch(top3.node.content, top3);
};
ViewTreeUpdater.prototype.destroyBetween = function destroyBetween(start3, end2) {
  if (start3 == end2) {
    return;
  }
  for (var i = start3; i < end2; i++) {
    this.top.children[i].destroy();
  }
  this.top.children.splice(start3, end2 - start3);
  this.changed = true;
};
ViewTreeUpdater.prototype.destroyRest = function destroyRest() {
  this.destroyBetween(this.index, this.top.children.length);
};
ViewTreeUpdater.prototype.syncToMarks = function syncToMarks(marks2, inline4, view) {
  var keep = 0, depth = this.stack.length >> 1;
  var maxKeep = Math.min(depth, marks2.length);
  while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks2[keep]) && marks2[keep].type.spec.spanning !== false) {
    keep++;
  }
  while (keep < depth) {
    this.destroyRest();
    this.top.dirty = NOT_DIRTY;
    this.index = this.stack.pop();
    this.top = this.stack.pop();
    depth--;
  }
  while (depth < marks2.length) {
    this.stack.push(this.top, this.index + 1);
    var found2 = -1;
    for (var i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
      if (this.top.children[i].matchesMark(marks2[depth])) {
        found2 = i;
        break;
      }
    }
    if (found2 > -1) {
      if (found2 > this.index) {
        this.changed = true;
        this.destroyBetween(this.index, found2);
      }
      this.top = this.top.children[this.index];
    } else {
      var markDesc = MarkViewDesc.create(this.top, marks2[depth], inline4, view);
      this.top.children.splice(this.index, 0, markDesc);
      this.top = markDesc;
      this.changed = true;
    }
    this.index = 0;
    depth++;
  }
};
ViewTreeUpdater.prototype.findNodeMatch = function findNodeMatch(node4, outerDeco, innerDeco, index2) {
  var found2 = -1, targetDesc;
  if (index2 >= this.preMatch.index && (targetDesc = this.preMatch.matches[index2 - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node4, outerDeco, innerDeco)) {
    found2 = this.top.children.indexOf(targetDesc, this.index);
  } else {
    for (var i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
      var child3 = this.top.children[i];
      if (child3.matchesNode(node4, outerDeco, innerDeco) && !this.preMatch.matched.has(child3)) {
        found2 = i;
        break;
      }
    }
  }
  if (found2 < 0) {
    return false;
  }
  this.destroyBetween(this.index, found2);
  this.index++;
  return true;
};
ViewTreeUpdater.prototype.updateNodeAt = function updateNodeAt(node4, outerDeco, innerDeco, index2, view) {
  var child3 = this.top.children[index2];
  if (!child3.update(node4, outerDeco, innerDeco, view)) {
    return false;
  }
  this.destroyBetween(this.index, index2);
  this.index = index2 + 1;
  return true;
};
ViewTreeUpdater.prototype.findIndexWithChild = function findIndexWithChild(domNode) {
  for (; ; ) {
    var parent = domNode.parentNode;
    if (!parent) {
      return -1;
    }
    if (parent == this.top.contentDOM) {
      var desc = domNode.pmViewDesc;
      if (desc) {
        for (var i = this.index; i < this.top.children.length; i++) {
          if (this.top.children[i] == desc) {
            return i;
          }
        }
      }
      return -1;
    }
    domNode = parent;
  }
};
ViewTreeUpdater.prototype.updateNextNode = function updateNextNode(node4, outerDeco, innerDeco, view, index2) {
  for (var i = this.index; i < this.top.children.length; i++) {
    var next = this.top.children[i];
    if (next instanceof NodeViewDesc) {
      var preMatch2 = this.preMatch.matched.get(next);
      if (preMatch2 != null && preMatch2 != index2) {
        return false;
      }
      var nextDOM = next.dom;
      var locked = this.lock && (nextDOM == this.lock || nextDOM.nodeType == 1 && nextDOM.contains(this.lock.parentNode)) && !(node4.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node4.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
      if (!locked && next.update(node4, outerDeco, innerDeco, view)) {
        this.destroyBetween(this.index, i);
        if (next.dom != nextDOM) {
          this.changed = true;
        }
        this.index++;
        return true;
      }
      break;
    }
  }
  return false;
};
ViewTreeUpdater.prototype.addNode = function addNode2(node4, outerDeco, innerDeco, view, pos) {
  this.top.children.splice(this.index++, 0, NodeViewDesc.create(this.top, node4, outerDeco, innerDeco, view, pos));
  this.changed = true;
};
ViewTreeUpdater.prototype.placeWidget = function placeWidget(widget2, view, pos) {
  var next = this.index < this.top.children.length ? this.top.children[this.index] : null;
  if (next && next.matchesWidget(widget2) && (widget2 == next.widget || !next.widget.type.toDOM.parentNode)) {
    this.index++;
  } else {
    var desc = new WidgetViewDesc(this.top, widget2, view, pos);
    this.top.children.splice(this.index++, 0, desc);
    this.changed = true;
  }
};
ViewTreeUpdater.prototype.addTextblockHacks = function addTextblockHacks() {
  var lastChild = this.top.children[this.index - 1];
  while (lastChild instanceof MarkViewDesc) {
    lastChild = lastChild.children[lastChild.children.length - 1];
  }
  if (!lastChild || !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text)) {
    if ((result.safari || result.chrome) && lastChild && lastChild.dom.contentEditable == "false") {
      this.addHackNode("IMG");
    }
    this.addHackNode("BR");
  }
};
ViewTreeUpdater.prototype.addHackNode = function addHackNode(nodeName) {
  if (this.index < this.top.children.length && this.top.children[this.index].matchesHack(nodeName)) {
    this.index++;
  } else {
    var dom = document.createElement(nodeName);
    if (nodeName == "IMG") {
      dom.className = "ProseMirror-separator";
    }
    if (nodeName == "BR") {
      dom.className = "ProseMirror-trailingBreak";
    }
    this.top.children.splice(this.index++, 0, new TrailingHackViewDesc(this.top, nothing, dom, null));
    this.changed = true;
  }
};
function preMatch(frag, parentDesc) {
  var curDesc = parentDesc, descI = curDesc.children.length;
  var fI = frag.childCount, matched = /* @__PURE__ */ new Map(), matches2 = [];
  outer:
    while (fI > 0) {
      var desc = void 0;
      for (; ; ) {
        if (descI) {
          var next = curDesc.children[descI - 1];
          if (next instanceof MarkViewDesc) {
            curDesc = next;
            descI = next.children.length;
          } else {
            desc = next;
            descI--;
            break;
          }
        } else if (curDesc == parentDesc) {
          break outer;
        } else {
          descI = curDesc.parent.children.indexOf(curDesc);
          curDesc = curDesc.parent;
        }
      }
      var node4 = desc.node;
      if (!node4) {
        continue;
      }
      if (node4 != frag.child(fI - 1)) {
        break;
      }
      --fI;
      matched.set(desc, fI);
      matches2.push(desc);
    }
  return { index: fI, matched, matches: matches2.reverse() };
}
function compareSide(a, b) {
  return a.type.side - b.type.side;
}
function iterDeco(parent, deco, onWidget, onNode) {
  var locals3 = deco.locals(parent), offset2 = 0;
  if (locals3.length == 0) {
    for (var i = 0; i < parent.childCount; i++) {
      var child3 = parent.child(i);
      onNode(child3, locals3, deco.forChild(offset2, child3), i);
      offset2 += child3.nodeSize;
    }
    return;
  }
  var decoIndex = 0, active = [], restNode = null;
  for (var parentIndex = 0; ; ) {
    if (decoIndex < locals3.length && locals3[decoIndex].to == offset2) {
      var widget2 = locals3[decoIndex++], widgets = void 0;
      while (decoIndex < locals3.length && locals3[decoIndex].to == offset2) {
        (widgets || (widgets = [widget2])).push(locals3[decoIndex++]);
      }
      if (widgets) {
        widgets.sort(compareSide);
        for (var i$1 = 0; i$1 < widgets.length; i$1++) {
          onWidget(widgets[i$1], parentIndex, !!restNode);
        }
      } else {
        onWidget(widget2, parentIndex, !!restNode);
      }
    }
    var child$1 = void 0, index2 = void 0;
    if (restNode) {
      index2 = -1;
      child$1 = restNode;
      restNode = null;
    } else if (parentIndex < parent.childCount) {
      index2 = parentIndex;
      child$1 = parent.child(parentIndex++);
    } else {
      break;
    }
    for (var i$2 = 0; i$2 < active.length; i$2++) {
      if (active[i$2].to <= offset2) {
        active.splice(i$2--, 1);
      }
    }
    while (decoIndex < locals3.length && locals3[decoIndex].from <= offset2 && locals3[decoIndex].to > offset2) {
      active.push(locals3[decoIndex++]);
    }
    var end2 = offset2 + child$1.nodeSize;
    if (child$1.isText) {
      var cutAt = end2;
      if (decoIndex < locals3.length && locals3[decoIndex].from < cutAt) {
        cutAt = locals3[decoIndex].from;
      }
      for (var i$3 = 0; i$3 < active.length; i$3++) {
        if (active[i$3].to < cutAt) {
          cutAt = active[i$3].to;
        }
      }
      if (cutAt < end2) {
        restNode = child$1.cut(cutAt - offset2);
        child$1 = child$1.cut(0, cutAt - offset2);
        end2 = cutAt;
        index2 = -1;
      }
    }
    var outerDeco = !active.length ? nothing : child$1.isInline && !child$1.isLeaf ? active.filter(function(d) {
      return !d.inline;
    }) : active.slice();
    onNode(child$1, outerDeco, deco.forChild(offset2, child$1), index2);
    offset2 = end2;
  }
}
function iosHacks(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    var oldCSS = dom.style.cssText;
    dom.style.cssText = oldCSS + "; list-style: square !important";
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = oldCSS;
  }
}
function nearbyTextNode(node4, offset2) {
  for (; ; ) {
    if (node4.nodeType == 3) {
      return node4;
    }
    if (node4.nodeType == 1 && offset2 > 0) {
      if (node4.childNodes.length > offset2 && node4.childNodes[offset2].nodeType == 3) {
        return node4.childNodes[offset2];
      }
      node4 = node4.childNodes[offset2 - 1];
      offset2 = nodeSize(node4);
    } else if (node4.nodeType == 1 && offset2 < node4.childNodes.length) {
      node4 = node4.childNodes[offset2];
      offset2 = 0;
    } else {
      return null;
    }
  }
}
function findTextInFragment(frag, text6, from4, to) {
  for (var i = 0, pos = 0; i < frag.childCount && pos <= to; ) {
    var child3 = frag.child(i++), childStart = pos;
    pos += child3.nodeSize;
    if (!child3.isText) {
      continue;
    }
    var str = child3.text;
    while (i < frag.childCount) {
      var next = frag.child(i++);
      pos += next.nodeSize;
      if (!next.isText) {
        break;
      }
      str += next.text;
    }
    if (pos >= from4 && childStart < to) {
      var found2 = str.lastIndexOf(text6, to - childStart - 1);
      if (found2 >= 0 && found2 + text6.length + childStart >= from4) {
        return childStart + found2;
      }
    }
  }
  return -1;
}
function replaceNodes(nodes, from4, to, view, replacement) {
  var result2 = [];
  for (var i = 0, off = 0; i < nodes.length; i++) {
    var child3 = nodes[i], start3 = off, end2 = off += child3.size;
    if (start3 >= to || end2 <= from4) {
      result2.push(child3);
    } else {
      if (start3 < from4) {
        result2.push(child3.slice(0, from4 - start3, view));
      }
      if (replacement) {
        result2.push(replacement);
        replacement = null;
      }
      if (end2 > to) {
        result2.push(child3.slice(to - start3, child3.size, view));
      }
    }
  }
  return result2;
}
function selectionFromDOM(view, origin) {
  var domSel = view.root.getSelection(), doc2 = view.state.doc;
  if (!domSel.focusNode) {
    return null;
  }
  var nearestDesc2 = view.docView.nearestDesc(domSel.focusNode), inWidget = nearestDesc2 && nearestDesc2.size == 0;
  var head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
  if (head < 0) {
    return null;
  }
  var $head = doc2.resolve(head), $anchor, selection;
  if (selectionCollapsed(domSel)) {
    $anchor = $head;
    while (nearestDesc2 && !nearestDesc2.node) {
      nearestDesc2 = nearestDesc2.parent;
    }
    if (nearestDesc2 && nearestDesc2.node.isAtom && NodeSelection.isSelectable(nearestDesc2.node) && nearestDesc2.parent && !(nearestDesc2.node.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc2.dom))) {
      var pos = nearestDesc2.posBefore;
      selection = new NodeSelection(head == pos ? $head : doc2.resolve(pos));
    }
  } else {
    var anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
    if (anchor < 0) {
      return null;
    }
    $anchor = doc2.resolve(anchor);
  }
  if (!selection) {
    var bias = origin == "pointer" || view.state.selection.head < $head.pos && !inWidget ? 1 : -1;
    selection = selectionBetween(view, $anchor, $head, bias);
  }
  return selection;
}
function editorOwnsSelection(view) {
  return view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom);
}
function selectionToDOM(view, force) {
  var sel = view.state.selection;
  syncNodeSelection(view, sel);
  if (!editorOwnsSelection(view)) {
    return;
  }
  if (!force && view.mouseDown && view.mouseDown.allowDefault && result.chrome) {
    var domSel = view.root.getSelection(), curSel = view.domObserver.currentSelection;
    if (domSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
      view.mouseDown.delayedSelectionSync = true;
      view.domObserver.setCurSelection();
      return;
    }
  }
  view.domObserver.disconnectSelection();
  if (view.cursorWrapper) {
    selectCursorWrapper(view);
  } else {
    var anchor = sel.anchor;
    var head = sel.head;
    var resetEditableFrom, resetEditableTo;
    if (brokenSelectBetweenUneditable && !(sel instanceof TextSelection)) {
      if (!sel.$from.parent.inlineContent) {
        resetEditableFrom = temporarilyEditableNear(view, sel.from);
      }
      if (!sel.empty && !sel.$from.parent.inlineContent) {
        resetEditableTo = temporarilyEditableNear(view, sel.to);
      }
    }
    view.docView.setSelection(anchor, head, view.root, force);
    if (brokenSelectBetweenUneditable) {
      if (resetEditableFrom) {
        resetEditable(resetEditableFrom);
      }
      if (resetEditableTo) {
        resetEditable(resetEditableTo);
      }
    }
    if (sel.visible) {
      view.dom.classList.remove("ProseMirror-hideselection");
    } else {
      view.dom.classList.add("ProseMirror-hideselection");
      if ("onselectionchange" in document) {
        removeClassOnSelectionChange(view);
      }
    }
  }
  view.domObserver.setCurSelection();
  view.domObserver.connectSelection();
}
var brokenSelectBetweenUneditable = result.safari || result.chrome && result.chrome_version < 63;
function temporarilyEditableNear(view, pos) {
  var ref = view.docView.domFromPos(pos, 0);
  var node4 = ref.node;
  var offset2 = ref.offset;
  var after2 = offset2 < node4.childNodes.length ? node4.childNodes[offset2] : null;
  var before2 = offset2 ? node4.childNodes[offset2 - 1] : null;
  if (result.safari && after2 && after2.contentEditable == "false") {
    return setEditable(after2);
  }
  if ((!after2 || after2.contentEditable == "false") && (!before2 || before2.contentEditable == "false")) {
    if (after2) {
      return setEditable(after2);
    } else if (before2) {
      return setEditable(before2);
    }
  }
}
function setEditable(element) {
  element.contentEditable = "true";
  if (result.safari && element.draggable) {
    element.draggable = false;
    element.wasDraggable = true;
  }
  return element;
}
function resetEditable(element) {
  element.contentEditable = "false";
  if (element.wasDraggable) {
    element.draggable = true;
    element.wasDraggable = null;
  }
}
function removeClassOnSelectionChange(view) {
  var doc2 = view.dom.ownerDocument;
  doc2.removeEventListener("selectionchange", view.hideSelectionGuard);
  var domSel = view.root.getSelection();
  var node4 = domSel.anchorNode, offset2 = domSel.anchorOffset;
  doc2.addEventListener("selectionchange", view.hideSelectionGuard = function() {
    if (domSel.anchorNode != node4 || domSel.anchorOffset != offset2) {
      doc2.removeEventListener("selectionchange", view.hideSelectionGuard);
      setTimeout(function() {
        if (!editorOwnsSelection(view) || view.state.selection.visible) {
          view.dom.classList.remove("ProseMirror-hideselection");
        }
      }, 20);
    }
  });
}
function selectCursorWrapper(view) {
  var domSel = view.root.getSelection(), range2 = document.createRange();
  var node4 = view.cursorWrapper.dom, img = node4.nodeName == "IMG";
  if (img) {
    range2.setEnd(node4.parentNode, domIndex(node4) + 1);
  } else {
    range2.setEnd(node4, 0);
  }
  range2.collapse(false);
  domSel.removeAllRanges();
  domSel.addRange(range2);
  if (!img && !view.state.selection.visible && result.ie && result.ie_version <= 11) {
    node4.disabled = true;
    node4.disabled = false;
  }
}
function syncNodeSelection(view, sel) {
  if (sel instanceof NodeSelection) {
    var desc = view.docView.descAt(sel.from);
    if (desc != view.lastSelectedViewDesc) {
      clearNodeSelection(view);
      if (desc) {
        desc.selectNode();
      }
      view.lastSelectedViewDesc = desc;
    }
  } else {
    clearNodeSelection(view);
  }
}
function clearNodeSelection(view) {
  if (view.lastSelectedViewDesc) {
    if (view.lastSelectedViewDesc.parent) {
      view.lastSelectedViewDesc.deselectNode();
    }
    view.lastSelectedViewDesc = null;
  }
}
function selectionBetween(view, $anchor, $head, bias) {
  return view.someProp("createSelectionBetween", function(f) {
    return f(view, $anchor, $head);
  }) || TextSelection.between($anchor, $head, bias);
}
function hasFocusAndSelection(view) {
  if (view.editable && view.root.activeElement != view.dom) {
    return false;
  }
  return hasSelection(view);
}
function hasSelection(view) {
  var sel = view.root.getSelection();
  if (!sel.anchorNode) {
    return false;
  }
  try {
    return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
  } catch (_) {
    return false;
  }
}
function anchorInRightPlace(view) {
  var anchorDOM = view.docView.domFromPos(view.state.selection.anchor, 0);
  var domSel = view.root.getSelection();
  return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
}
function moveSelectionBlock(state, dir) {
  var ref = state.selection;
  var $anchor = ref.$anchor;
  var $head = ref.$head;
  var $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
  var $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
  return $start && Selection.findFrom($start, dir);
}
function apply7(view, sel) {
  view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
  return true;
}
function selectHorizontally(view, dir, mods) {
  var sel = view.state.selection;
  if (sel instanceof TextSelection) {
    if (!sel.empty || mods.indexOf("s") > -1) {
      return false;
    } else if (view.endOfTextblock(dir > 0 ? "right" : "left")) {
      var next = moveSelectionBlock(view.state, dir);
      if (next && next instanceof NodeSelection) {
        return apply7(view, next);
      }
      return false;
    } else if (!(result.mac && mods.indexOf("m") > -1)) {
      var $head = sel.$head, node4 = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter, desc;
      if (!node4 || node4.isText) {
        return false;
      }
      var nodePos = dir < 0 ? $head.pos - node4.nodeSize : $head.pos;
      if (!(node4.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM)) {
        return false;
      }
      if (NodeSelection.isSelectable(node4)) {
        return apply7(view, new NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node4.nodeSize) : $head));
      } else if (result.webkit) {
        return apply7(view, new TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node4.nodeSize)));
      } else {
        return false;
      }
    }
  } else if (sel instanceof NodeSelection && sel.node.isInline) {
    return apply7(view, new TextSelection(dir > 0 ? sel.$to : sel.$from));
  } else {
    var next$1 = moveSelectionBlock(view.state, dir);
    if (next$1) {
      return apply7(view, next$1);
    }
    return false;
  }
}
function nodeLen(node4) {
  return node4.nodeType == 3 ? node4.nodeValue.length : node4.childNodes.length;
}
function isIgnorable(dom) {
  var desc = dom.pmViewDesc;
  return desc && desc.size == 0 && (dom.nextSibling || dom.nodeName != "BR");
}
function skipIgnoredNodesLeft(view) {
  var sel = view.root.getSelection();
  var node4 = sel.focusNode, offset2 = sel.focusOffset;
  if (!node4) {
    return;
  }
  var moveNode, moveOffset, force = false;
  if (result.gecko && node4.nodeType == 1 && offset2 < nodeLen(node4) && isIgnorable(node4.childNodes[offset2])) {
    force = true;
  }
  for (; ; ) {
    if (offset2 > 0) {
      if (node4.nodeType != 1) {
        break;
      } else {
        var before2 = node4.childNodes[offset2 - 1];
        if (isIgnorable(before2)) {
          moveNode = node4;
          moveOffset = --offset2;
        } else if (before2.nodeType == 3) {
          node4 = before2;
          offset2 = node4.nodeValue.length;
        } else {
          break;
        }
      }
    } else if (isBlockNode(node4)) {
      break;
    } else {
      var prev = node4.previousSibling;
      while (prev && isIgnorable(prev)) {
        moveNode = node4.parentNode;
        moveOffset = domIndex(prev);
        prev = prev.previousSibling;
      }
      if (!prev) {
        node4 = node4.parentNode;
        if (node4 == view.dom) {
          break;
        }
        offset2 = 0;
      } else {
        node4 = prev;
        offset2 = nodeLen(node4);
      }
    }
  }
  if (force) {
    setSelFocus(view, sel, node4, offset2);
  } else if (moveNode) {
    setSelFocus(view, sel, moveNode, moveOffset);
  }
}
function skipIgnoredNodesRight(view) {
  var sel = view.root.getSelection();
  var node4 = sel.focusNode, offset2 = sel.focusOffset;
  if (!node4) {
    return;
  }
  var len = nodeLen(node4);
  var moveNode, moveOffset;
  for (; ; ) {
    if (offset2 < len) {
      if (node4.nodeType != 1) {
        break;
      }
      var after2 = node4.childNodes[offset2];
      if (isIgnorable(after2)) {
        moveNode = node4;
        moveOffset = ++offset2;
      } else {
        break;
      }
    } else if (isBlockNode(node4)) {
      break;
    } else {
      var next = node4.nextSibling;
      while (next && isIgnorable(next)) {
        moveNode = next.parentNode;
        moveOffset = domIndex(next) + 1;
        next = next.nextSibling;
      }
      if (!next) {
        node4 = node4.parentNode;
        if (node4 == view.dom) {
          break;
        }
        offset2 = len = 0;
      } else {
        node4 = next;
        offset2 = 0;
        len = nodeLen(node4);
      }
    }
  }
  if (moveNode) {
    setSelFocus(view, sel, moveNode, moveOffset);
  }
}
function isBlockNode(dom) {
  var desc = dom.pmViewDesc;
  return desc && desc.node && desc.node.isBlock;
}
function setSelFocus(view, sel, node4, offset2) {
  if (selectionCollapsed(sel)) {
    var range2 = document.createRange();
    range2.setEnd(node4, offset2);
    range2.setStart(node4, offset2);
    sel.removeAllRanges();
    sel.addRange(range2);
  } else if (sel.extend) {
    sel.extend(node4, offset2);
  }
  view.domObserver.setCurSelection();
  var state = view.state;
  setTimeout(function() {
    if (view.state == state) {
      selectionToDOM(view);
    }
  }, 50);
}
function selectVertically(view, dir, mods) {
  var sel = view.state.selection;
  if (sel instanceof TextSelection && !sel.empty || mods.indexOf("s") > -1) {
    return false;
  }
  if (result.mac && mods.indexOf("m") > -1) {
    return false;
  }
  var $from = sel.$from;
  var $to = sel.$to;
  if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
    var next = moveSelectionBlock(view.state, dir);
    if (next && next instanceof NodeSelection) {
      return apply7(view, next);
    }
  }
  if (!$from.parent.inlineContent) {
    var side = dir < 0 ? $from : $to;
    var beyond = sel instanceof AllSelection ? Selection.near(side, dir) : Selection.findFrom(side, dir);
    return beyond ? apply7(view, beyond) : false;
  }
  return false;
}
function stopNativeHorizontalDelete(view, dir) {
  if (!(view.state.selection instanceof TextSelection)) {
    return true;
  }
  var ref = view.state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  var empty2 = ref.empty;
  if (!$head.sameParent($anchor)) {
    return true;
  }
  if (!empty2) {
    return false;
  }
  if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) {
    return true;
  }
  var nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (nextNode && !nextNode.isText) {
    var tr = view.state.tr;
    if (dir < 0) {
      tr.delete($head.pos - nextNode.nodeSize, $head.pos);
    } else {
      tr.delete($head.pos, $head.pos + nextNode.nodeSize);
    }
    view.dispatch(tr);
    return true;
  }
  return false;
}
function switchEditable(view, node4, state) {
  view.domObserver.stop();
  node4.contentEditable = state;
  view.domObserver.start();
}
function safariDownArrowBug(view) {
  if (!result.safari || view.state.selection.$head.parentOffset > 0) {
    return;
  }
  var ref = view.root.getSelection();
  var focusNode = ref.focusNode;
  var focusOffset = ref.focusOffset;
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    var child3 = focusNode.firstChild;
    switchEditable(view, child3, true);
    setTimeout(function() {
      return switchEditable(view, child3, false);
    }, 20);
  }
}
function getMods(event) {
  var result2 = "";
  if (event.ctrlKey) {
    result2 += "c";
  }
  if (event.metaKey) {
    result2 += "m";
  }
  if (event.altKey) {
    result2 += "a";
  }
  if (event.shiftKey) {
    result2 += "s";
  }
  return result2;
}
function captureKeyDown(view, event) {
  var code3 = event.keyCode, mods = getMods(event);
  if (code3 == 8 || result.mac && code3 == 72 && mods == "c") {
    return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodesLeft(view);
  } else if (code3 == 46 || result.mac && code3 == 68 && mods == "c") {
    return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodesRight(view);
  } else if (code3 == 13 || code3 == 27) {
    return true;
  } else if (code3 == 37) {
    return selectHorizontally(view, -1, mods) || skipIgnoredNodesLeft(view);
  } else if (code3 == 39) {
    return selectHorizontally(view, 1, mods) || skipIgnoredNodesRight(view);
  } else if (code3 == 38) {
    return selectVertically(view, -1, mods) || skipIgnoredNodesLeft(view);
  } else if (code3 == 40) {
    return safariDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodesRight(view);
  } else if (mods == (result.mac ? "m" : "c") && (code3 == 66 || code3 == 73 || code3 == 89 || code3 == 90)) {
    return true;
  }
  return false;
}
function parseBetween(view, from_, to_) {
  var ref = view.docView.parseRange(from_, to_);
  var parent = ref.node;
  var fromOffset = ref.fromOffset;
  var toOffset = ref.toOffset;
  var from4 = ref.from;
  var to = ref.to;
  var domSel = view.root.getSelection(), find3 = null, anchor = domSel.anchorNode;
  if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
    find3 = [{ node: anchor, offset: domSel.anchorOffset }];
    if (!selectionCollapsed(domSel)) {
      find3.push({ node: domSel.focusNode, offset: domSel.focusOffset });
    }
  }
  if (result.chrome && view.lastKeyCode === 8) {
    for (var off = toOffset; off > fromOffset; off--) {
      var node4 = parent.childNodes[off - 1], desc = node4.pmViewDesc;
      if (node4.nodeName == "BR" && !desc) {
        toOffset = off;
        break;
      }
      if (!desc || desc.size) {
        break;
      }
    }
  }
  var startDoc = view.state.doc;
  var parser = view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
  var $from = startDoc.resolve(from4);
  var sel = null, doc2 = parser.parse(parent, {
    topNode: $from.parent,
    topMatch: $from.parent.contentMatchAt($from.index()),
    topOpen: true,
    from: fromOffset,
    to: toOffset,
    preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
    editableContent: true,
    findPositions: find3,
    ruleFromNode,
    context: $from
  });
  if (find3 && find3[0].pos != null) {
    var anchor$1 = find3[0].pos, head = find3[1] && find3[1].pos;
    if (head == null) {
      head = anchor$1;
    }
    sel = { anchor: anchor$1 + from4, head: head + from4 };
  }
  return { doc: doc2, sel, from: from4, to };
}
function ruleFromNode(dom) {
  var desc = dom.pmViewDesc;
  if (desc) {
    return desc.parseRule();
  } else if (dom.nodeName == "BR" && dom.parentNode) {
    if (result.safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
      var skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return { skip };
    } else if (dom.parentNode.lastChild == dom || result.safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
      return { ignore: true };
    }
  } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
    return { ignore: true };
  }
}
function readDOMChange(view, from4, to, typeOver, addedNodes) {
  if (from4 < 0) {
    var origin = view.lastSelectionTime > Date.now() - 50 ? view.lastSelectionOrigin : null;
    var newSel = selectionFromDOM(view, origin);
    if (newSel && !view.state.selection.eq(newSel)) {
      var tr$1 = view.state.tr.setSelection(newSel);
      if (origin == "pointer") {
        tr$1.setMeta("pointer", true);
      } else if (origin == "key") {
        tr$1.scrollIntoView();
      }
      view.dispatch(tr$1);
    }
    return;
  }
  var $before = view.state.doc.resolve(from4);
  var shared = $before.sharedDepth(to);
  from4 = $before.before(shared + 1);
  to = view.state.doc.resolve(to).after(shared + 1);
  var sel = view.state.selection;
  var parse5 = parseBetween(view, from4, to);
  if (result.chrome && view.cursorWrapper && parse5.sel && parse5.sel.anchor == view.cursorWrapper.deco.from) {
    var text6 = view.cursorWrapper.deco.type.toDOM.nextSibling;
    var size = text6 && text6.nodeValue ? text6.nodeValue.length : 1;
    parse5.sel = { anchor: parse5.sel.anchor + size, head: parse5.sel.anchor + size };
  }
  var doc2 = view.state.doc, compare = doc2.slice(parse5.from, parse5.to);
  var preferredPos, preferredSide;
  if (view.lastKeyCode === 8 && Date.now() - 100 < view.lastKeyCodeTime) {
    preferredPos = view.state.selection.to;
    preferredSide = "end";
  } else {
    preferredPos = view.state.selection.from;
    preferredSide = "start";
  }
  view.lastKeyCode = null;
  var change = findDiff(compare.content, parse5.doc.content, parse5.from, preferredPos, preferredSide);
  if (!change) {
    if (typeOver && sel instanceof TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view.composing && !(parse5.sel && parse5.sel.anchor != parse5.sel.head)) {
      change = { start: sel.from, endA: sel.to, endB: sel.to };
    } else if ((result.ios && view.lastIOSEnter > Date.now() - 225 || result.android) && addedNodes.some(function(n) {
      return n.nodeName == "DIV" || n.nodeName == "P";
    }) && view.someProp("handleKeyDown", function(f) {
      return f(view, keyEvent(13, "Enter"));
    })) {
      view.lastIOSEnter = 0;
      return;
    } else {
      if (parse5.sel) {
        var sel$1 = resolveSelection(view, view.state.doc, parse5.sel);
        if (sel$1 && !sel$1.eq(view.state.selection)) {
          view.dispatch(view.state.tr.setSelection(sel$1));
        }
      }
      return;
    }
  }
  view.domChangeCount++;
  if (view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof TextSelection) {
    if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2) {
      change.start = view.state.selection.from;
    } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2) {
      change.endB += view.state.selection.to - change.endA;
      change.endA = view.state.selection.to;
    }
  }
  if (result.ie && result.ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse5.from && parse5.doc.textBetween(change.start - parse5.from - 1, change.start - parse5.from + 1) == " \xA0") {
    change.start--;
    change.endA--;
    change.endB--;
  }
  var $from = parse5.doc.resolveNoCache(change.start - parse5.from);
  var $to = parse5.doc.resolveNoCache(change.endB - parse5.from);
  var inlineChange = $from.sameParent($to) && $from.parent.inlineContent;
  var nextSel;
  if ((result.ios && view.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some(function(n) {
    return n.nodeName == "DIV" || n.nodeName == "P";
  })) || !inlineChange && $from.pos < parse5.doc.content.size && (nextSel = Selection.findFrom(parse5.doc.resolve($from.pos + 1), 1, true)) && nextSel.head == $to.pos) && view.someProp("handleKeyDown", function(f) {
    return f(view, keyEvent(13, "Enter"));
  })) {
    view.lastIOSEnter = 0;
    return;
  }
  if (view.state.selection.anchor > change.start && looksLikeJoin(doc2, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", function(f) {
    return f(view, keyEvent(8, "Backspace"));
  })) {
    if (result.android && result.chrome) {
      view.domObserver.suppressSelectionUpdates();
    }
    return;
  }
  if (result.chrome && result.android && change.toB == change.from) {
    view.lastAndroidDelete = Date.now();
  }
  if (result.android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse5.sel && parse5.sel.anchor == parse5.sel.head && parse5.sel.head == change.endA) {
    change.endB -= 2;
    $to = parse5.doc.resolveNoCache(change.endB - parse5.from);
    setTimeout(function() {
      view.someProp("handleKeyDown", function(f) {
        return f(view, keyEvent(13, "Enter"));
      });
    }, 20);
  }
  var chFrom = change.start, chTo = change.endA;
  var tr, storedMarks, markChange, $from1;
  if (inlineChange) {
    if ($from.pos == $to.pos) {
      if (result.ie && result.ie_version <= 11 && $from.parentOffset == 0) {
        view.domObserver.suppressSelectionUpdates();
        setTimeout(function() {
          return selectionToDOM(view);
        }, 20);
      }
      tr = view.state.tr.delete(chFrom, chTo);
      storedMarks = doc2.resolve(change.start).marksAcross(doc2.resolve(change.endA));
    } else if (change.endA == change.endB && ($from1 = doc2.resolve(change.start)) && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $from1.parent.content.cut($from1.parentOffset, change.endA - $from1.start())))) {
      tr = view.state.tr;
      if (markChange.type == "add") {
        tr.addMark(chFrom, chTo, markChange.mark);
      } else {
        tr.removeMark(chFrom, chTo, markChange.mark);
      }
    } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
      var text$12 = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
      if (view.someProp("handleTextInput", function(f) {
        return f(view, chFrom, chTo, text$12);
      })) {
        return;
      }
      tr = view.state.tr.insertText(text$12, chFrom, chTo);
    }
  }
  if (!tr) {
    tr = view.state.tr.replace(chFrom, chTo, parse5.doc.slice(change.start - parse5.from, change.endB - parse5.from));
  }
  if (parse5.sel) {
    var sel$2 = resolveSelection(view, tr.doc, parse5.sel);
    if (sel$2 && !(result.chrome && result.android && view.composing && sel$2.empty && (change.start != change.endB || view.lastAndroidDelete < Date.now() - 100) && (sel$2.head == chFrom || sel$2.head == tr.mapping.map(chTo) - 1) || result.ie && sel$2.empty && sel$2.head == chFrom)) {
      tr.setSelection(sel$2);
    }
  }
  if (storedMarks) {
    tr.ensureMarks(storedMarks);
  }
  view.dispatch(tr.scrollIntoView());
}
function resolveSelection(view, doc2, parsedSel) {
  if (Math.max(parsedSel.anchor, parsedSel.head) > doc2.content.size) {
    return null;
  }
  return selectionBetween(view, doc2.resolve(parsedSel.anchor), doc2.resolve(parsedSel.head));
}
function isMarkChange(cur, prev) {
  var curMarks = cur.firstChild.marks, prevMarks = prev.firstChild.marks;
  var added = curMarks, removed = prevMarks, type, mark3, update3;
  for (var i = 0; i < prevMarks.length; i++) {
    added = prevMarks[i].removeFromSet(added);
  }
  for (var i$1 = 0; i$1 < curMarks.length; i$1++) {
    removed = curMarks[i$1].removeFromSet(removed);
  }
  if (added.length == 1 && removed.length == 0) {
    mark3 = added[0];
    type = "add";
    update3 = function(node4) {
      return node4.mark(mark3.addToSet(node4.marks));
    };
  } else if (added.length == 0 && removed.length == 1) {
    mark3 = removed[0];
    type = "remove";
    update3 = function(node4) {
      return node4.mark(mark3.removeFromSet(node4.marks));
    };
  } else {
    return null;
  }
  var updated = [];
  for (var i$2 = 0; i$2 < prev.childCount; i$2++) {
    updated.push(update3(prev.child(i$2)));
  }
  if (Fragment.from(updated).eq(cur)) {
    return { mark: mark3, type };
  }
}
function looksLikeJoin(old, start3, end2, $newStart, $newEnd) {
  if (!$newStart.parent.isTextblock || end2 - start3 <= $newEnd.pos - $newStart.pos || skipClosingAndOpening($newStart, true, false) < $newEnd.pos) {
    return false;
  }
  var $start = old.resolve(start3);
  if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock) {
    return false;
  }
  var $next = old.resolve(skipClosingAndOpening($start, true, true));
  if (!$next.parent.isTextblock || $next.pos > end2 || skipClosingAndOpening($next, true, false) < end2) {
    return false;
  }
  return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
}
function skipClosingAndOpening($pos, fromEnd, mayOpen) {
  var depth = $pos.depth, end2 = fromEnd ? $pos.end() : $pos.pos;
  while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
    depth--;
    end2++;
    fromEnd = false;
  }
  if (mayOpen) {
    var next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
    while (next && !next.isLeaf) {
      next = next.firstChild;
      end2++;
    }
  }
  return end2;
}
function findDiff(a, b, pos, preferredPos, preferredSide) {
  var start3 = a.findDiffStart(b, pos);
  if (start3 == null) {
    return null;
  }
  var ref = a.findDiffEnd(b, pos + a.size, pos + b.size);
  var endA = ref.a;
  var endB = ref.b;
  if (preferredSide == "end") {
    var adjust = Math.max(0, start3 - Math.min(endA, endB));
    preferredPos -= endA + adjust - start3;
  }
  if (endA < start3 && a.size < b.size) {
    var move2 = preferredPos <= start3 && preferredPos >= endA ? start3 - preferredPos : 0;
    start3 -= move2;
    endB = start3 + (endB - endA);
    endA = start3;
  } else if (endB < start3) {
    var move$1 = preferredPos <= start3 && preferredPos >= endB ? start3 - preferredPos : 0;
    start3 -= move$1;
    endA = start3 + (endA - endB);
    endB = start3;
  }
  return { start: start3, endA, endB };
}
function serializeForClipboard(view, slice4) {
  var context = [];
  var content2 = slice4.content;
  var openStart = slice4.openStart;
  var openEnd = slice4.openEnd;
  while (openStart > 1 && openEnd > 1 && content2.childCount == 1 && content2.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    var node4 = content2.firstChild;
    context.push(node4.type.name, node4.attrs != node4.type.defaultAttrs ? node4.attrs : null);
    content2 = node4.content;
  }
  var serializer = view.someProp("clipboardSerializer") || DOMSerializer.fromSchema(view.state.schema);
  var doc2 = detachedDoc(), wrap = doc2.createElement("div");
  wrap.appendChild(serializer.serializeFragment(content2, { document: doc2 }));
  var firstChild = wrap.firstChild, needsWrap;
  while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
    for (var i = needsWrap.length - 1; i >= 0; i--) {
      var wrapper = doc2.createElement(needsWrap[i]);
      while (wrap.firstChild) {
        wrapper.appendChild(wrap.firstChild);
      }
      wrap.appendChild(wrapper);
      if (needsWrap[i] != "tbody") {
        openStart++;
        openEnd++;
      }
    }
    firstChild = wrap.firstChild;
  }
  if (firstChild && firstChild.nodeType == 1) {
    firstChild.setAttribute("data-pm-slice", openStart + " " + openEnd + " " + JSON.stringify(context));
  }
  var text6 = view.someProp("clipboardTextSerializer", function(f) {
    return f(slice4);
  }) || slice4.content.textBetween(0, slice4.content.size, "\n\n");
  return { dom: wrap, text: text6 };
}
function parseFromClipboard(view, text6, html, plainText, $context) {
  var dom, inCode = $context.parent.type.spec.code, slice4;
  if (!html && !text6) {
    return null;
  }
  var asText = text6 && (plainText || inCode || !html);
  if (asText) {
    view.someProp("transformPastedText", function(f) {
      text6 = f(text6, inCode || plainText);
    });
    if (inCode) {
      return text6 ? new Slice(Fragment.from(view.state.schema.text(text6.replace(/\r\n?/g, "\n"))), 0, 0) : Slice.empty;
    }
    var parsed = view.someProp("clipboardTextParser", function(f) {
      return f(text6, $context, plainText);
    });
    if (parsed) {
      slice4 = parsed;
    } else {
      var marks2 = $context.marks();
      var ref = view.state;
      var schema2 = ref.schema;
      var serializer = DOMSerializer.fromSchema(schema2);
      dom = document.createElement("div");
      text6.split(/(?:\r\n?|\n)+/).forEach(function(block3) {
        var p = dom.appendChild(document.createElement("p"));
        if (block3) {
          p.appendChild(serializer.serializeNode(schema2.text(block3, marks2)));
        }
      });
    }
  } else {
    view.someProp("transformPastedHTML", function(f) {
      html = f(html);
    });
    dom = readHTML(html);
    if (result.webkit) {
      restoreReplacedSpaces(dom);
    }
  }
  var contextNode = dom && dom.querySelector("[data-pm-slice]");
  var sliceData = contextNode && /^(\d+) (\d+) (.*)/.exec(contextNode.getAttribute("data-pm-slice"));
  if (!slice4) {
    var parser = view.someProp("clipboardParser") || view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
    slice4 = parser.parseSlice(dom, {
      preserveWhitespace: !!(asText || sliceData),
      context: $context,
      ruleFromNode: function ruleFromNode2(dom2) {
        if (dom2.nodeName == "BR" && !dom2.nextSibling && dom2.parentNode && !inlineParents.test(dom2.parentNode.nodeName)) {
          return { ignore: true };
        }
      }
    });
  }
  if (sliceData) {
    slice4 = addContext(closeSlice(slice4, +sliceData[1], +sliceData[2]), sliceData[3]);
  } else {
    slice4 = Slice.maxOpen(normalizeSiblings(slice4.content, $context), true);
    if (slice4.openStart || slice4.openEnd) {
      var openStart = 0, openEnd = 0;
      for (var node4 = slice4.content.firstChild; openStart < slice4.openStart && !node4.type.spec.isolating; openStart++, node4 = node4.firstChild) {
      }
      for (var node$1 = slice4.content.lastChild; openEnd < slice4.openEnd && !node$1.type.spec.isolating; openEnd++, node$1 = node$1.lastChild) {
      }
      slice4 = closeSlice(slice4, openStart, openEnd);
    }
  }
  view.someProp("transformPasted", function(f) {
    slice4 = f(slice4);
  });
  return slice4;
}
var inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function normalizeSiblings(fragment, $context) {
  if (fragment.childCount < 2) {
    return fragment;
  }
  var loop = function(d2) {
    var parent = $context.node(d2);
    var match2 = parent.contentMatchAt($context.index(d2));
    var lastWrap = void 0, result2 = [];
    fragment.forEach(function(node4) {
      if (!result2) {
        return;
      }
      var wrap = match2.findWrapping(node4.type), inLast;
      if (!wrap) {
        return result2 = null;
      }
      if (inLast = result2.length && lastWrap.length && addToSibling(wrap, lastWrap, node4, result2[result2.length - 1], 0)) {
        result2[result2.length - 1] = inLast;
      } else {
        if (result2.length) {
          result2[result2.length - 1] = closeRight(result2[result2.length - 1], lastWrap.length);
        }
        var wrapped = withWrappers(node4, wrap);
        result2.push(wrapped);
        match2 = match2.matchType(wrapped.type, wrapped.attrs);
        lastWrap = wrap;
      }
    });
    if (result2) {
      return { v: Fragment.from(result2) };
    }
  };
  for (var d = $context.depth; d >= 0; d--) {
    var returned = loop(d);
    if (returned)
      return returned.v;
  }
  return fragment;
}
function withWrappers(node4, wrap, from4) {
  if (from4 === void 0)
    from4 = 0;
  for (var i = wrap.length - 1; i >= from4; i--) {
    node4 = wrap[i].create(null, Fragment.from(node4));
  }
  return node4;
}
function addToSibling(wrap, lastWrap, node4, sibling, depth) {
  if (depth < wrap.length && depth < lastWrap.length && wrap[depth] == lastWrap[depth]) {
    var inner = addToSibling(wrap, lastWrap, node4, sibling.lastChild, depth + 1);
    if (inner) {
      return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
    }
    var match2 = sibling.contentMatchAt(sibling.childCount);
    if (match2.matchType(depth == wrap.length - 1 ? node4.type : wrap[depth + 1])) {
      return sibling.copy(sibling.content.append(Fragment.from(withWrappers(node4, wrap, depth + 1))));
    }
  }
}
function closeRight(node4, depth) {
  if (depth == 0) {
    return node4;
  }
  var fragment = node4.content.replaceChild(node4.childCount - 1, closeRight(node4.lastChild, depth - 1));
  var fill = node4.contentMatchAt(node4.childCount).fillBefore(Fragment.empty, true);
  return node4.copy(fragment.append(fill));
}
function closeRange(fragment, side, from4, to, depth, openEnd) {
  var node4 = side < 0 ? fragment.firstChild : fragment.lastChild, inner = node4.content;
  if (depth < to - 1) {
    inner = closeRange(inner, side, from4, to, depth + 1, openEnd);
  }
  if (depth >= from4) {
    inner = side < 0 ? node4.contentMatchAt(0).fillBefore(inner, fragment.childCount > 1 || openEnd <= depth).append(inner) : inner.append(node4.contentMatchAt(node4.childCount).fillBefore(Fragment.empty, true));
  }
  return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node4.copy(inner));
}
function closeSlice(slice4, openStart, openEnd) {
  if (openStart < slice4.openStart) {
    slice4 = new Slice(closeRange(slice4.content, -1, openStart, slice4.openStart, 0, slice4.openEnd), openStart, slice4.openEnd);
  }
  if (openEnd < slice4.openEnd) {
    slice4 = new Slice(closeRange(slice4.content, 1, openEnd, slice4.openEnd, 0, 0), slice4.openStart, openEnd);
  }
  return slice4;
}
var wrapMap = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
var _detachedDoc = null;
function detachedDoc() {
  return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
}
function readHTML(html) {
  var metas = /^(\s*<meta [^>]*>)*/.exec(html);
  if (metas) {
    html = html.slice(metas[0].length);
  }
  var elt = detachedDoc().createElement("div");
  var firstTag = /<([a-z][^>\s]+)/i.exec(html), wrap;
  if (wrap = firstTag && wrapMap[firstTag[1].toLowerCase()]) {
    html = wrap.map(function(n) {
      return "<" + n + ">";
    }).join("") + html + wrap.map(function(n) {
      return "</" + n + ">";
    }).reverse().join("");
  }
  elt.innerHTML = html;
  if (wrap) {
    for (var i = 0; i < wrap.length; i++) {
      elt = elt.querySelector(wrap[i]) || elt;
    }
  }
  return elt;
}
function restoreReplacedSpaces(dom) {
  var nodes = dom.querySelectorAll(result.chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (var i = 0; i < nodes.length; i++) {
    var node4 = nodes[i];
    if (node4.childNodes.length == 1 && node4.textContent == "\xA0" && node4.parentNode) {
      node4.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node4);
    }
  }
}
function addContext(slice4, context) {
  if (!slice4.size) {
    return slice4;
  }
  var schema2 = slice4.content.firstChild.type.schema, array;
  try {
    array = JSON.parse(context);
  } catch (e) {
    return slice4;
  }
  var content2 = slice4.content;
  var openStart = slice4.openStart;
  var openEnd = slice4.openEnd;
  for (var i = array.length - 2; i >= 0; i -= 2) {
    var type = schema2.nodes[array[i]];
    if (!type || type.hasRequiredAttrs()) {
      break;
    }
    content2 = Fragment.from(type.create(array[i + 1], content2));
    openStart++;
    openEnd++;
  }
  return new Slice(content2, openStart, openEnd);
}
var observeOptions = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
var useCharData = result.ie && result.ie_version <= 11;
var SelectionState = function SelectionState2() {
  this.anchorNode = this.anchorOffset = this.focusNode = this.focusOffset = null;
};
SelectionState.prototype.set = function set(sel) {
  this.anchorNode = sel.anchorNode;
  this.anchorOffset = sel.anchorOffset;
  this.focusNode = sel.focusNode;
  this.focusOffset = sel.focusOffset;
};
SelectionState.prototype.eq = function eq5(sel) {
  return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
};
var DOMObserver = function DOMObserver2(view, handleDOMChange) {
  var this$1$1 = this;
  this.view = view;
  this.handleDOMChange = handleDOMChange;
  this.queue = [];
  this.flushingSoon = -1;
  this.observer = window.MutationObserver && new window.MutationObserver(function(mutations) {
    for (var i = 0; i < mutations.length; i++) {
      this$1$1.queue.push(mutations[i]);
    }
    if (result.ie && result.ie_version <= 11 && mutations.some(function(m) {
      return m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length;
    })) {
      this$1$1.flushSoon();
    } else {
      this$1$1.flush();
    }
  });
  this.currentSelection = new SelectionState();
  if (useCharData) {
    this.onCharData = function(e) {
      this$1$1.queue.push({ target: e.target, type: "characterData", oldValue: e.prevValue });
      this$1$1.flushSoon();
    };
  }
  this.onSelectionChange = this.onSelectionChange.bind(this);
  this.suppressingSelectionUpdates = false;
};
DOMObserver.prototype.flushSoon = function flushSoon() {
  var this$1$1 = this;
  if (this.flushingSoon < 0) {
    this.flushingSoon = window.setTimeout(function() {
      this$1$1.flushingSoon = -1;
      this$1$1.flush();
    }, 20);
  }
};
DOMObserver.prototype.forceFlush = function forceFlush() {
  if (this.flushingSoon > -1) {
    window.clearTimeout(this.flushingSoon);
    this.flushingSoon = -1;
    this.flush();
  }
};
DOMObserver.prototype.start = function start2() {
  if (this.observer) {
    this.observer.observe(this.view.dom, observeOptions);
  }
  if (useCharData) {
    this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
  }
  this.connectSelection();
};
DOMObserver.prototype.stop = function stop() {
  var this$1$1 = this;
  if (this.observer) {
    var take = this.observer.takeRecords();
    if (take.length) {
      for (var i = 0; i < take.length; i++) {
        this.queue.push(take[i]);
      }
      window.setTimeout(function() {
        return this$1$1.flush();
      }, 20);
    }
    this.observer.disconnect();
  }
  if (useCharData) {
    this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
  }
  this.disconnectSelection();
};
DOMObserver.prototype.connectSelection = function connectSelection() {
  this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
};
DOMObserver.prototype.disconnectSelection = function disconnectSelection() {
  this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
};
DOMObserver.prototype.suppressSelectionUpdates = function suppressSelectionUpdates() {
  var this$1$1 = this;
  this.suppressingSelectionUpdates = true;
  setTimeout(function() {
    return this$1$1.suppressingSelectionUpdates = false;
  }, 50);
};
DOMObserver.prototype.onSelectionChange = function onSelectionChange() {
  if (!hasFocusAndSelection(this.view)) {
    return;
  }
  if (this.suppressingSelectionUpdates) {
    return selectionToDOM(this.view);
  }
  if (result.ie && result.ie_version <= 11 && !this.view.state.selection.empty) {
    var sel = this.view.root.getSelection();
    if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) {
      return this.flushSoon();
    }
  }
  this.flush();
};
DOMObserver.prototype.setCurSelection = function setCurSelection() {
  this.currentSelection.set(this.view.root.getSelection());
};
DOMObserver.prototype.ignoreSelectionChange = function ignoreSelectionChange(sel) {
  if (sel.rangeCount == 0) {
    return true;
  }
  var container = sel.getRangeAt(0).commonAncestorContainer;
  var desc = this.view.docView.nearestDesc(container);
  if (desc && desc.ignoreMutation({ type: "selection", target: container.nodeType == 3 ? container.parentNode : container })) {
    this.setCurSelection();
    return true;
  }
};
DOMObserver.prototype.flush = function flush() {
  if (!this.view.docView || this.flushingSoon > -1) {
    return;
  }
  var mutations = this.observer ? this.observer.takeRecords() : [];
  if (this.queue.length) {
    mutations = this.queue.concat(mutations);
    this.queue.length = 0;
  }
  var sel = this.view.root.getSelection();
  var newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasSelection(this.view) && !this.ignoreSelectionChange(sel);
  var from4 = -1, to = -1, typeOver = false, added = [];
  if (this.view.editable) {
    for (var i = 0; i < mutations.length; i++) {
      var result$1 = this.registerMutation(mutations[i], added);
      if (result$1) {
        from4 = from4 < 0 ? result$1.from : Math.min(result$1.from, from4);
        to = to < 0 ? result$1.to : Math.max(result$1.to, to);
        if (result$1.typeOver) {
          typeOver = true;
        }
      }
    }
  }
  if (result.gecko && added.length > 1) {
    var brs = added.filter(function(n) {
      return n.nodeName == "BR";
    });
    if (brs.length == 2) {
      var a = brs[0];
      var b = brs[1];
      if (a.parentNode && a.parentNode.parentNode == b.parentNode) {
        b.remove();
      } else {
        a.remove();
      }
    }
  }
  if (from4 > -1 || newSel) {
    if (from4 > -1) {
      this.view.docView.markDirty(from4, to);
      checkCSS(this.view);
    }
    this.handleDOMChange(from4, to, typeOver, added);
    if (this.view.docView.dirty) {
      this.view.updateState(this.view.state);
    } else if (!this.currentSelection.eq(sel)) {
      selectionToDOM(this.view);
    }
    this.currentSelection.set(sel);
  }
};
DOMObserver.prototype.registerMutation = function registerMutation(mut, added) {
  if (added.indexOf(mut.target) > -1) {
    return null;
  }
  var desc = this.view.docView.nearestDesc(mut.target);
  if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" || mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style"))) {
    return null;
  }
  if (!desc || desc.ignoreMutation(mut)) {
    return null;
  }
  if (mut.type == "childList") {
    for (var i = 0; i < mut.addedNodes.length; i++) {
      added.push(mut.addedNodes[i]);
    }
    if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target)) {
      return { from: desc.posBefore, to: desc.posAfter };
    }
    var prev = mut.previousSibling, next = mut.nextSibling;
    if (result.ie && result.ie_version <= 11 && mut.addedNodes.length) {
      for (var i$1 = 0; i$1 < mut.addedNodes.length; i$1++) {
        var ref = mut.addedNodes[i$1];
        var previousSibling = ref.previousSibling;
        var nextSibling = ref.nextSibling;
        if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0) {
          prev = previousSibling;
        }
        if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0) {
          next = nextSibling;
        }
      }
    }
    var fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
    var from4 = desc.localPosFromDOM(mut.target, fromOffset, -1);
    var toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
    var to = desc.localPosFromDOM(mut.target, toOffset, 1);
    return { from: from4, to };
  } else if (mut.type == "attributes") {
    return { from: desc.posAtStart - desc.border, to: desc.posAtEnd + desc.border };
  } else {
    return {
      from: desc.posAtStart,
      to: desc.posAtEnd,
      typeOver: mut.target.nodeValue == mut.oldValue
    };
  }
};
var cssChecked = false;
function checkCSS(view) {
  if (cssChecked) {
    return;
  }
  cssChecked = true;
  if (getComputedStyle(view.dom).whiteSpace == "normal") {
    console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
  }
}
var handlers = {}, editHandlers = {};
function initInput(view) {
  view.shiftKey = false;
  view.mouseDown = null;
  view.lastKeyCode = null;
  view.lastKeyCodeTime = 0;
  view.lastClick = { time: 0, x: 0, y: 0, type: "" };
  view.lastSelectionOrigin = null;
  view.lastSelectionTime = 0;
  view.lastIOSEnter = 0;
  view.lastIOSEnterFallbackTimeout = null;
  view.lastAndroidDelete = 0;
  view.composing = false;
  view.composingTimeout = null;
  view.compositionNodes = [];
  view.compositionEndedAt = -2e8;
  view.domObserver = new DOMObserver(view, function(from4, to, typeOver, added) {
    return readDOMChange(view, from4, to, typeOver, added);
  });
  view.domObserver.start();
  view.domChangeCount = 0;
  view.eventHandlers = /* @__PURE__ */ Object.create(null);
  var loop = function(event2) {
    var handler = handlers[event2];
    view.dom.addEventListener(event2, view.eventHandlers[event2] = function(event3) {
      if (eventBelongsToView(view, event3) && !runCustomHandler(view, event3) && (view.editable || !(event3.type in editHandlers))) {
        handler(view, event3);
      }
    });
  };
  for (var event in handlers)
    loop(event);
  if (result.safari) {
    view.dom.addEventListener("input", function() {
      return null;
    });
  }
  ensureListeners(view);
}
function setSelectionOrigin(view, origin) {
  view.lastSelectionOrigin = origin;
  view.lastSelectionTime = Date.now();
}
function destroyInput(view) {
  view.domObserver.stop();
  for (var type in view.eventHandlers) {
    view.dom.removeEventListener(type, view.eventHandlers[type]);
  }
  clearTimeout(view.composingTimeout);
  clearTimeout(view.lastIOSEnterFallbackTimeout);
}
function ensureListeners(view) {
  view.someProp("handleDOMEvents", function(currentHandlers) {
    for (var type in currentHandlers) {
      if (!view.eventHandlers[type]) {
        view.dom.addEventListener(type, view.eventHandlers[type] = function(event) {
          return runCustomHandler(view, event);
        });
      }
    }
  });
}
function runCustomHandler(view, event) {
  return view.someProp("handleDOMEvents", function(handlers2) {
    var handler = handlers2[event.type];
    return handler ? handler(view, event) || event.defaultPrevented : false;
  });
}
function eventBelongsToView(view, event) {
  if (!event.bubbles) {
    return true;
  }
  if (event.defaultPrevented) {
    return false;
  }
  for (var node4 = event.target; node4 != view.dom; node4 = node4.parentNode) {
    if (!node4 || node4.nodeType == 11 || node4.pmViewDesc && node4.pmViewDesc.stopEvent(event)) {
      return false;
    }
  }
  return true;
}
function dispatchEvent(view, event) {
  if (!runCustomHandler(view, event) && handlers[event.type] && (view.editable || !(event.type in editHandlers))) {
    handlers[event.type](view, event);
  }
}
editHandlers.keydown = function(view, event) {
  view.shiftKey = event.keyCode == 16 || event.shiftKey;
  if (inOrNearComposition(view, event)) {
    return;
  }
  view.lastKeyCode = event.keyCode;
  view.lastKeyCodeTime = Date.now();
  if (result.android && result.chrome && event.keyCode == 13) {
    return;
  }
  if (event.keyCode != 229) {
    view.domObserver.forceFlush();
  }
  if (result.ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
    var now = Date.now();
    view.lastIOSEnter = now;
    view.lastIOSEnterFallbackTimeout = setTimeout(function() {
      if (view.lastIOSEnter == now) {
        view.someProp("handleKeyDown", function(f) {
          return f(view, keyEvent(13, "Enter"));
        });
        view.lastIOSEnter = 0;
      }
    }, 200);
  } else if (view.someProp("handleKeyDown", function(f) {
    return f(view, event);
  }) || captureKeyDown(view, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "key");
  }
};
editHandlers.keyup = function(view, e) {
  if (e.keyCode == 16) {
    view.shiftKey = false;
  }
};
editHandlers.keypress = function(view, event) {
  if (inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || result.mac && event.metaKey) {
    return;
  }
  if (view.someProp("handleKeyPress", function(f) {
    return f(view, event);
  })) {
    event.preventDefault();
    return;
  }
  var sel = view.state.selection;
  if (!(sel instanceof TextSelection) || !sel.$from.sameParent(sel.$to)) {
    var text6 = String.fromCharCode(event.charCode);
    if (!view.someProp("handleTextInput", function(f) {
      return f(view, sel.$from.pos, sel.$to.pos, text6);
    })) {
      view.dispatch(view.state.tr.insertText(text6).scrollIntoView());
    }
    event.preventDefault();
  }
};
function eventCoords(event) {
  return { left: event.clientX, top: event.clientY };
}
function isNear(event, click) {
  var dx = click.x - event.clientX, dy = click.y - event.clientY;
  return dx * dx + dy * dy < 100;
}
function runHandlerOnContext(view, propName, pos, inside, event) {
  if (inside == -1) {
    return false;
  }
  var $pos = view.state.doc.resolve(inside);
  var loop = function(i2) {
    if (view.someProp(propName, function(f) {
      return i2 > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i2), event, true) : f(view, pos, $pos.node(i2), $pos.before(i2), event, false);
    })) {
      return { v: true };
    }
  };
  for (var i = $pos.depth + 1; i > 0; i--) {
    var returned = loop(i);
    if (returned)
      return returned.v;
  }
  return false;
}
function updateSelection(view, selection, origin) {
  if (!view.focused) {
    view.focus();
  }
  var tr = view.state.tr.setSelection(selection);
  if (origin == "pointer") {
    tr.setMeta("pointer", true);
  }
  view.dispatch(tr);
}
function selectClickedLeaf(view, inside) {
  if (inside == -1) {
    return false;
  }
  var $pos = view.state.doc.resolve(inside), node4 = $pos.nodeAfter;
  if (node4 && node4.isAtom && NodeSelection.isSelectable(node4)) {
    updateSelection(view, new NodeSelection($pos), "pointer");
    return true;
  }
  return false;
}
function selectClickedNode(view, inside) {
  if (inside == -1) {
    return false;
  }
  var sel = view.state.selection, selectedNode, selectAt;
  if (sel instanceof NodeSelection) {
    selectedNode = sel.node;
  }
  var $pos = view.state.doc.resolve(inside);
  for (var i = $pos.depth + 1; i > 0; i--) {
    var node4 = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    if (NodeSelection.isSelectable(node4)) {
      if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos) {
        selectAt = $pos.before(sel.$from.depth);
      } else {
        selectAt = $pos.before(i);
      }
      break;
    }
  }
  if (selectAt != null) {
    updateSelection(view, NodeSelection.create(view.state.doc, selectAt), "pointer");
    return true;
  } else {
    return false;
  }
}
function handleSingleClick(view, pos, inside, event, selectNode) {
  return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", function(f) {
    return f(view, pos, event);
  }) || (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside));
}
function handleDoubleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", function(f) {
    return f(view, pos, event);
  });
}
function handleTripleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", function(f) {
    return f(view, pos, event);
  }) || defaultTripleClick(view, inside, event);
}
function defaultTripleClick(view, inside, event) {
  if (event.button != 0) {
    return false;
  }
  var doc2 = view.state.doc;
  if (inside == -1) {
    if (doc2.inlineContent) {
      updateSelection(view, TextSelection.create(doc2, 0, doc2.content.size), "pointer");
      return true;
    }
    return false;
  }
  var $pos = doc2.resolve(inside);
  for (var i = $pos.depth + 1; i > 0; i--) {
    var node4 = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    var nodePos = $pos.before(i);
    if (node4.inlineContent) {
      updateSelection(view, TextSelection.create(doc2, nodePos + 1, nodePos + 1 + node4.content.size), "pointer");
    } else if (NodeSelection.isSelectable(node4)) {
      updateSelection(view, NodeSelection.create(doc2, nodePos), "pointer");
    } else {
      continue;
    }
    return true;
  }
}
function forceDOMFlush(view) {
  return endComposition(view);
}
var selectNodeModifier = result.mac ? "metaKey" : "ctrlKey";
handlers.mousedown = function(view, event) {
  view.shiftKey = event.shiftKey;
  var flushed = forceDOMFlush(view);
  var now = Date.now(), type = "singleClick";
  if (now - view.lastClick.time < 500 && isNear(event, view.lastClick) && !event[selectNodeModifier]) {
    if (view.lastClick.type == "singleClick") {
      type = "doubleClick";
    } else if (view.lastClick.type == "doubleClick") {
      type = "tripleClick";
    }
  }
  view.lastClick = { time: now, x: event.clientX, y: event.clientY, type };
  var pos = view.posAtCoords(eventCoords(event));
  if (!pos) {
    return;
  }
  if (type == "singleClick") {
    if (view.mouseDown) {
      view.mouseDown.done();
    }
    view.mouseDown = new MouseDown(view, pos, event, flushed);
  } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "pointer");
  }
};
var MouseDown = function MouseDown2(view, pos, event, flushed) {
  var this$1$1 = this;
  this.view = view;
  this.startDoc = view.state.doc;
  this.pos = pos;
  this.event = event;
  this.flushed = flushed;
  this.selectNode = event[selectNodeModifier];
  this.allowDefault = event.shiftKey;
  this.delayedSelectionSync = false;
  var targetNode, targetPos;
  if (pos.inside > -1) {
    targetNode = view.state.doc.nodeAt(pos.inside);
    targetPos = pos.inside;
  } else {
    var $pos = view.state.doc.resolve(pos.pos);
    targetNode = $pos.parent;
    targetPos = $pos.depth ? $pos.before() : 0;
  }
  this.mightDrag = null;
  var target2 = flushed ? null : event.target;
  var targetDesc = target2 ? view.docView.nearestDesc(target2, true) : null;
  this.target = targetDesc ? targetDesc.dom : null;
  var ref = view.state;
  var selection = ref.selection;
  if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof NodeSelection && selection.from <= targetPos && selection.to > targetPos) {
    this.mightDrag = {
      node: targetNode,
      pos: targetPos,
      addAttr: this.target && !this.target.draggable,
      setUneditable: this.target && result.gecko && !this.target.hasAttribute("contentEditable")
    };
  }
  if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
    this.view.domObserver.stop();
    if (this.mightDrag.addAttr) {
      this.target.draggable = true;
    }
    if (this.mightDrag.setUneditable) {
      setTimeout(function() {
        if (this$1$1.view.mouseDown == this$1$1) {
          this$1$1.target.setAttribute("contentEditable", "false");
        }
      }, 20);
    }
    this.view.domObserver.start();
  }
  view.root.addEventListener("mouseup", this.up = this.up.bind(this));
  view.root.addEventListener("mousemove", this.move = this.move.bind(this));
  setSelectionOrigin(view, "pointer");
};
MouseDown.prototype.done = function done() {
  var this$1$1 = this;
  this.view.root.removeEventListener("mouseup", this.up);
  this.view.root.removeEventListener("mousemove", this.move);
  if (this.mightDrag && this.target) {
    this.view.domObserver.stop();
    if (this.mightDrag.addAttr) {
      this.target.removeAttribute("draggable");
    }
    if (this.mightDrag.setUneditable) {
      this.target.removeAttribute("contentEditable");
    }
    this.view.domObserver.start();
  }
  if (this.delayedSelectionSync) {
    setTimeout(function() {
      return selectionToDOM(this$1$1.view);
    });
  }
  this.view.mouseDown = null;
};
MouseDown.prototype.up = function up(event) {
  this.done();
  if (!this.view.dom.contains(event.target.nodeType == 3 ? event.target.parentNode : event.target)) {
    return;
  }
  var pos = this.pos;
  if (this.view.state.doc != this.startDoc) {
    pos = this.view.posAtCoords(eventCoords(event));
  }
  if (this.allowDefault || !pos) {
    setSelectionOrigin(this.view, "pointer");
  } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
    event.preventDefault();
  } else if (event.button == 0 && (this.flushed || result.safari && this.mightDrag && !this.mightDrag.node.isAtom || result.chrome && !(this.view.state.selection instanceof TextSelection) && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
    updateSelection(this.view, Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
    event.preventDefault();
  } else {
    setSelectionOrigin(this.view, "pointer");
  }
};
MouseDown.prototype.move = function move(event) {
  if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4)) {
    this.allowDefault = true;
  }
  setSelectionOrigin(this.view, "pointer");
  if (event.buttons == 0) {
    this.done();
  }
};
handlers.touchdown = function(view) {
  forceDOMFlush(view);
  setSelectionOrigin(view, "pointer");
};
handlers.contextmenu = function(view) {
  return forceDOMFlush(view);
};
function inOrNearComposition(view, event) {
  if (view.composing) {
    return true;
  }
  if (result.safari && Math.abs(event.timeStamp - view.compositionEndedAt) < 500) {
    view.compositionEndedAt = -2e8;
    return true;
  }
  return false;
}
var timeoutComposition = result.android ? 5e3 : -1;
editHandlers.compositionstart = editHandlers.compositionupdate = function(view) {
  if (!view.composing) {
    view.domObserver.flush();
    var state = view.state;
    var $pos = state.selection.$from;
    if (state.selection.empty && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some(function(m) {
      return m.type.spec.inclusive === false;
    }))) {
      view.markCursor = view.state.storedMarks || $pos.marks();
      endComposition(view, true);
      view.markCursor = null;
    } else {
      endComposition(view);
      if (result.gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
        var sel = view.root.getSelection();
        for (var node4 = sel.focusNode, offset2 = sel.focusOffset; node4 && node4.nodeType == 1 && offset2 != 0; ) {
          var before2 = offset2 < 0 ? node4.lastChild : node4.childNodes[offset2 - 1];
          if (!before2) {
            break;
          }
          if (before2.nodeType == 3) {
            sel.collapse(before2, before2.nodeValue.length);
            break;
          } else {
            node4 = before2;
            offset2 = -1;
          }
        }
      }
    }
    view.composing = true;
  }
  scheduleComposeEnd(view, timeoutComposition);
};
editHandlers.compositionend = function(view, event) {
  if (view.composing) {
    view.composing = false;
    view.compositionEndedAt = event.timeStamp;
    scheduleComposeEnd(view, 20);
  }
};
function scheduleComposeEnd(view, delay) {
  clearTimeout(view.composingTimeout);
  if (delay > -1) {
    view.composingTimeout = setTimeout(function() {
      return endComposition(view);
    }, delay);
  }
}
function clearComposition(view) {
  if (view.composing) {
    view.composing = false;
    view.compositionEndedAt = timestampFromCustomEvent();
  }
  while (view.compositionNodes.length > 0) {
    view.compositionNodes.pop().markParentsDirty();
  }
}
function timestampFromCustomEvent() {
  var event = document.createEvent("Event");
  event.initEvent("event", true, true);
  return event.timeStamp;
}
function endComposition(view, forceUpdate) {
  if (result.android && view.domObserver.flushingSoon >= 0) {
    return;
  }
  view.domObserver.forceFlush();
  clearComposition(view);
  if (forceUpdate || view.docView.dirty) {
    var sel = selectionFromDOM(view);
    if (sel && !sel.eq(view.state.selection)) {
      view.dispatch(view.state.tr.setSelection(sel));
    } else {
      view.updateState(view.state);
    }
    return true;
  }
  return false;
}
function captureCopy(view, dom) {
  if (!view.dom.parentNode) {
    return;
  }
  var wrap = view.dom.parentNode.appendChild(document.createElement("div"));
  wrap.appendChild(dom);
  wrap.style.cssText = "position: fixed; left: -10000px; top: 10px";
  var sel = getSelection(), range2 = document.createRange();
  range2.selectNodeContents(dom);
  view.dom.blur();
  sel.removeAllRanges();
  sel.addRange(range2);
  setTimeout(function() {
    if (wrap.parentNode) {
      wrap.parentNode.removeChild(wrap);
    }
    view.focus();
  }, 50);
}
var brokenClipboardAPI = result.ie && result.ie_version < 15 || result.ios && result.webkit_version < 604;
handlers.copy = editHandlers.cut = function(view, e) {
  var sel = view.state.selection, cut3 = e.type == "cut";
  if (sel.empty) {
    return;
  }
  var data = brokenClipboardAPI ? null : e.clipboardData;
  var slice4 = sel.content();
  var ref = serializeForClipboard(view, slice4);
  var dom = ref.dom;
  var text6 = ref.text;
  if (data) {
    e.preventDefault();
    data.clearData();
    data.setData("text/html", dom.innerHTML);
    data.setData("text/plain", text6);
  } else {
    captureCopy(view, dom);
  }
  if (cut3) {
    view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
  }
};
function sliceSingleNode(slice4) {
  return slice4.openStart == 0 && slice4.openEnd == 0 && slice4.content.childCount == 1 ? slice4.content.firstChild : null;
}
function capturePaste(view, e) {
  if (!view.dom.parentNode) {
    return;
  }
  var plainText = view.shiftKey || view.state.selection.$from.parent.type.spec.code;
  var target2 = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
  if (!plainText) {
    target2.contentEditable = "true";
  }
  target2.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target2.focus();
  setTimeout(function() {
    view.focus();
    if (target2.parentNode) {
      target2.parentNode.removeChild(target2);
    }
    if (plainText) {
      doPaste(view, target2.value, null, e);
    } else {
      doPaste(view, target2.textContent, target2.innerHTML, e);
    }
  }, 50);
}
function doPaste(view, text6, html, e) {
  var slice4 = parseFromClipboard(view, text6, html, view.shiftKey, view.state.selection.$from);
  if (view.someProp("handlePaste", function(f) {
    return f(view, e, slice4 || Slice.empty);
  })) {
    return true;
  }
  if (!slice4) {
    return false;
  }
  var singleNode = sliceSingleNode(slice4);
  var tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, view.shiftKey) : view.state.tr.replaceSelection(slice4);
  view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
  return true;
}
editHandlers.paste = function(view, e) {
  if (view.composing && !result.android) {
    return;
  }
  var data = brokenClipboardAPI ? null : e.clipboardData;
  if (data && doPaste(view, data.getData("text/plain"), data.getData("text/html"), e)) {
    e.preventDefault();
  } else {
    capturePaste(view, e);
  }
};
var Dragging = function Dragging2(slice4, move2) {
  this.slice = slice4;
  this.move = move2;
};
var dragCopyModifier = result.mac ? "altKey" : "ctrlKey";
handlers.dragstart = function(view, e) {
  var mouseDown = view.mouseDown;
  if (mouseDown) {
    mouseDown.done();
  }
  if (!e.dataTransfer) {
    return;
  }
  var sel = view.state.selection;
  var pos = sel.empty ? null : view.posAtCoords(eventCoords(e));
  if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof NodeSelection ? sel.to - 1 : sel.to))
    ;
  else if (mouseDown && mouseDown.mightDrag) {
    view.dispatch(view.state.tr.setSelection(NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos)));
  } else if (e.target && e.target.nodeType == 1) {
    var desc = view.docView.nearestDesc(e.target, true);
    if (desc && desc.node.type.spec.draggable && desc != view.docView) {
      view.dispatch(view.state.tr.setSelection(NodeSelection.create(view.state.doc, desc.posBefore)));
    }
  }
  var slice4 = view.state.selection.content();
  var ref = serializeForClipboard(view, slice4);
  var dom = ref.dom;
  var text6 = ref.text;
  e.dataTransfer.clearData();
  e.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
  e.dataTransfer.effectAllowed = "copyMove";
  if (!brokenClipboardAPI) {
    e.dataTransfer.setData("text/plain", text6);
  }
  view.dragging = new Dragging(slice4, !e[dragCopyModifier]);
};
handlers.dragend = function(view) {
  var dragging = view.dragging;
  window.setTimeout(function() {
    if (view.dragging == dragging) {
      view.dragging = null;
    }
  }, 50);
};
editHandlers.dragover = editHandlers.dragenter = function(_, e) {
  return e.preventDefault();
};
editHandlers.drop = function(view, e) {
  var dragging = view.dragging;
  view.dragging = null;
  if (!e.dataTransfer) {
    return;
  }
  var eventPos = view.posAtCoords(eventCoords(e));
  if (!eventPos) {
    return;
  }
  var $mouse = view.state.doc.resolve(eventPos.pos);
  if (!$mouse) {
    return;
  }
  var slice4 = dragging && dragging.slice;
  if (slice4) {
    view.someProp("transformPasted", function(f) {
      slice4 = f(slice4);
    });
  } else {
    slice4 = parseFromClipboard(view, e.dataTransfer.getData(brokenClipboardAPI ? "Text" : "text/plain"), brokenClipboardAPI ? null : e.dataTransfer.getData("text/html"), false, $mouse);
  }
  var move2 = dragging && !e[dragCopyModifier];
  if (view.someProp("handleDrop", function(f) {
    return f(view, e, slice4 || Slice.empty, move2);
  })) {
    e.preventDefault();
    return;
  }
  if (!slice4) {
    return;
  }
  e.preventDefault();
  var insertPos = slice4 ? dropPoint(view.state.doc, $mouse.pos, slice4) : $mouse.pos;
  if (insertPos == null) {
    insertPos = $mouse.pos;
  }
  var tr = view.state.tr;
  if (move2) {
    tr.deleteSelection();
  }
  var pos = tr.mapping.map(insertPos);
  var isNode = slice4.openStart == 0 && slice4.openEnd == 0 && slice4.content.childCount == 1;
  var beforeInsert = tr.doc;
  if (isNode) {
    tr.replaceRangeWith(pos, pos, slice4.content.firstChild);
  } else {
    tr.replaceRange(pos, pos, slice4);
  }
  if (tr.doc.eq(beforeInsert)) {
    return;
  }
  var $pos = tr.doc.resolve(pos);
  if (isNode && NodeSelection.isSelectable(slice4.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice4.content.firstChild)) {
    tr.setSelection(new NodeSelection($pos));
  } else {
    var end2 = tr.mapping.map(insertPos);
    tr.mapping.maps[tr.mapping.maps.length - 1].forEach(function(_from, _to, _newFrom, newTo) {
      return end2 = newTo;
    });
    tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end2)));
  }
  view.focus();
  view.dispatch(tr.setMeta("uiEvent", "drop"));
};
handlers.focus = function(view) {
  if (!view.focused) {
    view.domObserver.stop();
    view.dom.classList.add("ProseMirror-focused");
    view.domObserver.start();
    view.focused = true;
    setTimeout(function() {
      if (view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.root.getSelection())) {
        selectionToDOM(view);
      }
    }, 20);
  }
};
handlers.blur = function(view, e) {
  if (view.focused) {
    view.domObserver.stop();
    view.dom.classList.remove("ProseMirror-focused");
    view.domObserver.start();
    if (e.relatedTarget && view.dom.contains(e.relatedTarget)) {
      view.domObserver.currentSelection.set({});
    }
    view.focused = false;
  }
};
handlers.beforeinput = function(view, event) {
  if (result.chrome && result.android && event.inputType == "deleteContentBackward") {
    view.domObserver.flushSoon();
    var domChangeCount = view.domChangeCount;
    setTimeout(function() {
      if (view.domChangeCount != domChangeCount) {
        return;
      }
      view.dom.blur();
      view.focus();
      if (view.someProp("handleKeyDown", function(f) {
        return f(view, keyEvent(8, "Backspace"));
      })) {
        return;
      }
      var ref = view.state.selection;
      var $cursor = ref.$cursor;
      if ($cursor && $cursor.pos > 0) {
        view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
      }
    }, 50);
  }
};
for (var prop$1 in editHandlers) {
  handlers[prop$1] = editHandlers[prop$1];
}
function compareObjs(a, b) {
  if (a == b) {
    return true;
  }
  for (var p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (var p$1 in b) {
    if (!(p$1 in a)) {
      return false;
    }
  }
  return true;
}
var WidgetType = function WidgetType2(toDOM15, spec) {
  this.spec = spec || noSpec;
  this.side = this.spec.side || 0;
  this.toDOM = toDOM15;
};
WidgetType.prototype.map = function map7(mapping, span, offset2, oldOffset) {
  var ref = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
  var pos = ref.pos;
  var deleted = ref.deleted;
  return deleted ? null : new Decoration(pos - offset2, pos - offset2, this);
};
WidgetType.prototype.valid = function valid() {
  return true;
};
WidgetType.prototype.eq = function eq6(other) {
  return this == other || other instanceof WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
};
WidgetType.prototype.destroy = function destroy2(node4) {
  if (this.spec.destroy) {
    this.spec.destroy(node4);
  }
};
var InlineType = function InlineType2(attrs2, spec) {
  this.spec = spec || noSpec;
  this.attrs = attrs2;
};
InlineType.prototype.map = function map8(mapping, span, offset2, oldOffset) {
  var from4 = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset2;
  var to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset2;
  return from4 >= to ? null : new Decoration(from4, to, this);
};
InlineType.prototype.valid = function valid2(_, span) {
  return span.from < span.to;
};
InlineType.prototype.eq = function eq7(other) {
  return this == other || other instanceof InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
};
InlineType.is = function is(span) {
  return span.type instanceof InlineType;
};
var NodeType2 = function NodeType3(attrs2, spec) {
  this.spec = spec || noSpec;
  this.attrs = attrs2;
};
NodeType2.prototype.map = function map9(mapping, span, offset2, oldOffset) {
  var from4 = mapping.mapResult(span.from + oldOffset, 1);
  if (from4.deleted) {
    return null;
  }
  var to = mapping.mapResult(span.to + oldOffset, -1);
  if (to.deleted || to.pos <= from4.pos) {
    return null;
  }
  return new Decoration(from4.pos - offset2, to.pos - offset2, this);
};
NodeType2.prototype.valid = function valid3(node4, span) {
  var ref = node4.content.findIndex(span.from);
  var index2 = ref.index;
  var offset2 = ref.offset;
  var child3;
  return offset2 == span.from && !(child3 = node4.child(index2)).isText && offset2 + child3.nodeSize == span.to;
};
NodeType2.prototype.eq = function eq8(other) {
  return this == other || other instanceof NodeType2 && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
};
var Decoration = function Decoration2(from4, to, type) {
  this.from = from4;
  this.to = to;
  this.type = type;
};
var prototypeAccessors$1 = { spec: { configurable: true }, inline: { configurable: true } };
Decoration.prototype.copy = function copy3(from4, to) {
  return new Decoration(from4, to, this.type);
};
Decoration.prototype.eq = function eq9(other, offset2) {
  if (offset2 === void 0)
    offset2 = 0;
  return this.type.eq(other.type) && this.from + offset2 == other.from && this.to + offset2 == other.to;
};
Decoration.prototype.map = function map10(mapping, offset2, oldOffset) {
  return this.type.map(mapping, this, offset2, oldOffset);
};
Decoration.widget = function widget(pos, toDOM15, spec) {
  return new Decoration(pos, pos, new WidgetType(toDOM15, spec));
};
Decoration.inline = function inline(from4, to, attrs2, spec) {
  return new Decoration(from4, to, new InlineType(attrs2, spec));
};
Decoration.node = function node3(from4, to, attrs2, spec) {
  return new Decoration(from4, to, new NodeType2(attrs2, spec));
};
prototypeAccessors$1.spec.get = function() {
  return this.type.spec;
};
prototypeAccessors$1.inline.get = function() {
  return this.type instanceof InlineType;
};
Object.defineProperties(Decoration.prototype, prototypeAccessors$1);
var none = [], noSpec = {};
var DecorationSet = function DecorationSet2(local, children) {
  this.local = local && local.length ? local : none;
  this.children = children && children.length ? children : none;
};
DecorationSet.create = function create4(doc2, decorations) {
  return decorations.length ? buildTree(decorations, doc2, 0, noSpec) : empty$1;
};
DecorationSet.prototype.find = function find(start3, end2, predicate) {
  var result2 = [];
  this.findInner(start3 == null ? 0 : start3, end2 == null ? 1e9 : end2, result2, 0, predicate);
  return result2;
};
DecorationSet.prototype.findInner = function findInner(start3, end2, result2, offset2, predicate) {
  for (var i = 0; i < this.local.length; i++) {
    var span = this.local[i];
    if (span.from <= end2 && span.to >= start3 && (!predicate || predicate(span.spec))) {
      result2.push(span.copy(span.from + offset2, span.to + offset2));
    }
  }
  for (var i$1 = 0; i$1 < this.children.length; i$1 += 3) {
    if (this.children[i$1] < end2 && this.children[i$1 + 1] > start3) {
      var childOff = this.children[i$1] + 1;
      this.children[i$1 + 2].findInner(start3 - childOff, end2 - childOff, result2, offset2 + childOff, predicate);
    }
  }
};
DecorationSet.prototype.map = function map11(mapping, doc2, options) {
  if (this == empty$1 || mapping.maps.length == 0) {
    return this;
  }
  return this.mapInner(mapping, doc2, 0, 0, options || noSpec);
};
DecorationSet.prototype.mapInner = function mapInner(mapping, node4, offset2, oldOffset, options) {
  var newLocal;
  for (var i = 0; i < this.local.length; i++) {
    var mapped = this.local[i].map(mapping, offset2, oldOffset);
    if (mapped && mapped.type.valid(node4, mapped)) {
      (newLocal || (newLocal = [])).push(mapped);
    } else if (options.onRemove) {
      options.onRemove(this.local[i].spec);
    }
  }
  if (this.children.length) {
    return mapChildren(this.children, newLocal, mapping, node4, offset2, oldOffset, options);
  } else {
    return newLocal ? new DecorationSet(newLocal.sort(byPos)) : empty$1;
  }
};
DecorationSet.prototype.add = function add(doc2, decorations) {
  if (!decorations.length) {
    return this;
  }
  if (this == empty$1) {
    return DecorationSet.create(doc2, decorations);
  }
  return this.addInner(doc2, decorations, 0);
};
DecorationSet.prototype.addInner = function addInner(doc2, decorations, offset2) {
  var this$1$1 = this;
  var children, childIndex = 0;
  doc2.forEach(function(childNode, childOffset) {
    var baseOffset = childOffset + offset2, found2;
    if (!(found2 = takeSpansForNode(decorations, childNode, baseOffset))) {
      return;
    }
    if (!children) {
      children = this$1$1.children.slice();
    }
    while (childIndex < children.length && children[childIndex] < childOffset) {
      childIndex += 3;
    }
    if (children[childIndex] == childOffset) {
      children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found2, baseOffset + 1);
    } else {
      children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found2, childNode, baseOffset + 1, noSpec));
    }
    childIndex += 3;
  });
  var local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset2);
  for (var i = 0; i < local.length; i++) {
    if (!local[i].type.valid(doc2, local[i])) {
      local.splice(i--, 1);
    }
  }
  return new DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
};
DecorationSet.prototype.remove = function remove(decorations) {
  if (decorations.length == 0 || this == empty$1) {
    return this;
  }
  return this.removeInner(decorations, 0);
};
DecorationSet.prototype.removeInner = function removeInner(decorations, offset2) {
  var children = this.children, local = this.local;
  for (var i = 0; i < children.length; i += 3) {
    var found2 = void 0, from4 = children[i] + offset2, to = children[i + 1] + offset2;
    for (var j = 0, span = void 0; j < decorations.length; j++) {
      if (span = decorations[j]) {
        if (span.from > from4 && span.to < to) {
          decorations[j] = null;
          (found2 || (found2 = [])).push(span);
        }
      }
    }
    if (!found2) {
      continue;
    }
    if (children == this.children) {
      children = this.children.slice();
    }
    var removed = children[i + 2].removeInner(found2, from4 + 1);
    if (removed != empty$1) {
      children[i + 2] = removed;
    } else {
      children.splice(i, 3);
      i -= 3;
    }
  }
  if (local.length) {
    for (var i$1 = 0, span$1 = void 0; i$1 < decorations.length; i$1++) {
      if (span$1 = decorations[i$1]) {
        for (var j$1 = 0; j$1 < local.length; j$1++) {
          if (local[j$1].eq(span$1, offset2)) {
            if (local == this.local) {
              local = this.local.slice();
            }
            local.splice(j$1--, 1);
          }
        }
      }
    }
  }
  if (children == this.children && local == this.local) {
    return this;
  }
  return local.length || children.length ? new DecorationSet(local, children) : empty$1;
};
DecorationSet.prototype.forChild = function forChild(offset2, node4) {
  if (this == empty$1) {
    return this;
  }
  if (node4.isLeaf) {
    return DecorationSet.empty;
  }
  var child3, local;
  for (var i = 0; i < this.children.length; i += 3) {
    if (this.children[i] >= offset2) {
      if (this.children[i] == offset2) {
        child3 = this.children[i + 2];
      }
      break;
    }
  }
  var start3 = offset2 + 1, end2 = start3 + node4.content.size;
  for (var i$1 = 0; i$1 < this.local.length; i$1++) {
    var dec = this.local[i$1];
    if (dec.from < end2 && dec.to > start3 && dec.type instanceof InlineType) {
      var from4 = Math.max(start3, dec.from) - start3, to = Math.min(end2, dec.to) - start3;
      if (from4 < to) {
        (local || (local = [])).push(dec.copy(from4, to));
      }
    }
  }
  if (local) {
    var localSet = new DecorationSet(local.sort(byPos));
    return child3 ? new DecorationGroup([localSet, child3]) : localSet;
  }
  return child3 || empty$1;
};
DecorationSet.prototype.eq = function eq10(other) {
  if (this == other) {
    return true;
  }
  if (!(other instanceof DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length) {
    return false;
  }
  for (var i = 0; i < this.local.length; i++) {
    if (!this.local[i].eq(other.local[i])) {
      return false;
    }
  }
  for (var i$1 = 0; i$1 < this.children.length; i$1 += 3) {
    if (this.children[i$1] != other.children[i$1] || this.children[i$1 + 1] != other.children[i$1 + 1] || !this.children[i$1 + 2].eq(other.children[i$1 + 2])) {
      return false;
    }
  }
  return true;
};
DecorationSet.prototype.locals = function locals(node4) {
  return removeOverlap(this.localsInner(node4));
};
DecorationSet.prototype.localsInner = function localsInner(node4) {
  if (this == empty$1) {
    return none;
  }
  if (node4.inlineContent || !this.local.some(InlineType.is)) {
    return this.local;
  }
  var result2 = [];
  for (var i = 0; i < this.local.length; i++) {
    if (!(this.local[i].type instanceof InlineType)) {
      result2.push(this.local[i]);
    }
  }
  return result2;
};
var empty$1 = new DecorationSet();
DecorationSet.empty = empty$1;
DecorationSet.removeOverlap = removeOverlap;
var DecorationGroup = function DecorationGroup2(members) {
  this.members = members;
};
DecorationGroup.prototype.map = function map12(mapping, doc2) {
  var mappedDecos = this.members.map(function(member) {
    return member.map(mapping, doc2, noSpec);
  });
  return DecorationGroup.from(mappedDecos);
};
DecorationGroup.prototype.forChild = function forChild2(offset2, child3) {
  if (child3.isLeaf) {
    return DecorationSet.empty;
  }
  var found2 = [];
  for (var i = 0; i < this.members.length; i++) {
    var result2 = this.members[i].forChild(offset2, child3);
    if (result2 == empty$1) {
      continue;
    }
    if (result2 instanceof DecorationGroup) {
      found2 = found2.concat(result2.members);
    } else {
      found2.push(result2);
    }
  }
  return DecorationGroup.from(found2);
};
DecorationGroup.prototype.eq = function eq11(other) {
  if (!(other instanceof DecorationGroup) || other.members.length != this.members.length) {
    return false;
  }
  for (var i = 0; i < this.members.length; i++) {
    if (!this.members[i].eq(other.members[i])) {
      return false;
    }
  }
  return true;
};
DecorationGroup.prototype.locals = function locals2(node4) {
  var result2, sorted = true;
  for (var i = 0; i < this.members.length; i++) {
    var locals3 = this.members[i].localsInner(node4);
    if (!locals3.length) {
      continue;
    }
    if (!result2) {
      result2 = locals3;
    } else {
      if (sorted) {
        result2 = result2.slice();
        sorted = false;
      }
      for (var j = 0; j < locals3.length; j++) {
        result2.push(locals3[j]);
      }
    }
  }
  return result2 ? removeOverlap(sorted ? result2 : result2.sort(byPos)) : none;
};
DecorationGroup.from = function from2(members) {
  switch (members.length) {
    case 0:
      return empty$1;
    case 1:
      return members[0];
    default:
      return new DecorationGroup(members);
  }
};
function mapChildren(oldChildren, newLocal, mapping, node4, offset2, oldOffset, options) {
  var children = oldChildren.slice();
  var shift2 = function(oldStart, oldEnd, newStart, newEnd) {
    for (var i2 = 0; i2 < children.length; i2 += 3) {
      var end2 = children[i2 + 1], dSize = void 0;
      if (end2 == -1 || oldStart > end2 + oldOffset) {
        continue;
      }
      if (oldEnd >= children[i2] + oldOffset) {
        children[i2 + 1] = -1;
      } else if (newStart >= offset2 && (dSize = newEnd - newStart - (oldEnd - oldStart))) {
        children[i2] += dSize;
        children[i2 + 1] += dSize;
      }
    }
  };
  for (var i = 0; i < mapping.maps.length; i++) {
    mapping.maps[i].forEach(shift2);
  }
  var mustRebuild = false;
  for (var i$1 = 0; i$1 < children.length; i$1 += 3) {
    if (children[i$1 + 1] == -1) {
      var from4 = mapping.map(oldChildren[i$1] + oldOffset), fromLocal = from4 - offset2;
      if (fromLocal < 0 || fromLocal >= node4.content.size) {
        mustRebuild = true;
        continue;
      }
      var to = mapping.map(oldChildren[i$1 + 1] + oldOffset, -1), toLocal = to - offset2;
      var ref = node4.content.findIndex(fromLocal);
      var index2 = ref.index;
      var childOffset = ref.offset;
      var childNode = node4.maybeChild(index2);
      if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
        var mapped = children[i$1 + 2].mapInner(mapping, childNode, from4 + 1, oldChildren[i$1] + oldOffset + 1, options);
        if (mapped != empty$1) {
          children[i$1] = fromLocal;
          children[i$1 + 1] = toLocal;
          children[i$1 + 2] = mapped;
        } else {
          children[i$1 + 1] = -2;
          mustRebuild = true;
        }
      } else {
        mustRebuild = true;
      }
    }
  }
  if (mustRebuild) {
    var decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal || [], mapping, offset2, oldOffset, options);
    var built = buildTree(decorations, node4, 0, options);
    newLocal = built.local;
    for (var i$2 = 0; i$2 < children.length; i$2 += 3) {
      if (children[i$2 + 1] < 0) {
        children.splice(i$2, 3);
        i$2 -= 3;
      }
    }
    for (var i$3 = 0, j = 0; i$3 < built.children.length; i$3 += 3) {
      var from$1 = built.children[i$3];
      while (j < children.length && children[j] < from$1) {
        j += 3;
      }
      children.splice(j, 0, built.children[i$3], built.children[i$3 + 1], built.children[i$3 + 2]);
    }
  }
  return new DecorationSet(newLocal && newLocal.sort(byPos), children);
}
function moveSpans(spans, offset2) {
  if (!offset2 || !spans.length) {
    return spans;
  }
  var result2 = [];
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    result2.push(new Decoration(span.from + offset2, span.to + offset2, span.type));
  }
  return result2;
}
function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset2, oldOffset, options) {
  function gather(set3, oldOffset2) {
    for (var i2 = 0; i2 < set3.local.length; i2++) {
      var mapped = set3.local[i2].map(mapping, offset2, oldOffset2);
      if (mapped) {
        decorations.push(mapped);
      } else if (options.onRemove) {
        options.onRemove(set3.local[i2].spec);
      }
    }
    for (var i$1 = 0; i$1 < set3.children.length; i$1 += 3) {
      gather(set3.children[i$1 + 2], set3.children[i$1] + oldOffset2 + 1);
    }
  }
  for (var i = 0; i < children.length; i += 3) {
    if (children[i + 1] == -1) {
      gather(children[i + 2], oldChildren[i] + oldOffset + 1);
    }
  }
  return decorations;
}
function takeSpansForNode(spans, node4, offset2) {
  if (node4.isLeaf) {
    return null;
  }
  var end2 = offset2 + node4.nodeSize, found2 = null;
  for (var i = 0, span = void 0; i < spans.length; i++) {
    if ((span = spans[i]) && span.from > offset2 && span.to < end2) {
      (found2 || (found2 = [])).push(span);
      spans[i] = null;
    }
  }
  return found2;
}
function withoutNulls(array) {
  var result2 = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] != null) {
      result2.push(array[i]);
    }
  }
  return result2;
}
function buildTree(spans, node4, offset2, options) {
  var children = [], hasNulls = false;
  node4.forEach(function(childNode, localStart) {
    var found2 = takeSpansForNode(spans, childNode, localStart + offset2);
    if (found2) {
      hasNulls = true;
      var subtree = buildTree(found2, childNode, offset2 + localStart + 1, options);
      if (subtree != empty$1) {
        children.push(localStart, localStart + childNode.nodeSize, subtree);
      }
    }
  });
  var locals3 = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset2).sort(byPos);
  for (var i = 0; i < locals3.length; i++) {
    if (!locals3[i].type.valid(node4, locals3[i])) {
      if (options.onRemove) {
        options.onRemove(locals3[i].spec);
      }
      locals3.splice(i--, 1);
    }
  }
  return locals3.length || children.length ? new DecorationSet(locals3, children) : empty$1;
}
function byPos(a, b) {
  return a.from - b.from || a.to - b.to;
}
function removeOverlap(spans) {
  var working = spans;
  for (var i = 0; i < working.length - 1; i++) {
    var span = working[i];
    if (span.from != span.to) {
      for (var j = i + 1; j < working.length; j++) {
        var next = working[j];
        if (next.from == span.from) {
          if (next.to != span.to) {
            if (working == spans) {
              working = spans.slice();
            }
            working[j] = next.copy(next.from, span.to);
            insertAhead(working, j + 1, next.copy(span.to, next.to));
          }
          continue;
        } else {
          if (next.from < span.to) {
            if (working == spans) {
              working = spans.slice();
            }
            working[i] = span.copy(span.from, next.from);
            insertAhead(working, j, span.copy(next.from, span.to));
          }
          break;
        }
      }
    }
  }
  return working;
}
function insertAhead(array, i, deco) {
  while (i < array.length && byPos(deco, array[i]) > 0) {
    i++;
  }
  array.splice(i, 0, deco);
}
function viewDecorations(view) {
  var found2 = [];
  view.someProp("decorations", function(f) {
    var result2 = f(view.state);
    if (result2 && result2 != empty$1) {
      found2.push(result2);
    }
  });
  if (view.cursorWrapper) {
    found2.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco]));
  }
  return DecorationGroup.from(found2);
}
var EditorView = function EditorView2(place, props) {
  this._props = props;
  this.state = props.state;
  this.directPlugins = props.plugins || [];
  this.directPlugins.forEach(checkStateComponent);
  this.dispatch = this.dispatch.bind(this);
  this._root = null;
  this.focused = false;
  this.trackWrites = null;
  this.dom = place && place.mount || document.createElement("div");
  if (place) {
    if (place.appendChild) {
      place.appendChild(this.dom);
    } else if (place.apply) {
      place(this.dom);
    } else if (place.mount) {
      this.mounted = true;
    }
  }
  this.editable = getEditable(this);
  this.markCursor = null;
  this.cursorWrapper = null;
  updateCursorWrapper(this);
  this.nodeViews = buildNodeViews(this);
  this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
  this.lastSelectedViewDesc = null;
  this.dragging = null;
  initInput(this);
  this.prevDirectPlugins = [];
  this.pluginViews = [];
  this.updatePluginViews();
};
var prototypeAccessors$2 = { props: { configurable: true }, root: { configurable: true }, isDestroyed: { configurable: true } };
prototypeAccessors$2.props.get = function() {
  if (this._props.state != this.state) {
    var prev = this._props;
    this._props = {};
    for (var name in prev) {
      this._props[name] = prev[name];
    }
    this._props.state = this.state;
  }
  return this._props;
};
EditorView.prototype.update = function update(props) {
  if (props.handleDOMEvents != this._props.handleDOMEvents) {
    ensureListeners(this);
  }
  this._props = props;
  if (props.plugins) {
    props.plugins.forEach(checkStateComponent);
    this.directPlugins = props.plugins;
  }
  this.updateStateInner(props.state, true);
};
EditorView.prototype.setProps = function setProps(props) {
  var updated = {};
  for (var name in this._props) {
    updated[name] = this._props[name];
  }
  updated.state = this.state;
  for (var name$1 in props) {
    updated[name$1] = props[name$1];
  }
  this.update(updated);
};
EditorView.prototype.updateState = function updateState(state) {
  this.updateStateInner(state, this.state.plugins != state.plugins);
};
EditorView.prototype.updateStateInner = function updateStateInner(state, reconfigured) {
  var this$1$1 = this;
  var prev = this.state, redraw = false, updateSel = false;
  if (state.storedMarks && this.composing) {
    clearComposition(this);
    updateSel = true;
  }
  this.state = state;
  if (reconfigured) {
    var nodeViews = buildNodeViews(this);
    if (changedNodeViews(nodeViews, this.nodeViews)) {
      this.nodeViews = nodeViews;
      redraw = true;
    }
    ensureListeners(this);
  }
  this.editable = getEditable(this);
  updateCursorWrapper(this);
  var innerDeco = viewDecorations(this), outerDeco = computeDocDeco(this);
  var scroll = reconfigured ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
  var updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
  if (updateDoc || !state.selection.eq(prev.selection)) {
    updateSel = true;
  }
  var oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
  if (updateSel) {
    this.domObserver.stop();
    var forceSelUpdate = updateDoc && (result.ie || result.chrome) && !this.composing && !prev.selection.empty && !state.selection.empty && selectionContextChanged(prev.selection, state.selection);
    if (updateDoc) {
      var chromeKludge = result.chrome ? this.trackWrites = this.root.getSelection().focusNode : null;
      if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
        this.docView.updateOuterDeco([]);
        this.docView.destroy();
        this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
      }
      if (chromeKludge && !this.trackWrites) {
        forceSelUpdate = true;
      }
    }
    if (forceSelUpdate || !(this.mouseDown && this.domObserver.currentSelection.eq(this.root.getSelection()) && anchorInRightPlace(this))) {
      selectionToDOM(this, forceSelUpdate);
    } else {
      syncNodeSelection(this, state.selection);
      this.domObserver.setCurSelection();
    }
    this.domObserver.start();
  }
  this.updatePluginViews(prev);
  if (scroll == "reset") {
    this.dom.scrollTop = 0;
  } else if (scroll == "to selection") {
    var startDOM = this.root.getSelection().focusNode;
    if (this.someProp("handleScrollToSelection", function(f) {
      return f(this$1$1);
    }))
      ;
    else if (state.selection instanceof NodeSelection) {
      scrollRectIntoView(this, this.docView.domAfterPos(state.selection.from).getBoundingClientRect(), startDOM);
    } else {
      scrollRectIntoView(this, this.coordsAtPos(state.selection.head, 1), startDOM);
    }
  } else if (oldScrollPos) {
    resetScrollPos(oldScrollPos);
  }
};
EditorView.prototype.destroyPluginViews = function destroyPluginViews() {
  var view;
  while (view = this.pluginViews.pop()) {
    if (view.destroy) {
      view.destroy();
    }
  }
};
EditorView.prototype.updatePluginViews = function updatePluginViews(prevState) {
  if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
    this.prevDirectPlugins = this.directPlugins;
    this.destroyPluginViews();
    for (var i = 0; i < this.directPlugins.length; i++) {
      var plugin = this.directPlugins[i];
      if (plugin.spec.view) {
        this.pluginViews.push(plugin.spec.view(this));
      }
    }
    for (var i$1 = 0; i$1 < this.state.plugins.length; i$1++) {
      var plugin$1 = this.state.plugins[i$1];
      if (plugin$1.spec.view) {
        this.pluginViews.push(plugin$1.spec.view(this));
      }
    }
  } else {
    for (var i$2 = 0; i$2 < this.pluginViews.length; i$2++) {
      var pluginView = this.pluginViews[i$2];
      if (pluginView.update) {
        pluginView.update(this, prevState);
      }
    }
  }
};
EditorView.prototype.someProp = function someProp(propName, f) {
  var prop2 = this._props && this._props[propName], value;
  if (prop2 != null && (value = f ? f(prop2) : prop2)) {
    return value;
  }
  for (var i = 0; i < this.directPlugins.length; i++) {
    var prop$1 = this.directPlugins[i].props[propName];
    if (prop$1 != null && (value = f ? f(prop$1) : prop$1)) {
      return value;
    }
  }
  var plugins = this.state.plugins;
  if (plugins) {
    for (var i$1 = 0; i$1 < plugins.length; i$1++) {
      var prop$2 = plugins[i$1].props[propName];
      if (prop$2 != null && (value = f ? f(prop$2) : prop$2)) {
        return value;
      }
    }
  }
};
EditorView.prototype.hasFocus = function hasFocus() {
  return this.root.activeElement == this.dom;
};
EditorView.prototype.focus = function focus() {
  this.domObserver.stop();
  if (this.editable) {
    focusPreventScroll(this.dom);
  }
  selectionToDOM(this);
  this.domObserver.start();
};
prototypeAccessors$2.root.get = function() {
  var cached = this._root;
  if (cached == null) {
    for (var search = this.dom.parentNode; search; search = search.parentNode) {
      if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
        if (!search.getSelection) {
          Object.getPrototypeOf(search).getSelection = function() {
            return document.getSelection();
          };
        }
        return this._root = search;
      }
    }
  }
  return cached || document;
};
EditorView.prototype.posAtCoords = function posAtCoords$1(coords) {
  return posAtCoords(this, coords);
};
EditorView.prototype.coordsAtPos = function coordsAtPos$1(pos, side) {
  if (side === void 0)
    side = 1;
  return coordsAtPos(this, pos, side);
};
EditorView.prototype.domAtPos = function domAtPos(pos, side) {
  if (side === void 0)
    side = 0;
  return this.docView.domFromPos(pos, side);
};
EditorView.prototype.nodeDOM = function nodeDOM(pos) {
  var desc = this.docView.descAt(pos);
  return desc ? desc.nodeDOM : null;
};
EditorView.prototype.posAtDOM = function posAtDOM(node4, offset2, bias) {
  if (bias === void 0)
    bias = -1;
  var pos = this.docView.posFromDOM(node4, offset2, bias);
  if (pos == null) {
    throw new RangeError("DOM position not inside the editor");
  }
  return pos;
};
EditorView.prototype.endOfTextblock = function endOfTextblock$1(dir, state) {
  return endOfTextblock(this, state || this.state, dir);
};
EditorView.prototype.destroy = function destroy3() {
  if (!this.docView) {
    return;
  }
  destroyInput(this);
  this.destroyPluginViews();
  if (this.mounted) {
    this.docView.update(this.state.doc, [], viewDecorations(this), this);
    this.dom.textContent = "";
  } else if (this.dom.parentNode) {
    this.dom.parentNode.removeChild(this.dom);
  }
  this.docView.destroy();
  this.docView = null;
};
prototypeAccessors$2.isDestroyed.get = function() {
  return this.docView == null;
};
EditorView.prototype.dispatchEvent = function dispatchEvent$1(event) {
  return dispatchEvent(this, event);
};
EditorView.prototype.dispatch = function dispatch(tr) {
  var dispatchTransaction = this._props.dispatchTransaction;
  if (dispatchTransaction) {
    dispatchTransaction.call(this, tr);
  } else {
    this.updateState(this.state.apply(tr));
  }
};
Object.defineProperties(EditorView.prototype, prototypeAccessors$2);
function computeDocDeco(view) {
  var attrs2 = /* @__PURE__ */ Object.create(null);
  attrs2.class = "ProseMirror";
  attrs2.contenteditable = String(view.editable);
  attrs2.translate = "no";
  view.someProp("attributes", function(value) {
    if (typeof value == "function") {
      value = value(view.state);
    }
    if (value) {
      for (var attr in value) {
        if (attr == "class") {
          attrs2.class += " " + value[attr];
        }
        if (attr == "style") {
          attrs2.style = (attrs2.style ? attrs2.style + ";" : "") + value[attr];
        } else if (!attrs2[attr] && attr != "contenteditable" && attr != "nodeName") {
          attrs2[attr] = String(value[attr]);
        }
      }
    }
  });
  return [Decoration.node(0, view.state.doc.content.size, attrs2)];
}
function updateCursorWrapper(view) {
  if (view.markCursor) {
    var dom = document.createElement("img");
    dom.className = "ProseMirror-separator";
    dom.setAttribute("mark-placeholder", "true");
    view.cursorWrapper = { dom, deco: Decoration.widget(view.state.selection.head, dom, { raw: true, marks: view.markCursor }) };
  } else {
    view.cursorWrapper = null;
  }
}
function getEditable(view) {
  return !view.someProp("editable", function(value) {
    return value(view.state) === false;
  });
}
function selectionContextChanged(sel1, sel2) {
  var depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
  return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
}
function buildNodeViews(view) {
  var result2 = {};
  view.someProp("nodeViews", function(obj) {
    for (var prop2 in obj) {
      if (!Object.prototype.hasOwnProperty.call(result2, prop2)) {
        result2[prop2] = obj[prop2];
      }
    }
  });
  return result2;
}
function changedNodeViews(a, b) {
  var nA = 0, nB = 0;
  for (var prop2 in a) {
    if (a[prop2] != b[prop2]) {
      return true;
    }
    nA++;
  }
  for (var _ in b) {
    nB++;
  }
  return nA != nB;
}
function checkStateComponent(plugin) {
  if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction) {
    throw new RangeError("Plugins passed directly to the view must not have a state component");
  }
}
var base$1 = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  229: "q"
};
var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"',
  229: "Q"
};
var chrome = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
var safari = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor);
var gecko = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
var mac$2 = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
var brokenModifierNames = chrome && (mac$2 || +chrome[1] < 57) || gecko && mac$2;
for (var i$1 = 0; i$1 < 10; i$1++)
  base$1[48 + i$1] = base$1[96 + i$1] = String(i$1);
for (var i$1 = 1; i$1 <= 24; i$1++)
  base$1[i$1 + 111] = "F" + i$1;
for (var i$1 = 65; i$1 <= 90; i$1++) {
  base$1[i$1] = String.fromCharCode(i$1 + 32);
  shift[i$1] = String.fromCharCode(i$1);
}
for (var code$1 in base$1)
  if (!shift.hasOwnProperty(code$1))
    shift[code$1] = base$1[code$1];
function keyName(event) {
  var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) || (safari || ie) && event.shiftKey && event.key && event.key.length == 1;
  var name = !ignoreKey && event.key || (event.shiftKey ? shift : base$1)[event.keyCode] || event.key || "Unidentified";
  if (name == "Esc")
    name = "Escape";
  if (name == "Del")
    name = "Delete";
  if (name == "Left")
    name = "ArrowLeft";
  if (name == "Up")
    name = "ArrowUp";
  if (name == "Right")
    name = "ArrowRight";
  if (name == "Down")
    name = "ArrowDown";
  return name;
}
var mac$1 = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : false;
function normalizeKeyName$1(name) {
  var parts = name.split(/-(?!$)/), result2 = parts[parts.length - 1];
  if (result2 == "Space") {
    result2 = " ";
  }
  var alt, ctrl, shift2, meta;
  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) {
      meta = true;
    } else if (/^a(lt)?$/i.test(mod)) {
      alt = true;
    } else if (/^(c|ctrl|control)$/i.test(mod)) {
      ctrl = true;
    } else if (/^s(hift)?$/i.test(mod)) {
      shift2 = true;
    } else if (/^mod$/i.test(mod)) {
      if (mac$1) {
        meta = true;
      } else {
        ctrl = true;
      }
    } else {
      throw new Error("Unrecognized modifier name: " + mod);
    }
  }
  if (alt) {
    result2 = "Alt-" + result2;
  }
  if (ctrl) {
    result2 = "Ctrl-" + result2;
  }
  if (meta) {
    result2 = "Meta-" + result2;
  }
  if (shift2) {
    result2 = "Shift-" + result2;
  }
  return result2;
}
function normalize$1(map16) {
  var copy5 = /* @__PURE__ */ Object.create(null);
  for (var prop2 in map16) {
    copy5[normalizeKeyName$1(prop2)] = map16[prop2];
  }
  return copy5;
}
function modifiers(name, event, shift2) {
  if (event.altKey) {
    name = "Alt-" + name;
  }
  if (event.ctrlKey) {
    name = "Ctrl-" + name;
  }
  if (event.metaKey) {
    name = "Meta-" + name;
  }
  if (shift2 !== false && event.shiftKey) {
    name = "Shift-" + name;
  }
  return name;
}
function keymap(bindings) {
  return new Plugin({ props: { handleKeyDown: keydownHandler(bindings) } });
}
function keydownHandler(bindings) {
  var map16 = normalize$1(bindings);
  return function(view, event) {
    var name = keyName(event), isChar = name.length == 1 && name != " ", baseName;
    var direct = map16[modifiers(name, event, !isChar)];
    if (direct && direct(view.state, view.dispatch, view)) {
      return true;
    }
    if (isChar && (event.shiftKey || event.altKey || event.metaKey || name.charCodeAt(0) > 127) && (baseName = base$1[event.keyCode]) && baseName != name) {
      var fromCode = map16[modifiers(baseName, event, true)];
      if (fromCode && fromCode(view.state, view.dispatch, view)) {
        return true;
      }
    } else if (isChar && event.shiftKey) {
      var withShift = map16[modifiers(name, event, true)];
      if (withShift && withShift(view.state, view.dispatch, view)) {
        return true;
      }
    }
    return false;
  };
}
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
function isPlainObject(value) {
  if (getType(value) !== "Object") {
    return false;
  }
  return value.constructor === Object && Object.getPrototypeOf(value) === Object.prototype;
}
function mergeDeep(target2, source) {
  const output = __spreadValues({}, target2);
  if (isPlainObject(target2) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isPlainObject(source[key])) {
        if (!(key in target2)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target2[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}
function isFunction$1(value) {
  return typeof value === "function";
}
function callOrReturn(value, context = void 0, ...props) {
  if (isFunction$1(value)) {
    if (context) {
      return value.bind(context)(...props);
    }
    return value(...props);
  }
  return value;
}
function getExtensionField(extension, field, context) {
  if (extension.config[field] === void 0 && extension.parent) {
    return getExtensionField(extension.parent, field, context);
  }
  if (typeof extension.config[field] === "function") {
    const value = extension.config[field].bind(__spreadProps(__spreadValues({}, context), {
      parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
    }));
    return value;
  }
  return extension.config[field];
}
class Extension {
  constructor(config2 = {}) {
    this.type = "extension";
    this.name = "extension";
    this.parent = null;
    this.child = null;
    this.config = {
      name: this.name,
      defaultOptions: {}
    };
    this.config = __spreadValues(__spreadValues({}, this.config), config2);
    this.name = this.config.name;
    if (config2.defaultOptions) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
    }
    this.options = this.config.defaultOptions;
    if (this.config.addOptions) {
      this.options = callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      }));
    }
    this.storage = callOrReturn(getExtensionField(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(config2 = {}) {
    return new Extension(config2);
  }
  configure(options = {}) {
    const extension = this.extend();
    extension.options = mergeDeep(this.options, options);
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new Extension(extendedConfig);
    extension.parent = this;
    this.child = extension;
    extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
    if (extendedConfig.defaultOptions) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
    }
    extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
      name: extension.name
    }));
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
}
function getTextBetween(startNode, range2, options) {
  const { from: from4, to } = range2;
  const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
  let text6 = "";
  let separated = true;
  startNode.nodesBetween(from4, to, (node4, pos, parent, index2) => {
    var _a;
    const textSerializer = textSerializers === null || textSerializers === void 0 ? void 0 : textSerializers[node4.type.name];
    if (textSerializer) {
      if (node4.isBlock && !separated) {
        text6 += blockSeparator;
        separated = true;
      }
      text6 += textSerializer({
        node: node4,
        pos,
        parent,
        index: index2
      });
    } else if (node4.isText) {
      text6 += (_a = node4 === null || node4 === void 0 ? void 0 : node4.text) === null || _a === void 0 ? void 0 : _a.slice(Math.max(from4, pos) - pos, to - pos);
      separated = false;
    } else if (node4.isBlock && !separated) {
      text6 += blockSeparator;
      separated = true;
    }
  });
  return text6;
}
function getTextSeralizersFromSchema(schema2) {
  return Object.fromEntries(Object.entries(schema2.nodes).filter(([, node4]) => node4.spec.toText).map(([name, node4]) => [name, node4.spec.toText]));
}
const ClipboardTextSerializer = Extension.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor } = this;
            const { state, schema: schema2 } = editor;
            const { doc: doc2, selection } = state;
            const { ranges } = selection;
            const from4 = Math.min(...ranges.map((range3) => range3.$from.pos));
            const to = Math.max(...ranges.map((range3) => range3.$to.pos));
            const textSerializers = getTextSeralizersFromSchema(schema2);
            const range2 = { from: from4, to };
            return getTextBetween(doc2, range2, {
              textSerializers
            });
          }
        }
      })
    ];
  }
});
const blur = () => ({ editor, view }) => {
  requestAnimationFrame(() => {
    if (!editor.isDestroyed) {
      view.dom.blur();
    }
  });
  return true;
};
var blur$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur
});
const clearContent = (emitUpdate = false) => ({ commands }) => {
  return commands.setContent("", emitUpdate);
};
var clearContent$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  clearContent
});
const clearNodes = () => ({ state, tr, dispatch: dispatch2 }) => {
  const { selection } = tr;
  const { ranges } = selection;
  if (!dispatch2) {
    return true;
  }
  ranges.forEach(({ $from, $to }) => {
    state.doc.nodesBetween($from.pos, $to.pos, (node4, pos) => {
      if (node4.type.isText) {
        return;
      }
      const { doc: doc2, mapping } = tr;
      const $mappedFrom = doc2.resolve(mapping.map(pos));
      const $mappedTo = doc2.resolve(mapping.map(pos + node4.nodeSize));
      const nodeRange = $mappedFrom.blockRange($mappedTo);
      if (!nodeRange) {
        return;
      }
      const targetLiftDepth = liftTarget(nodeRange);
      if (node4.type.isTextblock) {
        const { defaultType } = $mappedFrom.parent.contentMatchAt($mappedFrom.index());
        tr.setNodeMarkup(nodeRange.start, defaultType);
      }
      if (targetLiftDepth || targetLiftDepth === 0) {
        tr.lift(nodeRange, targetLiftDepth);
      }
    });
  });
  return true;
};
var clearNodes$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  clearNodes
});
const command = (fn) => (props) => {
  return fn(props);
};
var command$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  command
});
const createParagraphNear = () => ({ state, dispatch: dispatch2 }) => {
  return createParagraphNear$2(state, dispatch2);
};
var createParagraphNear$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createParagraphNear
});
function getNodeType(nameOrType, schema2) {
  if (typeof nameOrType === "string") {
    if (!schema2.nodes[nameOrType]) {
      throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema2.nodes[nameOrType];
  }
  return nameOrType;
}
const deleteNode = (typeOrName) => ({ tr, state, dispatch: dispatch2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node4 = $pos.node(depth);
    if (node4.type === type) {
      if (dispatch2) {
        const from4 = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from4, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
var deleteNode$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  deleteNode
});
const deleteRange = (range2) => ({ tr, dispatch: dispatch2 }) => {
  const { from: from4, to } = range2;
  if (dispatch2) {
    tr.delete(from4, to);
  }
  return true;
};
var deleteRange$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  deleteRange
});
const deleteSelection = () => ({ state, dispatch: dispatch2 }) => {
  return deleteSelection$2(state, dispatch2);
};
var deleteSelection$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  deleteSelection
});
const enter2 = () => ({ commands }) => {
  return commands.keyboardShortcut("Enter");
};
var enter$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  enter: enter2
});
const exitCode = () => ({ state, dispatch: dispatch2 }) => {
  return exitCode$2(state, dispatch2);
};
var exitCode$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  exitCode
});
function getMarkType(nameOrType, schema2) {
  if (typeof nameOrType === "string") {
    if (!schema2.marks[nameOrType]) {
      throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema2.marks[nameOrType];
  }
  return nameOrType;
}
function isRegExp$1(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}
function objectIncludes(object1, object2, options = { strict: true }) {
  const keys2 = Object.keys(object2);
  if (!keys2.length) {
    return true;
  }
  return keys2.every((key) => {
    if (options.strict) {
      return object2[key] === object1[key];
    }
    if (isRegExp$1(object2[key])) {
      return object2[key].test(object1[key]);
    }
    return object2[key] === object1[key];
  });
}
function findMarkInSet(marks2, type, attributes = {}) {
  return marks2.find((item) => {
    return item.type === type && objectIncludes(item.attrs, attributes);
  });
}
function isMarkInSet(marks2, type, attributes = {}) {
  return !!findMarkInSet(marks2, type, attributes);
}
function getMarkRange($pos, type, attributes = {}) {
  if (!$pos || !type) {
    return;
  }
  const start3 = $pos.parent.childAfter($pos.parentOffset);
  if (!start3.node) {
    return;
  }
  const mark3 = findMarkInSet(start3.node.marks, type, attributes);
  if (!mark3) {
    return;
  }
  let startIndex2 = $pos.index();
  let startPos = $pos.start() + start3.offset;
  let endIndex2 = startIndex2 + 1;
  let endPos = startPos + start3.node.nodeSize;
  findMarkInSet(start3.node.marks, type, attributes);
  while (startIndex2 > 0 && mark3.isInSet($pos.parent.child(startIndex2 - 1).marks)) {
    startIndex2 -= 1;
    startPos -= $pos.parent.child(startIndex2).nodeSize;
  }
  while (endIndex2 < $pos.parent.childCount && isMarkInSet($pos.parent.child(endIndex2).marks, type, attributes)) {
    endPos += $pos.parent.child(endIndex2).nodeSize;
    endIndex2 += 1;
  }
  return {
    from: startPos,
    to: endPos
  };
}
const extendMarkRange = (typeOrName, attributes = {}) => ({ tr, state, dispatch: dispatch2 }) => {
  const type = getMarkType(typeOrName, state.schema);
  const { doc: doc2, selection } = tr;
  const { $from, from: from4, to } = selection;
  if (dispatch2) {
    const range2 = getMarkRange($from, type, attributes);
    if (range2 && range2.from <= from4 && range2.to >= to) {
      const newSelection = TextSelection.create(doc2, range2.from, range2.to);
      tr.setSelection(newSelection);
    }
  }
  return true;
};
var extendMarkRange$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  extendMarkRange
});
const first = (commands) => (props) => {
  const items = typeof commands === "function" ? commands(props) : commands;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i](props)) {
      return true;
    }
  }
  return false;
};
var first$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  first
});
function isClass(value) {
  var _a;
  if (((_a = value.constructor) === null || _a === void 0 ? void 0 : _a.toString().substring(0, 5)) !== "class") {
    return false;
  }
  return true;
}
function isObject$1(value) {
  return value && typeof value === "object" && !Array.isArray(value) && !isClass(value);
}
function isTextSelection(value) {
  return isObject$1(value) && value instanceof TextSelection;
}
function isiOS() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function minMax(value = 0, min2 = 0, max2 = 0) {
  return Math.min(Math.max(value, min2), max2);
}
function resolveFocusPosition(doc2, position = null) {
  if (!position) {
    return null;
  }
  if (position === "start" || position === true) {
    return Selection.atStart(doc2);
  }
  if (position === "end") {
    return Selection.atEnd(doc2);
  }
  if (position === "all") {
    return TextSelection.create(doc2, 0, doc2.content.size);
  }
  const minPos = Selection.atStart(doc2).from;
  const maxPos = Selection.atEnd(doc2).to;
  const resolvedFrom = minMax(position, minPos, maxPos);
  const resolvedEnd = minMax(position, minPos, maxPos);
  return TextSelection.create(doc2, resolvedFrom, resolvedEnd);
}
const focus2 = (position = null, options) => ({ editor, view, tr, dispatch: dispatch2 }) => {
  options = __spreadValues({
    scrollIntoView: true
  }, options);
  const delayedFocus = () => {
    if (isiOS()) {
      view.dom.focus();
    }
    requestAnimationFrame(() => {
      if (!editor.isDestroyed) {
        view.focus();
        if (options === null || options === void 0 ? void 0 : options.scrollIntoView) {
          editor.commands.scrollIntoView();
        }
      }
    });
  };
  if (view.hasFocus() && position === null || position === false) {
    return true;
  }
  if (dispatch2 && position === null && !isTextSelection(editor.state.selection)) {
    delayedFocus();
    return true;
  }
  const selection = resolveFocusPosition(editor.state.doc, position) || editor.state.selection;
  const isSameSelection = editor.state.selection.eq(selection);
  if (dispatch2) {
    if (!isSameSelection) {
      tr.setSelection(selection);
    }
    if (isSameSelection && tr.storedMarks) {
      tr.setStoredMarks(tr.storedMarks);
    }
    delayedFocus();
  }
  return true;
};
var focus$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  focus: focus2
});
const forEach4 = (items, fn) => (props) => {
  return items.every((item, index2) => fn(item, __spreadProps(__spreadValues({}, props), { index: index2 })));
};
var forEach$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: forEach4
});
const insertContent = (value, options) => ({ tr, commands }) => {
  return commands.insertContentAt({ from: tr.selection.from, to: tr.selection.to }, value, options);
};
var insertContent$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  insertContent
});
function elementFromString(value) {
  const wrappedValue = `<body>${value}</body>`;
  return new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
}
function createNodeFromContent(content2, schema2, options) {
  options = __spreadValues({
    slice: true,
    parseOptions: {}
  }, options);
  if (typeof content2 === "object" && content2 !== null) {
    try {
      if (Array.isArray(content2)) {
        return Fragment.fromArray(content2.map((item) => schema2.nodeFromJSON(item)));
      }
      return schema2.nodeFromJSON(content2);
    } catch (error2) {
      console.warn("[tiptap warn]: Invalid content.", "Passed value:", content2, "Error:", error2);
      return createNodeFromContent("", schema2, options);
    }
  }
  if (typeof content2 === "string") {
    const parser = DOMParser.fromSchema(schema2);
    return options.slice ? parser.parseSlice(elementFromString(content2), options.parseOptions).content : parser.parse(elementFromString(content2), options.parseOptions);
  }
  return createNodeFromContent("", schema2, options);
}
function selectionToInsertionEnd(tr, startLen, bias) {
  const last = tr.steps.length - 1;
  if (last < startLen) {
    return;
  }
  const step2 = tr.steps[last];
  if (!(step2 instanceof ReplaceStep || step2 instanceof ReplaceAroundStep)) {
    return;
  }
  const map16 = tr.mapping.maps[last];
  let end2 = 0;
  map16.forEach((_from, _to, _newFrom, newTo) => {
    if (end2 === 0) {
      end2 = newTo;
    }
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end2), bias));
}
const isFragment = (nodeOrFragment) => {
  return nodeOrFragment.toString().startsWith("<");
};
const insertContentAt = (position, value, options) => ({ tr, dispatch: dispatch2, editor }) => {
  if (dispatch2) {
    options = __spreadValues({
      parseOptions: {},
      updateSelection: true
    }, options);
    const content2 = createNodeFromContent(value, editor.schema, {
      parseOptions: __spreadValues({
        preserveWhitespace: "full"
      }, options.parseOptions)
    });
    if (content2.toString() === "<>") {
      return true;
    }
    let { from: from4, to } = typeof position === "number" ? { from: position, to: position } : position;
    let isOnlyBlockContent = true;
    const nodes = isFragment(content2) ? content2 : [content2];
    nodes.forEach((node4) => {
      node4.check();
      isOnlyBlockContent = isOnlyBlockContent ? node4.isBlock : false;
    });
    if (from4 === to && isOnlyBlockContent) {
      const { parent } = tr.doc.resolve(from4);
      const isEmptyTextBlock = parent.isTextblock && !parent.type.spec.code && !parent.childCount;
      if (isEmptyTextBlock) {
        from4 -= 1;
        to += 1;
      }
    }
    tr.replaceWith(from4, to, content2);
    if (options.updateSelection) {
      selectionToInsertionEnd(tr, tr.steps.length - 1, -1);
    }
  }
  return true;
};
var insertContentAt$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  insertContentAt
});
const joinBackward = () => ({ state, dispatch: dispatch2 }) => {
  return joinBackward$2(state, dispatch2);
};
var joinBackward$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  joinBackward
});
const joinForward = () => ({ state, dispatch: dispatch2 }) => {
  return joinForward$2(state, dispatch2);
};
var joinForward$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  joinForward
});
const mac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
function normalizeKeyName(name) {
  const parts = name.split(/-(?!$)/);
  let result2 = parts[parts.length - 1];
  if (result2 === "Space") {
    result2 = " ";
  }
  let alt;
  let ctrl;
  let shift2;
  let meta;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) {
      meta = true;
    } else if (/^a(lt)?$/i.test(mod)) {
      alt = true;
    } else if (/^(c|ctrl|control)$/i.test(mod)) {
      ctrl = true;
    } else if (/^s(hift)?$/i.test(mod)) {
      shift2 = true;
    } else if (/^mod$/i.test(mod)) {
      if (mac) {
        meta = true;
      } else {
        ctrl = true;
      }
    } else {
      throw new Error(`Unrecognized modifier name: ${mod}`);
    }
  }
  if (alt) {
    result2 = `Alt-${result2}`;
  }
  if (ctrl) {
    result2 = `Ctrl-${result2}`;
  }
  if (meta) {
    result2 = `Meta-${result2}`;
  }
  if (shift2) {
    result2 = `Shift-${result2}`;
  }
  return result2;
}
const keyboardShortcut = (name) => ({ editor, view, tr, dispatch: dispatch2 }) => {
  const keys2 = normalizeKeyName(name).split(/-(?!$)/);
  const key = keys2.find((item) => !["Alt", "Ctrl", "Meta", "Shift"].includes(item));
  const event = new KeyboardEvent("keydown", {
    key: key === "Space" ? " " : key,
    altKey: keys2.includes("Alt"),
    ctrlKey: keys2.includes("Ctrl"),
    metaKey: keys2.includes("Meta"),
    shiftKey: keys2.includes("Shift"),
    bubbles: true,
    cancelable: true
  });
  const capturedTransaction = editor.captureTransaction(() => {
    view.someProp("handleKeyDown", (f) => f(view, event));
  });
  capturedTransaction === null || capturedTransaction === void 0 ? void 0 : capturedTransaction.steps.forEach((step2) => {
    const newStep = step2.map(tr.mapping);
    if (newStep && dispatch2) {
      tr.maybeStep(newStep);
    }
  });
  return true;
};
var keyboardShortcut$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  keyboardShortcut
});
function isNodeActive(state, typeOrName, attributes = {}) {
  const { from: from4, to, empty: empty2 } = state.selection;
  const type = typeOrName ? getNodeType(typeOrName, state.schema) : null;
  const nodeRanges = [];
  state.doc.nodesBetween(from4, to, (node4, pos) => {
    if (node4.isText) {
      return;
    }
    const relativeFrom = Math.max(from4, pos);
    const relativeTo = Math.min(to, pos + node4.nodeSize);
    nodeRanges.push({
      node: node4,
      from: relativeFrom,
      to: relativeTo
    });
  });
  const selectionRange = to - from4;
  const matchedNodeRanges = nodeRanges.filter((nodeRange) => {
    if (!type) {
      return true;
    }
    return type.name === nodeRange.node.type.name;
  }).filter((nodeRange) => objectIncludes(nodeRange.node.attrs, attributes, { strict: false }));
  if (empty2) {
    return !!matchedNodeRanges.length;
  }
  const range2 = matchedNodeRanges.reduce((sum2, nodeRange) => sum2 + nodeRange.to - nodeRange.from, 0);
  return range2 >= selectionRange;
}
const lift = (typeOrName, attributes = {}) => ({ state, dispatch: dispatch2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (!isActive2) {
    return false;
  }
  return lift$2(state, dispatch2);
};
var lift$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  lift
});
const liftEmptyBlock = () => ({ state, dispatch: dispatch2 }) => {
  return liftEmptyBlock$2(state, dispatch2);
};
var liftEmptyBlock$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  liftEmptyBlock
});
const liftListItem = (typeOrName) => ({ state, dispatch: dispatch2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  return liftListItem$2(type)(state, dispatch2);
};
var liftListItem$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  liftListItem
});
const newlineInCode = () => ({ state, dispatch: dispatch2 }) => {
  return newlineInCode$2(state, dispatch2);
};
var newlineInCode$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  newlineInCode
});
function getSchemaTypeNameByName(name, schema2) {
  if (schema2.nodes[name]) {
    return "node";
  }
  if (schema2.marks[name]) {
    return "mark";
  }
  return null;
}
function deleteProps(obj, propOrProps) {
  const props = typeof propOrProps === "string" ? [propOrProps] : propOrProps;
  return Object.keys(obj).reduce((newObj, prop2) => {
    if (!props.includes(prop2)) {
      newObj[prop2] = obj[prop2];
    }
    return newObj;
  }, {});
}
const resetAttributes = (typeOrName, attributes) => ({ tr, state, dispatch: dispatch2 }) => {
  let nodeType2 = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType2 = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  if (dispatch2) {
    tr.selection.ranges.forEach((range2) => {
      state.doc.nodesBetween(range2.$from.pos, range2.$to.pos, (node4, pos) => {
        if (nodeType2 && nodeType2 === node4.type) {
          tr.setNodeMarkup(pos, void 0, deleteProps(node4.attrs, attributes));
        }
        if (markType && node4.marks.length) {
          node4.marks.forEach((mark3) => {
            if (markType === mark3.type) {
              tr.addMark(pos, pos + node4.nodeSize, markType.create(deleteProps(mark3.attrs, attributes)));
            }
          });
        }
      });
    });
  }
  return true;
};
var resetAttributes$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  resetAttributes
});
const scrollIntoView = () => ({ tr, dispatch: dispatch2 }) => {
  if (dispatch2) {
    tr.scrollIntoView();
  }
  return true;
};
var scrollIntoView$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  scrollIntoView
});
const selectAll = () => ({ tr, commands }) => {
  return commands.setTextSelection({
    from: 0,
    to: tr.doc.content.size
  });
};
var selectAll$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  selectAll
});
const selectNodeBackward = () => ({ state, dispatch: dispatch2 }) => {
  return selectNodeBackward$2(state, dispatch2);
};
var selectNodeBackward$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  selectNodeBackward
});
const selectNodeForward = () => ({ state, dispatch: dispatch2 }) => {
  return selectNodeForward$2(state, dispatch2);
};
var selectNodeForward$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  selectNodeForward
});
const selectParentNode = () => ({ state, dispatch: dispatch2 }) => {
  return selectParentNode$2(state, dispatch2);
};
var selectParentNode$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  selectParentNode
});
function createDocument(content2, schema2, parseOptions = {}) {
  return createNodeFromContent(content2, schema2, { slice: false, parseOptions });
}
const setContent = (content2, emitUpdate = false, parseOptions = {}) => ({ tr, editor, dispatch: dispatch2 }) => {
  const { doc: doc2 } = tr;
  const document2 = createDocument(content2, editor.schema, parseOptions);
  const selection = TextSelection.create(doc2, 0, doc2.content.size);
  if (dispatch2) {
    tr.setSelection(selection).replaceSelectionWith(document2, false).setMeta("preventUpdate", !emitUpdate);
  }
  return true;
};
var setContent$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setContent
});
function getMarkAttributes(state, typeOrName) {
  const type = getMarkType(typeOrName, state.schema);
  const { from: from4, to, empty: empty2 } = state.selection;
  const marks2 = [];
  if (empty2) {
    if (state.storedMarks) {
      marks2.push(...state.storedMarks);
    }
    marks2.push(...state.selection.$head.marks());
  } else {
    state.doc.nodesBetween(from4, to, (node4) => {
      marks2.push(...node4.marks);
    });
  }
  const mark3 = marks2.find((markItem) => markItem.type.name === type.name);
  if (!mark3) {
    return {};
  }
  return __spreadValues({}, mark3.attrs);
}
const setMark = (typeOrName, attributes = {}) => ({ tr, state, dispatch: dispatch2 }) => {
  const { selection } = tr;
  const { empty: empty2, ranges } = selection;
  const type = getMarkType(typeOrName, state.schema);
  if (dispatch2) {
    if (empty2) {
      const oldAttributes = getMarkAttributes(state, type);
      tr.addStoredMark(type.create(__spreadValues(__spreadValues({}, oldAttributes), attributes)));
    } else {
      ranges.forEach((range2) => {
        const from4 = range2.$from.pos;
        const to = range2.$to.pos;
        state.doc.nodesBetween(from4, to, (node4, pos) => {
          const trimmedFrom = Math.max(pos, from4);
          const trimmedTo = Math.min(pos + node4.nodeSize, to);
          const someHasMark = node4.marks.find((mark3) => mark3.type === type);
          if (someHasMark) {
            node4.marks.forEach((mark3) => {
              if (type === mark3.type) {
                tr.addMark(trimmedFrom, trimmedTo, type.create(__spreadValues(__spreadValues({}, mark3.attrs), attributes)));
              }
            });
          } else {
            tr.addMark(trimmedFrom, trimmedTo, type.create(attributes));
          }
        });
      });
    }
  }
  return true;
};
var setMark$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setMark
});
const setMeta = (key, value) => ({ tr }) => {
  tr.setMeta(key, value);
  return true;
};
var setMeta$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setMeta
});
const setNode = (typeOrName, attributes = {}) => ({ state, dispatch: dispatch2, chain }) => {
  const type = getNodeType(typeOrName, state.schema);
  if (!type.isTextblock) {
    console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
    return false;
  }
  return chain().command(({ commands }) => {
    const canSetBlock = setBlockType(type, attributes)(state);
    if (canSetBlock) {
      return true;
    }
    return commands.clearNodes();
  }).command(({ state: updatedState }) => {
    return setBlockType(type, attributes)(updatedState, dispatch2);
  }).run();
};
var setNode$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setNode
});
const setNodeSelection = (position) => ({ tr, dispatch: dispatch2 }) => {
  if (dispatch2) {
    const { doc: doc2 } = tr;
    const minPos = Selection.atStart(doc2).from;
    const maxPos = Selection.atEnd(doc2).to;
    const resolvedPos = minMax(position, minPos, maxPos);
    const selection = NodeSelection.create(doc2, resolvedPos);
    tr.setSelection(selection);
  }
  return true;
};
var setNodeSelection$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setNodeSelection
});
const setTextSelection = (position) => ({ tr, dispatch: dispatch2 }) => {
  if (dispatch2) {
    const { doc: doc2 } = tr;
    const { from: from4, to } = typeof position === "number" ? { from: position, to: position } : position;
    const minPos = Selection.atStart(doc2).from;
    const maxPos = Selection.atEnd(doc2).to;
    const resolvedFrom = minMax(from4, minPos, maxPos);
    const resolvedEnd = minMax(to, minPos, maxPos);
    const selection = TextSelection.create(doc2, resolvedFrom, resolvedEnd);
    tr.setSelection(selection);
  }
  return true;
};
var setTextSelection$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setTextSelection
});
const sinkListItem = (typeOrName) => ({ state, dispatch: dispatch2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  return sinkListItem$2(type)(state, dispatch2);
};
var sinkListItem$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  sinkListItem
});
function getSplittedAttributes(extensionAttributes, typeName, attributes) {
  return Object.fromEntries(Object.entries(attributes).filter(([name]) => {
    const extensionAttribute = extensionAttributes.find((item) => {
      return item.type === typeName && item.name === name;
    });
    if (!extensionAttribute) {
      return false;
    }
    return extensionAttribute.attribute.keepOnSplit;
  }));
}
function defaultBlockAt$1(match2) {
  for (let i = 0; i < match2.edgeCount; i += 1) {
    const { type } = match2.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
function ensureMarks(state, splittableMarks) {
  const marks2 = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
  if (marks2) {
    const filteredMarks = marks2.filter((mark3) => splittableMarks === null || splittableMarks === void 0 ? void 0 : splittableMarks.includes(mark3.type.name));
    state.tr.ensureMarks(filteredMarks);
  }
}
const splitBlock = ({ keepMarks = true } = {}) => ({ tr, state, dispatch: dispatch2, editor }) => {
  const { selection, doc: doc2 } = tr;
  const { $from, $to } = selection;
  const extensionAttributes = editor.extensionManager.attributes;
  const newAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
  if (selection instanceof NodeSelection && selection.node.isBlock) {
    if (!$from.parentOffset || !canSplit(doc2, $from.pos)) {
      return false;
    }
    if (dispatch2) {
      if (keepMarks) {
        ensureMarks(state, editor.extensionManager.splittableMarks);
      }
      tr.split($from.pos).scrollIntoView();
    }
    return true;
  }
  if (!$from.parent.isBlock) {
    return false;
  }
  if (dispatch2) {
    const atEnd2 = $to.parentOffset === $to.parent.content.size;
    if (selection instanceof TextSelection) {
      tr.deleteSelection();
    }
    const deflt = $from.depth === 0 ? void 0 : defaultBlockAt$1($from.node(-1).contentMatchAt($from.indexAfter(-1)));
    let types = atEnd2 && deflt ? [{
      type: deflt,
      attrs: newAttributes
    }] : void 0;
    let can = canSplit(tr.doc, tr.mapping.map($from.pos), 1, types);
    if (!types && !can && canSplit(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [{ type: deflt }] : void 0)) {
      can = true;
      types = deflt ? [{
        type: deflt,
        attrs: newAttributes
      }] : void 0;
    }
    if (can) {
      tr.split(tr.mapping.map($from.pos), 1, types);
      if (deflt && !atEnd2 && !$from.parentOffset && $from.parent.type !== deflt) {
        const first2 = tr.mapping.map($from.before());
        const $first = tr.doc.resolve(first2);
        if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
          tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
        }
      }
    }
    if (keepMarks) {
      ensureMarks(state, editor.extensionManager.splittableMarks);
    }
    tr.scrollIntoView();
  }
  return true;
};
var splitBlock$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  splitBlock
});
const splitListItem = (typeOrName) => ({ tr, state, dispatch: dispatch2, editor }) => {
  var _a;
  const type = getNodeType(typeOrName, state.schema);
  const { $from, $to } = state.selection;
  const node4 = state.selection.node;
  if (node4 && node4.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
    return false;
  }
  const grandParent = $from.node(-1);
  if (grandParent.type !== type) {
    return false;
  }
  const extensionAttributes = editor.extensionManager.attributes;
  if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
    if ($from.depth === 2 || $from.node(-3).type !== type || $from.index(-2) !== $from.node(-2).childCount - 1) {
      return false;
    }
    if (dispatch2) {
      let wrap = Fragment.empty;
      const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
      for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1) {
        wrap = Fragment.from($from.node(d).copy(wrap));
      }
      const depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
      const newNextTypeAttributes2 = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
      const nextType2 = ((_a = type.contentMatch.defaultType) === null || _a === void 0 ? void 0 : _a.createAndFill(newNextTypeAttributes2)) || void 0;
      wrap = wrap.append(Fragment.from(type.createAndFill(null, nextType2) || void 0));
      const start3 = $from.before($from.depth - (depthBefore - 1));
      tr.replace(start3, $from.after(-depthAfter), new Slice(wrap, 4 - depthBefore, 0));
      let sel = -1;
      tr.doc.nodesBetween(start3, tr.doc.content.size, (n, pos) => {
        if (sel > -1) {
          return false;
        }
        if (n.isTextblock && n.content.size === 0) {
          sel = pos + 1;
        }
      });
      if (sel > -1) {
        tr.setSelection(TextSelection.near(tr.doc.resolve(sel)));
      }
      tr.scrollIntoView();
    }
    return true;
  }
  const nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
  const newTypeAttributes = getSplittedAttributes(extensionAttributes, grandParent.type.name, grandParent.attrs);
  const newNextTypeAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
  tr.delete($from.pos, $to.pos);
  const types = nextType ? [{ type, attrs: newTypeAttributes }, { type: nextType, attrs: newNextTypeAttributes }] : [{ type, attrs: newTypeAttributes }];
  if (!canSplit(tr.doc, $from.pos, 2)) {
    return false;
  }
  if (dispatch2) {
    tr.split($from.pos, 2, types).scrollIntoView();
  }
  return true;
};
var splitListItem$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  splitListItem
});
function findParentNodeClosestToPos($pos, predicate) {
  for (let i = $pos.depth; i > 0; i -= 1) {
    const node4 = $pos.node(i);
    if (predicate(node4)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node: node4
      };
    }
  }
}
function findParentNode(predicate) {
  return (selection) => findParentNodeClosestToPos(selection.$from, predicate);
}
function splitExtensions(extensions2) {
  const baseExtensions = extensions2.filter((extension) => extension.type === "extension");
  const nodeExtensions = extensions2.filter((extension) => extension.type === "node");
  const markExtensions = extensions2.filter((extension) => extension.type === "mark");
  return {
    baseExtensions,
    nodeExtensions,
    markExtensions
  };
}
function isList(name, extensions2) {
  const { nodeExtensions } = splitExtensions(extensions2);
  const extension = nodeExtensions.find((item) => item.name === name);
  if (!extension) {
    return false;
  }
  const context = {
    name: extension.name,
    options: extension.options,
    storage: extension.storage
  };
  const group = callOrReturn(getExtensionField(extension, "group", context));
  if (typeof group !== "string") {
    return false;
  }
  return group.split(" ").includes("list");
}
const joinListBackwards = (tr, listType) => {
  const list3 = findParentNode((node4) => node4.type === listType)(tr.selection);
  if (!list3) {
    return true;
  }
  const before2 = tr.doc.resolve(Math.max(0, list3.pos - 1)).before(list3.depth);
  if (before2 === void 0) {
    return true;
  }
  const nodeBefore = tr.doc.nodeAt(before2);
  const canJoinBackwards = list3.node.type === (nodeBefore === null || nodeBefore === void 0 ? void 0 : nodeBefore.type) && canJoin(tr.doc, list3.pos);
  if (!canJoinBackwards) {
    return true;
  }
  tr.join(list3.pos);
  return true;
};
const joinListForwards = (tr, listType) => {
  const list3 = findParentNode((node4) => node4.type === listType)(tr.selection);
  if (!list3) {
    return true;
  }
  const after2 = tr.doc.resolve(list3.start).after(list3.depth);
  if (after2 === void 0) {
    return true;
  }
  const nodeAfter = tr.doc.nodeAt(after2);
  const canJoinForwards = list3.node.type === (nodeAfter === null || nodeAfter === void 0 ? void 0 : nodeAfter.type) && canJoin(tr.doc, after2);
  if (!canJoinForwards) {
    return true;
  }
  tr.join(after2);
  return true;
};
const toggleList = (listTypeOrName, itemTypeOrName) => ({ editor, tr, state, dispatch: dispatch2, chain, commands, can }) => {
  const { extensions: extensions2 } = editor.extensionManager;
  const listType = getNodeType(listTypeOrName, state.schema);
  const itemType = getNodeType(itemTypeOrName, state.schema);
  const { selection } = state;
  const { $from, $to } = selection;
  const range2 = $from.blockRange($to);
  if (!range2) {
    return false;
  }
  const parentList = findParentNode((node4) => isList(node4.type.name, extensions2))(selection);
  if (range2.depth >= 1 && parentList && range2.depth - parentList.depth <= 1) {
    if (parentList.node.type === listType) {
      return commands.liftListItem(itemType);
    }
    if (isList(parentList.node.type.name, extensions2) && listType.validContent(parentList.node.content) && dispatch2) {
      return chain().command(() => {
        tr.setNodeMarkup(parentList.pos, listType);
        return true;
      }).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
    }
  }
  return chain().command(() => {
    const canWrapInList = can().wrapInList(listType);
    if (canWrapInList) {
      return true;
    }
    return commands.clearNodes();
  }).wrapInList(listType).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
};
var toggleList$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toggleList
});
function isMarkActive(state, typeOrName, attributes = {}) {
  const { empty: empty2, ranges } = state.selection;
  const type = typeOrName ? getMarkType(typeOrName, state.schema) : null;
  if (empty2) {
    return !!(state.storedMarks || state.selection.$from.marks()).filter((mark3) => {
      if (!type) {
        return true;
      }
      return type.name === mark3.type.name;
    }).find((mark3) => objectIncludes(mark3.attrs, attributes, { strict: false }));
  }
  let selectionRange = 0;
  const markRanges = [];
  ranges.forEach(({ $from, $to }) => {
    const from4 = $from.pos;
    const to = $to.pos;
    state.doc.nodesBetween(from4, to, (node4, pos) => {
      if (!node4.isText && !node4.marks.length) {
        return;
      }
      const relativeFrom = Math.max(from4, pos);
      const relativeTo = Math.min(to, pos + node4.nodeSize);
      const range3 = relativeTo - relativeFrom;
      selectionRange += range3;
      markRanges.push(...node4.marks.map((mark3) => ({
        mark: mark3,
        from: relativeFrom,
        to: relativeTo
      })));
    });
  });
  if (selectionRange === 0) {
    return false;
  }
  const matchedRange = markRanges.filter((markRange) => {
    if (!type) {
      return true;
    }
    return type.name === markRange.mark.type.name;
  }).filter((markRange) => objectIncludes(markRange.mark.attrs, attributes, { strict: false })).reduce((sum2, markRange) => sum2 + markRange.to - markRange.from, 0);
  const excludedRange = markRanges.filter((markRange) => {
    if (!type) {
      return true;
    }
    return markRange.mark.type !== type && markRange.mark.type.excludes(type);
  }).reduce((sum2, markRange) => sum2 + markRange.to - markRange.from, 0);
  const range2 = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
  return range2 >= selectionRange;
}
const toggleMark = (typeOrName, attributes = {}, options = {}) => ({ state, commands }) => {
  const { extendEmptyMarkRange = false } = options;
  const type = getMarkType(typeOrName, state.schema);
  const isActive2 = isMarkActive(state, type, attributes);
  if (isActive2) {
    return commands.unsetMark(type, { extendEmptyMarkRange });
  }
  return commands.setMark(type, attributes);
};
var toggleMark$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toggleMark
});
const toggleNode = (typeOrName, toggleTypeOrName, attributes = {}) => ({ state, commands }) => {
  const type = getNodeType(typeOrName, state.schema);
  const toggleType = getNodeType(toggleTypeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (isActive2) {
    return commands.setNode(toggleType);
  }
  return commands.setNode(type, attributes);
};
var toggleNode$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toggleNode
});
const toggleWrap = (typeOrName, attributes = {}) => ({ state, commands }) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (isActive2) {
    return commands.lift(type);
  }
  return commands.wrapIn(type, attributes);
};
var toggleWrap$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toggleWrap
});
const undoInputRule = () => ({ state, dispatch: dispatch2 }) => {
  const plugins = state.plugins;
  for (let i = 0; i < plugins.length; i += 1) {
    const plugin = plugins[i];
    let undoable;
    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
      if (dispatch2) {
        const tr = state.tr;
        const toUndo = undoable.transform;
        for (let j = toUndo.steps.length - 1; j >= 0; j -= 1) {
          tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
        }
        if (undoable.text) {
          const marks2 = tr.doc.resolve(undoable.from).marks();
          tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks2));
        } else {
          tr.delete(undoable.from, undoable.to);
        }
      }
      return true;
    }
  }
  return false;
};
var undoInputRule$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  undoInputRule
});
const unsetAllMarks = () => ({ tr, dispatch: dispatch2 }) => {
  const { selection } = tr;
  const { empty: empty2, ranges } = selection;
  if (empty2) {
    return true;
  }
  if (dispatch2) {
    ranges.forEach((range2) => {
      tr.removeMark(range2.$from.pos, range2.$to.pos);
    });
  }
  return true;
};
var unsetAllMarks$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unsetAllMarks
});
const unsetMark = (typeOrName, options = {}) => ({ tr, state, dispatch: dispatch2 }) => {
  var _a;
  const { extendEmptyMarkRange = false } = options;
  const { selection } = tr;
  const type = getMarkType(typeOrName, state.schema);
  const { $from, empty: empty2, ranges } = selection;
  if (!dispatch2) {
    return true;
  }
  if (empty2 && extendEmptyMarkRange) {
    let { from: from4, to } = selection;
    const attrs2 = (_a = $from.marks().find((mark3) => mark3.type === type)) === null || _a === void 0 ? void 0 : _a.attrs;
    const range2 = getMarkRange($from, type, attrs2);
    if (range2) {
      from4 = range2.from;
      to = range2.to;
    }
    tr.removeMark(from4, to, type);
  } else {
    ranges.forEach((range2) => {
      tr.removeMark(range2.$from.pos, range2.$to.pos, type);
    });
  }
  tr.removeStoredMark(type);
  return true;
};
var unsetMark$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unsetMark
});
const updateAttributes = (typeOrName, attributes = {}) => ({ tr, state, dispatch: dispatch2 }) => {
  let nodeType2 = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType2 = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  if (dispatch2) {
    tr.selection.ranges.forEach((range2) => {
      const from4 = range2.$from.pos;
      const to = range2.$to.pos;
      state.doc.nodesBetween(from4, to, (node4, pos) => {
        if (nodeType2 && nodeType2 === node4.type) {
          tr.setNodeMarkup(pos, void 0, __spreadValues(__spreadValues({}, node4.attrs), attributes));
        }
        if (markType && node4.marks.length) {
          node4.marks.forEach((mark3) => {
            if (markType === mark3.type) {
              const trimmedFrom = Math.max(pos, from4);
              const trimmedTo = Math.min(pos + node4.nodeSize, to);
              tr.addMark(trimmedFrom, trimmedTo, markType.create(__spreadValues(__spreadValues({}, mark3.attrs), attributes)));
            }
          });
        }
      });
    });
  }
  return true;
};
var updateAttributes$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  updateAttributes
});
const wrapIn = (typeOrName, attributes = {}) => ({ state, dispatch: dispatch2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  return wrapIn$2(type, attributes)(state, dispatch2);
};
var wrapIn$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  wrapIn
});
const wrapInList = (typeOrName, attributes = {}) => ({ state, dispatch: dispatch2 }) => {
  const type = getNodeType(typeOrName, state.schema);
  return wrapInList$2(type, attributes)(state, dispatch2);
};
var wrapInList$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  wrapInList
});
const Commands = Extension.create({
  name: "commands",
  addCommands() {
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, blur$1), clearContent$1), clearNodes$1), command$1), createParagraphNear$1), deleteNode$1), deleteRange$1), deleteSelection$1), enter$1), exitCode$1), extendMarkRange$1), first$1), focus$1), forEach$1), insertContent$1), insertContentAt$1), joinBackward$1), joinForward$1), keyboardShortcut$1), lift$1), liftEmptyBlock$1), liftListItem$1), newlineInCode$1), resetAttributes$1), scrollIntoView$1), selectAll$1), selectNodeBackward$1), selectNodeForward$1), selectParentNode$1), setContent$1), setMark$1), setMeta$1), setNode$1), setNodeSelection$1), setTextSelection$1), sinkListItem$1), splitBlock$1), splitListItem$1), toggleList$1), toggleMark$1), toggleNode$1), toggleWrap$1), undoInputRule$1), unsetAllMarks$1), unsetMark$1), updateAttributes$1), wrapIn$1), wrapInList$1);
  }
});
const Editable = Extension.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
});
const FocusEvents = Extension.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor } = this;
    return [
      new Plugin({
        key: new PluginKey("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (view, event) => {
              editor.isFocused = true;
              const transaction = editor.state.tr.setMeta("focus", { event }).setMeta("addToHistory", false);
              view.dispatch(transaction);
              return false;
            },
            blur: (view, event) => {
              editor.isFocused = false;
              const transaction = editor.state.tr.setMeta("blur", { event }).setMeta("addToHistory", false);
              view.dispatch(transaction);
              return false;
            }
          }
        }
      })
    ];
  }
});
function createChainableState(config2) {
  const { state, transaction } = config2;
  let { selection } = transaction;
  let { doc: doc2 } = transaction;
  let { storedMarks } = transaction;
  return __spreadProps(__spreadValues({}, state), {
    schema: state.schema,
    plugins: state.plugins,
    apply: state.apply.bind(state),
    applyTransaction: state.applyTransaction.bind(state),
    reconfigure: state.reconfigure.bind(state),
    toJSON: state.toJSON.bind(state),
    get storedMarks() {
      return storedMarks;
    },
    get selection() {
      return selection;
    },
    get doc() {
      return doc2;
    },
    get tr() {
      selection = transaction.selection;
      doc2 = transaction.doc;
      storedMarks = transaction.storedMarks;
      return transaction;
    }
  });
}
class CommandManager {
  constructor(props) {
    this.editor = props.editor;
    this.rawCommands = this.editor.extensionManager.commands;
    this.customState = props.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    const { tr } = state;
    const props = this.buildProps(tr);
    return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      const method = (...args) => {
        const callback = command2(...args)(props);
        if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
          view.dispatch(tr);
        }
        return callback;
      };
      return [name, method];
    }));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(startTr, shouldDispatch = true) {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    const callbacks = [];
    const hasStartTransaction = !!startTr;
    const tr = startTr || state.tr;
    const run2 = () => {
      if (!hasStartTransaction && shouldDispatch && !tr.getMeta("preventDispatch") && !this.hasCustomState) {
        view.dispatch(tr);
      }
      return callbacks.every((callback) => callback === true);
    };
    const chain = __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      const chainedCommand = (...args) => {
        const props = this.buildProps(tr, shouldDispatch);
        const callback = command2(...args)(props);
        callbacks.push(callback);
        return chain;
      };
      return [name, chainedCommand];
    }))), {
      run: run2
    });
    return chain;
  }
  createCan(startTr) {
    const { rawCommands, state } = this;
    const dispatch2 = void 0;
    const tr = startTr || state.tr;
    const props = this.buildProps(tr, dispatch2);
    const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      return [name, (...args) => command2(...args)(__spreadProps(__spreadValues({}, props), { dispatch: dispatch2 }))];
    }));
    return __spreadProps(__spreadValues({}, formattedCommands), {
      chain: () => this.createChain(tr, dispatch2)
    });
  }
  buildProps(tr, shouldDispatch = true) {
    const { rawCommands, editor, state } = this;
    const { view } = editor;
    if (state.storedMarks) {
      tr.setStoredMarks(state.storedMarks);
    }
    const props = {
      tr,
      editor,
      view,
      state: createChainableState({
        state,
        transaction: tr
      }),
      dispatch: shouldDispatch ? () => void 0 : void 0,
      chain: () => this.createChain(tr),
      can: () => this.createCan(tr),
      get commands() {
        return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
          return [name, (...args) => command2(...args)(props)];
        }));
      }
    };
    return props;
  }
}
const Keymap = Extension.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const handleBackspace = () => this.editor.commands.first(({ commands }) => [
      () => commands.undoInputRule(),
      () => commands.command(({ tr }) => {
        const { selection, doc: doc2 } = tr;
        const { empty: empty2, $anchor } = selection;
        const { pos, parent } = $anchor;
        const isAtStart = Selection.atStart(doc2).from === pos;
        if (!empty2 || !isAtStart || !parent.type.isTextblock || parent.textContent.length) {
          return false;
        }
        return commands.clearNodes();
      }),
      () => commands.deleteSelection(),
      () => commands.joinBackward(),
      () => commands.selectNodeBackward()
    ]);
    const handleDelete = () => this.editor.commands.first(({ commands }) => [
      () => commands.deleteSelection(),
      () => commands.joinForward(),
      () => commands.selectNodeForward()
    ]);
    return {
      Enter: () => this.editor.commands.first(({ commands }) => [
        () => commands.newlineInCode(),
        () => commands.createParagraphNear(),
        () => commands.liftEmptyBlock(),
        () => commands.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: handleBackspace,
      "Mod-Backspace": handleBackspace,
      "Shift-Backspace": handleBackspace,
      Delete: handleDelete,
      "Mod-Delete": handleDelete,
      "Mod-a": () => this.editor.commands.selectAll()
    };
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("clearDocument"),
        appendTransaction: (transactions, oldState, newState) => {
          const docChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
          if (!docChanges) {
            return;
          }
          const { empty: empty2, from: from4, to } = oldState.selection;
          const allFrom = Selection.atStart(oldState.doc).from;
          const allEnd = Selection.atEnd(oldState.doc).to;
          const allWasSelected = from4 === allFrom && to === allEnd;
          const isEmpty2 = newState.doc.textBetween(0, newState.doc.content.size, " ", " ").length === 0;
          if (empty2 || !allWasSelected || !isEmpty2) {
            return;
          }
          const tr = newState.tr;
          const state = createChainableState({
            state: newState,
            transaction: tr
          });
          const { commands } = new CommandManager({
            editor: this.editor,
            state
          });
          commands.clearNodes();
          if (!tr.steps.length) {
            return;
          }
          return tr;
        }
      })
    ];
  }
});
const Tabindex = Extension.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("tabindex"),
        props: {
          attributes: {
            tabindex: "0"
          }
        }
      })
    ];
  }
});
var extensions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer,
  Commands,
  Editable,
  FocusEvents,
  Keymap,
  Tabindex
});
function getNodeAttributes(state, typeOrName) {
  const type = getNodeType(typeOrName, state.schema);
  const { from: from4, to } = state.selection;
  const nodes = [];
  state.doc.nodesBetween(from4, to, (node5) => {
    nodes.push(node5);
  });
  const node4 = nodes.reverse().find((nodeItem) => nodeItem.type.name === type.name);
  if (!node4) {
    return {};
  }
  return __spreadValues({}, node4.attrs);
}
function getAttributes(state, typeOrName) {
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (schemaType === "node") {
    return getNodeAttributes(state, typeOrName);
  }
  if (schemaType === "mark") {
    return getMarkAttributes(state, typeOrName);
  }
  return {};
}
function isActive(state, name, attributes = {}) {
  if (!name) {
    return isNodeActive(state, null, attributes) || isMarkActive(state, null, attributes);
  }
  const schemaType = getSchemaTypeNameByName(name, state.schema);
  if (schemaType === "node") {
    return isNodeActive(state, name, attributes);
  }
  if (schemaType === "mark") {
    return isMarkActive(state, name, attributes);
  }
  return false;
}
function getHTMLFromFragment(fragment, schema2) {
  const documentFragment = DOMSerializer.fromSchema(schema2).serializeFragment(fragment);
  const temporaryDocument = document.implementation.createHTMLDocument();
  const container = temporaryDocument.createElement("div");
  container.appendChild(documentFragment);
  return container.innerHTML;
}
function getText(node4, options) {
  const range2 = {
    from: 0,
    to: node4.content.size
  };
  return getTextBetween(node4, range2, options);
}
function isNodeEmpty(node4) {
  var _a;
  const defaultContent = (_a = node4.type.createAndFill()) === null || _a === void 0 ? void 0 : _a.toJSON();
  const content2 = node4.toJSON();
  return JSON.stringify(defaultContent) === JSON.stringify(content2);
}
function createStyleTag(style2) {
  const tipTapStyleTag = document.querySelector("style[data-tiptap-style]");
  if (tipTapStyleTag !== null) {
    return tipTapStyleTag;
  }
  const styleNode = document.createElement("style");
  styleNode.setAttribute("data-tiptap-style", "");
  styleNode.innerHTML = style2;
  document.getElementsByTagName("head")[0].appendChild(styleNode);
  return styleNode;
}
class InputRule {
  constructor(config2) {
    this.find = config2.find;
    this.handler = config2.handler;
  }
}
const inputRuleMatcherHandler = (text6, find3) => {
  if (isRegExp$1(find3)) {
    return find3.exec(text6);
  }
  const inputRuleMatch = find3(text6);
  if (!inputRuleMatch) {
    return null;
  }
  const result2 = [];
  result2.push(inputRuleMatch.text);
  result2.index = inputRuleMatch.index;
  result2.input = text6;
  result2.data = inputRuleMatch.data;
  if (inputRuleMatch.replaceWith) {
    if (!inputRuleMatch.text.includes(inputRuleMatch.replaceWith)) {
      console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');
    }
    result2.push(inputRuleMatch.replaceWith);
  }
  return result2;
};
function run$1$1(config2) {
  var _a;
  const { editor, from: from4, to, text: text6, rules, plugin } = config2;
  const { view } = editor;
  if (view.composing) {
    return false;
  }
  const $from = view.state.doc.resolve(from4);
  if ($from.parent.type.spec.code || !!((_a = $from.nodeBefore || $from.nodeAfter) === null || _a === void 0 ? void 0 : _a.marks.find((mark3) => mark3.type.spec.code))) {
    return false;
  }
  let matched = false;
  const maxMatch = 500;
  const textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - maxMatch), $from.parentOffset, void 0, " ") + text6;
  rules.forEach((rule) => {
    if (matched) {
      return;
    }
    const match2 = inputRuleMatcherHandler(textBefore, rule.find);
    if (!match2) {
      return;
    }
    const tr = view.state.tr;
    const state = createChainableState({
      state: view.state,
      transaction: tr
    });
    const range2 = {
      from: from4 - (match2[0].length - text6.length),
      to
    };
    const { commands, chain, can } = new CommandManager({
      editor,
      state
    });
    const handler = rule.handler({
      state,
      range: range2,
      match: match2,
      commands,
      chain,
      can
    });
    if (handler === null || !tr.steps.length) {
      return;
    }
    tr.setMeta(plugin, {
      transform: tr,
      from: from4,
      to,
      text: text6
    });
    view.dispatch(tr);
    matched = true;
  });
  return matched;
}
function inputRulesPlugin(props) {
  const { editor, rules } = props;
  const plugin = new Plugin({
    state: {
      init() {
        return null;
      },
      apply(tr, prev) {
        const stored = tr.getMeta(this);
        if (stored) {
          return stored;
        }
        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput(view, from4, to, text6) {
        return run$1$1({
          editor,
          from: from4,
          to,
          text: text6,
          rules,
          plugin
        });
      },
      handleDOMEvents: {
        compositionend: (view) => {
          setTimeout(() => {
            const { $cursor } = view.state.selection;
            if ($cursor) {
              run$1$1({
                editor,
                from: $cursor.pos,
                to: $cursor.pos,
                text: "",
                rules,
                plugin
              });
            }
          });
          return false;
        }
      },
      handleKeyDown(view, event) {
        if (event.key !== "Enter") {
          return false;
        }
        const { $cursor } = view.state.selection;
        if ($cursor) {
          return run$1$1({
            editor,
            from: $cursor.pos,
            to: $cursor.pos,
            text: "\n",
            rules,
            plugin
          });
        }
        return false;
      }
    },
    isInputRules: true
  });
  return plugin;
}
function isNumber(value) {
  return typeof value === "number";
}
class PasteRule {
  constructor(config2) {
    this.find = config2.find;
    this.handler = config2.handler;
  }
}
const pasteRuleMatcherHandler = (text6, find3) => {
  if (isRegExp$1(find3)) {
    return [...text6.matchAll(find3)];
  }
  const matches2 = find3(text6);
  if (!matches2) {
    return [];
  }
  return matches2.map((pasteRuleMatch) => {
    const result2 = [];
    result2.push(pasteRuleMatch.text);
    result2.index = pasteRuleMatch.index;
    result2.input = text6;
    result2.data = pasteRuleMatch.data;
    if (pasteRuleMatch.replaceWith) {
      if (!pasteRuleMatch.text.includes(pasteRuleMatch.replaceWith)) {
        console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');
      }
      result2.push(pasteRuleMatch.replaceWith);
    }
    return result2;
  });
};
function run$2(config2) {
  const { editor, state, from: from4, to, rule } = config2;
  const { commands, chain, can } = new CommandManager({
    editor,
    state
  });
  const handlers2 = [];
  state.doc.nodesBetween(from4, to, (node4, pos) => {
    if (!node4.isTextblock || node4.type.spec.code) {
      return;
    }
    const resolvedFrom = Math.max(from4, pos);
    const resolvedTo = Math.min(to, pos + node4.content.size);
    const textToMatch = node4.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "\uFFFC");
    const matches2 = pasteRuleMatcherHandler(textToMatch, rule.find);
    matches2.forEach((match2) => {
      if (match2.index === void 0) {
        return;
      }
      const start3 = resolvedFrom + match2.index + 1;
      const end2 = start3 + match2[0].length;
      const range2 = {
        from: state.tr.mapping.map(start3),
        to: state.tr.mapping.map(end2)
      };
      const handler = rule.handler({
        state,
        range: range2,
        match: match2,
        commands,
        chain,
        can
      });
      handlers2.push(handler);
    });
  });
  const success = handlers2.every((handler) => handler !== null);
  return success;
}
function pasteRulesPlugin(props) {
  const { editor, rules } = props;
  let isProseMirrorHTML = false;
  const plugins = rules.map((rule) => {
    return new Plugin({
      props: {
        handlePaste: (view, event) => {
          var _a;
          const html = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData("text/html");
          isProseMirrorHTML = !!(html === null || html === void 0 ? void 0 : html.includes("data-pm-slice"));
          return false;
        }
      },
      appendTransaction: (transactions, oldState, state) => {
        const transaction = transactions[0];
        if (!transaction.getMeta("paste") || isProseMirrorHTML) {
          return;
        }
        const from4 = oldState.doc.content.findDiffStart(state.doc.content);
        const to = oldState.doc.content.findDiffEnd(state.doc.content);
        if (!isNumber(from4) || !to || from4 === to.b) {
          return;
        }
        const tr = state.tr;
        const chainableState = createChainableState({
          state,
          transaction: tr
        });
        const handler = run$2({
          editor,
          state: chainableState,
          from: Math.max(from4 - 1, 0),
          to: to.b,
          rule
        });
        if (!handler || !tr.steps.length) {
          return;
        }
        return tr;
      }
    });
  });
  return plugins;
}
function getAttributesFromExtensions(extensions2) {
  const extensionAttributes = [];
  const { nodeExtensions, markExtensions } = splitExtensions(extensions2);
  const nodeAndMarkExtensions = [...nodeExtensions, ...markExtensions];
  const defaultAttribute = {
    default: null,
    rendered: true,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: true
  };
  extensions2.forEach((extension) => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const addGlobalAttributes = getExtensionField(extension, "addGlobalAttributes", context);
    if (!addGlobalAttributes) {
      return;
    }
    const globalAttributes = addGlobalAttributes();
    globalAttributes.forEach((globalAttribute) => {
      globalAttribute.types.forEach((type) => {
        Object.entries(globalAttribute.attributes).forEach(([name, attribute2]) => {
          extensionAttributes.push({
            type,
            name,
            attribute: __spreadValues(__spreadValues({}, defaultAttribute), attribute2)
          });
        });
      });
    });
  });
  nodeAndMarkExtensions.forEach((extension) => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const addAttributes = getExtensionField(extension, "addAttributes", context);
    if (!addAttributes) {
      return;
    }
    const attributes = addAttributes();
    Object.entries(attributes).forEach(([name, attribute2]) => {
      extensionAttributes.push({
        type: extension.name,
        name,
        attribute: __spreadValues(__spreadValues({}, defaultAttribute), attribute2)
      });
    });
  });
  return extensionAttributes;
}
function mergeAttributes(...objects) {
  return objects.filter((item) => !!item).reduce((items, item) => {
    const mergedAttributes = __spreadValues({}, items);
    Object.entries(item).forEach(([key, value]) => {
      const exists = mergedAttributes[key];
      if (!exists) {
        mergedAttributes[key] = value;
        return;
      }
      if (key === "class") {
        mergedAttributes[key] = [mergedAttributes[key], value].join(" ");
      } else if (key === "style") {
        mergedAttributes[key] = [mergedAttributes[key], value].join("; ");
      } else {
        mergedAttributes[key] = value;
      }
    });
    return mergedAttributes;
  }, {});
}
function getRenderedAttributes(nodeOrMark, extensionAttributes) {
  return extensionAttributes.filter((item) => item.attribute.rendered).map((item) => {
    if (!item.attribute.renderHTML) {
      return {
        [item.name]: nodeOrMark.attrs[item.name]
      };
    }
    return item.attribute.renderHTML(nodeOrMark.attrs) || {};
  }).reduce((attributes, attribute2) => mergeAttributes(attributes, attribute2), {});
}
function isEmptyObject(value = {}) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}
function fromString(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (value.match(/^[+-]?(?:\d*\.)?\d+$/)) {
    return Number(value);
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  return value;
}
function injectExtensionAttributesToParseRule(parseRule2, extensionAttributes) {
  if (parseRule2.style) {
    return parseRule2;
  }
  return __spreadProps(__spreadValues({}, parseRule2), {
    getAttrs: (node4) => {
      const oldAttributes = parseRule2.getAttrs ? parseRule2.getAttrs(node4) : parseRule2.attrs;
      if (oldAttributes === false) {
        return false;
      }
      const newAttributes = extensionAttributes.filter((item) => item.attribute.rendered).reduce((items, item) => {
        const value = item.attribute.parseHTML ? item.attribute.parseHTML(node4) : fromString(node4.getAttribute(item.name));
        if (isObject$1(value)) {
          console.warn(`[tiptap warn]: BREAKING CHANGE: "parseHTML" for your attribute "${item.name}" returns an object but should return the value itself. If this is expected you can ignore this message. This warning will be removed in one of the next releases. Further information: https://github.com/ueberdosis/tiptap/issues/1863`);
        }
        if (value === null || value === void 0) {
          return items;
        }
        return __spreadProps(__spreadValues({}, items), {
          [item.name]: value
        });
      }, {});
      return __spreadValues(__spreadValues({}, oldAttributes), newAttributes);
    }
  });
}
function cleanUpSchemaItem(data) {
  return Object.fromEntries(Object.entries(data).filter(([key, value]) => {
    if (key === "attrs" && isEmptyObject(value)) {
      return false;
    }
    return value !== null && value !== void 0;
  }));
}
function getSchemaByResolvedExtensions(extensions2) {
  var _a;
  const allAttributes = getAttributesFromExtensions(extensions2);
  const { nodeExtensions, markExtensions } = splitExtensions(extensions2);
  const topNode = (_a = nodeExtensions.find((extension) => getExtensionField(extension, "topNode"))) === null || _a === void 0 ? void 0 : _a.name;
  const nodes = Object.fromEntries(nodeExtensions.map((extension) => {
    const extensionAttributes = allAttributes.filter((attribute2) => attribute2.type === extension.name);
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const extraNodeFields = extensions2.reduce((fields, e) => {
      const extendNodeSchema = getExtensionField(e, "extendNodeSchema", context);
      return __spreadValues(__spreadValues({}, fields), extendNodeSchema ? extendNodeSchema(extension) : {});
    }, {});
    const schema2 = cleanUpSchemaItem(__spreadProps(__spreadValues({}, extraNodeFields), {
      content: callOrReturn(getExtensionField(extension, "content", context)),
      marks: callOrReturn(getExtensionField(extension, "marks", context)),
      group: callOrReturn(getExtensionField(extension, "group", context)),
      inline: callOrReturn(getExtensionField(extension, "inline", context)),
      atom: callOrReturn(getExtensionField(extension, "atom", context)),
      selectable: callOrReturn(getExtensionField(extension, "selectable", context)),
      draggable: callOrReturn(getExtensionField(extension, "draggable", context)),
      code: callOrReturn(getExtensionField(extension, "code", context)),
      defining: callOrReturn(getExtensionField(extension, "defining", context)),
      isolating: callOrReturn(getExtensionField(extension, "isolating", context)),
      attrs: Object.fromEntries(extensionAttributes.map((extensionAttribute) => {
        var _a2;
        return [extensionAttribute.name, { default: (_a2 = extensionAttribute === null || extensionAttribute === void 0 ? void 0 : extensionAttribute.attribute) === null || _a2 === void 0 ? void 0 : _a2.default }];
      }))
    }));
    const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
    if (parseHTML) {
      schema2.parseDOM = parseHTML.map((parseRule2) => injectExtensionAttributesToParseRule(parseRule2, extensionAttributes));
    }
    const renderHTML = getExtensionField(extension, "renderHTML", context);
    if (renderHTML) {
      schema2.toDOM = (node4) => renderHTML({
        node: node4,
        HTMLAttributes: getRenderedAttributes(node4, extensionAttributes)
      });
    }
    const renderText = getExtensionField(extension, "renderText", context);
    if (renderText) {
      schema2.toText = renderText;
    }
    return [extension.name, schema2];
  }));
  const marks2 = Object.fromEntries(markExtensions.map((extension) => {
    const extensionAttributes = allAttributes.filter((attribute2) => attribute2.type === extension.name);
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const extraMarkFields = extensions2.reduce((fields, e) => {
      const extendMarkSchema = getExtensionField(e, "extendMarkSchema", context);
      return __spreadValues(__spreadValues({}, fields), extendMarkSchema ? extendMarkSchema(extension) : {});
    }, {});
    const schema2 = cleanUpSchemaItem(__spreadProps(__spreadValues({}, extraMarkFields), {
      inclusive: callOrReturn(getExtensionField(extension, "inclusive", context)),
      excludes: callOrReturn(getExtensionField(extension, "excludes", context)),
      group: callOrReturn(getExtensionField(extension, "group", context)),
      spanning: callOrReturn(getExtensionField(extension, "spanning", context)),
      code: callOrReturn(getExtensionField(extension, "code", context)),
      attrs: Object.fromEntries(extensionAttributes.map((extensionAttribute) => {
        var _a2;
        return [extensionAttribute.name, { default: (_a2 = extensionAttribute === null || extensionAttribute === void 0 ? void 0 : extensionAttribute.attribute) === null || _a2 === void 0 ? void 0 : _a2.default }];
      }))
    }));
    const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
    if (parseHTML) {
      schema2.parseDOM = parseHTML.map((parseRule2) => injectExtensionAttributesToParseRule(parseRule2, extensionAttributes));
    }
    const renderHTML = getExtensionField(extension, "renderHTML", context);
    if (renderHTML) {
      schema2.toDOM = (mark3) => renderHTML({
        mark: mark3,
        HTMLAttributes: getRenderedAttributes(mark3, extensionAttributes)
      });
    }
    return [extension.name, schema2];
  }));
  return new Schema({
    topNode,
    nodes,
    marks: marks2
  });
}
function getSchemaTypeByName(name, schema2) {
  return schema2.nodes[name] || schema2.marks[name] || null;
}
function isExtensionRulesEnabled(extension, enabled) {
  if (Array.isArray(enabled)) {
    return enabled.some((enabledExtension) => {
      const name = typeof enabledExtension === "string" ? enabledExtension : enabledExtension.name;
      return name === extension.name;
    });
  }
  return enabled;
}
function findDuplicates(items) {
  const filtered = items.filter((el2, index2) => items.indexOf(el2) !== index2);
  return [...new Set(filtered)];
}
class ExtensionManager {
  constructor(extensions2, editor) {
    this.splittableMarks = [];
    this.editor = editor;
    this.extensions = ExtensionManager.resolve(extensions2);
    this.schema = getSchemaByResolvedExtensions(this.extensions);
    this.extensions.forEach((extension) => {
      var _a;
      this.editor.extensionStorage[extension.name] = extension.storage;
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage,
        editor: this.editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      if (extension.type === "mark") {
        const keepOnSplit = (_a = callOrReturn(getExtensionField(extension, "keepOnSplit", context))) !== null && _a !== void 0 ? _a : true;
        if (keepOnSplit) {
          this.splittableMarks.push(extension.name);
        }
      }
      const onBeforeCreate = getExtensionField(extension, "onBeforeCreate", context);
      if (onBeforeCreate) {
        this.editor.on("beforeCreate", onBeforeCreate);
      }
      const onCreate = getExtensionField(extension, "onCreate", context);
      if (onCreate) {
        this.editor.on("create", onCreate);
      }
      const onUpdate = getExtensionField(extension, "onUpdate", context);
      if (onUpdate) {
        this.editor.on("update", onUpdate);
      }
      const onSelectionUpdate = getExtensionField(extension, "onSelectionUpdate", context);
      if (onSelectionUpdate) {
        this.editor.on("selectionUpdate", onSelectionUpdate);
      }
      const onTransaction = getExtensionField(extension, "onTransaction", context);
      if (onTransaction) {
        this.editor.on("transaction", onTransaction);
      }
      const onFocus = getExtensionField(extension, "onFocus", context);
      if (onFocus) {
        this.editor.on("focus", onFocus);
      }
      const onBlur = getExtensionField(extension, "onBlur", context);
      if (onBlur) {
        this.editor.on("blur", onBlur);
      }
      const onDestroy = getExtensionField(extension, "onDestroy", context);
      if (onDestroy) {
        this.editor.on("destroy", onDestroy);
      }
    });
  }
  static resolve(extensions2) {
    const resolvedExtensions = ExtensionManager.sort(ExtensionManager.flatten(extensions2));
    const duplicatedNames = findDuplicates(resolvedExtensions.map((extension) => extension.name));
    if (duplicatedNames.length) {
      console.warn(`[tiptap warn]: Duplicate extension names found: [${duplicatedNames.map((item) => `'${item}'`).join(", ")}]. This can lead to issues.`);
    }
    return resolvedExtensions;
  }
  static flatten(extensions2) {
    return extensions2.map((extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage
      };
      const addExtensions = getExtensionField(extension, "addExtensions", context);
      if (addExtensions) {
        return [
          extension,
          ...this.flatten(addExtensions())
        ];
      }
      return extension;
    }).flat(10);
  }
  static sort(extensions2) {
    const defaultPriority = 100;
    return extensions2.sort((a, b) => {
      const priorityA = getExtensionField(a, "priority") || defaultPriority;
      const priorityB = getExtensionField(b, "priority") || defaultPriority;
      if (priorityA > priorityB) {
        return -1;
      }
      if (priorityA < priorityB) {
        return 1;
      }
      return 0;
    });
  }
  get commands() {
    return this.extensions.reduce((commands, extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage,
        editor: this.editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      const addCommands = getExtensionField(extension, "addCommands", context);
      if (!addCommands) {
        return commands;
      }
      return __spreadValues(__spreadValues({}, commands), addCommands());
    }, {});
  }
  get plugins() {
    const { editor } = this;
    const extensions2 = ExtensionManager.sort([...this.extensions].reverse());
    const inputRules = [];
    const pasteRules = [];
    const allPlugins = extensions2.map((extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage,
        editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      const plugins = [];
      const addKeyboardShortcuts = getExtensionField(extension, "addKeyboardShortcuts", context);
      if (addKeyboardShortcuts) {
        const bindings = Object.fromEntries(Object.entries(addKeyboardShortcuts()).map(([shortcut, method]) => {
          return [shortcut, () => method({ editor })];
        }));
        const keyMapPlugin = keymap(bindings);
        plugins.push(keyMapPlugin);
      }
      const addInputRules = getExtensionField(extension, "addInputRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enableInputRules) && addInputRules) {
        inputRules.push(...addInputRules());
      }
      const addPasteRules = getExtensionField(extension, "addPasteRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enablePasteRules) && addPasteRules) {
        pasteRules.push(...addPasteRules());
      }
      const addProseMirrorPlugins = getExtensionField(extension, "addProseMirrorPlugins", context);
      if (addProseMirrorPlugins) {
        const proseMirrorPlugins = addProseMirrorPlugins();
        plugins.push(...proseMirrorPlugins);
      }
      return plugins;
    }).flat();
    return [
      inputRulesPlugin({
        editor,
        rules: inputRules
      }),
      ...pasteRulesPlugin({
        editor,
        rules: pasteRules
      }),
      ...allPlugins
    ];
  }
  get attributes() {
    return getAttributesFromExtensions(this.extensions);
  }
  get nodeViews() {
    const { editor } = this;
    const { nodeExtensions } = splitExtensions(this.extensions);
    return Object.fromEntries(nodeExtensions.filter((extension) => !!getExtensionField(extension, "addNodeView")).map((extension) => {
      const extensionAttributes = this.attributes.filter((attribute2) => attribute2.type === extension.name);
      const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage,
        editor,
        type: getNodeType(extension.name, this.schema)
      };
      const addNodeView = getExtensionField(extension, "addNodeView", context);
      if (!addNodeView) {
        return [];
      }
      const nodeview = (node4, view, getPos, decorations) => {
        const HTMLAttributes = getRenderedAttributes(node4, extensionAttributes);
        return addNodeView()({
          editor,
          node: node4,
          getPos,
          decorations,
          HTMLAttributes,
          extension
        });
      };
      return [extension.name, nodeview];
    }));
  }
}
class EventEmitter {
  constructor() {
    this.callbacks = {};
  }
  on(event, fn) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(fn);
    return this;
  }
  emit(event, ...args) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      callbacks.forEach((callback) => callback.apply(this, args));
    }
    return this;
  }
  off(event, fn) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      if (fn) {
        this.callbacks[event] = callbacks.filter((callback) => callback !== fn);
      } else {
        delete this.callbacks[event];
      }
    }
    return this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
const style = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
class Editor extends EventEmitter {
  constructor(options = {}) {
    super();
    this.isFocused = false;
    this.extensionStorage = {};
    this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: true,
      extensions: [],
      autofocus: false,
      editable: true,
      editorProps: {},
      parseOptions: {},
      enableInputRules: true,
      enablePasteRules: true,
      enableCoreExtensions: true,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null
    };
    this.isCapturingTransaction = false;
    this.capturedTransaction = null;
    this.setOptions(options);
    this.createExtensionManager();
    this.createCommandManager();
    this.createSchema();
    this.on("beforeCreate", this.options.onBeforeCreate);
    this.emit("beforeCreate", { editor: this });
    this.createView();
    this.injectCSS();
    this.on("create", this.options.onCreate);
    this.on("update", this.options.onUpdate);
    this.on("selectionUpdate", this.options.onSelectionUpdate);
    this.on("transaction", this.options.onTransaction);
    this.on("focus", this.options.onFocus);
    this.on("blur", this.options.onBlur);
    this.on("destroy", this.options.onDestroy);
    window.setTimeout(() => {
      if (this.isDestroyed) {
        return;
      }
      this.commands.focus(this.options.autofocus);
      this.emit("create", { editor: this });
    }, 0);
  }
  get storage() {
    return this.extensionStorage;
  }
  get commands() {
    return this.commandManager.commands;
  }
  chain() {
    return this.commandManager.chain();
  }
  can() {
    return this.commandManager.can();
  }
  injectCSS() {
    if (this.options.injectCSS && document) {
      this.css = createStyleTag(style);
    }
  }
  setOptions(options = {}) {
    this.options = __spreadValues(__spreadValues({}, this.options), options);
    if (!this.view || !this.state || this.isDestroyed) {
      return;
    }
    if (this.options.editorProps) {
      this.view.setProps(this.options.editorProps);
    }
    this.view.updateState(this.state);
  }
  setEditable(editable) {
    this.setOptions({ editable });
  }
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  get state() {
    return this.view.state;
  }
  registerPlugin(plugin, handlePlugins) {
    const plugins = isFunction$1(handlePlugins) ? handlePlugins(plugin, this.state.plugins) : [...this.state.plugins, plugin];
    const state = this.state.reconfigure({ plugins });
    this.view.updateState(state);
  }
  unregisterPlugin(nameOrPluginKey) {
    if (this.isDestroyed) {
      return;
    }
    const name = typeof nameOrPluginKey === "string" ? `${nameOrPluginKey}$` : nameOrPluginKey.key;
    const state = this.state.reconfigure({
      plugins: this.state.plugins.filter((plugin) => !plugin.key.startsWith(name))
    });
    this.view.updateState(state);
  }
  createExtensionManager() {
    const coreExtensions = this.options.enableCoreExtensions ? Object.values(extensions) : [];
    const allExtensions = [...coreExtensions, ...this.options.extensions].filter((extension) => {
      return ["extension", "node", "mark"].includes(extension === null || extension === void 0 ? void 0 : extension.type);
    });
    this.extensionManager = new ExtensionManager(allExtensions, this);
  }
  createCommandManager() {
    this.commandManager = new CommandManager({
      editor: this
    });
  }
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  createView() {
    const doc2 = createDocument(this.options.content, this.schema, this.options.parseOptions);
    const selection = resolveFocusPosition(doc2, this.options.autofocus);
    this.view = new EditorView(this.options.element, __spreadProps(__spreadValues({}, this.options.editorProps), {
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: EditorState.create({
        doc: doc2,
        selection
      })
    }));
    const newState = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(newState);
    this.createNodeViews();
    const dom = this.view.dom;
    dom.editor = this;
  }
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  captureTransaction(fn) {
    this.isCapturingTransaction = true;
    fn();
    this.isCapturingTransaction = false;
    const tr = this.capturedTransaction;
    this.capturedTransaction = null;
    return tr;
  }
  dispatchTransaction(transaction) {
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = transaction;
        return;
      }
      transaction.steps.forEach((step2) => {
        var _a;
        return (_a = this.capturedTransaction) === null || _a === void 0 ? void 0 : _a.step(step2);
      });
      return;
    }
    const state = this.state.apply(transaction);
    const selectionHasChanged = !this.state.selection.eq(state.selection);
    this.view.updateState(state);
    this.emit("transaction", {
      editor: this,
      transaction
    });
    if (selectionHasChanged) {
      this.emit("selectionUpdate", {
        editor: this,
        transaction
      });
    }
    const focus3 = transaction.getMeta("focus");
    const blur2 = transaction.getMeta("blur");
    if (focus3) {
      this.emit("focus", {
        editor: this,
        event: focus3.event,
        transaction
      });
    }
    if (blur2) {
      this.emit("blur", {
        editor: this,
        event: blur2.event,
        transaction
      });
    }
    if (!transaction.docChanged || transaction.getMeta("preventUpdate")) {
      return;
    }
    this.emit("update", {
      editor: this,
      transaction
    });
  }
  getAttributes(nameOrType) {
    return getAttributes(this.state, nameOrType);
  }
  isActive(nameOrAttributes, attributesOrUndefined) {
    const name = typeof nameOrAttributes === "string" ? nameOrAttributes : null;
    const attributes = typeof nameOrAttributes === "string" ? attributesOrUndefined : nameOrAttributes;
    return isActive(this.state, name, attributes);
  }
  getJSON() {
    return this.state.doc.toJSON();
  }
  getHTML() {
    return getHTMLFromFragment(this.state.doc.content, this.schema);
  }
  getText(options) {
    const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
    return getText(this.state.doc, {
      blockSeparator,
      textSerializers: __spreadValues(__spreadValues({}, textSerializers), getTextSeralizersFromSchema(this.schema))
    });
  }
  get isEmpty() {
    return isNodeEmpty(this.state.doc);
  }
  getCharacterCount() {
    console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.');
    return this.state.doc.content.size - 2;
  }
  destroy() {
    this.emit("destroy");
    if (this.view) {
      this.view.destroy();
    }
    this.removeAllListeners();
  }
  get isDestroyed() {
    var _a;
    return !((_a = this.view) === null || _a === void 0 ? void 0 : _a.docView);
  }
}
class Node2 {
  constructor(config2 = {}) {
    this.type = "node";
    this.name = "node";
    this.parent = null;
    this.child = null;
    this.config = {
      name: this.name,
      defaultOptions: {}
    };
    this.config = __spreadValues(__spreadValues({}, this.config), config2);
    this.name = this.config.name;
    if (config2.defaultOptions) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
    }
    this.options = this.config.defaultOptions;
    if (this.config.addOptions) {
      this.options = callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      }));
    }
    this.storage = callOrReturn(getExtensionField(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(config2 = {}) {
    return new Node2(config2);
  }
  configure(options = {}) {
    const extension = this.extend();
    extension.options = mergeDeep(this.options, options);
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new Node2(extendedConfig);
    extension.parent = this;
    this.child = extension;
    extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
    if (extendedConfig.defaultOptions) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
    }
    extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
      name: extension.name
    }));
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
}
class Mark2 {
  constructor(config2 = {}) {
    this.type = "mark";
    this.name = "mark";
    this.parent = null;
    this.child = null;
    this.config = {
      name: this.name,
      defaultOptions: {}
    };
    this.config = __spreadValues(__spreadValues({}, this.config), config2);
    this.name = this.config.name;
    if (config2.defaultOptions) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`);
    }
    this.options = this.config.defaultOptions;
    if (this.config.addOptions) {
      this.options = callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      }));
    }
    this.storage = callOrReturn(getExtensionField(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(config2 = {}) {
    return new Mark2(config2);
  }
  configure(options = {}) {
    const extension = this.extend();
    extension.options = mergeDeep(this.options, options);
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new Mark2(extendedConfig);
    extension.parent = this;
    this.child = extension;
    extension.name = extendedConfig.name ? extendedConfig.name : extension.parent.name;
    if (extendedConfig.defaultOptions) {
      console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${extension.name}".`);
    }
    extension.options = callOrReturn(getExtensionField(extension, "addOptions", {
      name: extension.name
    }));
    extension.storage = callOrReturn(getExtensionField(extension, "addStorage", {
      name: extension.name,
      options: extension.options
    }));
    return extension;
  }
}
function nodeInputRule(config2) {
  return new InputRule({
    find: config2.find,
    handler: ({ state, range: range2, match: match2 }) => {
      const attributes = callOrReturn(config2.getAttributes, void 0, match2) || {};
      const { tr } = state;
      const start3 = range2.from;
      let end2 = range2.to;
      if (match2[1]) {
        const offset2 = match2[0].lastIndexOf(match2[1]);
        let matchStart = start3 + offset2;
        if (matchStart > end2) {
          matchStart = end2;
        } else {
          end2 = matchStart + match2[1].length;
        }
        const lastChar = match2[0][match2[0].length - 1];
        tr.insertText(lastChar, start3 + match2[0].length - 1);
        tr.replaceWith(matchStart, end2, config2.type.create(attributes));
      } else if (match2[0]) {
        tr.replaceWith(start3, end2, config2.type.create(attributes));
      }
    }
  });
}
function getMarksBetween(from4, to, doc2) {
  const marks2 = [];
  if (from4 === to) {
    doc2.resolve(from4).marks().forEach((mark3) => {
      const $pos = doc2.resolve(from4 - 1);
      const range2 = getMarkRange($pos, mark3.type);
      if (!range2) {
        return;
      }
      marks2.push(__spreadValues({
        mark: mark3
      }, range2));
    });
  } else {
    doc2.nodesBetween(from4, to, (node4, pos) => {
      marks2.push(...node4.marks.map((mark3) => ({
        from: pos,
        to: pos + node4.nodeSize,
        mark: mark3
      })));
    });
  }
  return marks2;
}
function markInputRule(config2) {
  return new InputRule({
    find: config2.find,
    handler: ({ state, range: range2, match: match2 }) => {
      const attributes = callOrReturn(config2.getAttributes, void 0, match2);
      if (attributes === false || attributes === null) {
        return null;
      }
      const { tr } = state;
      const captureGroup = match2[match2.length - 1];
      const fullMatch = match2[0];
      let markEnd = range2.to;
      if (captureGroup) {
        const startSpaces = fullMatch.search(/\S/);
        const textStart = range2.from + fullMatch.indexOf(captureGroup);
        const textEnd = textStart + captureGroup.length;
        const excludedMarks = getMarksBetween(range2.from, range2.to, state.doc).filter((item) => {
          const excluded = item.mark.type.excluded;
          return excluded.find((type) => type === config2.type && type !== item.mark.type);
        }).filter((item) => item.to > textStart);
        if (excludedMarks.length) {
          return null;
        }
        if (textEnd < range2.to) {
          tr.delete(textEnd, range2.to);
        }
        if (textStart > range2.from) {
          tr.delete(range2.from + startSpaces, textStart);
        }
        markEnd = range2.from + startSpaces + captureGroup.length;
        tr.addMark(range2.from + startSpaces, markEnd, config2.type.create(attributes || {}));
        tr.removeStoredMark(config2.type);
      }
    }
  });
}
function textblockTypeInputRule(config2) {
  return new InputRule({
    find: config2.find,
    handler: ({ state, range: range2, match: match2 }) => {
      const $start = state.doc.resolve(range2.from);
      const attributes = callOrReturn(config2.getAttributes, void 0, match2) || {};
      if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), config2.type)) {
        return null;
      }
      state.tr.delete(range2.from, range2.to).setBlockType(range2.from, range2.from, config2.type, attributes);
    }
  });
}
function wrappingInputRule(config2) {
  return new InputRule({
    find: config2.find,
    handler: ({ state, range: range2, match: match2 }) => {
      const attributes = callOrReturn(config2.getAttributes, void 0, match2) || {};
      const tr = state.tr.delete(range2.from, range2.to);
      const $start = tr.doc.resolve(range2.from);
      const blockRange2 = $start.blockRange();
      const wrapping = blockRange2 && findWrapping3(blockRange2, config2.type, attributes);
      if (!wrapping) {
        return null;
      }
      tr.wrap(blockRange2, wrapping);
      const before2 = tr.doc.resolve(range2.from - 1).nodeBefore;
      if (before2 && before2.type === config2.type && canJoin(tr.doc, range2.from - 1) && (!config2.joinPredicate || config2.joinPredicate(match2, before2))) {
        tr.join(range2.from - 1);
      }
    }
  });
}
function markPasteRule(config2) {
  return new PasteRule({
    find: config2.find,
    handler: ({ state, range: range2, match: match2 }) => {
      const attributes = callOrReturn(config2.getAttributes, void 0, match2);
      if (attributes === false || attributes === null) {
        return null;
      }
      const { tr } = state;
      const captureGroup = match2[match2.length - 1];
      const fullMatch = match2[0];
      let markEnd = range2.to;
      if (captureGroup) {
        const startSpaces = fullMatch.search(/\S/);
        const textStart = range2.from + fullMatch.indexOf(captureGroup);
        const textEnd = textStart + captureGroup.length;
        const excludedMarks = getMarksBetween(range2.from, range2.to, state.doc).filter((item) => {
          const excluded = item.mark.type.excluded;
          return excluded.find((type) => type === config2.type && type !== item.mark.type);
        }).filter((item) => item.to > textStart);
        if (excludedMarks.length) {
          return null;
        }
        if (textEnd < range2.to) {
          tr.delete(textEnd, range2.to);
        }
        if (textStart > range2.from) {
          tr.delete(range2.from + startSpaces, textStart);
        }
        markEnd = range2.from + startSpaces + captureGroup.length;
        tr.addMark(range2.from + startSpaces, markEnd, config2.type.create(attributes || {}));
        tr.removeStoredMark(config2.type);
      }
    }
  });
}
function combineTransactionSteps(oldDoc, transactions) {
  const transform = new Transform(oldDoc);
  transactions.forEach((transaction) => {
    transaction.steps.forEach((step2) => {
      transform.step(step2);
    });
  });
  return transform;
}
function findChildrenInRange(node4, range2, predicate) {
  const nodesWithPos = [];
  node4.nodesBetween(range2.from, range2.to, (child3, pos) => {
    if (predicate(child3)) {
      nodesWithPos.push({
        node: child3,
        pos
      });
    }
  });
  return nodesWithPos;
}
function removeDuplicates(array, by = JSON.stringify) {
  const seen = {};
  return array.filter((item) => {
    const key = by(item);
    return Object.prototype.hasOwnProperty.call(seen, key) ? false : seen[key] = true;
  });
}
function simplifyChangedRanges(changes) {
  const uniqueChanges = removeDuplicates(changes);
  return uniqueChanges.length === 1 ? uniqueChanges : uniqueChanges.filter((change, index2) => {
    const rest = uniqueChanges.filter((_, i) => i !== index2);
    return !rest.some((otherChange) => {
      return change.oldRange.from >= otherChange.oldRange.from && change.oldRange.to <= otherChange.oldRange.to && change.newRange.from >= otherChange.newRange.from && change.newRange.to <= otherChange.newRange.to;
    });
  });
}
function getChangedRanges(transform) {
  const { mapping, steps } = transform;
  const changes = [];
  mapping.maps.forEach((stepMap, index2) => {
    const ranges = [];
    if (!stepMap.ranges.length) {
      const { from: from4, to } = steps[index2];
      if (from4 === void 0 || to === void 0) {
        return;
      }
      ranges.push({ from: from4, to });
    } else {
      stepMap.forEach((from4, to) => {
        ranges.push({ from: from4, to });
      });
    }
    ranges.forEach(({ from: from4, to }) => {
      const newStart = mapping.slice(index2).map(from4, -1);
      const newEnd = mapping.slice(index2).map(to);
      const oldStart = mapping.invert().map(newStart, -1);
      const oldEnd = mapping.invert().map(newEnd);
      changes.push({
        oldRange: {
          from: oldStart,
          to: oldEnd
        },
        newRange: {
          from: newStart,
          to: newEnd
        }
      });
    });
  });
  return simplifyChangedRanges(changes);
}
const inputRegex$4 = /^\s*>\s$/;
const Blockquote = Node2.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: true,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["blockquote", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands }) => {
        return commands.wrapIn(this.name);
      },
      toggleBlockquote: () => ({ commands }) => {
        return commands.toggleWrap(this.name);
      },
      unsetBlockquote: () => ({ commands }) => {
        return commands.lift(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      wrappingInputRule({
        find: inputRegex$4,
        type: this.type
      })
    ];
  }
});
const starInputRegex$1 = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/;
const starPasteRegex$1 = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g;
const underscoreInputRegex$1 = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/;
const underscorePasteRegex$1 = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g;
const Bold = Mark2.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (node4) => node4.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (value) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["strong", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands }) => {
        return commands.setMark(this.name);
      },
      toggleBold: () => ({ commands }) => {
        return commands.toggleMark(this.name);
      },
      unsetBold: () => ({ commands }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      markInputRule({
        find: starInputRegex$1,
        type: this.type
      }),
      markInputRule({
        find: underscoreInputRegex$1,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: starPasteRegex$1,
        type: this.type
      }),
      markPasteRule({
        find: underscorePasteRegex$1,
        type: this.type
      })
    ];
  }
});
const inputRegex$3 = /^\s*([-+*])\s$/;
const BulletList = Node2.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["ul", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands }) => {
        return commands.toggleList(this.name, this.options.itemTypeName);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    return [
      wrappingInputRule({
        find: inputRegex$3,
        type: this.type
      })
    ];
  }
});
const inputRegex$2 = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/;
const pasteRegex$1 = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g;
const Code = Mark2.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: true,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["code", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands }) => {
        return commands.setMark(this.name);
      },
      toggleCode: () => ({ commands }) => {
        return commands.toggleMark(this.name);
      },
      unsetCode: () => ({ commands }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      markInputRule({
        find: inputRegex$2,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: pasteRegex$1,
        type: this.type
      })
    ];
  }
});
const backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
const tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
const CodeBlock = Node2.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: true,
      exitOnArrowDown: true,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: (element) => {
          var _a;
          const { languageClassPrefix } = this.options;
          const classNames = [...((_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList) || []];
          const languages = classNames.filter((className) => className.startsWith(languageClassPrefix)).map((className) => className.replace(languageClassPrefix, ""));
          const language = languages[0];
          if (!language) {
            return null;
          }
          return language;
        },
        renderHTML: (attributes) => {
          if (!attributes.language) {
            return null;
          }
          return {
            class: this.options.languageClassPrefix + attributes.language
          };
        }
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["pre", this.options.HTMLAttributes, ["code", HTMLAttributes, 0]];
  },
  addCommands() {
    return {
      setCodeBlock: (attributes) => ({ commands }) => {
        return commands.setNode(this.name, attributes);
      },
      toggleCodeBlock: (attributes) => ({ commands }) => {
        return commands.toggleNode(this.name, "paragraph", attributes);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      Backspace: () => {
        const { empty: empty2, $anchor } = this.editor.state.selection;
        const isAtStart = $anchor.pos === 1;
        if (!empty2 || $anchor.parent.type.name !== this.name) {
          return false;
        }
        if (isAtStart || !$anchor.parent.textContent.length) {
          return this.editor.commands.clearNodes();
        }
        return false;
      },
      Enter: ({ editor }) => {
        if (!this.options.exitOnTripleEnter) {
          return false;
        }
        const { state } = editor;
        const { selection } = state;
        const { $from, empty: empty2 } = selection;
        if (!empty2 || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");
        if (!isAtEnd || !endsWithDoubleNewline) {
          return false;
        }
        return editor.chain().command(({ tr }) => {
          tr.delete($from.pos - 2, $from.pos);
          return true;
        }).exitCode().run();
      },
      ArrowDown: ({ editor }) => {
        if (!this.options.exitOnArrowDown) {
          return false;
        }
        const { state } = editor;
        const { selection, doc: doc2 } = state;
        const { $from, empty: empty2 } = selection;
        if (!empty2 || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        if (!isAtEnd) {
          return false;
        }
        const after2 = $from.after();
        if (after2 === void 0) {
          return false;
        }
        const nodeAfter = doc2.nodeAt(after2);
        if (nodeAfter) {
          return false;
        }
        return editor.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      textblockTypeInputRule({
        find: backtickInputRegex,
        type: this.type,
        getAttributes: (match2) => ({
          language: match2[1]
        })
      }),
      textblockTypeInputRule({
        find: tildeInputRegex,
        type: this.type,
        getAttributes: (match2) => ({
          language: match2[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (view, event) => {
            if (!event.clipboardData) {
              return false;
            }
            if (this.editor.isActive(this.type.name)) {
              return false;
            }
            const text6 = event.clipboardData.getData("text/plain");
            const vscode = event.clipboardData.getData("vscode-editor-data");
            const vscodeData = vscode ? JSON.parse(vscode) : void 0;
            const language = vscodeData === null || vscodeData === void 0 ? void 0 : vscodeData.mode;
            if (!text6 || !language) {
              return false;
            }
            const { tr } = view.state;
            tr.replaceSelectionWith(this.type.create({ language }));
            tr.setSelection(TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
            tr.insertText(text6.replace(/\r\n?/g, "\n"));
            tr.setMeta("paste", true);
            view.dispatch(tr);
            return true;
          }
        }
      })
    ];
  }
});
const Document = Node2.create({
  name: "doc",
  topNode: true,
  content: "block+"
});
function dropCursor(options) {
  if (options === void 0)
    options = {};
  return new Plugin({
    view: function view(editorView) {
      return new DropCursorView(editorView, options);
    }
  });
}
var DropCursorView = function DropCursorView2(editorView, options) {
  var this$1$1 = this;
  this.editorView = editorView;
  this.width = options.width || 1;
  this.color = options.color || "black";
  this.class = options.class;
  this.cursorPos = null;
  this.element = null;
  this.timeout = null;
  this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(function(name) {
    var handler = function(e) {
      return this$1$1[name](e);
    };
    editorView.dom.addEventListener(name, handler);
    return { name, handler };
  });
};
DropCursorView.prototype.destroy = function destroy4() {
  var this$1$1 = this;
  this.handlers.forEach(function(ref) {
    var name = ref.name;
    var handler = ref.handler;
    return this$1$1.editorView.dom.removeEventListener(name, handler);
  });
};
DropCursorView.prototype.update = function update2(editorView, prevState) {
  if (this.cursorPos != null && prevState.doc != editorView.state.doc) {
    if (this.cursorPos > editorView.state.doc.content.size) {
      this.setCursor(null);
    } else {
      this.updateOverlay();
    }
  }
};
DropCursorView.prototype.setCursor = function setCursor(pos) {
  if (pos == this.cursorPos) {
    return;
  }
  this.cursorPos = pos;
  if (pos == null) {
    this.element.parentNode.removeChild(this.element);
    this.element = null;
  } else {
    this.updateOverlay();
  }
};
DropCursorView.prototype.updateOverlay = function updateOverlay() {
  var $pos = this.editorView.state.doc.resolve(this.cursorPos), rect2;
  if (!$pos.parent.inlineContent) {
    var before2 = $pos.nodeBefore, after2 = $pos.nodeAfter;
    if (before2 || after2) {
      var nodeRect = this.editorView.nodeDOM(this.cursorPos - (before2 ? before2.nodeSize : 0)).getBoundingClientRect();
      var top3 = before2 ? nodeRect.bottom : nodeRect.top;
      if (before2 && after2) {
        top3 = (top3 + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2;
      }
      rect2 = { left: nodeRect.left, right: nodeRect.right, top: top3 - this.width / 2, bottom: top3 + this.width / 2 };
    }
  }
  if (!rect2) {
    var coords = this.editorView.coordsAtPos(this.cursorPos);
    rect2 = { left: coords.left - this.width / 2, right: coords.left + this.width / 2, top: coords.top, bottom: coords.bottom };
  }
  var parent = this.editorView.dom.offsetParent;
  if (!this.element) {
    this.element = parent.appendChild(document.createElement("div"));
    if (this.class) {
      this.element.className = this.class;
    }
    this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none; background-color: " + this.color;
  }
  var parentLeft, parentTop;
  if (!parent || parent == document.body && getComputedStyle(parent).position == "static") {
    parentLeft = -pageXOffset;
    parentTop = -pageYOffset;
  } else {
    var rect$1 = parent.getBoundingClientRect();
    parentLeft = rect$1.left - parent.scrollLeft;
    parentTop = rect$1.top - parent.scrollTop;
  }
  this.element.style.left = rect2.left - parentLeft + "px";
  this.element.style.top = rect2.top - parentTop + "px";
  this.element.style.width = rect2.right - rect2.left + "px";
  this.element.style.height = rect2.bottom - rect2.top + "px";
};
DropCursorView.prototype.scheduleRemoval = function scheduleRemoval(timeout) {
  var this$1$1 = this;
  clearTimeout(this.timeout);
  this.timeout = setTimeout(function() {
    return this$1$1.setCursor(null);
  }, timeout);
};
DropCursorView.prototype.dragover = function dragover(event) {
  if (!this.editorView.editable) {
    return;
  }
  var pos = this.editorView.posAtCoords({ left: event.clientX, top: event.clientY });
  var node4 = pos && pos.inside >= 0 && this.editorView.state.doc.nodeAt(pos.inside);
  var disableDropCursor = node4 && node4.type.spec.disableDropCursor;
  var disabled = typeof disableDropCursor == "function" ? disableDropCursor(this.editorView, pos) : disableDropCursor;
  if (pos && !disabled) {
    var target2 = pos.pos;
    if (this.editorView.dragging && this.editorView.dragging.slice) {
      target2 = dropPoint(this.editorView.state.doc, target2, this.editorView.dragging.slice);
      if (target2 == null) {
        return this.setCursor(null);
      }
    }
    this.setCursor(target2);
    this.scheduleRemoval(5e3);
  }
};
DropCursorView.prototype.dragend = function dragend() {
  this.scheduleRemoval(20);
};
DropCursorView.prototype.drop = function drop() {
  this.scheduleRemoval(20);
};
DropCursorView.prototype.dragleave = function dragleave(event) {
  if (event.target == this.editorView.dom || !this.editorView.dom.contains(event.relatedTarget)) {
    this.setCursor(null);
  }
};
const Dropcursor = Extension.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: null
    };
  },
  addProseMirrorPlugins() {
    return [
      dropCursor(this.options)
    ];
  }
});
var GapCursor = /* @__PURE__ */ function(Selection3) {
  function GapCursor2($pos) {
    Selection3.call(this, $pos, $pos);
  }
  if (Selection3)
    GapCursor2.__proto__ = Selection3;
  GapCursor2.prototype = Object.create(Selection3 && Selection3.prototype);
  GapCursor2.prototype.constructor = GapCursor2;
  GapCursor2.prototype.map = function map16(doc2, mapping) {
    var $pos = doc2.resolve(mapping.map(this.head));
    return GapCursor2.valid($pos) ? new GapCursor2($pos) : Selection3.near($pos);
  };
  GapCursor2.prototype.content = function content2() {
    return Slice.empty;
  };
  GapCursor2.prototype.eq = function eq12(other) {
    return other instanceof GapCursor2 && other.head == this.head;
  };
  GapCursor2.prototype.toJSON = function toJSON7() {
    return { type: "gapcursor", pos: this.head };
  };
  GapCursor2.fromJSON = function fromJSON8(doc2, json) {
    if (typeof json.pos != "number") {
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    }
    return new GapCursor2(doc2.resolve(json.pos));
  };
  GapCursor2.prototype.getBookmark = function getBookmark2() {
    return new GapBookmark(this.anchor);
  };
  GapCursor2.valid = function valid4($pos) {
    var parent = $pos.parent;
    if (parent.isTextblock || !closedBefore($pos) || !closedAfter($pos)) {
      return false;
    }
    var override = parent.type.spec.allowGapCursor;
    if (override != null) {
      return override;
    }
    var deflt = parent.contentMatchAt($pos.index()).defaultType;
    return deflt && deflt.isTextblock;
  };
  GapCursor2.findFrom = function findFrom2($pos, dir, mustMove) {
    search:
      for (; ; ) {
        if (!mustMove && GapCursor2.valid($pos)) {
          return $pos;
        }
        var pos = $pos.pos, next = null;
        for (var d = $pos.depth; ; d--) {
          var parent = $pos.node(d);
          if (dir > 0 ? $pos.indexAfter(d) < parent.childCount : $pos.index(d) > 0) {
            next = parent.child(dir > 0 ? $pos.indexAfter(d) : $pos.index(d) - 1);
            break;
          } else if (d == 0) {
            return null;
          }
          pos += dir;
          var $cur = $pos.doc.resolve(pos);
          if (GapCursor2.valid($cur)) {
            return $cur;
          }
        }
        for (; ; ) {
          var inside = dir > 0 ? next.firstChild : next.lastChild;
          if (!inside) {
            if (next.isAtom && !next.isText && !NodeSelection.isSelectable(next)) {
              $pos = $pos.doc.resolve(pos + next.nodeSize * dir);
              mustMove = false;
              continue search;
            }
            break;
          }
          next = inside;
          pos += dir;
          var $cur$1 = $pos.doc.resolve(pos);
          if (GapCursor2.valid($cur$1)) {
            return $cur$1;
          }
        }
        return null;
      }
  };
  return GapCursor2;
}(Selection);
GapCursor.prototype.visible = false;
Selection.jsonID("gapcursor", GapCursor);
var GapBookmark = function GapBookmark2(pos) {
  this.pos = pos;
};
GapBookmark.prototype.map = function map13(mapping) {
  return new GapBookmark(mapping.map(this.pos));
};
GapBookmark.prototype.resolve = function resolve6(doc2) {
  var $pos = doc2.resolve(this.pos);
  return GapCursor.valid($pos) ? new GapCursor($pos) : Selection.near($pos);
};
function closedBefore($pos) {
  for (var d = $pos.depth; d >= 0; d--) {
    var index2 = $pos.index(d), parent = $pos.node(d);
    if (index2 == 0) {
      if (parent.type.spec.isolating) {
        return true;
      }
      continue;
    }
    for (var before2 = parent.child(index2 - 1); ; before2 = before2.lastChild) {
      if (before2.childCount == 0 && !before2.inlineContent || before2.isAtom || before2.type.spec.isolating) {
        return true;
      }
      if (before2.inlineContent) {
        return false;
      }
    }
  }
  return true;
}
function closedAfter($pos) {
  for (var d = $pos.depth; d >= 0; d--) {
    var index2 = $pos.indexAfter(d), parent = $pos.node(d);
    if (index2 == parent.childCount) {
      if (parent.type.spec.isolating) {
        return true;
      }
      continue;
    }
    for (var after2 = parent.child(index2); ; after2 = after2.firstChild) {
      if (after2.childCount == 0 && !after2.inlineContent || after2.isAtom || after2.type.spec.isolating) {
        return true;
      }
      if (after2.inlineContent) {
        return false;
      }
    }
  }
  return true;
}
var gapCursor = function() {
  return new Plugin({
    props: {
      decorations: drawGapCursor,
      createSelectionBetween: function createSelectionBetween(_view, $anchor, $head) {
        if ($anchor.pos == $head.pos && GapCursor.valid($head)) {
          return new GapCursor($head);
        }
      },
      handleClick,
      handleKeyDown
    }
  });
};
var handleKeyDown = keydownHandler({
  "ArrowLeft": arrow("horiz", -1),
  "ArrowRight": arrow("horiz", 1),
  "ArrowUp": arrow("vert", -1),
  "ArrowDown": arrow("vert", 1)
});
function arrow(axis, dir) {
  var dirStr = axis == "vert" ? dir > 0 ? "down" : "up" : dir > 0 ? "right" : "left";
  return function(state, dispatch2, view) {
    var sel = state.selection;
    var $start = dir > 0 ? sel.$to : sel.$from, mustMove = sel.empty;
    if (sel instanceof TextSelection) {
      if (!view.endOfTextblock(dirStr) || $start.depth == 0) {
        return false;
      }
      mustMove = false;
      $start = state.doc.resolve(dir > 0 ? $start.after() : $start.before());
    }
    var $found = GapCursor.findFrom($start, dir, mustMove);
    if (!$found) {
      return false;
    }
    if (dispatch2) {
      dispatch2(state.tr.setSelection(new GapCursor($found)));
    }
    return true;
  };
}
function handleClick(view, pos, event) {
  if (!view.editable) {
    return false;
  }
  var $pos = view.state.doc.resolve(pos);
  if (!GapCursor.valid($pos)) {
    return false;
  }
  var ref = view.posAtCoords({ left: event.clientX, top: event.clientY });
  var inside = ref.inside;
  if (inside > -1 && NodeSelection.isSelectable(view.state.doc.nodeAt(inside))) {
    return false;
  }
  view.dispatch(view.state.tr.setSelection(new GapCursor($pos)));
  return true;
}
function drawGapCursor(state) {
  if (!(state.selection instanceof GapCursor)) {
    return null;
  }
  var node4 = document.createElement("div");
  node4.className = "ProseMirror-gapcursor";
  return DecorationSet.create(state.doc, [Decoration.widget(state.selection.head, node4, { key: "gapcursor" })]);
}
const Gapcursor = Extension.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      gapCursor()
    ];
  },
  extendNodeSchema(extension) {
    var _a;
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    return {
      allowGapCursor: (_a = callOrReturn(getExtensionField(extension, "allowGapCursor", context))) !== null && _a !== void 0 ? _a : null
    };
  }
});
const HardBreak = Node2.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: true,
      HTMLAttributes: {}
    };
  },
  inline: true,
  group: "inline",
  selectable: false,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["br", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },
  renderText() {
    return "\n";
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands, chain, state, editor }) => {
        return commands.first([
          () => commands.exitCode(),
          () => commands.command(() => {
            const { selection, storedMarks } = state;
            if (selection.$from.parent.type.spec.isolating) {
              return false;
            }
            const { keepMarks } = this.options;
            const { splittableMarks } = editor.extensionManager;
            const marks2 = storedMarks || selection.$to.parentOffset && selection.$from.marks();
            return chain().insertContent({ type: this.name }).command(({ tr, dispatch: dispatch2 }) => {
              if (dispatch2 && marks2 && keepMarks) {
                const filteredMarks = marks2.filter((mark3) => splittableMarks.includes(mark3.type.name));
                tr.ensureMarks(filteredMarks);
              }
              return true;
            }).run();
          })
        ]);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
});
const Heading = Node2.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: true,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: false
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((level) => ({
      tag: `h${level}`,
      attrs: { level }
    }));
  },
  renderHTML({ node: node4, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node4.attrs.level);
    const level = hasLevel ? node4.attrs.level : this.options.levels[0];
    return [`h${level}`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setHeading: (attributes) => ({ commands }) => {
        if (!this.options.levels.includes(attributes.level)) {
          return false;
        }
        return commands.setNode(this.name, attributes);
      },
      toggleHeading: (attributes) => ({ commands }) => {
        if (!this.options.levels.includes(attributes.level)) {
          return false;
        }
        return commands.toggleNode(this.name, "paragraph", attributes);
      }
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((items, level) => __spreadValues(__spreadValues({}, items), {
      [`Mod-Alt-${level}`]: () => this.editor.commands.toggleHeading({ level })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((level) => {
      return textblockTypeInputRule({
        find: new RegExp(`^(#{1,${level}})\\s$`),
        type: this.type,
        getAttributes: {
          level
        }
      });
    });
  }
});
var GOOD_LEAF_SIZE = 200;
var RopeSequence = function RopeSequence2() {
};
RopeSequence.prototype.append = function append2(other) {
  if (!other.length) {
    return this;
  }
  other = RopeSequence.from(other);
  return !this.length && other || other.length < GOOD_LEAF_SIZE && this.leafAppend(other) || this.length < GOOD_LEAF_SIZE && other.leafPrepend(this) || this.appendInner(other);
};
RopeSequence.prototype.prepend = function prepend(other) {
  if (!other.length) {
    return this;
  }
  return RopeSequence.from(other).append(this);
};
RopeSequence.prototype.appendInner = function appendInner(other) {
  return new Append(this, other);
};
RopeSequence.prototype.slice = function slice3(from4, to) {
  if (from4 === void 0)
    from4 = 0;
  if (to === void 0)
    to = this.length;
  if (from4 >= to) {
    return RopeSequence.empty;
  }
  return this.sliceInner(Math.max(0, from4), Math.min(this.length, to));
};
RopeSequence.prototype.get = function get2(i) {
  if (i < 0 || i >= this.length) {
    return void 0;
  }
  return this.getInner(i);
};
RopeSequence.prototype.forEach = function forEach5(f, from4, to) {
  if (from4 === void 0)
    from4 = 0;
  if (to === void 0)
    to = this.length;
  if (from4 <= to) {
    this.forEachInner(f, from4, to, 0);
  } else {
    this.forEachInvertedInner(f, from4, to, 0);
  }
};
RopeSequence.prototype.map = function map14(f, from4, to) {
  if (from4 === void 0)
    from4 = 0;
  if (to === void 0)
    to = this.length;
  var result2 = [];
  this.forEach(function(elt, i) {
    return result2.push(f(elt, i));
  }, from4, to);
  return result2;
};
RopeSequence.from = function from3(values) {
  if (values instanceof RopeSequence) {
    return values;
  }
  return values && values.length ? new Leaf(values) : RopeSequence.empty;
};
var Leaf = /* @__PURE__ */ function(RopeSequence3) {
  function Leaf2(values) {
    RopeSequence3.call(this);
    this.values = values;
  }
  if (RopeSequence3)
    Leaf2.__proto__ = RopeSequence3;
  Leaf2.prototype = Object.create(RopeSequence3 && RopeSequence3.prototype);
  Leaf2.prototype.constructor = Leaf2;
  var prototypeAccessors2 = { length: { configurable: true }, depth: { configurable: true } };
  Leaf2.prototype.flatten = function flatten() {
    return this.values;
  };
  Leaf2.prototype.sliceInner = function sliceInner(from4, to) {
    if (from4 == 0 && to == this.length) {
      return this;
    }
    return new Leaf2(this.values.slice(from4, to));
  };
  Leaf2.prototype.getInner = function getInner(i) {
    return this.values[i];
  };
  Leaf2.prototype.forEachInner = function forEachInner(f, from4, to, start3) {
    for (var i = from4; i < to; i++) {
      if (f(this.values[i], start3 + i) === false) {
        return false;
      }
    }
  };
  Leaf2.prototype.forEachInvertedInner = function forEachInvertedInner(f, from4, to, start3) {
    for (var i = from4 - 1; i >= to; i--) {
      if (f(this.values[i], start3 + i) === false) {
        return false;
      }
    }
  };
  Leaf2.prototype.leafAppend = function leafAppend(other) {
    if (this.length + other.length <= GOOD_LEAF_SIZE) {
      return new Leaf2(this.values.concat(other.flatten()));
    }
  };
  Leaf2.prototype.leafPrepend = function leafPrepend(other) {
    if (this.length + other.length <= GOOD_LEAF_SIZE) {
      return new Leaf2(other.flatten().concat(this.values));
    }
  };
  prototypeAccessors2.length.get = function() {
    return this.values.length;
  };
  prototypeAccessors2.depth.get = function() {
    return 0;
  };
  Object.defineProperties(Leaf2.prototype, prototypeAccessors2);
  return Leaf2;
}(RopeSequence);
RopeSequence.empty = new Leaf([]);
var Append = /* @__PURE__ */ function(RopeSequence3) {
  function Append2(left, right) {
    RopeSequence3.call(this);
    this.left = left;
    this.right = right;
    this.length = left.length + right.length;
    this.depth = Math.max(left.depth, right.depth) + 1;
  }
  if (RopeSequence3)
    Append2.__proto__ = RopeSequence3;
  Append2.prototype = Object.create(RopeSequence3 && RopeSequence3.prototype);
  Append2.prototype.constructor = Append2;
  Append2.prototype.flatten = function flatten() {
    return this.left.flatten().concat(this.right.flatten());
  };
  Append2.prototype.getInner = function getInner(i) {
    return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
  };
  Append2.prototype.forEachInner = function forEachInner(f, from4, to, start3) {
    var leftLen = this.left.length;
    if (from4 < leftLen && this.left.forEachInner(f, from4, Math.min(to, leftLen), start3) === false) {
      return false;
    }
    if (to > leftLen && this.right.forEachInner(f, Math.max(from4 - leftLen, 0), Math.min(this.length, to) - leftLen, start3 + leftLen) === false) {
      return false;
    }
  };
  Append2.prototype.forEachInvertedInner = function forEachInvertedInner(f, from4, to, start3) {
    var leftLen = this.left.length;
    if (from4 > leftLen && this.right.forEachInvertedInner(f, from4 - leftLen, Math.max(to, leftLen) - leftLen, start3 + leftLen) === false) {
      return false;
    }
    if (to < leftLen && this.left.forEachInvertedInner(f, Math.min(from4, leftLen), to, start3) === false) {
      return false;
    }
  };
  Append2.prototype.sliceInner = function sliceInner(from4, to) {
    if (from4 == 0 && to == this.length) {
      return this;
    }
    var leftLen = this.left.length;
    if (to <= leftLen) {
      return this.left.slice(from4, to);
    }
    if (from4 >= leftLen) {
      return this.right.slice(from4 - leftLen, to - leftLen);
    }
    return this.left.slice(from4, leftLen).append(this.right.slice(0, to - leftLen));
  };
  Append2.prototype.leafAppend = function leafAppend(other) {
    var inner = this.right.leafAppend(other);
    if (inner) {
      return new Append2(this.left, inner);
    }
  };
  Append2.prototype.leafPrepend = function leafPrepend(other) {
    var inner = this.left.leafPrepend(other);
    if (inner) {
      return new Append2(inner, this.right);
    }
  };
  Append2.prototype.appendInner = function appendInner2(other) {
    if (this.left.depth >= Math.max(this.right.depth, other.depth) + 1) {
      return new Append2(this.left, new Append2(this.right, other));
    }
    return new Append2(this, other);
  };
  return Append2;
}(RopeSequence);
var ropeSequence = RopeSequence;
var max_empty_items = 500;
var Branch = function Branch2(items, eventCount) {
  this.items = items;
  this.eventCount = eventCount;
};
Branch.prototype.popEvent = function popEvent(state, preserveItems) {
  var this$1$1 = this;
  if (this.eventCount == 0) {
    return null;
  }
  var end2 = this.items.length;
  for (; ; end2--) {
    var next = this.items.get(end2 - 1);
    if (next.selection) {
      --end2;
      break;
    }
  }
  var remap, mapFrom;
  if (preserveItems) {
    remap = this.remapping(end2, this.items.length);
    mapFrom = remap.maps.length;
  }
  var transform = state.tr;
  var selection, remaining;
  var addAfter = [], addBefore = [];
  this.items.forEach(function(item, i) {
    if (!item.step) {
      if (!remap) {
        remap = this$1$1.remapping(end2, i + 1);
        mapFrom = remap.maps.length;
      }
      mapFrom--;
      addBefore.push(item);
      return;
    }
    if (remap) {
      addBefore.push(new Item(item.map));
      var step2 = item.step.map(remap.slice(mapFrom)), map16;
      if (step2 && transform.maybeStep(step2).doc) {
        map16 = transform.mapping.maps[transform.mapping.maps.length - 1];
        addAfter.push(new Item(map16, null, null, addAfter.length + addBefore.length));
      }
      mapFrom--;
      if (map16) {
        remap.appendMap(map16, mapFrom);
      }
    } else {
      transform.maybeStep(item.step);
    }
    if (item.selection) {
      selection = remap ? item.selection.map(remap.slice(mapFrom)) : item.selection;
      remaining = new Branch(this$1$1.items.slice(0, end2).append(addBefore.reverse().concat(addAfter)), this$1$1.eventCount - 1);
      return false;
    }
  }, this.items.length, 0);
  return { remaining, transform, selection };
};
Branch.prototype.addTransform = function addTransform(transform, selection, histOptions, preserveItems) {
  var newItems = [], eventCount = this.eventCount;
  var oldItems = this.items, lastItem = !preserveItems && oldItems.length ? oldItems.get(oldItems.length - 1) : null;
  for (var i = 0; i < transform.steps.length; i++) {
    var step2 = transform.steps[i].invert(transform.docs[i]);
    var item = new Item(transform.mapping.maps[i], step2, selection), merged = void 0;
    if (merged = lastItem && lastItem.merge(item)) {
      item = merged;
      if (i) {
        newItems.pop();
      } else {
        oldItems = oldItems.slice(0, oldItems.length - 1);
      }
    }
    newItems.push(item);
    if (selection) {
      eventCount++;
      selection = null;
    }
    if (!preserveItems) {
      lastItem = item;
    }
  }
  var overflow = eventCount - histOptions.depth;
  if (overflow > DEPTH_OVERFLOW) {
    oldItems = cutOffEvents(oldItems, overflow);
    eventCount -= overflow;
  }
  return new Branch(oldItems.append(newItems), eventCount);
};
Branch.prototype.remapping = function remapping(from4, to) {
  var maps = new Mapping();
  this.items.forEach(function(item, i) {
    var mirrorPos = item.mirrorOffset != null && i - item.mirrorOffset >= from4 ? maps.maps.length - item.mirrorOffset : null;
    maps.appendMap(item.map, mirrorPos);
  }, from4, to);
  return maps;
};
Branch.prototype.addMaps = function addMaps(array) {
  if (this.eventCount == 0) {
    return this;
  }
  return new Branch(this.items.append(array.map(function(map16) {
    return new Item(map16);
  })), this.eventCount);
};
Branch.prototype.rebased = function rebased(rebasedTransform, rebasedCount) {
  if (!this.eventCount) {
    return this;
  }
  var rebasedItems = [], start3 = Math.max(0, this.items.length - rebasedCount);
  var mapping = rebasedTransform.mapping;
  var newUntil = rebasedTransform.steps.length;
  var eventCount = this.eventCount;
  this.items.forEach(function(item) {
    if (item.selection) {
      eventCount--;
    }
  }, start3);
  var iRebased = rebasedCount;
  this.items.forEach(function(item) {
    var pos = mapping.getMirror(--iRebased);
    if (pos == null) {
      return;
    }
    newUntil = Math.min(newUntil, pos);
    var map16 = mapping.maps[pos];
    if (item.step) {
      var step2 = rebasedTransform.steps[pos].invert(rebasedTransform.docs[pos]);
      var selection = item.selection && item.selection.map(mapping.slice(iRebased + 1, pos));
      if (selection) {
        eventCount++;
      }
      rebasedItems.push(new Item(map16, step2, selection));
    } else {
      rebasedItems.push(new Item(map16));
    }
  }, start3);
  var newMaps = [];
  for (var i = rebasedCount; i < newUntil; i++) {
    newMaps.push(new Item(mapping.maps[i]));
  }
  var items = this.items.slice(0, start3).append(newMaps).append(rebasedItems);
  var branch = new Branch(items, eventCount);
  if (branch.emptyItemCount() > max_empty_items) {
    branch = branch.compress(this.items.length - rebasedItems.length);
  }
  return branch;
};
Branch.prototype.emptyItemCount = function emptyItemCount() {
  var count = 0;
  this.items.forEach(function(item) {
    if (!item.step) {
      count++;
    }
  });
  return count;
};
Branch.prototype.compress = function compress(upto) {
  if (upto === void 0)
    upto = this.items.length;
  var remap = this.remapping(0, upto), mapFrom = remap.maps.length;
  var items = [], events = 0;
  this.items.forEach(function(item, i) {
    if (i >= upto) {
      items.push(item);
      if (item.selection) {
        events++;
      }
    } else if (item.step) {
      var step2 = item.step.map(remap.slice(mapFrom)), map16 = step2 && step2.getMap();
      mapFrom--;
      if (map16) {
        remap.appendMap(map16, mapFrom);
      }
      if (step2) {
        var selection = item.selection && item.selection.map(remap.slice(mapFrom));
        if (selection) {
          events++;
        }
        var newItem = new Item(map16.invert(), step2, selection), merged, last = items.length - 1;
        if (merged = items.length && items[last].merge(newItem)) {
          items[last] = merged;
        } else {
          items.push(newItem);
        }
      }
    } else if (item.map) {
      mapFrom--;
    }
  }, this.items.length, 0);
  return new Branch(ropeSequence.from(items.reverse()), events);
};
Branch.empty = new Branch(ropeSequence.empty, 0);
function cutOffEvents(items, n) {
  var cutPoint;
  items.forEach(function(item, i) {
    if (item.selection && n-- == 0) {
      cutPoint = i;
      return false;
    }
  });
  return items.slice(cutPoint);
}
var Item = function Item2(map16, step2, selection, mirrorOffset) {
  this.map = map16;
  this.step = step2;
  this.selection = selection;
  this.mirrorOffset = mirrorOffset;
};
Item.prototype.merge = function merge2(other) {
  if (this.step && other.step && !other.selection) {
    var step2 = other.step.merge(this.step);
    if (step2) {
      return new Item(step2.getMap().invert(), step2, this.selection);
    }
  }
};
var HistoryState = function HistoryState2(done2, undone, prevRanges, prevTime) {
  this.done = done2;
  this.undone = undone;
  this.prevRanges = prevRanges;
  this.prevTime = prevTime;
};
var DEPTH_OVERFLOW = 20;
function applyTransaction2(history2, state, tr, options) {
  var historyTr = tr.getMeta(historyKey), rebased2;
  if (historyTr) {
    return historyTr.historyState;
  }
  if (tr.getMeta(closeHistoryKey)) {
    history2 = new HistoryState(history2.done, history2.undone, null, 0);
  }
  var appended = tr.getMeta("appendedTransaction");
  if (tr.steps.length == 0) {
    return history2;
  } else if (appended && appended.getMeta(historyKey)) {
    if (appended.getMeta(historyKey).redo) {
      return new HistoryState(history2.done.addTransform(tr, null, options, mustPreserveItems(state)), history2.undone, rangesFor(tr.mapping.maps[tr.steps.length - 1]), history2.prevTime);
    } else {
      return new HistoryState(history2.done, history2.undone.addTransform(tr, null, options, mustPreserveItems(state)), null, history2.prevTime);
    }
  } else if (tr.getMeta("addToHistory") !== false && !(appended && appended.getMeta("addToHistory") === false)) {
    var newGroup = history2.prevTime == 0 || !appended && (history2.prevTime < (tr.time || 0) - options.newGroupDelay || !isAdjacentTo(tr, history2.prevRanges));
    var prevRanges = appended ? mapRanges(history2.prevRanges, tr.mapping) : rangesFor(tr.mapping.maps[tr.steps.length - 1]);
    return new HistoryState(history2.done.addTransform(tr, newGroup ? state.selection.getBookmark() : null, options, mustPreserveItems(state)), Branch.empty, prevRanges, tr.time);
  } else if (rebased2 = tr.getMeta("rebased")) {
    return new HistoryState(history2.done.rebased(tr, rebased2), history2.undone.rebased(tr, rebased2), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime);
  } else {
    return new HistoryState(history2.done.addMaps(tr.mapping.maps), history2.undone.addMaps(tr.mapping.maps), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime);
  }
}
function isAdjacentTo(transform, prevRanges) {
  if (!prevRanges) {
    return false;
  }
  if (!transform.docChanged) {
    return true;
  }
  var adjacent = false;
  transform.mapping.maps[0].forEach(function(start3, end2) {
    for (var i = 0; i < prevRanges.length; i += 2) {
      if (start3 <= prevRanges[i + 1] && end2 >= prevRanges[i]) {
        adjacent = true;
      }
    }
  });
  return adjacent;
}
function rangesFor(map16) {
  var result2 = [];
  map16.forEach(function(_from, _to, from4, to) {
    return result2.push(from4, to);
  });
  return result2;
}
function mapRanges(ranges, mapping) {
  if (!ranges) {
    return null;
  }
  var result2 = [];
  for (var i = 0; i < ranges.length; i += 2) {
    var from4 = mapping.map(ranges[i], 1), to = mapping.map(ranges[i + 1], -1);
    if (from4 <= to) {
      result2.push(from4, to);
    }
  }
  return result2;
}
function histTransaction(history2, state, dispatch2, redo2) {
  var preserveItems = mustPreserveItems(state), histOptions = historyKey.get(state).spec.config;
  var pop = (redo2 ? history2.undone : history2.done).popEvent(state, preserveItems);
  if (!pop) {
    return;
  }
  var selection = pop.selection.resolve(pop.transform.doc);
  var added = (redo2 ? history2.done : history2.undone).addTransform(pop.transform, state.selection.getBookmark(), histOptions, preserveItems);
  var newHist = new HistoryState(redo2 ? added : pop.remaining, redo2 ? pop.remaining : added, null, 0);
  dispatch2(pop.transform.setSelection(selection).setMeta(historyKey, { redo: redo2, historyState: newHist }).scrollIntoView());
}
var cachedPreserveItems = false, cachedPreserveItemsPlugins = null;
function mustPreserveItems(state) {
  var plugins = state.plugins;
  if (cachedPreserveItemsPlugins != plugins) {
    cachedPreserveItems = false;
    cachedPreserveItemsPlugins = plugins;
    for (var i = 0; i < plugins.length; i++) {
      if (plugins[i].spec.historyPreserveItems) {
        cachedPreserveItems = true;
        break;
      }
    }
  }
  return cachedPreserveItems;
}
var historyKey = new PluginKey("history");
var closeHistoryKey = new PluginKey("closeHistory");
function history(config2) {
  config2 = {
    depth: config2 && config2.depth || 100,
    newGroupDelay: config2 && config2.newGroupDelay || 500
  };
  return new Plugin({
    key: historyKey,
    state: {
      init: function init6() {
        return new HistoryState(Branch.empty, Branch.empty, null, 0);
      },
      apply: function apply8(tr, hist, state) {
        return applyTransaction2(hist, state, tr, config2);
      }
    },
    config: config2,
    props: {
      handleDOMEvents: {
        beforeinput: function beforeinput(view, e) {
          var handled = e.inputType == "historyUndo" ? undo(view.state, view.dispatch) : e.inputType == "historyRedo" ? redo(view.state, view.dispatch) : false;
          if (handled) {
            e.preventDefault();
          }
          return handled;
        }
      }
    }
  });
}
function undo(state, dispatch2) {
  var hist = historyKey.getState(state);
  if (!hist || hist.done.eventCount == 0) {
    return false;
  }
  if (dispatch2) {
    histTransaction(hist, state, dispatch2, false);
  }
  return true;
}
function redo(state, dispatch2) {
  var hist = historyKey.getState(state);
  if (!hist || hist.undone.eventCount == 0) {
    return false;
  }
  if (dispatch2) {
    histTransaction(hist, state, dispatch2, true);
  }
  return true;
}
const History = Extension.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state, dispatch: dispatch2 }) => {
        return undo(state, dispatch2);
      },
      redo: () => ({ state, dispatch: dispatch2 }) => {
        return redo(state, dispatch2);
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      history(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-\u044F": () => this.editor.commands.undo(),
      "Shift-Mod-\u044F": () => this.editor.commands.redo()
    };
  }
});
const HorizontalRule = Node2.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [
      { tag: "hr" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["hr", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain }) => {
        return chain().insertContent({ type: this.name }).command(({ tr, dispatch: dispatch2 }) => {
          var _a;
          if (dispatch2) {
            const { parent, pos } = tr.selection.$from;
            const posAfter = pos + 1;
            const nodeAfter = tr.doc.nodeAt(posAfter);
            if (nodeAfter) {
              tr.setSelection(TextSelection.create(tr.doc, posAfter));
            } else {
              const node4 = (_a = parent.type.contentMatch.defaultType) === null || _a === void 0 ? void 0 : _a.create();
              if (node4) {
                tr.insert(posAfter, node4);
                tr.setSelection(TextSelection.create(tr.doc, posAfter));
              }
            }
            tr.scrollIntoView();
          }
          return true;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      nodeInputRule({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
});
const starInputRegex = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/;
const starPasteRegex = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g;
const underscoreInputRegex = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/;
const underscorePasteRegex = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g;
const Italic = Mark2.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (node4) => node4.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["em", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands }) => {
        return commands.setMark(this.name);
      },
      toggleItalic: () => ({ commands }) => {
        return commands.toggleMark(this.name);
      },
      unsetItalic: () => ({ commands }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      markInputRule({
        find: starInputRegex,
        type: this.type
      }),
      markInputRule({
        find: underscoreInputRegex,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: starPasteRegex,
        type: this.type
      }),
      markPasteRule({
        find: underscorePasteRegex,
        type: this.type
      })
    ];
  }
});
const ListItem = Node2.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "paragraph block*",
  defining: true,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["li", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
});
const inputRegex$1 = /^(\d+)\.\s$/;
const OrderedList = Node2.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (element) => {
          return element.hasAttribute("start") ? parseInt(element.getAttribute("start") || "", 10) : 1;
        }
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    const _a = HTMLAttributes, { start: start3 } = _a, attributesWithoutStart = __objRest(_a, ["start"]);
    return start3 === 1 ? ["ol", mergeAttributes(this.options.HTMLAttributes, attributesWithoutStart), 0] : ["ol", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands }) => {
        return commands.toggleList(this.name, this.options.itemTypeName);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    return [
      wrappingInputRule({
        find: inputRegex$1,
        type: this.type,
        getAttributes: (match2) => ({ start: +match2[1] }),
        joinPredicate: (match2, node4) => node4.childCount + node4.attrs.start === +match2[1]
      })
    ];
  }
});
const Paragraph = Node2.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["p", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands }) => {
        return commands.setNode(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
});
const inputRegex = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/;
const pasteRegex = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g;
const Strike = Mark2.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: false,
        getAttrs: (style2) => style2.includes("line-through") ? {} : false
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["s", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands }) => {
        return commands.setMark(this.name);
      },
      toggleStrike: () => ({ commands }) => {
        return commands.toggleMark(this.name);
      },
      unsetStrike: () => ({ commands }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-x": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      markInputRule({
        find: inputRegex,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: pasteRegex,
        type: this.type
      })
    ];
  }
});
const Text$2 = Node2.create({
  name: "text",
  group: "inline"
});
const StarterKit = Extension.create({
  name: "starterKit",
  addExtensions() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const extensions2 = [];
    if (this.options.blockquote !== false) {
      extensions2.push(Blockquote.configure((_a = this.options) === null || _a === void 0 ? void 0 : _a.blockquote));
    }
    if (this.options.bold !== false) {
      extensions2.push(Bold.configure((_b = this.options) === null || _b === void 0 ? void 0 : _b.bold));
    }
    if (this.options.bulletList !== false) {
      extensions2.push(BulletList.configure((_c = this.options) === null || _c === void 0 ? void 0 : _c.bulletList));
    }
    if (this.options.code !== false) {
      extensions2.push(Code.configure((_d = this.options) === null || _d === void 0 ? void 0 : _d.code));
    }
    if (this.options.codeBlock !== false) {
      extensions2.push(CodeBlock.configure((_e = this.options) === null || _e === void 0 ? void 0 : _e.codeBlock));
    }
    if (this.options.document !== false) {
      extensions2.push(Document.configure((_f = this.options) === null || _f === void 0 ? void 0 : _f.document));
    }
    if (this.options.dropcursor !== false) {
      extensions2.push(Dropcursor.configure((_g = this.options) === null || _g === void 0 ? void 0 : _g.dropcursor));
    }
    if (this.options.gapcursor !== false) {
      extensions2.push(Gapcursor.configure((_h = this.options) === null || _h === void 0 ? void 0 : _h.gapcursor));
    }
    if (this.options.hardBreak !== false) {
      extensions2.push(HardBreak.configure((_j = this.options) === null || _j === void 0 ? void 0 : _j.hardBreak));
    }
    if (this.options.heading !== false) {
      extensions2.push(Heading.configure((_k = this.options) === null || _k === void 0 ? void 0 : _k.heading));
    }
    if (this.options.history !== false) {
      extensions2.push(History.configure((_l = this.options) === null || _l === void 0 ? void 0 : _l.history));
    }
    if (this.options.horizontalRule !== false) {
      extensions2.push(HorizontalRule.configure((_m = this.options) === null || _m === void 0 ? void 0 : _m.horizontalRule));
    }
    if (this.options.italic !== false) {
      extensions2.push(Italic.configure((_o = this.options) === null || _o === void 0 ? void 0 : _o.italic));
    }
    if (this.options.listItem !== false) {
      extensions2.push(ListItem.configure((_p = this.options) === null || _p === void 0 ? void 0 : _p.listItem));
    }
    if (this.options.orderedList !== false) {
      extensions2.push(OrderedList.configure((_q = this.options) === null || _q === void 0 ? void 0 : _q.orderedList));
    }
    if (this.options.paragraph !== false) {
      extensions2.push(Paragraph.configure((_r = this.options) === null || _r === void 0 ? void 0 : _r.paragraph));
    }
    if (this.options.strike !== false) {
      extensions2.push(Strike.configure((_s = this.options) === null || _s === void 0 ? void 0 : _s.strike));
    }
    if (this.options.text !== false) {
      extensions2.push(Text$2.configure((_t = this.options) === null || _t === void 0 ? void 0 : _t.text));
    }
    return extensions2;
  }
});
function State(token2) {
  this.j = {};
  this.jr = [];
  this.jd = null;
  this.t = token2;
}
State.prototype = {
  accepts: function accepts() {
    return !!this.t;
  },
  tt: function tt(input, tokenOrState) {
    if (tokenOrState && tokenOrState.j) {
      this.j[input] = tokenOrState;
      return tokenOrState;
    }
    var token2 = tokenOrState;
    var nextState = this.j[input];
    if (nextState) {
      if (token2) {
        nextState.t = token2;
      }
      return nextState;
    }
    nextState = makeState();
    var templateState = takeT(this, input);
    if (templateState) {
      Object.assign(nextState.j, templateState.j);
      nextState.jr.append(templateState.jr);
      nextState.jr = templateState.jd;
      nextState.t = token2 || templateState.t;
    } else {
      nextState.t = token2;
    }
    this.j[input] = nextState;
    return nextState;
  }
};
var makeState = function makeState2() {
  return new State();
};
var makeAcceptingState = function makeAcceptingState2(token2) {
  return new State(token2);
};
var makeT = function makeT2(startState, input, nextState) {
  if (!startState.j[input]) {
    startState.j[input] = nextState;
  }
};
var makeRegexT = function makeRegexT2(startState, regex2, nextState) {
  startState.jr.push([regex2, nextState]);
};
var takeT = function takeT2(state, input) {
  var nextState = state.j[input];
  if (nextState) {
    return nextState;
  }
  for (var i = 0; i < state.jr.length; i++) {
    var regex2 = state.jr[i][0];
    var _nextState = state.jr[i][1];
    if (regex2.test(input)) {
      return _nextState;
    }
  }
  return state.jd;
};
var makeMultiT = function makeMultiT2(startState, chars, nextState) {
  for (var i = 0; i < chars.length; i++) {
    makeT(startState, chars[i], nextState);
  }
};
var makeBatchT = function makeBatchT2(startState, transitions) {
  for (var i = 0; i < transitions.length; i++) {
    var input = transitions[i][0];
    var nextState = transitions[i][1];
    makeT(startState, input, nextState);
  }
};
var makeChainT = function makeChainT2(state, str, endState, defaultStateFactory) {
  var i = 0, len = str.length, nextState;
  while (i < len && (nextState = state.j[str[i]])) {
    state = nextState;
    i++;
  }
  if (i >= len) {
    return [];
  }
  while (i < len - 1) {
    nextState = defaultStateFactory();
    makeT(state, str[i], nextState);
    state = nextState;
    i++;
  }
  makeT(state, str[len - 1], endState);
};
var DOMAIN = "DOMAIN";
var LOCALHOST = "LOCALHOST";
var TLD = "TLD";
var NUM = "NUM";
var PROTOCOL = "PROTOCOL";
var MAILTO = "MAILTO";
var WS = "WS";
var NL = "NL";
var OPENBRACE = "OPENBRACE";
var OPENBRACKET = "OPENBRACKET";
var OPENANGLEBRACKET = "OPENANGLEBRACKET";
var OPENPAREN = "OPENPAREN";
var CLOSEBRACE = "CLOSEBRACE";
var CLOSEBRACKET = "CLOSEBRACKET";
var CLOSEANGLEBRACKET = "CLOSEANGLEBRACKET";
var CLOSEPAREN = "CLOSEPAREN";
var AMPERSAND = "AMPERSAND";
var APOSTROPHE$1 = "APOSTROPHE";
var ASTERISK = "ASTERISK";
var AT = "AT";
var BACKSLASH = "BACKSLASH";
var BACKTICK = "BACKTICK";
var CARET = "CARET";
var COLON = "COLON";
var COMMA = "COMMA";
var DOLLAR = "DOLLAR";
var DOT = "DOT";
var EQUALS = "EQUALS";
var EXCLAMATION = "EXCLAMATION";
var HYPHEN = "HYPHEN";
var PERCENT = "PERCENT";
var PIPE = "PIPE";
var PLUS = "PLUS";
var POUND = "POUND";
var QUERY = "QUERY";
var QUOTE = "QUOTE";
var SEMI = "SEMI";
var SLASH = "SLASH";
var TILDE = "TILDE";
var UNDERSCORE = "UNDERSCORE";
var SYM = "SYM";
var text$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DOMAIN,
  LOCALHOST,
  TLD,
  NUM,
  PROTOCOL,
  MAILTO,
  WS,
  NL,
  OPENBRACE,
  OPENBRACKET,
  OPENANGLEBRACKET,
  OPENPAREN,
  CLOSEBRACE,
  CLOSEBRACKET,
  CLOSEANGLEBRACKET,
  CLOSEPAREN,
  AMPERSAND,
  APOSTROPHE: APOSTROPHE$1,
  ASTERISK,
  AT,
  BACKSLASH,
  BACKTICK,
  CARET,
  COLON,
  COMMA,
  DOLLAR,
  DOT,
  EQUALS,
  EXCLAMATION,
  HYPHEN,
  PERCENT,
  PIPE,
  PLUS,
  POUND,
  QUERY,
  QUOTE,
  SEMI,
  SLASH,
  TILDE,
  UNDERSCORE,
  SYM
});
var tlds = "aaa aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am amazon americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case cash casino cat catering catholic cba cbn cbre cbs cc cd center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy spa space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw verm\xF6gensberater-ctb verm\xF6gensberatung-pwb \u03B5\u03BB \u03B5\u03C5 \u0431\u0433 \u0431\u0435\u043B \u0434\u0435\u0442\u0438 \u0435\u044E \u043A\u0430\u0442\u043E\u043B\u0438\u043A \u043A\u043E\u043C \u049B\u0430\u0437 \u043C\u043A\u0434 \u043C\u043E\u043D \u043C\u043E\u0441\u043A\u0432\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0440\u0433 \u0440\u0443\u0441 \u0440\u0444 \u0441\u0430\u0439\u0442 \u0441\u0440\u0431 \u0443\u043A\u0440 \u10D2\u10D4 \u0570\u0561\u0575 \u05D9\u05E9\u05E8\u05D0\u05DC \u05E7\u05D5\u05DD \u0627\u0628\u0648\u0638\u0628\u064A \u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u0644\u0627\u0631\u062F\u0646 \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0627\u0644\u062C\u0632\u0627\u0626\u0631 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0627\u0644\u0639\u0644\u064A\u0627\u0646 \u0627\u0644\u0645\u063A\u0631\u0628 \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u06CC\u0631\u0627\u0646 \u0628\u0627\u0631\u062A \u0628\u0627\u0632\u0627\u0631 \u0628\u06BE\u0627\u0631\u062A \u0628\u064A\u062A\u0643 \u067E\u0627\u06A9\u0633\u062A\u0627\u0646 \u0680\u0627\u0631\u062A \u062A\u0648\u0646\u0633 \u0633\u0648\u062F\u0627\u0646 \u0633\u0648\u0631\u064A\u0629 \u0634\u0628\u0643\u0629 \u0639\u0631\u0627\u0642 \u0639\u0631\u0628 \u0639\u0645\u0627\u0646 \u0641\u0644\u0633\u0637\u064A\u0646 \u0642\u0637\u0631 \u0643\u0627\u062B\u0648\u0644\u064A\u0643 \u0643\u0648\u0645 \u0645\u0635\u0631 \u0645\u0644\u064A\u0633\u064A\u0627 \u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627 \u0645\u0648\u0642\u0639 \u0647\u0645\u0631\u0627\u0647 \u0915\u0949\u092E \u0928\u0947\u091F \u092D\u093E\u0930\u0924 \u092D\u093E\u0930\u0924\u092E\u094D \u092D\u093E\u0930\u094B\u0924 \u0938\u0902\u0917\u0920\u0928 \u09AC\u09BE\u0982\u09B2\u09BE \u09AD\u09BE\u09B0\u09A4 \u09AD\u09BE\u09F0\u09A4 \u0A2D\u0A3E\u0A30\u0A24 \u0AAD\u0ABE\u0AB0\u0AA4 \u0B2D\u0B3E\u0B30\u0B24 \u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE \u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8 \u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD \u0C2D\u0C3E\u0C30\u0C24\u0C4D \u0CAD\u0CBE\u0CB0\u0CA4 \u0D2D\u0D3E\u0D30\u0D24\u0D02 \u0DBD\u0D82\u0D9A\u0DCF \u0E04\u0E2D\u0E21 \u0E44\u0E17\u0E22 \u0EA5\u0EB2\u0EA7 \uB2F7\uB137 \uB2F7\uCEF4 \uC0BC\uC131 \uD55C\uAD6D \u30A2\u30DE\u30BE\u30F3 \u30B0\u30FC\u30B0\u30EB \u30AF\u30E9\u30A6\u30C9 \u30B3\u30E0 \u30B9\u30C8\u30A2 \u30BB\u30FC\u30EB \u30D5\u30A1\u30C3\u30B7\u30E7\u30F3 \u30DD\u30A4\u30F3\u30C8 \u307F\u3093\u306A \u4E16\u754C \u4E2D\u4FE1 \u4E2D\u56FD \u4E2D\u570B \u4E2D\u6587\u7F51 \u4E9A\u9A6C\u900A \u4F01\u4E1A \u4F5B\u5C71 \u4FE1\u606F \u5065\u5EB7 \u516B\u5366 \u516C\u53F8 \u516C\u76CA \u53F0\u6E7E \u53F0\u7063 \u5546\u57CE \u5546\u5E97 \u5546\u6807 \u5609\u91CC \u5609\u91CC\u5927\u9152\u5E97 \u5728\u7EBF \u5927\u4F17\u6C7D\u8F66 \u5927\u62FF \u5929\u4E3B\u6559 \u5A31\u4E50 \u5BB6\u96FB \u5E7F\u4E1C \u5FAE\u535A \u6148\u5584 \u6211\u7231\u4F60 \u624B\u673A \u62DB\u8058 \u653F\u52A1 \u653F\u5E9C \u65B0\u52A0\u5761 \u65B0\u95FB \u65F6\u5C1A \u66F8\u7C4D \u673A\u6784 \u6DE1\u9A6C\u9521 \u6E38\u620F \u6FB3\u9580 \u70B9\u770B \u79FB\u52A8 \u7EC4\u7EC7\u673A\u6784 \u7F51\u5740 \u7F51\u5E97 \u7F51\u7AD9 \u7F51\u7EDC \u8054\u901A \u8BFA\u57FA\u4E9A \u8C37\u6B4C \u8D2D\u7269 \u901A\u8CA9 \u96C6\u56E2 \u96FB\u8A0A\u76C8\u79D1 \u98DE\u5229\u6D66 \u98DF\u54C1 \u9910\u5385 \u9999\u683C\u91CC\u62C9 \u9999\u6E2F".split(" ");
var LETTER = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/;
var EMOJI = /(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDD-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6])/;
var EMOJI_VARIATION = /\uFE0F/;
var DIGIT = /\d/;
var SPACE = /\s/;
function init$2() {
  var customProtocols = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var S_START = makeState();
  var S_NUM = makeAcceptingState(NUM);
  var S_DOMAIN = makeAcceptingState(DOMAIN);
  var S_DOMAIN_HYPHEN = makeState();
  var S_WS = makeAcceptingState(WS);
  var DOMAIN_REGEX_TRANSITIONS = [[DIGIT, S_DOMAIN], [LETTER, S_DOMAIN], [EMOJI, S_DOMAIN], [EMOJI_VARIATION, S_DOMAIN]];
  var makeDomainState = function makeDomainState2() {
    var state = makeAcceptingState(DOMAIN);
    state.j = {
      "-": S_DOMAIN_HYPHEN
    };
    state.jr = [].concat(DOMAIN_REGEX_TRANSITIONS);
    return state;
  };
  var makeNearDomainState = function makeNearDomainState2(token2) {
    var state = makeDomainState();
    state.t = token2;
    return state;
  };
  makeBatchT(S_START, [["'", makeAcceptingState(APOSTROPHE$1)], ["{", makeAcceptingState(OPENBRACE)], ["[", makeAcceptingState(OPENBRACKET)], ["<", makeAcceptingState(OPENANGLEBRACKET)], ["(", makeAcceptingState(OPENPAREN)], ["}", makeAcceptingState(CLOSEBRACE)], ["]", makeAcceptingState(CLOSEBRACKET)], [">", makeAcceptingState(CLOSEANGLEBRACKET)], [")", makeAcceptingState(CLOSEPAREN)], ["&", makeAcceptingState(AMPERSAND)], ["*", makeAcceptingState(ASTERISK)], ["@", makeAcceptingState(AT)], ["`", makeAcceptingState(BACKTICK)], ["^", makeAcceptingState(CARET)], [":", makeAcceptingState(COLON)], [",", makeAcceptingState(COMMA)], ["$", makeAcceptingState(DOLLAR)], [".", makeAcceptingState(DOT)], ["=", makeAcceptingState(EQUALS)], ["!", makeAcceptingState(EXCLAMATION)], ["-", makeAcceptingState(HYPHEN)], ["%", makeAcceptingState(PERCENT)], ["|", makeAcceptingState(PIPE)], ["+", makeAcceptingState(PLUS)], ["#", makeAcceptingState(POUND)], ["?", makeAcceptingState(QUERY)], ['"', makeAcceptingState(QUOTE)], ["/", makeAcceptingState(SLASH)], [";", makeAcceptingState(SEMI)], ["~", makeAcceptingState(TILDE)], ["_", makeAcceptingState(UNDERSCORE)], ["\\", makeAcceptingState(BACKSLASH)]]);
  makeT(S_START, "\n", makeAcceptingState(NL));
  makeRegexT(S_START, SPACE, S_WS);
  makeT(S_WS, "\n", makeState());
  makeRegexT(S_WS, SPACE, S_WS);
  for (var i = 0; i < tlds.length; i++) {
    makeChainT(S_START, tlds[i], makeNearDomainState(TLD), makeDomainState);
  }
  var S_PROTOCOL_FILE = makeDomainState();
  var S_PROTOCOL_FTP = makeDomainState();
  var S_PROTOCOL_HTTP = makeDomainState();
  var S_MAILTO = makeDomainState();
  makeChainT(S_START, "file", S_PROTOCOL_FILE, makeDomainState);
  makeChainT(S_START, "ftp", S_PROTOCOL_FTP, makeDomainState);
  makeChainT(S_START, "http", S_PROTOCOL_HTTP, makeDomainState);
  makeChainT(S_START, "mailto", S_MAILTO, makeDomainState);
  var S_PROTOCOL_SECURE = makeDomainState();
  var S_FULL_PROTOCOL = makeAcceptingState(PROTOCOL);
  var S_FULL_MAILTO = makeAcceptingState(MAILTO);
  makeT(S_PROTOCOL_FTP, "s", S_PROTOCOL_SECURE);
  makeT(S_PROTOCOL_FTP, ":", S_FULL_PROTOCOL);
  makeT(S_PROTOCOL_HTTP, "s", S_PROTOCOL_SECURE);
  makeT(S_PROTOCOL_HTTP, ":", S_FULL_PROTOCOL);
  makeT(S_PROTOCOL_FILE, ":", S_FULL_PROTOCOL);
  makeT(S_PROTOCOL_SECURE, ":", S_FULL_PROTOCOL);
  makeT(S_MAILTO, ":", S_FULL_MAILTO);
  var S_CUSTOM_PROTOCOL = makeDomainState();
  for (var _i = 0; _i < customProtocols.length; _i++) {
    makeChainT(S_START, customProtocols[_i], S_CUSTOM_PROTOCOL, makeDomainState);
  }
  makeT(S_CUSTOM_PROTOCOL, ":", S_FULL_PROTOCOL);
  makeChainT(S_START, "localhost", makeNearDomainState(LOCALHOST), makeDomainState);
  makeRegexT(S_START, DIGIT, S_NUM);
  makeRegexT(S_START, LETTER, S_DOMAIN);
  makeRegexT(S_START, EMOJI, S_DOMAIN);
  makeRegexT(S_START, EMOJI_VARIATION, S_DOMAIN);
  makeRegexT(S_NUM, DIGIT, S_NUM);
  makeRegexT(S_NUM, LETTER, S_DOMAIN);
  makeRegexT(S_NUM, EMOJI, S_DOMAIN);
  makeRegexT(S_NUM, EMOJI_VARIATION, S_DOMAIN);
  makeT(S_NUM, "-", S_DOMAIN_HYPHEN);
  makeT(S_DOMAIN, "-", S_DOMAIN_HYPHEN);
  makeT(S_DOMAIN_HYPHEN, "-", S_DOMAIN_HYPHEN);
  makeRegexT(S_DOMAIN, DIGIT, S_DOMAIN);
  makeRegexT(S_DOMAIN, LETTER, S_DOMAIN);
  makeRegexT(S_DOMAIN, EMOJI, S_DOMAIN);
  makeRegexT(S_DOMAIN, EMOJI_VARIATION, S_DOMAIN);
  makeRegexT(S_DOMAIN_HYPHEN, DIGIT, S_DOMAIN);
  makeRegexT(S_DOMAIN_HYPHEN, LETTER, S_DOMAIN);
  makeRegexT(S_DOMAIN_HYPHEN, EMOJI, S_DOMAIN);
  makeRegexT(S_DOMAIN_HYPHEN, EMOJI_VARIATION, S_DOMAIN);
  S_START.jd = makeAcceptingState(SYM);
  return S_START;
}
function run$1(start3, str) {
  var iterable = stringToArray(str.replace(/[A-Z]/g, function(c) {
    return c.toLowerCase();
  }));
  var charCount = iterable.length;
  var tokens = [];
  var cursor = 0;
  var charCursor = 0;
  while (charCursor < charCount) {
    var state = start3;
    var nextState = null;
    var tokenLength = 0;
    var latestAccepting = null;
    var sinceAccepts = -1;
    var charsSinceAccepts = -1;
    while (charCursor < charCount && (nextState = takeT(state, iterable[charCursor]))) {
      state = nextState;
      if (state.accepts()) {
        sinceAccepts = 0;
        charsSinceAccepts = 0;
        latestAccepting = state;
      } else if (sinceAccepts >= 0) {
        sinceAccepts += iterable[charCursor].length;
        charsSinceAccepts++;
      }
      tokenLength += iterable[charCursor].length;
      cursor += iterable[charCursor].length;
      charCursor++;
    }
    cursor -= sinceAccepts;
    charCursor -= charsSinceAccepts;
    tokenLength -= sinceAccepts;
    tokens.push({
      t: latestAccepting.t,
      v: str.substr(cursor - tokenLength, tokenLength),
      s: cursor - tokenLength,
      e: cursor
    });
  }
  return tokens;
}
function stringToArray(str) {
  var result2 = [];
  var len = str.length;
  var index2 = 0;
  while (index2 < len) {
    var first2 = str.charCodeAt(index2);
    var second = void 0;
    var char = first2 < 55296 || first2 > 56319 || index2 + 1 === len || (second = str.charCodeAt(index2 + 1)) < 56320 || second > 57343 ? str[index2] : str.slice(index2, index2 + 2);
    result2.push(char);
    index2 += char.length;
  }
  return result2;
}
var defaults = {
  defaultProtocol: "http",
  events: null,
  format: noop,
  formatHref: noop,
  nl2br: false,
  tagName: "a",
  target: null,
  rel: null,
  validate: true,
  truncate: 0,
  className: null,
  attributes: null,
  ignoreTags: []
};
function noop(val) {
  return val;
}
function inherits(parent, child3) {
  var props = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var extended = Object.create(parent.prototype);
  for (var p in props) {
    extended[p] = props[p];
  }
  extended.constructor = child3;
  child3.prototype = extended;
  return child3;
}
function MultiToken() {
}
MultiToken.prototype = {
  t: "token",
  isLink: false,
  toString: function toString7() {
    return this.v;
  },
  toHref: function toHref() {
    return this.toString();
  },
  startIndex: function startIndex() {
    return this.tk[0].s;
  },
  endIndex: function endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  toObject: function toObject() {
    var protocol = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaults.defaultProtocol;
    return {
      type: this.t,
      value: this.v,
      isLink: this.isLink,
      href: this.toHref(protocol),
      start: this.startIndex(),
      end: this.endIndex()
    };
  }
};
function createTokenClass(type, props) {
  function Token2(value, tokens) {
    this.t = type;
    this.v = value;
    this.tk = tokens;
  }
  inherits(MultiToken, Token2, props);
  return Token2;
}
var MailtoEmail = createTokenClass("email", {
  isLink: true
});
var Email = createTokenClass("email", {
  isLink: true,
  toHref: function toHref2() {
    return "mailto:" + this.toString();
  }
});
var Text$1 = createTokenClass("text");
var Nl = createTokenClass("nl");
var Url$1 = createTokenClass("url", {
  isLink: true,
  toHref: function toHref3() {
    var protocol = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaults.defaultProtocol;
    var tokens = this.tk;
    var hasProtocol2 = false;
    var hasSlashSlash = false;
    var result2 = [];
    var i = 0;
    while (tokens[i].t === PROTOCOL) {
      hasProtocol2 = true;
      result2.push(tokens[i].v);
      i++;
    }
    while (tokens[i].t === SLASH) {
      hasSlashSlash = true;
      result2.push(tokens[i].v);
      i++;
    }
    for (; i < tokens.length; i++) {
      result2.push(tokens[i].v);
    }
    result2 = result2.join("");
    if (!(hasProtocol2 || hasSlashSlash)) {
      result2 = "".concat(protocol, "://").concat(result2);
    }
    return result2;
  },
  hasProtocol: function hasProtocol() {
    return this.tk[0].t === PROTOCOL;
  }
});
var multi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MultiToken,
  Base: MultiToken,
  createTokenClass,
  MailtoEmail,
  Email,
  Text: Text$1,
  Nl,
  Url: Url$1
});
function init$1() {
  var S_START = makeState();
  var S_PROTOCOL = makeState();
  var S_MAILTO = makeState();
  var S_PROTOCOL_SLASH = makeState();
  var S_PROTOCOL_SLASH_SLASH = makeState();
  var S_DOMAIN = makeState();
  var S_DOMAIN_DOT = makeState();
  var S_TLD = makeAcceptingState(Url$1);
  var S_TLD_COLON = makeState();
  var S_TLD_PORT = makeAcceptingState(Url$1);
  var S_URL = makeAcceptingState(Url$1);
  var S_URL_NON_ACCEPTING = makeState();
  var S_URL_OPENBRACE = makeState();
  var S_URL_OPENBRACKET = makeState();
  var S_URL_OPENANGLEBRACKET = makeState();
  var S_URL_OPENPAREN = makeState();
  var S_URL_OPENBRACE_Q = makeAcceptingState(Url$1);
  var S_URL_OPENBRACKET_Q = makeAcceptingState(Url$1);
  var S_URL_OPENANGLEBRACKET_Q = makeAcceptingState(Url$1);
  var S_URL_OPENPAREN_Q = makeAcceptingState(Url$1);
  var S_URL_OPENBRACE_SYMS = makeState();
  var S_URL_OPENBRACKET_SYMS = makeState();
  var S_URL_OPENANGLEBRACKET_SYMS = makeState();
  var S_URL_OPENPAREN_SYMS = makeState();
  var S_EMAIL_DOMAIN = makeState();
  var S_EMAIL_DOMAIN_DOT = makeState();
  var S_EMAIL = makeAcceptingState(Email);
  var S_EMAIL_COLON = makeState();
  var S_EMAIL_PORT = makeAcceptingState(Email);
  var S_MAILTO_EMAIL = makeAcceptingState(MailtoEmail);
  var S_MAILTO_EMAIL_NON_ACCEPTING = makeState();
  var S_LOCALPART = makeState();
  var S_LOCALPART_AT = makeState();
  var S_LOCALPART_DOT = makeState();
  var S_NL = makeAcceptingState(Nl);
  makeT(S_START, NL, S_NL);
  makeT(S_START, PROTOCOL, S_PROTOCOL);
  makeT(S_START, MAILTO, S_MAILTO);
  makeT(S_PROTOCOL, SLASH, S_PROTOCOL_SLASH);
  makeT(S_PROTOCOL_SLASH, SLASH, S_PROTOCOL_SLASH_SLASH);
  makeT(S_START, TLD, S_DOMAIN);
  makeT(S_START, DOMAIN, S_DOMAIN);
  makeT(S_START, LOCALHOST, S_TLD);
  makeT(S_START, NUM, S_DOMAIN);
  makeT(S_PROTOCOL_SLASH_SLASH, TLD, S_URL);
  makeT(S_PROTOCOL_SLASH_SLASH, DOMAIN, S_URL);
  makeT(S_PROTOCOL_SLASH_SLASH, NUM, S_URL);
  makeT(S_PROTOCOL_SLASH_SLASH, LOCALHOST, S_URL);
  makeT(S_DOMAIN, DOT, S_DOMAIN_DOT);
  makeT(S_EMAIL_DOMAIN, DOT, S_EMAIL_DOMAIN_DOT);
  makeT(S_DOMAIN_DOT, TLD, S_TLD);
  makeT(S_DOMAIN_DOT, DOMAIN, S_DOMAIN);
  makeT(S_DOMAIN_DOT, NUM, S_DOMAIN);
  makeT(S_DOMAIN_DOT, LOCALHOST, S_DOMAIN);
  makeT(S_EMAIL_DOMAIN_DOT, TLD, S_EMAIL);
  makeT(S_EMAIL_DOMAIN_DOT, DOMAIN, S_EMAIL_DOMAIN);
  makeT(S_EMAIL_DOMAIN_DOT, NUM, S_EMAIL_DOMAIN);
  makeT(S_EMAIL_DOMAIN_DOT, LOCALHOST, S_EMAIL_DOMAIN);
  makeT(S_TLD, DOT, S_DOMAIN_DOT);
  makeT(S_EMAIL, DOT, S_EMAIL_DOMAIN_DOT);
  makeT(S_TLD, COLON, S_TLD_COLON);
  makeT(S_TLD, SLASH, S_URL);
  makeT(S_TLD_COLON, NUM, S_TLD_PORT);
  makeT(S_TLD_PORT, SLASH, S_URL);
  makeT(S_EMAIL, COLON, S_EMAIL_COLON);
  makeT(S_EMAIL_COLON, NUM, S_EMAIL_PORT);
  var qsAccepting = [AMPERSAND, ASTERISK, AT, BACKSLASH, BACKTICK, CARET, DOLLAR, DOMAIN, EQUALS, HYPHEN, LOCALHOST, NUM, PERCENT, PIPE, PLUS, POUND, PROTOCOL, SLASH, SYM, TILDE, TLD, UNDERSCORE];
  var qsNonAccepting = [APOSTROPHE$1, CLOSEANGLEBRACKET, CLOSEBRACE, CLOSEBRACKET, CLOSEPAREN, COLON, COMMA, DOT, EXCLAMATION, OPENANGLEBRACKET, OPENBRACE, OPENBRACKET, OPENPAREN, QUERY, QUOTE, SEMI];
  makeT(S_URL, OPENBRACE, S_URL_OPENBRACE);
  makeT(S_URL, OPENBRACKET, S_URL_OPENBRACKET);
  makeT(S_URL, OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET);
  makeT(S_URL, OPENPAREN, S_URL_OPENPAREN);
  makeT(S_URL_NON_ACCEPTING, OPENBRACE, S_URL_OPENBRACE);
  makeT(S_URL_NON_ACCEPTING, OPENBRACKET, S_URL_OPENBRACKET);
  makeT(S_URL_NON_ACCEPTING, OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET);
  makeT(S_URL_NON_ACCEPTING, OPENPAREN, S_URL_OPENPAREN);
  makeT(S_URL_OPENBRACE, CLOSEBRACE, S_URL);
  makeT(S_URL_OPENBRACKET, CLOSEBRACKET, S_URL);
  makeT(S_URL_OPENANGLEBRACKET, CLOSEANGLEBRACKET, S_URL);
  makeT(S_URL_OPENPAREN, CLOSEPAREN, S_URL);
  makeT(S_URL_OPENBRACE_Q, CLOSEBRACE, S_URL);
  makeT(S_URL_OPENBRACKET_Q, CLOSEBRACKET, S_URL);
  makeT(S_URL_OPENANGLEBRACKET_Q, CLOSEANGLEBRACKET, S_URL);
  makeT(S_URL_OPENPAREN_Q, CLOSEPAREN, S_URL);
  makeT(S_URL_OPENBRACE_SYMS, CLOSEBRACE, S_URL);
  makeT(S_URL_OPENBRACKET_SYMS, CLOSEBRACKET, S_URL);
  makeT(S_URL_OPENANGLEBRACKET_SYMS, CLOSEANGLEBRACKET, S_URL);
  makeT(S_URL_OPENPAREN_SYMS, CLOSEPAREN, S_URL);
  makeMultiT(S_URL_OPENBRACE, qsAccepting, S_URL_OPENBRACE_Q);
  makeMultiT(S_URL_OPENBRACKET, qsAccepting, S_URL_OPENBRACKET_Q);
  makeMultiT(S_URL_OPENANGLEBRACKET, qsAccepting, S_URL_OPENANGLEBRACKET_Q);
  makeMultiT(S_URL_OPENPAREN, qsAccepting, S_URL_OPENPAREN_Q);
  makeMultiT(S_URL_OPENBRACE, qsNonAccepting, S_URL_OPENBRACE_SYMS);
  makeMultiT(S_URL_OPENBRACKET, qsNonAccepting, S_URL_OPENBRACKET_SYMS);
  makeMultiT(S_URL_OPENANGLEBRACKET, qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
  makeMultiT(S_URL_OPENPAREN, qsNonAccepting, S_URL_OPENPAREN_SYMS);
  makeMultiT(S_URL_OPENBRACE_Q, qsAccepting, S_URL_OPENBRACE_Q);
  makeMultiT(S_URL_OPENBRACKET_Q, qsAccepting, S_URL_OPENBRACKET_Q);
  makeMultiT(S_URL_OPENANGLEBRACKET_Q, qsAccepting, S_URL_OPENANGLEBRACKET_Q);
  makeMultiT(S_URL_OPENPAREN_Q, qsAccepting, S_URL_OPENPAREN_Q);
  makeMultiT(S_URL_OPENBRACE_Q, qsNonAccepting, S_URL_OPENBRACE_Q);
  makeMultiT(S_URL_OPENBRACKET_Q, qsNonAccepting, S_URL_OPENBRACKET_Q);
  makeMultiT(S_URL_OPENANGLEBRACKET_Q, qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
  makeMultiT(S_URL_OPENPAREN_Q, qsNonAccepting, S_URL_OPENPAREN_Q);
  makeMultiT(S_URL_OPENBRACE_SYMS, qsAccepting, S_URL_OPENBRACE_Q);
  makeMultiT(S_URL_OPENBRACKET_SYMS, qsAccepting, S_URL_OPENBRACKET_Q);
  makeMultiT(S_URL_OPENANGLEBRACKET_SYMS, qsAccepting, S_URL_OPENANGLEBRACKET_Q);
  makeMultiT(S_URL_OPENPAREN_SYMS, qsAccepting, S_URL_OPENPAREN_Q);
  makeMultiT(S_URL_OPENBRACE_SYMS, qsNonAccepting, S_URL_OPENBRACE_SYMS);
  makeMultiT(S_URL_OPENBRACKET_SYMS, qsNonAccepting, S_URL_OPENBRACKET_SYMS);
  makeMultiT(S_URL_OPENANGLEBRACKET_SYMS, qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
  makeMultiT(S_URL_OPENPAREN_SYMS, qsNonAccepting, S_URL_OPENPAREN_SYMS);
  makeMultiT(S_URL, qsAccepting, S_URL);
  makeMultiT(S_URL_NON_ACCEPTING, qsAccepting, S_URL);
  makeMultiT(S_URL, qsNonAccepting, S_URL_NON_ACCEPTING);
  makeMultiT(S_URL_NON_ACCEPTING, qsNonAccepting, S_URL_NON_ACCEPTING);
  makeT(S_MAILTO, TLD, S_MAILTO_EMAIL);
  makeT(S_MAILTO, DOMAIN, S_MAILTO_EMAIL);
  makeT(S_MAILTO, NUM, S_MAILTO_EMAIL);
  makeT(S_MAILTO, LOCALHOST, S_MAILTO_EMAIL);
  makeMultiT(S_MAILTO_EMAIL, qsAccepting, S_MAILTO_EMAIL);
  makeMultiT(S_MAILTO_EMAIL, qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
  makeMultiT(S_MAILTO_EMAIL_NON_ACCEPTING, qsAccepting, S_MAILTO_EMAIL);
  makeMultiT(S_MAILTO_EMAIL_NON_ACCEPTING, qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
  var localpartAccepting = [AMPERSAND, APOSTROPHE$1, ASTERISK, BACKSLASH, BACKTICK, CARET, CLOSEBRACE, DOLLAR, DOMAIN, EQUALS, HYPHEN, NUM, OPENBRACE, PERCENT, PIPE, PLUS, POUND, QUERY, SLASH, SYM, TILDE, TLD, UNDERSCORE];
  makeMultiT(S_DOMAIN, localpartAccepting, S_LOCALPART);
  makeT(S_DOMAIN, AT, S_LOCALPART_AT);
  makeMultiT(S_TLD, localpartAccepting, S_LOCALPART);
  makeT(S_TLD, AT, S_LOCALPART_AT);
  makeMultiT(S_DOMAIN_DOT, localpartAccepting, S_LOCALPART);
  makeMultiT(S_LOCALPART, localpartAccepting, S_LOCALPART);
  makeT(S_LOCALPART, AT, S_LOCALPART_AT);
  makeT(S_LOCALPART, DOT, S_LOCALPART_DOT);
  makeMultiT(S_LOCALPART_DOT, localpartAccepting, S_LOCALPART);
  makeT(S_LOCALPART_AT, TLD, S_EMAIL_DOMAIN);
  makeT(S_LOCALPART_AT, DOMAIN, S_EMAIL_DOMAIN);
  makeT(S_LOCALPART_AT, NUM, S_EMAIL_DOMAIN);
  makeT(S_LOCALPART_AT, LOCALHOST, S_EMAIL);
  return S_START;
}
function run(start3, input, tokens) {
  var len = tokens.length;
  var cursor = 0;
  var multis = [];
  var textTokens = [];
  while (cursor < len) {
    var state = start3;
    var secondState = null;
    var nextState = null;
    var multiLength = 0;
    var latestAccepting = null;
    var sinceAccepts = -1;
    while (cursor < len && !(secondState = takeT(state, tokens[cursor].t))) {
      textTokens.push(tokens[cursor++]);
    }
    while (cursor < len && (nextState = secondState || takeT(state, tokens[cursor].t))) {
      secondState = null;
      state = nextState;
      if (state.accepts()) {
        sinceAccepts = 0;
        latestAccepting = state;
      } else if (sinceAccepts >= 0) {
        sinceAccepts++;
      }
      cursor++;
      multiLength++;
    }
    if (sinceAccepts < 0) {
      for (var i = cursor - multiLength; i < cursor; i++) {
        textTokens.push(tokens[i]);
      }
    } else {
      if (textTokens.length > 0) {
        multis.push(parserCreateMultiToken(Text$1, input, textTokens));
        textTokens = [];
      }
      cursor -= sinceAccepts;
      multiLength -= sinceAccepts;
      var Multi = latestAccepting.t;
      var subtokens = tokens.slice(cursor - multiLength, cursor);
      multis.push(parserCreateMultiToken(Multi, input, subtokens));
    }
  }
  if (textTokens.length > 0) {
    multis.push(parserCreateMultiToken(Text$1, input, textTokens));
  }
  return multis;
}
function parserCreateMultiToken(Multi, input, tokens) {
  var startIdx = tokens[0].s;
  var endIdx = tokens[tokens.length - 1].e;
  var value = input.substr(startIdx, endIdx - startIdx);
  return new Multi(value, tokens);
}
var INIT = {
  scanner: null,
  parser: null,
  pluginQueue: [],
  customProtocols: [],
  initialized: false
};
function init5() {
  INIT.scanner = {
    start: init$2(INIT.customProtocols),
    tokens: text$1
  };
  INIT.parser = {
    start: init$1(),
    tokens: multi
  };
  var utils2 = {
    createTokenClass
  };
  for (var i = 0; i < INIT.pluginQueue.length; i++) {
    INIT.pluginQueue[i][1]({
      scanner: INIT.scanner,
      parser: INIT.parser,
      utils: utils2
    });
  }
  INIT.initialized = true;
}
function tokenize$2(str) {
  if (!INIT.initialized) {
    init5();
  }
  return run(INIT.parser.start, str, run$1(INIT.scanner.start, str));
}
function find2(str) {
  var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  var tokens = tokenize$2(str);
  var filtered = [];
  for (var i = 0; i < tokens.length; i++) {
    var token2 = tokens[i];
    if (token2.isLink && (!type || token2.t === type)) {
      filtered.push(token2.toObject());
    }
  }
  return filtered;
}
function test(str) {
  var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  var tokens = tokenize$2(str);
  return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].t === type);
}
function autolink$1(options) {
  return new Plugin({
    key: new PluginKey("autolink"),
    appendTransaction: (transactions, oldState, newState) => {
      const docChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
      const preventAutolink = transactions.some((transaction) => transaction.getMeta("preventAutolink"));
      if (!docChanges || preventAutolink) {
        return;
      }
      const { tr } = newState;
      const transform = combineTransactionSteps(oldState.doc, transactions);
      const { mapping } = transform;
      const changes = getChangedRanges(transform);
      changes.forEach(({ oldRange, newRange }) => {
        getMarksBetween(oldRange.from, oldRange.to, oldState.doc).filter((item) => item.mark.type === options.type).forEach((oldMark) => {
          const newFrom = mapping.map(oldMark.from);
          const newTo = mapping.map(oldMark.to);
          const newMarks = getMarksBetween(newFrom, newTo, newState.doc).filter((item) => item.mark.type === options.type);
          if (!newMarks.length) {
            return;
          }
          const newMark = newMarks[0];
          const oldLinkText = oldState.doc.textBetween(oldMark.from, oldMark.to, void 0, " ");
          const newLinkText = newState.doc.textBetween(newMark.from, newMark.to, void 0, " ");
          const wasLink = test(oldLinkText);
          const isLink = test(newLinkText);
          if (wasLink && !isLink) {
            tr.removeMark(newMark.from, newMark.to, options.type);
          }
        });
        findChildrenInRange(newState.doc, newRange, (node4) => node4.isTextblock).forEach((textBlock) => {
          const text6 = newState.doc.textBetween(textBlock.pos, textBlock.pos + textBlock.node.nodeSize, void 0, " ");
          find2(text6).filter((link3) => link3.isLink).map((link3) => __spreadProps(__spreadValues({}, link3), {
            from: textBlock.pos + link3.start + 1,
            to: textBlock.pos + link3.end + 1
          })).filter((link3) => {
            const fromIsInRange = newRange.from >= link3.from && newRange.from <= link3.to;
            const toIsInRange = newRange.to >= link3.from && newRange.to <= link3.to;
            return fromIsInRange || toIsInRange;
          }).forEach((link3) => {
            tr.addMark(link3.from, link3.to, options.type.create({
              href: link3.href
            }));
          });
        });
      });
      if (!tr.steps.length) {
        return;
      }
      return tr;
    }
  });
}
function clickHandler(options) {
  return new Plugin({
    key: new PluginKey("handleClickLink"),
    props: {
      handleClick: (view, pos, event) => {
        var _a;
        const attrs2 = getAttributes(view.state, options.type.name);
        const link3 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest("a");
        if (link3 && attrs2.href) {
          window.open(attrs2.href, attrs2.target);
          return true;
        }
        return false;
      }
    }
  });
}
function pasteHandler(options) {
  return new Plugin({
    key: new PluginKey("handlePasteLink"),
    props: {
      handlePaste: (view, event, slice4) => {
        const { state } = view;
        const { selection } = state;
        const { empty: empty2 } = selection;
        if (empty2) {
          return false;
        }
        let textContent = "";
        slice4.content.forEach((node4) => {
          textContent += node4.textContent;
        });
        const link3 = find2(textContent).find((item) => item.isLink && item.value === textContent);
        if (!textContent || !link3) {
          return false;
        }
        options.editor.commands.setMark(options.type, {
          href: link3.href
        });
        return true;
      }
    }
  });
}
const Link = Mark2.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: false,
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: true,
      linkOnPaste: true,
      autolink: true,
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow"
      }
    };
  },
  addAttributes() {
    return {
      href: {
        default: null
      },
      target: {
        default: this.options.HTMLAttributes.target
      }
    };
  },
  parseHTML() {
    return [
      { tag: "a[href]" }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "a",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (attributes) => ({ chain }) => {
        return chain().setMark(this.name, attributes).setMeta("preventAutolink", true).run();
      },
      toggleLink: (attributes) => ({ chain }) => {
        return chain().toggleMark(this.name, attributes, { extendEmptyMarkRange: true }).setMeta("preventAutolink", true).run();
      },
      unsetLink: () => ({ chain }) => {
        return chain().unsetMark(this.name, { extendEmptyMarkRange: true }).setMeta("preventAutolink", true).run();
      }
    };
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: (text6) => find2(text6).filter((link3) => link3.isLink).map((link3) => ({
          text: link3.value,
          index: link3.start,
          data: link3
        })),
        type: this.type,
        getAttributes: (match2) => {
          var _a;
          return {
            href: (_a = match2.data) === null || _a === void 0 ? void 0 : _a.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const plugins = [];
    if (this.options.autolink) {
      plugins.push(autolink$1({
        type: this.type
      }));
    }
    if (this.options.openOnClick) {
      plugins.push(clickHandler({
        type: this.type
      }));
    }
    if (this.options.linkOnPaste) {
      plugins.push(pasteHandler({
        editor: this.editor,
        type: this.type
      }));
    }
    return plugins;
  }
});
var ViewMode;
(function(ViewMode2) {
  ViewMode2["MARKDOWN"] = "markdown";
  ViewMode2["PREVIEW"] = "preview";
  ViewMode2["READONLY"] = "readonly";
})(ViewMode || (ViewMode = {}));
const Aacute = "\xC1";
const aacute = "\xE1";
const Abreve = "\u0102";
const abreve = "\u0103";
const ac = "\u223E";
const acd = "\u223F";
const acE = "\u223E\u0333";
const Acirc = "\xC2";
const acirc = "\xE2";
const acute = "\xB4";
const Acy = "\u0410";
const acy = "\u0430";
const AElig = "\xC6";
const aelig = "\xE6";
const af = "\u2061";
const Afr = "\u{1D504}";
const afr = "\u{1D51E}";
const Agrave = "\xC0";
const agrave = "\xE0";
const alefsym = "\u2135";
const aleph = "\u2135";
const Alpha = "\u0391";
const alpha = "\u03B1";
const Amacr = "\u0100";
const amacr = "\u0101";
const amalg = "\u2A3F";
const amp = "&";
const AMP = "&";
const andand = "\u2A55";
const And = "\u2A53";
const and = "\u2227";
const andd = "\u2A5C";
const andslope = "\u2A58";
const andv = "\u2A5A";
const ang = "\u2220";
const ange = "\u29A4";
const angle = "\u2220";
const angmsdaa = "\u29A8";
const angmsdab = "\u29A9";
const angmsdac = "\u29AA";
const angmsdad = "\u29AB";
const angmsdae = "\u29AC";
const angmsdaf = "\u29AD";
const angmsdag = "\u29AE";
const angmsdah = "\u29AF";
const angmsd = "\u2221";
const angrt = "\u221F";
const angrtvb = "\u22BE";
const angrtvbd = "\u299D";
const angsph = "\u2222";
const angst = "\xC5";
const angzarr = "\u237C";
const Aogon = "\u0104";
const aogon = "\u0105";
const Aopf = "\u{1D538}";
const aopf = "\u{1D552}";
const apacir = "\u2A6F";
const ap = "\u2248";
const apE = "\u2A70";
const ape = "\u224A";
const apid = "\u224B";
const apos = "'";
const ApplyFunction = "\u2061";
const approx = "\u2248";
const approxeq = "\u224A";
const Aring = "\xC5";
const aring = "\xE5";
const Ascr = "\u{1D49C}";
const ascr = "\u{1D4B6}";
const Assign = "\u2254";
const ast = "*";
const asymp = "\u2248";
const asympeq = "\u224D";
const Atilde = "\xC3";
const atilde = "\xE3";
const Auml = "\xC4";
const auml = "\xE4";
const awconint = "\u2233";
const awint = "\u2A11";
const backcong = "\u224C";
const backepsilon = "\u03F6";
const backprime = "\u2035";
const backsim = "\u223D";
const backsimeq = "\u22CD";
const Backslash = "\u2216";
const Barv = "\u2AE7";
const barvee = "\u22BD";
const barwed = "\u2305";
const Barwed = "\u2306";
const barwedge = "\u2305";
const bbrk = "\u23B5";
const bbrktbrk = "\u23B6";
const bcong = "\u224C";
const Bcy = "\u0411";
const bcy = "\u0431";
const bdquo = "\u201E";
const becaus = "\u2235";
const because = "\u2235";
const Because = "\u2235";
const bemptyv = "\u29B0";
const bepsi = "\u03F6";
const bernou = "\u212C";
const Bernoullis = "\u212C";
const Beta = "\u0392";
const beta = "\u03B2";
const beth = "\u2136";
const between = "\u226C";
const Bfr = "\u{1D505}";
const bfr = "\u{1D51F}";
const bigcap = "\u22C2";
const bigcirc = "\u25EF";
const bigcup = "\u22C3";
const bigodot = "\u2A00";
const bigoplus = "\u2A01";
const bigotimes = "\u2A02";
const bigsqcup = "\u2A06";
const bigstar = "\u2605";
const bigtriangledown = "\u25BD";
const bigtriangleup = "\u25B3";
const biguplus = "\u2A04";
const bigvee = "\u22C1";
const bigwedge = "\u22C0";
const bkarow = "\u290D";
const blacklozenge = "\u29EB";
const blacksquare = "\u25AA";
const blacktriangle = "\u25B4";
const blacktriangledown = "\u25BE";
const blacktriangleleft = "\u25C2";
const blacktriangleright = "\u25B8";
const blank = "\u2423";
const blk12 = "\u2592";
const blk14 = "\u2591";
const blk34 = "\u2593";
const block$1 = "\u2588";
const bne = "=\u20E5";
const bnequiv = "\u2261\u20E5";
const bNot = "\u2AED";
const bnot = "\u2310";
const Bopf = "\u{1D539}";
const bopf = "\u{1D553}";
const bot = "\u22A5";
const bottom = "\u22A5";
const bowtie = "\u22C8";
const boxbox = "\u29C9";
const boxdl = "\u2510";
const boxdL = "\u2555";
const boxDl = "\u2556";
const boxDL = "\u2557";
const boxdr = "\u250C";
const boxdR = "\u2552";
const boxDr = "\u2553";
const boxDR = "\u2554";
const boxh = "\u2500";
const boxH = "\u2550";
const boxhd = "\u252C";
const boxHd = "\u2564";
const boxhD = "\u2565";
const boxHD = "\u2566";
const boxhu = "\u2534";
const boxHu = "\u2567";
const boxhU = "\u2568";
const boxHU = "\u2569";
const boxminus = "\u229F";
const boxplus = "\u229E";
const boxtimes = "\u22A0";
const boxul = "\u2518";
const boxuL = "\u255B";
const boxUl = "\u255C";
const boxUL = "\u255D";
const boxur = "\u2514";
const boxuR = "\u2558";
const boxUr = "\u2559";
const boxUR = "\u255A";
const boxv = "\u2502";
const boxV = "\u2551";
const boxvh = "\u253C";
const boxvH = "\u256A";
const boxVh = "\u256B";
const boxVH = "\u256C";
const boxvl = "\u2524";
const boxvL = "\u2561";
const boxVl = "\u2562";
const boxVL = "\u2563";
const boxvr = "\u251C";
const boxvR = "\u255E";
const boxVr = "\u255F";
const boxVR = "\u2560";
const bprime = "\u2035";
const breve = "\u02D8";
const Breve = "\u02D8";
const brvbar = "\xA6";
const bscr = "\u{1D4B7}";
const Bscr = "\u212C";
const bsemi = "\u204F";
const bsim = "\u223D";
const bsime = "\u22CD";
const bsolb = "\u29C5";
const bsol = "\\";
const bsolhsub = "\u27C8";
const bull = "\u2022";
const bullet = "\u2022";
const bump = "\u224E";
const bumpE = "\u2AAE";
const bumpe = "\u224F";
const Bumpeq = "\u224E";
const bumpeq = "\u224F";
const Cacute = "\u0106";
const cacute = "\u0107";
const capand = "\u2A44";
const capbrcup = "\u2A49";
const capcap = "\u2A4B";
const cap = "\u2229";
const Cap = "\u22D2";
const capcup = "\u2A47";
const capdot = "\u2A40";
const CapitalDifferentialD = "\u2145";
const caps = "\u2229\uFE00";
const caret = "\u2041";
const caron = "\u02C7";
const Cayleys = "\u212D";
const ccaps = "\u2A4D";
const Ccaron = "\u010C";
const ccaron = "\u010D";
const Ccedil = "\xC7";
const ccedil = "\xE7";
const Ccirc = "\u0108";
const ccirc = "\u0109";
const Cconint = "\u2230";
const ccups = "\u2A4C";
const ccupssm = "\u2A50";
const Cdot = "\u010A";
const cdot = "\u010B";
const cedil = "\xB8";
const Cedilla = "\xB8";
const cemptyv = "\u29B2";
const cent = "\xA2";
const centerdot = "\xB7";
const CenterDot = "\xB7";
const cfr = "\u{1D520}";
const Cfr = "\u212D";
const CHcy = "\u0427";
const chcy = "\u0447";
const check2 = "\u2713";
const checkmark = "\u2713";
const Chi = "\u03A7";
const chi = "\u03C7";
const circ = "\u02C6";
const circeq = "\u2257";
const circlearrowleft = "\u21BA";
const circlearrowright = "\u21BB";
const circledast = "\u229B";
const circledcirc = "\u229A";
const circleddash = "\u229D";
const CircleDot = "\u2299";
const circledR = "\xAE";
const circledS = "\u24C8";
const CircleMinus = "\u2296";
const CirclePlus = "\u2295";
const CircleTimes = "\u2297";
const cir = "\u25CB";
const cirE = "\u29C3";
const cire = "\u2257";
const cirfnint = "\u2A10";
const cirmid = "\u2AEF";
const cirscir = "\u29C2";
const ClockwiseContourIntegral = "\u2232";
const CloseCurlyDoubleQuote = "\u201D";
const CloseCurlyQuote = "\u2019";
const clubs = "\u2663";
const clubsuit = "\u2663";
const colon = ":";
const Colon = "\u2237";
const Colone = "\u2A74";
const colone = "\u2254";
const coloneq = "\u2254";
const comma = ",";
const commat = "@";
const comp = "\u2201";
const compfn = "\u2218";
const complement = "\u2201";
const complexes = "\u2102";
const cong = "\u2245";
const congdot = "\u2A6D";
const Congruent = "\u2261";
const conint = "\u222E";
const Conint = "\u222F";
const ContourIntegral = "\u222E";
const copf = "\u{1D554}";
const Copf = "\u2102";
const coprod = "\u2210";
const Coproduct = "\u2210";
const copy4 = "\xA9";
const COPY = "\xA9";
const copysr = "\u2117";
const CounterClockwiseContourIntegral = "\u2233";
const crarr = "\u21B5";
const cross = "\u2717";
const Cross = "\u2A2F";
const Cscr = "\u{1D49E}";
const cscr = "\u{1D4B8}";
const csub = "\u2ACF";
const csube = "\u2AD1";
const csup = "\u2AD0";
const csupe = "\u2AD2";
const ctdot = "\u22EF";
const cudarrl = "\u2938";
const cudarrr = "\u2935";
const cuepr = "\u22DE";
const cuesc = "\u22DF";
const cularr = "\u21B6";
const cularrp = "\u293D";
const cupbrcap = "\u2A48";
const cupcap = "\u2A46";
const CupCap = "\u224D";
const cup = "\u222A";
const Cup = "\u22D3";
const cupcup = "\u2A4A";
const cupdot = "\u228D";
const cupor = "\u2A45";
const cups = "\u222A\uFE00";
const curarr = "\u21B7";
const curarrm = "\u293C";
const curlyeqprec = "\u22DE";
const curlyeqsucc = "\u22DF";
const curlyvee = "\u22CE";
const curlywedge = "\u22CF";
const curren = "\xA4";
const curvearrowleft = "\u21B6";
const curvearrowright = "\u21B7";
const cuvee = "\u22CE";
const cuwed = "\u22CF";
const cwconint = "\u2232";
const cwint = "\u2231";
const cylcty = "\u232D";
const dagger = "\u2020";
const Dagger = "\u2021";
const daleth = "\u2138";
const darr = "\u2193";
const Darr = "\u21A1";
const dArr = "\u21D3";
const dash = "\u2010";
const Dashv = "\u2AE4";
const dashv = "\u22A3";
const dbkarow = "\u290F";
const dblac = "\u02DD";
const Dcaron = "\u010E";
const dcaron = "\u010F";
const Dcy = "\u0414";
const dcy = "\u0434";
const ddagger = "\u2021";
const ddarr = "\u21CA";
const DD = "\u2145";
const dd = "\u2146";
const DDotrahd = "\u2911";
const ddotseq = "\u2A77";
const deg = "\xB0";
const Del = "\u2207";
const Delta = "\u0394";
const delta = "\u03B4";
const demptyv = "\u29B1";
const dfisht = "\u297F";
const Dfr = "\u{1D507}";
const dfr = "\u{1D521}";
const dHar = "\u2965";
const dharl = "\u21C3";
const dharr = "\u21C2";
const DiacriticalAcute = "\xB4";
const DiacriticalDot = "\u02D9";
const DiacriticalDoubleAcute = "\u02DD";
const DiacriticalGrave = "`";
const DiacriticalTilde = "\u02DC";
const diam = "\u22C4";
const diamond = "\u22C4";
const Diamond = "\u22C4";
const diamondsuit = "\u2666";
const diams = "\u2666";
const die = "\xA8";
const DifferentialD = "\u2146";
const digamma = "\u03DD";
const disin = "\u22F2";
const div = "\xF7";
const divide = "\xF7";
const divideontimes = "\u22C7";
const divonx = "\u22C7";
const DJcy = "\u0402";
const djcy = "\u0452";
const dlcorn = "\u231E";
const dlcrop = "\u230D";
const dollar = "$";
const Dopf = "\u{1D53B}";
const dopf = "\u{1D555}";
const Dot = "\xA8";
const dot = "\u02D9";
const DotDot = "\u20DC";
const doteq = "\u2250";
const doteqdot = "\u2251";
const DotEqual = "\u2250";
const dotminus = "\u2238";
const dotplus = "\u2214";
const dotsquare = "\u22A1";
const doublebarwedge = "\u2306";
const DoubleContourIntegral = "\u222F";
const DoubleDot = "\xA8";
const DoubleDownArrow = "\u21D3";
const DoubleLeftArrow = "\u21D0";
const DoubleLeftRightArrow = "\u21D4";
const DoubleLeftTee = "\u2AE4";
const DoubleLongLeftArrow = "\u27F8";
const DoubleLongLeftRightArrow = "\u27FA";
const DoubleLongRightArrow = "\u27F9";
const DoubleRightArrow = "\u21D2";
const DoubleRightTee = "\u22A8";
const DoubleUpArrow = "\u21D1";
const DoubleUpDownArrow = "\u21D5";
const DoubleVerticalBar = "\u2225";
const DownArrowBar = "\u2913";
const downarrow = "\u2193";
const DownArrow = "\u2193";
const Downarrow = "\u21D3";
const DownArrowUpArrow = "\u21F5";
const DownBreve = "\u0311";
const downdownarrows = "\u21CA";
const downharpoonleft = "\u21C3";
const downharpoonright = "\u21C2";
const DownLeftRightVector = "\u2950";
const DownLeftTeeVector = "\u295E";
const DownLeftVectorBar = "\u2956";
const DownLeftVector = "\u21BD";
const DownRightTeeVector = "\u295F";
const DownRightVectorBar = "\u2957";
const DownRightVector = "\u21C1";
const DownTeeArrow = "\u21A7";
const DownTee = "\u22A4";
const drbkarow = "\u2910";
const drcorn = "\u231F";
const drcrop = "\u230C";
const Dscr = "\u{1D49F}";
const dscr = "\u{1D4B9}";
const DScy = "\u0405";
const dscy = "\u0455";
const dsol = "\u29F6";
const Dstrok = "\u0110";
const dstrok = "\u0111";
const dtdot = "\u22F1";
const dtri = "\u25BF";
const dtrif = "\u25BE";
const duarr = "\u21F5";
const duhar = "\u296F";
const dwangle = "\u29A6";
const DZcy = "\u040F";
const dzcy = "\u045F";
const dzigrarr = "\u27FF";
const Eacute = "\xC9";
const eacute = "\xE9";
const easter = "\u2A6E";
const Ecaron = "\u011A";
const ecaron = "\u011B";
const Ecirc = "\xCA";
const ecirc = "\xEA";
const ecir = "\u2256";
const ecolon = "\u2255";
const Ecy = "\u042D";
const ecy = "\u044D";
const eDDot = "\u2A77";
const Edot = "\u0116";
const edot = "\u0117";
const eDot = "\u2251";
const ee = "\u2147";
const efDot = "\u2252";
const Efr = "\u{1D508}";
const efr = "\u{1D522}";
const eg = "\u2A9A";
const Egrave = "\xC8";
const egrave = "\xE8";
const egs = "\u2A96";
const egsdot = "\u2A98";
const el = "\u2A99";
const Element = "\u2208";
const elinters = "\u23E7";
const ell = "\u2113";
const els = "\u2A95";
const elsdot = "\u2A97";
const Emacr = "\u0112";
const emacr = "\u0113";
const empty = "\u2205";
const emptyset = "\u2205";
const EmptySmallSquare = "\u25FB";
const emptyv = "\u2205";
const EmptyVerySmallSquare = "\u25AB";
const emsp13 = "\u2004";
const emsp14 = "\u2005";
const emsp = "\u2003";
const ENG = "\u014A";
const eng = "\u014B";
const ensp = "\u2002";
const Eogon = "\u0118";
const eogon = "\u0119";
const Eopf = "\u{1D53C}";
const eopf = "\u{1D556}";
const epar = "\u22D5";
const eparsl = "\u29E3";
const eplus = "\u2A71";
const epsi = "\u03B5";
const Epsilon = "\u0395";
const epsilon = "\u03B5";
const epsiv = "\u03F5";
const eqcirc = "\u2256";
const eqcolon = "\u2255";
const eqsim = "\u2242";
const eqslantgtr = "\u2A96";
const eqslantless = "\u2A95";
const Equal = "\u2A75";
const equals = "=";
const EqualTilde = "\u2242";
const equest = "\u225F";
const Equilibrium = "\u21CC";
const equiv = "\u2261";
const equivDD = "\u2A78";
const eqvparsl = "\u29E5";
const erarr = "\u2971";
const erDot = "\u2253";
const escr = "\u212F";
const Escr = "\u2130";
const esdot = "\u2250";
const Esim = "\u2A73";
const esim = "\u2242";
const Eta = "\u0397";
const eta = "\u03B7";
const ETH = "\xD0";
const eth = "\xF0";
const Euml = "\xCB";
const euml = "\xEB";
const euro = "\u20AC";
const excl = "!";
const exist = "\u2203";
const Exists = "\u2203";
const expectation = "\u2130";
const exponentiale = "\u2147";
const ExponentialE = "\u2147";
const fallingdotseq = "\u2252";
const Fcy = "\u0424";
const fcy = "\u0444";
const female = "\u2640";
const ffilig = "\uFB03";
const fflig = "\uFB00";
const ffllig = "\uFB04";
const Ffr = "\u{1D509}";
const ffr = "\u{1D523}";
const filig = "\uFB01";
const FilledSmallSquare = "\u25FC";
const FilledVerySmallSquare = "\u25AA";
const fjlig = "fj";
const flat = "\u266D";
const fllig = "\uFB02";
const fltns = "\u25B1";
const fnof = "\u0192";
const Fopf = "\u{1D53D}";
const fopf = "\u{1D557}";
const forall = "\u2200";
const ForAll = "\u2200";
const fork = "\u22D4";
const forkv = "\u2AD9";
const Fouriertrf = "\u2131";
const fpartint = "\u2A0D";
const frac12 = "\xBD";
const frac13 = "\u2153";
const frac14 = "\xBC";
const frac15 = "\u2155";
const frac16 = "\u2159";
const frac18 = "\u215B";
const frac23 = "\u2154";
const frac25 = "\u2156";
const frac34 = "\xBE";
const frac35 = "\u2157";
const frac38 = "\u215C";
const frac45 = "\u2158";
const frac56 = "\u215A";
const frac58 = "\u215D";
const frac78 = "\u215E";
const frasl = "\u2044";
const frown = "\u2322";
const fscr = "\u{1D4BB}";
const Fscr = "\u2131";
const gacute = "\u01F5";
const Gamma = "\u0393";
const gamma = "\u03B3";
const Gammad = "\u03DC";
const gammad = "\u03DD";
const gap = "\u2A86";
const Gbreve = "\u011E";
const gbreve = "\u011F";
const Gcedil = "\u0122";
const Gcirc = "\u011C";
const gcirc = "\u011D";
const Gcy = "\u0413";
const gcy = "\u0433";
const Gdot = "\u0120";
const gdot = "\u0121";
const ge = "\u2265";
const gE = "\u2267";
const gEl = "\u2A8C";
const gel = "\u22DB";
const geq = "\u2265";
const geqq = "\u2267";
const geqslant = "\u2A7E";
const gescc = "\u2AA9";
const ges = "\u2A7E";
const gesdot = "\u2A80";
const gesdoto = "\u2A82";
const gesdotol = "\u2A84";
const gesl = "\u22DB\uFE00";
const gesles = "\u2A94";
const Gfr = "\u{1D50A}";
const gfr = "\u{1D524}";
const gg = "\u226B";
const Gg = "\u22D9";
const ggg = "\u22D9";
const gimel = "\u2137";
const GJcy = "\u0403";
const gjcy = "\u0453";
const gla = "\u2AA5";
const gl = "\u2277";
const glE = "\u2A92";
const glj = "\u2AA4";
const gnap = "\u2A8A";
const gnapprox = "\u2A8A";
const gne = "\u2A88";
const gnE = "\u2269";
const gneq = "\u2A88";
const gneqq = "\u2269";
const gnsim = "\u22E7";
const Gopf = "\u{1D53E}";
const gopf = "\u{1D558}";
const grave = "`";
const GreaterEqual = "\u2265";
const GreaterEqualLess = "\u22DB";
const GreaterFullEqual = "\u2267";
const GreaterGreater = "\u2AA2";
const GreaterLess = "\u2277";
const GreaterSlantEqual = "\u2A7E";
const GreaterTilde = "\u2273";
const Gscr = "\u{1D4A2}";
const gscr = "\u210A";
const gsim = "\u2273";
const gsime = "\u2A8E";
const gsiml = "\u2A90";
const gtcc = "\u2AA7";
const gtcir = "\u2A7A";
const gt = ">";
const GT = ">";
const Gt = "\u226B";
const gtdot = "\u22D7";
const gtlPar = "\u2995";
const gtquest = "\u2A7C";
const gtrapprox = "\u2A86";
const gtrarr = "\u2978";
const gtrdot = "\u22D7";
const gtreqless = "\u22DB";
const gtreqqless = "\u2A8C";
const gtrless = "\u2277";
const gtrsim = "\u2273";
const gvertneqq = "\u2269\uFE00";
const gvnE = "\u2269\uFE00";
const Hacek = "\u02C7";
const hairsp = "\u200A";
const half = "\xBD";
const hamilt = "\u210B";
const HARDcy = "\u042A";
const hardcy = "\u044A";
const harrcir = "\u2948";
const harr = "\u2194";
const hArr = "\u21D4";
const harrw = "\u21AD";
const Hat = "^";
const hbar = "\u210F";
const Hcirc = "\u0124";
const hcirc = "\u0125";
const hearts = "\u2665";
const heartsuit = "\u2665";
const hellip = "\u2026";
const hercon = "\u22B9";
const hfr = "\u{1D525}";
const Hfr = "\u210C";
const HilbertSpace = "\u210B";
const hksearow = "\u2925";
const hkswarow = "\u2926";
const hoarr = "\u21FF";
const homtht = "\u223B";
const hookleftarrow = "\u21A9";
const hookrightarrow = "\u21AA";
const hopf = "\u{1D559}";
const Hopf = "\u210D";
const horbar = "\u2015";
const HorizontalLine = "\u2500";
const hscr = "\u{1D4BD}";
const Hscr = "\u210B";
const hslash = "\u210F";
const Hstrok = "\u0126";
const hstrok = "\u0127";
const HumpDownHump = "\u224E";
const HumpEqual = "\u224F";
const hybull = "\u2043";
const hyphen = "\u2010";
const Iacute = "\xCD";
const iacute = "\xED";
const ic = "\u2063";
const Icirc = "\xCE";
const icirc = "\xEE";
const Icy = "\u0418";
const icy = "\u0438";
const Idot = "\u0130";
const IEcy = "\u0415";
const iecy = "\u0435";
const iexcl = "\xA1";
const iff = "\u21D4";
const ifr = "\u{1D526}";
const Ifr = "\u2111";
const Igrave = "\xCC";
const igrave = "\xEC";
const ii = "\u2148";
const iiiint = "\u2A0C";
const iiint = "\u222D";
const iinfin = "\u29DC";
const iiota = "\u2129";
const IJlig = "\u0132";
const ijlig = "\u0133";
const Imacr = "\u012A";
const imacr = "\u012B";
const image$1 = "\u2111";
const ImaginaryI = "\u2148";
const imagline = "\u2110";
const imagpart = "\u2111";
const imath = "\u0131";
const Im = "\u2111";
const imof = "\u22B7";
const imped = "\u01B5";
const Implies = "\u21D2";
const incare = "\u2105";
const infin = "\u221E";
const infintie = "\u29DD";
const inodot = "\u0131";
const intcal = "\u22BA";
const int = "\u222B";
const Int = "\u222C";
const integers = "\u2124";
const Integral = "\u222B";
const intercal = "\u22BA";
const Intersection = "\u22C2";
const intlarhk = "\u2A17";
const intprod = "\u2A3C";
const InvisibleComma = "\u2063";
const InvisibleTimes = "\u2062";
const IOcy = "\u0401";
const iocy = "\u0451";
const Iogon = "\u012E";
const iogon = "\u012F";
const Iopf = "\u{1D540}";
const iopf = "\u{1D55A}";
const Iota = "\u0399";
const iota = "\u03B9";
const iprod = "\u2A3C";
const iquest = "\xBF";
const iscr = "\u{1D4BE}";
const Iscr = "\u2110";
const isin = "\u2208";
const isindot = "\u22F5";
const isinE = "\u22F9";
const isins = "\u22F4";
const isinsv = "\u22F3";
const isinv = "\u2208";
const it = "\u2062";
const Itilde = "\u0128";
const itilde = "\u0129";
const Iukcy = "\u0406";
const iukcy = "\u0456";
const Iuml = "\xCF";
const iuml = "\xEF";
const Jcirc = "\u0134";
const jcirc = "\u0135";
const Jcy = "\u0419";
const jcy = "\u0439";
const Jfr = "\u{1D50D}";
const jfr = "\u{1D527}";
const jmath = "\u0237";
const Jopf = "\u{1D541}";
const jopf = "\u{1D55B}";
const Jscr = "\u{1D4A5}";
const jscr = "\u{1D4BF}";
const Jsercy = "\u0408";
const jsercy = "\u0458";
const Jukcy = "\u0404";
const jukcy = "\u0454";
const Kappa = "\u039A";
const kappa = "\u03BA";
const kappav = "\u03F0";
const Kcedil = "\u0136";
const kcedil = "\u0137";
const Kcy = "\u041A";
const kcy = "\u043A";
const Kfr = "\u{1D50E}";
const kfr = "\u{1D528}";
const kgreen = "\u0138";
const KHcy = "\u0425";
const khcy = "\u0445";
const KJcy = "\u040C";
const kjcy = "\u045C";
const Kopf = "\u{1D542}";
const kopf = "\u{1D55C}";
const Kscr = "\u{1D4A6}";
const kscr = "\u{1D4C0}";
const lAarr = "\u21DA";
const Lacute = "\u0139";
const lacute = "\u013A";
const laemptyv = "\u29B4";
const lagran = "\u2112";
const Lambda = "\u039B";
const lambda = "\u03BB";
const lang = "\u27E8";
const Lang = "\u27EA";
const langd = "\u2991";
const langle = "\u27E8";
const lap = "\u2A85";
const Laplacetrf = "\u2112";
const laquo = "\xAB";
const larrb = "\u21E4";
const larrbfs = "\u291F";
const larr = "\u2190";
const Larr = "\u219E";
const lArr = "\u21D0";
const larrfs = "\u291D";
const larrhk = "\u21A9";
const larrlp = "\u21AB";
const larrpl = "\u2939";
const larrsim = "\u2973";
const larrtl = "\u21A2";
const latail = "\u2919";
const lAtail = "\u291B";
const lat = "\u2AAB";
const late = "\u2AAD";
const lates = "\u2AAD\uFE00";
const lbarr = "\u290C";
const lBarr = "\u290E";
const lbbrk = "\u2772";
const lbrace = "{";
const lbrack = "[";
const lbrke = "\u298B";
const lbrksld = "\u298F";
const lbrkslu = "\u298D";
const Lcaron = "\u013D";
const lcaron = "\u013E";
const Lcedil = "\u013B";
const lcedil = "\u013C";
const lceil = "\u2308";
const lcub = "{";
const Lcy = "\u041B";
const lcy = "\u043B";
const ldca = "\u2936";
const ldquo = "\u201C";
const ldquor = "\u201E";
const ldrdhar = "\u2967";
const ldrushar = "\u294B";
const ldsh = "\u21B2";
const le = "\u2264";
const lE = "\u2266";
const LeftAngleBracket = "\u27E8";
const LeftArrowBar = "\u21E4";
const leftarrow = "\u2190";
const LeftArrow = "\u2190";
const Leftarrow = "\u21D0";
const LeftArrowRightArrow = "\u21C6";
const leftarrowtail = "\u21A2";
const LeftCeiling = "\u2308";
const LeftDoubleBracket = "\u27E6";
const LeftDownTeeVector = "\u2961";
const LeftDownVectorBar = "\u2959";
const LeftDownVector = "\u21C3";
const LeftFloor = "\u230A";
const leftharpoondown = "\u21BD";
const leftharpoonup = "\u21BC";
const leftleftarrows = "\u21C7";
const leftrightarrow = "\u2194";
const LeftRightArrow = "\u2194";
const Leftrightarrow = "\u21D4";
const leftrightarrows = "\u21C6";
const leftrightharpoons = "\u21CB";
const leftrightsquigarrow = "\u21AD";
const LeftRightVector = "\u294E";
const LeftTeeArrow = "\u21A4";
const LeftTee = "\u22A3";
const LeftTeeVector = "\u295A";
const leftthreetimes = "\u22CB";
const LeftTriangleBar = "\u29CF";
const LeftTriangle = "\u22B2";
const LeftTriangleEqual = "\u22B4";
const LeftUpDownVector = "\u2951";
const LeftUpTeeVector = "\u2960";
const LeftUpVectorBar = "\u2958";
const LeftUpVector = "\u21BF";
const LeftVectorBar = "\u2952";
const LeftVector = "\u21BC";
const lEg = "\u2A8B";
const leg = "\u22DA";
const leq = "\u2264";
const leqq = "\u2266";
const leqslant = "\u2A7D";
const lescc = "\u2AA8";
const les = "\u2A7D";
const lesdot = "\u2A7F";
const lesdoto = "\u2A81";
const lesdotor = "\u2A83";
const lesg = "\u22DA\uFE00";
const lesges = "\u2A93";
const lessapprox = "\u2A85";
const lessdot = "\u22D6";
const lesseqgtr = "\u22DA";
const lesseqqgtr = "\u2A8B";
const LessEqualGreater = "\u22DA";
const LessFullEqual = "\u2266";
const LessGreater = "\u2276";
const lessgtr = "\u2276";
const LessLess = "\u2AA1";
const lesssim = "\u2272";
const LessSlantEqual = "\u2A7D";
const LessTilde = "\u2272";
const lfisht = "\u297C";
const lfloor = "\u230A";
const Lfr = "\u{1D50F}";
const lfr = "\u{1D529}";
const lg = "\u2276";
const lgE = "\u2A91";
const lHar = "\u2962";
const lhard = "\u21BD";
const lharu = "\u21BC";
const lharul = "\u296A";
const lhblk = "\u2584";
const LJcy = "\u0409";
const ljcy = "\u0459";
const llarr = "\u21C7";
const ll = "\u226A";
const Ll = "\u22D8";
const llcorner = "\u231E";
const Lleftarrow = "\u21DA";
const llhard = "\u296B";
const lltri = "\u25FA";
const Lmidot = "\u013F";
const lmidot = "\u0140";
const lmoustache = "\u23B0";
const lmoust = "\u23B0";
const lnap = "\u2A89";
const lnapprox = "\u2A89";
const lne = "\u2A87";
const lnE = "\u2268";
const lneq = "\u2A87";
const lneqq = "\u2268";
const lnsim = "\u22E6";
const loang = "\u27EC";
const loarr = "\u21FD";
const lobrk = "\u27E6";
const longleftarrow = "\u27F5";
const LongLeftArrow = "\u27F5";
const Longleftarrow = "\u27F8";
const longleftrightarrow = "\u27F7";
const LongLeftRightArrow = "\u27F7";
const Longleftrightarrow = "\u27FA";
const longmapsto = "\u27FC";
const longrightarrow = "\u27F6";
const LongRightArrow = "\u27F6";
const Longrightarrow = "\u27F9";
const looparrowleft = "\u21AB";
const looparrowright = "\u21AC";
const lopar = "\u2985";
const Lopf = "\u{1D543}";
const lopf = "\u{1D55D}";
const loplus = "\u2A2D";
const lotimes = "\u2A34";
const lowast = "\u2217";
const lowbar = "_";
const LowerLeftArrow = "\u2199";
const LowerRightArrow = "\u2198";
const loz = "\u25CA";
const lozenge = "\u25CA";
const lozf = "\u29EB";
const lpar = "(";
const lparlt = "\u2993";
const lrarr = "\u21C6";
const lrcorner = "\u231F";
const lrhar = "\u21CB";
const lrhard = "\u296D";
const lrm = "\u200E";
const lrtri = "\u22BF";
const lsaquo = "\u2039";
const lscr = "\u{1D4C1}";
const Lscr = "\u2112";
const lsh = "\u21B0";
const Lsh = "\u21B0";
const lsim = "\u2272";
const lsime = "\u2A8D";
const lsimg = "\u2A8F";
const lsqb = "[";
const lsquo = "\u2018";
const lsquor = "\u201A";
const Lstrok = "\u0141";
const lstrok = "\u0142";
const ltcc = "\u2AA6";
const ltcir = "\u2A79";
const lt = "<";
const LT = "<";
const Lt = "\u226A";
const ltdot = "\u22D6";
const lthree = "\u22CB";
const ltimes = "\u22C9";
const ltlarr = "\u2976";
const ltquest = "\u2A7B";
const ltri = "\u25C3";
const ltrie = "\u22B4";
const ltrif = "\u25C2";
const ltrPar = "\u2996";
const lurdshar = "\u294A";
const luruhar = "\u2966";
const lvertneqq = "\u2268\uFE00";
const lvnE = "\u2268\uFE00";
const macr = "\xAF";
const male = "\u2642";
const malt = "\u2720";
const maltese = "\u2720";
const map$1 = "\u21A6";
const mapsto = "\u21A6";
const mapstodown = "\u21A7";
const mapstoleft = "\u21A4";
const mapstoup = "\u21A5";
const marker = "\u25AE";
const mcomma = "\u2A29";
const Mcy = "\u041C";
const mcy = "\u043C";
const mdash = "\u2014";
const mDDot = "\u223A";
const measuredangle = "\u2221";
const MediumSpace = "\u205F";
const Mellintrf = "\u2133";
const Mfr = "\u{1D510}";
const mfr = "\u{1D52A}";
const mho = "\u2127";
const micro = "\xB5";
const midast = "*";
const midcir = "\u2AF0";
const mid = "\u2223";
const middot = "\xB7";
const minusb = "\u229F";
const minus = "\u2212";
const minusd = "\u2238";
const minusdu = "\u2A2A";
const MinusPlus = "\u2213";
const mlcp = "\u2ADB";
const mldr = "\u2026";
const mnplus = "\u2213";
const models = "\u22A7";
const Mopf = "\u{1D544}";
const mopf = "\u{1D55E}";
const mp = "\u2213";
const mscr = "\u{1D4C2}";
const Mscr = "\u2133";
const mstpos = "\u223E";
const Mu = "\u039C";
const mu = "\u03BC";
const multimap = "\u22B8";
const mumap = "\u22B8";
const nabla = "\u2207";
const Nacute = "\u0143";
const nacute = "\u0144";
const nang = "\u2220\u20D2";
const nap = "\u2249";
const napE = "\u2A70\u0338";
const napid = "\u224B\u0338";
const napos = "\u0149";
const napprox = "\u2249";
const natural = "\u266E";
const naturals = "\u2115";
const natur = "\u266E";
const nbsp = "\xA0";
const nbump = "\u224E\u0338";
const nbumpe = "\u224F\u0338";
const ncap = "\u2A43";
const Ncaron = "\u0147";
const ncaron = "\u0148";
const Ncedil = "\u0145";
const ncedil = "\u0146";
const ncong = "\u2247";
const ncongdot = "\u2A6D\u0338";
const ncup = "\u2A42";
const Ncy = "\u041D";
const ncy = "\u043D";
const ndash = "\u2013";
const nearhk = "\u2924";
const nearr = "\u2197";
const neArr = "\u21D7";
const nearrow = "\u2197";
const ne = "\u2260";
const nedot = "\u2250\u0338";
const NegativeMediumSpace = "\u200B";
const NegativeThickSpace = "\u200B";
const NegativeThinSpace = "\u200B";
const NegativeVeryThinSpace = "\u200B";
const nequiv = "\u2262";
const nesear = "\u2928";
const nesim = "\u2242\u0338";
const NestedGreaterGreater = "\u226B";
const NestedLessLess = "\u226A";
const NewLine = "\n";
const nexist = "\u2204";
const nexists = "\u2204";
const Nfr = "\u{1D511}";
const nfr = "\u{1D52B}";
const ngE = "\u2267\u0338";
const nge = "\u2271";
const ngeq = "\u2271";
const ngeqq = "\u2267\u0338";
const ngeqslant = "\u2A7E\u0338";
const nges = "\u2A7E\u0338";
const nGg = "\u22D9\u0338";
const ngsim = "\u2275";
const nGt = "\u226B\u20D2";
const ngt = "\u226F";
const ngtr = "\u226F";
const nGtv = "\u226B\u0338";
const nharr = "\u21AE";
const nhArr = "\u21CE";
const nhpar = "\u2AF2";
const ni = "\u220B";
const nis = "\u22FC";
const nisd = "\u22FA";
const niv = "\u220B";
const NJcy = "\u040A";
const njcy = "\u045A";
const nlarr = "\u219A";
const nlArr = "\u21CD";
const nldr = "\u2025";
const nlE = "\u2266\u0338";
const nle = "\u2270";
const nleftarrow = "\u219A";
const nLeftarrow = "\u21CD";
const nleftrightarrow = "\u21AE";
const nLeftrightarrow = "\u21CE";
const nleq = "\u2270";
const nleqq = "\u2266\u0338";
const nleqslant = "\u2A7D\u0338";
const nles = "\u2A7D\u0338";
const nless = "\u226E";
const nLl = "\u22D8\u0338";
const nlsim = "\u2274";
const nLt = "\u226A\u20D2";
const nlt = "\u226E";
const nltri = "\u22EA";
const nltrie = "\u22EC";
const nLtv = "\u226A\u0338";
const nmid = "\u2224";
const NoBreak = "\u2060";
const NonBreakingSpace = "\xA0";
const nopf = "\u{1D55F}";
const Nopf = "\u2115";
const Not = "\u2AEC";
const not = "\xAC";
const NotCongruent = "\u2262";
const NotCupCap = "\u226D";
const NotDoubleVerticalBar = "\u2226";
const NotElement = "\u2209";
const NotEqual = "\u2260";
const NotEqualTilde = "\u2242\u0338";
const NotExists = "\u2204";
const NotGreater = "\u226F";
const NotGreaterEqual = "\u2271";
const NotGreaterFullEqual = "\u2267\u0338";
const NotGreaterGreater = "\u226B\u0338";
const NotGreaterLess = "\u2279";
const NotGreaterSlantEqual = "\u2A7E\u0338";
const NotGreaterTilde = "\u2275";
const NotHumpDownHump = "\u224E\u0338";
const NotHumpEqual = "\u224F\u0338";
const notin = "\u2209";
const notindot = "\u22F5\u0338";
const notinE = "\u22F9\u0338";
const notinva = "\u2209";
const notinvb = "\u22F7";
const notinvc = "\u22F6";
const NotLeftTriangleBar = "\u29CF\u0338";
const NotLeftTriangle = "\u22EA";
const NotLeftTriangleEqual = "\u22EC";
const NotLess = "\u226E";
const NotLessEqual = "\u2270";
const NotLessGreater = "\u2278";
const NotLessLess = "\u226A\u0338";
const NotLessSlantEqual = "\u2A7D\u0338";
const NotLessTilde = "\u2274";
const NotNestedGreaterGreater = "\u2AA2\u0338";
const NotNestedLessLess = "\u2AA1\u0338";
const notni = "\u220C";
const notniva = "\u220C";
const notnivb = "\u22FE";
const notnivc = "\u22FD";
const NotPrecedes = "\u2280";
const NotPrecedesEqual = "\u2AAF\u0338";
const NotPrecedesSlantEqual = "\u22E0";
const NotReverseElement = "\u220C";
const NotRightTriangleBar = "\u29D0\u0338";
const NotRightTriangle = "\u22EB";
const NotRightTriangleEqual = "\u22ED";
const NotSquareSubset = "\u228F\u0338";
const NotSquareSubsetEqual = "\u22E2";
const NotSquareSuperset = "\u2290\u0338";
const NotSquareSupersetEqual = "\u22E3";
const NotSubset = "\u2282\u20D2";
const NotSubsetEqual = "\u2288";
const NotSucceeds = "\u2281";
const NotSucceedsEqual = "\u2AB0\u0338";
const NotSucceedsSlantEqual = "\u22E1";
const NotSucceedsTilde = "\u227F\u0338";
const NotSuperset = "\u2283\u20D2";
const NotSupersetEqual = "\u2289";
const NotTilde = "\u2241";
const NotTildeEqual = "\u2244";
const NotTildeFullEqual = "\u2247";
const NotTildeTilde = "\u2249";
const NotVerticalBar = "\u2224";
const nparallel = "\u2226";
const npar = "\u2226";
const nparsl = "\u2AFD\u20E5";
const npart = "\u2202\u0338";
const npolint = "\u2A14";
const npr = "\u2280";
const nprcue = "\u22E0";
const nprec = "\u2280";
const npreceq = "\u2AAF\u0338";
const npre = "\u2AAF\u0338";
const nrarrc = "\u2933\u0338";
const nrarr = "\u219B";
const nrArr = "\u21CF";
const nrarrw = "\u219D\u0338";
const nrightarrow = "\u219B";
const nRightarrow = "\u21CF";
const nrtri = "\u22EB";
const nrtrie = "\u22ED";
const nsc = "\u2281";
const nsccue = "\u22E1";
const nsce = "\u2AB0\u0338";
const Nscr = "\u{1D4A9}";
const nscr = "\u{1D4C3}";
const nshortmid = "\u2224";
const nshortparallel = "\u2226";
const nsim = "\u2241";
const nsime = "\u2244";
const nsimeq = "\u2244";
const nsmid = "\u2224";
const nspar = "\u2226";
const nsqsube = "\u22E2";
const nsqsupe = "\u22E3";
const nsub = "\u2284";
const nsubE = "\u2AC5\u0338";
const nsube = "\u2288";
const nsubset = "\u2282\u20D2";
const nsubseteq = "\u2288";
const nsubseteqq = "\u2AC5\u0338";
const nsucc = "\u2281";
const nsucceq = "\u2AB0\u0338";
const nsup = "\u2285";
const nsupE = "\u2AC6\u0338";
const nsupe = "\u2289";
const nsupset = "\u2283\u20D2";
const nsupseteq = "\u2289";
const nsupseteqq = "\u2AC6\u0338";
const ntgl = "\u2279";
const Ntilde = "\xD1";
const ntilde = "\xF1";
const ntlg = "\u2278";
const ntriangleleft = "\u22EA";
const ntrianglelefteq = "\u22EC";
const ntriangleright = "\u22EB";
const ntrianglerighteq = "\u22ED";
const Nu = "\u039D";
const nu = "\u03BD";
const num = "#";
const numero = "\u2116";
const numsp = "\u2007";
const nvap = "\u224D\u20D2";
const nvdash = "\u22AC";
const nvDash = "\u22AD";
const nVdash = "\u22AE";
const nVDash = "\u22AF";
const nvge = "\u2265\u20D2";
const nvgt = ">\u20D2";
const nvHarr = "\u2904";
const nvinfin = "\u29DE";
const nvlArr = "\u2902";
const nvle = "\u2264\u20D2";
const nvlt = "<\u20D2";
const nvltrie = "\u22B4\u20D2";
const nvrArr = "\u2903";
const nvrtrie = "\u22B5\u20D2";
const nvsim = "\u223C\u20D2";
const nwarhk = "\u2923";
const nwarr = "\u2196";
const nwArr = "\u21D6";
const nwarrow = "\u2196";
const nwnear = "\u2927";
const Oacute = "\xD3";
const oacute = "\xF3";
const oast = "\u229B";
const Ocirc = "\xD4";
const ocirc = "\xF4";
const ocir = "\u229A";
const Ocy = "\u041E";
const ocy = "\u043E";
const odash = "\u229D";
const Odblac = "\u0150";
const odblac = "\u0151";
const odiv = "\u2A38";
const odot = "\u2299";
const odsold = "\u29BC";
const OElig = "\u0152";
const oelig = "\u0153";
const ofcir = "\u29BF";
const Ofr = "\u{1D512}";
const ofr = "\u{1D52C}";
const ogon = "\u02DB";
const Ograve = "\xD2";
const ograve = "\xF2";
const ogt = "\u29C1";
const ohbar = "\u29B5";
const ohm = "\u03A9";
const oint = "\u222E";
const olarr = "\u21BA";
const olcir = "\u29BE";
const olcross = "\u29BB";
const oline = "\u203E";
const olt = "\u29C0";
const Omacr = "\u014C";
const omacr = "\u014D";
const Omega = "\u03A9";
const omega = "\u03C9";
const Omicron = "\u039F";
const omicron = "\u03BF";
const omid = "\u29B6";
const ominus = "\u2296";
const Oopf = "\u{1D546}";
const oopf = "\u{1D560}";
const opar = "\u29B7";
const OpenCurlyDoubleQuote = "\u201C";
const OpenCurlyQuote = "\u2018";
const operp = "\u29B9";
const oplus = "\u2295";
const orarr = "\u21BB";
const Or = "\u2A54";
const or = "\u2228";
const ord = "\u2A5D";
const order = "\u2134";
const orderof = "\u2134";
const ordf = "\xAA";
const ordm = "\xBA";
const origof = "\u22B6";
const oror = "\u2A56";
const orslope = "\u2A57";
const orv = "\u2A5B";
const oS = "\u24C8";
const Oscr = "\u{1D4AA}";
const oscr = "\u2134";
const Oslash = "\xD8";
const oslash = "\xF8";
const osol = "\u2298";
const Otilde = "\xD5";
const otilde = "\xF5";
const otimesas = "\u2A36";
const Otimes = "\u2A37";
const otimes = "\u2297";
const Ouml = "\xD6";
const ouml = "\xF6";
const ovbar = "\u233D";
const OverBar = "\u203E";
const OverBrace = "\u23DE";
const OverBracket = "\u23B4";
const OverParenthesis = "\u23DC";
const para = "\xB6";
const parallel = "\u2225";
const par = "\u2225";
const parsim = "\u2AF3";
const parsl = "\u2AFD";
const part = "\u2202";
const PartialD = "\u2202";
const Pcy = "\u041F";
const pcy = "\u043F";
const percnt = "%";
const period = ".";
const permil = "\u2030";
const perp = "\u22A5";
const pertenk = "\u2031";
const Pfr = "\u{1D513}";
const pfr = "\u{1D52D}";
const Phi = "\u03A6";
const phi = "\u03C6";
const phiv = "\u03D5";
const phmmat = "\u2133";
const phone = "\u260E";
const Pi = "\u03A0";
const pi = "\u03C0";
const pitchfork = "\u22D4";
const piv = "\u03D6";
const planck = "\u210F";
const planckh = "\u210E";
const plankv = "\u210F";
const plusacir = "\u2A23";
const plusb = "\u229E";
const pluscir = "\u2A22";
const plus = "+";
const plusdo = "\u2214";
const plusdu = "\u2A25";
const pluse = "\u2A72";
const PlusMinus = "\xB1";
const plusmn = "\xB1";
const plussim = "\u2A26";
const plustwo = "\u2A27";
const pm = "\xB1";
const Poincareplane = "\u210C";
const pointint = "\u2A15";
const popf = "\u{1D561}";
const Popf = "\u2119";
const pound = "\xA3";
const prap = "\u2AB7";
const Pr = "\u2ABB";
const pr = "\u227A";
const prcue = "\u227C";
const precapprox = "\u2AB7";
const prec = "\u227A";
const preccurlyeq = "\u227C";
const Precedes = "\u227A";
const PrecedesEqual = "\u2AAF";
const PrecedesSlantEqual = "\u227C";
const PrecedesTilde = "\u227E";
const preceq = "\u2AAF";
const precnapprox = "\u2AB9";
const precneqq = "\u2AB5";
const precnsim = "\u22E8";
const pre = "\u2AAF";
const prE = "\u2AB3";
const precsim = "\u227E";
const prime = "\u2032";
const Prime = "\u2033";
const primes = "\u2119";
const prnap = "\u2AB9";
const prnE = "\u2AB5";
const prnsim = "\u22E8";
const prod = "\u220F";
const Product = "\u220F";
const profalar = "\u232E";
const profline = "\u2312";
const profsurf = "\u2313";
const prop = "\u221D";
const Proportional = "\u221D";
const Proportion = "\u2237";
const propto = "\u221D";
const prsim = "\u227E";
const prurel = "\u22B0";
const Pscr = "\u{1D4AB}";
const pscr = "\u{1D4C5}";
const Psi = "\u03A8";
const psi = "\u03C8";
const puncsp = "\u2008";
const Qfr = "\u{1D514}";
const qfr = "\u{1D52E}";
const qint = "\u2A0C";
const qopf = "\u{1D562}";
const Qopf = "\u211A";
const qprime = "\u2057";
const Qscr = "\u{1D4AC}";
const qscr = "\u{1D4C6}";
const quaternions = "\u210D";
const quatint = "\u2A16";
const quest = "?";
const questeq = "\u225F";
const quot = '"';
const QUOT = '"';
const rAarr = "\u21DB";
const race = "\u223D\u0331";
const Racute = "\u0154";
const racute = "\u0155";
const radic = "\u221A";
const raemptyv = "\u29B3";
const rang = "\u27E9";
const Rang = "\u27EB";
const rangd = "\u2992";
const range = "\u29A5";
const rangle = "\u27E9";
const raquo = "\xBB";
const rarrap = "\u2975";
const rarrb = "\u21E5";
const rarrbfs = "\u2920";
const rarrc = "\u2933";
const rarr = "\u2192";
const Rarr = "\u21A0";
const rArr = "\u21D2";
const rarrfs = "\u291E";
const rarrhk = "\u21AA";
const rarrlp = "\u21AC";
const rarrpl = "\u2945";
const rarrsim = "\u2974";
const Rarrtl = "\u2916";
const rarrtl = "\u21A3";
const rarrw = "\u219D";
const ratail = "\u291A";
const rAtail = "\u291C";
const ratio = "\u2236";
const rationals = "\u211A";
const rbarr = "\u290D";
const rBarr = "\u290F";
const RBarr = "\u2910";
const rbbrk = "\u2773";
const rbrace = "}";
const rbrack = "]";
const rbrke = "\u298C";
const rbrksld = "\u298E";
const rbrkslu = "\u2990";
const Rcaron = "\u0158";
const rcaron = "\u0159";
const Rcedil = "\u0156";
const rcedil = "\u0157";
const rceil = "\u2309";
const rcub = "}";
const Rcy = "\u0420";
const rcy = "\u0440";
const rdca = "\u2937";
const rdldhar = "\u2969";
const rdquo = "\u201D";
const rdquor = "\u201D";
const rdsh = "\u21B3";
const real = "\u211C";
const realine = "\u211B";
const realpart = "\u211C";
const reals = "\u211D";
const Re = "\u211C";
const rect = "\u25AD";
const reg = "\xAE";
const REG = "\xAE";
const ReverseElement = "\u220B";
const ReverseEquilibrium = "\u21CB";
const ReverseUpEquilibrium = "\u296F";
const rfisht = "\u297D";
const rfloor = "\u230B";
const rfr = "\u{1D52F}";
const Rfr = "\u211C";
const rHar = "\u2964";
const rhard = "\u21C1";
const rharu = "\u21C0";
const rharul = "\u296C";
const Rho = "\u03A1";
const rho = "\u03C1";
const rhov = "\u03F1";
const RightAngleBracket = "\u27E9";
const RightArrowBar = "\u21E5";
const rightarrow = "\u2192";
const RightArrow = "\u2192";
const Rightarrow = "\u21D2";
const RightArrowLeftArrow = "\u21C4";
const rightarrowtail = "\u21A3";
const RightCeiling = "\u2309";
const RightDoubleBracket = "\u27E7";
const RightDownTeeVector = "\u295D";
const RightDownVectorBar = "\u2955";
const RightDownVector = "\u21C2";
const RightFloor = "\u230B";
const rightharpoondown = "\u21C1";
const rightharpoonup = "\u21C0";
const rightleftarrows = "\u21C4";
const rightleftharpoons = "\u21CC";
const rightrightarrows = "\u21C9";
const rightsquigarrow = "\u219D";
const RightTeeArrow = "\u21A6";
const RightTee = "\u22A2";
const RightTeeVector = "\u295B";
const rightthreetimes = "\u22CC";
const RightTriangleBar = "\u29D0";
const RightTriangle = "\u22B3";
const RightTriangleEqual = "\u22B5";
const RightUpDownVector = "\u294F";
const RightUpTeeVector = "\u295C";
const RightUpVectorBar = "\u2954";
const RightUpVector = "\u21BE";
const RightVectorBar = "\u2953";
const RightVector = "\u21C0";
const ring = "\u02DA";
const risingdotseq = "\u2253";
const rlarr = "\u21C4";
const rlhar = "\u21CC";
const rlm = "\u200F";
const rmoustache = "\u23B1";
const rmoust = "\u23B1";
const rnmid = "\u2AEE";
const roang = "\u27ED";
const roarr = "\u21FE";
const robrk = "\u27E7";
const ropar = "\u2986";
const ropf = "\u{1D563}";
const Ropf = "\u211D";
const roplus = "\u2A2E";
const rotimes = "\u2A35";
const RoundImplies = "\u2970";
const rpar = ")";
const rpargt = "\u2994";
const rppolint = "\u2A12";
const rrarr = "\u21C9";
const Rrightarrow = "\u21DB";
const rsaquo = "\u203A";
const rscr = "\u{1D4C7}";
const Rscr = "\u211B";
const rsh = "\u21B1";
const Rsh = "\u21B1";
const rsqb = "]";
const rsquo = "\u2019";
const rsquor = "\u2019";
const rthree = "\u22CC";
const rtimes = "\u22CA";
const rtri = "\u25B9";
const rtrie = "\u22B5";
const rtrif = "\u25B8";
const rtriltri = "\u29CE";
const RuleDelayed = "\u29F4";
const ruluhar = "\u2968";
const rx = "\u211E";
const Sacute = "\u015A";
const sacute = "\u015B";
const sbquo = "\u201A";
const scap = "\u2AB8";
const Scaron = "\u0160";
const scaron = "\u0161";
const Sc = "\u2ABC";
const sc = "\u227B";
const sccue = "\u227D";
const sce = "\u2AB0";
const scE = "\u2AB4";
const Scedil = "\u015E";
const scedil = "\u015F";
const Scirc = "\u015C";
const scirc = "\u015D";
const scnap = "\u2ABA";
const scnE = "\u2AB6";
const scnsim = "\u22E9";
const scpolint = "\u2A13";
const scsim = "\u227F";
const Scy = "\u0421";
const scy = "\u0441";
const sdotb = "\u22A1";
const sdot = "\u22C5";
const sdote = "\u2A66";
const searhk = "\u2925";
const searr = "\u2198";
const seArr = "\u21D8";
const searrow = "\u2198";
const sect = "\xA7";
const semi = ";";
const seswar = "\u2929";
const setminus = "\u2216";
const setmn = "\u2216";
const sext = "\u2736";
const Sfr = "\u{1D516}";
const sfr = "\u{1D530}";
const sfrown = "\u2322";
const sharp = "\u266F";
const SHCHcy = "\u0429";
const shchcy = "\u0449";
const SHcy = "\u0428";
const shcy = "\u0448";
const ShortDownArrow = "\u2193";
const ShortLeftArrow = "\u2190";
const shortmid = "\u2223";
const shortparallel = "\u2225";
const ShortRightArrow = "\u2192";
const ShortUpArrow = "\u2191";
const shy = "\xAD";
const Sigma = "\u03A3";
const sigma = "\u03C3";
const sigmaf = "\u03C2";
const sigmav = "\u03C2";
const sim = "\u223C";
const simdot = "\u2A6A";
const sime = "\u2243";
const simeq = "\u2243";
const simg = "\u2A9E";
const simgE = "\u2AA0";
const siml = "\u2A9D";
const simlE = "\u2A9F";
const simne = "\u2246";
const simplus = "\u2A24";
const simrarr = "\u2972";
const slarr = "\u2190";
const SmallCircle = "\u2218";
const smallsetminus = "\u2216";
const smashp = "\u2A33";
const smeparsl = "\u29E4";
const smid = "\u2223";
const smile = "\u2323";
const smt = "\u2AAA";
const smte = "\u2AAC";
const smtes = "\u2AAC\uFE00";
const SOFTcy = "\u042C";
const softcy = "\u044C";
const solbar = "\u233F";
const solb = "\u29C4";
const sol = "/";
const Sopf = "\u{1D54A}";
const sopf = "\u{1D564}";
const spades = "\u2660";
const spadesuit = "\u2660";
const spar = "\u2225";
const sqcap = "\u2293";
const sqcaps = "\u2293\uFE00";
const sqcup = "\u2294";
const sqcups = "\u2294\uFE00";
const Sqrt = "\u221A";
const sqsub = "\u228F";
const sqsube = "\u2291";
const sqsubset = "\u228F";
const sqsubseteq = "\u2291";
const sqsup = "\u2290";
const sqsupe = "\u2292";
const sqsupset = "\u2290";
const sqsupseteq = "\u2292";
const square = "\u25A1";
const Square = "\u25A1";
const SquareIntersection = "\u2293";
const SquareSubset = "\u228F";
const SquareSubsetEqual = "\u2291";
const SquareSuperset = "\u2290";
const SquareSupersetEqual = "\u2292";
const SquareUnion = "\u2294";
const squarf = "\u25AA";
const squ = "\u25A1";
const squf = "\u25AA";
const srarr = "\u2192";
const Sscr = "\u{1D4AE}";
const sscr = "\u{1D4C8}";
const ssetmn = "\u2216";
const ssmile = "\u2323";
const sstarf = "\u22C6";
const Star = "\u22C6";
const star = "\u2606";
const starf = "\u2605";
const straightepsilon = "\u03F5";
const straightphi = "\u03D5";
const strns = "\xAF";
const sub = "\u2282";
const Sub = "\u22D0";
const subdot = "\u2ABD";
const subE = "\u2AC5";
const sube = "\u2286";
const subedot = "\u2AC3";
const submult = "\u2AC1";
const subnE = "\u2ACB";
const subne = "\u228A";
const subplus = "\u2ABF";
const subrarr = "\u2979";
const subset = "\u2282";
const Subset = "\u22D0";
const subseteq = "\u2286";
const subseteqq = "\u2AC5";
const SubsetEqual = "\u2286";
const subsetneq = "\u228A";
const subsetneqq = "\u2ACB";
const subsim = "\u2AC7";
const subsub = "\u2AD5";
const subsup = "\u2AD3";
const succapprox = "\u2AB8";
const succ = "\u227B";
const succcurlyeq = "\u227D";
const Succeeds = "\u227B";
const SucceedsEqual = "\u2AB0";
const SucceedsSlantEqual = "\u227D";
const SucceedsTilde = "\u227F";
const succeq = "\u2AB0";
const succnapprox = "\u2ABA";
const succneqq = "\u2AB6";
const succnsim = "\u22E9";
const succsim = "\u227F";
const SuchThat = "\u220B";
const sum = "\u2211";
const Sum = "\u2211";
const sung = "\u266A";
const sup1 = "\xB9";
const sup2 = "\xB2";
const sup3 = "\xB3";
const sup = "\u2283";
const Sup = "\u22D1";
const supdot = "\u2ABE";
const supdsub = "\u2AD8";
const supE = "\u2AC6";
const supe = "\u2287";
const supedot = "\u2AC4";
const Superset = "\u2283";
const SupersetEqual = "\u2287";
const suphsol = "\u27C9";
const suphsub = "\u2AD7";
const suplarr = "\u297B";
const supmult = "\u2AC2";
const supnE = "\u2ACC";
const supne = "\u228B";
const supplus = "\u2AC0";
const supset = "\u2283";
const Supset = "\u22D1";
const supseteq = "\u2287";
const supseteqq = "\u2AC6";
const supsetneq = "\u228B";
const supsetneqq = "\u2ACC";
const supsim = "\u2AC8";
const supsub = "\u2AD4";
const supsup = "\u2AD6";
const swarhk = "\u2926";
const swarr = "\u2199";
const swArr = "\u21D9";
const swarrow = "\u2199";
const swnwar = "\u292A";
const szlig = "\xDF";
const Tab = "	";
const target = "\u2316";
const Tau = "\u03A4";
const tau = "\u03C4";
const tbrk = "\u23B4";
const Tcaron = "\u0164";
const tcaron = "\u0165";
const Tcedil = "\u0162";
const tcedil = "\u0163";
const Tcy = "\u0422";
const tcy = "\u0442";
const tdot = "\u20DB";
const telrec = "\u2315";
const Tfr = "\u{1D517}";
const tfr = "\u{1D531}";
const there4 = "\u2234";
const therefore = "\u2234";
const Therefore = "\u2234";
const Theta = "\u0398";
const theta = "\u03B8";
const thetasym = "\u03D1";
const thetav = "\u03D1";
const thickapprox = "\u2248";
const thicksim = "\u223C";
const ThickSpace = "\u205F\u200A";
const ThinSpace = "\u2009";
const thinsp = "\u2009";
const thkap = "\u2248";
const thksim = "\u223C";
const THORN = "\xDE";
const thorn = "\xFE";
const tilde = "\u02DC";
const Tilde = "\u223C";
const TildeEqual = "\u2243";
const TildeFullEqual = "\u2245";
const TildeTilde = "\u2248";
const timesbar = "\u2A31";
const timesb = "\u22A0";
const times = "\xD7";
const timesd = "\u2A30";
const tint = "\u222D";
const toea = "\u2928";
const topbot = "\u2336";
const topcir = "\u2AF1";
const top = "\u22A4";
const Topf = "\u{1D54B}";
const topf = "\u{1D565}";
const topfork = "\u2ADA";
const tosa = "\u2929";
const tprime = "\u2034";
const trade = "\u2122";
const TRADE = "\u2122";
const triangle = "\u25B5";
const triangledown = "\u25BF";
const triangleleft = "\u25C3";
const trianglelefteq = "\u22B4";
const triangleq = "\u225C";
const triangleright = "\u25B9";
const trianglerighteq = "\u22B5";
const tridot = "\u25EC";
const trie = "\u225C";
const triminus = "\u2A3A";
const TripleDot = "\u20DB";
const triplus = "\u2A39";
const trisb = "\u29CD";
const tritime = "\u2A3B";
const trpezium = "\u23E2";
const Tscr = "\u{1D4AF}";
const tscr = "\u{1D4C9}";
const TScy = "\u0426";
const tscy = "\u0446";
const TSHcy = "\u040B";
const tshcy = "\u045B";
const Tstrok = "\u0166";
const tstrok = "\u0167";
const twixt = "\u226C";
const twoheadleftarrow = "\u219E";
const twoheadrightarrow = "\u21A0";
const Uacute = "\xDA";
const uacute = "\xFA";
const uarr = "\u2191";
const Uarr = "\u219F";
const uArr = "\u21D1";
const Uarrocir = "\u2949";
const Ubrcy = "\u040E";
const ubrcy = "\u045E";
const Ubreve = "\u016C";
const ubreve = "\u016D";
const Ucirc = "\xDB";
const ucirc = "\xFB";
const Ucy = "\u0423";
const ucy = "\u0443";
const udarr = "\u21C5";
const Udblac = "\u0170";
const udblac = "\u0171";
const udhar = "\u296E";
const ufisht = "\u297E";
const Ufr = "\u{1D518}";
const ufr = "\u{1D532}";
const Ugrave = "\xD9";
const ugrave = "\xF9";
const uHar = "\u2963";
const uharl = "\u21BF";
const uharr = "\u21BE";
const uhblk = "\u2580";
const ulcorn = "\u231C";
const ulcorner = "\u231C";
const ulcrop = "\u230F";
const ultri = "\u25F8";
const Umacr = "\u016A";
const umacr = "\u016B";
const uml = "\xA8";
const UnderBar = "_";
const UnderBrace = "\u23DF";
const UnderBracket = "\u23B5";
const UnderParenthesis = "\u23DD";
const Union = "\u22C3";
const UnionPlus = "\u228E";
const Uogon = "\u0172";
const uogon = "\u0173";
const Uopf = "\u{1D54C}";
const uopf = "\u{1D566}";
const UpArrowBar = "\u2912";
const uparrow = "\u2191";
const UpArrow = "\u2191";
const Uparrow = "\u21D1";
const UpArrowDownArrow = "\u21C5";
const updownarrow = "\u2195";
const UpDownArrow = "\u2195";
const Updownarrow = "\u21D5";
const UpEquilibrium = "\u296E";
const upharpoonleft = "\u21BF";
const upharpoonright = "\u21BE";
const uplus = "\u228E";
const UpperLeftArrow = "\u2196";
const UpperRightArrow = "\u2197";
const upsi = "\u03C5";
const Upsi = "\u03D2";
const upsih = "\u03D2";
const Upsilon = "\u03A5";
const upsilon = "\u03C5";
const UpTeeArrow = "\u21A5";
const UpTee = "\u22A5";
const upuparrows = "\u21C8";
const urcorn = "\u231D";
const urcorner = "\u231D";
const urcrop = "\u230E";
const Uring = "\u016E";
const uring = "\u016F";
const urtri = "\u25F9";
const Uscr = "\u{1D4B0}";
const uscr = "\u{1D4CA}";
const utdot = "\u22F0";
const Utilde = "\u0168";
const utilde = "\u0169";
const utri = "\u25B5";
const utrif = "\u25B4";
const uuarr = "\u21C8";
const Uuml = "\xDC";
const uuml = "\xFC";
const uwangle = "\u29A7";
const vangrt = "\u299C";
const varepsilon = "\u03F5";
const varkappa = "\u03F0";
const varnothing = "\u2205";
const varphi = "\u03D5";
const varpi = "\u03D6";
const varpropto = "\u221D";
const varr = "\u2195";
const vArr = "\u21D5";
const varrho = "\u03F1";
const varsigma = "\u03C2";
const varsubsetneq = "\u228A\uFE00";
const varsubsetneqq = "\u2ACB\uFE00";
const varsupsetneq = "\u228B\uFE00";
const varsupsetneqq = "\u2ACC\uFE00";
const vartheta = "\u03D1";
const vartriangleleft = "\u22B2";
const vartriangleright = "\u22B3";
const vBar = "\u2AE8";
const Vbar = "\u2AEB";
const vBarv = "\u2AE9";
const Vcy = "\u0412";
const vcy = "\u0432";
const vdash = "\u22A2";
const vDash = "\u22A8";
const Vdash = "\u22A9";
const VDash = "\u22AB";
const Vdashl = "\u2AE6";
const veebar = "\u22BB";
const vee = "\u2228";
const Vee = "\u22C1";
const veeeq = "\u225A";
const vellip = "\u22EE";
const verbar = "|";
const Verbar = "\u2016";
const vert = "|";
const Vert = "\u2016";
const VerticalBar = "\u2223";
const VerticalLine = "|";
const VerticalSeparator = "\u2758";
const VerticalTilde = "\u2240";
const VeryThinSpace = "\u200A";
const Vfr = "\u{1D519}";
const vfr = "\u{1D533}";
const vltri = "\u22B2";
const vnsub = "\u2282\u20D2";
const vnsup = "\u2283\u20D2";
const Vopf = "\u{1D54D}";
const vopf = "\u{1D567}";
const vprop = "\u221D";
const vrtri = "\u22B3";
const Vscr = "\u{1D4B1}";
const vscr = "\u{1D4CB}";
const vsubnE = "\u2ACB\uFE00";
const vsubne = "\u228A\uFE00";
const vsupnE = "\u2ACC\uFE00";
const vsupne = "\u228B\uFE00";
const Vvdash = "\u22AA";
const vzigzag = "\u299A";
const Wcirc = "\u0174";
const wcirc = "\u0175";
const wedbar = "\u2A5F";
const wedge = "\u2227";
const Wedge = "\u22C0";
const wedgeq = "\u2259";
const weierp = "\u2118";
const Wfr = "\u{1D51A}";
const wfr = "\u{1D534}";
const Wopf = "\u{1D54E}";
const wopf = "\u{1D568}";
const wp = "\u2118";
const wr = "\u2240";
const wreath = "\u2240";
const Wscr = "\u{1D4B2}";
const wscr = "\u{1D4CC}";
const xcap = "\u22C2";
const xcirc = "\u25EF";
const xcup = "\u22C3";
const xdtri = "\u25BD";
const Xfr = "\u{1D51B}";
const xfr = "\u{1D535}";
const xharr = "\u27F7";
const xhArr = "\u27FA";
const Xi = "\u039E";
const xi = "\u03BE";
const xlarr = "\u27F5";
const xlArr = "\u27F8";
const xmap = "\u27FC";
const xnis = "\u22FB";
const xodot = "\u2A00";
const Xopf = "\u{1D54F}";
const xopf = "\u{1D569}";
const xoplus = "\u2A01";
const xotime = "\u2A02";
const xrarr = "\u27F6";
const xrArr = "\u27F9";
const Xscr = "\u{1D4B3}";
const xscr = "\u{1D4CD}";
const xsqcup = "\u2A06";
const xuplus = "\u2A04";
const xutri = "\u25B3";
const xvee = "\u22C1";
const xwedge = "\u22C0";
const Yacute = "\xDD";
const yacute = "\xFD";
const YAcy = "\u042F";
const yacy = "\u044F";
const Ycirc = "\u0176";
const ycirc = "\u0177";
const Ycy = "\u042B";
const ycy = "\u044B";
const yen = "\xA5";
const Yfr = "\u{1D51C}";
const yfr = "\u{1D536}";
const YIcy = "\u0407";
const yicy = "\u0457";
const Yopf = "\u{1D550}";
const yopf = "\u{1D56A}";
const Yscr = "\u{1D4B4}";
const yscr = "\u{1D4CE}";
const YUcy = "\u042E";
const yucy = "\u044E";
const yuml = "\xFF";
const Yuml = "\u0178";
const Zacute = "\u0179";
const zacute = "\u017A";
const Zcaron = "\u017D";
const zcaron = "\u017E";
const Zcy = "\u0417";
const zcy = "\u0437";
const Zdot = "\u017B";
const zdot = "\u017C";
const zeetrf = "\u2128";
const ZeroWidthSpace = "\u200B";
const Zeta = "\u0396";
const zeta = "\u03B6";
const zfr = "\u{1D537}";
const Zfr = "\u2128";
const ZHcy = "\u0416";
const zhcy = "\u0436";
const zigrarr = "\u21DD";
const zopf = "\u{1D56B}";
const Zopf = "\u2124";
const Zscr = "\u{1D4B5}";
const zscr = "\u{1D4CF}";
const zwj = "\u200D";
const zwnj = "\u200C";
const require$$0 = {
  Aacute,
  aacute,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc,
  acirc,
  acute,
  Acy,
  acy,
  AElig,
  aelig,
  af,
  Afr,
  afr,
  Agrave,
  agrave,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp,
  AMP,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos,
  ApplyFunction,
  approx,
  approxeq,
  Aring,
  aring,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde,
  atilde,
  Auml,
  auml,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block: block$1,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil,
  ccedil,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil,
  Cedilla,
  cemptyv,
  cent,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check: check2,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy4,
  COPY,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute,
  eacute,
  easter,
  Ecaron,
  ecaron,
  Ecirc,
  ecirc,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave,
  egrave,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH,
  eth,
  Euml,
  euml,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12,
  frac13,
  frac14,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt,
  GT,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute,
  iacute,
  ic,
  Icirc,
  icirc,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl,
  iff,
  ifr,
  Ifr,
  Igrave,
  igrave,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image: image$1,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "\u2208",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml,
  iuml,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt,
  LT,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr,
  male,
  malt,
  maltese,
  "Map": "\u2905",
  map: map$1,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro,
  midast,
  midcir,
  mid,
  middot,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde,
  ntilde,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute,
  oacute,
  oast,
  Ocirc,
  ocirc,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve,
  ograve,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf,
  ordm,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash,
  oslash,
  osol,
  Otilde,
  otilde,
  otimesas,
  Otimes,
  otimes,
  Ouml,
  ouml,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot,
  QUOT,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range,
  rangle,
  raquo,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg,
  REG,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1,
  sup2,
  sup3,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN,
  thorn,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute,
  uacute,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc,
  ucirc,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave,
  ugrave,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml,
  uuml,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute,
  yacute,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
var entities = require$$0;
var regex$4 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var encodeCache = {};
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = encodeCache[exclude] = [];
  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    if (/^[0-9a-z]$/i.test(ch)) {
      cache.push(ch);
    } else {
      cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    }
  }
  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }
  return cache;
}
function encode$2(string, exclude, keepEscaped) {
  var i, l, code3, nextCode, cache, result2 = "";
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode$2.defaultChars;
  }
  if (typeof keepEscaped === "undefined") {
    keepEscaped = true;
  }
  cache = getEncodeCache(exclude);
  for (i = 0, l = string.length; i < l; i++) {
    code3 = string.charCodeAt(i);
    if (keepEscaped && code3 === 37 && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result2 += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }
    if (code3 < 128) {
      result2 += cache[code3];
      continue;
    }
    if (code3 >= 55296 && code3 <= 57343) {
      if (code3 >= 55296 && code3 <= 56319 && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result2 += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result2 += "%EF%BF%BD";
      continue;
    }
    result2 += encodeURIComponent(string[i]);
  }
  return result2;
}
encode$2.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode$2.componentChars = "-_.!~*'()";
var encode_1 = encode$2;
var decodeCache = {};
function getDecodeCache(exclude) {
  var i, ch, cache = decodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = decodeCache[exclude] = [];
  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }
  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
  }
  return cache;
}
function decode$2(string, exclude) {
  var cache;
  if (typeof exclude !== "string") {
    exclude = decode$2.defaultChars;
  }
  cache = getDecodeCache(exclude);
  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr, result2 = "";
    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);
      if (b1 < 128) {
        result2 += cache[b1];
        continue;
      }
      if ((b1 & 224) === 192 && i + 3 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        if ((b2 & 192) === 128) {
          chr = b1 << 6 & 1984 | b2 & 63;
          if (chr < 128) {
            result2 += "\uFFFD\uFFFD";
          } else {
            result2 += String.fromCharCode(chr);
          }
          i += 3;
          continue;
        }
      }
      if ((b1 & 240) === 224 && i + 6 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128) {
          chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
          if (chr < 2048 || chr >= 55296 && chr <= 57343) {
            result2 += "\uFFFD\uFFFD\uFFFD";
          } else {
            result2 += String.fromCharCode(chr);
          }
          i += 6;
          continue;
        }
      }
      if ((b1 & 248) === 240 && i + 9 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
          chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
          if (chr < 65536 || chr > 1114111) {
            result2 += "\uFFFD\uFFFD\uFFFD\uFFFD";
          } else {
            chr -= 65536;
            result2 += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
          }
          i += 9;
          continue;
        }
      }
      result2 += "\uFFFD";
    }
    return result2;
  });
}
decode$2.defaultChars = ";/?:@&=+$,#";
decode$2.componentChars = "";
var decode_1 = decode$2;
var format$1 = function format(url) {
  var result2 = "";
  result2 += url.protocol || "";
  result2 += url.slashes ? "//" : "";
  result2 += url.auth ? url.auth + "@" : "";
  if (url.hostname && url.hostname.indexOf(":") !== -1) {
    result2 += "[" + url.hostname + "]";
  } else {
    result2 += url.hostname || "";
  }
  result2 += url.port ? ":" + url.port : "";
  result2 += url.pathname || "";
  result2 += url.search || "";
  result2 += url.hash || "";
  return result2;
};
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}
var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, hostlessProtocol = {
  "javascript": true,
  "javascript:": true
}, slashedProtocol = {
  "http": true,
  "https": true,
  "ftp": true,
  "gopher": true,
  "file": true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) {
    return url;
  }
  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}
Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes, rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }
  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }
    if (rest[hostEnd - 1] === ":") {
      hostEnd--;
    }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    this.parseHost(host);
    this.hostname = this.hostname || "";
    var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part2 = hostparts[i];
        if (!part2) {
          continue;
        }
        if (!part2.match(hostnamePartPattern)) {
          var newpart = "";
          for (var j = 0, k = part2.length; j < k; j++) {
            if (part2.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part2[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part2.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join(".") + rest;
            }
            this.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = "";
    }
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }
  var hash = rest.indexOf("#");
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf("?");
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) {
    this.pathname = rest;
  }
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = "";
  }
  return this;
};
Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) {
    this.hostname = host;
  }
};
var parse$1 = urlParse;
var encode$1 = encode_1;
var decode$1 = decode_1;
var format2 = format$1;
var parse3 = parse$1;
var mdurl = {
  encode: encode$1,
  decode: decode$1,
  format: format2,
  parse: parse3
};
var regex$3 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var regex$2 = /[\0-\x1F\x7F-\x9F]/;
var regex$1 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
var regex = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
var Any = regex$3;
var Cc = regex$2;
var Cf = regex$1;
var P = regex$4;
var Z = regex;
var uc_micro = {
  Any,
  Cc,
  Cf,
  P,
  Z
};
var utils = createCommonjsModule(function(module, exports) {
  function _class2(obj) {
    return Object.prototype.toString.call(obj);
  }
  function isString2(obj) {
    return _class2(obj) === "[object String]";
  }
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  function has2(object, key) {
    return _hasOwnProperty.call(object, key);
  }
  function assign2(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
      if (!source) {
        return;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be object");
      }
      Object.keys(source).forEach(function(key) {
        obj[key] = source[key];
      });
    });
    return obj;
  }
  function arrayReplaceAt2(src, pos, newElements) {
    return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
  }
  function isValidEntityCode2(c) {
    if (c >= 55296 && c <= 57343) {
      return false;
    }
    if (c >= 64976 && c <= 65007) {
      return false;
    }
    if ((c & 65535) === 65535 || (c & 65535) === 65534) {
      return false;
    }
    if (c >= 0 && c <= 8) {
      return false;
    }
    if (c === 11) {
      return false;
    }
    if (c >= 14 && c <= 31) {
      return false;
    }
    if (c >= 127 && c <= 159) {
      return false;
    }
    if (c > 1114111) {
      return false;
    }
    return true;
  }
  function fromCodePoint2(c) {
    if (c > 65535) {
      c -= 65536;
      var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
      return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c);
  }
  var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
  var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
  var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  function replaceEntityPattern(match2, name) {
    var code3 = 0;
    if (has2(entities, name)) {
      return entities[name];
    }
    if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
      code3 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
      if (isValidEntityCode2(code3)) {
        return fromCodePoint2(code3);
      }
    }
    return match2;
  }
  function unescapeMd(str) {
    if (str.indexOf("\\") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_MD_RE, "$1");
  }
  function unescapeAll2(str) {
    if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_ALL_RE, function(match2, escaped, entity3) {
      if (escaped) {
        return escaped;
      }
      return replaceEntityPattern(match2, entity3);
    });
  }
  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }
  function escapeHtml2(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
  }
  var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
  function escapeRE2(str) {
    return str.replace(REGEXP_ESCAPE_RE, "\\$&");
  }
  function isSpace2(code3) {
    switch (code3) {
      case 9:
      case 32:
        return true;
    }
    return false;
  }
  function isWhiteSpace2(code3) {
    if (code3 >= 8192 && code3 <= 8202) {
      return true;
    }
    switch (code3) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  }
  function isPunctChar2(ch) {
    return regex$4.test(ch);
  }
  function isMdAsciiPunct2(ch) {
    switch (ch) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  function normalizeReference2(str) {
    str = str.trim().replace(/\s+/g, " ");
    if ("\u1E9E".toLowerCase() === "\u1E7E") {
      str = str.replace(/ẞ/g, "\xDF");
    }
    return str.toLowerCase().toUpperCase();
  }
  exports.lib = {};
  exports.lib.mdurl = mdurl;
  exports.lib.ucmicro = uc_micro;
  exports.assign = assign2;
  exports.isString = isString2;
  exports.has = has2;
  exports.unescapeMd = unescapeMd;
  exports.unescapeAll = unescapeAll2;
  exports.isValidEntityCode = isValidEntityCode2;
  exports.fromCodePoint = fromCodePoint2;
  exports.escapeHtml = escapeHtml2;
  exports.arrayReplaceAt = arrayReplaceAt2;
  exports.isSpace = isSpace2;
  exports.isWhiteSpace = isWhiteSpace2;
  exports.isMdAsciiPunct = isMdAsciiPunct2;
  exports.isPunctChar = isPunctChar2;
  exports.escapeRE = escapeRE2;
  exports.normalizeReference = normalizeReference2;
});
var parse_link_label = function parseLinkLabel(state, start3, disableNested) {
  var level, found2, marker2, prevPos, labelEnd = -1, max2 = state.posMax, oldPos = state.pos;
  state.pos = start3 + 1;
  level = 1;
  while (state.pos < max2) {
    marker2 = state.src.charCodeAt(state.pos);
    if (marker2 === 93) {
      level--;
      if (level === 0) {
        found2 = true;
        break;
      }
    }
    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker2 === 91) {
      if (prevPos === state.pos - 1) {
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }
  if (found2) {
    labelEnd = state.pos;
  }
  state.pos = oldPos;
  return labelEnd;
};
var unescapeAll$2 = utils.unescapeAll;
var parse_link_destination = function parseLinkDestination(str, pos, max2) {
  var code3, level, lines = 0, start3 = pos, result2 = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (str.charCodeAt(pos) === 60) {
    pos++;
    while (pos < max2) {
      code3 = str.charCodeAt(pos);
      if (code3 === 10) {
        return result2;
      }
      if (code3 === 60) {
        return result2;
      }
      if (code3 === 62) {
        result2.pos = pos + 1;
        result2.str = unescapeAll$2(str.slice(start3 + 1, pos));
        result2.ok = true;
        return result2;
      }
      if (code3 === 92 && pos + 1 < max2) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return result2;
  }
  level = 0;
  while (pos < max2) {
    code3 = str.charCodeAt(pos);
    if (code3 === 32) {
      break;
    }
    if (code3 < 32 || code3 === 127) {
      break;
    }
    if (code3 === 92 && pos + 1 < max2) {
      if (str.charCodeAt(pos + 1) === 32) {
        break;
      }
      pos += 2;
      continue;
    }
    if (code3 === 40) {
      level++;
      if (level > 32) {
        return result2;
      }
    }
    if (code3 === 41) {
      if (level === 0) {
        break;
      }
      level--;
    }
    pos++;
  }
  if (start3 === pos) {
    return result2;
  }
  if (level !== 0) {
    return result2;
  }
  result2.str = unescapeAll$2(str.slice(start3, pos));
  result2.lines = lines;
  result2.pos = pos;
  result2.ok = true;
  return result2;
};
var unescapeAll$1 = utils.unescapeAll;
var parse_link_title = function parseLinkTitle(str, pos, max2) {
  var code3, marker2, lines = 0, start3 = pos, result2 = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (pos >= max2) {
    return result2;
  }
  marker2 = str.charCodeAt(pos);
  if (marker2 !== 34 && marker2 !== 39 && marker2 !== 40) {
    return result2;
  }
  pos++;
  if (marker2 === 40) {
    marker2 = 41;
  }
  while (pos < max2) {
    code3 = str.charCodeAt(pos);
    if (code3 === marker2) {
      result2.pos = pos + 1;
      result2.lines = lines;
      result2.str = unescapeAll$1(str.slice(start3 + 1, pos));
      result2.ok = true;
      return result2;
    } else if (code3 === 40 && marker2 === 41) {
      return result2;
    } else if (code3 === 10) {
      lines++;
    } else if (code3 === 92 && pos + 1 < max2) {
      pos++;
      if (str.charCodeAt(pos) === 10) {
        lines++;
      }
    }
    pos++;
  }
  return result2;
};
var parseLinkLabel2 = parse_link_label;
var parseLinkDestination2 = parse_link_destination;
var parseLinkTitle2 = parse_link_title;
var helpers = {
  parseLinkLabel: parseLinkLabel2,
  parseLinkDestination: parseLinkDestination2,
  parseLinkTitle: parseLinkTitle2
};
var assign$1 = utils.assign;
var unescapeAll = utils.unescapeAll;
var escapeHtml = utils.escapeHtml;
var default_rules = {};
default_rules.code_inline = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  return "<code" + slf.renderAttrs(token2) + ">" + escapeHtml(tokens[idx].content) + "</code>";
};
default_rules.code_block = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  return "<pre" + slf.renderAttrs(token2) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
};
default_rules.fence = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx], info = token2.info ? unescapeAll(token2.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
  if (info) {
    arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join("");
  }
  if (options.highlight) {
    highlighted = options.highlight(token2.content, langName, langAttrs) || escapeHtml(token2.content);
  } else {
    highlighted = escapeHtml(token2.content);
  }
  if (highlighted.indexOf("<pre") === 0) {
    return highlighted + "\n";
  }
  if (info) {
    i = token2.attrIndex("class");
    tmpAttrs = token2.attrs ? token2.attrs.slice() : [];
    if (i < 0) {
      tmpAttrs.push(["class", options.langPrefix + langName]);
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice();
      tmpAttrs[i][1] += " " + options.langPrefix + langName;
    }
    tmpToken = {
      attrs: tmpAttrs
    };
    return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
  }
  return "<pre><code" + slf.renderAttrs(token2) + ">" + highlighted + "</code></pre>\n";
};
default_rules.image = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  token2.attrs[token2.attrIndex("alt")][1] = slf.renderInlineAsText(token2.children, options, env);
  return slf.renderToken(tokens, idx, options);
};
default_rules.hardbreak = function(tokens, idx, options) {
  return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
default_rules.softbreak = function(tokens, idx, options) {
  return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
default_rules.text = function(tokens, idx) {
  return escapeHtml(tokens[idx].content);
};
default_rules.html_block = function(tokens, idx) {
  return tokens[idx].content;
};
default_rules.html_inline = function(tokens, idx) {
  return tokens[idx].content;
};
function Renderer() {
  this.rules = assign$1({}, default_rules);
}
Renderer.prototype.renderAttrs = function renderAttrs(token2) {
  var i, l, result2;
  if (!token2.attrs) {
    return "";
  }
  result2 = "";
  for (i = 0, l = token2.attrs.length; i < l; i++) {
    result2 += " " + escapeHtml(token2.attrs[i][0]) + '="' + escapeHtml(token2.attrs[i][1]) + '"';
  }
  return result2;
};
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken, result2 = "", needLf = false, token2 = tokens[idx];
  if (token2.hidden) {
    return "";
  }
  if (token2.block && token2.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result2 += "\n";
  }
  result2 += (token2.nesting === -1 ? "</" : "<") + token2.tag;
  result2 += this.renderAttrs(token2);
  if (token2.nesting === 0 && options.xhtmlOut) {
    result2 += " /";
  }
  if (token2.block) {
    needLf = true;
    if (token2.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];
        if (nextToken.type === "inline" || nextToken.hidden) {
          needLf = false;
        } else if (nextToken.nesting === -1 && nextToken.tag === token2.tag) {
          needLf = false;
        }
      }
    }
  }
  result2 += needLf ? ">\n" : ">";
  return result2;
};
Renderer.prototype.renderInline = function(tokens, options, env) {
  var type, result2 = "", rules = this.rules;
  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;
    if (typeof rules[type] !== "undefined") {
      result2 += rules[type](tokens, i, options, env, this);
    } else {
      result2 += this.renderToken(tokens, i, options);
    }
  }
  return result2;
};
Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
  var result2 = "";
  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === "text") {
      result2 += tokens[i].content;
    } else if (tokens[i].type === "image") {
      result2 += this.renderInlineAsText(tokens[i].children, options, env);
    } else if (tokens[i].type === "softbreak") {
      result2 += "\n";
    }
  }
  return result2;
};
Renderer.prototype.render = function(tokens, options, env) {
  var i, len, type, result2 = "", rules = this.rules;
  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;
    if (type === "inline") {
      result2 += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== "undefined") {
      result2 += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result2 += this.renderToken(tokens, i, options, env);
    }
  }
  return result2;
};
var renderer = Renderer;
function Ruler() {
  this.__rules__ = [];
  this.__cache__ = null;
}
Ruler.prototype.__find__ = function(name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};
Ruler.prototype.__compile__ = function() {
  var self = this;
  var chains = [""];
  self.__rules__.forEach(function(rule) {
    if (!rule.enabled) {
      return;
    }
    rule.alt.forEach(function(altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });
  self.__cache__ = {};
  chains.forEach(function(chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }
      self.__cache__[chain].push(rule.fn);
    });
  });
};
Ruler.prototype.at = function(name, fn, options) {
  var index2 = this.__find__(name);
  var opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + name);
  }
  this.__rules__[index2].fn = fn;
  this.__rules__[index2].alt = opt.alt || [];
  this.__cache__ = null;
};
Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
  var index2 = this.__find__(beforeName);
  var opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + beforeName);
  }
  this.__rules__.splice(index2, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.after = function(afterName, ruleName, fn, options) {
  var index2 = this.__find__(afterName);
  var opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + afterName);
  }
  this.__rules__.splice(index2 + 1, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.push = function(ruleName, fn, options) {
  var opt = options || {};
  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.enable = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  var result2 = [];
  list3.forEach(function(name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = true;
    result2.push(name);
  }, this);
  this.__cache__ = null;
  return result2;
};
Ruler.prototype.enableOnly = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  this.__rules__.forEach(function(rule) {
    rule.enabled = false;
  });
  this.enable(list3, ignoreInvalid);
};
Ruler.prototype.disable = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  var result2 = [];
  list3.forEach(function(name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = false;
    result2.push(name);
  }, this);
  this.__cache__ = null;
  return result2;
};
Ruler.prototype.getRules = function(chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName] || [];
};
var ruler = Ruler;
var NEWLINES_RE = /\r\n?|\n/g;
var NULL_RE = /\0/g;
var normalize = function normalize2(state) {
  var str;
  str = state.src.replace(NEWLINES_RE, "\n");
  str = str.replace(NULL_RE, "\uFFFD");
  state.src = str;
};
var block = function block2(state) {
  var token2;
  if (state.inlineMode) {
    token2 = new state.Token("inline", "", 0);
    token2.content = state.src;
    token2.map = [0, 1];
    token2.children = [];
    state.tokens.push(token2);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};
var inline2 = function inline3(state) {
  var tokens = state.tokens, tok, i, l;
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === "inline") {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};
var arrayReplaceAt = utils.arrayReplaceAt;
function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}
var linkify = function linkify2(state) {
  var i, j, l, tokens, token2, currentToken, nodes, ln, text6, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
  if (!state.md.options.linkify) {
    return;
  }
  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }
    tokens = blockTokens[j].children;
    htmlLinkLevel = 0;
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];
      if (currentToken.type === "link_close") {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
          i--;
        }
        continue;
      }
      if (currentToken.type === "html_inline") {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) {
        continue;
      }
      if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
        text6 = currentToken.content;
        links = state.md.linkify.match(text6);
        nodes = [];
        level = currentToken.level;
        lastPos = 0;
        for (ln = 0; ln < links.length; ln++) {
          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) {
            continue;
          }
          urlText = links[ln].text;
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
          } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }
          pos = links[ln].index;
          if (pos > lastPos) {
            token2 = new state.Token("text", "", 0);
            token2.content = text6.slice(lastPos, pos);
            token2.level = level;
            nodes.push(token2);
          }
          token2 = new state.Token("link_open", "a", 1);
          token2.attrs = [["href", fullUrl]];
          token2.level = level++;
          token2.markup = "linkify";
          token2.info = "auto";
          nodes.push(token2);
          token2 = new state.Token("text", "", 0);
          token2.content = urlText;
          token2.level = level;
          nodes.push(token2);
          token2 = new state.Token("link_close", "a", -1);
          token2.level = --level;
          token2.markup = "linkify";
          token2.info = "auto";
          nodes.push(token2);
          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text6.length) {
          token2 = new state.Token("text", "", 0);
          token2.content = text6.slice(lastPos);
          token2.level = level;
          nodes.push(token2);
        }
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};
var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  c: "\xA9",
  r: "\xAE",
  p: "\xA7",
  tm: "\u2122"
};
function replaceFn(match2, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}
function replace_scoped(inlineTokens) {
  var i, token2, inside_autolink = 0;
  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token2 = inlineTokens[i];
    if (token2.type === "text" && !inside_autolink) {
      token2.content = token2.content.replace(SCOPED_ABBR_RE, replaceFn);
    }
    if (token2.type === "link_open" && token2.info === "auto") {
      inside_autolink--;
    }
    if (token2.type === "link_close" && token2.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace_rare(inlineTokens) {
  var i, token2, inside_autolink = 0;
  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token2 = inlineTokens[i];
    if (token2.type === "text" && !inside_autolink) {
      if (RARE_RE.test(token2.content)) {
        token2.content = token2.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
      }
    }
    if (token2.type === "link_open" && token2.info === "auto") {
      inside_autolink--;
    }
    if (token2.type === "link_close" && token2.info === "auto") {
      inside_autolink++;
    }
  }
}
var replacements = function replace3(state) {
  var blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline") {
      continue;
    }
    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }
    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }
  }
};
var isWhiteSpace$1 = utils.isWhiteSpace;
var isPunctChar$1 = utils.isPunctChar;
var isMdAsciiPunct$1 = utils.isMdAsciiPunct;
var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = "\u2019";
function replaceAt(str, index2, ch) {
  return str.substr(0, index2) + ch + str.substr(index2 + 1);
}
function process_inlines(tokens, state) {
  var i, token2, text6, t, pos, max2, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
  stack = [];
  for (i = 0; i < tokens.length; i++) {
    token2 = tokens[i];
    thisLevel = tokens[i].level;
    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) {
        break;
      }
    }
    stack.length = j + 1;
    if (token2.type !== "text") {
      continue;
    }
    text6 = token2.content;
    pos = 0;
    max2 = text6.length;
    OUTER:
      while (pos < max2) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text6);
        if (!t) {
          break;
        }
        canOpen = canClose = true;
        pos = t.index + 1;
        isSingle = t[0] === "'";
        lastChar = 32;
        if (t.index - 1 >= 0) {
          lastChar = text6.charCodeAt(t.index - 1);
        } else {
          for (j = i - 1; j >= 0; j--) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }
        nextChar = 32;
        if (pos < max2) {
          nextChar = text6.charCodeAt(pos);
        } else {
          for (j = i + 1; j < tokens.length; j++) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }
        isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace$1(lastChar);
        isNextWhiteSpace = isWhiteSpace$1(nextChar);
        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }
        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }
        if (nextChar === 34 && t[0] === '"') {
          if (lastChar >= 48 && lastChar <= 57) {
            canClose = canOpen = false;
          }
        }
        if (canOpen && canClose) {
          canOpen = isLastPunctChar;
          canClose = isNextPunctChar;
        }
        if (!canOpen && !canClose) {
          if (isSingle) {
            token2.content = replaceAt(token2.content, t.index, APOSTROPHE);
          }
          continue;
        }
        if (canClose) {
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) {
              break;
            }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }
              token2.content = replaceAt(token2.content, t.index, closeQuote);
              tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
              pos += closeQuote.length - 1;
              if (item.token === i) {
                pos += openQuote.length - 1;
              }
              text6 = token2.content;
              max2 = text6.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }
        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token2.content = replaceAt(token2.content, t.index, APOSTROPHE);
        }
      }
  }
}
var smartquotes = function smartquotes2(state) {
  var blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }
    process_inlines(state.tokens[blkIdx].children, state);
  }
};
function Token(type, tag, nesting) {
  this.type = type;
  this.tag = tag;
  this.attrs = null;
  this.map = null;
  this.nesting = nesting;
  this.level = 0;
  this.children = null;
  this.content = "";
  this.markup = "";
  this.info = "";
  this.meta = null;
  this.block = false;
  this.hidden = false;
}
Token.prototype.attrIndex = function attrIndex(name) {
  var attrs2, i, len;
  if (!this.attrs) {
    return -1;
  }
  attrs2 = this.attrs;
  for (i = 0, len = attrs2.length; i < len; i++) {
    if (attrs2[i][0] === name) {
      return i;
    }
  }
  return -1;
};
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [attrData];
  }
};
Token.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name), attrData = [name, value];
  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};
Token.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};
Token.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);
  if (idx < 0) {
    this.attrPush([name, value]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
  }
};
var token = Token;
function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md;
}
StateCore.prototype.Token = token;
var state_core = StateCore;
var _rules$2 = [
  ["normalize", normalize],
  ["block", block],
  ["inline", inline2],
  ["linkify", linkify],
  ["replacements", replacements],
  ["smartquotes", smartquotes]
];
function Core() {
  this.ruler = new ruler();
  for (var i = 0; i < _rules$2.length; i++) {
    this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
  }
}
Core.prototype.process = function(state) {
  var i, l, rules;
  rules = this.ruler.getRules("");
  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};
Core.prototype.State = state_core;
var parser_core = Core;
var isSpace$a = utils.isSpace;
function getLine(state, line) {
  var pos = state.bMarks[line] + state.tShift[line], max2 = state.eMarks[line];
  return state.src.substr(pos, max2 - pos);
}
function escapedSplit(str) {
  var result2 = [], pos = 0, max2 = str.length, ch, isEscaped = false, lastPos = 0, current = "";
  ch = str.charCodeAt(pos);
  while (pos < max2) {
    if (ch === 124) {
      if (!isEscaped) {
        result2.push(current + str.substring(lastPos, pos));
        current = "";
        lastPos = pos + 1;
      } else {
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }
    isEscaped = ch === 92;
    pos++;
    ch = str.charCodeAt(pos);
  }
  result2.push(current + str.substring(lastPos));
  return result2;
}
var table = function table2(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, l, nextLine, columns, columnCount, token2, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
  if (startLine + 2 > endLine) {
    return false;
  }
  nextLine = startLine + 1;
  if (state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
    return false;
  }
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace$a(secondCh)) {
    return false;
  }
  if (firstCh === 45 && isSpace$a(secondCh)) {
    return false;
  }
  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);
    if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace$a(ch)) {
      return false;
    }
    pos++;
  }
  lineText = getLine(state, startLine + 1);
  columns = lineText.split("|");
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }
    if (!/^:?-+:?$/.test(t)) {
      return false;
    }
    if (t.charCodeAt(t.length - 1) === 58) {
      aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
    } else if (t.charCodeAt(0) === 58) {
      aligns.push("left");
    } else {
      aligns.push("");
    }
  }
  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf("|") === -1) {
    return false;
  }
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === "")
    columns.shift();
  if (columns.length && columns[columns.length - 1] === "")
    columns.pop();
  columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) {
    return false;
  }
  if (silent) {
    return true;
  }
  oldParentType = state.parentType;
  state.parentType = "table";
  terminatorRules = state.md.block.ruler.getRules("blockquote");
  token2 = state.push("table_open", "table", 1);
  token2.map = tableLines = [startLine, 0];
  token2 = state.push("thead_open", "thead", 1);
  token2.map = [startLine, startLine + 1];
  token2 = state.push("tr_open", "tr", 1);
  token2.map = [startLine, startLine + 1];
  for (i = 0; i < columns.length; i++) {
    token2 = state.push("th_open", "th", 1);
    if (aligns[i]) {
      token2.attrs = [["style", "text-align:" + aligns[i]]];
    }
    token2 = state.push("inline", "", 0);
    token2.content = columns[i].trim();
    token2.children = [];
    token2 = state.push("th_close", "th", -1);
  }
  token2 = state.push("tr_close", "tr", -1);
  token2 = state.push("thead_close", "thead", -1);
  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "")
      columns.shift();
    if (columns.length && columns[columns.length - 1] === "")
      columns.pop();
    if (nextLine === startLine + 2) {
      token2 = state.push("tbody_open", "tbody", 1);
      token2.map = tbodyLines = [startLine + 2, 0];
    }
    token2 = state.push("tr_open", "tr", 1);
    token2.map = [nextLine, nextLine + 1];
    for (i = 0; i < columnCount; i++) {
      token2 = state.push("td_open", "td", 1);
      if (aligns[i]) {
        token2.attrs = [["style", "text-align:" + aligns[i]]];
      }
      token2 = state.push("inline", "", 0);
      token2.content = columns[i] ? columns[i].trim() : "";
      token2.children = [];
      token2 = state.push("td_close", "td", -1);
    }
    token2 = state.push("tr_close", "tr", -1);
  }
  if (tbodyLines) {
    token2 = state.push("tbody_close", "tbody", -1);
    tbodyLines[1] = nextLine;
  }
  token2 = state.push("table_close", "table", -1);
  tableLines[1] = nextLine;
  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
};
var code = function code2(state, startLine, endLine) {
  var nextLine, last, token2;
  if (state.sCount[startLine] - state.blkIndent < 4) {
    return false;
  }
  last = nextLine = startLine + 1;
  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }
  state.line = last;
  token2 = state.push("code_block", "code", 0);
  token2.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
  token2.map = [startLine, state.line];
  return true;
};
var fence$1 = function fence(state, startLine, endLine, silent) {
  var marker2, len, params, nextLine, mem, token2, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (pos + 3 > max2) {
    return false;
  }
  marker2 = state.src.charCodeAt(pos);
  if (marker2 !== 126 && marker2 !== 96) {
    return false;
  }
  mem = pos;
  pos = state.skipChars(pos, marker2);
  len = pos - mem;
  if (len < 3) {
    return false;
  }
  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max2);
  if (marker2 === 96) {
    if (params.indexOf(String.fromCharCode(marker2)) >= 0) {
      return false;
    }
  }
  if (silent) {
    return true;
  }
  nextLine = startLine;
  for (; ; ) {
    nextLine++;
    if (nextLine >= endLine) {
      break;
    }
    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max2 = state.eMarks[nextLine];
    if (pos < max2 && state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.src.charCodeAt(pos) !== marker2) {
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      continue;
    }
    pos = state.skipChars(pos, marker2);
    if (pos - mem < len) {
      continue;
    }
    pos = state.skipSpaces(pos);
    if (pos < max2) {
      continue;
    }
    haveEndMarker = true;
    break;
  }
  len = state.sCount[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  token2 = state.push("fence", "code", 0);
  token2.info = params;
  token2.content = state.getLines(startLine + 1, nextLine, len, true);
  token2.markup = markup;
  token2.map = [startLine, state.line];
  return true;
};
var isSpace$9 = utils.isSpace;
var blockquote = function blockquote2(state, startLine, endLine, silent) {
  var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset2, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token2, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos++) !== 62) {
    return false;
  }
  if (silent) {
    return true;
  }
  initial = offset2 = state.sCount[startLine] + 1;
  if (state.src.charCodeAt(pos) === 32) {
    pos++;
    initial++;
    offset2++;
    adjustTab = false;
    spaceAfterMarker = true;
  } else if (state.src.charCodeAt(pos) === 9) {
    spaceAfterMarker = true;
    if ((state.bsCount[startLine] + offset2) % 4 === 3) {
      pos++;
      initial++;
      offset2++;
      adjustTab = false;
    } else {
      adjustTab = true;
    }
  } else {
    spaceAfterMarker = false;
  }
  oldBMarks = [state.bMarks[startLine]];
  state.bMarks[startLine] = pos;
  while (pos < max2) {
    ch = state.src.charCodeAt(pos);
    if (isSpace$9(ch)) {
      if (ch === 9) {
        offset2 += 4 - (offset2 + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
      } else {
        offset2++;
      }
    } else {
      break;
    }
    pos++;
  }
  oldBSCount = [state.bsCount[startLine]];
  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
  lastLineEmpty = pos >= max2;
  oldSCount = [state.sCount[startLine]];
  state.sCount[startLine] = offset2 - initial;
  oldTShift = [state.tShift[startLine]];
  state.tShift[startLine] = pos - state.bMarks[startLine];
  terminatorRules = state.md.block.ruler.getRules("blockquote");
  oldParentType = state.parentType;
  state.parentType = "blockquote";
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    isOutdented = state.sCount[nextLine] < state.blkIndent;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max2 = state.eMarks[nextLine];
    if (pos >= max2) {
      break;
    }
    if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
      initial = offset2 = state.sCount[nextLine] + 1;
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        offset2++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[nextLine] + offset2) % 4 === 3) {
          pos++;
          initial++;
          offset2++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;
      while (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (isSpace$9(ch)) {
          if (ch === 9) {
            offset2 += 4 - (offset2 + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset2++;
          }
        } else {
          break;
        }
        pos++;
      }
      lastLineEmpty = pos >= max2;
      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset2 - initial;
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }
    if (lastLineEmpty) {
      break;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      state.lineMax = nextLine;
      if (state.blkIndent !== 0) {
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }
      break;
    }
    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);
    state.sCount[nextLine] = -1;
  }
  oldIndent = state.blkIndent;
  state.blkIndent = 0;
  token2 = state.push("blockquote_open", "blockquote", 1);
  token2.markup = ">";
  token2.map = lines = [startLine, 0];
  state.md.block.tokenize(state, startLine, nextLine);
  token2 = state.push("blockquote_close", "blockquote", -1);
  token2.markup = ">";
  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;
  return true;
};
var isSpace$8 = utils.isSpace;
var hr = function hr2(state, startLine, endLine, silent) {
  var marker2, cnt, ch, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  marker2 = state.src.charCodeAt(pos++);
  if (marker2 !== 42 && marker2 !== 45 && marker2 !== 95) {
    return false;
  }
  cnt = 1;
  while (pos < max2) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker2 && !isSpace$8(ch)) {
      return false;
    }
    if (ch === marker2) {
      cnt++;
    }
  }
  if (cnt < 3) {
    return false;
  }
  if (silent) {
    return true;
  }
  state.line = startLine + 1;
  token2 = state.push("hr", "hr", 0);
  token2.map = [startLine, state.line];
  token2.markup = Array(cnt + 1).join(String.fromCharCode(marker2));
  return true;
};
var isSpace$7 = utils.isSpace;
function skipBulletListMarker(state, startLine) {
  var marker2, pos, max2, ch;
  pos = state.bMarks[startLine] + state.tShift[startLine];
  max2 = state.eMarks[startLine];
  marker2 = state.src.charCodeAt(pos++);
  if (marker2 !== 42 && marker2 !== 45 && marker2 !== 43) {
    return -1;
  }
  if (pos < max2) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$7(ch)) {
      return -1;
    }
  }
  return pos;
}
function skipOrderedListMarker(state, startLine) {
  var ch, start3 = state.bMarks[startLine] + state.tShift[startLine], pos = start3, max2 = state.eMarks[startLine];
  if (pos + 1 >= max2) {
    return -1;
  }
  ch = state.src.charCodeAt(pos++);
  if (ch < 48 || ch > 57) {
    return -1;
  }
  for (; ; ) {
    if (pos >= max2) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch >= 48 && ch <= 57) {
      if (pos - start3 >= 10) {
        return -1;
      }
      continue;
    }
    if (ch === 41 || ch === 46) {
      break;
    }
    return -1;
  }
  if (pos < max2) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$7(ch)) {
      return -1;
    }
  }
  return pos;
}
function markTightParagraphs(state, idx) {
  var i, l, level = state.level + 2;
  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}
var list = function list2(state, startLine, endLine, silent) {
  var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max2, nextLine, offset2, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start3, terminate, terminatorRules, token2, isTerminatingParagraph = false, tight = true;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
    return false;
  }
  if (silent && state.parentType === "paragraph") {
    if (state.sCount[startLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
    start3 = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.slice(start3, posAfterMarker - 1));
    if (isTerminatingParagraph && markerValue !== 1)
      return false;
  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine])
      return false;
  }
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
  if (silent) {
    return true;
  }
  listTokIdx = state.tokens.length;
  if (isOrdered) {
    token2 = state.push("ordered_list_open", "ol", 1);
    if (markerValue !== 1) {
      token2.attrs = [["start", markerValue]];
    }
  } else {
    token2 = state.push("bullet_list_open", "ul", 1);
  }
  token2.map = listLines = [startLine, 0];
  token2.markup = String.fromCharCode(markerCharCode);
  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules("list");
  oldParentType = state.parentType;
  state.parentType = "list";
  while (nextLine < endLine) {
    pos = posAfterMarker;
    max2 = state.eMarks[nextLine];
    initial = offset2 = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
    while (pos < max2) {
      ch = state.src.charCodeAt(pos);
      if (ch === 9) {
        offset2 += 4 - (offset2 + state.bsCount[nextLine]) % 4;
      } else if (ch === 32) {
        offset2++;
      } else {
        break;
      }
      pos++;
    }
    contentStart = pos;
    if (contentStart >= max2) {
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset2 - initial;
    }
    if (indentAfterMarker > 4) {
      indentAfterMarker = 1;
    }
    indent = initial + indentAfterMarker;
    token2 = state.push("list_item_open", "li", 1);
    token2.markup = String.fromCharCode(markerCharCode);
    token2.map = itemLines = [startLine, 0];
    if (isOrdered) {
      token2.info = state.src.slice(start3, posAfterMarker - 1);
    }
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldSCount = state.sCount[startLine];
    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.sCount[startLine] = offset2;
    if (contentStart >= max2 && state.isEmpty(startLine + 1)) {
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, startLine, endLine, true);
    }
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldSCount;
    state.tight = oldTight;
    token2 = state.push("list_item_close", "li", -1);
    token2.markup = String.fromCharCode(markerCharCode);
    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];
    if (nextLine >= endLine) {
      break;
    }
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      break;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
      start3 = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    }
    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
      break;
    }
  }
  if (isOrdered) {
    token2 = state.push("ordered_list_close", "ol", -1);
  } else {
    token2 = state.push("bullet_list_close", "ul", -1);
  }
  token2.markup = String.fromCharCode(markerCharCode);
  listLines[1] = nextLine;
  state.line = nextLine;
  state.parentType = oldParentType;
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }
  return true;
};
var normalizeReference$2 = utils.normalizeReference;
var isSpace$6 = utils.isSpace;
var reference = function reference2(state, startLine, _endLine, silent) {
  var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start3, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine], nextLine = startLine + 1;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 91) {
    return false;
  }
  while (++pos < max2) {
    if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
      if (pos + 1 === max2) {
        return false;
      }
      if (state.src.charCodeAt(pos + 1) !== 58) {
        return false;
      }
      break;
    }
  }
  endLine = state.lineMax;
  terminatorRules = state.md.block.ruler.getRules("reference");
  oldParentType = state.parentType;
  state.parentType = "reference";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max2 = str.length;
  for (pos = 1; pos < max2; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 91) {
      return false;
    } else if (ch === 93) {
      labelEnd = pos;
      break;
    } else if (ch === 10) {
      lines++;
    } else if (ch === 92) {
      pos++;
      if (pos < max2 && str.charCodeAt(pos) === 10) {
        lines++;
      }
    }
  }
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
    return false;
  }
  for (pos = labelEnd + 2; pos < max2; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 10) {
      lines++;
    } else if (isSpace$6(ch))
      ;
    else {
      break;
    }
  }
  res = state.md.helpers.parseLinkDestination(str, pos, max2);
  if (!res.ok) {
    return false;
  }
  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) {
    return false;
  }
  pos = res.pos;
  lines += res.lines;
  destEndPos = pos;
  destEndLineNo = lines;
  start3 = pos;
  for (; pos < max2; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 10) {
      lines++;
    } else if (isSpace$6(ch))
      ;
    else {
      break;
    }
  }
  res = state.md.helpers.parseLinkTitle(str, pos, max2);
  if (pos < max2 && start3 !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = "";
    pos = destEndPos;
    lines = destEndLineNo;
  }
  while (pos < max2) {
    ch = str.charCodeAt(pos);
    if (!isSpace$6(ch)) {
      break;
    }
    pos++;
  }
  if (pos < max2 && str.charCodeAt(pos) !== 10) {
    if (title) {
      title = "";
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max2) {
        ch = str.charCodeAt(pos);
        if (!isSpace$6(ch)) {
          break;
        }
        pos++;
      }
    }
  }
  if (pos < max2 && str.charCodeAt(pos) !== 10) {
    return false;
  }
  label = normalizeReference$2(str.slice(1, labelEnd));
  if (!label) {
    return false;
  }
  if (silent) {
    return true;
  }
  if (typeof state.env.references === "undefined") {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === "undefined") {
    state.env.references[label] = { title, href };
  }
  state.parentType = oldParentType;
  state.line = startLine + lines + 1;
  return true;
};
var html_blocks = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
var unquoted = "[^\"'=<>`\\x00-\\x20]+";
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';
var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
var processing = "<[?][\\s\\S]*?[?]>";
var declaration = "<![A-Z]+\\s+[^>]*>";
var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
var HTML_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
var HTML_TAG_RE_1 = HTML_TAG_RE$1;
var HTML_OPEN_CLOSE_TAG_RE_1 = HTML_OPEN_CLOSE_TAG_RE$1;
var html_re = {
  HTML_TAG_RE: HTML_TAG_RE_1,
  HTML_OPEN_CLOSE_TAG_RE: HTML_OPEN_CLOSE_TAG_RE_1
};
var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE;
var HTML_SEQUENCES = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + html_blocks.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
];
var html_block = function html_block2(state, startLine, endLine, silent) {
  var i, nextLine, token2, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (!state.md.options.html) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  lineText = state.src.slice(pos, max2);
  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) {
      break;
    }
  }
  if (i === HTML_SEQUENCES.length) {
    return false;
  }
  if (silent) {
    return HTML_SEQUENCES[i][2];
  }
  nextLine = startLine + 1;
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max2 = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max2);
      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) {
          nextLine++;
        }
        break;
      }
    }
  }
  state.line = nextLine;
  token2 = state.push("html_block", "", 0);
  token2.map = [startLine, nextLine];
  token2.content = state.getLines(startLine, nextLine, state.blkIndent, true);
  return true;
};
var isSpace$5 = utils.isSpace;
var heading$1 = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  ch = state.src.charCodeAt(pos);
  if (ch !== 35 || pos >= max2) {
    return false;
  }
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 35 && pos < max2 && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }
  if (level > 6 || pos < max2 && !isSpace$5(ch)) {
    return false;
  }
  if (silent) {
    return true;
  }
  max2 = state.skipSpacesBack(max2, pos);
  tmp = state.skipCharsBack(max2, 35, pos);
  if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
    max2 = tmp;
  }
  state.line = startLine + 1;
  token2 = state.push("heading_open", "h" + String(level), 1);
  token2.markup = "########".slice(0, level);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = state.src.slice(pos, max2).trim();
  token2.map = [startLine, state.line];
  token2.children = [];
  token2 = state.push("heading_close", "h" + String(level), -1);
  token2.markup = "########".slice(0, level);
  return true;
};
var lheading = function lheading2(state, startLine, endLine) {
  var content2, terminate, i, l, token2, pos, max2, level, marker2, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  oldParentType = state.parentType;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max2 = state.eMarks[nextLine];
      if (pos < max2) {
        marker2 = state.src.charCodeAt(pos);
        if (marker2 === 45 || marker2 === 61) {
          pos = state.skipChars(pos, marker2);
          pos = state.skipSpaces(pos);
          if (pos >= max2) {
            level = marker2 === 61 ? 1 : 2;
            break;
          }
        }
      }
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  if (!level) {
    return false;
  }
  content2 = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine + 1;
  token2 = state.push("heading_open", "h" + String(level), 1);
  token2.markup = String.fromCharCode(marker2);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = content2;
  token2.map = [startLine, state.line - 1];
  token2.children = [];
  token2 = state.push("heading_close", "h" + String(level), -1);
  token2.markup = String.fromCharCode(marker2);
  state.parentType = oldParentType;
  return true;
};
var paragraph = function paragraph2(state, startLine) {
  var content2, terminate, i, l, token2, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
  oldParentType = state.parentType;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  content2 = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine;
  token2 = state.push("paragraph_open", "p", 1);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = content2;
  token2.map = [startLine, state.line];
  token2.children = [];
  token2 = state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
};
var isSpace$4 = utils.isSpace;
function StateBlock(src, md, env, tokens) {
  var ch, s, start3, pos, len, indent, offset2, indent_found;
  this.src = src;
  this.md = md;
  this.env = env;
  this.tokens = tokens;
  this.bMarks = [];
  this.eMarks = [];
  this.tShift = [];
  this.sCount = [];
  this.bsCount = [];
  this.blkIndent = 0;
  this.line = 0;
  this.lineMax = 0;
  this.tight = false;
  this.ddIndent = -1;
  this.listIndent = -1;
  this.parentType = "root";
  this.level = 0;
  this.result = "";
  s = this.src;
  indent_found = false;
  for (start3 = pos = indent = offset2 = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);
    if (!indent_found) {
      if (isSpace$4(ch)) {
        indent++;
        if (ch === 9) {
          offset2 += 4 - offset2 % 4;
        } else {
          offset2++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }
    if (ch === 10 || pos === len - 1) {
      if (ch !== 10) {
        pos++;
      }
      this.bMarks.push(start3);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset2);
      this.bsCount.push(0);
      indent_found = false;
      indent = 0;
      offset2 = 0;
      start3 = pos + 1;
    }
  }
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);
  this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.push = function(type, tag, nesting) {
  var token$1 = new token(type, tag, nesting);
  token$1.block = true;
  if (nesting < 0)
    this.level--;
  token$1.level = this.level;
  if (nesting > 0)
    this.level++;
  this.tokens.push(token$1);
  return token$1;
};
StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from4) {
  for (var max2 = this.lineMax; from4 < max2; from4++) {
    if (this.bMarks[from4] + this.tShift[from4] < this.eMarks[from4]) {
      break;
    }
  }
  return from4;
};
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;
  for (var max2 = this.src.length; pos < max2; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace$4(ch)) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min2) {
  if (pos <= min2) {
    return pos;
  }
  while (pos > min2) {
    if (!isSpace$4(this.src.charCodeAt(--pos))) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.skipChars = function skipChars(pos, code3) {
  for (var max2 = this.src.length; pos < max2; pos++) {
    if (this.src.charCodeAt(pos) !== code3) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code3, min2) {
  if (pos <= min2) {
    return pos;
  }
  while (pos > min2) {
    if (code3 !== this.src.charCodeAt(--pos)) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.getLines = function getLines(begin, end2, indent, keepLastLF) {
  var i, lineIndent, ch, first2, last, queue, lineStart, line = begin;
  if (begin >= end2) {
    return "";
  }
  queue = new Array(end2 - begin);
  for (i = 0; line < end2; line++, i++) {
    lineIndent = 0;
    lineStart = first2 = this.bMarks[line];
    if (line + 1 < end2 || keepLastLF) {
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }
    while (first2 < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first2);
      if (isSpace$4(ch)) {
        if (ch === 9) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first2 - lineStart < this.tShift[line]) {
        lineIndent++;
      } else {
        break;
      }
      first2++;
    }
    if (lineIndent > indent) {
      queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first2, last);
    } else {
      queue[i] = this.src.slice(first2, last);
    }
  }
  return queue.join("");
};
StateBlock.prototype.Token = token;
var state_block = StateBlock;
var _rules$1 = [
  ["table", table, ["paragraph", "reference"]],
  ["code", code],
  ["fence", fence$1, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", blockquote, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", hr, ["paragraph", "reference", "blockquote", "list"]],
  ["list", list, ["paragraph", "reference", "blockquote"]],
  ["reference", reference],
  ["html_block", html_block, ["paragraph", "reference", "blockquote"]],
  ["heading", heading$1, ["paragraph", "reference", "blockquote"]],
  ["lheading", lheading],
  ["paragraph", paragraph]
];
function ParserBlock() {
  this.ruler = new ruler();
  for (var i = 0; i < _rules$1.length; i++) {
    this.ruler.push(_rules$1[i][0], _rules$1[i][1], { alt: (_rules$1[i][2] || []).slice() });
  }
}
ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
  var ok2, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }
    if (state.sCount[line] < state.blkIndent) {
      break;
    }
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }
    for (i = 0; i < len; i++) {
      ok2 = rules[i](state, line, endLine, false);
      if (ok2) {
        break;
      }
    }
    state.tight = !hasEmptyLines;
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }
    line = state.line;
    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};
ParserBlock.prototype.parse = function(src, md, env, outTokens) {
  var state;
  if (!src) {
    return;
  }
  state = new this.State(src, md, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};
ParserBlock.prototype.State = state_block;
var parser_block = ParserBlock;
function isTerminatorChar(ch) {
  switch (ch) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
var text2 = function text3(state, silent) {
  var pos = state.pos;
  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }
  if (pos === state.pos) {
    return false;
  }
  if (!silent) {
    state.pending += state.src.slice(state.pos, pos);
  }
  state.pos = pos;
  return true;
};
var isSpace$3 = utils.isSpace;
var newline = function newline2(state, silent) {
  var pmax, max2, ws, pos = state.pos;
  if (state.src.charCodeAt(pos) !== 10) {
    return false;
  }
  pmax = state.pending.length - 1;
  max2 = state.posMax;
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
        ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
          ws--;
        state.pending = state.pending.slice(0, ws);
        state.push("hardbreak", "br", 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push("softbreak", "br", 0);
      }
    } else {
      state.push("softbreak", "br", 0);
    }
  }
  pos++;
  while (pos < max2 && isSpace$3(state.src.charCodeAt(pos))) {
    pos++;
  }
  state.pos = pos;
  return true;
};
var isSpace$2 = utils.isSpace;
var ESCAPED = [];
for (var i = 0; i < 256; i++) {
  ESCAPED.push(0);
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
  ESCAPED[ch.charCodeAt(0)] = 1;
});
var _escape = function escape(state, silent) {
  var ch, pos = state.pos, max2 = state.posMax;
  if (state.src.charCodeAt(pos) !== 92) {
    return false;
  }
  pos++;
  if (pos < max2) {
    ch = state.src.charCodeAt(pos);
    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) {
        state.pending += state.src[pos];
      }
      state.pos += 2;
      return true;
    }
    if (ch === 10) {
      if (!silent) {
        state.push("hardbreak", "br", 0);
      }
      pos++;
      while (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace$2(ch)) {
          break;
        }
        pos++;
      }
      state.pos = pos;
      return true;
    }
  }
  if (!silent) {
    state.pending += "\\";
  }
  state.pos++;
  return true;
};
var backticks = function backtick(state, silent) {
  var start3, max2, marker2, token2, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
  if (ch !== 96) {
    return false;
  }
  start3 = pos;
  pos++;
  max2 = state.posMax;
  while (pos < max2 && state.src.charCodeAt(pos) === 96) {
    pos++;
  }
  marker2 = state.src.slice(start3, pos);
  openerLength = marker2.length;
  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start3) {
    if (!silent)
      state.pending += marker2;
    state.pos += openerLength;
    return true;
  }
  matchStart = matchEnd = pos;
  while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
    matchEnd = matchStart + 1;
    while (matchEnd < max2 && state.src.charCodeAt(matchEnd) === 96) {
      matchEnd++;
    }
    closerLength = matchEnd - matchStart;
    if (closerLength === openerLength) {
      if (!silent) {
        token2 = state.push("code_inline", "code", 0);
        token2.markup = marker2;
        token2.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      state.pos = matchEnd;
      return true;
    }
    state.backticks[closerLength] = matchStart;
  }
  state.backticksScanned = true;
  if (!silent)
    state.pending += marker2;
  state.pos += openerLength;
  return true;
};
var tokenize$1 = function strikethrough(state, silent) {
  var i, scanned, token2, len, ch, start3 = state.pos, marker2 = state.src.charCodeAt(start3);
  if (silent) {
    return false;
  }
  if (marker2 !== 126) {
    return false;
  }
  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker2);
  if (len < 2) {
    return false;
  }
  if (len % 2) {
    token2 = state.push("text", "", 0);
    token2.content = ch;
    len--;
  }
  for (i = 0; i < len; i += 2) {
    token2 = state.push("text", "", 0);
    token2.content = ch + ch;
    state.delimiters.push({
      marker: marker2,
      length: 0,
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
};
function postProcess$1(state, delimiters) {
  var i, j, startDelim, endDelim, token2, loneMarkers = [], max2 = delimiters.length;
  for (i = 0; i < max2; i++) {
    startDelim = delimiters[i];
    if (startDelim.marker !== 126) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    token2 = state.tokens[startDelim.token];
    token2.type = "s_open";
    token2.tag = "s";
    token2.nesting = 1;
    token2.markup = "~~";
    token2.content = "";
    token2 = state.tokens[endDelim.token];
    token2.type = "s_close";
    token2.tag = "s";
    token2.nesting = -1;
    token2.markup = "~~";
    token2.content = "";
    if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
      loneMarkers.push(endDelim.token - 1);
    }
  }
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;
    while (j < state.tokens.length && state.tokens[j].type === "s_close") {
      j++;
    }
    j--;
    if (i !== j) {
      token2 = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token2;
    }
  }
}
var postProcess_1$1 = function strikethrough2(state) {
  var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
  postProcess$1(state, state.delimiters);
  for (curr = 0; curr < max2; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess$1(state, tokens_meta[curr].delimiters);
    }
  }
};
var strikethrough3 = {
  tokenize: tokenize$1,
  postProcess: postProcess_1$1
};
var tokenize = function emphasis(state, silent) {
  var i, scanned, token2, start3 = state.pos, marker2 = state.src.charCodeAt(start3);
  if (silent) {
    return false;
  }
  if (marker2 !== 95 && marker2 !== 42) {
    return false;
  }
  scanned = state.scanDelims(state.pos, marker2 === 42);
  for (i = 0; i < scanned.length; i++) {
    token2 = state.push("text", "", 0);
    token2.content = String.fromCharCode(marker2);
    state.delimiters.push({
      marker: marker2,
      length: scanned.length,
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
};
function postProcess(state, delimiters) {
  var i, startDelim, endDelim, token2, ch, isStrong, max2 = delimiters.length;
  for (i = max2 - 1; i >= 0; i--) {
    startDelim = delimiters[i];
    if (startDelim.marker !== 95 && startDelim.marker !== 42) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
    ch = String.fromCharCode(startDelim.marker);
    token2 = state.tokens[startDelim.token];
    token2.type = isStrong ? "strong_open" : "em_open";
    token2.tag = isStrong ? "strong" : "em";
    token2.nesting = 1;
    token2.markup = isStrong ? ch + ch : ch;
    token2.content = "";
    token2 = state.tokens[endDelim.token];
    token2.type = isStrong ? "strong_close" : "em_close";
    token2.tag = isStrong ? "strong" : "em";
    token2.nesting = -1;
    token2.markup = isStrong ? ch + ch : ch;
    token2.content = "";
    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = "";
      state.tokens[delimiters[startDelim.end + 1].token].content = "";
      i--;
    }
  }
}
var postProcess_1 = function emphasis2(state) {
  var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
  postProcess(state, state.delimiters);
  for (curr = 0; curr < max2; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};
var emphasis3 = {
  tokenize,
  postProcess: postProcess_1
};
var normalizeReference$1 = utils.normalizeReference;
var isSpace$1 = utils.isSpace;
var link$1 = function link(state, silent) {
  var attrs2, code3, label, labelEnd, labelStart, pos, res, ref, token2, href = "", title = "", oldPos = state.pos, max2 = state.posMax, start3 = state.pos, parseReference = true;
  if (state.src.charCodeAt(state.pos) !== 91) {
    return false;
  }
  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max2 && state.src.charCodeAt(pos) === 40) {
    parseReference = false;
    pos++;
    for (; pos < max2; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace$1(code3) && code3 !== 10) {
        break;
      }
    }
    if (pos >= max2) {
      return false;
    }
    start3 = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
      start3 = pos;
      for (; pos < max2; pos++) {
        code3 = state.src.charCodeAt(pos);
        if (!isSpace$1(code3) && code3 !== 10) {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max2 && start3 !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        for (; pos < max2; pos++) {
          code3 = state.src.charCodeAt(pos);
          if (!isSpace$1(code3) && code3 !== 10) {
            break;
          }
        }
      }
    }
    if (pos >= max2 || state.src.charCodeAt(pos) !== 41) {
      parseReference = true;
    }
    pos++;
  }
  if (parseReference) {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max2 && state.src.charCodeAt(pos) === 91) {
      start3 = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start3, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref = state.env.references[normalizeReference$1(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;
    token2 = state.push("link_open", "a", 1);
    token2.attrs = attrs2 = [["href", href]];
    if (title) {
      attrs2.push(["title", title]);
    }
    state.md.inline.tokenize(state);
    token2 = state.push("link_close", "a", -1);
  }
  state.pos = pos;
  state.posMax = max2;
  return true;
};
var normalizeReference = utils.normalizeReference;
var isSpace = utils.isSpace;
var image = function image2(state, silent) {
  var attrs2, code3, content2, label, labelEnd, labelStart, pos, ref, res, title, token2, tokens, start3, href = "", oldPos = state.pos, max2 = state.posMax;
  if (state.src.charCodeAt(state.pos) !== 33) {
    return false;
  }
  if (state.src.charCodeAt(state.pos + 1) !== 91) {
    return false;
  }
  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max2 && state.src.charCodeAt(pos) === 40) {
    pos++;
    for (; pos < max2; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace(code3) && code3 !== 10) {
        break;
      }
    }
    if (pos >= max2) {
      return false;
    }
    start3 = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
    }
    start3 = pos;
    for (; pos < max2; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace(code3) && code3 !== 10) {
        break;
      }
    }
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max2 && start3 !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      for (; pos < max2; pos++) {
        code3 = state.src.charCodeAt(pos);
        if (!isSpace(code3) && code3 !== 10) {
          break;
        }
      }
    } else {
      title = "";
    }
    if (pos >= max2 || state.src.charCodeAt(pos) !== 41) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max2 && state.src.charCodeAt(pos) === 91) {
      start3 = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start3, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }
  if (!silent) {
    content2 = state.src.slice(labelStart, labelEnd);
    state.md.inline.parse(content2, state.md, state.env, tokens = []);
    token2 = state.push("image", "img", 0);
    token2.attrs = attrs2 = [["src", href], ["alt", ""]];
    token2.children = tokens;
    token2.content = content2;
    if (title) {
      attrs2.push(["title", title]);
    }
  }
  state.pos = pos;
  state.posMax = max2;
  return true;
};
var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
var autolink = function autolink2(state, silent) {
  var url, fullUrl, token2, ch, start3, max2, pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  start3 = state.pos;
  max2 = state.posMax;
  for (; ; ) {
    if (++pos >= max2)
      return false;
    ch = state.src.charCodeAt(pos);
    if (ch === 60)
      return false;
    if (ch === 62)
      break;
  }
  url = state.src.slice(start3 + 1, pos);
  if (AUTOLINK_RE.test(url)) {
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "autolink";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "autolink";
      token2.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  if (EMAIL_RE.test(url)) {
    fullUrl = state.md.normalizeLink("mailto:" + url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "autolink";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "autolink";
      token2.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  return false;
};
var HTML_TAG_RE = html_re.HTML_TAG_RE;
function isLetter(ch) {
  var lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
var html_inline = function html_inline2(state, silent) {
  var ch, match2, max2, token2, pos = state.pos;
  if (!state.md.options.html) {
    return false;
  }
  max2 = state.posMax;
  if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max2) {
    return false;
  }
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
    return false;
  }
  match2 = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match2) {
    return false;
  }
  if (!silent) {
    token2 = state.push("html_inline", "", 0);
    token2.content = state.src.slice(pos, pos + match2[0].length);
  }
  state.pos += match2[0].length;
  return true;
};
var has = utils.has;
var isValidEntityCode = utils.isValidEntityCode;
var fromCodePoint = utils.fromCodePoint;
var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
var entity = function entity2(state, silent) {
  var ch, code3, match2, pos = state.pos, max2 = state.posMax;
  if (state.src.charCodeAt(pos) !== 38) {
    return false;
  }
  if (pos + 1 < max2) {
    ch = state.src.charCodeAt(pos + 1);
    if (ch === 35) {
      match2 = state.src.slice(pos).match(DIGITAL_RE);
      if (match2) {
        if (!silent) {
          code3 = match2[1][0].toLowerCase() === "x" ? parseInt(match2[1].slice(1), 16) : parseInt(match2[1], 10);
          state.pending += isValidEntityCode(code3) ? fromCodePoint(code3) : fromCodePoint(65533);
        }
        state.pos += match2[0].length;
        return true;
      }
    } else {
      match2 = state.src.slice(pos).match(NAMED_RE);
      if (match2) {
        if (has(entities, match2[1])) {
          if (!silent) {
            state.pending += entities[match2[1]];
          }
          state.pos += match2[0].length;
          return true;
        }
      }
    }
  }
  if (!silent) {
    state.pending += "&";
  }
  state.pos++;
  return true;
};
function processDelimiters(state, delimiters) {
  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max2 = delimiters.length;
  if (!max2)
    return;
  var headerIdx = 0;
  var lastTokenIdx = -2;
  var jumps = [];
  for (closerIdx = 0; closerIdx < max2; closerIdx++) {
    closer = delimiters[closerIdx];
    jumps.push(0);
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }
    lastTokenIdx = closer.token;
    closer.length = closer.length || 0;
    if (!closer.close)
      continue;
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
    }
    minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
    openerIdx = headerIdx - jumps[headerIdx] - 1;
    newMinOpenerIdx = openerIdx;
    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      opener = delimiters[openerIdx];
      if (opener.marker !== closer.marker)
        continue;
      if (opener.open && opener.end < 0) {
        isOddMatch = false;
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }
        if (!isOddMatch) {
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;
          closer.open = false;
          opener.end = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          lastTokenIdx = -2;
          break;
        }
      }
    }
    if (newMinOpenerIdx !== -1) {
      openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
    }
  }
}
var balance_pairs = function link_pairs(state) {
  var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
  processDelimiters(state, state.delimiters);
  for (curr = 0; curr < max2; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(state, tokens_meta[curr].delimiters);
    }
  }
};
var text_collapse = function text_collapse2(state) {
  var curr, last, level = 0, tokens = state.tokens, max2 = state.tokens.length;
  for (curr = last = 0; curr < max2; curr++) {
    if (tokens[curr].nesting < 0)
      level--;
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0)
      level++;
    if (tokens[curr].type === "text" && curr + 1 < max2 && tokens[curr + 1].type === "text") {
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) {
        tokens[last] = tokens[curr];
      }
      last++;
    }
  }
  if (curr !== last) {
    tokens.length = last;
  }
};
var isWhiteSpace = utils.isWhiteSpace;
var isPunctChar = utils.isPunctChar;
var isMdAsciiPunct = utils.isMdAsciiPunct;
function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = "";
  this.pendingLevel = 0;
  this.cache = {};
  this.delimiters = [];
  this._prev_delimiters = [];
  this.backticks = {};
  this.backticksScanned = false;
}
StateInline.prototype.pushPending = function() {
  var token$1 = new token("text", "", 0);
  token$1.content = this.pending;
  token$1.level = this.pendingLevel;
  this.tokens.push(token$1);
  this.pending = "";
  return token$1;
};
StateInline.prototype.push = function(type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }
  var token$1 = new token(type, tag, nesting);
  var token_meta = null;
  if (nesting < 0) {
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }
  token$1.level = this.level;
  if (nesting > 0) {
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }
  this.pendingLevel = this.level;
  this.tokens.push(token$1);
  this.tokens_meta.push(token_meta);
  return token$1;
};
StateInline.prototype.scanDelims = function(start3, canSplitWord) {
  var pos = start3, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max2 = this.posMax, marker2 = this.src.charCodeAt(start3);
  lastChar = start3 > 0 ? this.src.charCodeAt(start3 - 1) : 32;
  while (pos < max2 && this.src.charCodeAt(pos) === marker2) {
    pos++;
  }
  count = pos - start3;
  nextChar = pos < max2 ? this.src.charCodeAt(pos) : 32;
  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);
  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }
  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }
  if (!canSplitWord) {
    can_open = left_flanking && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking || isNextPunctChar);
  } else {
    can_open = left_flanking;
    can_close = right_flanking;
  }
  return {
    can_open,
    can_close,
    length: count
  };
};
StateInline.prototype.Token = token;
var state_inline = StateInline;
var _rules = [
  ["text", text2],
  ["newline", newline],
  ["escape", _escape],
  ["backticks", backticks],
  ["strikethrough", strikethrough3.tokenize],
  ["emphasis", emphasis3.tokenize],
  ["link", link$1],
  ["image", image],
  ["autolink", autolink],
  ["html_inline", html_inline],
  ["entity", entity]
];
var _rules2 = [
  ["balance_pairs", balance_pairs],
  ["strikethrough", strikethrough3.postProcess],
  ["emphasis", emphasis3.postProcess],
  ["text_collapse", text_collapse]
];
function ParserInline() {
  var i;
  this.ruler = new ruler();
  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
  this.ruler2 = new ruler();
  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}
ParserInline.prototype.skipToken = function(state) {
  var ok2, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
  if (typeof cache[pos] !== "undefined") {
    state.pos = cache[pos];
    return;
  }
  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      state.level++;
      ok2 = rules[i](state, true);
      state.level--;
      if (ok2) {
        break;
      }
    }
  } else {
    state.pos = state.posMax;
  }
  if (!ok2) {
    state.pos++;
  }
  cache[pos] = state.pos;
};
ParserInline.prototype.tokenize = function(state) {
  var ok2, i, rules = this.ruler.getRules(""), len = rules.length, end2 = state.posMax, maxNesting = state.md.options.maxNesting;
  while (state.pos < end2) {
    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok2 = rules[i](state, false);
        if (ok2) {
          break;
        }
      }
    }
    if (ok2) {
      if (state.pos >= end2) {
        break;
      }
      continue;
    }
    state.pending += state.src[state.pos++];
  }
  if (state.pending) {
    state.pushPending();
  }
};
ParserInline.prototype.parse = function(str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);
  this.tokenize(state);
  rules = this.ruler2.getRules("");
  len = rules.length;
  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};
ParserInline.prototype.State = state_inline;
var parser_inline = ParserInline;
var re = function(opts) {
  var re2 = {};
  re2.src_Any = regex$3.source;
  re2.src_Cc = regex$2.source;
  re2.src_Z = regex.source;
  re2.src_P = regex$4.source;
  re2.src_ZPCc = [re2.src_Z, re2.src_P, re2.src_Cc].join("|");
  re2.src_ZCc = [re2.src_Z, re2.src_Cc].join("|");
  var text_separators = "[><\uFF5C]";
  re2.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re2.src_ZPCc + ")" + re2.src_Any + ")";
  re2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  re2.src_auth = "(?:(?:(?!" + re2.src_ZCc + "|[@/\\[\\]()]).)+@)?";
  re2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
  re2.src_host_terminator = "(?=$|" + text_separators + "|" + re2.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re2.src_ZPCc + "))";
  re2.src_path = "(?:[/?#](?:(?!" + re2.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re2.src_ZCc + "|[']).)+\\'|\\'(?=" + re2.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re2.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re2.src_ZCc + ").|;(?!" + re2.src_ZCc + ").|\\!+(?!" + re2.src_ZCc + "|[!]).|\\?(?!" + re2.src_ZCc + "|[?]).)+|\\/)?";
  re2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re2.src_xn = "xn--[a-z0-9\\-]{1,59}";
  re2.src_domain_root = "(?:" + re2.src_xn + "|" + re2.src_pseudo_letter + "{1,63})";
  re2.src_domain = "(?:" + re2.src_xn + "|(?:" + re2.src_pseudo_letter + ")|(?:" + re2.src_pseudo_letter + "(?:-|" + re2.src_pseudo_letter + "){0,61}" + re2.src_pseudo_letter + "))";
  re2.src_host = "(?:(?:(?:(?:" + re2.src_domain + ")\\.)*" + re2.src_domain + "))";
  re2.tpl_host_fuzzy = "(?:" + re2.src_ip4 + "|(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%)))";
  re2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%))";
  re2.src_host_strict = re2.src_host + re2.src_host_terminator;
  re2.tpl_host_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_host_terminator;
  re2.src_host_port_strict = re2.src_host + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_no_ip_fuzzy_strict = re2.tpl_host_no_ip_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re2.src_ZPCc + "|>|$))";
  re2.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re2.src_ZCc + ")(" + re2.src_email_name + "@" + re2.tpl_host_fuzzy_strict + ")";
  re2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re2.tpl_host_port_fuzzy_strict + re2.src_path + ")";
  re2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re2.tpl_host_port_no_ip_fuzzy_strict + re2.src_path + ")";
  return re2;
};
function assign(obj) {
  var sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === "[object String]";
}
function isObject(obj) {
  return _class(obj) === "[object Object]";
}
function isRegExp(obj) {
  return _class(obj) === "[object RegExp]";
}
function isFunction(obj) {
  return _class(obj) === "[object Function]";
}
function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function(acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}
var defaultSchemas = {
  "http:": {
    validate: function(text6, pos, self) {
      var tail = text6.slice(pos);
      if (!self.re.http) {
        self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(text6, pos, self) {
      var tail = text6.slice(pos);
      if (!self.re.no_http) {
        self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
      }
      if (self.re.no_http.test(tail)) {
        if (pos >= 3 && text6[pos - 3] === ":") {
          return 0;
        }
        if (pos >= 3 && text6[pos - 3] === "/") {
          return 0;
        }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  "mailto:": {
    validate: function(text6, pos, self) {
      var tail = text6.slice(pos);
      if (!self.re.mailto) {
        self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};
var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = "";
}
function createValidator(re2) {
  return function(text6, pos) {
    var tail = text6.slice(pos);
    if (re2.test(tail)) {
      return tail.match(re2)[0].length;
    }
    return 0;
  };
}
function createNormalizer() {
  return function(match2, self) {
    self.normalize(match2);
  };
}
function compile3(self) {
  var re$1 = self.re = re(self.__opts__);
  var tlds3 = self.__tlds__.slice();
  self.onCompile();
  if (!self.__tlds_replaced__) {
    tlds3.push(tlds_2ch_src_re);
  }
  tlds3.push(re$1.src_xn);
  re$1.src_tlds = tlds3.join("|");
  function untpl(tpl) {
    return tpl.replace("%TLDS%", re$1.src_tlds);
  }
  re$1.email_fuzzy = RegExp(untpl(re$1.tpl_email_fuzzy), "i");
  re$1.link_fuzzy = RegExp(untpl(re$1.tpl_link_fuzzy), "i");
  re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), "i");
  re$1.host_fuzzy_test = RegExp(untpl(re$1.tpl_host_fuzzy_test), "i");
  var aliases = [];
  self.__compiled__ = {};
  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }
  Object.keys(self.__schemas__).forEach(function(name) {
    var val = self.__schemas__[name];
    if (val === null) {
      return;
    }
    var compiled = { validate: null, link: null };
    self.__compiled__[name] = compiled;
    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }
      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }
      return;
    }
    if (isString(val)) {
      aliases.push(name);
      return;
    }
    schemaError(name, val);
  });
  aliases.forEach(function(alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      return;
    }
    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  });
  self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
  var slist = Object.keys(self.__compiled__).filter(function(name) {
    return name.length > 0 && self.__compiled__[name];
  }).map(escapeRE).join("|");
  self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re$1.src_ZPCc + "))(" + slist + ")", "i");
  self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re$1.src_ZPCc + "))(" + slist + ")", "ig");
  self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
  resetScanCache(self);
}
function Match(self, shift2) {
  var start3 = self.__index__, end2 = self.__last_index__, text6 = self.__text_cache__.slice(start3, end2);
  this.schema = self.__schema__.toLowerCase();
  this.index = start3 + shift2;
  this.lastIndex = end2 + shift2;
  this.raw = text6;
  this.text = text6;
  this.url = text6;
}
function createMatch(self, shift2) {
  var match2 = new Match(self, shift2);
  self.__compiled__[match2.schema].normalize(match2, self);
  return match2;
}
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }
  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }
  this.__opts__ = assign({}, defaultOptions, options);
  this.__index__ = -1;
  this.__last_index__ = -1;
  this.__schema__ = "";
  this.__text_cache__ = "";
  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile3(this);
}
LinkifyIt.prototype.add = function add2(schema2, definition) {
  this.__schemas__[schema2] = definition;
  compile3(this);
  return this;
};
LinkifyIt.prototype.set = function set2(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};
LinkifyIt.prototype.test = function test2(text6) {
  this.__text_cache__ = text6;
  this.__index__ = -1;
  if (!text6.length) {
    return false;
  }
  var m, ml, me, len, shift2, next, re2, tld_pos, at_pos;
  if (this.re.schema_test.test(text6)) {
    re2 = this.re.schema_search;
    re2.lastIndex = 0;
    while ((m = re2.exec(text6)) !== null) {
      len = this.testSchemaAt(text6, m[2], re2.lastIndex);
      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
    tld_pos = text6.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text6.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift2 = ml.index + ml[1].length;
          if (this.__index__ < 0 || shift2 < this.__index__) {
            this.__schema__ = "";
            this.__index__ = shift2;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
    at_pos = text6.indexOf("@");
    if (at_pos >= 0) {
      if ((me = text6.match(this.re.email_fuzzy)) !== null) {
        shift2 = me.index + me[1].length;
        next = me.index + me[0].length;
        if (this.__index__ < 0 || shift2 < this.__index__ || shift2 === this.__index__ && next > this.__last_index__) {
          this.__schema__ = "mailto:";
          this.__index__ = shift2;
          this.__last_index__ = next;
        }
      }
    }
  }
  return this.__index__ >= 0;
};
LinkifyIt.prototype.pretest = function pretest(text6) {
  return this.re.pretest.test(text6);
};
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text6, schema2, pos) {
  if (!this.__compiled__[schema2.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema2.toLowerCase()].validate(text6, pos, this);
};
LinkifyIt.prototype.match = function match(text6) {
  var shift2 = 0, result2 = [];
  if (this.__index__ >= 0 && this.__text_cache__ === text6) {
    result2.push(createMatch(this, shift2));
    shift2 = this.__last_index__;
  }
  var tail = shift2 ? text6.slice(shift2) : text6;
  while (this.test(tail)) {
    result2.push(createMatch(this, shift2));
    tail = tail.slice(this.__last_index__);
    shift2 += this.__last_index__;
  }
  if (result2.length) {
    return result2;
  }
  return null;
};
LinkifyIt.prototype.tlds = function tlds2(list3, keepOld) {
  list3 = Array.isArray(list3) ? list3 : [list3];
  if (!keepOld) {
    this.__tlds__ = list3.slice();
    this.__tlds_replaced__ = true;
    compile3(this);
    return this;
  }
  this.__tlds__ = this.__tlds__.concat(list3).sort().filter(function(el2, idx, arr) {
    return el2 !== arr[idx - 1];
  }).reverse();
  compile3(this);
  return this;
};
LinkifyIt.prototype.normalize = function normalize3(match2) {
  if (!match2.schema) {
    match2.url = "http://" + match2.url;
  }
  if (match2.schema === "mailto:" && !/^mailto:/i.test(match2.url)) {
    match2.url = "mailto:" + match2.url;
  }
};
LinkifyIt.prototype.onCompile = function onCompile() {
};
var linkifyIt = LinkifyIt;
const maxInt = 2147483647;
const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128;
const delimiter = "-";
const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7E]/;
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
const errors = {
  "overflow": "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;
function error(type) {
  throw new RangeError(errors[type]);
}
function map15(array, fn) {
  const result2 = [];
  let length = array.length;
  while (length--) {
    result2[length] = fn(array[length]);
  }
  return result2;
}
function mapDomain(string, fn) {
  const parts = string.split("@");
  let result2 = "";
  if (parts.length > 1) {
    result2 = parts[0] + "@";
    string = parts[1];
  }
  string = string.replace(regexSeparators, ".");
  const labels = string.split(".");
  const encoded = map15(labels, fn).join(".");
  return result2 + encoded;
}
function ucs2decode(string) {
  const output = [];
  let counter = 0;
  const length = string.length;
  while (counter < length) {
    const value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      const extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
const ucs2encode = (array) => String.fromCodePoint(...array);
const basicToDigit = function(codePoint) {
  if (codePoint - 48 < 10) {
    return codePoint - 22;
  }
  if (codePoint - 65 < 26) {
    return codePoint - 65;
  }
  if (codePoint - 97 < 26) {
    return codePoint - 97;
  }
  return base;
};
const digitToBasic = function(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};
const adapt = function(delta2, numPoints, firstTime) {
  let k = 0;
  delta2 = firstTime ? floor(delta2 / damp) : delta2 >> 1;
  delta2 += floor(delta2 / numPoints);
  for (; delta2 > baseMinusTMin * tMax >> 1; k += base) {
    delta2 = floor(delta2 / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta2 / (delta2 + skew));
};
const decode = function(input) {
  const output = [];
  const inputLength = input.length;
  let i = 0;
  let n = initialN;
  let bias = initialBias;
  let basic = input.lastIndexOf(delimiter);
  if (basic < 0) {
    basic = 0;
  }
  for (let j = 0; j < basic; ++j) {
    if (input.charCodeAt(j) >= 128) {
      error("not-basic");
    }
    output.push(input.charCodeAt(j));
  }
  for (let index2 = basic > 0 ? basic + 1 : 0; index2 < inputLength; ) {
    let oldi = i;
    for (let w = 1, k = base; ; k += base) {
      if (index2 >= inputLength) {
        error("invalid-input");
      }
      const digit = basicToDigit(input.charCodeAt(index2++));
      if (digit >= base || digit > floor((maxInt - i) / w)) {
        error("overflow");
      }
      i += digit * w;
      const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
      if (digit < t) {
        break;
      }
      const baseMinusT = base - t;
      if (w > floor(maxInt / baseMinusT)) {
        error("overflow");
      }
      w *= baseMinusT;
    }
    const out = output.length + 1;
    bias = adapt(i - oldi, out, oldi == 0);
    if (floor(i / out) > maxInt - n) {
      error("overflow");
    }
    n += floor(i / out);
    i %= out;
    output.splice(i++, 0, n);
  }
  return String.fromCodePoint(...output);
};
const encode = function(input) {
  const output = [];
  input = ucs2decode(input);
  let inputLength = input.length;
  let n = initialN;
  let delta2 = 0;
  let bias = initialBias;
  for (const currentValue of input) {
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  let basicLength = output.length;
  let handledCPCount = basicLength;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    let m = maxInt;
    for (const currentValue of input) {
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }
    const handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta2) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta2 += (m - n) * handledCPCountPlusOne;
    n = m;
    for (const currentValue of input) {
      if (currentValue < n && ++delta2 > maxInt) {
        error("overflow");
      }
      if (currentValue == n) {
        let q = delta2;
        for (let k = base; ; k += base) {
          const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) {
            break;
          }
          const qMinusT = q - t;
          const baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta2, handledCPCountPlusOne, handledCPCount == basicLength);
        delta2 = 0;
        ++handledCPCount;
      }
    }
    ++delta2;
    ++n;
  }
  return output.join("");
};
const toUnicode = function(input) {
  return mapDomain(input, function(string) {
    return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
  });
};
const toASCII = function(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
  });
};
const punycode = {
  "version": "2.1.0",
  "ucs2": {
    "decode": ucs2decode,
    "encode": ucs2encode
  },
  "decode": decode,
  "encode": encode,
  "toASCII": toASCII,
  "toUnicode": toUnicode
};
var punycode_1 = punycode;
var _default = {
  options: {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};
var zero = {
  options: {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "text_collapse"
      ]
    }
  }
};
var commonmark = {
  options: {
    html: true,
    xhtmlOut: true,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "\u201C\u201D\u2018\u2019",
    highlight: null,
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "text_collapse"
      ]
    }
  }
};
var config = {
  default: _default,
  zero,
  commonmark
};
var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
function validateLink(url) {
  var str = url.trim().toLowerCase();
  return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
}
var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode_1.toASCII(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.encode(mdurl.format(parsed));
}
function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode_1.toUnicode(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
}
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }
  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = "default";
    }
  }
  this.inline = new parser_inline();
  this.block = new parser_block();
  this.core = new parser_core();
  this.renderer = new renderer();
  this.linkify = new linkifyIt();
  this.validateLink = validateLink;
  this.normalizeLink = normalizeLink;
  this.normalizeLinkText = normalizeLinkText;
  this.utils = utils;
  this.helpers = utils.assign({}, helpers);
  this.options = {};
  this.configure(presetName);
  if (options) {
    this.set(options);
  }
}
MarkdownIt.prototype.set = function(options) {
  utils.assign(this.options, options);
  return this;
};
MarkdownIt.prototype.configure = function(presets) {
  var self = this, presetName;
  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) {
      throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
    }
  }
  if (!presets) {
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  }
  if (presets.options) {
    self.set(presets.options);
  }
  if (presets.components) {
    Object.keys(presets.components).forEach(function(name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};
MarkdownIt.prototype.enable = function(list3, ignoreInvalid) {
  var result2 = [];
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result2 = result2.concat(this[chain].ruler.enable(list3, true));
  }, this);
  result2 = result2.concat(this.inline.ruler2.enable(list3, true));
  var missed = list3.filter(function(name) {
    return result2.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.disable = function(list3, ignoreInvalid) {
  var result2 = [];
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result2 = result2.concat(this[chain].ruler.disable(list3, true));
  }, this);
  result2 = result2.concat(this.inline.ruler2.disable(list3, true));
  var missed = list3.filter(function(name) {
    return result2.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.use = function(plugin) {
  var args = [this].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};
MarkdownIt.prototype.parse = function(src, env) {
  if (typeof src !== "string") {
    throw new Error("Input data should be a String");
  }
  var state = new this.core.State(src, this, env);
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.render = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parse(src, env), this.options, env);
};
MarkdownIt.prototype.parseInline = function(src, env) {
  var state = new this.core.State(src, this, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.renderInline = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(src, env), this.options, env);
};
var lib = MarkdownIt;
var markdownIt = lib;
var schema = new Schema({
  nodes: {
    doc: {
      content: "block+"
    },
    paragraph: {
      content: "inline*",
      group: "block",
      parseDOM: [{ tag: "p" }],
      toDOM: function toDOM() {
        return ["p", 0];
      }
    },
    blockquote: {
      content: "block+",
      group: "block",
      parseDOM: [{ tag: "blockquote" }],
      toDOM: function toDOM2() {
        return ["blockquote", 0];
      }
    },
    horizontal_rule: {
      group: "block",
      parseDOM: [{ tag: "hr" }],
      toDOM: function toDOM3() {
        return ["div", ["hr"]];
      }
    },
    heading: {
      attrs: { level: { default: 1 } },
      content: "(text | image)*",
      group: "block",
      defining: true,
      parseDOM: [
        { tag: "h1", attrs: { level: 1 } },
        { tag: "h2", attrs: { level: 2 } },
        { tag: "h3", attrs: { level: 3 } },
        { tag: "h4", attrs: { level: 4 } },
        { tag: "h5", attrs: { level: 5 } },
        { tag: "h6", attrs: { level: 6 } }
      ],
      toDOM: function toDOM4(node4) {
        return ["h" + node4.attrs.level, 0];
      }
    },
    code_block: {
      content: "text*",
      group: "block",
      code: true,
      defining: true,
      marks: "",
      attrs: { params: { default: "" } },
      parseDOM: [{ tag: "pre", preserveWhitespace: "full", getAttrs: function(node4) {
        return { params: node4.getAttribute("data-params") || "" };
      } }],
      toDOM: function toDOM5(node4) {
        return ["pre", node4.attrs.params ? { "data-params": node4.attrs.params } : {}, ["code", 0]];
      }
    },
    ordered_list: {
      content: "list_item+",
      group: "block",
      attrs: { order: { default: 1 }, tight: { default: false } },
      parseDOM: [{ tag: "ol", getAttrs: function getAttrs(dom) {
        return {
          order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1,
          tight: dom.hasAttribute("data-tight")
        };
      } }],
      toDOM: function toDOM6(node4) {
        return ["ol", {
          start: node4.attrs.order == 1 ? null : node4.attrs.order,
          "data-tight": node4.attrs.tight ? "true" : null
        }, 0];
      }
    },
    bullet_list: {
      content: "list_item+",
      group: "block",
      attrs: { tight: { default: false } },
      parseDOM: [{ tag: "ul", getAttrs: function(dom) {
        return { tight: dom.hasAttribute("data-tight") };
      } }],
      toDOM: function toDOM7(node4) {
        return ["ul", { "data-tight": node4.attrs.tight ? "true" : null }, 0];
      }
    },
    list_item: {
      content: "paragraph block*",
      defining: true,
      parseDOM: [{ tag: "li" }],
      toDOM: function toDOM8() {
        return ["li", 0];
      }
    },
    text: {
      group: "inline"
    },
    image: {
      inline: true,
      attrs: {
        src: {},
        alt: { default: null },
        title: { default: null }
      },
      group: "inline",
      draggable: true,
      parseDOM: [{ tag: "img[src]", getAttrs: function getAttrs2(dom) {
        return {
          src: dom.getAttribute("src"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt")
        };
      } }],
      toDOM: function toDOM9(node4) {
        return ["img", node4.attrs];
      }
    },
    hard_break: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{ tag: "br" }],
      toDOM: function toDOM10() {
        return ["br"];
      }
    }
  },
  marks: {
    em: {
      parseDOM: [
        { tag: "i" },
        { tag: "em" },
        { style: "font-style", getAttrs: function(value) {
          return value == "italic" && null;
        } }
      ],
      toDOM: function toDOM11() {
        return ["em"];
      }
    },
    strong: {
      parseDOM: [
        { tag: "b" },
        { tag: "strong" },
        { style: "font-weight", getAttrs: function(value) {
          return /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null;
        } }
      ],
      toDOM: function toDOM12() {
        return ["strong"];
      }
    },
    link: {
      attrs: {
        href: {},
        title: { default: null }
      },
      inclusive: false,
      parseDOM: [{ tag: "a[href]", getAttrs: function getAttrs3(dom) {
        return { href: dom.getAttribute("href"), title: dom.getAttribute("title") };
      } }],
      toDOM: function toDOM13(node4) {
        return ["a", node4.attrs];
      }
    },
    code: {
      parseDOM: [{ tag: "code" }],
      toDOM: function toDOM14() {
        return ["code"];
      }
    }
  }
});
function maybeMerge(a, b) {
  if (a.isText && b.isText && Mark$1.sameSet(a.marks, b.marks)) {
    return a.withText(a.text + b.text);
  }
}
var MarkdownParseState = function MarkdownParseState2(schema2, tokenHandlers2) {
  this.schema = schema2;
  this.stack = [{ type: schema2.topNodeType, content: [] }];
  this.marks = Mark$1.none;
  this.tokenHandlers = tokenHandlers2;
};
MarkdownParseState.prototype.top = function top2() {
  return this.stack[this.stack.length - 1];
};
MarkdownParseState.prototype.push = function push(elt) {
  if (this.stack.length) {
    this.top().content.push(elt);
  }
};
MarkdownParseState.prototype.addText = function addText(text6) {
  if (!text6) {
    return;
  }
  var nodes = this.top().content, last = nodes[nodes.length - 1];
  var node4 = this.schema.text(text6, this.marks), merged;
  if (last && (merged = maybeMerge(last, node4))) {
    nodes[nodes.length - 1] = merged;
  } else {
    nodes.push(node4);
  }
};
MarkdownParseState.prototype.openMark = function openMark(mark3) {
  this.marks = mark3.addToSet(this.marks);
};
MarkdownParseState.prototype.closeMark = function closeMark(mark3) {
  this.marks = mark3.removeFromSet(this.marks);
};
MarkdownParseState.prototype.parseTokens = function parseTokens(toks) {
  for (var i = 0; i < toks.length; i++) {
    var tok = toks[i];
    var handler = this.tokenHandlers[tok.type];
    if (!handler) {
      throw new Error("Token type `" + tok.type + "` not supported by Markdown parser");
    }
    handler(this, tok, toks, i);
  }
};
MarkdownParseState.prototype.addNode = function addNode3(type, attrs2, content2) {
  var node4 = type.createAndFill(attrs2, content2, this.marks);
  if (!node4) {
    return null;
  }
  this.push(node4);
  return node4;
};
MarkdownParseState.prototype.openNode = function openNode(type, attrs2) {
  this.stack.push({ type, attrs: attrs2, content: [] });
};
MarkdownParseState.prototype.closeNode = function closeNode() {
  if (this.marks.length) {
    this.marks = Mark$1.none;
  }
  var info = this.stack.pop();
  return this.addNode(info.type, info.attrs, info.content);
};
function attrs(spec, token2, tokens, i) {
  if (spec.getAttrs) {
    return spec.getAttrs(token2, tokens, i);
  } else if (spec.attrs instanceof Function) {
    return spec.attrs(token2);
  } else {
    return spec.attrs;
  }
}
function noCloseToken(spec, type) {
  return spec.noCloseToken || type == "code_inline" || type == "code_block" || type == "fence";
}
function withoutTrailingNewline(str) {
  return str[str.length - 1] == "\n" ? str.slice(0, str.length - 1) : str;
}
function noOp() {
}
function tokenHandlers(schema2, tokens) {
  var handlers2 = /* @__PURE__ */ Object.create(null);
  var loop = function(type2) {
    var spec = tokens[type2];
    if (spec.block) {
      var nodeType2 = schema2.nodeType(spec.block);
      if (noCloseToken(spec, type2)) {
        handlers2[type2] = function(state, tok, tokens2, i) {
          state.openNode(nodeType2, attrs(spec, tok, tokens2, i));
          state.addText(withoutTrailingNewline(tok.content));
          state.closeNode();
        };
      } else {
        handlers2[type2 + "_open"] = function(state, tok, tokens2, i) {
          return state.openNode(nodeType2, attrs(spec, tok, tokens2, i));
        };
        handlers2[type2 + "_close"] = function(state) {
          return state.closeNode();
        };
      }
    } else if (spec.node) {
      var nodeType$1 = schema2.nodeType(spec.node);
      handlers2[type2] = function(state, tok, tokens2, i) {
        return state.addNode(nodeType$1, attrs(spec, tok, tokens2, i));
      };
    } else if (spec.mark) {
      var markType = schema2.marks[spec.mark];
      if (noCloseToken(spec, type2)) {
        handlers2[type2] = function(state, tok, tokens2, i) {
          state.openMark(markType.create(attrs(spec, tok, tokens2, i)));
          state.addText(withoutTrailingNewline(tok.content));
          state.closeMark(markType);
        };
      } else {
        handlers2[type2 + "_open"] = function(state, tok, tokens2, i) {
          return state.openMark(markType.create(attrs(spec, tok, tokens2, i)));
        };
        handlers2[type2 + "_close"] = function(state) {
          return state.closeMark(markType);
        };
      }
    } else if (spec.ignore) {
      if (noCloseToken(spec, type2)) {
        handlers2[type2] = noOp;
      } else {
        handlers2[type2 + "_open"] = noOp;
        handlers2[type2 + "_close"] = noOp;
      }
    } else {
      throw new RangeError("Unrecognized parsing spec " + JSON.stringify(spec));
    }
  };
  for (var type in tokens)
    loop(type);
  handlers2.text = function(state, tok) {
    return state.addText(tok.content);
  };
  handlers2.inline = function(state, tok) {
    return state.parseTokens(tok.children);
  };
  handlers2.softbreak = handlers2.softbreak || function(state) {
    return state.addText("\n");
  };
  return handlers2;
}
var MarkdownParser = function MarkdownParser2(schema2, tokenizer, tokens) {
  this.tokens = tokens;
  this.schema = schema2;
  this.tokenizer = tokenizer;
  this.tokenHandlers = tokenHandlers(schema2, tokens);
};
MarkdownParser.prototype.parse = function parse4(text6) {
  var state = new MarkdownParseState(this.schema, this.tokenHandlers), doc2;
  state.parseTokens(this.tokenizer.parse(text6, {}));
  do {
    doc2 = state.closeNode();
  } while (state.stack.length);
  return doc2 || this.schema.topNodeType.createAndFill();
};
function listIsTight(tokens, i) {
  while (++i < tokens.length) {
    if (tokens[i].type != "list_item_open") {
      return tokens[i].hidden;
    }
  }
  return false;
}
var defaultMarkdownParser = new MarkdownParser(schema, markdownIt("commonmark", { html: false }), {
  blockquote: { block: "blockquote" },
  paragraph: { block: "paragraph" },
  list_item: { block: "list_item" },
  bullet_list: { block: "bullet_list", getAttrs: function(_, tokens, i) {
    return { tight: listIsTight(tokens, i) };
  } },
  ordered_list: { block: "ordered_list", getAttrs: function(tok, tokens, i) {
    return {
      order: +tok.attrGet("start") || 1,
      tight: listIsTight(tokens, i)
    };
  } },
  heading: { block: "heading", getAttrs: function(tok) {
    return { level: +tok.tag.slice(1) };
  } },
  code_block: { block: "code_block", noCloseToken: true },
  fence: { block: "code_block", getAttrs: function(tok) {
    return { params: tok.info || "" };
  }, noCloseToken: true },
  hr: { node: "horizontal_rule" },
  image: { node: "image", getAttrs: function(tok) {
    return {
      src: tok.attrGet("src"),
      title: tok.attrGet("title") || null,
      alt: tok.children[0] && tok.children[0].content || null
    };
  } },
  hardbreak: { node: "hard_break" },
  em: { mark: "em" },
  strong: { mark: "strong" },
  link: { mark: "link", getAttrs: function(tok) {
    return {
      href: tok.attrGet("href"),
      title: tok.attrGet("title") || null
    };
  } },
  code_inline: { mark: "code", noCloseToken: true }
});
var MarkdownSerializer = function MarkdownSerializer2(nodes, marks2) {
  this.nodes = nodes;
  this.marks = marks2;
};
MarkdownSerializer.prototype.serialize = function serialize(content2, options) {
  var state = new MarkdownSerializerState(this.nodes, this.marks, options);
  state.renderContent(content2);
  return state.out;
};
var defaultMarkdownSerializer = new MarkdownSerializer({
  blockquote: function blockquote3(state, node4) {
    state.wrapBlock("> ", null, node4, function() {
      return state.renderContent(node4);
    });
  },
  code_block: function code_block(state, node4) {
    state.write("```" + (node4.attrs.params || "") + "\n");
    state.text(node4.textContent, false);
    state.ensureNewLine();
    state.write("```");
    state.closeBlock(node4);
  },
  heading: function heading2(state, node4) {
    state.write(state.repeat("#", node4.attrs.level) + " ");
    state.renderInline(node4);
    state.closeBlock(node4);
  },
  horizontal_rule: function horizontal_rule(state, node4) {
    state.write(node4.attrs.markup || "---");
    state.closeBlock(node4);
  },
  bullet_list: function bullet_list(state, node4) {
    state.renderList(node4, "  ", function() {
      return (node4.attrs.bullet || "*") + " ";
    });
  },
  ordered_list: function ordered_list(state, node4) {
    var start3 = node4.attrs.order || 1;
    var maxW = String(start3 + node4.childCount - 1).length;
    var space = state.repeat(" ", maxW + 2);
    state.renderList(node4, space, function(i) {
      var nStr = String(start3 + i);
      return state.repeat(" ", maxW - nStr.length) + nStr + ". ";
    });
  },
  list_item: function list_item(state, node4) {
    state.renderContent(node4);
  },
  paragraph: function paragraph3(state, node4) {
    state.renderInline(node4);
    state.closeBlock(node4);
  },
  image: function image3(state, node4) {
    state.write("![" + state.esc(node4.attrs.alt || "") + "](" + node4.attrs.src + (node4.attrs.title ? ' "' + node4.attrs.title.replace(/"/g, '\\"') + '"' : "") + ")");
  },
  hard_break: function hard_break(state, node4, parent, index2) {
    for (var i = index2 + 1; i < parent.childCount; i++) {
      if (parent.child(i).type != node4.type) {
        state.write("\\\n");
        return;
      }
    }
  },
  text: function text4(state, node4) {
    state.text(node4.text);
  }
}, {
  em: { open: "*", close: "*", mixable: true, expelEnclosingWhitespace: true },
  strong: { open: "**", close: "**", mixable: true, expelEnclosingWhitespace: true },
  link: {
    open: function open(_state, mark3, parent, index2) {
      return isPlainURL(mark3, parent, index2, 1) ? "<" : "[";
    },
    close: function close3(state, mark3, parent, index2) {
      return isPlainURL(mark3, parent, index2, -1) ? ">" : "](" + mark3.attrs.href + (mark3.attrs.title ? ' "' + mark3.attrs.title.replace(/"/g, '\\"') + '"' : "") + ")";
    }
  },
  code: {
    open: function open2(_state, _mark, parent, index2) {
      return backticksFor(parent.child(index2), -1);
    },
    close: function close4(_state, _mark, parent, index2) {
      return backticksFor(parent.child(index2 - 1), 1);
    },
    escape: false
  }
});
function backticksFor(node4, side) {
  var ticks = /`+/g, m, len = 0;
  if (node4.isText) {
    while (m = ticks.exec(node4.text)) {
      len = Math.max(len, m[0].length);
    }
  }
  var result2 = len > 0 && side > 0 ? " `" : "`";
  for (var i = 0; i < len; i++) {
    result2 += "`";
  }
  if (len > 0 && side < 0) {
    result2 += " ";
  }
  return result2;
}
function isPlainURL(link3, parent, index2, side) {
  if (link3.attrs.title || !/^\w+:/.test(link3.attrs.href)) {
    return false;
  }
  var content2 = parent.child(index2 + (side < 0 ? -1 : 0));
  if (!content2.isText || content2.text != link3.attrs.href || content2.marks[content2.marks.length - 1] != link3) {
    return false;
  }
  if (index2 == (side < 0 ? 1 : parent.childCount - 1)) {
    return true;
  }
  var next = parent.child(index2 + (side < 0 ? -2 : 1));
  return !link3.isInSet(next.marks);
}
var MarkdownSerializerState = function MarkdownSerializerState2(nodes, marks2, options) {
  this.nodes = nodes;
  this.marks = marks2;
  this.delim = this.out = "";
  this.closed = false;
  this.inTightList = false;
  this.options = options || {};
  if (typeof this.options.tightLists == "undefined") {
    this.options.tightLists = false;
  }
};
MarkdownSerializerState.prototype.flushClose = function flushClose(size) {
  if (this.closed) {
    if (!this.atBlank()) {
      this.out += "\n";
    }
    if (size == null) {
      size = 2;
    }
    if (size > 1) {
      var delimMin = this.delim;
      var trim = /\s+$/.exec(delimMin);
      if (trim) {
        delimMin = delimMin.slice(0, delimMin.length - trim[0].length);
      }
      for (var i = 1; i < size; i++) {
        this.out += delimMin + "\n";
      }
    }
    this.closed = false;
  }
};
MarkdownSerializerState.prototype.wrapBlock = function wrapBlock(delim, firstDelim, node4, f) {
  var old = this.delim;
  this.write(firstDelim || delim);
  this.delim += delim;
  f();
  this.delim = old;
  this.closeBlock(node4);
};
MarkdownSerializerState.prototype.atBlank = function atBlank() {
  return /(^|\n)$/.test(this.out);
};
MarkdownSerializerState.prototype.ensureNewLine = function ensureNewLine() {
  if (!this.atBlank()) {
    this.out += "\n";
  }
};
MarkdownSerializerState.prototype.write = function write(content2) {
  this.flushClose();
  if (this.delim && this.atBlank()) {
    this.out += this.delim;
  }
  if (content2) {
    this.out += content2;
  }
};
MarkdownSerializerState.prototype.closeBlock = function closeBlock(node4) {
  this.closed = node4;
};
MarkdownSerializerState.prototype.text = function text5(text$12, escape2) {
  var lines = text$12.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var startOfLine = this.atBlank() || this.closed;
    this.write();
    this.out += escape2 !== false ? this.esc(lines[i], startOfLine) : lines[i];
    if (i != lines.length - 1) {
      this.out += "\n";
    }
  }
};
MarkdownSerializerState.prototype.render = function render(node4, parent, index2) {
  if (typeof parent == "number") {
    throw new Error("!");
  }
  if (!this.nodes[node4.type.name]) {
    throw new Error("Token type `" + node4.type.name + "` not supported by Markdown renderer");
  }
  this.nodes[node4.type.name](this, node4, parent, index2);
};
MarkdownSerializerState.prototype.renderContent = function renderContent(parent) {
  var this$1$1 = this;
  parent.forEach(function(node4, _, i) {
    return this$1$1.render(node4, parent, i);
  });
};
MarkdownSerializerState.prototype.renderInline = function renderInline(parent) {
  var this$1$1 = this;
  var active = [], trailing = "";
  var progress = function(node4, _, index2) {
    var marks2 = node4 ? node4.marks : [];
    if (node4 && node4.type.name === "hard_break") {
      marks2 = marks2.filter(function(m) {
        if (index2 + 1 == parent.childCount) {
          return false;
        }
        var next = parent.child(index2 + 1);
        return m.isInSet(next.marks) && (!next.isText || /\S/.test(next.text));
      });
    }
    var leading = trailing;
    trailing = "";
    if (node4 && node4.isText && marks2.some(function(mark4) {
      var info = this$1$1.marks[mark4.type.name];
      return info && info.expelEnclosingWhitespace;
    })) {
      var ref = /^(\s*)(.*?)(\s*)$/m.exec(node4.text);
      var lead = ref[1];
      var inner$1 = ref[2];
      var trail = ref[3];
      leading += lead;
      trailing = trail;
      if (lead || trail) {
        node4 = inner$1 ? node4.withText(inner$1) : null;
        if (!node4) {
          marks2 = active;
        }
      }
    }
    var inner = marks2.length && marks2[marks2.length - 1], noEsc = inner && this$1$1.marks[inner.type.name].escape === false;
    var len = marks2.length - (noEsc ? 1 : 0);
    outer:
      for (var i = 0; i < len; i++) {
        var mark3 = marks2[i];
        if (!this$1$1.marks[mark3.type.name].mixable) {
          break;
        }
        for (var j = 0; j < active.length; j++) {
          var other = active[j];
          if (!this$1$1.marks[other.type.name].mixable) {
            break;
          }
          if (mark3.eq(other)) {
            if (i > j) {
              marks2 = marks2.slice(0, j).concat(mark3).concat(marks2.slice(j, i)).concat(marks2.slice(i + 1, len));
            } else if (j > i) {
              marks2 = marks2.slice(0, i).concat(marks2.slice(i + 1, j)).concat(mark3).concat(marks2.slice(j, len));
            }
            continue outer;
          }
        }
      }
    var keep = 0;
    while (keep < Math.min(active.length, len) && marks2[keep].eq(active[keep])) {
      ++keep;
    }
    while (keep < active.length) {
      this$1$1.text(this$1$1.markString(active.pop(), false, parent, index2), false);
    }
    if (leading) {
      this$1$1.text(leading);
    }
    if (node4) {
      while (active.length < len) {
        var add3 = marks2[active.length];
        active.push(add3);
        this$1$1.text(this$1$1.markString(add3, true, parent, index2), false);
      }
      if (noEsc && node4.isText) {
        this$1$1.text(this$1$1.markString(inner, true, parent, index2) + node4.text + this$1$1.markString(inner, false, parent, index2 + 1), false);
      } else {
        this$1$1.render(node4, parent, index2);
      }
    }
  };
  parent.forEach(progress);
  progress(null, null, parent.childCount);
};
MarkdownSerializerState.prototype.renderList = function renderList(node4, delim, firstDelim) {
  var this$1$1 = this;
  if (this.closed && this.closed.type == node4.type) {
    this.flushClose(3);
  } else if (this.inTightList) {
    this.flushClose(1);
  }
  var isTight = typeof node4.attrs.tight != "undefined" ? node4.attrs.tight : this.options.tightLists;
  var prevTight = this.inTightList;
  this.inTightList = isTight;
  node4.forEach(function(child3, _, i) {
    if (i && isTight) {
      this$1$1.flushClose(1);
    }
    this$1$1.wrapBlock(delim, firstDelim(i), node4, function() {
      return this$1$1.render(child3, node4, i);
    });
  });
  this.inTightList = prevTight;
};
MarkdownSerializerState.prototype.esc = function esc(str, startOfLine) {
  str = str.replace(/[`*\\~\[\]_]/g, "\\$&");
  if (startOfLine) {
    str = str.replace(/^[:#\-*+>]/, "\\$&").replace(/^(\s*\d+)\./, "$1\\.");
  }
  return str;
};
MarkdownSerializerState.prototype.quote = function quote(str) {
  var wrap = str.indexOf('"') == -1 ? '""' : str.indexOf("'") == -1 ? "''" : "()";
  return wrap[0] + str + wrap[1];
};
MarkdownSerializerState.prototype.repeat = function repeat(str, n) {
  var out = "";
  for (var i = 0; i < n; i++) {
    out += str;
  }
  return out;
};
MarkdownSerializerState.prototype.markString = function markString(mark3, open3, parent, index2) {
  var info = this.marks[mark3.type.name];
  var value = open3 ? info.open : info.close;
  return typeof value == "string" ? value : value(this, mark3, parent, index2);
};
MarkdownSerializerState.prototype.getEnclosingWhitespace = function getEnclosingWhitespace(text6) {
  return {
    leading: (text6.match(/^(\s+)/) || [])[0],
    trailing: (text6.match(/(\s+)$/) || [])[0]
  };
};
const defaultSerializerConfig = {
  marks: {
    em: defaultMarkdownSerializer.marks.em,
    [Bold.name]: defaultMarkdownSerializer.marks.strong,
    [Code.name]: defaultMarkdownSerializer.marks.code,
    [Italic.name]: {
      open: "_",
      close: "_",
      mixable: true,
      expelEnclosingWhitespace: true
    },
    [Link.name]: defaultMarkdownSerializer.marks.link,
    [Strike.name]: {
      open: "~~",
      close: "~~",
      mixable: true,
      expelEnclosingWhitespace: true
    }
  },
  nodes: Object.assign(Object.assign({}, defaultMarkdownSerializer.nodes), { [Blockquote.name]: (state, node4) => {
    if (node4.attrs.multiline) {
      state.write(">>>");
      state.ensureNewLine();
      state.renderContent(node4);
      state.ensureNewLine();
      state.write(">>>");
      state.closeBlock(node4);
    } else {
      state.wrapBlock("> ", null, node4, () => state.renderContent(node4));
    }
  }, [CodeBlock.name]: defaultMarkdownSerializer.nodes.code_block, [Heading.name]: defaultMarkdownSerializer.nodes.heading, [HardBreak.name]: defaultMarkdownSerializer.nodes.hard_break, [HorizontalRule.name]: defaultMarkdownSerializer.nodes.horizontal_rule, [BulletList.name]: defaultMarkdownSerializer.nodes.bullet_list, [OrderedList.name]: defaultMarkdownSerializer.nodes.ordered_list, [ListItem.name]: defaultMarkdownSerializer.nodes.list_item, [Paragraph.name]: defaultMarkdownSerializer.nodes.paragraph, [Text.name]: defaultMarkdownSerializer.nodes.text })
};
const { bullet_list: bullet_list2, ordered_list: ordered_list2, link: link2, heading: heading3, fence: fence2 } = defaultMarkdownParser.tokens;
const defaultParserTokens = {
  blockquote: { block: Blockquote.name },
  paragraph: { block: Paragraph.name },
  list_item: { block: ListItem.name },
  bullet_list: Object.assign(Object.assign({}, bullet_list2), { block: BulletList.name }),
  ordered_list: Object.assign(Object.assign({}, ordered_list2), { block: OrderedList.name }),
  heading: heading3,
  code_block: { block: CodeBlock.name, noCloseToken: true },
  fence: Object.assign(Object.assign({}, fence2), { block: CodeBlock.name }),
  hr: { node: HorizontalRule.name },
  hardbreak: { node: HardBreak.name },
  [Italic.name]: { mark: Italic.name },
  em: { mark: Italic.name },
  [Bold.name]: { mark: Bold.name },
  strong: { mark: Bold.name },
  link: link2,
  code_inline: { mark: Code.name, noCloseToken: true },
  s: { mark: Strike.name }
};
const markdownSerializer = new MarkdownSerializer(defaultSerializerConfig.nodes, defaultSerializerConfig.marks);
let markdownParser = null;
const markdownSerializer$1 = {
  serialize: (content2) => markdownSerializer.serialize(content2, { tightLists: true }),
  parse: (markdownText, schema2) => {
    if (!markdownParser) {
      markdownParser = new MarkdownParser(schema2, defaultMarkdownParser["tokenizer"].enable("strikethrough"), defaultParserTokens);
    }
    return markdownParser.parse(markdownText);
  }
};
var Actions;
(function(Actions2) {
  Actions2[Actions2["ITALIC"] = 0] = "ITALIC";
  Actions2[Actions2["BOLD"] = 1] = "BOLD";
  Actions2[Actions2["H1"] = 2] = "H1";
  Actions2[Actions2["H2"] = 3] = "H2";
  Actions2[Actions2["STRIKE"] = 4] = "STRIKE";
  Actions2[Actions2["OL"] = 5] = "OL";
  Actions2[Actions2["UL"] = 6] = "UL";
  Actions2[Actions2["LINK"] = 7] = "LINK";
  Actions2[Actions2["CODE_BLOCK"] = 8] = "CODE_BLOCK";
  Actions2[Actions2["BLOCKQUOTE"] = 9] = "BLOCKQUOTE";
})(Actions || (Actions = {}));
const focusChain = (editor) => editor.chain().focus();
function handleToolbarBtnClick(editor, action) {
  switch (action) {
    case Actions.H1:
      focusChain(editor).toggleHeading({ level: 1 }).run();
      break;
    case Actions.H2:
      focusChain(editor).toggleHeading({ level: 2 }).run();
      break;
    case Actions.BOLD:
      focusChain(editor).toggleBold().run();
      break;
    case Actions.ITALIC:
      focusChain(editor).toggleItalic().run();
      break;
    case Actions.STRIKE:
      focusChain(editor).toggleStrike().run();
      break;
    case Actions.LINK:
      focusChain(editor).unsetLink().run();
      break;
    case Actions.OL:
      focusChain(editor).toggleOrderedList().run();
      break;
    case Actions.UL:
      focusChain(editor).toggleBulletList().run();
      break;
    case Actions.BLOCKQUOTE:
      focusChain(editor).toggleBlockquote().run();
      break;
    case Actions.CODE_BLOCK:
      focusChain(editor).toggleCodeBlock().run();
      break;
    default:
      console.warn("case missing:", action);
  }
}
function isToolbarBtnActive(editor, action) {
  if (!editor)
    return false;
  switch (action) {
    case Actions.H1:
      return editor.isActive("heading", { level: 1 });
    case Actions.H2:
      return editor.isActive("heading", { level: 2 });
    case Actions.BOLD:
      return editor.isActive("bold");
    case Actions.ITALIC:
      return editor.isActive("italic");
    case Actions.STRIKE:
      return editor.isActive("strike");
    case Actions.LINK:
      return editor.isActive("link");
    case Actions.OL:
      return editor.isActive("orderedList");
    case Actions.UL:
      return editor.isActive("bulletList");
    case Actions.BLOCKQUOTE:
      return editor.isActive("blockquote");
    case Actions.CODE_BLOCK:
      return editor.isActive("code");
    default:
      console.warn("case missing:", action);
  }
}
const inoMarkdownEditorCss = "ino-markdown-editor .markdown-editor{border-radius:10px}ino-markdown-editor .markdown-editor--readonly .markdown-editor__toolbar{display:none}ino-markdown-editor .markdown-editor--readonly .ProseMirror{padding:0;border:0}ino-markdown-editor .markdown-editor--readonly .ProseMirror-focused{outline:none}ino-markdown-editor .markdown-editor__error-text{display:block;padding:10px;color:#9f0028}ino-markdown-editor .markdown-editor__toolbar{display:grid;grid-template-columns:auto auto;justify-content:space-between;border-radius:10px;background-color:#f9f9f9;padding:10px 20px;margin-bottom:10px}ino-markdown-editor .toolbar__action-button{--ino-icon-color-primary:#9d9d9d;border:0;margin:0;padding:1px 2px;border-radius:10px;background-color:transparent;font-size:22px}ino-markdown-editor .toolbar__action-button:hover{--ino-icon-color-primary:#0d10f3;background-color:rgba(13, 16, 243, 0.1);color:#0d10f3;cursor:pointer}ino-markdown-editor .toolbar__action-button--active{--ino-icon-color-primary:#0d10f3;background-color:rgba(13, 16, 243, 0.1);color:#0d10f3;box-shadow:inset 0 3px 6px rgba(0, 0, 0, 0.16)}ino-markdown-editor .toolbar__action-button ino-icon{vertical-align:middle;padding:5px}ino-markdown-editor .toolbar__view-mode{border-radius:0;margin:0}ino-markdown-editor .toolbar__view-mode:first-of-type{border-radius:10px 0 0 10px}ino-markdown-editor .toolbar__view-mode:last-of-type{border-radius:0 10px 10px 0}ino-markdown-editor .toolbar__text-format--show{display:block}ino-markdown-editor .toolbar__text-format--hide{display:none}ino-markdown-editor .markdown-editor__content__container{height:100%;width:100%}ino-markdown-editor .markdown-editor__content{overflow:auto;max-height:var(--ino-markdown-editor-max-height, none)}ino-markdown-editor .markdown-editor__content ino-textarea{width:100%;height:100%}ino-markdown-editor .markdown-editor__content ino-textarea .mdc-text-field--textarea.mdc-text-field--outlined{display:flex}ino-markdown-editor .markdown-editor__content ino-textarea .mdc-text-field--textarea.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,ino-markdown-editor .markdown-editor__content ino-textarea .mdc-text-field--textarea.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,ino-markdown-editor .markdown-editor__content ino-textarea .mdc-text-field--textarea.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#e7e7e7}ino-markdown-editor .markdown-editor__content ino-textarea .mdc-text-field--textarea.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,ino-markdown-editor .markdown-editor__content ino-textarea .mdc-text-field--textarea.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,ino-markdown-editor .markdown-editor__content ino-textarea .mdc-text-field--textarea.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#9b9b9b}ino-markdown-editor .markdown-editor__content ino-textarea .mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{min-height:var(--ino-markdown-editor-min-height, 100px)}ino-markdown-editor .show-editor{display:block}ino-markdown-editor .hide-editor{display:none}ino-markdown-editor .ProseMirror{min-height:var(--ino-markdown-editor-min-height, 100px);padding:15px 16px;border-radius:4px;border:1px solid #e7e7e7}ino-markdown-editor .ProseMirror:hover:not(ino-markdown-editor .ProseMirror-focused){border-color:#9b9b9b}ino-markdown-editor .ProseMirror-focused{outline:#3d40f5 auto 1px}ino-markdown-editor .ProseMirror *:first-child{margin-top:0;padding-top:0}ino-markdown-editor .ProseMirror *:last-child{margin-bottom:0;padding-bottom:0}ino-markdown-editor .ProseMirror blockquote{padding-left:10px;border-left:3px solid #c1c1c1}ino-markdown-editor .ProseMirror p{margin-top:0}ino-markdown-editor .ProseMirror pre code{display:block;background-color:rgba(193, 193, 193, 0.15);white-space:pre;-webkit-overflow-scrolling:touch;overflow-x:auto;max-width:100%;min-width:100px;padding:6px 8px}";
let MarkdownEditor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.viewModeChange = createEvent(this, "viewModeChange", 7);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.inoBlur = createEvent(this, "inoBlur", 3);
    this.viewMode = "preview";
    this.toolbarActionsState = /* @__PURE__ */ new Set();
    this.errorMessage = "";
    this.handlePreviewBlur = () => {
      const markdownText = this.htmlToMarkdown();
      if (!this.errorMessage)
        this.valueChange.emit(markdownText);
      this.inoBlur.emit();
    };
    this.onEditorTransaction = () => {
      this.toolbarActionsState = new Set(Object.values(Actions).filter((action) => typeof action === "number" && isToolbarBtnActive(this.editor, action)));
    };
    this.onTextareaChange = (e) => {
      e.stopPropagation();
      this.textareaRef.value = e.detail;
    };
    this.handleMarkdownBlur = (e) => {
      e.stopPropagation();
      this.editor.commands.setContent(this.markdownToHtml(this.textareaRef.value));
      if (!this.errorMessage)
        this.valueChange.emit(this.textareaRef.value);
      this.inoBlur.emit();
    };
  }
  handleInitialValueChange(newInitialValue) {
    this.initializeEditor(newInitialValue);
  }
  handleViewModeChange(newViewMode) {
    var _a;
    if (newViewMode === ViewMode.MARKDOWN && this.textareaRef) {
      this.textareaRef.value = this.htmlToMarkdown();
      this.textareaRef.rows = this.textareaRef.value.split("\n").length;
    } else {
      (_a = this.editor) === null || _a === void 0 ? void 0 : _a.setEditable(newViewMode !== ViewMode.READONLY);
    }
  }
  componentDidLoad() {
    this.createEditor();
    if (this.initialValue) {
      this.initializeEditor(this.initialValue);
    }
    this.textareaRef.addEventListener("valueChange", this.onTextareaChange);
    this.textareaRef.addEventListener("inoBlur", this.handleMarkdownBlur);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.editor) === null || _a === void 0 ? void 0 : _a.destroy();
    this.textareaRef.removeEventListener("valueChange", this.onTextareaChange);
    this.textareaRef.removeEventListener("inoBlur", this.handleMarkdownBlur);
  }
  initializeEditor(initialValue) {
    this.editor.commands.setContent(this.markdownToHtml(initialValue), true);
    this.textareaRef.value = this.htmlToMarkdown();
    this.textareaRef.rows = this.textareaRef.value.split("\n").length;
  }
  createEditor() {
    this.editor = new Editor({
      element: this.editorRef,
      extensions: [StarterKit, Link],
      onBlur: this.handlePreviewBlur,
      onTransaction: this.onEditorTransaction,
      editable: this.viewMode !== ViewMode.READONLY
    });
  }
  htmlToMarkdown() {
    return this.tryParse(() => {
      const doc2 = this.editor.schema.nodeFromJSON(this.editor.getJSON());
      return markdownSerializer$1.serialize(doc2);
    }, this.textareaRef.value);
  }
  markdownToHtml(md = this.initialValue) {
    return this.tryParse(() => {
      const state = markdownSerializer$1.parse(md, this.editor.schema);
      return state.toJSON();
    }, this.editor.state);
  }
  tryParse(parseCallback, fallbackValue) {
    try {
      this.errorMessage = "";
      return parseCallback();
    } catch (err2) {
      this.errorMessage = err2.message;
      console.error(err2);
      return fallbackValue;
    }
  }
  handleViewModeBtnClick(viewMode) {
    if (!this.errorMessage)
      this.viewModeChange.emit(viewMode);
  }
  handleToolbarActionClick(action) {
    handleToolbarBtnClick(this.editor, action);
  }
  render() {
    const isReadonlyMode = this.viewMode === ViewMode.READONLY;
    const isPreviewMode = isReadonlyMode || this.viewMode === ViewMode.PREVIEW;
    const isMarkdownMode = this.viewMode === ViewMode.MARKDOWN;
    const editorClasses = classnames({
      "markdown-editor": true,
      "markdown-editor--readonly": isReadonlyMode
    });
    const previewModeEditorClasses = classnames({
      "markdown-editor__content__container": true,
      "show-editor": isPreviewMode,
      "hide-editor": isMarkdownMode
    });
    const markdownModeEditorClasses = classnames({
      "show-editor": isMarkdownMode,
      "hide-editor": isPreviewMode
    });
    const getViewModeBtnClasses = (viewMode) => classnames({
      "toolbar__action-button": true,
      "toolbar__view-mode": true,
      "toolbar__action-button--active": this.viewMode === viewMode
    });
    const textFormatToolbarClasses = classnames({
      "toolbar__text-format": true,
      "toolbar__text-format--show": isPreviewMode,
      "toolbar__text-format--hide": isMarkdownMode
    });
    const getToolbarActionBtnClass = (action) => classnames({
      "toolbar__action-button": true,
      "toolbar__action-button--active": this.toolbarActionsState.has(action)
    });
    return h("div", { class: editorClasses }, h("div", { class: "markdown-editor__toolbar" }, h("div", null, h("button", { class: getViewModeBtnClasses(ViewMode.PREVIEW), onClick: () => this.handleViewModeBtnClick(ViewMode.PREVIEW) }, h("ino-icon", { icon: "edit_text" })), h("button", { class: getViewModeBtnClasses(ViewMode.MARKDOWN), onClick: () => this.handleViewModeBtnClick(ViewMode.MARKDOWN) }, h("ino-icon", { icon: "code" }))), h("div", { class: textFormatToolbarClasses }, h("button", { class: getToolbarActionBtnClass(Actions.H1), onClick: () => this.handleToolbarActionClick(Actions.H1) }, h("ino-icon", { icon: "headline_one" })), h("button", { class: getToolbarActionBtnClass(Actions.H2), onClick: () => this.handleToolbarActionClick(Actions.H2) }, h("ino-icon", { icon: "headline_two" })), h("button", { class: getToolbarActionBtnClass(Actions.BOLD), onClick: () => this.handleToolbarActionClick(Actions.BOLD) }, h("ino-icon", { icon: "bold" })), h("button", { class: getToolbarActionBtnClass(Actions.ITALIC), onClick: () => this.handleToolbarActionClick(Actions.ITALIC) }, h("ino-icon", { icon: "italic" })), h("button", { class: getToolbarActionBtnClass(Actions.STRIKE), onClick: () => this.handleToolbarActionClick(Actions.STRIKE) }, h("ino-icon", { icon: "strikethrough" })), h("button", { class: getToolbarActionBtnClass(Actions.LINK), onClick: () => this.handleToolbarActionClick(Actions.LINK) }, h("ino-icon", { icon: "link" })), h("button", { class: getToolbarActionBtnClass(Actions.UL), onClick: () => this.handleToolbarActionClick(Actions.UL) }, h("ino-icon", { icon: "bullet_list" })), h("button", { class: getToolbarActionBtnClass(Actions.OL), onClick: () => this.handleToolbarActionClick(Actions.OL) }, h("ino-icon", { icon: "numeric_list" })), h("button", { class: getToolbarActionBtnClass(Actions.BLOCKQUOTE), onClick: () => this.handleToolbarActionClick(Actions.BLOCKQUOTE) }, h("ino-icon", { icon: "quote" })), h("button", { class: getToolbarActionBtnClass(Actions.CODE_BLOCK), onClick: () => this.handleToolbarActionClick(Actions.CODE_BLOCK) }, h("ino-icon", { icon: "code_block" }))), h("ino-popover", { placement: "top-start", "color-scheme": "transparent", controlled: true, visible: Boolean(this.errorMessage) }, h("span", { class: "markdown-editor__error-text" }, this.errorMessage))), h("div", { class: "markdown-editor__content" }, h("div", { class: previewModeEditorClasses, ref: (el2) => this.editorRef = el2 }), h("ino-textarea", { ref: (el2) => this.textareaRef = el2, class: markdownModeEditorClasses, cols: 100, autogrow: true, outline: true })));
  }
  static get watchers() {
    return {
      "initialValue": ["handleInitialValueChange"],
      "viewMode": ["handleViewModeChange"]
    };
  }
};
MarkdownEditor.style = inoMarkdownEditorCss;
export { MarkdownEditor as ino_markdown_editor };
