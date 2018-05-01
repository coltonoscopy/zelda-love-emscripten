
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', '.git', true, true);
Module['FS_createPath']('/.git', 'hooks', true, true);
Module['FS_createPath']('/.git', 'info', true, true);
Module['FS_createPath']('/.git', 'logs', true, true);
Module['FS_createPath']('/.git/logs', 'refs', true, true);
Module['FS_createPath']('/.git/logs/refs', 'heads', true, true);
Module['FS_createPath']('/.git/logs/refs', 'remotes', true, true);
Module['FS_createPath']('/.git/logs/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/.git', 'objects', true, true);
Module['FS_createPath']('/.git/objects', '02', true, true);
Module['FS_createPath']('/.git/objects', '03', true, true);
Module['FS_createPath']('/.git/objects', '05', true, true);
Module['FS_createPath']('/.git/objects', '08', true, true);
Module['FS_createPath']('/.git/objects', '0d', true, true);
Module['FS_createPath']('/.git/objects', '0e', true, true);
Module['FS_createPath']('/.git/objects', '10', true, true);
Module['FS_createPath']('/.git/objects', '12', true, true);
Module['FS_createPath']('/.git/objects', '13', true, true);
Module['FS_createPath']('/.git/objects', '14', true, true);
Module['FS_createPath']('/.git/objects', '16', true, true);
Module['FS_createPath']('/.git/objects', '18', true, true);
Module['FS_createPath']('/.git/objects', '1c', true, true);
Module['FS_createPath']('/.git/objects', '1f', true, true);
Module['FS_createPath']('/.git/objects', '24', true, true);
Module['FS_createPath']('/.git/objects', '25', true, true);
Module['FS_createPath']('/.git/objects', '27', true, true);
Module['FS_createPath']('/.git/objects', '2a', true, true);
Module['FS_createPath']('/.git/objects', '2c', true, true);
Module['FS_createPath']('/.git/objects', '35', true, true);
Module['FS_createPath']('/.git/objects', '44', true, true);
Module['FS_createPath']('/.git/objects', '49', true, true);
Module['FS_createPath']('/.git/objects', '4a', true, true);
Module['FS_createPath']('/.git/objects', '4e', true, true);
Module['FS_createPath']('/.git/objects', '50', true, true);
Module['FS_createPath']('/.git/objects', '53', true, true);
Module['FS_createPath']('/.git/objects', '54', true, true);
Module['FS_createPath']('/.git/objects', '55', true, true);
Module['FS_createPath']('/.git/objects', '57', true, true);
Module['FS_createPath']('/.git/objects', '58', true, true);
Module['FS_createPath']('/.git/objects', '59', true, true);
Module['FS_createPath']('/.git/objects', '64', true, true);
Module['FS_createPath']('/.git/objects', '66', true, true);
Module['FS_createPath']('/.git/objects', '68', true, true);
Module['FS_createPath']('/.git/objects', '6d', true, true);
Module['FS_createPath']('/.git/objects', '71', true, true);
Module['FS_createPath']('/.git/objects', '74', true, true);
Module['FS_createPath']('/.git/objects', '75', true, true);
Module['FS_createPath']('/.git/objects', '7d', true, true);
Module['FS_createPath']('/.git/objects', '82', true, true);
Module['FS_createPath']('/.git/objects', '90', true, true);
Module['FS_createPath']('/.git/objects', '92', true, true);
Module['FS_createPath']('/.git/objects', '93', true, true);
Module['FS_createPath']('/.git/objects', '9a', true, true);
Module['FS_createPath']('/.git/objects', '9d', true, true);
Module['FS_createPath']('/.git/objects', 'a2', true, true);
Module['FS_createPath']('/.git/objects', 'a5', true, true);
Module['FS_createPath']('/.git/objects', 'ab', true, true);
Module['FS_createPath']('/.git/objects', 'ac', true, true);
Module['FS_createPath']('/.git/objects', 'af', true, true);
Module['FS_createPath']('/.git/objects', 'b0', true, true);
Module['FS_createPath']('/.git/objects', 'b1', true, true);
Module['FS_createPath']('/.git/objects', 'b4', true, true);
Module['FS_createPath']('/.git/objects', 'b7', true, true);
Module['FS_createPath']('/.git/objects', 'b8', true, true);
Module['FS_createPath']('/.git/objects', 'bb', true, true);
Module['FS_createPath']('/.git/objects', 'bc', true, true);
Module['FS_createPath']('/.git/objects', 'bd', true, true);
Module['FS_createPath']('/.git/objects', 'c2', true, true);
Module['FS_createPath']('/.git/objects', 'c3', true, true);
Module['FS_createPath']('/.git/objects', 'c4', true, true);
Module['FS_createPath']('/.git/objects', 'c5', true, true);
Module['FS_createPath']('/.git/objects', 'ca', true, true);
Module['FS_createPath']('/.git/objects', 'd5', true, true);
Module['FS_createPath']('/.git/objects', 'd6', true, true);
Module['FS_createPath']('/.git/objects', 'd8', true, true);
Module['FS_createPath']('/.git/objects', 'da', true, true);
Module['FS_createPath']('/.git/objects', 'db', true, true);
Module['FS_createPath']('/.git/objects', 'dd', true, true);
Module['FS_createPath']('/.git/objects', 'e2', true, true);
Module['FS_createPath']('/.git/objects', 'e3', true, true);
Module['FS_createPath']('/.git/objects', 'e4', true, true);
Module['FS_createPath']('/.git/objects', 'e7', true, true);
Module['FS_createPath']('/.git/objects', 'e9', true, true);
Module['FS_createPath']('/.git/objects', 'ea', true, true);
Module['FS_createPath']('/.git/objects', 'eb', true, true);
Module['FS_createPath']('/.git/objects', 'ed', true, true);
Module['FS_createPath']('/.git/objects', 'ee', true, true);
Module['FS_createPath']('/.git/objects', 'ef', true, true);
Module['FS_createPath']('/.git/objects', 'f6', true, true);
Module['FS_createPath']('/.git/objects', 'f7', true, true);
Module['FS_createPath']('/.git/objects', 'fc', true, true);
Module['FS_createPath']('/.git/objects', 'fe', true, true);
Module['FS_createPath']('/.git/objects', 'ff', true, true);
Module['FS_createPath']('/.git', 'refs', true, true);
Module['FS_createPath']('/.git/refs', 'heads', true, true);
Module['FS_createPath']('/.git/refs', 'remotes', true, true);
Module['FS_createPath']('/.git/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/', 'fonts', true, true);
Module['FS_createPath']('/fonts', 'arcade_alternate', true, true);
Module['FS_createPath']('/fonts', 'fipps', true, true);
Module['FS_createPath']('/fonts', 'zelda', true, true);
Module['FS_createPath']('/', 'graphics', true, true);
Module['FS_createPath']('/', 'lib', true, true);
Module['FS_createPath']('/lib', 'knife', true, true);
Module['FS_createPath']('/', 'sounds', true, true);
Module['FS_createPath']('/', 'src', true, true);
Module['FS_createPath']('/src', 'states', true, true);
Module['FS_createPath']('/src/states', 'entity', true, true);
Module['FS_createPath']('/src/states/entity', 'player', true, true);
Module['FS_createPath']('/src/states', 'game', true, true);
Module['FS_createPath']('/src', 'world', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      },
    };

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_game.data');

    };
    Module['addRunDependency']('datafile_game.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 6148, "filename": "/.DS_Store"}, {"audio": 0, "start": 6148, "crunched": 0, "end": 7406, "filename": "/main.lua"}, {"audio": 0, "start": 7406, "crunched": 0, "end": 7574, "filename": "/todos.txt"}, {"audio": 0, "start": 7574, "crunched": 0, "end": 7600, "filename": "/.git/COMMIT_EDITMSG"}, {"audio": 0, "start": 7600, "crunched": 0, "end": 7880, "filename": "/.git/config"}, {"audio": 0, "start": 7880, "crunched": 0, "end": 7953, "filename": "/.git/description"}, {"audio": 0, "start": 7953, "crunched": 0, "end": 7976, "filename": "/.git/HEAD"}, {"audio": 0, "start": 7976, "crunched": 0, "end": 14912, "filename": "/.git/index"}, {"audio": 0, "start": 14912, "crunched": 0, "end": 15390, "filename": "/.git/hooks/applypatch-msg.sample"}, {"audio": 0, "start": 15390, "crunched": 0, "end": 16286, "filename": "/.git/hooks/commit-msg.sample"}, {"audio": 0, "start": 16286, "crunched": 0, "end": 16475, "filename": "/.git/hooks/post-update.sample"}, {"audio": 0, "start": 16475, "crunched": 0, "end": 16899, "filename": "/.git/hooks/pre-applypatch.sample"}, {"audio": 0, "start": 16899, "crunched": 0, "end": 18541, "filename": "/.git/hooks/pre-commit.sample"}, {"audio": 0, "start": 18541, "crunched": 0, "end": 19889, "filename": "/.git/hooks/pre-push.sample"}, {"audio": 0, "start": 19889, "crunched": 0, "end": 24840, "filename": "/.git/hooks/pre-rebase.sample"}, {"audio": 0, "start": 24840, "crunched": 0, "end": 25384, "filename": "/.git/hooks/pre-receive.sample"}, {"audio": 0, "start": 25384, "crunched": 0, "end": 26623, "filename": "/.git/hooks/prepare-commit-msg.sample"}, {"audio": 0, "start": 26623, "crunched": 0, "end": 30233, "filename": "/.git/hooks/update.sample"}, {"audio": 0, "start": 30233, "crunched": 0, "end": 30473, "filename": "/.git/info/exclude"}, {"audio": 0, "start": 30473, "crunched": 0, "end": 30985, "filename": "/.git/logs/HEAD"}, {"audio": 0, "start": 30985, "crunched": 0, "end": 31497, "filename": "/.git/logs/refs/heads/master"}, {"audio": 0, "start": 31497, "crunched": 0, "end": 31953, "filename": "/.git/logs/refs/remotes/origin/master"}, {"audio": 0, "start": 31953, "crunched": 0, "end": 33344, "filename": "/.git/objects/02/56c2c151bbf068fce35031e428ad0d6a0246b6"}, {"audio": 0, "start": 33344, "crunched": 0, "end": 38410, "filename": "/.git/objects/02/c309255e962589ad805679239ba9a25414d825"}, {"audio": 0, "start": 38410, "crunched": 0, "end": 38791, "filename": "/.git/objects/03/ef81e3a83e0994cda957b4a146b068ef735a10"}, {"audio": 0, "start": 38791, "crunched": 0, "end": 39654, "filename": "/.git/objects/05/4e8b15e0d552f274172cfa31bf16f3ca1212cd"}, {"audio": 0, "start": 39654, "crunched": 0, "end": 44206, "filename": "/.git/objects/08/625f0306b262c661fb945317337665f850f63d"}, {"audio": 0, "start": 44206, "crunched": 0, "end": 45063, "filename": "/.git/objects/0d/82a1059112ebd0c6686579ef9d0091eec381e1"}, {"audio": 0, "start": 45063, "crunched": 0, "end": 47732, "filename": "/.git/objects/0e/0709ae5db1c9732349eaa9798c71ba5ffa016a"}, {"audio": 0, "start": 47732, "crunched": 0, "end": 47905, "filename": "/.git/objects/10/fb4d014bb0cee38c9ee457afddaa8dc30f4142"}, {"audio": 0, "start": 47905, "crunched": 0, "end": 48802, "filename": "/.git/objects/12/8a4f160ac114fa4d83cdd7e4e412dc34255bcc"}, {"audio": 0, "start": 48802, "crunched": 0, "end": 69151, "filename": "/.git/objects/13/a70e288618d4f2905956b1ad04b7efebce8cad"}, {"audio": 0, "start": 69151, "crunched": 0, "end": 101490, "filename": "/.git/objects/14/2a1fb04dfc94970ef3354fb016d454658f0d7e"}, {"audio": 0, "start": 101490, "crunched": 0, "end": 101723, "filename": "/.git/objects/16/4991d6a21052f98541abcbd1ec2ee793ad2c9e"}, {"audio": 0, "start": 101723, "crunched": 0, "end": 127674, "filename": "/.git/objects/18/dfbdfbe6ca3c3f1fa3be1f56a33417a4bfc1f3"}, {"audio": 0, "start": 127674, "crunched": 0, "end": 128156, "filename": "/.git/objects/1c/5200b54daa915c6560712ec18f6fda65ad27f7"}, {"audio": 0, "start": 128156, "crunched": 0, "end": 128215, "filename": "/.git/objects/1f/ac5137c4e1a5740d985f7a2a1ccc03fbf87c13"}, {"audio": 0, "start": 128215, "crunched": 0, "end": 135323, "filename": "/.git/objects/24/3b70649497f03c68a02b2df690cf6eb51ca2f1"}, {"audio": 0, "start": 135323, "crunched": 0, "end": 135504, "filename": "/.git/objects/25/2f519b18e0ca5902ede66b6500e8ad3e0f4619"}, {"audio": 0, "start": 135504, "crunched": 0, "end": 136018, "filename": "/.git/objects/27/6dcd018e97f0a423418842801f9c444c7507da"}, {"audio": 0, "start": 136018, "crunched": 0, "end": 136137, "filename": "/.git/objects/27/98de055d682ad72ea018512af63fb0d650737a"}, {"audio": 0, "start": 136137, "crunched": 0, "end": 137262, "filename": "/.git/objects/2a/6aecdd5baa0bf8bebdbe04777b90bfa25a0175"}, {"audio": 0, "start": 137262, "crunched": 0, "end": 137438, "filename": "/.git/objects/2a/dd590381d1509a3b226f9fce11966874b4087f"}, {"audio": 0, "start": 137438, "crunched": 0, "end": 158611, "filename": "/.git/objects/2c/f68dfdb4d2f58425758384af532bfe310298c5"}, {"audio": 0, "start": 158611, "crunched": 0, "end": 179969, "filename": "/.git/objects/35/8c050271128d2252078174c4a71c29993cd312"}, {"audio": 0, "start": 179969, "crunched": 0, "end": 194205, "filename": "/.git/objects/44/ad09736890ad233b5ee60b79e22f6bb2407eef"}, {"audio": 0, "start": 194205, "crunched": 0, "end": 201143, "filename": "/.git/objects/49/3afc1e4f7aba1c9fff264872c36b3813c6da6b"}, {"audio": 0, "start": 201143, "crunched": 0, "end": 213647, "filename": "/.git/objects/4a/6d74b7e8ea1c21055e9e4c995d6847d95dcc17"}, {"audio": 0, "start": 213647, "crunched": 0, "end": 214612, "filename": "/.git/objects/4e/09ccd87b012cb583214f2800b0069c535f264d"}, {"audio": 0, "start": 214612, "crunched": 0, "end": 214766, "filename": "/.git/objects/50/097a5832f629df4a7c60b95e1d527db47444a6"}, {"audio": 0, "start": 214766, "crunched": 0, "end": 218693, "filename": "/.git/objects/50/d76daddcabe15e42ac2ea26d7e13c9d15ea97c"}, {"audio": 0, "start": 218693, "crunched": 0, "end": 221032, "filename": "/.git/objects/53/271a8b6b12844eed8234a8c6d8fdc0723f00c9"}, {"audio": 0, "start": 221032, "crunched": 0, "end": 221318, "filename": "/.git/objects/54/01d43847a8d6e2887c034a1ee5c56e03668890"}, {"audio": 0, "start": 221318, "crunched": 0, "end": 221444, "filename": "/.git/objects/54/fe2c937652cd7add8b3e7c20e6f62e07fcbae5"}, {"audio": 0, "start": 221444, "crunched": 0, "end": 221641, "filename": "/.git/objects/55/f72a441a2072adf4305cbc96438abe254f0413"}, {"audio": 0, "start": 221641, "crunched": 0, "end": 222400, "filename": "/.git/objects/57/beee53966eb28c9f29c40779cf997723c3387a"}, {"audio": 0, "start": 222400, "crunched": 0, "end": 222577, "filename": "/.git/objects/58/215ef5bbd7b6ccfa8d59250cf67907d265a6cf"}, {"audio": 0, "start": 222577, "crunched": 0, "end": 223027, "filename": "/.git/objects/58/9059aa2a8bd951f41ad9a87b6f696c47384026"}, {"audio": 0, "start": 223027, "crunched": 0, "end": 223156, "filename": "/.git/objects/59/105a9f24433df63d567559b9fcce4a69d0463b"}, {"audio": 0, "start": 223156, "crunched": 0, "end": 223389, "filename": "/.git/objects/59/528942e83328d70ad301c718d367a04f0f677d"}, {"audio": 0, "start": 223389, "crunched": 0, "end": 223870, "filename": "/.git/objects/64/da45f1711dac734dbc38dd919f52801c22c80f"}, {"audio": 0, "start": 223870, "crunched": 0, "end": 223925, "filename": "/.git/objects/66/3bb0fd80956522a2e6c53918b747961248c233"}, {"audio": 0, "start": 223925, "crunched": 0, "end": 224634, "filename": "/.git/objects/66/c0867e9407c4fec9fe9ee23513f80215eaca0e"}, {"audio": 0, "start": 224634, "crunched": 0, "end": 224769, "filename": "/.git/objects/68/7b149b6d9df8c79de95a422d5342df17a39571"}, {"audio": 0, "start": 224769, "crunched": 0, "end": 227100, "filename": "/.git/objects/6d/a255e6b72ad39c020970df9f7f23a5693a0596"}, {"audio": 0, "start": 227100, "crunched": 0, "end": 227596, "filename": "/.git/objects/71/68a24b69f87aea1eb4d98abba2274afde29aa7"}, {"audio": 0, "start": 227596, "crunched": 0, "end": 233109, "filename": "/.git/objects/74/36532a4b9bc2a824f806c30defa458ebb7d343"}, {"audio": 0, "start": 233109, "crunched": 0, "end": 233476, "filename": "/.git/objects/75/f9e16ace244ffa7d00b0169ba45185f00c7ef1"}, {"audio": 0, "start": 233476, "crunched": 0, "end": 235007, "filename": "/.git/objects/7d/62707247c31d189414c16f13cd2441c80cd1d8"}, {"audio": 0, "start": 235007, "crunched": 0, "end": 235552, "filename": "/.git/objects/82/af4da00ef676396bb6407c2b2227acb7e48fdd"}, {"audio": 0, "start": 235552, "crunched": 0, "end": 235891, "filename": "/.git/objects/90/0069c5bdce2fdda539db4a16aca9ead3ea4c41"}, {"audio": 0, "start": 235891, "crunched": 0, "end": 258712, "filename": "/.git/objects/90/1b2ace8ad2e69a4d0f44aa16f5cacfc3607313"}, {"audio": 0, "start": 258712, "crunched": 0, "end": 259593, "filename": "/.git/objects/92/d7c95dd3677e514a4fe80ecd45d4ceb00275aa"}, {"audio": 0, "start": 259593, "crunched": 0, "end": 272798, "filename": "/.git/objects/93/34dad594277ba8339786217d75260e58436dc8"}, {"audio": 0, "start": 272798, "crunched": 0, "end": 272845, "filename": "/.git/objects/9a/445aedc5a59bfd9a7aadc2c682d1a8bdcc5e8c"}, {"audio": 0, "start": 272845, "crunched": 0, "end": 327593, "filename": "/.git/objects/9a/b9260e066fcb6876c6a8fd458dd423782d742e"}, {"audio": 0, "start": 327593, "crunched": 0, "end": 327972, "filename": "/.git/objects/9d/2d11552c0a280005addcf2cdf4d13a2f4bf978"}, {"audio": 0, "start": 327972, "crunched": 0, "end": 329469, "filename": "/.git/objects/a2/072bd54fc4679aeb4a6f8c0a13b58ca2027fc9"}, {"audio": 0, "start": 329469, "crunched": 0, "end": 340029, "filename": "/.git/objects/a5/0ceb040f5ad2821d1b4976c19ef2a849dd8fb3"}, {"audio": 0, "start": 340029, "crunched": 0, "end": 373983, "filename": "/.git/objects/ab/d78291d2762d1162b6d2cca833ed9a21c1527a"}, {"audio": 0, "start": 373983, "crunched": 0, "end": 374255, "filename": "/.git/objects/ac/bb67f5706046245e2407ec7ae6da0bb2b92a51"}, {"audio": 0, "start": 374255, "crunched": 0, "end": 375056, "filename": "/.git/objects/af/398421373010ce666c1ccfa8d6ed1d1671321b"}, {"audio": 0, "start": 375056, "crunched": 0, "end": 375465, "filename": "/.git/objects/b0/1f8c421292e4b7b089d036868452e0a09da137"}, {"audio": 0, "start": 375465, "crunched": 0, "end": 376432, "filename": "/.git/objects/b1/a19fb5ec66eacf7a7de85707f29a1dbc68142b"}, {"audio": 0, "start": 376432, "crunched": 0, "end": 376831, "filename": "/.git/objects/b4/816eaf51d85d3e222bf09c97c4fb3e97df04fd"}, {"audio": 0, "start": 376831, "crunched": 0, "end": 377231, "filename": "/.git/objects/b7/4d952126728a4334c687ab2d4956ade0945a42"}, {"audio": 0, "start": 377231, "crunched": 0, "end": 377789, "filename": "/.git/objects/b8/253659359bfb6f1c76758c5d35bde207c23d35"}, {"audio": 0, "start": 377789, "crunched": 0, "end": 377919, "filename": "/.git/objects/bb/adc76285583b178b7daba5b9728834825698ae"}, {"audio": 0, "start": 377919, "crunched": 0, "end": 378594, "filename": "/.git/objects/bc/ace75fbc27ca156cf3aaa9508894f4c66d3c40"}, {"audio": 0, "start": 378594, "crunched": 0, "end": 379135, "filename": "/.git/objects/bd/5c0a30a2fca68ff924f7ecf67613a8893c1eea"}, {"audio": 0, "start": 379135, "crunched": 0, "end": 398106, "filename": "/.git/objects/c2/25f0dc963b60ecfa7e8f40df7e4f15023217b6"}, {"audio": 0, "start": 398106, "crunched": 0, "end": 398177, "filename": "/.git/objects/c3/f8189518cbc9ffda1a166bf83b39bcb748b70d"}, {"audio": 0, "start": 398177, "crunched": 0, "end": 398686, "filename": "/.git/objects/c4/4f526d36e493f5a3462b31b3f079706d271398"}, {"audio": 0, "start": 398686, "crunched": 0, "end": 398801, "filename": "/.git/objects/c5/0b8a02fd4780260ae2a12119207e76772fda2c"}, {"audio": 0, "start": 398801, "crunched": 0, "end": 399366, "filename": "/.git/objects/ca/0faa2c3f060de75dbc9448cc642269366e9e49"}, {"audio": 0, "start": 399366, "crunched": 0, "end": 399541, "filename": "/.git/objects/ca/d8de2e90f2f68279b9ae720bbdf5142543c856"}, {"audio": 0, "start": 399541, "crunched": 0, "end": 399987, "filename": "/.git/objects/d5/2084def50aa404b583c3d1fb881e786abbb1f7"}, {"audio": 0, "start": 399987, "crunched": 0, "end": 400116, "filename": "/.git/objects/d6/f0a074315aeed47845a78583228b1e852e040e"}, {"audio": 0, "start": 400116, "crunched": 0, "end": 400236, "filename": "/.git/objects/d8/02b4268a8d78fb8084fc566a79e47eb7f759ff"}, {"audio": 0, "start": 400236, "crunched": 0, "end": 400555, "filename": "/.git/objects/da/5fbbd353f1c3495e3c0c2204e07853e5e7f77a"}, {"audio": 0, "start": 400555, "crunched": 0, "end": 400672, "filename": "/.git/objects/da/9acbf5ac0300c63098410c1a94ece87ce3a223"}, {"audio": 0, "start": 400672, "crunched": 0, "end": 400798, "filename": "/.git/objects/db/60db16764a8338e2c39aef0b4beb7c7ffa3c5f"}, {"audio": 0, "start": 400798, "crunched": 0, "end": 456336, "filename": "/.git/objects/db/e535bef2fe5fef573c509d2db0fd052f5ebf58"}, {"audio": 0, "start": 456336, "crunched": 0, "end": 457046, "filename": "/.git/objects/dd/b6060c6d7ae0039e8b6c4b2103a7448ff01e03"}, {"audio": 0, "start": 457046, "crunched": 0, "end": 469569, "filename": "/.git/objects/e2/271a7ddda581315de4ffa00a32ad0c82adb101"}, {"audio": 0, "start": 469569, "crunched": 0, "end": 469689, "filename": "/.git/objects/e3/174e6b5780bde1003f753ed541f497bb848cab"}, {"audio": 0, "start": 469689, "crunched": 0, "end": 472115, "filename": "/.git/objects/e3/c603551916d57dfcd3d5be34527a8242b5f990"}, {"audio": 0, "start": 472115, "crunched": 0, "end": 472469, "filename": "/.git/objects/e4/116de6c5499cd84d31145296234c790c17daad"}, {"audio": 0, "start": 472469, "crunched": 0, "end": 472811, "filename": "/.git/objects/e7/362a7a7f1c4ff6a5d804522f5d091393300401"}, {"audio": 0, "start": 472811, "crunched": 0, "end": 473679, "filename": "/.git/objects/e7/8e80f4b6f134b2f2f12d467b7ce1aef0281f4e"}, {"audio": 0, "start": 473679, "crunched": 0, "end": 474221, "filename": "/.git/objects/e9/b6210341fd7daa527a8363b93c7ea3196ae77c"}, {"audio": 0, "start": 474221, "crunched": 0, "end": 484051, "filename": "/.git/objects/ea/c82f3442876adf2d3a2017912db7662758e0be"}, {"audio": 0, "start": 484051, "crunched": 0, "end": 486097, "filename": "/.git/objects/eb/e068c3748ce7cb5601da7787c4752d24ae7c74"}, {"audio": 0, "start": 486097, "crunched": 0, "end": 486805, "filename": "/.git/objects/ed/6774a1dfbcbb5835ef244ff3196ba6ef716200"}, {"audio": 0, "start": 486805, "crunched": 0, "end": 487017, "filename": "/.git/objects/ee/e7be09ae96013f22d8609fdb54dfa0941312f6"}, {"audio": 0, "start": 487017, "crunched": 0, "end": 487136, "filename": "/.git/objects/ef/74664875a9794e44dcd1e418ea209ec0e2f677"}, {"audio": 0, "start": 487136, "crunched": 0, "end": 488219, "filename": "/.git/objects/f6/6deef3ace0af5736f25c2fa9ea1a863ffd6747"}, {"audio": 0, "start": 488219, "crunched": 0, "end": 489262, "filename": "/.git/objects/f7/27089268ddc296b79c3e6c02bdb457a14a49b4"}, {"audio": 0, "start": 489262, "crunched": 0, "end": 553140, "filename": "/.git/objects/fc/18fea6836f992cc8c59c9cc42dec1e4f16df5f"}, {"audio": 0, "start": 553140, "crunched": 0, "end": 553373, "filename": "/.git/objects/fc/cfcc88ce48d29e227fc584eec64f1b24adf5c0"}, {"audio": 0, "start": 553373, "crunched": 0, "end": 561670, "filename": "/.git/objects/fe/4328b6accff5ea1c2554ef0148814ff3203ca4"}, {"audio": 0, "start": 561670, "crunched": 0, "end": 868802, "filename": "/.git/objects/ff/217286ecd4132cede9c0c475fa6e610d1c2eba"}, {"audio": 0, "start": 868802, "crunched": 0, "end": 868843, "filename": "/.git/refs/heads/master"}, {"audio": 0, "start": 868843, "crunched": 0, "end": 868884, "filename": "/.git/refs/remotes/origin/master"}, {"audio": 0, "start": 868884, "crunched": 0, "end": 875032, "filename": "/fonts/.DS_Store"}, {"audio": 0, "start": 875032, "crunched": 0, "end": 894006, "filename": "/fonts/arcade_alternate.zip"}, {"audio": 0, "start": 894006, "crunched": 0, "end": 936290, "filename": "/fonts/ArcadeAlternate.ttf"}, {"audio": 0, "start": 936290, "crunched": 0, "end": 970510, "filename": "/fonts/fipps.otf"}, {"audio": 0, "start": 970510, "crunched": 0, "end": 1034572, "filename": "/fonts/fipps.zip"}, {"audio": 0, "start": 1034572, "crunched": 0, "end": 1054064, "filename": "/fonts/font.ttf"}, {"audio": 0, "start": 1054064, "crunched": 0, "end": 1069424, "filename": "/fonts/GothicPixels.ttf"}, {"audio": 0, "start": 1069424, "crunched": 0, "end": 1074469, "filename": "/fonts/gothicpixels.zip"}, {"audio": 0, "start": 1074469, "crunched": 0, "end": 1112913, "filename": "/fonts/zelda.otf"}, {"audio": 0, "start": 1112913, "crunched": 0, "end": 1135227, "filename": "/fonts/zelda.zip"}, {"audio": 0, "start": 1135227, "crunched": 0, "end": 1141375, "filename": "/fonts/arcade_alternate/.DS_Store"}, {"audio": 0, "start": 1141375, "crunched": 0, "end": 1141653, "filename": "/fonts/arcade_alternate/ReadMe.txt"}, {"audio": 0, "start": 1141653, "crunched": 0, "end": 1147801, "filename": "/fonts/fipps/.DS_Store"}, {"audio": 0, "start": 1147801, "crunched": 0, "end": 1365614, "filename": "/fonts/fipps/pheist_license_freeware.pdf"}, {"audio": 0, "start": 1365614, "crunched": 0, "end": 1371762, "filename": "/fonts/zelda/.DS_Store"}, {"audio": 0, "start": 1371762, "crunched": 0, "end": 1371906, "filename": "/fonts/zelda/Information.txt"}, {"audio": 0, "start": 1371906, "crunched": 0, "end": 1378054, "filename": "/graphics/.DS_Store"}, {"audio": 0, "start": 1378054, "crunched": 0, "end": 1436313, "filename": "/graphics/background.jpg"}, {"audio": 0, "start": 1436313, "crunched": 0, "end": 1470565, "filename": "/graphics/background.png"}, {"audio": 0, "start": 1470565, "crunched": 0, "end": 1481517, "filename": "/graphics/character.png"}, {"audio": 0, "start": 1481517, "crunched": 0, "end": 1483827, "filename": "/graphics/character_pot_lift.png"}, {"audio": 0, "start": 1483827, "crunched": 0, "end": 1485852, "filename": "/graphics/character_pot_walk.png"}, {"audio": 0, "start": 1485852, "crunched": 0, "end": 1489777, "filename": "/graphics/character_swing_sword.png"}, {"audio": 0, "start": 1489777, "crunched": 0, "end": 1492095, "filename": "/graphics/character_walk.png"}, {"audio": 0, "start": 1492095, "crunched": 0, "end": 1509071, "filename": "/graphics/dawnblocker_ortho_extension.png"}, {"audio": 0, "start": 1509071, "crunched": 0, "end": 1518967, "filename": "/graphics/entities.png"}, {"audio": 0, "start": 1518967, "crunched": 0, "end": 1531594, "filename": "/graphics/entities_numbered.png"}, {"audio": 0, "start": 1531594, "crunched": 0, "end": 1532992, "filename": "/graphics/hearts.png"}, {"audio": 0, "start": 1532992, "crunched": 0, "end": 1533314, "filename": "/graphics/switches.png"}, {"audio": 0, "start": 1533314, "crunched": 0, "end": 1574396, "filename": "/graphics/tilesheet.png"}, {"audio": 0, "start": 1574396, "crunched": 0, "end": 1607157, "filename": "/graphics/tilesheet_numbered.png"}, {"audio": 0, "start": 1607157, "crunched": 0, "end": 1611705, "filename": "/graphics/Tiny16-ExpandedMaleSprites.png"}, {"audio": 0, "start": 1611705, "crunched": 0, "end": 1617853, "filename": "/lib/.DS_Store"}, {"audio": 0, "start": 1617853, "crunched": 0, "end": 1620919, "filename": "/lib/class.lua"}, {"audio": 0, "start": 1620919, "crunched": 0, "end": 1628148, "filename": "/lib/push.lua"}, {"audio": 0, "start": 1628148, "crunched": 0, "end": 1628568, "filename": "/lib/knife/base.lua"}, {"audio": 0, "start": 1628568, "crunched": 0, "end": 1630380, "filename": "/lib/knife/behavior.lua"}, {"audio": 0, "start": 1630380, "crunched": 0, "end": 1631147, "filename": "/lib/knife/bind.lua"}, {"audio": 0, "start": 1631147, "crunched": 0, "end": 1631872, "filename": "/lib/knife/chain.lua"}, {"audio": 0, "start": 1631872, "crunched": 0, "end": 1633190, "filename": "/lib/knife/convoke.lua"}, {"audio": 0, "start": 1633190, "crunched": 0, "end": 1635639, "filename": "/lib/knife/event.lua"}, {"audio": 0, "start": 1635639, "crunched": 0, "end": 1635670, "filename": "/lib/knife/gun.lua"}, {"audio": 0, "start": 1635670, "crunched": 0, "end": 1637631, "filename": "/lib/knife/memoize.lua"}, {"audio": 0, "start": 1637631, "crunched": 0, "end": 1639965, "filename": "/lib/knife/serialize.lua"}, {"audio": 0, "start": 1639965, "crunched": 0, "end": 1642129, "filename": "/lib/knife/system.lua"}, {"audio": 0, "start": 1642129, "crunched": 0, "end": 1645624, "filename": "/lib/knife/test.lua"}, {"audio": 0, "start": 1645624, "crunched": 0, "end": 1650507, "filename": "/lib/knife/timer.lua"}, {"audio": 0, "start": 1650507, "crunched": 0, "end": 1656655, "filename": "/sounds/.DS_Store"}, {"audio": 1, "start": 1656655, "crunched": 0, "end": 1728185, "filename": "/sounds/door.wav"}, {"audio": 1, "start": 1728185, "crunched": 0, "end": 1747783, "filename": "/sounds/hit_enemy.wav"}, {"audio": 1, "start": 1747783, "crunched": 0, "end": 1759777, "filename": "/sounds/hit_player.wav"}, {"audio": 1, "start": 1759777, "crunched": 0, "end": 2093625, "filename": "/sounds/music.mp3"}, {"audio": 1, "start": 2093625, "crunched": 0, "end": 2105419, "filename": "/sounds/sword.wav"}, {"audio": 0, "start": 2105419, "crunched": 0, "end": 2111567, "filename": "/src/.DS_Store"}, {"audio": 0, "start": 2111567, "crunched": 0, "end": 2112884, "filename": "/src/Animation.lua"}, {"audio": 0, "start": 2112884, "crunched": 0, "end": 2113845, "filename": "/src/constants.lua"}, {"audio": 0, "start": 2113845, "crunched": 0, "end": 2116458, "filename": "/src/Dependencies.lua"}, {"audio": 0, "start": 2116458, "crunched": 0, "end": 2119403, "filename": "/src/Entity.lua"}, {"audio": 0, "start": 2119403, "crunched": 0, "end": 2126020, "filename": "/src/entity_defs.lua"}, {"audio": 0, "start": 2126020, "crunched": 0, "end": 2126540, "filename": "/src/game_objects.lua"}, {"audio": 0, "start": 2126540, "crunched": 0, "end": 2127465, "filename": "/src/GameObject.lua"}, {"audio": 0, "start": 2127465, "crunched": 0, "end": 2127698, "filename": "/src/Hitbox.lua"}, {"audio": 0, "start": 2127698, "crunched": 0, "end": 2128473, "filename": "/src/Player.lua"}, {"audio": 0, "start": 2128473, "crunched": 0, "end": 2128690, "filename": "/src/Projectile.lua"}, {"audio": 0, "start": 2128690, "crunched": 0, "end": 2129538, "filename": "/src/StateMachine.lua"}, {"audio": 0, "start": 2129538, "crunched": 0, "end": 2131717, "filename": "/src/Util.lua"}, {"audio": 0, "start": 2131717, "crunched": 0, "end": 2132414, "filename": "/src/states/BaseState.lua"}, {"audio": 0, "start": 2132414, "crunched": 0, "end": 2133562, "filename": "/src/states/entity/EntityIdleState.lua"}, {"audio": 0, "start": 2133562, "crunched": 0, "end": 2136903, "filename": "/src/states/entity/EntityWalkState.lua"}, {"audio": 0, "start": 2136903, "crunched": 0, "end": 2137609, "filename": "/src/states/entity/player/PlayerIdleState.lua"}, {"audio": 0, "start": 2137609, "crunched": 0, "end": 2140389, "filename": "/src/states/entity/player/PlayerSwingSwordState.lua"}, {"audio": 0, "start": 2140389, "crunched": 0, "end": 2144224, "filename": "/src/states/entity/player/PlayerWalkState.lua"}, {"audio": 0, "start": 2144224, "crunched": 0, "end": 2145022, "filename": "/src/states/game/GameOverState.lua"}, {"audio": 0, "start": 2145022, "crunched": 0, "end": 2146856, "filename": "/src/states/game/PlayState.lua"}, {"audio": 0, "start": 2146856, "crunched": 0, "end": 2148326, "filename": "/src/states/game/StartState.lua"}, {"audio": 0, "start": 2148326, "crunched": 0, "end": 2152651, "filename": "/src/world/Doorway.lua"}, {"audio": 0, "start": 2152651, "crunched": 0, "end": 2156968, "filename": "/src/world/Dungeon.lua"}, {"audio": 0, "start": 2156968, "crunched": 0, "end": 2164779, "filename": "/src/world/Room.lua"}], "remote_package_size": 2164779, "package_uuid": "5fc3fd3c-767a-4aca-bd40-a94ba2ec188c"});

})();
