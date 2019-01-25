//var contractAddress="0xe483C56756bB58749CE1288A248aCeB0bB470959"; //ROPSTEN 1
//var contractAddress="0x40D31F904Af622cfd3F3C4EFCcEb06C564F89eCe"; //ROPSTEN 2
//var contractAddress="0xE0aF939d88eE2f7dACe1161cf910A8d300019D39"; //ROPSTEN 2.1
var contractAddress="0x1443B778622e66924Af7B64c3dfb1A8B700AB0E8"; //ROPSTEN 3

//-- WEB3 DETECTION --//
var web3;

window.addEventListener("load", function() {
	if (typeof web3 !== "undefined") {
        web3 = new Web3(web3.currentProvider);
        web3.version.getNetwork(function(error, result) {
            if (!error) {
                if (result == "3") {
					////////console.log("Mainnet successfully loaded!");
                } else {
                    ////////console.log("You must be on the Testnet to play SnailFarm 3!");
					web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/f423492af8504d94979d522c3fbf3794"));
					//modal2.style.display = "block";
                }
            }
        });
    } else {
        ////////console.log("Web3 library not found.");
		//modal2.style.display = "block";
        web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/f423492af8504d94979d522c3fbf3794"));
    }
});
/*
/* MODAL */
/*
// Get the modals
var claim_modal = document.getElementById("claimmodal");
var grow_modal = document.getElementById("growmodal");
var root_modal = document.getElementById("rootmodal");
var toolow_modal = document.getElementById("toolowmodal");
var pecan_modal = document.getElementById("pecanmodal");
var prelaunch_modal = document.getElementById("prelaunchmodal");

// Close modal on game info
function CloseModal() {
	claim_modal.style.display = "none";
	grow_modal.style.display = "none";
	root_modal.style.display = "none";
	toolow_modal.style.display = "none";
	pecan_modal.style.display = "none";
	prelaunch_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == claim_modal || event.target == grow_modal || event.target == root_modal || event.target == toolow_modal || event.target == pecan_modal || event.target == prelaunch_modal) {
        claim_modal.style.display = "none";
		grow_modal.style.display = "none";
		root_modal.style.display = "none";
		toolow_modal.style.display = "none";
		pecan_modal.style.display = "none";
		prelaunch_modal.style.display = "none;"
    }
}

/* PAST EVENT LOG */

var timeLaunch = 1546099245;
var launchBlock = 6974738;

var twoDaysBlock = 0;
var ranLog = false;

function checkBlock(){
	web3.eth.getBlockNumber(function (error, result){
		twoDaysBlock = result - 12000;
	});
}

checkBlock();

/* VARIABLES */

var timeNow;

var a_contractBalance;
var a_gameRound = 0;
var a_gameActive = false;
var a_nextRoundStart;
var a_downtime;
var a_roundPot;
var a_snailPot;
var a_thronePot;
var a_leader = "";
var a_leaderEgg;
var a_lastFlip;
var a_timeSinceFlip;
var a_flipBonus;
var a_lastClaim;
var a_timeSinceClaim;
var a_claimBonus;
var a_playerBalance;
var a_playerEgg = 0;
var a_snagCost = 0.002;
var a_snailLevel = [1, 2, 3, 4, 5, 6, 7, 8];
var a_snailCost = [0.01, 0.02, 0.03, 0.04, 0.04, 0.04, 0.12, 0.04];
var a_snailEgg = [1, 2, 3, 4, 5, 6, 7, 8];
var a_snailOwner = ["", "", "", "", "", "", "", ""];
var a_lordCost = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];
var a_lordOwner = ["", "", "", "", "", "", "", ""];

var m_account = "waiting for web3";


var doc_contractBalance = document.getElementById('contractbalance');
var doc_gameRound = document.getElementById('gameround');
var doc_gameActive = document.getElementById('gameactive');
var doc_roundPot = document.getElementById('roundpot');
var doc_snailPot = document.getElementById('snailpot');
var doc_thronePot = document.getElementById('thronepot');
var doc_leader = document.getElementById('leader');
var doc_leaderEgg = document.getElementById('leaderegg');
var doc_winReq = document.getElementById('winreq');
var doc_timeSinceFlip = document.getElementById('timesinceflip');
var doc_flipBonus = document.getElementById('flipbonus');
var doc_timeSinceClaim = document.getElementById('timesinceclaim');
var doc_claimBonus = document.getElementById('claimbonus');
var doc_playerBalance = document.getElementById('playerbalance');
var doc_playerEgg = document.getElementById('playeregg');
var doc_leaderboard = document.getElementById('leaderboard');

var doc_snailLevel0 = document.getElementById('snaillevel0');
var doc_snailLevel1 = document.getElementById('snaillevel1');
var doc_snailLevel2 = document.getElementById('snaillevel2');
var doc_snailLevel3 = document.getElementById('snaillevel3');
var doc_snailLevel4 = document.getElementById('snaillevel4');
var doc_snailLevel5 = document.getElementById('snaillevel5');
var doc_snailLevel6 = document.getElementById('snaillevel6');
var doc_snailLevel7 = document.getElementById('snaillevel7');

var doc_snailEgg0 = document.getElementById('snailegg0');
var doc_snailEgg1 = document.getElementById('snailegg1');
var doc_snailEgg2 = document.getElementById('snailegg2');
var doc_snailEgg3 = document.getElementById('snailegg3');
var doc_snailEgg4 = document.getElementById('snailegg4');
var doc_snailEgg5 = document.getElementById('snailegg5');
var doc_snailEgg6 = document.getElementById('snailegg6');
var doc_snailEgg7 = document.getElementById('snailegg7');

