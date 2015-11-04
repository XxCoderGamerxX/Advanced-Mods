//  Copyright (C) <2015>  <Coder_G>

//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.

//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.

//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>

               //MadeByCoder_G
        //Don't try to steal my work//
                    //+//
           //CODER_G optifine Mod//
//I can teach you so please don't steal codes//

//Update Code//
var version="4.1";
var checkForUpdate=false;
var updateWindow=false;
var newUpdate;
var updateMod; 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
 
 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL(" https://raw.githubusercontent.com/XxCoderGamerxX/Advanced-Mods/master/Advanced%20SPC%20MCPE%200.12.x%20Release%20version.txt ");
                var check = urls.openConnection();
                check.setRequestMethod("GET");
                check.setDoOutput(true);
                check.connect();
                check.getContentLength();
                var script = check.getInputStream();
                var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var byteCount = 0; 
                var checkedVersion;
                while((byteCount = script.read(typeb)) != -1) { 
                    checkedVersion = new java.lang.String(typeb, 0, byteCount);               
                }
                newUpdate = checkedVersion;
                if(version+"\n" != checkedVersion) {
                    clientMessage("§6A.S.P.C. Mod has an update! " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("There aren't any updates right now");
                }
            }
            catch(err) {
                clientMessage("Update check failed ");
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                clientMessage("[ASPC] Cannot connect to the internet.");
                            }
                            else {
                                clientMessage("[ASPC]   Error: \n" + err);
                            } 
            }
        }
    }
    var threadt = new java.lang.Thread(r);
    threadt.start();
}
function updateVersion() {
    try {
        var upd = new android.app.AlertDialog.Builder(ctx);
        upd.setTitle("[ASPC] has an update!");
        upd.setMessage("[ASPC] has an update!\nDo you want to update it now?\nCurrent version: " + version + "\nNew version: " + newUpdate + "\nThis current update fixed the trails delay on some devices");
        upd.setNegativeButton("Nope", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
            dialog.dismiss(); 
   }
        });
        upd.setPositiveButton("Update!", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                var ru  = new java.lang.Runnable() {
                    run: function() {
                        try {
                            var urls = new java.net.URL(" https://raw.githubusercontent.com/XxCoderGamerxX/Advanced-Mods/master/Coder_G%20Optifine.js ");
                            var check = urls.openConnection();
                            check.setRequestMethod("GET");
                            check.setDoOutput(true);
                            check.connect();
                            check.getContentLength();
                            var script = check.getInputStream();
                            var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                            var byteCount = 0;
                            while((byteCount = script.read(typeb)) != -1) { 
                                updateMod += new java.lang.String(typeb, 0, byteCount);               
                            }
                            var modpeFolder = ctx.getDir("modscripts", 0);
                            var modpeFile = new java.io.File(modpeFolder, "Advanced SPC MCPE 0.12.x Release version.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                             
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
                                clientMessage("[ASPC] The OPTIFINE Mod has been downloaded and enabled!" + ChatColor.GOLD + "Please Restart Blocklauncher now!");
                                   
                            }
                            catch(err) {
                                clientMessage("[ASPC] Error: \n" + err);
                            }
                        }
                        catch(err) {
                            clientMessage("[ASPC] Error: \n" + err);
                        }
                    }
                }
                var threadt = new java.lang.Thread(ru);
                threadt.start();
            }
        });
        var dialog = upd.create();
        dialog.show() 
    }
    catch(err) {
        clientMessage("[ASPC] Error: \n" + err);
    }
}

var Z = false

