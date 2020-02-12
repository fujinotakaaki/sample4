
class LifeGameMap {
  constructor( name, options={ upside_down:false, flip:false, rotate:0 } ) {
    var bord;
    // life_game_map.jpから初期盤面を取得
    switch (name) {
      case 'Mix':
      bord = ["......................................................................................", "..##.#................................................................................", ".#..##.................##.............................................................", ".##....................##...............................##.######.....................", "........................................................##.######.........#....#......", "........................................................##...............##....##.....", "........................................................##.....##.........#....#......", "..........##............................................##.....##.....................", ".........#..#............##.............................##.....##.....................", "..........##.............#.....................................##.....................", ".........................#............#.................######.##.....................", "..........................#..........#.#................######.##.....................", ".....................................#.#..............................................", "......................................#...............................................", "......................................................................................", "......................................................................................", "......................................................................................", ".................................................................##...................", ".................................................................##...................", "......................................................................................", "...................................#..#.....................##...####...##............", "....................................###.....................#.#.#....#.#.#............", "...##......................................##.................#.##...#.#..............", "...##......................................##...............#.#.#....#.#.#............", ".........###................................................##...####...##............", ".........#..#.........................................................................", "...................................................................##.................", "...................................................................##.................", "......................................................................................", "......................................................................................", "......................................................................................", "................................................................#.....................", ".........#.....................................................#.#....................", "........#.#....................................................#.##...................", "........#.#..........#..........................................######................", ".........#............#..........................................#...#................", "......................#.............##...........................######...............", ".....................##............#..#.............................##.#..............", "...#..#.............................##...............................#.#..............", "..#.##.#..............................................................#...............", "...#..#...............................................................................", "...#..#...............................................................................", "..#.##.#...............##.............................................................", "...#..#................##.............................................................", "........................................................##.##.##.##.##.##.##.##.##.##.", "........................................................##.##.##.##.##.##.##.##.##.##."];
      break;

      // パルサー（成長:30、周期: 3）
      case 'Pulsar':
      bord =  [".................", ".................", ".................", ".................", ".................", ".................", ".................", "......#...#......", "......#.#.#......", "......#...#......", ".................", ".................", ".................", ".................", ".................", ".................", "................."];
      break;

      // （周期: 312）
      case '60P312':
      bord = ["................................................", "................................................", ".......................##.......................", ".......................##.......................", "................................................", "................................................", "................................................", "..........##....................................", ".........#..#............##.....................", "..........##.............#......................", ".........................#............#.........", "..........................#..........#.#........", ".....................................#.#........", "......................................#.........", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "...................................#..#.........", "....................................###.........", "...##......................................##...", "...##......................................##...", ".........###....................................", ".........#..#...................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", ".........#......................................", "........#.#.....................................", "........#.#..........#..........................", ".........#............#.........................", "......................#.............##..........", ".....................##............#..#.........", "....................................##..........", "................................................", "................................................", "................................................", ".......................##.......................", ".......................##.......................", "................................................", "................................................"];
      break;

      // （周期: 8）
      case 'Coe\'s_p8':
      bord = ["..............", "..............", ".##...#.......", ".##.##........", ".....#.#......", "......#.......", "......###..##.", "...........##.", "..............", ".............."];
      break;

      // （周期: 8）
      case 'Achim\'s_p8':
      bord = ["..............", "....#.........", "...#.#........", "...#.##.......", "....######....", ".....#...#....", ".....######...", "........##.#..", ".........#.#..", "..........#...", ".............."];
      break;

      // （周期: 144）
      case 'Achim\'s_p144':
      bord = ["................................", "................................", "..##........................##..", "..##........................##..", "....................##..........", "................#..#..#.........", "................#...##..........", "...............###..............", "................................", ".............###.###............", ".............###.##.............", ".............##..##.............", ".............##.###.............", "............###.###.............", "................................", "..............###...............", "..........##...#................", ".........#..#..#................", "..........##....................", "..##........................##..", "..##........................##..", "................................", "................................"];
      break;

      // ヘルツ振動子（周期: 8）
      case 'HertzOscillator':
      bord = ["................", "......##........", "......##........", "................", ".##...####...##.", ".#.#.#....#.#.#.", "...#.##...#.#...", ".#.#.#....#.#.#.", ".##...####...##.", "................", "........##......", "........##......", "................"];
      break;

      // 銀河（周期: 8?）
      case 'Galaxy':
      bord = ["...............", "...............", "...............", "...##.######...", "...##.######...", "...##..........", "...##.....##...", "...##.....##...", "...##.....##...", "..........##...", "...######.##...", "...######.##...", "...............", "...............", "..............."];
      break;

      // 銀河2p（周期: 8?）
      case 'Galaxyx2':
      bord = [".............................", ".............................", ".............................", "...##.######.....##.######...", "...##.######.....##.######...", "...##............##..........", "...##.....##.....##.....##...", "...##.....##.....##.....##...", "...##.....##.....##.....##...", "..........##............##...", "...######.##.....######.##...", "...######.##.....######.##...", ".............................", ".............................", "............................."];
      break;

      // 銀河2p（周期: 8?、１個逆）
      case 'Galaxyx2x':
      bord = [".............................", ".............................", ".............................", "...######.##.....##.######...", "...######.##.....##.######...", "..........##.....##..........", "...##.....##.....##.....##...", "...##.....##.....##.....##...", "...##.....##.....##.....##...", "...##...................##...", "...##.######.....######.##...", "...##.######.....######.##...", ".............................", ".............................", "............................."];
      break;

      case 'Toad_stuckers':
      bord = ["....................", "..#.................", "..#..............#..", ".#.#.............#..", "..#.............#.#.", "..#......#.......#..", "..#......##......#..", "..#......##......#..", ".#.#......#......#..", "..#.............#.#.", "..#..............#..", ".................#..", "...................."];
      break;

      // ペンタデカスロン（周期: 15）
      case 'Pentadecathlon':
      bord = ["..................", "..................", "..................", "..................", "......#....#......", ".....##....##.....", "......#....#......", "..................", "..................", "..................", ".................."];
      break;

      // パルサーx2（成長:30、周期: 3）
      case 'Pulsarx2':
      bord = ["...................................", "...................................", "...................................", "...................................", "...................................", "...................................", "...................................", "......#...#.............#...#......", "......#.#.#.............#.#.#......", "......#...#.............#...#......", "...................................", "...................................", "...................................", "...................................", "...................................", "...................................", "..................................."];
      break;

      // 時計x2（周期: 4）
      case 'Clock2':
      bord = ["......##....", "......##....", "............", "....####....", "##.#....#...", "##.#.##.#...", "...#...##.##", "...#....#.##", "....####....", "............", "....##......", "....##......"];
      break;

      // 回転花火（周期: 4）
      case 'Pinwhell':
      bord = ["..............", ".......##.....", ".......##.....", "..............", ".....####.....", ".##.#..#.#....", ".##.#.#..#....", "....#...##.##.", "....#....#.##.", ".....####.....", "..............", ".....##.......", ".....##.......", ".............."];
      break;

      // 女王蜂（有限、盤面足りない）
      case 'Queenbee':
      bord = [".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".................................#.......................................", ".................................#.#.....................................", "..................................#.#....................................", "..................................#..#...................................", "..................................#.#....................................", ".................................#.#.....................................", ".................................#.......................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", ".........................................................................", "........................................................................."];
      break;

      // 時計（周期: 2）
      case "Clock1":
      bord = ["..#.", "##..", "..##", ".#..", ];
      break;

      // グライダー銃
      default:
      // "GliderGun"
      bord = ["..............................................", ".........................#....................", ".......................#.#....................", ".............##......##............##.........", "............#...#....##............##.........", ".##........#.....#...##.......................", ".##........#...#.##....#.#....................", "...........#.....#.......#....................", "............#...#.............................", ".............##...............................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", "..............................................", ".............................................."];
      break;
    }
    // 上下反転処理
    if (options.upside_down) {
      // 特に解説なし（みたまんま）
      bord = bord.reverse()
    }
    // 左右反転処理
    if ( options.flip ) {
      // 一時記憶用の変数
      var bord_reverse = new Array;
      var row;
      // 全要素反転したら終了
      while (bord.length != 0) {
        // 上の行から取得
        row = bord.shift();
        // 一時データに反転して保存
        bord_reverse.push( row.split('').reverse().join('') );
      }
      return bord_reverse;
    }
    return bord;
  }
}
// var initial_map = new LifeGameMap( 'pulsarx2' );
// console.log( initial_map.join("<br>") );
