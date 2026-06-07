import React from 'react';
import { Link } from 'react-router-dom';
import policyImage from '../assets/policypage.png';

const PrivacyPolicy = () => {
  return (
    <>
      {/* Header Banner */}
      <div className="policy-header-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="policy-breadcrumb">
                <Link to="/">Home</Link>
                <span>&gt;</span>
                <span className="text-muted">Pages</span>
                <span>&gt;</span>
                <span className="text-muted">Privacy Policy</span>
              </div>
              <h1 className="policy-title">Privacy Policy</h1>
            </div>
            <div className="col-lg-6 text-lg-end d-none d-lg-block">
              <img src={policyImage} alt="Privacy Policy" className="img-fluid rounded-circle shadow-sm" style={{ maxWidth: '140px', objectFit: 'cover', height: '140px', width: '140px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="container policy-content-container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="policy-published-date">
              This Privacy policy was published on February 26th, 2022.
            </div>

            <h4 className="policy-section-heading">GDPR compliance</h4>
            <p className="policy-text">
              Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus a. <a href="#">Aliquam pharetra</a> efficitur sapien nec commodo. Vivamus auctor odio eu lorem gravida dignissim. <a href="#">Aenean commodo</a> ligula non urna congue nunc sodales ut. In in blandit malesuada velit ornare. Praesent bibendum blandit lectus, eu congue magna mollis ac. Pellentesque sed est et lorem egestas fringilla in ac risus. Mauris non lobortis sapien.
            </p>

            <h4 className="policy-section-heading">About eTrade</h4>
            <p className="policy-text">
              In dapibus, nibh sit amet pulvinar convallis, massa nunc tristique nam, egestas risus nulla at dui. Ut ut condimentum tellus, dapibus volutpat est. Integer ullamcorper iaculis blandit. Pellentesque id tempus urna. Quisque luctus cursus imperdiet. <a href="#">Pellentesque</a>.
            </p>

            <h4 className="policy-section-heading">When we collect personal data about you</h4>
            <ul className="policy-list">
              <li>Email is a crucial channel in any marketing.</li>
              <li>Curious what to say? How to say it?</li>
              <li>Whether you're kicking off a new campaign.</li>
              <li>Habitant morbi <a href="#">tristique senectus et netus</a> et malesuada fames ac turpis.</li>
            </ul>

            <h4 className="policy-section-heading">Why we collect and use personal data</h4>
            <p className="policy-text">
              Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus a. <a href="#">Aliquam pharetra</a> efficitur sapien nec commodo. Vivamus auctor odio eu lorem gravida dignissim. <a href="#">Aenean commodo</a> ligula non urna congue nunc sodales ut. In in blandit malesuada velit ornare. Praesent bibendum blandit lectus, eu congue magna mollis ac. Pellentesque sed est et lorem egestas fringilla in ac risus. Mauris non lobortis sapien.
            </p>
            <ul className="policy-list">
              <li>Nulla facilisi. Sed ullamcorper tellus at dapibus id. Suspendisse commodo sem metus.</li>
              <li>Fusce malesuada luctus tellus, sit amet pellentesque lectus imperdiet in. Aliquam id rhoncus mi.</li>
              <li>Pellentesque ornare nulla est, non blandit sed at nec nisi net. Nulla facilisi. Sed enim tellus, fauci bus.</li>
              <li>Aliquam lacus orci, lobortis non diam egestas, malesuada hendrerit justo. Praesent fringilla sagittis ex, ac molestie ipsum ullamcorper a.</li>
              <li>Vestibulum eu <a href="#">tellus ut lacus at porta vel iaculis est vel nibh</a>.</li>
            </ul>

            <h4 className="policy-section-heading">Type of personal data collected</h4>
            <p className="policy-text">
              In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus eu congue neque mollis in. Pellentesque sed est at lorem rhoncus ipsum fringilla in ac risus. Mauris non lobortis sapien.
            </p>

            <h4 className="policy-section-heading">Information we collect automatically</h4>
              <p className="policy-text">
              Etiam id eros vel neque facilisis mollis. Proin vitae non ex pellentesque, vel porta tellus. Nullam tincidunt ex tincidunt mauris. Praesent ac diam et odio elementum efficitur. Suspendisse sit amet urna vitae neque tempor pellentesque. Aenean ut dapibus urna. Pellentesque neque nulla, interdum a tincidunt <a href="#">amet</a>, pretium at eros. Mauris sodales lectus id convallis vestibulum. <a href="#">Aliquam nec sapien eget</a>. Nullam egestas ornare urna. Cras consequat, leo in congue.
            </p>

            <h4 className="policy-section-heading">The use of cookies and web beacons</h4>
            <p className="policy-text">
              We may log information using "cookies". Cookies are small data files stored on your hard drive by a website. Cookies help us make our Site and your visit better.
            </p>
            <p className="policy-text">
              We may log information using digital images called web beacons on our Site or in our emails.
            </p>
            <p className="policy-text">
              This information is used to make our Site work more efficiently, as well as to provide business and marketing information to the owners of the Site, and to gather such personal data as browser type and operating system, referring page, path through site, domain of ISP, etc. for the purposes of understanding how visitors use our Site. Cookies and similar technologies help us tailor our Site to your personal needs, as well as to detect and prevent security threats and abuse. If used alone, cookies and web beacons do not personally identify you.
            </p>

            <h4 className="policy-section-heading">How long we keep your data</h4>
            <p className="policy-text">
              We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.
            </p>
            <p className="policy-text">
              This means that we may retain your personal data for a reasonable period after your last interaction with us. When the personal data that we have collected is no longer required we will <a href="#">delete it securely</a>. We may process data for statistical purposes, but in such cases, data will be anonymized.
            </p>

            <h4 className="policy-section-heading">Your rights to your personal data</h4>
            <p className="policy-text">
              We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.
            </p>

            <h4 className="policy-section-heading">Hotjar's privacy policy</h4>
            <p className="policy-text">
              Pellentesque vestibulum convallis iaculis. Aliquam viverra sodales ultrices. Quisque sed justo ac metus consequat consectetur ac vel dolor. Maecenas lectus velit, cursus quis orci non, laoreet hendrerit mi. Nulla vitae lorem fringilla, placerat metus eu, malesuada velit. Quisque viverra risus ex. Aenean commodo vestibulum efficitur. Nullam ligula orci, aliquet ac rhoncus id, luctus vel dui. Suspendisse ipsum diam, idu imperdiet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean et orci gravida nisl. Praesent eu blandit odio. Duis idu risus in eros elit sit imperdiet lobortis in ex.
            </p>

            <h4 className="policy-section-heading">Changes to this Privacy Policy</h4>
            <p className="policy-text">
              <a href="#">Aliquam a nunc</a> efficitur, commodo magna varius. Morbi <a href="#">nunc a ipsum</a> dignissim eros. Nam sagittis scelerisque congue, amet egestas orci ligula vel mi. Vestibulum quis mauris sed lectus pretium dictum sed vitae orci. Vestibulum facilisis facilisis mauris non maximus. Nam tristique ipsum eu <a href="#">odio congue consequat a id orci</a>. Aenean id pellentesque odio, in ex eu turpis sodales egestas.
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