var doc_snailCost0 = document.getElementById('snailcost0');
var doc_snailCost1 = document.getElementById('snailcost1');
var doc_snailCost2 = document.getElementById('snailcost2');
var doc_snailCost3 = document.getElementById('snailcost3');
var doc_snailCost4 = document.getElementById('snailcost4');
var doc_snailCost5 = document.getElementById('snailcost5');
var doc_snailCost6 = document.getElementById('snailcost6');
var doc_snailCost7 = document.getElementById('snailcost7');

var doc_snailOwner0 = document.getElementById('snailowner0');
var doc_snailOwner1 = document.getElementById('snailowner1');
var doc_snailOwner2 = document.getElementById('snailowner2');
var doc_snailOwner3 = document.getElementById('snailowner3');
var doc_snailOwner4 = document.getElementById('snailowner4');
var doc_snailOwner5 = document.getElementById('snailowner5');
var doc_snailOwner6 = document.getElementById('snailowner6');
var doc_snailOwner7 = document.getElementById('snailowner7');

var doc_grabReward0 = document.getElementById('grabreward0');
var doc_grabReward1 = document.getElementById('grabreward1');
var doc_grabReward2 = document.getElementById('grabreward2');
var doc_grabReward3 = document.getElementById('grabreward3');
var doc_grabReward4 = document.getElementById('grabreward4');
var doc_grabReward5 = document.getElementById('grabreward5');
var doc_grabReward6 = document.getElementById('grabreward6');
var doc_grabReward7 = document.getElementById('grabreward7');

var doc_lordCost0 = document.getElementById('lordcost0');
var doc_lordCost1 = document.getElementById('lordcost1');
var doc_lordCost2 = document.getElementById('lordcost2');
var doc_lordCost3 = document.getElementById('lordcost3');
var doc_lordCost4 = document.getElementById('lordcost4');
var doc_lordCost5 = document.getElementById('lordcost5');
var doc_lordCost6 = document.getElementById('lordcost6');
var doc_lordCost7 = document.getElementById('lordcost7');

var doc_lordOwner0 = document.getElementById('lordowner0');
var doc_lordOwner1 = document.getElementById('lordowner1');
var doc_lordOwner2 = document.getElementById('lordowner2');
var doc_lordOwner3 = document.getElementById('lordowner3');
var doc_lordOwner4 = document.getElementById('lordowner4');
var doc_lordOwner5 = document.getElementById('lordowner5');
var doc_lordOwner6 = document.getElementById('lordowner6');
var doc_lordOwner7 = document.getElementById('lordowner7');

//Leaderboard Array

var d_leaderboard = [
	{ address: "0x0000000022223333444455556666777788889999", egg: 0, rank: 1 },
	{ address: "0x0000111122223333444455556666777788889999", egg: 0, rank: 2 },
	{ address: "0x0000222222223333444455556666777788889999", egg: 0, rank: 3 },
	{ address: "0x0000333322223333444455556666777788889999", egg: 0, rank: 4 },
	{ address: "0x0000444422223333444455556666777788889999", egg: 0, rank: 5 }
];	

/* UTILITIES */

//Truncates ETH value to 4 decimals
function formatEthValue(ethstr){
    return parseFloat(parseFloat(ethstr).toFixed(4));
}

//Truncates ETH value to 6 decimals
function formatEthValue2(ethstr){
	return parseFloat(parseFloat(ethstr).toFixed(6));
}

//Truncates ETH address to first 8 numbers
function formatEthAdr(adr){
	var _smallAdr = adr.substring(0, 10);
	var _stringLink = '<a href="https://etherscan.io/address/' + adr + '" target="_blank">' + _smallAdr + '</a>';
	return _stringLink;
}

//Adds spaces between integers
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

//Conversion of Date to hh:mm:ss
var datetext;

function date24() {
	d = new Date();
	datetext = d.toTimeString();
	datetext = datetext.split(' ')[0];
}	

//Get timestamp for log
function dateLog(_blockNumber) {
	d = new Date((timeLaunch + ((_blockNumber - launchBlock) * 14.5)) * 1000);
	//console.log(d);
	datetext = d.toTimeString();
	datetext = datetext.split(' ')[0];
}

//Time since last flip, converted to text
function timeSinceFlip(){
	var blocktime = Math.round((new Date()).getTime() / 1000); //current blocktime should be Unix timestamp
	a_timeSinceFlip = blocktime - a_lastFlip;
	a_flipBonus = Math.floor(a_timeSinceFlip / 60); //1% per minute
	
	downtime_hours = Math.floor(a_timeSinceFlip / 3600);
	downtime_minutes = Math.floor((a_timeSinceFlip % 3600) / 60);
	//downtime_seconds = parseFloat((a_timeSincePlayerClaim % 3600) % 60).toFixed(0);
	
	doc_timeSinceFlip.innerHTML = "";
	
	if(downtime_hours > 0){
		doc_timeSinceFlip.innerHTML = downtime_hours + " Hours ";
		if(downtime_hours == 1){
			doc_timeSinceFlip.innerHTML = downtime_hours + " Hour ";
		}
	}
	if(downtime_minutes == 1){
		doc_timeSinceFlip.innerHTML += downtime_minutes + " Minute ";
	}
	if(downtime_minutes > 1){
		doc_timeSinceFlip.innerHTML += downtime_minutes + " Minutes ";
	} 
	if(downtime_hours == 0 && downtime_minutes == 0){
		doc_timeSinceFlip.innerHTML += "A few moments ";
	}	
}
//Time since last claim, converted to text
function timeSinceClaim(){
	var blocktime = Math.round((new Date()).getTime() / 1000); //current blocktime should be Unix timestamp
	a_timeSinceClaim = blocktime - a_lastClaim;
	a_claimBonus = Math.floor(a_timeSinceClaim / 60); //1% per minute
	
	downtime_hours = Math.floor(a_timeSinceClaim / 3600);
	downtime_minutes = Math.floor((a_timeSinceClaim % 3600) / 60);
	//downtime_seconds = parseFloat((a_timeSincePlayerClaim % 3600) % 60).toFixed(0);
	
	doc_timeSinceClaim.innerHTML = "";
	
	if(downtime_hours > 0){
		doc_timeSinceClaim.innerHTML = downtime_hours + " Hours ";
		if(downtime_hours == 1){
			doc_timeSinceClaim.innerHTML = downtime_hours + " Hour ";
		}
	}
	if(downtime_minutes == 1){
		doc_timeSinceClaim.innerHTML += downtime_minutes + " Minute ";
	}
	if(downtime_minutes > 1){
		doc_timeSinceClaim.innerHTML += downtime_minutes + " Minutes ";
	} 
	if(downtime_hours == 0 && downtime_minutes == 0){
		doc_timeSinceClaim.innerHTML += "A few moments ";
	}	
}

