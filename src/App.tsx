import { useEffect, useRef, useState } from "react";

// ==================== Navigation ====================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          <span className="text-white font-semibold text-sm tracking-tight">Apple</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs text-gray-300">
          <a href="#overview" className="hover:text-white transition">概览</a>
          <a href="#design" className="hover:text-white transition">设计</a>
          <a href="#camera" className="hover:text-white transition">相机</a>
          <a href="#chip" className="hover:text-white transition">芯片</a>
          <a href="#specs" className="hover:text-white transition">规格</a>
          <a href="#buy" className="hover:text-white transition">购买</a>
        </div>
        <button className="text-xs bg-apple-blue hover:bg-blue-500 text-white px-4 py-2 rounded-full transition">
          立即购买
        </button>
      </div>
    </nav>
  );
}

// ==================== Hero Section ====================
function HeroSection() {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black noise-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in">
          全新发布
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-6 animate-fade-in-up">
          iPhone 17 Pro
        </h1>
        <p className="text-2xl md:text-4xl font-semibold text-gradient-gold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          钛金属。如此强悍。如此轻盈。
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          全新 A19 Pro 芯片，突破性能极限。4800 万像素融合式摄像头系统，重新定义专业影像。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button className="bg-apple-blue hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105">
            了解更多
          </button>
          <button className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105">
            观看影片 ›
          </button>
        </div>

        {/* iPhone Image */}
        <div className="relative mx-auto max-w-sm animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent blur-3xl opacity-60" />
          <img
            src="https://dashscope-7c2c.oss-accelerate.aliyuncs.com/7d/56/20260802/a3584b24/a457221a-717c-4ef6-bb27-e03f073c843e.png?Expires=1786273562&OSSAccessKeyId=LTAI5tPxpiCM2hjmWrFXrym1&Signature=B3K%2F%2FXbwL9lSKb8%2BoclJ8aYm2M%3D"
            alt="iPhone 17 Pro"
            className="relative w-full h-auto animate-float drop-shadow-[0_20px_60px_rgba(41,151,255,0.3)]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Price tag */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <p className="text-gray-400 text-sm">RMB 8,999 起</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ==================== Design Section ====================
function DesignSection() {
  return (
    <section id="design" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4">设计</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            钛金属之美。
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            采用航空级 5 级钛金属打造，这是 Apple 有史以来最轻的 Pro 机型。
            精致入微的工艺，成就无与伦比的质感。
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "⚡",
              title: "钛金属设计",
              desc: "航空级 5 级钛金属，强度更高，重量更轻。"
            },
            {
              icon: "🎨",
              title: "超瓷晶面板",
              desc: "新一代超瓷晶面板，抗摔性能提升 2 倍。"
            },
            {
              icon: "💧",
              title: "IP68 防水",
              desc: "在 6 米水深停留长达 30 分钟。"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="reveal glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Color options */}
        <div className="reveal text-center">
          <p className="text-gray-400 text-sm mb-6">四种精美配色</p>
          <div className="flex justify-center gap-4">
            {[
              { name: "原色钛金属", color: "linear-gradient(135deg, #8a8682, #c9c4bd)" },
              { name: "黑色钛金属", color: "linear-gradient(135deg, #1c1c1e, #3a3a3c)" },
              { name: "白色钛金属", color: "linear-gradient(135deg, #f5f5f7, #d2d2d7)" },
              { name: "沙漠钛金属", color: "linear-gradient(135deg, #c9a96e, #8a7248)" }
            ].map((c, i) => (
              <div key={i} className="group cursor-pointer">
                <div
                  className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-white group-hover:scale-110 transition-all"
                  style={{ background: c.color }}
                />
                <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== Camera Section ====================
function CameraSection() {
  return (
    <section id="camera" className="relative py-32 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4">相机</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              拍出<br />
              <span className="text-gradient-purple">专业级</span><br />
              影像。
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              全新 4800 万像素融合式摄像头，搭载第二代四合一像素传感器。
              配合先进的计算摄影技术，每一张照片都堪比专业相机。
            </p>

            <div className="space-y-4">
              {[
                { label: "主摄", value: "4800 万像素", desc: "融合式摄像头" },
                { label: "超广角", value: "4800 万像素", desc: "120° 视角" },
                { label: "长焦", value: "1200 万像素", desc: "5 倍光学变焦" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 glass rounded-2xl p-4 hover:bg-white/10 transition">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                  <p className="text-apple-blue font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
            <img
              src="https://dashscope-7c2c.oss-accelerate.aliyuncs.com/7d/89/20260802/a3584b24/72645857-b80e-4d4c-96e3-e4f169b07b75.png?Expires=1786273566&OSSAccessKeyId=LTAI5tPxpiCM2hjmWrFXrym1&Signature=jCk0eVTUzmgBbONwaMvnsuxiuMQ%3D"
              alt="Camera System"
              className="relative w-full h-auto rounded-3xl"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== Chip Section ====================
function ChipSection() {
  return (
    <section id="chip" className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4">芯片</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            A19 Pro 芯片
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            速度之快，前所未有。全新 6 核 CPU、6 核 GPU 和 16 核神经网络引擎，
            为移动设备带来前所未有的性能。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-scale relative">
            <img
              src="https://dashscope-7c2c.oss-accelerate.aliyuncs.com/7d/ca/20260802/a3584b24/41f02a3f-75b4-4e4d-88cf-ba71abe44666.png?Expires=1786273570&OSSAccessKeyId=LTAI5tPxpiCM2hjmWrFXrym1&Signature=jkW0FjTd99DTbvCB53adY4bQnDA%3D"
              alt="A19 Pro Chip"
              className="relative w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <div className="reveal-right space-y-8">
            {[
              { title: "CPU 性能", value: "25%", desc: "较 A18 Pro 提升", color: "from-blue-500 to-cyan-500" },
              { title: "GPU 性能", value: "35%", desc: "图形处理更快", color: "from-purple-500 to-pink-500" },
              { title: "神经网络引擎", value: "2x", desc: "机器学习速度翻倍", color: "from-orange-500 to-red-500" }
            ].map((item, i) => (
              <div key={i} className="glass rounded-3xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-white font-semibold text-lg">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                  <p className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.value}
                  </p>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    style={{ width: `${60 + i * 15}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== Specs Section ====================
function SpecsSection() {
  const specs = [
    { label: "显示屏", value: "6.3 英寸超视网膜 XDR" },
    { label: "芯片", value: "A19 Pro" },
    { label: "摄像头", value: "Pro 摄像头系统 (4800 万像素融合式)" },
    { label: "电池续航", value: "视频播放最长可达 29 小时" },
    { label: "存储容量", value: "256GB / 512GB / 1TB / 2TB" },
    { label: "连接方式", value: "5G、Wi-Fi 7、蓝牙 5.3、UWB" },
    { label: "防水等级", value: "IP68 (6 米深达 30 分钟)" },
    { label: "材质", value: "钛金属、超瓷晶面板" }
  ];

  return (
    <section id="specs" className="relative py-32 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4">技术规格</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            全部规格
          </h2>
        </div>

        <div className="reveal glass rounded-3xl overflow-hidden">
          {specs.map((spec, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-6 hover:bg-white/5 transition ${
                i !== specs.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="text-gray-400 text-sm md:text-base">{spec.label}</span>
              <span className="text-white font-medium text-sm md:text-base text-right">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA Section ====================
function CTASection() {
  return (
    <section id="buy" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-gradient" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center reveal">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          准备好迎接<br />
          <span className="text-gradient-blue">未来</span>了吗？
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          iPhone 17 Pro，以钛金属之姿，重新定义智能手机。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-apple-blue hover:bg-blue-500 text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 animate-pulse-glow">
            立即购买
          </button>
          <button className="border border-white/30 hover:border-white text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:scale-105">
            以旧换新 ›
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { icon: "🚚", title: "免费配送", desc: "送货上门" },
            { icon: "💳", title: "分期付款", desc: "24 期免息" },
            { icon: "🔄", title: "以旧换新", desc: "享额外折抵" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== Footer ====================
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { title: "选购及了解", links: ["Mac", "iPad", "iPhone", "Watch", "AirPods"] },
            { title: "服务", links: ["Apple Music", "Apple TV+", "Apple Arcade", "iCloud"] },
            { title: "Apple Store", links: ["查找零售店", "Genius Bar", "Today at Apple", "Apple 夏令营"] },
            { title: "关于 Apple", links: ["新闻稿", "领导团队", "工作机会", "投资者", "道德与合规"] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold text-xs mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-500 hover:text-white text-xs transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            Copyright © 2026 Apple Inc. 保留所有权利。
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition">隐私政策</a>
            <a href="#" className="hover:text-white transition">使用条款</a>
            <a href="#" className="hover:text-white transition">销售政策</a>
            <a href="#" className="hover:text-white transition">法律信息</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== Main App ====================
export default function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <DesignSection />
      <CameraSection />
      <ChipSection />
      <SpecsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
