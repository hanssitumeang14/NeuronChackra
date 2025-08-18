"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const allImages = [
      'IMG-20250408-WA0014.jpg', 'IMG-20250408-WA0015.jpg', 'IMG-20250408-WA0016.jpg', 'IMG-20250421-WA0065.jpg', 
      'Screenshot_20250327_210338.jpg', 'Screenshot_20250327_210432.jpg', 'Screenshot_20250327_210523.jpg', 
      'Screenshot_20250327_210602.jpg', 'Screenshot_20250327_210754.jpg', 'Screenshot_20250327_210837.jpg', 
      'Screenshot_20250327_210932.jpg', 'Screenshot_20250328-235131_Instagram.jpg', 'Screenshot_20250328_234318.jpg', 
      'Screenshot_20250328_234351.jpg', 'Screenshot_20250328_234559.jpg', 'Screenshot_20250328_234831.jpg', 
      'Screenshot_20250328_234852.jpg', 'Screenshot_20250328_235007.jpg', 'Screenshot_20250328_235155.jpg', 
      'Screenshot_20250328_235303.jpg', 'Screenshot_20250401-090221_Instagram.jpg', 'Screenshot_20250401_085931.jpg', 
      'Screenshot_20250401_090002.jpg', 'Screenshot_20250401_090035.jpg', 'Screenshot_20250401_090124.jpg', 
      'Screenshot_20250401_090329.jpg', 'Screenshot_20250401_090432.jpg', 'Screenshot_20250402_201129.jpg', 
      'Screenshot_20250402_201158.jpg', 'Screenshot_20250402_201243.jpg', 'Screenshot_20250402_201421.jpg', 
      'Screenshot_20250402_201504.jpg', 'Screenshot_20250402_201624.jpg', 'Screenshot_20250404-214555_Instagram.jpg', 
      'Screenshot_20250404_214414.jpg', 'Screenshot_20250404_214426.jpg', 'Screenshot_20250404_214653.jpg', 
      'Screenshot_20250404_214721.jpg', 'Screenshot_20250404_214807.jpg', 'Screenshot_20250404_214842.jpg', 
      'Screenshot_20250404_214914.jpg', 'Screenshot_20250404_214947.jpg', 'Screenshot_20250404_230341.jpg', 
      'Screenshot_20250406-153832_Instagram.jpg', 'Screenshot_20250406_153456.jpg', 'Screenshot_20250406_153534.jpg', 
      'Screenshot_20250406_153613.jpg', 'Screenshot_20250406_153749.jpg', 'Screenshot_20250406_153830.jpg', 
      'Screenshot_20250406_153846.jpg', 'Screenshot_20250406_153939.jpg', 'Screenshot_20250406_154330.jpg', 
      'Screenshot_20250406_154350.jpg', 'Screenshot_20250406_154422.jpg', 'Screenshot_20250406_154458.jpg', 
      'Screenshot_20250406_154526.jpg', 'Screenshot_20250406_155149.jpg', 'Screenshot_20250406_155208.jpg', 
      'Screenshot_20250408_211606.jpg', 'Screenshot_20250408_211722.jpg', 'Screenshot_20250408_211829.jpg', 
      'Screenshot_20250408_211845.jpg', 'Screenshot_20250412_125517.jpg', 'Screenshot_20250412_125600.jpg', 
      'Screenshot_20250412_125614.jpg', 'Screenshot_20250412_125639.jpg', 'Screenshot_20250412_125710.jpg', 
      'Screenshot_20250412_125725.jpg', 'Screenshot_20250412_125800.jpg', 'Screenshot_20250412_125918.jpg', 
      'Screenshot_20250412_125934.jpg', 'Screenshot_20250421-134011_Instagram.jpg', 'Screenshot_20250421_133842.jpg', 
      'Screenshot_20250421_134042.jpg', 'Screenshot_20250421_134106.jpg', 'Screenshot_20250421_134247.jpg', 
      'Screenshot_20250421_223518.jpg', 'Screenshot_20250421_223543.jpg', 'Screenshot_20250422_115158.jpg', 
      'Screenshot_20250422_115222.jpg', 'Screenshot_20250504_140239.jpg', 'Screenshot_20250504_140348.jpg', 
      'Screenshot_20250504_140452.jpg', 'Screenshot_20250504_140531.jpg', 'Screenshot_20250504_140735.jpg', 
      'Screenshot_20250504_140825.jpg', 'Screenshot_20250514_192241.jpg', 'Screenshot_20250514_192258.jpg', 
      'Screenshot_20250514_192447.jpg', 'Screenshot_20250514_192459.jpg', 'Screenshot_20250514_192557.jpg', 
      'Screenshot_20250514_192630.jpg', 'Screenshot_20250514_192842.jpg', 'Screenshot_20250514_192952.jpg', 
      'Screenshot_20250514_193204.jpg', 'Screenshot_20250606_205918.jpg', 'Screenshot_20250606_210015.jpg', 
      'Screenshot_20250606_210225.jpg', 'Screenshot_20250606_210241.jpg', 'Screenshot_20250606_210310.jpg', 
      'Screenshot_20250606_210350.jpg', 'Screenshot_20250606_210458.jpg', 'Screenshot_20250606_210615.jpg', 
      'Screenshot_20250606_210717.jpg', 'Screenshot_20250606_210833.jpg', 'Screenshot_20250606_210857.jpg', 
      'Screenshot_20250606_210946.jpg', 'Screenshot_20250606_211034.jpg', 'Screenshot_20250606_211056.jpg', 
      'Screenshot_20250606_211150.jpg', 'Screenshot_20250606_211207.jpg', 'Screenshot_20250606_211322.jpg', 
      'Screenshot_20250606_211439.jpg', 'Screenshot_20250608_214409.jpg', 'Screenshot_20250608_214430.jpg', 
      'Screenshot_20250626_213035.jpg', 'Screenshot_20250626_213047.jpg', 'Screenshot_20250626_213116.jpg', 
      'Screenshot_20250626_213224.jpg', 'Screenshot_20250626_213316.jpg', 'Screenshot_20250626_213340.jpg', 
      'Screenshot_20250626_213414.jpg', 'Screenshot_20250626_213546.jpg', 'Screenshot_20250626_213908.jpg', 
      'Screenshot_20250626_213920.jpg', 'Screenshot_20250626_214020.jpg', 'Screenshot_20250627_130042.jpg'
    ].filter(image => !image.endsWith('.DS_Store'));

    const shuffled = allImages.sort(() => 0.5 - Math.random());
    setImages(shuffled.slice(0, 7));
  }, []);

  return (
    <div className="scrolling-wrapper">
      <div className="scrolling-content">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <Image
              src={`/images/testimonial/${image}`}
              alt={`Testimonial ${index + 1}`}
              width={300}
              height={200}
              className="testimonial-image"
            />
          </div>
        ))}
         {images.map((image, index) => (
          <div key={index + images.length} className="image-container">
            <Image
              src={`/images/testimonial/${image}`}
              alt={`Testimonial ${index + 1}`}
              width={300}
              height={200}
              className="testimonial-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
