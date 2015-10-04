          //Coder_G OPTIFINE HD Mod//
        //Don't try to steal my mod//
//I can teach you so Don't steal someone's code//
//twitter: @Coder_G//

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
}

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
