import { Building2, CheckCircle2, Layers } from "lucide-react";

const HeroRight = () => {
  return (
    <div className="relative flex justify-center items-center bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="relative max-w-sm md:max-w-md w-full">
        {/* Soft glow behind the card */}
        <div
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, #fb923c55 0%, transparent 70%)",
          }}
          className="hidden lg:flex xl:flex absolute -inset-8 rounded-[3rem] pointer-events-none"
        />

        {/* ── MAIN CARD ── */}
        <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
          {/* Top strip – architectural photo placeholder */}
          <div
            className="relative h-44 w-full overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #111827 0%, #1f2937 60%, #374151 100%)",
            }}
          >
            {/* Abstract grid lines – mimics architecture blueprint */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 320 176"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 40}
                  y1="0"
                  x2={i * 40}
                  y2="176"
                  stroke="white"
                  strokeWidth="0.5"
                />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={i * 44}
                  x2="320"
                  y2={i * 44}
                  stroke="white"
                  strokeWidth="0.5"
                />
              ))}
            </svg>

            {/* Skyline silhouette */}
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 320 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Buildings */}
              <rect x="0" y="60" width="28" height="40" fill="#374151" />
              <rect x="6" y="52" width="14" height="8" fill="#374151" />
              <rect x="30" y="40" width="36" height="60" fill="#4b5563" />
              <rect x="40" y="30" width="16" height="10" fill="#4b5563" />
              <rect x="44" y="22" width="6" height="10" fill="#6b7280" />
              {/* Windows on tall building */}
              {[38, 52, 66, 80].map((y) =>
                [33, 42, 52, 58].map((x) => (
                  <rect
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    width={4}
                    height={5}
                    fill="#fb923c"
                    opacity="0.6"
                    rx="0.5"
                  />
                )),
              )}
              <rect x="68" y="55" width="22" height="45" fill="#374151" />
              <rect x="92" y="35" width="40" height="65" fill="#1f2937" />
              <rect x="100" y="20" width="22" height="15" fill="#1f2937" />
              <rect x="108" y="12" width="8" height="10" fill="#374151" />
              {/* Highlight tower windows */}
              {[40, 54, 68].map((y) =>
                [95, 105, 118, 128].map((x) => (
                  <rect
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    width={4}
                    height={5}
                    fill="white"
                    opacity="0.15"
                    rx="0.5"
                  />
                )),
              )}
              <rect x="134" y="50" width="28" height="50" fill="#374151" />
              <rect x="164" y="30" width="50" height="70" fill="#4b5563" />
              <rect x="176" y="18" width="26" height="12" fill="#4b5563" />
              <rect x="216" y="45" width="32" height="55" fill="#374151" />
              <rect x="250" y="25" width="40" height="75" fill="#1f2937" />
              {[30, 44, 58, 72, 86].map((y) =>
                [254, 264, 274, 282].map((x) => (
                  <rect
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    width={4}
                    height={5}
                    fill="#fb923c"
                    opacity="0.5"
                    rx="0.5"
                  />
                )),
              )}
              <rect x="292" y="55" width="28" height="45" fill="#4b5563" />
              {/* Ground */}
              <rect
                x="0"
                y="99"
                width="320"
                height="2"
                fill="#6b7280"
                opacity="0.5"
              />
            </svg>

            {/* Overlay label */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="bg-orange-500 text-white p-2 rounded-xl">
                <Building2 size={16} />
              </div>
              <span className="text-white text-xs font-semibold tracking-widest uppercase opacity-90">
                The Creator's
              </span>
            </div>

            {/* Top-right badge */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-[11px] font-medium">
                Highlights
              </span>
            </div>
          </div>

          {/* ── BODY ── */}
          <div className="p-5 space-y-6">
            {/* ── Process strip ── */}
            <div className="rounded-2xl border border-gray-100 p-3.5">
              <div className="flex items-center gap-2 mb-3">
                <Layers size={13} className="text-orange-400" />
                <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">
                  How we work
                </p>
              </div>
              <div className="flex items-center gap-0">
                {["Plan", "Design", "Build", "Finish"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-0 flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className="h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                        style={{
                          background: i === 0 ? "#f97316" : "#e5e7eb",
                          color: i === 0 ? "white" : "#9ca3af",
                        }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-[10px] font-medium text-gray-500 mt-1">
                        {step}
                      </p>
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className="h-px flex-1 mb-4"
                        style={{
                          background: i === 0 ? "#f97316" : "#e5e7eb",
                          opacity: 0.6,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Service pills */}
            <div>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-2.5">
                What we deliver
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Custom Homes",
                  "Apartments",
                  "Offices",
                  "Interiors",
                  "Architecture",
                  "Renovation",
                ].map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1.5 text-[11px] font-medium bg-gray-50 border border-gray-100 text-gray-600 px-2.5 py-1 rounded-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all cursor-default"
                  >
                    <CheckCircle2 size={10} className="text-orange-400" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating accent dot */}
        <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-orange-400 opacity-70 blur-sm pointer-events-none" />
        <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-yellow-300 opacity-60 blur-sm pointer-events-none" />
      </div>
    </div>
  );
};

export default HeroRight;