function newLevel(){
clientMessage(ChatColor.AQUA + "Advanced Single Player Commands for §4§l0.12.x");
clientMessage("§6§lVersion " + ChatColor.GREEN + "4.1 RELEASE");
clientMessage("§6§lSubscribe to " + ChatColor.DARK_AQUA + "XxCoder GamerxX");
clientMessage("§6§lReport Bugs on my Twitter " + ChatColor.AQUA + "@Coder_G");
clientMessage("§6Use §2§l/help 1");
counter = 0;

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
try{
GUIButton = new android.widget.PopupWindow();
var layoutButton = new android.widget.LinearLayout(ctx);
layoutButton.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIButton.setContentView(layoutButton);
GUIButton.setWidth(50);
GUIButton.setHeight(45);
var btnButton = new android.widget.Button(ctx);
layoutButton.addView(btnButton);
btnButton.setText("♦");
btnButton.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
if(Z==false)
{
ModPE.setFov(20);
Z = true;
}
else if(Z==true)
{
ModPE.resetFov(80);
Z = false;
}
}
}));
GUIButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
}
catch(e)
{
print("Zooming Failed!");
}
}
})
}
//END//

var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();

var vertexX=0
var vertexY=0
var vertexZ=0

var redstoneset = false;
var critset = false;
var cloudset = false;
var flameset = false;
var portalset = false;
var letterset = false;
var bubbleset = false;
var dustset = false;
var snowset  = false;
var spellset = false;
var vertexXYZ = false;
var spam = false;

Level.getAddress();
Level.getWorldDir();
Level.getWorldName();

getPlayerX();
getPlayerY();
getPlayerZ();