//Downtime count
function countDowntime(){
	if(a_gameActive == false){
		var blocktime = Math.round((new Date()).getTime() / 1000); //current blocktime should be Unix timestamp
		a_downtime = a_nextRoundStart - blocktime;
		
		if(a_downtime > 0){
			downtime_hours = Math.floor(a_downtime / 3600);
			if(downtime_hours < 10) { downtime_hours = "0" + downtime_hours }
			downtime_minutes = Math.floor((a_downtime % 3600) / 60);
			if(downtime_minutes < 10) { downtime_minutes = "0" + downtime_minutes }
			downtime_seconds = parseFloat((a_downtime % 3600) % 60).toFixed(0);
			if(downtime_seconds < 10) { downtime_seconds = "0" + downtime_seconds }
				
			doc_gameActive.innerHTML = "Starts in " + downtime_hours + ":" + downtime_minutes + ":" + downtime_seconds;
		} else {
			doc_gameActive.innerHTML = "Ready to start!";
		}
	}
}

//Fill up the field with player pecans
function maxField(){
	f_pecan = a_playerPecan;
	document.getElementById('fieldPecan').value = a_playerPecan;
}

/* UPDATE */

function initUpdate(){
	mainUpdate();
	fastUpdate();
	slowUpdate();
}	

function mainUpdate(){
	updateEthAccount();
	updateContractBalance();
	updateGameRound();
	updateGameActive();
	updateNextRoundStart();
	countDowntime();
	updateSnailPot();
	updateRoundPot();
	updateThronePot();
	updateLeader();
	updateLeaderEgg();
	updateLastFlip();
	timeSinceFlip();
	updateLastClaim();
	timeSinceClaim();
	updatePlayerBalance();
	updatePlayerEgg();
	runLoop(checkSnailLevel);
	runLoop(checkSnailEgg);
	runLoop(checkSnailOwner);
	runLoop(updateSnailCost);
	runLoop(checkLordCost);
	runLoop(checkLordOwner);
	updateText();
	//runLog();
	setTimeout(mainUpdate, 4000);
}

function fastUpdate(){
	countDowntime();
	setTimeout(fastUpdate, 1000);
}

//Refreshes leaderboard
function slowUpdate(){
	
	checkLeaderEgg0();
	checkLeaderEgg1();
	checkLeaderEgg2();
	checkLeaderEgg3();
	checkLeaderEgg4();
	
	slowupdateLeaderboard();
	showLeaderboard();
	
	setTimeout(slowUpdate, 30000);
}

//Show Leaderboard
function showLeaderboard() {
	doc_leaderboard.innerHTML = "";
	for(i = 1; i < 6; i++) {
		for(j = 0; j < 5; j++) {
			if(d_leaderboard[j].rank == i) {
				doc_leaderboard.innerHTML += "#" + d_leaderboard[j].rank + " = " + formatEthAdr(d_leaderboard[j].address) + " | " + d_leaderboard[j].egg + " Eggs<br>";
			}
		}
	}
}

//Update for Leaderboard checking every address
function slowupdateLeaderboard() {	
	//Loop through Trees and store top ones to assign ranks
	var avoidNext = [0, 0, 0, 0, 0];
	for(k = 1; k < 6; k++) {
		var topEgg = -1;
		var topGuy = 0;
		for(j = 0; j < 5; j++) {
			if(avoidNext[j] != 1){
				////console.log("avoidNext[" + j + "] evaluated to != 1");
				if(d_leaderboard[j].egg > topEgg){
					topEgg = d_leaderboard[j].egg;
					topGuy = j;
				}
			}
		}
		d_leaderboard[topGuy].rank = k;
		////console.log("New rank " + k + " : " + d_leaderboard[topGuy].address);
		avoidNext[topGuy] = 1;
		////console.log("Next time, avoid indice " + topGuy);
	}	
	showLeaderboard();
}

//Ugly Leaderboard updates. Can't seem to get a loop working for these web3 calls due to delays
function checkLeaderEgg0(){
	GetPlayerEgg(d_leaderboard[0].address, function(result) {
		d_leaderboard[0].egg = result;
	});
}

function checkLeaderEgg1(){
	GetPlayerEgg(d_leaderboard[1].address, function(result) {
		d_leaderboard[1].egg = result;
	});
}

