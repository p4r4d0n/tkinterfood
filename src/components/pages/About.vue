<template>
  <div class="about-page">
    <banner-component page-title="About Us"></banner-component>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <div v-html="about"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {Carousel, Slide} from 'vue-carousel';
  import BannerComponent from '../layouts/Banner';
  import configuration from '../../api/configuration';

  export default {
    components: {
      BannerComponent,
      Carousel,
      Slide,
    },
    name: 'about-page',
    data() {
      return {
        about: `<p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">หจก. ที. เค. อินเตอร์ฟูด เป็นผู้นำในการจัดจำหน่ายบริการส่งทางด้านธุรกิจวัตถุดิบอาหารนานาชาติแบบครบวงจรของประเทศไทยครอบคลุมตั้งแต่ ธุรกิจวัตถุดิบอาหารทะเล วัตถุดิบอาหารสด วัตถุดิบอาหารแช่แข็ง ธุรกิจวัตถุดิบอาหารญี่ปุ่น วัตถุดิบอาหารจีน วัตถุดิบอาหารยุโรป และผลิตภัณฑ์สำหรับสุขภาพ รวมไปถึงเครื่องดื่มนานาชนิด</span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><br></span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><img src="http://tkinterfoodbackend.match-p.com/content/wysiwyg/59d5143e7d9f2.jpg" data-filename="http://tkinterfoodbackend.match-p.com/content/wysiwyg/59d5143e7d9f2.jpg" style="width: 50%;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><br></span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="text-indent: 36pt; font-size: 10.5pt; font-family: Arial; color: rgb(44, 62, 80); vertical-align: baseline; white-space: pre-wrap;"> </span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">เราทุ่มเทในการคัดสรรวัตถุดิบที่มีคุณภาพสูงทั่วทุกมุมโลก สู่ผู้บริโภคหลากหลายชนิดอาทิเช่น ปลาแซลมอน ปลาซาบะ ทาโกะแอฟริกา ไข่กุ้ง ปูอัด สาหร่ายยำปรุงรส วาซาบิสดและเครื่องปรุงรสอื่นๆอีกมากมาย อีกทั้งเครื่องดื่ม อาทิเช่น ไวน์ สาเก และกาแฟ</span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><br></span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><img src="http://tkinterfoodbackend.match-p.com/content/wysiwyg/59d5146fb3819.jpg" data-filename="http://tkinterfoodbackend.match-p.com/content/wysiwyg/59d5146fb3819.jpg" style="width: 50%;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><br></span></p><p style="text-align: center;"><b style="font-weight:normal;"><br></b></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">เพื่อตอบสนองความต้องการของผู้บริโภคและลูกค้ากลุ่มธุรกิจอาหาร เช่น โรงแรม ร้านอาหาร ซุปเปอร์มาร์เก็ตและผู้ค้าส่งทั่วประเทศได้อย่างหลากหลาย ด้วยทีมงานที่เชี่ยวชาญ และมากด้วยประสบการณ์ โดยมีนโยบายที่มุ่งเน้นความพึงพอใจและคำนึงถึงประโยชน์สูงสุดของพันธมิตรเป็นหลัก </span></p><p style="text-align: center;"><br></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size:15pt;font-family:Arial;color:#009933;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">ภายใต้แนวคิด "Health Food Good Life"</span><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> </span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">รวมทั้งระบบการจัดเก็บและการรักษาสินค้าที่ได้มาตรฐานระดับสากลและตระหนักถึงคุณค่าทางโภชนาการของอาหารเป็นหลักในห้องเย็นที่ได้รับมาตรฐาน International Organization for Standardization (ISO 9001:2008 ) เพื่อรองรับการจัดเก็บรักษาสินค้า โดยมีการควบคุมอุณหภูมิของสินค้าที่ -20 C° เพื่อคงสภาพความสดและรสชาติ คุณภาพและความสมบูรณ์ของสินค้า ตรงตามมาตรฐานสากล</span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><br></span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><img src="http://tkinterfoodbackend.match-p.com/content/wysiwyg/59d514527d0bf.png" data-filename="http://tkinterfoodbackend.match-p.com/content/wysiwyg/59d514527d0bf.png" style="width: 50%;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><br></span></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><br></p><p dir="ltr" style="text-align: center; line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-indent: 36pt;"><span style="font-size:10.5pt;font-family:Arial;color:#2c3e50;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">รวมทั้งยังให้ความสำคัญกับการหมุนเวียนของสินค้าอย่างต่อเนื่องเพื่อให้ผู้บริโภคมั่นใจในความสดใหม่ของสินค้าอยู่เสมอ อีกทั้งยังมีระบบการจัดส่งสินค้าทุกช่องทางการจัดจำหน่าย เพื่อให้สินค้าถึงมือลูกค้าได้อย่างรวดเร็วและมีประสิทธิภาพสูงสุด ดังนั้นจึงมั่นใจได้ว่าผลิตภัณฑ์ของห้างหุ้นส่วนจำกัด ที. เค. อินเตอร์ฟูด อยู่ภายใต้ความปลอดภัยที่ดีเลิศสู่ผู้บริโภค</span></p>`,
      };
    },
    methods: {
      configurationData() {
        configuration.get().then(res => {
          let data = res.data.configuration;
          this.about = data.about;
        });
      },
    },
    mounted() {
      this.configurationData()
    },
    created() {
      window.scrollTo(0, 0);
    },
  };
</script>

<style scoped>
  .about-page {
    padding-bottom: 20px;
  }
</style>
