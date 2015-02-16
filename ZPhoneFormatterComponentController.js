({
    
    doInit : function(component, event, helper) {
	  if(typeof formatE164 != "undefined"){
            helper.triggerScriptLoadedEvent(component);
        }else{
            helper.loadScript(component);
        }
	},
    
    formatPhoneNumber:function(component,event,helper){
     	helper.formatPhoneNumber(component,event);
    },
    
    doneRendering:function(component,event,helper){
      	helper.setPhoneService(component,event);  
    },
    
})