function checkLeaderEgg2(){
	GetPlayerEgg(d_leaderboard[2].address, function(result) {
		d_leaderboard[2].egg = result;
	});
}

function checkLeaderEgg3(){
	GetPlayerEgg(d_leaderboard[3].address, function(result) {
		d_leaderboard[3].egg = result;
	});
}

function checkLeaderEgg4(){
	GetPlayerEgg(d_leaderboard[4].address, function(result) {
		d_leaderboard[4].egg = result;
	});
}

//Updates all text from web3 calls
function updateText(){
	doc_contractBalance.innerHTML = a_contractBalance;
	doc_gameRound.innerHTML = a_gameRound;
	doc_snailPot.innerHTML = a_snailPot;
	doc_roundPot.innerHTML = a_roundPot;
	doc_thronePot.innerHTML = a_thronePot;
	doc_leader.innerHTML = formatEthAdr(a_leader);
	doc_leaderEgg.innerHTML = a_leaderEgg;
	doc_flipBonus.innerHTML = a_flipBonus;
	doc_claimBonus.innerHTML = a_claimBonus;
	doc_playerBalance.innerHTML = a_playerBalance;
	doc_playerEgg.innerHTML = a_playerEgg;
	doc_winReq.innerHTML = a_gameRound * 1000000;
	
	if(a_gameActive == true){
		doc_gameActive.innerHTML = "active!";
	}
	
	doc_snailLevel0.innerHTML = a_snailLevel[0];
	doc_snailLevel1.innerHTML = a_snailLevel[1];
	doc_snailLevel2.innerHTML = a_snailLevel[2];
	doc_snailLevel3.innerHTML = a_snailLevel[3];
	doc_snailLevel4.innerHTML = a_snailLevel[4];
	doc_snailLevel5.innerHTML = a_snailLevel[5];
	doc_snailLevel6.innerHTML = a_snailLevel[6];
	doc_snailLevel7.innerHTML = a_snailLevel[7];
		
	doc_snailEgg0.innerHTML = a_snailEgg[0];
	doc_snailEgg1.innerHTML = a_snailEgg[1];
	doc_snailEgg2.innerHTML = a_snailEgg[2];
	doc_snailEgg3.innerHTML = a_snailEgg[3];
	doc_snailEgg4.innerHTML = a_snailEgg[4];
	doc_snailEgg5.innerHTML = a_snailEgg[5];
	doc_snailEgg6.innerHTML = a_snailEgg[6];
	doc_snailEgg7.innerHTML = a_snailEgg[7];
	
	doc_snailCost0.innerHTML = a_snailCost[0];
	doc_snailCost1.innerHTML = a_snailCost[1];
	doc_snailCost2.innerHTML = a_snailCost[2];
	doc_snailCost3.innerHTML = a_snailCost[3];
	doc_snailCost4.innerHTML = a_snailCost[4];
	doc_snailCost5.innerHTML = a_snailCost[5];
	doc_snailCost6.innerHTML = a_snailCost[6];
	doc_snailCost7.innerHTML = a_snailCost[7];

	doc_snailOwner0.innerHTML = formatEthAdr(a_snailOwner[0]);
	doc_snailOwner1.innerHTML = formatEthAdr(a_snailOwner[1]);
	doc_snailOwner2.innerHTML = formatEthAdr(a_snailOwner[2]);
	doc_snailOwner3.innerHTML = formatEthAdr(a_snailOwner[3]);
	doc_snailOwner4.innerHTML = formatEthAdr(a_snailOwner[4]);
	doc_snailOwner5.innerHTML = formatEthAdr(a_snailOwner[5]);
	doc_snailOwner6.innerHTML = formatEthAdr(a_snailOwner[6]);
	doc_snailOwner7.innerHTML = formatEthAdr(a_snailOwner[7]);
	
	doc_grabReward0.innerHTML = a_snailEgg[0] * (a_flipBonus + 100) / 100;
	doc_grabReward1.innerHTML = a_snailEgg[1] * (a_flipBonus + 100) / 100;
	doc_grabReward2.innerHTML = a_snailEgg[2] * (a_flipBonus + 100) / 100;
	doc_grabReward3.innerHTML = a_snailEgg[3] * (a_flipBonus + 100) / 100;
	doc_grabReward4.innerHTML = a_snailEgg[4] * (a_flipBonus + 100) / 100;
	doc_grabReward5.innerHTML = a_snailEgg[5] * (a_flipBonus + 100) / 100;
	doc_grabReward6.innerHTML = a_snailEgg[6] * (a_flipBonus + 100) / 100;
	doc_grabReward7.innerHTML = a_snailEgg[7] * (a_flipBonus + 100) / 100;
	
	doc_lordCost0.innerHTML = a_lordCost[0];
	doc_lordCost1.innerHTML = a_lordCost[1];
	doc_lordCost2.innerHTML = a_lordCost[2];
	doc_lordCost3.innerHTML = a_lordCost[3];
	doc_lordCost4.innerHTML = a_lordCost[4];
	doc_lordCost5.innerHTML = a_lordCost[5];
	doc_lordCost6.innerHTML = a_lordCost[6];
	doc_lordCost7.innerHTML = a_lordCost[7];

	doc_lordOwner0.innerHTML = formatEthAdr(a_lordOwner[0]);
	doc_lordOwner1.innerHTML = formatEthAdr(a_lordOwner[1]);
	doc_lordOwner2.innerHTML = formatEthAdr(a_lordOwner[2]);
	doc_lordOwner3.innerHTML = formatEthAdr(a_lordOwner[3]);
	doc_lordOwner4.innerHTML = formatEthAdr(a_lordOwner[4]);
	doc_lordOwner5.innerHTML = formatEthAdr(a_lordOwner[5]);
	doc_lordOwner6.innerHTML = formatEthAdr(a_lordOwner[6]);
	doc_lordOwner7.innerHTML = formatEthAdr(a_lordOwner[7]);
}
/*
function updateField(){
	f_pecan = document.getElementById('fieldPecan').value;
	f_root = document.getElementById('fieldRoot').value;
	doc_tradeReward.innerHTML = a_tradeReward;
	doc_tradeReward2.innerHTML = a_tradeReward;
}

/* CALCULATIONS */
/*
function computeLastRootPlant(){
	var _now = Math.round((new Date()).getTime() / 1000);
	var _timeSinceLast = parseFloat(_now - a_lastRootPlant);
	
	var	_numhours = Math.floor(_timeSinceLast / 3600);
	var _numminutes = Math.floor((_timeSinceLast % 3600) / 60);
	var _numseconds = (_timeSinceLast % 3600) % 60;
	var _plantString = "";			
	if(_numhours > 0) {
		_plantString = _numhours + " hours and " + _numminutes + " minutes ago";
	} else if(_numminutes > 0) {
		_plantString = _numminutes + " minutes ago";
	} else {
		_plantString = "less than a minute ago";
	}
	
	return _plantString;		
}

function computeProgressBar(){
	var _state = parseFloat(a_pecanGiven / a_pecanToWin).toFixed(2);
	var _result = Math.floor(_state * 100) + '%';
	doc_progressBar.style.width = _result;
	doc_progressBar.innerHTML = _result;
}

function computePecanLeft(){
	a_pecanLeft = parseFloat(a_pecanToWin - a_pecanGiven).toFixed(0);
}

function computeWonkWonk(){
	ComputeWonkTrade(f_pecan, function(result) {
		a_tradeReward = parseFloat(web3.fromWei(result, 'ether')).toFixed(8);
	});
}

/* FAST LOCAL UPDATES */
/*
function fastupdateRootPecan(){
	timeNow = (new Date).getTime();
	//////console.log(timeNow);
	var _millisecondSinceLast = parseFloat(timeNow) - parseFloat(a_lastRootPlant * 1000);
	var _boostFactor = parseFloat((_millisecondSinceLast * 0.01) + parseFloat(1000));
	var _reward = 1000 * _boostFactor / 0.5;
	a_rootPecanForOneEther = parseFloat(_reward).toFixed(0);
	doc_rootPecanForOneEther.innerHTML = numberWithSpaces(a_rootPecanForOneEther);
	var _playerReward = parseFloat(a_rootPecanForOneEther * f_root).toFixed(0);
	doc_fieldPecanReward.innerHTML = numberWithSpaces(_playerReward);
}

function fastupdateEtherShare(){
	var _millisecondSinceLast = parseFloat(timeNow) - parseFloat(a_playerLastClaim * 1000);
	var _reward = 0.00000002 * a_playerTree * _millisecondSinceLast / 1000 / 86400;
	a_playerEtherShare = parseFloat(_reward).toFixed(10);
	doc_playerEtherShare.innerHTML = a_playerEtherShare;
}
		
function fastupdatePecanShare(){
	var _millisecondSinceLast = parseFloat(timeNow) - parseFloat(a_playerLastClaim * 1000);
	var _boostFactor = Math.floor((_millisecondSinceLast / 3600000) + parseFloat(4));
	var _reward = a_playerBoost * (_millisecondSinceLast / 1000) * a_playerTree * _boostFactor / 86400;
	a_playerPecanShare = parseFloat(_reward).toFixed(0);
	doc_playerPecanShare.innerHTML = numberWithSpaces(a_playerPecanShare);
}
		
/* WEB3 CALLS */