function procCmd(c){
var cmd = c.split(" ");
if(cmd[0] == "heal")
{
Player.setHealth(20);
}
if(cmd[0] == "heal")
{
clientMessage("§4Health §6§lRecovered")
}
if(cmd[0] == "gamemode" && cmd[1] == "0") {
Level.setGameMode(0);
}
if(cmd[0] == "gamemode" && cmd[1] == "0") {
clientMessage("§6§lGamemode has been changed to Survival!");
}
if(cmd[0] == "gamemode" && cmd[1] == "1") {
Level.setGameMode(1);
}
if(cmd[0] == "gamemode" && cmd[1] == "1") {
clientMessage("§6§lGamemode has been changed to Creative!");
}
if(cmd[0] == "redstone" && cmd[1] == "on") {
redstoneset = true;
}
if(cmd[0] == "redstone" && cmd[1] == "off") {
redstoneset = false;
}
if(cmd[0] == "crit" && cmd[1] == "on") {
critset = true;
}
if(cmd[0] == "crit" && cmd[1] == "off") {
critset = false;
}
if(cmd[0] == "cloud" && cmd[1] == "on") {
cloudset = true;
}
if(cmd[0] == "cloud" && cmd[1] == "off") {
cloudset = false;
}
if(cmd[0] == "flame" && cmd[1] == "on") {
flameset = true;
}
if(cmd[0] == "flame" && cmd[1] == "off") {
flameset = false;
}
if(cmd[0] == "portal" && cmd[1] == "on") {
portalset = true;
}
if(cmd[0] == "portal" && cmd[1] == "off") {
portalset = false;
}
if(cmd[0] == "letters" && cmd[1] == "on") {
letterset = true;
}
if(cmd[0] == "letters" && cmd[1] == "off") {
letterset = false;
}
if(cmd[0] == "bubble" && cmd[1] == "on") {
bubbleset = true;
}
if(cmd[0] == "bubble" && cmd[1] == "off") {
bubbleset = false;
}
if(cmd[0] == "dust" && cmd[1] == "on") {
dustset = true;
}
if(cmd[0] == "dust" && cmd[1] == "off") {
dustset = false;
}
if(cmd[0] == "snow" && cmd[1] == "on") {
snowset = true;
}
if(cmd[0] == "snow" && cmd[1] == "off") {
snowset = false;
}
if(cmd[0] == "spell" && cmd[1] == "on") {
spellset = true;
}
if(cmd[0] == "spell" && cmd[1] == "off") {
spellset = false;
}
if(cmd[0] == "Particles" && cmd[1] == "on") {
redstoneset = true;
critset = true;
cloudset = true;
flameset = true;
portalset = true;
letterset = true;
bubbleset = true;
dustset = true;
snowset = true;
spellset = true;
}
if(cmd[0] == "Particles" && cmd[1] == "off") {
redstoneset =false;
critset = false;
cloudset = false;
flameset = false;
portalset = false;
letterset = false;
bubbleset = false;
dustset = false;
snowset = false;
spellset = false;
}
if(cmd[0] == "xyz" && cmd[1] == "on"){
vertexXYZ = true;
}
if(cmd[0] == "xyz" && cmd[1] == "off"){
vertexXYZ = false;
}
if(cmd[0] == "spam" && cmd[1] == "on"){
spam = true;
}
if(cmd[0] == "spam" && cmd[1] == "off"){
spam = false;
}
if(cmd[0] == "god" && cmd[1] == "mode" && cmd[2] == "on"){
Entity.setHealth(Player.getEntity(),9999999);
}
if(cmd[0] == "god" && cmd[1] == "mode" && cmd[2] == "on"){
clientMessage("§6§lGod mode turned on");
}
if(cmd[0] == "god" && cmd[1] == "mode" && cmd[2] == "off"){
Entity.setHealth(Player.getEntity(),20);
}
if(cmd[0] == "god" && cmd[1] == "mode" && cmd[2] == "off"){
clientMessage("§6§lGod mode turned off");
}
if(cmd[0] == "set" && cmd[1] == "home") {
ModPE.saveData("vertexX",parseInt(Player.getX()));
            ModPE.saveData("vertexY",parseInt(Player.getY()));            ModPE.saveData("vertexZ",parseInt(Player.getZ()));
}
if(cmd[0] == "set" && cmd[1] == "home") {
clientMessage(" §6§lHome set to x: " + Math.floor(ModPE.readData("vertexX")) + ", y: " + Math.floor(ModPE.readData("vertexY")) + ", z: " + Math.floor(ModPE.readData("vertexZ")));
}
if(cmd[0] == "home")
{
Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("vertexX")) + 0, parseInt(ModPE.readData("vertexY")) + 0.7, parseInt(ModPE.readData("vertexZ")) + 0.5);
}
if(cmd[0] == "home")
{
clientMessage(" §6§lTeleported to home!")
}
if(cmd[0] == "set" && cmd[1] == "spawn") {
Level.setSpawn(getPlayerX(),getPlayerY(),getPlayerZ());
}
if(cmd[0] == "set" && cmd[1] == "spawn") {
clientMessage("§6§lNew Spawn Set!")
}
if(cmd[0] == "kill")
{
Player.setHealth(0);
}
if(cmd[0] == "kill")
{
clientMessage("§4§lYou Died!")
}
if(cmd[0] == "day")
{
Level.setTime(0);
}
if(cmd[0] == "day")
{
clientMessage("§2Time Set To §e§lDay!")
}
if(cmd[0] == "night")
{
Level.setTime(14000);
}
if(cmd[0] == "night")
{
clientMessage("§2Time Set To §9§lNight")
}
if(cmd[0] == "speed" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),1,6000,0);
}
if(cmd[0] == "speed" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),1,6000,1);
}
if(cmd[0] == "speed" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),1,6000,2);
}
if(cmd[0] == "speed" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),1,6000,3);
}
if(cmd[0] == "speed" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),1,6000,4);
}
if(cmd[0] == "speed" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),1,6000,5);
}
if(cmd[0] == "speed" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),1,6000,6);
}
if(cmd[0] == "speed" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),1,6000,7);
}
if(cmd[0] == "speed" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),1,6000,8);
}
if(cmd[0] == "speed" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),1,6000,9);
}
if(cmd[0] == "slow" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),2,6000,0);
}
if(cmd[0] == "slow" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),2,6000,1);
}
if(cmd[0] == "slow" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),2,6000,2);
}
if(cmd[0] == "slow" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),2,6000,3);
}
if(cmd[0] == "slow" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),2,6000,4);
}
if(cmd[0] == "slow" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),2,6000,5);
}
if(cmd[0] == "slow" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),2,6000,6);
}
if(cmd[0] == "slow" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),2,6000,7);
}
if(cmd[0] == "slow" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),2,6000,8);
}
if(cmd[0] == "slow" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),2,6000,9);
}
if(cmd[0] == "haste" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),3,6000,0);
}
if(cmd[0] == "haste" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),3,6000,1);
}
if(cmd[0] == "haste" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),3,6000,2);
}
if(cmd[0] == "haste" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),3,6000,3);
}
if(cmd[0] == "haste" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),3,6000,4);
}
if(cmd[0] == "haste" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),3,6000,5);
}
if(cmd[0] == "haste" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),3,6000,6);
}
if(cmd[0] == "haste" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),3,6000,7);
}
if(cmd[0] == "haste" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),3,6000,8);
}
if(cmd[0] == "haste" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),3,6000,9);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "1")
{
Entity.addEffect(getPlayerEnt(),4,6000,0);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "2")
{
Entity.addEffect(getPlayerEnt(),4,6000,1);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "3")
{
Entity.addEffect(getPlayerEnt(),4,6000,2);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "4")
{
Entity.addEffect(getPlayerEnt(),4,6000,3);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "5")
{
Entity.addEffect(getPlayerEnt(),4,6000,4);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "6")
{
Entity.addEffect(getPlayerEnt(),4,6000,5);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "7")
{
Entity.addEffect(getPlayerEnt(),4,6000,6);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "8")
{
Entity.addEffect(getPlayerEnt(),4,6000,7);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "9")
{
Entity.addEffect(getPlayerEnt(),4,6000,8);
}
if(cmd[0] == "mining" && cmd[1] == "fatigue" && cmd[2] == "10")
{
Entity.addEffect(getPlayerEnt(),4,6000,9);
}
if(cmd[0] == "strength" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),5,6000,0);
}
if(cmd[0] == "strength" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),5,6000,1);
}
if(cmd[0] == "strength" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),5,6000,2);
}
if(cmd[0] == "strength" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),5,6000,3);
}
if(cmd[0] == "strength" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),5,6000,4);
}
if(cmd[0] == "strength" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),5,6000,5);
}
if(cmd[0] == "strength" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),5,6000,6);
}
if(cmd[0] == "strength" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),5,6000,7);
}
if(cmd[0] == "strength" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),5,6000,8);
}
if(cmd[0] == "strength" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),5,6000,9);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "1")
{
Entity.addEffect(getPlayerEnt(),6,6000,0);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "2")
{
Entity.addEffect(getPlayerEnt(),6,6000,1);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "3")
{
Entity.addEffect(getPlayerEnt(),6,6000,2);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "4")
{
Entity.addEffect(getPlayerEnt(),6,6000,3);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "5")
{
Entity.addEffect(getPlayerEnt(),6,6000,4);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "6")
{
Entity.addEffect(getPlayerEnt(),6,6000,5);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "7")
{
Entity.addEffect(getPlayerEnt(),6,6000,6);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "8")
{
Entity.addEffect(getPlayerEnt(),6,6000,7);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "9")
{
Entity.addEffect(getPlayerEnt(),6,6000,8);
}
if(cmd[0] == "instant" && cmd[1] == "health" && cmd[2] == "10")
{
Entity.addEffect(getPlayerEnt(),6,6000,9);
}
if(cmd[0] == "jump" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),8,6000,0);
}
if(cmd[0] == "jump" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),8,6000,1);
}
if(cmd[0] == "jump" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),8,6000,2);
}
if(cmd[0] == "jump" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),8,6000,3);
}
if(cmd[0] == "jump" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),8,6000,4);
}
if(cmd[0] == "jump" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),8,6000,5);
}
if(cmd[0] == "jump" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),8,6000,6);
}
if(cmd[0] == "jump" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),8,6000,7);
}
if(cmd[0] == "jump" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),8,6000,8);
}
if(cmd[0] == "jump" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),8,6000,9);
}
if(cmd[0] == "nausea" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),9,6000,0);
}
if(cmd[0] == "nausea" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),9,6000,1);
}
if(cmd[0] == "nausea" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),9,6000,2);
}
if(cmd[0] == "nausea" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),9,6000,3);
}
if(cmd[0] == "nausea" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),9,6000,4);
}
if(cmd[0] == "nausea" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),9,6000,5);
}
if(cmd[0] == "nausea" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),9,6000,6);
}
if(cmd[0] == "nausea" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),9,6000,7);
}
if(cmd[0] == "nausea" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),9,6000,8);
}
if(cmd[0] == "nausea" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),9,6000,9);
}
if(cmd[0] == "regeneration" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),10,6000,0);
}
if(cmd[0] == "regeneration" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),10,6000,1);
}
if(cmd[0] == "regeneration" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),10,6000,2);
}
if(cmd[0] == "regeneration" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),10,6000,3);
}
if(cmd[0] == "regeneration" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),10,6000,4);
}
if(cmd[0] == "regeneration" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),10,6000,5);
}
if(cmd[0] == "regeneration" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),10,6000,6);
}
if(cmd[0] == "regeneration" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),10,6000,7);
}
if(cmd[0] == "regeneration" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),10,6000,8);
}
if(cmd[0] == "regeneration" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),10,6000,9);
}
if(cmd[0] == "resistance" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),11,6000,0);
}
if(cmd[0] == "resistance" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),11,6000,1);
}
if(cmd[0] == "resistance" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),11,6000,2);
}
if(cmd[0] == "resistance" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),11,6000,3);
}
if(cmd[0] == "resistance" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),11,6000,4);
}
if(cmd[0] == "resistance" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),11,6000,5);
}
if(cmd[0] == "resistance" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),11,6000,6);
}
if(cmd[0] == "resistance" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),11,6000,7);
}
if(cmd[0] == "resistance" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),11,6000,8);
}
if(cmd[0] == "resistance" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),10,6000,9);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "1")
{
Entity.addEffect(getPlayerEnt(),12,6000,0);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "2")
{
Entity.addEffect(getPlayerEnt(),12,6000,1);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "3")
{
Entity.addEffect(getPlayerEnt(),12,6000,2);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "4")
{
Entity.addEffect(getPlayerEnt(),12,6000,3);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "5")
{
Entity.addEffect(getPlayerEnt(),12,6000,4);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "6")
{
Entity.addEffect(getPlayerEnt(),12,6000,5);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "7")
{
Entity.addEffect(getPlayerEnt(),12,6000,6);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "8")
{
Entity.addEffect(getPlayerEnt(),12,6000,7);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "9")
{
Entity.addEffect(getPlayerEnt(),12,6000,8);
}
if(cmd[0] == "fire" && cmd[1] == "resistance" && cmd[2] == "10")
{
Entity.addEffect(getPlayerEnt(),10,6000,9);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "1")
{
Entity.addEffect(getPlayerEnt(),13,6000,0);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "2")
{
Entity.addEffect(getPlayerEnt(),13,6000,1);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "3")
{
Entity.addEffect(getPlayerEnt(),13,6000,2);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "4")
{
Entity.addEffect(getPlayerEnt(),13,6000,3);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "5")
{
Entity.addEffect(getPlayerEnt(),13,6000,4);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "6")
{
Entity.addEffect(getPlayerEnt(),13,6000,5);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "7")
{
Entity.addEffect(getPlayerEnt(),13,6000,6);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "8")
{
Entity.addEffect(getPlayerEnt(),13,6000,7);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "9")
{
Entity.addEffect(getPlayerEnt(),13,6000,8);
}
if(cmd[0] == "water" && cmd[1] == "breathing" && cmd[2] == "10")
{
Entity.addEffect(getPlayerEnt(),10,6000,9);
}
if(cmd[0] == "invisibility" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),14,6000,0);
}
if(cmd[0] == "invisibility" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),14,6000,1);
}
if(cmd[0] == "invisibility" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),14,6000,2);
}
if(cmd[0] == "invisibility" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),14,6000,3);
}
if(cmd[0] == "invisibility" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),14,6000,4);
}
if(cmd[0] == "invisibility" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),14,6000,5);
}
if(cmd[0] == "invisibility" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),14,6000,6);
}
if(cmd[0] == "invisibility" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),14,6000,7);
}
if(cmd[0] == "invisibility" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),14,6000,8);
}
if(cmd[0] == "invisibility" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),10,6000,9);
}
if(cmd[0] == "healthboost" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),21,6000,0);
}
if(cmd[0] == "healthboost" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),21,6000,1);
}
if(cmd[0] == "healthboost" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),21,6000,2);
}
if(cmd[0] == "healthboost" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),21,6000,3);
}
if(cmd[0] == "healthboost" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),21,6000,4);
}
if(cmd[0] == "healthboost" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),21,6000,5);
}
if(cmd[0] == "healthboost" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),21,6000,6);
}
if(cmd[0] == "healthboost" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),21,6000,7);
}
if(cmd[0] == "healthboost" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),21,6000,8);
}
if(cmd[0] == "healthboost" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),10,6000,9);
}
if(cmd[0] == "absorption" && cmd[1] == "1")
{
Entity.addEffect(getPlayerEnt(),22,6000,0);
}
if(cmd[0] == "absorption" && cmd[1] == "2")
{
Entity.addEffect(getPlayerEnt(),22,6000,1);
}
if(cmd[0] == "absorption" && cmd[1] == "3")
{
Entity.addEffect(getPlayerEnt(),22,6000,2);
}
if(cmd[0] == "absorption" && cmd[1] == "4")
{
Entity.addEffect(getPlayerEnt(),22,6000,3);
}
if(cmd[0] == "absorption" && cmd[1] == "5")
{
Entity.addEffect(getPlayerEnt(),22,6000,4);
}
if(cmd[0] == "absorption" && cmd[1] == "6")
{
Entity.addEffect(getPlayerEnt(),22,6000,5);
}
if(cmd[0] == "absorption" && cmd[1] == "7")
{
Entity.addEffect(getPlayerEnt(),22,6000,6);
}
if(cmd[0] == "absorption" && cmd[1] == "8")
{
Entity.addEffect(getPlayerEnt(),22,6000,7);
}
if(cmd[0] == "absorption" && cmd[1] == "9")
{
Entity.addEffect(getPlayerEnt(),22,6000,8);
}
if(cmd[0] == "absorption" && cmd[1] == "10")
{
Entity.addEffect(getPlayerEnt(),10,6000,9);
}
if(cmd[0] == "effects" && cmd[1] == "clear") {
Entity.removeAllEffects(getPlayerEnt());
}
if(cmd[0] == "help" && cmd[1] == "1") {
clientMessage(" §6§lhelp page §2§l1§8§l/§2§l4")
}
if(cmd[0] == "help" && cmd[1] == "1") {
clientMessage(" §6§l/gamemode 1 §3- To Change Gamemode To §2§lCreative")
}
if(cmd[0] == "help" && cmd[1] == "1") {
clientMessage(" §6§l/gamemode 0 §3- To Change Gamemode To §4§lSurvival")
}
if(cmd[0] == "help" && cmd[1] == "1") {
clientMessage(" §e§l/day §3- Time set to §e§lDay")
}
if(cmd[0] == "help" && cmd[1] == "1") {
clientMessage(" §6§l/help 2 §3- To see the next page")
}
if(cmd[0] == "help" && cmd[1] == "2") {
clientMessage(" §6§lhelp page §2§l2§8§l/§2§l3")
}
if(cmd[0] == "help" && cmd[1] == "2") {
clientMessage(" §9§l/night §3- Time set to §9§lNight")
}
if(cmd[0] == "help" && cmd[1] == "2") {
clientMessage(" §4§l/heal §3- to recover §4§lHealth")
}
if(cmd[0] == "help" && cmd[1] == "2") {
clientMessage(" §8§l/kill §3- To commit §0§lSuicide")
}
if(cmd[0] == "help" && cmd[1] == "2") {
clientMessage(" §6§l/set spawn §3- To set the §2§lworld spawn §6§lon your coordinates")
}
if(cmd[0] == "help" && cmd[1] == "2") {
clientMessage(" §6§l/help 3 §3- To see the next page")
}
if(cmd[0] == "help" && cmd[1] == "3") {
clientMessage(" §6§lhelp page §6§l3§8§l/§6§l4")
}
if(cmd[0] == "help" && cmd[1] == "3") {
clientMessage(" §6§l/set home §3- To set a home waypoint on your coordinates")
}
if(cmd[0] == "help" && cmd[1] == "3") {
clientMessage(" §6§l/home §3- To teleport to your home")
}
if(cmd[0] == "help" && cmd[1] == "3") {
clientMessage(" §6§l/xyz on/off §3 to turn on/off your coordinates info")
}
if(cmd[0] == "help" && cmd[1] == "3") {
clientMessage(" §6§l/god mode on/off §3- to toggle god mode")
}
if(cmd[0] == "help" && cmd[1] == "3") {
clientMessage(" §6§l/spam on/off §3-to toggle spam message")
}
if(cmd[0] == "help" && cmd[1] == "3") {
clientMessage(" §6§l/help 4 §3- To see the next page")
}
if(cmd[0] == "help" && cmd[1] == "4") {
clientMessage(" §6§lhelp page §4§l4§8§l/§4§l4")
}
if(cmd[0] == "help" && cmd[1] == "4") {
clientMessage(" §6§l/Particles 1/3 §3-to show particle commands")
}
if(cmd[0] == "Particles" && cmd[1] == "1") {
clientMessage(" §6§lhelp page §2§l1§8§l/§2§l3")
}
if(cmd[0] == "Particles" && cmd[1] == "1") {
clientMessage(" §6§l/redstone on/off §3- to toggle redstone particles")
}
if(cmd[0] == "Particles" && cmd[1] == "1") {
clientMessage(" §6§l/crit on/off §3- to toggle crit particles")
}
if(cmd[0] == "Particles" && cmd[1] == "1") {
clientMessage(" §6§l/cloud on/off §3- to toggle cloud particles")
}
if(cmd[0] == "Particles" && cmd[1] == "1") {
clientMessage(" §6§l/flame on/off §3- to toggle flame particles")
}
if(cmd[0] == "Particles" && cmd[1] == "1") {
clientMessage(" §6§l/Particles 2 §3- To see the next page")
}
if(cmd[0] == "Particles" && cmd[1] == "1") {
clientMessage(" §6§lhelp page §6§l2§8§l/§2§l3")
}
if(cmd[0] == "Particles" && cmd[1] == "2") {
clientMessage(" §6§l/portal on/off §3- to toggle portal particles")
}
if(cmd[0] == "Particles" && cmd[1] == "2") {
clientMessage(" §6§l/letter on/off §3- to toggle letter particles")
}
if(cmd[0] == "Particles" && cmd[1] == "2") {
clientMessage(" §6§l/bubble on/off §3- to toggle bubble particles")
}
if(cmd[0] == "Particles" && cmd[1] == "2") {
clientMessage(" §6§l/dust on/off §3- to toggle dust particles")
}
if(cmd[0] == "Particles" && cmd[1] == "2") {
clientMessage(" §6§l/Particles 3 §3- To see the next page")
}
if(cmd[0] == "Particles" && cmd[1] == "3") {
clientMessage(" §6§lhelp page §4§l3§8§l/§4§l3")
}
if(cmd[0] == "Particles" && cmd[1] == "3") {
clientMessage(" §6§l/snow on/off §3- to toggle snow particles")
}
if(cmd[0] == "Particles" && cmd[1] == "3") {
clientMessage(" §6§l/spell on/off §3- to toggle spell particles")
}
if(cmd[0] == "Particles" && cmd[1] == "3") {
clientMessage(" §6§l/Particles on/off §3- to toggle All particles on/off")
}
if(cmd[0] == "help" && cmd[1] == "4") {
clientMessage(" §6§l/effects §3- To list effect commands")
}
if(cmd[0] == "effects")
{
clientMessage(" §6/effects 1/4 §3- To show effects list from 1/4")
}
if(cmd[0] == "effects" && cmd[1] == "1") {
clientMessage(" §6/speed 1-10 §3- To get speed effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "1") {
clientMessage(" §6/slow 1-10 §3- To get slow effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "1") {
clientMessage(" §6/haste 1-10 §3- To get haste effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "1") {
clientMessage(" §6/mining fatigue 1-10 §3- To get miningfatigue effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "1") {
clientMessage(" §6/speed 1-10 §3- To get speed effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "1") {
clientMessage(" §6/strength 1-10 §3- To get strength effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "2") {
clientMessage(" §6/instant health 1-10 §3- To get instanthealth effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "2") {
clientMessage(" §6/jump 1-10 §3- To get jump effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "2") {
clientMessage(" §6/nausea 1-10 §3- To get nausea effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "2") {
clientMessage(" §6/speed 1-10 §3- To get speed effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "2") {
clientMessage(" §6/regeneration 1-10 §3- To get regeneration effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "3") {
clientMessage(" §6/resistance 1-10 §3- To get resistance effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "3") {
clientMessage(" §6/fire resistance.1-10 §3- To get fireresistance effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "3") {
clientMessage(" §6/water breathing 1-10 §3- To get waterbreathing effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "3") {
clientMessage(" §6/invisibility 1-10 §3- To get invisibility effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "4") {
clientMessage(" §6/healthboost 1-10 §3- To get healthboost effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "4") {
clientMessage(" §6/absorption 1-10 §3- To get absorption effects from 1-10")
}
if(cmd[0] == "effects" && cmd[1] == "4") {
clientMessage(" §6/effects clear §3- To clear effects")
}
if(cmd[0] == "credits")
{
clientMessage("§l@tylernomc - he helped me a lot on this project, A big Thanks to him!")
}

}

function modTick(){
if(redstoneset){
Level.addParticle(ParticleType.redstone,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,4);
}
if(critset){
Level.addParticle(ParticleType.crit,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,4);
}
if(cloudset){
Level.addParticle(ParticleType.cloud,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,9);
}
if(flameset){
Level.addParticle(ParticleType.flame,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,9);
}
if(portalset){
Level.addParticle(ParticleType.portal,getPlayerX(),getPlayerY(),getPlayerZ(),0,0,0,10);
}
if(letterset){
Level.addParticle(ParticleType.enchantmenttable,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,9);
}
if(bubbleset){
Level.addParticle(ParticleType.bubble,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,9);
}
if(dustset){
Level.addParticle(ParticleType.fallingDust,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,9);
}
if(snowset){
Level.addParticle(ParticleType.snowballpoof,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,9);
}
if(spellset){
Level.addParticle(ParticleType.spell,getPlayerX(),getPlayerY()-1.6,getPlayerZ(),0,0,0,9);
}
if(vertexXYZ){
ModPE.showTipMessage(ChatColor.AQUA + "X: " + Math.round(Player.getX()) + ChatColor.AQUA + " Y: " +
Math.round(Player.getY()) + ChatColor.AQUA + " Z: " + Math.round(Player.getZ()));
}
if(spam){
clientMessage("§4§lSPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM")
}
if(checkForUpdate==false) {
        print("Checking for an update");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    checkVersion();
                }
                catch(err) {
                    clientMessage("[ASPC] Error: \n"+err);
                }
            }
        }));
        checkForUpdate=true;
    }
    if(updateWindow) {
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    updateVersion();
                }
                catch(err) {
                    clientMessage("[ASPC] Error: \n" + err);
                }
            }
        }));
        updateWindow=false;
    } 
 }
//END OF UPDATE CODE//

function leaveGame()
{
print("Goodbye Master!");
}
