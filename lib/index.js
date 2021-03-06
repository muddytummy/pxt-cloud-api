'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deepDiff = _interopDefault(require('deep-diff'));
var lodash = _interopDefault(require('lodash'));
var msgpackLite = _interopDefault(require('msgpack-lite'));

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var api = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var Events;
(function (Events) {
    Events["ChatNewMessage"] = "new message";
    Events["UserAddSelf"] = "add self";
    Events["UserLeft"] = "user left";
    Events["UserJoined"] = "user joined";
    Events["UserRemoveSelf"] = "remove self";
    Events["UserSelfInfo"] = "self info";
    Events["WorldPullData"] = "pull data";
    Events["WorldPushData"] = "push data";
    Events["WorldPushDataDiff"] = "push data diff";
    Events["WorldLockData"] = "lock data";
    Events["WorldUnlockData"] = "unlock data";
    Events["WorldDeleteData"] = "delete data";
})(Events = exports.Events || (exports.Events = {}));
});

var api$1 = unwrapExports(api);
var api_1 = api.Events;

var api$2 = /*#__PURE__*/Object.freeze({
	default: api$1,
	__moduleExports: api,
	Events: api_1
});

var datarepo = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



var DataRepo = (function () {
    function DataRepo() {
        this._synceddata = {};
    }
    DataRepo.encode = function (data) {
        return msgpackLite.encode(data);
    };
    DataRepo.encodeArray = function (data) {
        return data.map(function (d) { return DataRepo.encode(d); });
    };
    DataRepo.decode = function (buffer) {
        return Array.isArray(buffer) ? buffer.map(function (b) { return DataRepo.decode(b); }) : msgpackLite.decode(new Uint8Array(buffer));
    };
    DataRepo.applyDataDiff = function (current, diff_) {
        if (diff_) {
            diff_.forEach(function (d) { return deepDiff.applyChange(current, current, d); });
        }
        return current;
    };
    DataRepo.calcDataDiff = function (lhs, rhs, options) {
        var diff_ = deepDiff.diff(lhs, rhs, function (path, key) {
            return 0 === path.length && undefined !== key && options && options.filter ? options.filter(key) : false;
        });
        return diff_ || [];
    };
    Object.defineProperty(DataRepo.prototype, "names", {
        get: function () {
            return Object.keys(this._synceddata);
        },
        enumerable: true,
        configurable: true
    });
    DataRepo.prototype.isDataSource = function (name) {
        return !!this._synceddata[name];
    };
    DataRepo.prototype.setDataSource = function (name, source) {
        var data = this.getData(name);
        var synceddata = this._synceddata[name];
        if (!synceddata) {
            this._synceddata[name] = { source: source };
        }
        if (data) {
            this.setData(name, data);
        }
        return !!synceddata;
    };
    DataRepo.prototype.deleteDataSource = function (name) {
        return delete this._synceddata[name];
    };
    DataRepo.prototype.getData = function (name) {
        var synceddata = this._synceddata[name];
        if (!synceddata) {
            return;
        }
        return synceddata.source.data;
    };
    DataRepo.prototype.getRecentData = function (name) {
        var synceddata = this._synceddata[name];
        if (!synceddata) {
            return;
        }
        return synceddata.dataRecent;
    };
    DataRepo.prototype.calcDataDiff = function (name) {
        var synceddata = this._synceddata[name];
        if (!synceddata) {
            return;
        }
        var source = synceddata.source;
        var dataRecent = synceddata.dataRecent || {};
        synceddata.dataRecent = lodash.cloneDeep(source.data);
        return DataRepo.calcDataDiff(dataRecent, source.data, source.options);
    };
    DataRepo.prototype.setData = function (name, data) {
        this.applyDataDiff(name, DataRepo.calcDataDiff({}, data), true);
    };
    DataRepo.prototype.applyDataDiff = function (name, diff_, resetRecent) {
        if (resetRecent === void 0) { resetRecent = false; }
        var synceddata = this._synceddata[name];
        if (!synceddata) {
            synceddata = this._synceddata[name] = { source: { data: {} } };
        }
        var source = synceddata.source;
        DataRepo.applyDataDiff(source.data, diff_);
        if (resetRecent) {
            synceddata.dataRecent = lodash.cloneDeep(source.data);
        }
    };
    return DataRepo;
}());
exports.DataRepo = DataRepo;
});

var datarepo$1 = unwrapExports(datarepo);
var datarepo_1 = datarepo.DataRepo;

var datarepo$2 = /*#__PURE__*/Object.freeze({
	default: datarepo$1,
	__moduleExports: datarepo,
	DataRepo: datarepo_1
});

var require$$0 = ( api$2 && api$1 ) || api$2;

var require$$1 = ( datarepo$2 && datarepo$1 ) || datarepo$2;

var built = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require$$0);
__export(require$$1);
});

var index = unwrapExports(built);

module.exports = index;
