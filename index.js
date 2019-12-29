/**
 * なでしこ3 プラグイン
 * nadesiko3-sikulix
 * SikuliXを呼び出すためのプラグイン
 */
const PluginSikuliX = {
  '初期化': {
    type: 'func',
    josi: [],
    fn: function (sys) {
      // ここにプラグインの初期化処理
      sys.__varslist[0]['バージョン'] = '0.0.1';
      
      var java = require('java');
      sys.__varslist[0]['java'] = java;
      java.classpath.push("sikulixapi-2.0.0.jar");
      java.import('org.sikuli.script.ImagePath').add(".")
    }
  },
  
  'マウス移動': {
    type: 'func',
    josi: [['へ']],
    fn: function (target, sys) {
      var screen = sys.__varslist[0]['java'].newInstanceSync('org.sikuli.script.Screen');
      if (target['x'] != undefined && target['y'] != undefined) {
        screen.mouseMoveSync(target['x'], target['y']);
      } else {
        screen.mouseMoveSync(target);
      }
      return screen;
    }
  },
  
  'クリック': {
    type: 'func',
    josi: [['を']],
    fn: function (target, sys) {
      target.clickSync();
      return;
    }
  },
  
  'ダブルクリック': {
    type: 'func',
    josi: [['を']],
    fn: function (target, sys) {
      target.doubleClickSync();
      return;
    }
  },
  
  '画面取得': {
    type: 'func',
    josi: [],
    fn: function (sys) {
      return sys.__varslist[0]['java'].newInstanceSync('org.sikuli.script.Screen');
    }
  },
  
  '画面探索': {
    type: 'func',
    josi: [['から'], ['を']],
    fn: function (screen, target, sys) {
      if (!screen) {
        screen = sys.__varslist[0]['java'].newInstanceSync('org.sikuli.script.Screen');
      }
      return screen.findSync(target);
    }
  },
}

// モジュールのエクスポート(必ず必要)
module.exports = PluginSikuliX

