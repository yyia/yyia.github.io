let isIOS =
  (/iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
  !window.MSStream;
let precisionValue = isIOS ? 'highp' : 'mediump';
let hydra = new Hydra({
    canvas: canvas,
    enableStreamCapture: false,
    detectAudio: false,
    // etc
    precision: precisionValue
});

DD = 0.01;
b = (o, u, i, y, z) =>
  o()
    .add(solid(1, 1, 1), DD)
    .thresh(i * 0.2 * (z - y) + y, 0.0001)
    .luma(0.5, 0.0001)
    .color(c(u, i, 0), c(u, i, 1), c(u, i, 2));
c = (u, i, j) => {
  let cc = u.split('/'),
    cs = cc[cc.length - 1].split('-');
  return parseInt('0x' + cs[i].substring(2 * j, 2 + 2 * j)) / 255;
};
colorize = (x, u, y = 0, z = 1) =>
  b(x, u, 0, y, z)
    .layer(b(x, u, 1, y, z))
    .layer(b(x, u, 2, y, z))
    .layer(b(x, u, 3, y, z))
    .layer(b(x, u, 4, y, z));

// url = 'https://coolors.co/a1aca5-f1f0f0-EAD25D-eaafac-f3cfcd'

url = 'https://coolors.co/e4e1e1-455c54-e4c52e-d7675d-e7a39d';
//url='https://coolors.co/efb0a1-f4afb4-c9b7ad-94a89a-797d81'
//url='https://coolors.co/f1f0f0-a1aca5-f1c995-eaafac-f3cfcd'

func = () =>
  // osc(4, 0, 0).rotate(1.57).modulate(o1)
  // osc(8, 0, 0).out(o1)

  // osc(4, 0, 0).thresh(8).contrast(3).diff(o1, 5).modulate(o1, () => 0.2).add(noise(2, 0.048).scale(1,1,()=>window.innerWidth/window.innerHeight)).modulate(o0, () => 0.5).scale(1.01)

  osc([12, 12].fast(0.1), [0.02, -0.02].fast(0.2), 0)
    .thresh(0.7)
    .rotate([0, 1.57].fast(0.1))
    .modulateRotate(osc([4, 5].fast(0.3), -0.01, 0), 1.22, 10)
    //.add(noise(2, -0.1))
    .modulate(o0, () => 0.4)
    .scale(0.98)
    .blend(o0, 0.67);

colorize(func, url).out();

let toggleLivestream = () => {
  let livestream = document.getElementsByClassName('livestream')[0];
  if (livestream.style.display == 'block') {
    livestream.style.display = 'none';
  } else {
    livestream.style.display = 'block';
  }
};