//Current ETH address in use
function updateEthAccount(){
	m_account = web3.eth.accounts[0];
}

//Current ETH balance in contract
function updateContractBalance(){
	web3.eth.getBalance(contractAddress, function(error, result) {
		if(!error) {
			a_contractBalance = formatEthValue(web3.fromWei(result, 'ether')); 
		}
	});
}

//Current game round
function updateGameRound(){
	round(function(result) {
		a_gameRound = result;
	});
}

//State of the game
function updateGameActive(){
	gameActive(function(result){
		if(result == true){
			a_gameActive = true;
		} else {
			a_gameActive = false;
		}
	});
}

//Next round start
function updateNextRoundStart(){
	nextRoundStart(function(result){
		a_nextRoundStart = result;
	});
}

//Current tree pot
function updateSnailPot(){
	snailPot(function(result) {
		a_snailPot = formatEthValue(web3.fromWei(result,'ether'));
	});
}

//Current roundpot
function updateRoundPot(){
	roundPot(function(result) {
		a_roundPot = formatEthValue(web3.fromWei(result,'ether'));
	});
}

//Current throne pot
function updateThronePot(){
	thronePot(function(result) {
		a_thronePot = formatEthValue(web3.fromWei(result,'ether'));
	});
}

//Current leader
function updateLeader(){
	leader(function(result) {
		a_leader = "0x" + result.substring(26, 66);
	});
}

//Current leader eggs
function updateLeaderEgg(){
	GetPlayerEgg(a_leader, function(result) {
		a_leaderEgg = result;
	});
}
		
//Last Grab action globally
function updateLastFlip(){
	lastFlip(function(result) {
		a_lastFlip = result;
	});
}

//Last Become action globally
function updateLastClaim(){
	lastLordFlip(function(result) {
		a_lastClaim = result;
	});
}

