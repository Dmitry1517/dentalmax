<template>
    <div class="dg-shadow-map">
      <div ref="shadowHost" class="shadow-host"></div>
      
      <div v-if="showFallback" class="fallback">
        <div class="fallback-content">
          <p>Карта 2GIS</p>
          <div class="fallback-map">
            <div class="coordinates">
              <span>Координаты: {{ lat.toFixed(6) }}, {{ lon.toFixed(6) }}</span>
            </div>
          </div>
          <a :href="mapUrl" target="_blank" class="external-link">
            Открыть в 2GIS →
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DgShadowMap',
    props: {
      lat: {
        type: Number,
        default: 51.83064596708499
      },
      lon: {
        type: Number,
        default: 107.57986307144166
      },
      zoom: {
        type: Number,
        default: 16
      },
      city: {
        type: String,
        default: 'ulanude'
      },
      firmId: {
        type: String,
        default: '70000001087595702'
      }
    },
    data() {
      return {
        showFallback: false,
        mapUrl: ''
      };
    },
    mounted() {
      this.mapUrl = `https://2gis.ru/${this.city}/firm/${this.firmId}/center/${this.lon},${this.lat}/zoom/${this.zoom}`;
      this.embedMap();
    },
    methods: {
      embedMap() {
        try {
          // Создаем Shadow DOM для изоляции
          const shadowHost = this.$refs.shadowHost;
          const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
          
          // Создаем контейнер для карты
          const container = document.createElement('div');
          container.id = 'dg-container';
          container.style.width = '100%';
          container.style.height = '210px';
          container.style.border = '1px solid #a3a3a3';
          shadowRoot.appendChild(container);
          
          // Создаем HTML для виджета
          const widgetHtml = `
            <div id="dg-widget-${Date.now()}"></div>
            <script src="https://widgets.2gis.com/js/DGWidgetLoader.js" charset="utf-8"><\/script>
            <script>
              new DGWidgetLoader({
                "width": "100%",
                "height": 210,
                "borderColor": "#a3a3a3",
                "pos": {
                  "lat": ${this.lat},
                  "lon": ${this.lon},
                  "zoom": ${this.zoom}
                },
                "opt": {
                  "city": "${this.city}",
                  "hint": false
                },
                "org": [{
                  "id": "${this.firmId}"
                }]
              }, document.getElementById('dg-widget-${Date.now()}'));
            <\/script>
          `;
          
          // Вставляем HTML в Shadow DOM
          const template = document.createElement('template');
          template.innerHTML = widgetHtml;
          shadowRoot.appendChild(template.content.cloneNode(true));
          
        } catch (error) {
          console.warn('Не удалось встроить карту:', error);
          this.showFallback = true;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .dg-shadow-map {
    width: 100%;
    height: 210px;
    position: relative;
  }
  
  .shadow-host {
    width: 100%;
    height: 100%;
  }
  
  .fallback {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .fallback-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .fallback-content p {
    margin: 0 0 15px 0;
    color: #333;
    font-weight: 600;
  }
  
  .fallback-map {
    width: 300px;
    height: 120px;
    background-color: #e8f4f8;
    border: 1px solid #b3d9e6;
    border-radius: 4px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  
  .fallback-map::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    background-color: #ff4444;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 4px rgba(255, 68, 68, 0.3);
  }
  
  .coordinates {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    color: #666;
    background: rgba(255, 255, 255, 0.9);
    padding: 4px;
  }
  
  .external-link {
    display: inline-block;
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .external-link:hover {
    background-color: #45a049;
  }
  </style>