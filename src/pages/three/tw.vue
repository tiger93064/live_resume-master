<script>

import { ref, reactive, onMounted } from 'vue'
 
import { 
  WebGLRenderer, Scene, PerspectiveCamera, Vector3, Vector2, Raycaster,
  BoxGeometry, Mesh, MeshStandardMaterial,
  AmbientLight, PointLight
 } from 'three'
import * as THREE from 'three'
import smooth from 'to-smooth'
import taiwanGeoInfo from './taiwan_geo.json'

export default {
  name: 'Home',
  components: {
     
  
  },         
  emits: ['input', 'hover'],                                    
  setup(props, ctx){
 
    const geoInfo = ref([])
    const threeWorld = ref(null)
    const dom1 = ref(null)
    const scene = ref(null)
    const info = reactive({
      hover: '',
      selected: ''
    })

    const initWorld = () => {
      let vm = this
      let dom = threeWorld.value
      let renderer = new WebGLRenderer({
        antialias: true,  // 开启抗锯齿
        alpha: true  // 开启透明度
      })
      dom.appendChild(renderer.domElement)  // 将渲染器挂载到dom
      renderer.setSize(dom.offsetWidth , dom.offsetHeight)  // 设置渲染器大小
      renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
      let scene = new Scene()  // 实例化场景
      
      //set background color to transparent
      renderer.setClearColor(0x000000, 0)  // 设置背景颜色
      
      // 实例化相机
      let camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 5500)  	   
      camera.up = new Vector3(0, 1, 0)  // 设置相机自身方向
    

      let scale = 1000
      let area = []
      console.log(geoInfo)
      geoInfo.value.forEach((geo, i) => {

        const californiaPts = [];
     
        if(!geo.geometry) return 
        let raw = geo.geometry.coordinates.flat(Infinity)
        let rawPair = []
        raw.forEach((item, index) => {
          if(index % 2 === 0) rawPair.push([ (raw[index] - 117) * scale, (raw[index+1]-20) * scale ]);
        })
         smooth(rawPair )
        .forEach(rp => {
          californiaPts.push(new THREE.Vector2(rp[0], rp[1]));
        });
        // console.log(californiaPts)

        

        // let geometry = new THREE.ShapeGeometry( new THREE.Shape( californiaPts ) );
        let geometry = new THREE.ExtrudeGeometry( new THREE.Shape( californiaPts ), { depth: 120, bevelEnabled: true, bevelSegments: 10, steps: 5, bevelSize: 1, bevelThickness: 1 } )
        // let shape = new THREE.Shape( californiaPts );
        // shape.autoClose = true;
        // const points = shape.getPoints();
        // const geometryPoints = new THREE.BufferGeometry().setFromPoints( points );
        
        let coli = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: i === 3 ? 'rgb(36, 172, 242)' : 'rgb(245, 253, 252)', side: THREE.DoubleSide } ) );
        // let coli = new THREE.Line( geometryPoints, new THREE.LineBasicMaterial( { color: 'rgb(36, 172, 242)' } ) );
        coli.name = geo.properties.COUNTYNAME
        coli.translateZ(-500)
        coli.geometry.computeVertexNormals();
         // mesh with  color opacity
        
        // move 金門 closer to main island
        if(geo.properties.COUNTYNAME.includes('金門')){
          console.log('金門')
          coli.translateX(1.2 * scale)
        }
        // move 澎湖 closer to main island
        if(geo.properties.COUNTYNAME.includes('澎湖')){
          console.log('澎湖')
          coli.translateX(0.2 * scale)
        }
        if(geo.properties.COUNTYNAME.includes('臺東')){
          console.log('臺東')
          coli.translateX(0.01 * scale)
          coli.translateY(-0.00 * scale)
        }
        if(geo.properties.COUNTYNAME.includes('宜蘭')){
          console.log('宜蘭')
          coli.translateY(-0.02 * scale)
        }
        
       

        // ********** Scaling the mesh but not orig center ********** 
        // Calculate the center of the mesh's geometry if needed
        var boundingBox = new THREE.Box3().setFromObject(coli);
        var center = new THREE.Vector3();
        boundingBox.getCenter(center);

        // Store the original position of the mesh
        var originalPosition = coli.position.clone();

        // Move the mesh to the origin for scaling
        coli.position.sub(center);

        // Apply scaling
        var scaleFactor = ['嘉義市', '基隆市', '臺北市'].includes(geo.properties.COUNTYNAME)? 0.6 : 0.925; // Scale by 2 for example
        coli.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Move the mesh back to its original position
        coli.position.add(center);
        coli.position.add(originalPosition.clone().sub(center).multiplyScalar(scaleFactor - 1));
        // **********************************************************


        
        area.push(coli)
        scene.add(coli)
     
        
        
      });


 

     
 

      // const ambientLight = new AmbientLight('rgb(255,255,255)', 1)
      // scene.add(ambientLight)
      // const pointLight = new PointLight('rgb(255,255,255)', 0.5, 600, 0.2)
      // pointLight.position.set(200, 1000, 1000)  // 设置点光源位置 (x,y,z)
      // scene.add(pointLight)
      const light = new THREE.PointLight( 0xffffff, 2, 0, 0 );
      light.position.set(5000, 2000, 4000)  // 设置点光源位置 (x,y,z)
      scene.add(light)

      var axisHelper = new THREE.AxesHelper(1000)
      // axisHelper.position.y = -200;
      axisHelper.material.opacity = 1;
      axisHelper.material.transparent = true;
      scene.add( axisHelper );


      dom1.value = dom
      scene.value = scene
      


      // let orbitControls = new OrbitControls(camera, renderer.domElement)
      // camera look at area number 4

      
      let raycaster = new Raycaster()
      
     
      let xR, yR = 0
      renderer.domElement.addEventListener("mousemove", event => {
         
        xR = event.offsetX / renderer.domElement.offsetWidth * 2 - 1
        yR = -event.offsetY * 2 / renderer.domElement.offsetHeight + 1
       
        let mouse = new Vector2(xR, yR)
        raycaster.setFromCamera(mouse, camera)  // 配置射线发射器，传递鼠标和相机对象
        const intersection = raycaster.intersectObjects(scene.children) // 获取射线发射器捕获的模型列表，传进去场景中所以模型，穿透的会返回我们
        // console.log(intersection.find(item => item.object)?.object?.name)
        info.hover = intersection.find(item => item.object)?.object?.name
        ctx.emit('input', info)
        ctx.emit('hover', {x: event.offsetX, y: event.offsetY})

      })

      renderer.domElement.addEventListener("click", event => {
        let mouse = new Vector2(event.offsetX / renderer.domElement.offsetWidth * 2 - 1, -event.offsetY * 2 / renderer.domElement.offsetHeight + 1)

        raycaster.setFromCamera(mouse, camera)  // 配置射线发射器，传递鼠标和相机对象
        const intersection = raycaster.intersectObjects(scene.children) // 获取射线发射器捕获的模型列表，传进去场景中所以模型，穿透的会返回我们
        console.log(intersection.find(item => item.object)?.object?.name)
        info.selected = intersection.find(item => item.object)?.object?.name
        ctx.emit('input', info)
      })

      window.addEventListener('resize', domResize );

      function domResize() {
        // domResize = vm.$refs.domm.offsetWidth / 2;
        console.log(threeWorld.value.offsetWidth)

        camera.aspect = threeWorld.value.offsetWidth / threeWorld.value.offsetHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( threeWorld.value.offsetWidth, threeWorld.value.offsetHeight );

      }

      var isSet = false
      let animate = () => {
        renderer.render(scene, camera)  // 渲染器渲染场景和相机
        // box.rotation.x += 0.01;
	      // box.rotation.y += 0.01;
        requestAnimationFrame(animate);

        if(!isSet){
          isSet = true
          console.log(area[3].name)
          let targetArea = area.find(item => item.name.includes('雲林'))
          let centerP = targetArea.geometry.boundingSphere.center
          // console.log(centerP)
          camera.position.set(centerP.x + 600 , centerP.y - 800, centerP.z + 5000)
          camera.lookAt(centerP.x , centerP.y  , centerP.z)

          
        }
        else{
          let targetArea = area.find(item => item.name.includes('雲林'))
          let centerP = targetArea.geometry.boundingSphere.center
          if(xR || yR) {
            camera.position.set(centerP.x + 600 * xR  , centerP.y - 600 + 400 * yR, centerP.z + 5000)
            camera.lookAt(centerP.x , centerP.y  , centerP.z)
          }

          area.forEach(c => {
            if(info.selected === c.name){
              c.material.color.set('rgb(36, 172, 242)')
              if(c.position.z < 100) c.translateZ(Math.random() * 30)
               
            }
            else {
              c.material.color.set('rgb(245, 253, 252)') 
              if(c.position.z > 0) c.translateZ(-Math.min(Math.random() * 30, c.position.z))
            }
          
            if(c.position.z < 0) c.translateZ(Math.random() * 20)


          });
      
        }

         
      }
      animate()
    }

    onMounted(() => {
      // console.log('mounted')
      geoInfo.value = taiwanGeoInfo.features
      initWorld()
    })

    
    

   

    return { initWorld, threeWorld, info }
  }                                               //*
}
</script>

<template>
   <div ref="threeWorld" style="width: 100%; height: 24em"></div>


</template>



<style scoped>

 .div_cus2{
   background: #3EB595;
   height: 36px;
   margin: auto 0;
 }

 .trans_card{
   background: rgba(255, 255, 255, 0.7) !important;
   backdrop-filter: blur(3px) !important ;
   -webkit-backdrop-filter: blur(3px) !important ;
 }
</style>