//Current player balance
function updatePlayerBalance(){
	GetPlayerBalance(m_account, function(result) {
		a_playerBalance = formatEthValue(web3.fromWei(result,'ether'));		
	});
}

//Current player egg
function updatePlayerEgg(){
	GetPlayerEgg(m_account, function(result) {
		a_playerEgg = result;		
	});
}

//Loop function for all snails and lords
function runLoop(_loop){
	for(i = 0; i < 8; i++){
		_loop(i);
	}
}

//Check snail level
function checkSnailLevel(_id){
	GetSnailLevel(_id, function(result){
		a_snailLevel[_id] = web3.toDecimal(result);
	});
}

//Check snail eggs
function checkSnailEgg(_id){
	ComputeEgg(false, _id, function(result) {
		a_snailEgg[_id] = web3.toDecimal(result);
		////console.log("a_snailCost" + _id + " = " + a_snailCost[_id]);
	});
}

//Check snail owner
function checkSnailOwner(_id){
	GetSnailOwner(_id, function(result) {
		a_snailOwner[_id] = "0x" + result.substring(26, 66);
		////console.log("a_snailCost" + _id + " = " + a_snailCost[_id]);
	});
}

//Update snail cost
function updateSnailCost(_id){
	a_snailCost[_id] = (a_snailLevel[_id] + 1) * 0.02;
}

//Check lord cost
function checkLordCost(_id){
	ComputeLordCost(_id, function(result) {
		a_lordCost[_id] = formatEthValue(web3.fromWei(result,'ether'));
	});
}

//Check lord owner
function checkLordOwner(_id){
	GetLordOwner(_id, function(result) {
		a_lordOwner[_id] = "0x" + result.substring(26, 66);
	});
}

/* WEB3 TRANSACTIONS */

//Begin Round
function webBeginRound(){
	BeginRound(function(){
	});
}

//Grab snail
function webGrabSnail(_id){
	var weitospend = web3.toWei(a_snailCost[_id],'ether');
	GrabSnail(_id, weitospend, function(){
	});
}

//Snag eggs
function webSnagEgg(_id){
	var weitospend = web3.toWei(a_snagCost,'ether');
	Snag(_id, weitospend, function(){
	});
}

//Become lord
function webBecomeLord(_id){
	var weitospend = web3.toWei(a_lordCost[_id],'ether');
	BecomeLord(_id, weitospend, function(){
	});
}

//Withdraw balance
function webWithdrawBalance(){
	WithdrawBalance(function(){
	});
}

//Pay Throne
function webPayThrone(){
	PayThrone(function(){
	});
}


/* CONTRACT ABI */

abiDefinition=[{"constant": true,"inputs": [{"name": "_flip","type": "bool"},{"name": "_id","type": "uint256"}],"name": "ComputeEgg","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "round","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_id","type": "uint256"}],"name": "Snag","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"constant": true,"inputs": [],"name": "roundPot","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "leader","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "lastFlip","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_id","type": "uint256"}],"name": "GrabSnail","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [],"name": "PayThrone","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_id","type": "uint256"}],"name": "GetSnailLevel","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_id","type": "uint256"}],"name": "BecomeLord","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"constant": true,"inputs": [{"name": "_id","type": "uint256"}],"name": "GetSnailOwner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "snailPot","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_player","type": "address"}],"name": "GetPlayerEgg","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "ComputeLordBonus","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "BeginRound","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "WithdrawBalance","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_player","type": "address"}],"name": "GetPlayerBalance","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "thronePot","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_id","type": "uint256"}],"name": "GetLordOwner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_id","type": "uint256"}],"name": "ComputeSnailCost","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_id","type": "uint256"}],"name": "GetSnailSnag","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_id","type": "uint256"}],"name": "ComputeLordCost","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "nextRoundStart","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "victoryEgg","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_id","type": "uint256"}],"name": "GetLordLevel","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "lastLordFlip","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "gameActive","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"payable": true,"stateMutability": "payable","type": "fallback"},{"anonymous": false,"inputs": [{"indexed": true,"name": "player","type": "address"},{"indexed": false,"name": "eth","type": "uint256"},{"indexed": false,"name": "round","type": "uint256"}],"name": "WonRound","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "round","type": "uint256"}],"name": "StartedRound","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "player","type": "address"},{"indexed": false,"name": "snail","type": "uint256"},{"indexed": false,"name": "eth","type": "uint256"},{"indexed": false,"name": "egg","type": "uint256"},{"indexed": false,"name": "level","type": "uint256"}],"name": "GrabbedSnail","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "player","type": "address"},{"indexed": false,"name": "snail","type": "uint256"},{"indexed": false,"name": "egg","type": "uint256"}],"name": "Snagged","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "player","type": "address"},{"indexed": false,"name": "lord","type": "uint256"},{"indexed": false,"name": "eth","type": "uint256"},{"indexed": false,"name": "egg","type": "uint256"},{"indexed": false,"name": "level","type": "uint256"}],"name": "BecameLord","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "player","type": "address"},{"indexed": false,"name": "eth","type": "uint256"}],"name": "WithdrewBalance","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "player","type": "address"},{"indexed": false,"name": "eth","type": "uint256"}],"name": "PaidThrone","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "player","type": "address"},{"indexed": false,"name": "eth","type": "uint256"}],"name": "BoostedPot","type": "event"}]

var contractAbi = web3.eth.contract(abiDefinition);
var myContract = contractAbi.at(contractAddress);

