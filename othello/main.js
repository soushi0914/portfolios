
// ゲームの状態
//--------------------------------------
// 定数
//--------------------------------------
const SIZE = 6;

const CONTINUE = null;
const WIN_BLACK = 1;   // ●
const WIN_WHITE = -1;  // ○
const DRAW_GAME = 0;

//--------------------------------------
// 盤面（0:空, 1:黒, -1:白）
//--------------------------------------
const cells = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(0)
);

let turn = 1; // 1:黒（●）, -1:白（○）
let result = CONTINUE;

// 8方向
const DIRS = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1],         [0,1],
    [1,-1], [1,0], [1,1]
];

//--------------------------------------
// 初期配置
//--------------------------------------
function init() {
    const mid1 = SIZE / 2 - 1;
    const mid2 = SIZE / 2;

    cells[mid1][mid1] = -1;
    cells[mid1][mid2] =  1;
    cells[mid2][mid1] =  1;
    cells[mid2][mid2] = -1;

    redraw();
    check();
    document.querySelector("#message").textContent = "黒（●）の番";
}

//--------------------------------------
// クリックイベント登録
//--------------------------------------
for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
        const cell = document.querySelector(`#cell_${row}_${col}`);
        cell.addEventListener("click", () => {
            if (result !== CONTINUE) return;

            const flips = getFlips(row, col, turn);
            if (cells[row][col] !== 0 || flips.length === 0) return;

            // 石を置く
            cells[row][col] = turn;
            flips.forEach(([r, c]) => cells[r][c] = turn);

            turn *= -1;
            redraw();
            check();
        });
    }
}

//--------------------------------------
// 石をひっくり返せる位置取得
//--------------------------------------
function getFlips(row, col, color) {
    const result = [];

    for (const [dr, dc] of DIRS) {
        let r = row + dr;
        let c = col + dc;
        const temp = [];

        while (
            r >= 0 && r < SIZE &&
            c >= 0 && c < SIZE &&
            cells[r][c] === -color
        ) {
            temp.push([r, c]);
            r += dr;
            c += dc;
        }

        if (
            temp.length > 0 &&
            r >= 0 && r < SIZE &&
            c >= 0 && c < SIZE &&
            cells[r][c] === color
        ) {
            result.push(...temp);
        }
    }
    return result;
}

//--------------------------------------
// 盤面描画
//--------------------------------------
function redraw() {
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            const cell = document.querySelector(`#cell_${r}_${c}`);
            cell.textContent =
                cells[r][c] === 1 ? "●" :
                cells[r][c] === -1 ? "○" : "";
        }
    }
}

//--------------------------------------
// 勝敗チェック
//--------------------------------------
function check() {
    // ★ まず勝敗判定
    if (cells.flat().every(cell => cell !== 0) || (!hasMove(1) && !hasMove(-1))) {
        result = judge();
        const message = document.querySelector("#message");
        if (result === WIN_BLACK) message.textContent = "黒（●）の勝ち！";
        else if (result === WIN_WHITE) message.textContent = "白（○）の勝ち！";
        else message.textContent = "引き分け！";
        return;
    }

    // ★ パス判定
    if (!hasMove(turn)) {
        turn *= -1;
        document.querySelector("#message").textContent =
            `${turn === 1 ? "黒（●）" : "白（○）"}の番（パス）`;
        check(); // 再チェック
        return;
    }

    // 通常の手番表示
    document.querySelector("#message").textContent =
        `${turn === 1 ? "黒（●）" : "白（○）"}の番`;
}

//--------------------------------------
// 合法手があるか
//--------------------------------------
function hasMove(color) {
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            // ★ 空きマスだけ調べる
            if (cells[r][c] !== 0) continue;

            if (getFlips(r, c, color).length > 0) return true;
        }
    }
    return false;
}

function nextTurn() {
    turn *= -1;
    check();
}

//--------------------------------------
// 勝敗判定（石数）
//--------------------------------------
function judge() {
    let black = 0, white = 0;
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            if (cells[r][c] === 1) black++;
            if (cells[r][c] === -1) white++;
        }
    }
    if (black > white) return WIN_BLACK;
    if (white > black) return WIN_WHITE;
    return DRAW_GAME;
}

//--------------------------------------
init();
