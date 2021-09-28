window.watsonAssistantChatOptions = {
      integrationID: "3140ed8f-a548-4d17-ad0a-7e639a2f4f1c", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "11910c9f-27ce-4a6c-8184-a28c1d60fa58", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || 'latest') +
      "/WatsonAssistantChatEntry.js"
    document.head.appendChild(t);
  });
