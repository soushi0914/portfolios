console.log("main.js!!");

window.onload = ()=>{
	console.log("onload!!");

	// JavaScriptここから
	// Howler.jsでサウンドオブジェクトを作る処理
	const snd01 = new Howl({
		src: "./sounds/se01.mp3"
	});
	const snd02 = new Howl({
		src: "./sounds/se02.mp3"
	});
	const snd03 = new Howl({
		src: "./sounds/se03.mp3"
	});
	const snd04 = new Howl({
		src: "./sounds/se04.mp3"
	});
	const snd05 = new Howl({
		src: "./sounds/se05.mp3"
	});
	const snd06 = new Howl({
		src: "./sounds/se06.mp3"
	});
	const snd07 = new Howl({
		src: "./sounds/se07.mp3"
	});
	const snd08 = new Howl({
		src: "./sounds/se08.mp3"
	});
	const snd09 = new Howl({
		src: "./sounds/se09.mp3"
	});

	// ボタンを取得して、クリックイベントをつける処理
	const btn01 = document.querySelector("#btn01");
	console.log(btn01);// 取れてるのか確認！！
	btn01.addEventListener("click", ()=>{
		console.log("btn01が押されたよ！");
		snd01.play();// 音を鳴らす！！
	});
	const btn02 = document.querySelector("#btn02");
	console.log(btn02);// 取れてるのか確認！！
	btn02.addEventListener("click", ()=>{
		console.log("btn02が押されたよ！");
		snd02.play();// 音を鳴らす！！
	});
	const btn03 = document.querySelector("#btn03");
	console.log(btn03);// 取れてるのか確認！！
	btn03.addEventListener("click", ()=>{
		console.log("btn03が押されたよ！");
		snd03.play();// 音を鳴らす！！
	});
	const btn04 = document.querySelector("#btn04");
	console.log(btn04);// 取れてるのか確認！！
	btn04.addEventListener("click", ()=>{
		console.log("btn04が押されたよ！");
		snd04.play();// 音を鳴らす！！
	});
	const btn05 = document.querySelector("#btn05");
	console.log(btn05);// 取れてるのか確認！！
	btn05.addEventListener("click", ()=>{
		console.log("btn05が押されたよ！");
		snd05.play();// 音を鳴らす！！
	});
	const btn06 = document.querySelector("#btn06");
	console.log(btn06);// 取れてるのか確認！！
	btn06.addEventListener("click", ()=>{
		console.log("btn06が押されたよ！");
		snd06.play();// 音を鳴らす！！
	});
	const btn07 = document.querySelector("#btn07");
	console.log(btn07);// 取れてるのか確認！！
	btn07.addEventListener("click", ()=>{
		console.log("btn07が押されたよ！");
		snd07.play();// 音を鳴らす！！
	});
	const btn08 = document.querySelector("#btn08");
	console.log(btn08);// 取れてるのか確認！！
	btn08.addEventListener("click", ()=>{
		console.log("btn08が押されたよ！");
		snd08.play();// 音を鳴らす！！
	});
	const btn09 = document.querySelector("#btn09");
	console.log(btn09);// 取れてるのか確認！！
	btn09.addEventListener("click", ()=>{
		console.log("btn09が押されたよ！");
		snd09.play();// 音を鳴らす！！
	});
}

