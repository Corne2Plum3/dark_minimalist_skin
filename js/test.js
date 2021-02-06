function test_1() {
	async function sendAudioFile(file) {
	  const formData = new FormData();
	  formData.append('audio-file', file);
	  const response = await fetch('http://localhost:3000/audioUpload', {
	      method: 'POST',
	      data: formData
	  });
	}
	
	let jsZip = new JSZip();
	let zip_fs = new zip.fs.FS();
	
	jsZip.file(sendAudioFile("../audio/hitsounds_2/normal-hitnormal.wav"), "sound.wav");
	
	jsZip.generateAsync({type:"blob"}).then(function (content) {
		content = URL.createObjectURL(content);
		var name = "test1.zip";
		download(content, name);
	});
}

function test_2() {
	async function sendAudioFile(file) {
	  const formData = new FormData();
	  formData.append('audio-file', file);
	  const response = await fetch('http://localhost:3000/audioUpload', {
	      method: 'POST',
	      data: formData
	  });
	}
	
	function getBase64(file) {
	    var reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = function () {
	        console.log(reader.result);
	    };
	    reader.onerror = function (error) {
	    	console.log('Error: ', error);
	    };
	}
	
	let jsZip = new JSZip();
	let zip_fs = new zip.fs.FS();
	
	// loading a file and add it in a zip file
    JSZipUtils.getBinaryContent("Access-Control-Allow-Origin: https://mega.nz/file/y1NBHCrI#XDDTknG_anw5TqwKzAe0rx4eciiOaAIz6Cp-amzsBQk", function (err, data) {
      if(err) {
      throw err; // or handle the error
      }
      var zip = new JSZip();
      zip.file("normal-hitnormal.wav", data, {binary:true});
    });
	
	jsZip.generateAsync({type:"blob"}).then(function (content) {
		content = URL.createObjectURL(content);
		var name = "test1.zip";
		download(content, name);
	});
}