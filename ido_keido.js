// 緯度（度）：北緯 0～90、南緯 -0～-90
// 南緯ｉ度⇔－（北緯）ｉ度

// 経度（度）：東経 0～180、西経 0～-180
// 西経ｋ度⇔－（東経）ｋ度

const ido = (i0, k0, d, a) => {
  // i0：出発点緯度（度）
  // k0：出発点経度（度）
  // d：目標点距離（ｍ）
  // a：目標点方位（度）
  // ido：出発点から距離d（ｍ）、方位a（度）地点の緯度（度）

  const pi = Math.PI;
  const rx = 6378137; // 赤道半径(m)
  const e2 = 6.69437999019758E-03 // 第2離心率(e^2)

  const wt = Math.sqrt(1 - e2 * Math.pow(Math.sin(i0 * pi / 180), 2)); // 仮のW（第１近似）
  const mt = rx * (1 - e2) / Math.pow(wt, 3); // 仮のM（第１近似）
  const diT = d * Math.cos(a * pi / 180) / mt; // 仮のdi（第１近似）
  const i = i0 * pi / 180 + diT / 2;
  
  const w = Math.sqrt(1 - e2 * Math.pow(Math.sin(i), 2));
  const m = rx * (1 - e2) / Math.pow(w, 3);
  const di = d * Math.cos(a * pi / 180) / m;
  const ido = i0 + di * 180 / pi;
  return ido;
}

const keido = (i0, k0, d, a) => {
  // i0：出発点緯度（度）
  // k0：出発点経度（度）
  // d：目標点距離（ｍ）
  // a：目標点方位（度）
  // keido：出発点から距離d（ｍ）、方位a（度）地点の経度（度）

  const pi = Math.PI;
  const rx = 6378137; // 赤道半径(m)
  const e2 = 6.69437999019758E-03 // 第2離心率(e^2)

  const wt = Math.sqrt(1 - e2 * Math.pow(Math.sin(i0 * pi / 180), 2)); // 仮のW（第１近似）
  const mt = rx * (1 - e2) / Math.pow(wt, 3); // 仮のM（第１近似）
  const diT = d * Math.cos(a * pi / 180) / mt; // 仮のdi（第１近似）
  const i = i0 * pi / 180 + diT / 2;

  const w = Math.sqrt(1 - e2 * Math.pow(Math.sin(i), 2));
  const n = rx / w;
  const dk = d * Math.sin(a * pi / 180) / (n * Math.cos(i));
  const keido = k0 + dk * 180 / pi;
  return keido;
}

const geoDistance = (lat1, lng1, lat2, lng2, precision) => {
  // 引数 precision は小数点以下の桁数（距離の精度）
  var distance = 0;
  if ((Math.abs(lat1 - lat2) < 0.00001) && (Math.abs(lng1 - lng2) < 0.00001)) {
    distance = 0;
  } else {
    lat1 = lat1 * Math.PI / 180;
    lng1 = lng1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    lng2 = lng2 * Math.PI / 180;
    
    var A = 6378140;
    var B = 6356755;
    var F = (A - B) / A;
    
    var P1 = Math.atan((B / A) * Math.tan(lat1));
    var P2 = Math.atan((B / A) * Math.tan(lat2));
    
    var X = Math.acos(Math.sin(P1) * Math.sin(P2) + Math.cos(P1) * Math.cos(P2) * Math.cos(lng1 - lng2));
    var L = (F / 8) * ((Math.sin(X) - X) * Math.pow((Math.sin(P1) + Math.sin(P2)), 2) / Math.pow(Math.cos(X / 2), 2) - (Math.sin(X) - X) * Math.pow(Math.sin(P1) - Math.sin(P2), 2) / Math.pow(Math.sin(X), 2));
    
    distance = A * (X + L);
    var decimal_no = Math.pow(10, precision);
    distance = Math.round(decimal_no * distance / 1) / decimal_no;   // kmに変換するときは(1000で割る)
  }
  return distance;
}

const geoDirection = (lat1, lng1, lat2, lng2) => {
  // 緯度経度 lat1, lng1 の点を出発として、緯度経度 lat2, lng2 への方位
  // 北を０度で右回りの角度０～３６０度
  var Y = Math.cos(lng2 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180 - lat1 * Math.PI / 180);
  var X = Math.cos(lng1 * Math.PI / 180) * Math.sin(lng2 * Math.PI / 180) - Math.sin(lng1 * Math.PI / 180) * Math.cos(lng2 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180 - lat1 * Math.PI / 180);
  var dirE0 = 180 * Math.atan2(Y, X) / Math.PI; // 東向きが０度の方向
  if (dirE0 < 0) {
    dirE0 = dirE0 + 360; //0～360 にする。
  }
  var dirN0 = (dirE0 + 90) % 360; //(dirE0+90)÷360の余りを出力 北向きが０度の方向
  return dirN0;
}
 
const calcIdoKeido = (i0, k0, i1, k1, d) => {
  const direction = geoDirection(i0, k0, i1, k1);
  var a0 = direction - 90;
  if (a0 < 0) {
    a0 += 360;
  }
  var a1 = direction + 90;
  if (a1 >= 360) {
    a1 -= 360;
  }
  const x1 = ido(i0, k0, d, a0);
  const y1 = keido(i0, k0, d, a0);
  const x2 = ido(i1, k1, d, a1);
  const y2 = keido(i1, k1, d, a1);
  return [x1, y1, x2, y2];
}

module.exports = {
  calcIdoKeido,
}