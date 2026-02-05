import "../assets/css/overlay.scss";

const BLUR_LAYERS = [
  { blur: 0.0625, from: 0, to: 25 },
  { blur: 0.125, from: 12.5, to: 37.5 },
  { blur: 0.25, from: 25, to: 50 },
  { blur: 0.5, from: 37.5, to: 62.5 },
  { blur: 1, from: 50, to: 75 },
  { blur: 2, from: 62.5, to: 87.5 },
  { blur: 4, from: 75, to: 100 },
  { blur: 8, from: 87.5, to: 100 },
];

function BlurBottom() {
  return (
    <div className="blur-bottom">
      <div className="blur-wrapper">
        {BLUR_LAYERS.map((layer, i) => {
          const mask = `linear-gradient(
            to bottom,
            transparent ${layer.from}%,
            black ${layer.from + 12.5}%,
            black ${layer.to}%,
            transparent ${Math.min(layer.to + 12.5, 100)}%
          )`;

          return (
            <div
              key={i}
              className="blur-layer"
              style={{
                zIndex: i + 1,
                backdropFilter: `blur(${layer.blur}px)`,
                WebkitBackdropFilter: `blur(${layer.blur}px)`,
                maskImage: mask,
                WebkitMaskImage: mask,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlurBottom;