function ComputeEgg(_flip,_id,callback){
    var outputData = myContract.ComputeEgg.getData(_flip,_id);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('ComputeEgg ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function round(callback){    
    var outputData = myContract.round.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('round ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function Snag(_id,eth,callback){
    var outputData = myContract.Snag.getData(_id);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            //console.log('Snag ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function roundPot(callback){   
    var outputData = myContract.roundPot.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('roundPot ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function lastFlip(callback){
    var outputData = myContract.lastFlip.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('lastFlip ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function GrabSnail(_id,eth,callback){ 
    var outputData = myContract.GrabSnail.getData(_id);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            //console.log('GrabSnail ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function PayThrone(callback){
    var outputData = myContract.PayThrone.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('PayThrone ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function GetSnailLevel(_id,callback){
    
    
    var outputData = myContract.GetSnailLevel.getData(_id);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('GetSnailLevel ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function BecomeLord(_id,eth,callback){
    
    
    var outputData = myContract.BecomeLord.getData(_id);
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            //console.log('BecomeLord ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function GetSnailOwner(_id,callback){
    
    
    var outputData = myContract.GetSnailOwner.getData(_id);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('GetSnailOwner ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function leader(callback){  
    var outputData = myContract.leader.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('snailPot ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function snailPot(callback){ 
    var outputData = myContract.snailPot.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('snailPot ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function GetPlayerEgg(_player,callback){   
    var outputData = myContract.GetPlayerEgg.getData(_player);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('GetPlayerEgg ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function ComputeLordBonus(callback){ 
    var outputData = myContract.ComputeLordBonus.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('ComputeLordBonus ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function BeginRound(callback){  
    var outputData = myContract.BeginRound.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData, gasLimit: 1000000},
    function(error,result){
        if(!error){
            //console.log('BeginRound ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function WithdrawBalance(callback){  
    var outputData = myContract.WithdrawBalance.getData();
    var endstr=web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('WithdrawBalance ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function GetPlayerBalance(_player,callback){  
    var outputData = myContract.GetPlayerBalance.getData(_player);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('GetPlayerBalance ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function thronePot(callback){  
    var outputData = myContract.thronePot.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('thronePot ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function GetLordOwner(_id,callback){  
    var outputData = myContract.GetLordOwner.getData(_id);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('GetLordOwner ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function ComputeSnailCost(_id,callback){ 
    var outputData = myContract.ComputeSnailCost.getData(_id);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('ComputeSnailCost ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function GetSnailSnag(_id,callback){  
    var outputData = myContract.GetSnailSnag.getData(_id);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('GetSnailSnag ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function ComputeLordCost(_id,callback){
    var outputData = myContract.ComputeLordCost.getData(_id);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('ComputeLordCost ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function nextRoundStart(callback){   
    var outputData = myContract.nextRoundStart.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('nextRoundStart ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function victoryEgg(callback){  
    var outputData = myContract.victoryEgg.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('victoryEgg ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}


function GetLordLevel(_id,callback){  
    var outputData = myContract.GetLordLevel.getData(_id);
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('GetLordLevel ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function lastLordFlip(callback){  
    var outputData = myContract.lastLordFlip.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('lastLordFlip ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

function gameActive(callback){  
    var outputData = myContract.gameActive.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error,result){
        if(!error){
            //console.log('gameActive ',result);
            callback(result)
        }
        else{
            //console.log('transaction failed with ',error.message)
        }
    });
}

/* EVENT WATCH */

//Store transaction hash for each event, and check before executing result, as web3 events fire twice
var storetxhash = [];

//Check equivalency
function checkHash(txarray, txhash) {
	var i = 0;
	do {
		if(txarray[i] == txhash) {
			return 0;
		}
		i++;
	}
	while(i < txarray.length);
	//Add new tx hash
	txarray.push(txhash);
	//Remove first tx hash if there's more than 16 hashes saved
	if(txarray.length > 16) {
		txarray.shift();
	}
}

//Compute Leaderboard

function computeLeaderboard() {
	var lowest = d_leaderboard[0].egg;
	var position = 0; 
	
	//Check lowest leader
	var i = 0;
	for(i = 0; i < 5; i++) {
		if(d_leaderboard[i].egg < lowest) {
			lowest = d_leaderboard[i].egg;
			position = i;
		}
	}
	
	//Check if new player is already on leaderboard, then check if new player can replace lowest
	var notLeader = true;
	for(k = 0; k < 5; k++) {
		if(e_size.address == d_leaderboard[k].address) {
			d_leaderboard[k].address = e_size.address;
			d_leaderboard[k].egg = e_size.egg;
			notLeader = false;
		}
	}

	var newEntry = false;
	if(notLeader == true && e_size.egg > lowest) {
		d_leaderboard[position].address = e_size.address;
		d_leaderboard[position].egg = e_size.egg;
		newEntry = true;
	}
}

// Wipe Leaderboard (run this after a "won round" event on Round end

function wipeLeaderboard(){
	for(i = 0; i < 5; i++) {
		d_leaderboard[i].address = "0x0000000022223333444455556666777788889999";
		d_leaderboard[i].egg = 0;
	}
}

/* EVENTS */

var logboxscroll = document.getElementById('logboxscroll');
var eventlogdoc = document.getElementById("eventlog");

var e_size = { address: "", egg: 0 };

function runLog(){
	if(ranLog == false && twoDaysBlock > 0){
		ranLog = true;
		myContract.allEvents({ fromBlock: twoDaysBlock, toBlock: 'latest' }).get(function(error, result){
			if(!error){
				//console.log(result);
				var i = 0;				
				for(i = 0; i < result.length; i++){
					if(checkHash(storetxhash, result[i].transactionHash) != 0) {
						dateLog(result[i].blockNumber);
						if(result[i].event == "WonRound"){
							eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " WON ROUND " + result[i].args.round + "! Their reward: " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH";
							wipeLeaderboard();
						} else if(result[i].event == "StartedRound"){
							eventlogdoc.innerHTML += "<br>[~" + datetext + "] Round " + result[i].args.round + " starts!";
						} else if(result[i].event == "GrabbedSnail"){
							eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " grabs " + idSnailToName(result[i].args.snail) + " for " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH, and gets " + result[i].args.egg + " eggs";
							computeLeaderboard();
						} else if(result[i].event == "Snagged"){
							eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " snags " + result[i].args.egg + " from his snail " + idSnailToName(result[i].args.snail);
							computeLeaderboard();
						} else if(result[i].event == "BecameLord"){
							eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " becomes the lord " + idLordToName(result[i].args.lord) + "! For their " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH, they get " + result[i].args.egg + " eggs";
							computeLeaderboard();
						} else if(result[i].event == "WithdrewBalance"){
							eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " withdrew " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH to their wallet.";
						} else if(result[i].event == "PaidThrone"){
							eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " paid tribute to the SnailThrone! " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH has been sent.";
						} else if(result[i].event == "BoostedPot"){
							eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " makes a generous " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH donation to the gods.";
						}
					logboxscroll.scrollTop = logboxscroll.scrollHeight;
					}
				}
			}
			else{
				//console.log("problem!");
			}
		});
	}
}

var startedroundEvent = myContract.StartedRound();

startedroundEvent.watch(function(error, result){
    if(!error){
		//console.log(result);
		if(checkHash(storetxhash, result.transactionHash) != 0) {
			date24();
			eventlogdoc.innerHTML += "<br>[~" + datetext + "] Round " + result[i].args.round + " starts!";
			logboxscroll.scrollTop = logboxscroll.scrollHeight;
		}
	}
});

var grabbedsnailEvent = myContract.GrabbedSnail();

grabbedsnailEvent.watch(function(error, result){
    if(!error){
		//console.log(result);
		if(checkHash(storetxhash, result.transactionHash) != 0) {
			date24();
			eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " grabs " + idSnailToName(result[i].args.snail) + " for " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH, and gets " + result[i].args.egg + " eggs";
			logboxscroll.scrollTop = logboxscroll.scrollHeight;
			computeLeaderboard();
		}
	}
});

var snaggedEvent = myContract.Snagged();

snaggedEvent.watch(function(error, result){
    if(!error){
		//console.log(result);
		if(checkHash(storetxhash, result.transactionHash) != 0) {
			date24();
			eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " snags " + result[i].args.egg + " from his snail " + idSnailToName(result[i].args.snail);
			logboxscroll.scrollTop = logboxscroll.scrollHeight;
			computeLeaderboard();
		}
	}
});

var wonroundEvent = myContract.WonRound();

wonroundEvent.watch(function(error, result){
    if(!error){
		////////////console.log(result);
		if(checkHash(storetxhash, result.transactionHash) != 0) {
			date24();
			eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " WON ROUND " + result[i].args.round + "! Their reward: " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH";
			logboxscroll.scrollTop = logboxscroll.scrollHeight;
		}
	}
});

var becamelordEvent = myContract.BecameLord();

becamelordEvent.watch(function(error, result){
	if(!error){
		////////////console.log(result);
		if(checkHash(storetxhash, result.transactionHash) != 0) {
			date24();
			eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " becomes the lord " + idLordToName(result[i].args.lord) + "! For their " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH, they get " + result[i].args.egg + " eggs";
			logboxscroll.scrollTop = logboxscroll.scrollHeight;
			computeLeaderboard();
		}
	}
});

var withdrewbalanceEvent = myContract.WithdrewBalance();

withdrewbalanceEvent.watch(function(error, result){
    if(!error){
		////////////console.log(result);
		if(checkHash(storetxhash, result.transactionHash) != 0) {
			date24();
			eventlogdoc.innerHTML += "<br>[~" + datetext + "] " + formatEthAdr(result[i].args.player) + " withdrew " + formatEthValue2(web3.fromWei(result[i].args.eth,'ether')) + " ETH to their wallet.";
			logboxscroll.scrollTop = logboxscroll.scrollHeight;
		}
	}
});

var paidthroneEvent = myContract.PaidThrone();

paidthroneEvent.watch(function(error, result){
    if(!error){
		////////////console.log(result);
		if(checkHash(storetxhash, result.transactionHash) != 0) {
			date24();
			eventlogdoc.innerHTML += "<br>[" + datetext + "] " + formatEthAdr(result.args.player) + " paid tribute to the SnailThrone! " + formatEthValue2(web3.fromWei(result.args.eth,'ether')) + " ETH has been sent.";
			logboxscroll.scrollTop = logboxscroll.scrollHeight;
		}
	}
});

var boostedpotEvent = myContract.BoostedPot();

boostedpotEvent.watch(function(error, result){
    if(!error){
		////////////console.log(result);
		if(checkHash(storetxhash, result.transactionHash) != 0) {
			date24();
			eventlogdoc.innerHTML += "<br>[" + datetext + "] " + formatEthAdr(result.args.player) + " makes a generous " + formatEthValue2(web3.fromWei(result.args.eth,'ether')) + " ETH donation to the JackPot.";
			logboxscroll.scrollTop = logboxscroll.scrollHeight;
		}
	}
});

/*
const filter = { fromBlock: launchBlock, toBlock: 'latest'}; // filter for your address
const events = myContract.allEvents(filter); // get all events
//console.log(events);
*/
