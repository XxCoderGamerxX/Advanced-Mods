          //Coder_G OPTIFINE HD Mod//
        //Don't try to steal my mod//
//I can teach you so Don't steal someone's code//
//twitter: @Coder_G//

//Update Code//
var version="1.2";
var checkForUpdate=false;
var updateWindow=false;
var newUpdate;
var updateMod; 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
 
 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL(" https://raw.githubusercontent.com/XxCoderGamerxX/Advanced-Mods/master/Coder_G%20Optifine.txt ");
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
                    clientMessage("§6Advanced Coder_G OPTIFINE has an update! " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("There aren't any updates right now");
                }
            }
            catch(err) {
                clientMessage("Update check failed ");
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                clientMessage("[ACOM] Cannot connect to the internet.");
                            }
                            else {
                                clientMessage("[ACOM]   Error: \n" + err);
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
        upd.setTitle("[ACOM] has an update!");
        upd.setMessage("[ACOM] has an update!\nDo you want to update it now?\nCurrent version: " + version + "\nNew version: " + newUpdate + "\nThis Update has a Bug fixes on button");
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
                            var modpeFile = new java.io.File(modpeFolder, "Advanced Coder_G OPTIFINE HD Mod.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                             
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
                                clientMessage("[ACOM] The OPTIFINE Mod has been downloaded and enabled, Please restart Blocklauncher Now!");
                                   
                            }
                            catch(err) {
                                clientMessage("[ACOM] Error: \n" + err);
                            }
                        }
                        catch(err) {
                            clientMessage("[ACOM] Error: \n" + err);
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
        clientMessage("[ACOM] Error: \n" + err);
    }
}

var c1 = 5000;
var c2 = 100;
function modTick() {
    c1--;
    if (c1 == 0) {
        var entitiesList = Entity.getAll();
	for (var i = 0; i < entitiesList.length; i++) {
		if (Player.isPlayer(entitiesList[i])) continue;
		Entity.remove(entitiesList[i]);
        c1 = 5000;
        counter = 1
    }
    }
    c2--;
    if (c2 == 0) {
        ModPE.setGameSpeed(20);
        c2 = 100;
        counter = 1
    }

if(checkForUpdate==false) {
        print("Checking for an update");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    checkVersion();
                }
                catch(err) {
                    clientMessage("[ACOM] Error: \n"+err);
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
                    clientMessage("[ACOM] Error: \n" + err);
                }
            }
        }));
        updateWindow=false;
    } 
 }
//END OF UPDATE CODE//

function attackHook(urself) {
    if (urself == Player.getEntity()) {
        ModPE.setGameSpeed(7);
        }
    }

savedata = false;
loadresult = false;
loaddata = false;
function newLevel(){
clientMessage(ChatColor.AQUA + "Advanced Coder_G OPTIFINE HD Mod for §4§l0.12.x");
clientMessage("§6§lVersion " + ChatColor.GREEN + "1.2 RELEASE");
clientMessage("§6§lSubscribe to " + ChatColor.DARK_AQUA + "XxCoder GamerxX");
clientMessage("§6§lReport Bugs on my Twitter " + ChatColor.AQUA + "@Coder_G");
clientMessage("§6Have Fun!");
counter = 0;
loadresult = true;
loaddata = true;
if(loadresult = true){
Block.defineBlock(2,"grass",[["dirt",0], ["grass",2], ["grass",2], ["grass",2],
["grass",2], ["grass",2]]);
Block.setDestroyTime(2,0.3);
Block.setShape(2, 0/16, 0, 0/16, 16/16, 1, 16/16);

var Z = false

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
try{
GUIButton = new android.widget.PopupWindow();
var layoutButton = new android.widget.LinearLayout(ctx);
layoutButton.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIButton.setContentView(layoutButton);
GUIButton.setWidth(50);
GUIButton.setHeight(50);
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
GUIButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 5, 2);
}
catch(e)
{
print("Zooming Failed!");
}
}
})
}
}

function leaveGame(){
savedata = true;
print("Goodbye Master!");
}
//END//
