export var config = {
  fpsmeter: {
    anchor: "delta",
    decimals: 0,
    graph: 1,
    heat: 1,
    theme: "dark",
    left: "auto",
    right: "-120px"
  },

  images: [
    { id: "sprites", url: "images/sprites.png" },
    { id: "aliens", url: "images/aliens.png" },
    { id: "rocks", url: "images/rocks.png" },
    { id: "bullets", url: "images/bullets.png" }
  ],

  sounds: [
    {
      id: "title",
      name: "sounds/title",
      formats: ["mp3", "ogg"],
      volume: 0.4,
      loop: true
    },
    {
      id: "game",
      name: "sounds/game",
      formats: ["mp3", "ogg"],
      volume: 0.8,
      loop: true
    },
    {
      id: "shoot",
      name: "sounds/shoot",
      formats: ["mp3", "ogg"],
      volume: 0.04,
      pool: 5
    },
    {
      id: "explode",
      name: "sounds/explode",
      formats: ["mp3", "ogg"],
      volume: 0.1,
      pool: 5
    }
  ],

  stars: [
    {
      percent: 30,
      size: { min: 0.2, max: 0.8 },
      speed: { min: 1, max: 2 },
      colors: ["#111", "#111", "#811"]
    }, // 1 in 3 get a tint of red
    {
      percent: 25,
      size: { min: 0.4, max: 1.0 },
      speed: { min: 2, max: 4 },
      colors: ["#333", "#333", "#833"]
    }, // 1 in 3 get a tint of red
    {
      percent: 15,
      size: { min: 0.6, max: 1.2 },
      speed: { min: 4, max: 8 },
      colors: ["#555", "#555", "#855"]
    }, // 1 in 3 get a tint of red
    {
      percent: 15,
      size: { min: 0.8, max: 1.4 },
      speed: { min: 8, max: 16 },
      colors: ["#777"]
    },
    {
      percent: 8,
      size: { min: 1.0, max: 1.6 },
      speed: { min: 16, max: 32 },
      colors: ["#999"]
    },
    {
      percent: 4,
      size: { min: 1.2, max: 1.8 },
      speed: { min: 32, max: 64 },
      colors: ["#BBB"]
    },
    {
      percent: 2,
      size: { min: 1.4, max: 2.0 },
      speed: { min: 64, max: 128 },
      colors: ["#DDD"]
    },
    {
      percent: 1,
      size: { min: 1.6, max: 2.2 },
      speed: { min: 128, max: 256 },
      colors: ["#FFF"]
    }
  ],

  sprites: {
    player: {
      fps: 30,
      frames: [
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 134, y: 1, w: 32, h: 16 },
        { x: 134, y: 1, w: 32, h: 16 },
        { x: 134, y: 1, w: 32, h: 16 },
        { x: 167, y: 1, w: 32, h: 16 },
        { x: 167, y: 1, w: 32, h: 16 },
        { x: 200, y: 1, w: 32, h: 16 },
        { x: 200, y: 1, w: 32, h: 16 },
        { x: 233, y: 1, w: 32, h: 16 },
        { x: 233, y: 1, w: 32, h: 16 },
        { x: 200, y: 1, w: 32, h: 16 },
        { x: 200, y: 1, w: 32, h: 16 },
        { x: 167, y: 1, w: 32, h: 16 },
        { x: 167, y: 1, w: 32, h: 16 },
        { x: 134, y: 1, w: 32, h: 16 },
        { x: 134, y: 1, w: 32, h: 16 },
        { x: 134, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 },
        { x: 101, y: 1, w: 32, h: 16 }
      ]
    },

    thrust: {
      fps: 20,
      frames: [
        { x: 134, y: 18, w: 32, h: 32 },
        { x: 167, y: 18, w: 32, h: 32 },
        { x: 200, y: 18, w: 32, h: 32 },
        { x: 233, y: 18, w: 32, h: 32 },
        { x: 233, y: 18, w: 32, h: 32 },
        { x: 200, y: 18, w: 32, h: 32 },
        { x: 167, y: 18, w: 32, h: 32 },
        { x: 134, y: 18, w: 32, h: 32 }
      ]
    },

    alien1: {
      fps: 20,
      frames: [
        { x: 0 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 1 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 2 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 3 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 4 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 5 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 6 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 7 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 8 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 9 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 10 * 17 + 1, y: 1, w: 16, h: 16 },
        { x: 11 * 17 + 1, y: 1, w: 16, h: 16 }
      ]
    },

    alien2: {
      fps: 20,
      frames: [
        { x: 0 * 34 + 1, y: 32 + 1, w: 32, h: 32 },
        { x: 1 * 34 + 1, y: 32 + 1, w: 32, h: 32 },
        { x: 2 * 34 + 1, y: 32 + 1, w: 32, h: 32 },
        { x: 3 * 34 + 1, y: 32 + 1, w: 32, h: 32 }
      ]
    },

    alien3: {
      fps: 20,
      frames: [
        { x: 0 * 34 + 1, y: 64 + 1, w: 32, h: 32 },
        { x: 1 * 34 + 1, y: 64 + 1, w: 32, h: 32 },
        { x: 2 * 34 + 1, y: 64 + 1, w: 32, h: 32 },
        { x: 3 * 34 + 1, y: 64 + 1, w: 32, h: 32 }
      ]
    },

    explosion: {
      fps: 15,
      frames: [
        { x: 247, y: 302, w: 18, h: 18 },
        { x: 217, y: 296, w: 28, h: 28 },
        { x: 182, y: 294, w: 32, h: 32 },
        { x: 146, y: 294, w: 32, h: 32 },
        { x: 109, y: 294, w: 32, h: 32 },
        { x: 72, y: 294, w: 32, h: 32 }
      ]
    },

    bullet1: {
      fps: 10,
      frames: [
        { x: 0 * 14, y: 1, w: 14, h: 12 },
        { x: 1 * 14, y: 1, w: 14, h: 12 },
        { x: 2 * 14, y: 1, w: 14, h: 12 },
        { x: 3 * 14, y: 1, w: 14, h: 12 },
        { x: 4 * 14, y: 1, w: 14, h: 12 },
        { x: 5 * 14, y: 1, w: 14, h: 12 }
      ]
    },

    bullet2: {
      fps: 10,
      frames: [
        { x: 0 * 14, y: 14 + 1, w: 14, h: 12 },
        { x: 1 * 14, y: 14 + 1, w: 14, h: 12 },
        { x: 2 * 14, y: 14 + 1, w: 14, h: 12 },
        { x: 3 * 14, y: 14 + 1, w: 14, h: 12 },
        { x: 4 * 14, y: 14 + 1, w: 14, h: 12 },
        { x: 5 * 14, y: 14 + 1, w: 14, h: 12 }
      ]
    }
  }
};
