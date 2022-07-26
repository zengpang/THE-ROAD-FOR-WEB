       var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            50, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000 
        );
        
        camera.position.set(5, 10, 10);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementsByClassName('mainShow')[0].appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(4, 4, 4);
        var materialBasic = new THREE.MeshBasicMaterial({
            color: 0xffffff, 
            wireframe: true 
        });
        var materialNormal = new THREE.MeshNormalMaterial();
        var cube = THREE.SceneUtils.createMultiMaterialObject(geometry, [
            materialBasic,
            materialNormal
        ]);
        camera.lookAt(cube.position);
        scene.add(cube);
        renderer.render(scene, camera);
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(0, 20, 20);
        spotLight.intensity = 5;
        scene.add(spotLight);
        var axes = new THREE.AxisHelper(6);
        scene.add(axes);
        renderer.render(scene, camera);