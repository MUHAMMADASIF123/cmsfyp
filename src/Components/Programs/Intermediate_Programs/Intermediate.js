import React from 'react';
import './Intermediate.css';
function Intermediate() {
  return (
    <div>
      {/* <div>
        <input
          type='text'
          id='header-search'
          placeholder='Search blog posts'
          name='s'
        />
        <button type='submit'>Search</button>

        <div>
          <a
            className='nav-link active item'
            href='/BechelorPrograms'
          >
            Bachelor in Science (BS Hons Programs)
          </a>
          <a
            className='nav-link active item'
            href='/PostGraduatePrograms'
          >
            Post-Graduate Programs
          </a>
        </div>
      </div> */}
      <div className='d-flex justify-content-center p-5 '>
        <div className='shadow p-5 rounded-top ms-5 me-5 fsc_engg align-baseline'>
          <h1> InterMediate Programs </h1>

          <h2> F.Sc (Pre-Engineering) </h2>
          <h2>Introduction</h2>
          <p className='para'>
            FSc Pre- Engineering programme is one of the most
            credible programs for students to chieve bright
            careers in multiple fields of engineering. This
            programme serves as a gateway to prepare students to
            pursue their bachelor’s degrees in top universities.
          </p>
          <ul>
            <li>
              <h4> Subjects : </h4>
            </li>
            <li> Mathematics </li>
            <li> Physics </li>
            <li> Chemistry </li>
            <li> Urdu </li>
            <li> English </li>
            <li> Pak Study </li>
            <li> Islamic Studies </li>
          </ul>
        </div>
        <div className='shadow p-5 rounded-top ms-5 me-5'>
          <h2> F.Sc (Pre-Medical) </h2>
          <h2>Introduction</h2>
          <p>
            FSc Pre-Medical programme aims to deliver diverse
            knowledge and education related to medical and other
            related fields. After completing this programme
            successfully, students can further pursue their
            careers in the field of medical and other health
            sciences.
          </p>
          <ul>
            <li>
              <h4> Subjects : </h4>
            </li>
            <li> Biology </li>
            <li> Physics </li>
            <li> Chemistry </li>
            <li> Urdu </li>
            <li> English </li>
            <li> Pak Study </li>
            <li> Islamic Studies </li>
          </ul>
        </div>
      </div>
      <div className='d-flex  justify-content-center p-5'>
        <div className='shadow p-5 w-100 rounded-top ms-5 me-5 '>
          <h2> ICS (Information Computer Science) </h2>
          <ul>
            <li>
              <h4> Subjects : </h4>
            </li>
            <li> Mathematics / Economics </li>
            <li> Physics / Statistics </li>
            <li> Computer </li>
            <li> Urdu </li>
            <li> English </li>
            <li> Pak Study </li>
            <li> Islamic Studies </li>
          </ul>
        </div>
        <div className='shadow p-5 w-100 rounded-top border-5 bg-warning ms-5 me-5 '>
          <h2> F.A (Arts) </h2>
          <ul>
            <li>
              <h4> COMPULSORY SUBJECTS : </h4>
            </li>
            <li> Urdu </li>
            <li> English </li>
            <li> Pak Studies </li>
            <li> Islamic Studies </li>
            <h4 className='h4'> ELECTIVE SUBJECTS </h4>
            <li> English </li>
            <li> Civics </li>
            <li> Phy.Education </li>
            <li> Economics </li>
            <li> Fine Arts </li>
            <li> English Literature </li>
            <li> English Literature </li>
            <li> Islamiyat Elective</li>
          </ul>
        </div>
      </div>
      <div className='d-flex justify-content-center mb-5 p-5'>
        <div className='shadow p-5 w-100 rounded-top ms-5 me-5'>
          <h2> I.COM </h2>
          <h5>Introduction</h5>
          <p>
            I.COM program is particularly designed for Commerce
            degree. Basic concepts of commerce are induced in
            students who opt the subject. The subject provides a
            huge ground for upcoming commerce professionals. We
            offer courses mentioned below:
          </p>
          <ul>
            <li>
              <h4> Subjects : </h4>
            </li>
            <li> Urdu </li>
            <li> Islamic Studies</li>
            <li> English </li>
            <li> Urdu </li>
            <li> English </li>
            <li> Principle of Accounting</li>
            <li> Principle of Eco. & Commercial Geo </li>
            <li> Principle of Commerce & Banking</li>
            <li> Business Mathematics & Statistics</li>
            <li>Pakistan Studies </li>
          </ul>
        </div>
        <div className='shadow p-5 w-100 rounded-top ms-5 me-5'>
          <h2> General Science </h2>
          <ul>
            <li>
              {' '}
              <h4>COMPULSORY SUBJECTS </h4>
            </li>
            <li> English </li>
            <li> Islamic Studies </li>
            <li> Pakistan Studies </li>
            <li> Urdu </li>
            <li>
              {' '}
              <h4>ELECTIVE SUBJECTS </h4>
            </li>
            <li> Physics </li>
            <li> Mathematics </li>
            <li> Statistics </li>
            <li> Computer science </li>
            <li> Economics </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Intermediate;
