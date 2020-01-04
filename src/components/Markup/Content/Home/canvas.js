/* eslint-disable no-mixed-operators */

/* eslint-disable no-plusplus */
const HomeCanvas = (() => {
    let canvas;
    let renderer;

    let scene;
    let camera;
    let geometry;
    let material;
    // let cube;

    // const materials = [];
    // let parameters;
    // let mouseX = 0;
    // let mouseY = 0;
    // let windowHalfX = window.innerWidth / 2;
    // let windowHalfY = window.innerHeight / 2;

    // const init = () => {
    //     canvas = document.querySelector('#home_canvas');

    //     renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     renderer.setClearColor(0x000000, 0);

    //     scene = new THREE.Scene();
    //     // scene.background = new THREE.Color(0xffffff);
    //     camera =
    // new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    //     geometry = new THREE.BoxGeometry(1, 1, 1);
    //     material = new THREE.MeshBasicMaterial({ color: 0xFECA7E });
    //     cube = new THREE.Mesh(geometry, material);

    //     scene.add(cube);

    //     camera.position.z = 5;
    // };
    const onWindowResize = () => {
        // windowHalfX = window.innerWidth / 2;
        // windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // const onDocumentMouseMove = (event) => {
    //     // mouseX = event.clientX - windowHalfX;
    //     // mouseY = event.clientY - windowHalfY;
    //     mouseX = event.clientX;
    //     mouseY = event.clientY;
    // };
    // const onDocumentTouchStart = (event) => {
    //     if (event.touches.length === 1) {
    //         event.preventDefault();
    //         mouseX = event.touches[0].pageX - windowHalfX;
    //         mouseY = event.touches[0].pageY - windowHalfY;
    //     }
    // };
    // const onDocumentTouchMove = (event) => {
    //     if (event.touches.length === 1) {
    //         event.preventDefault();
    //         mouseX = event.touches[0].pageX - windowHalfX;
    //         mouseY = event.touches[0].pageY - windowHalfY;
    //     }
    // };

    const snowInit = () => {
        canvas = document.querySelector('#home_canvas');
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 1300;
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x777777, 0.0008);

        geometry = new THREE.BufferGeometry();
        const texture = new THREE.TextureLoader().load('https://i.imgur.com/Q1UmfAw.png');
        material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 15,
            map: texture,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthTest: false,
        });
        const vertices = [];

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 7000; i++) {
            const x = Math.random() * 2000 - 1000;
            const y = Math.random() * 2000 - 1000;
            const z = Math.random() * 2000 - 1000;
            vertices.push(x, y, z);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));


        const particles = new THREE.Points(geometry, material);
        particles.rotation.x = Math.random() * 6;
        particles.rotation.y = Math.random() * 6;
        particles.rotation.z = Math.random() * 6;
        scene.add(particles);

        renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        // console.log(canvas.);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setSize(canvas.width, canvas.height);
        renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.setPixelRatio(canvas.width / canvas.height);
        renderer.setClearColor(0x000000, 0);
        // document.body.appendChild(renderer.domElement);

        // document.addEventListener('mousemove', onDocumentMouseMove, false);
        // document.addEventListener('touchstart', onDocumentTouchStart, false);
        // document.addEventListener('touchmove', onDocumentTouchMove, false);
        //
        window.addEventListener('resize', onWindowResize, false);
    };

    const render = () => {
        const time = Date.now() * -0.00005;
        const timex = Date.now() * 0.00001;
        // camera.position.x += (mouseX - camera.position.x) * 0.03;
        // camera.position.y += (-mouseY - camera.position.y) * 0.03;
        camera.lookAt(scene.position);
        for (let i = 0; i < scene.children.length; i++) {
            const object = scene.children[i];
            if (object instanceof THREE.Points) {
                object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
                object.rotation.x = timex * (i < 4 ? i + 1 : -(i + 1));
                // object.rotation.z = time * (i < 4 ? i + 1 : -(i + 1));
            }
        }
        // for (let i = 0; i < materials.length; i++) {
        //     const color = parameters[i][0];
        //     const h = (360 * (color[0] + time) % 360) / 360;
        //     materials[i].color.setHSL(h, color[1], color[2]);
        // }
        renderer.render(scene, camera);
    };

    const start = () => {
        // init();
        snowInit();
        function animate() {
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            requestAnimationFrame(animate);
            // renderer.render(scene, camera);
            render();
        }
        animate();
    };

    return {
        start,
    };
})();

export default HomeCanvas;
