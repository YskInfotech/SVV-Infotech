import React from "react";
import "../../Styles/Nominee_bankdetails.css";

function Nominee_Bankdetails() {
  return (
    <div className="pi-container">
      <h4 className="pi-section-title">Nominee, Family & Bank Details</h4>
      <br />
      <div>
        <h5 className="nomineeheading">1. Statutory Forms Nominee Details</h5>
        <p className="nomineepara">Provident Fund (PF):</p>
          <div className="pi-grid-4">
        <label className="pi-label">
          Name of Nominee
          <input type="text" required className="pi-input"  />
        </label>

        <label className="pi-label">
          Age
          <input type="email" required className="pi-input" />
        </label>
         <label className="pi-label">
          Date of Birth
          <input type="date" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Relationship 
          <input type="text" required className="pi-input"/>
        </label>
      </div>
      
      </div>


      <div>
        
        <p className="nomineepara">Employees' State Insurance (ESI)</p>
          <div className="pi-grid-4">
        <label className="pi-label">
          Name of Nominee
          <input type="text" required className="pi-input"/>
        </label>

        <label className="pi-label">
          Age
          <input type="email" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Date of Birth
          <input type="date" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Relationship 
          <input type="text" required className="pi-input"/>
        </label>
      </div>

</div>
 <div>
        
        <p className="nomineepara">Accident Insurance</p>
          <div className="pi-grid-4">
        <label className="pi-label">
          Name of Nominee   
          <input type="text" required className="pi-input"/>
        </label>

        <label className="pi-label">
          Age
          <input type="email" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Date of Birth
          <input type="date" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Relationship 
          <input type="text" required className="pi-input" />
        </label>
      </div>

</div>
      

    <div>
        <h5 className="nomineeheading">2. Family Particulars of Insured Person</h5>
        <p className="nomineepara">Family Member 1</p>
         <div className="pi-grid-3">
        <label className="pi-label">
            Name
          <input type="text" required className="pi-input"/>
        </label>

        <label className="pi-label">
          Date of Birth
          <input type="date" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Relationship 
          <input type="text" required className="pi-input"/>
        </label>
      </div>

      <p className="nomineepara">Family Member 2</p>
         <div className="pi-grid-3">
        <label className="pi-label">
          Name
          <input type="text" required className="pi-input"/>
        </label>

         <label className="pi-label">
          Date of Birth
          <input type="date" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Relationship 
          <input type="text" required className="pi-input"/>
        </label>
      </div>
      <p className="nomineepara">Family Member 3</p>
         <div className="pi-grid-3">
        <label className="pi-label">
          Name
          <input type="text" required className="pi-input"/>
        </label>

                <label className="pi-label">
          Date of Birth
          <input type="date" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Relationship 
          <input type="text" required className="pi-input"/>
        </label>
        
      </div>
        <p className="nomineepara">Family Member 4</p>
         <div className="pi-grid-3">
        <label className="pi-label">
          Name
          <input type="text" required className="pi-input"/>
        </label>

                <label className="pi-label">
          Date of Birth
          <input type="date" required className="pi-input"/>
        </label>
         <label className="pi-label">
          Relationship 
          <input type="text" required className="pi-input"/>
        </label>
        
      </div>    
    </div>

      <br />

           <div>
            
        <h5 className="nomineeheading">3. Bank Details</h5>
        

     <div className="pi-grid-2">
          <label className="pi-label">
            Name as per Bank Details
            <input type="text" required className="pi-input"/>
          </label>

          <label className="pi-label">
            Account Number
            <input type="email" required className="pi-input"/>
          </label>
           <label className="pi-label">
            IFSC Code
            <input type="text" required className="pi-input"/>
          </label>
           <label className="pi-label">
            Branch Name
            <input type="text" required className="pi-input"/>
          </label>
          
          
       </div>

       

</div>
      <br />
      <div>
            
        <h5 className="nomineeheading">4. References</h5>
        
         <p className="nomineepara">A. Employer Reference</p>
     <div className="pi-grid-2">
          <label className="pi-label">
            Name
            <input type="text" required className="pi-input"/>
          </label>

          <label className="pi-label">
            Designation
            <input type="email" required className="pi-input"/>
          </label>
           <label className="pi-label">
            Phone Number
            <input type="text" required className="pi-input"/>
          </label>
           <label className="pi-label">
            Email ID
            <input type="text" required className="pi-input"/>
          </label>
           <label className="pi-label">
            Last Employer
            <input type="text" required className="pi-input"/>
          </label>
          
          
       </div>

       <div>
        <h5 className="nomineeheading">B. Relative or Friends Reference</h5>
        <p className="nomineepara">Reference 1</p>
         <div className="pi-grid-3">
        <label className="pi-label">
            Name
          <input type="text" required className="pi-input"/>
        </label>

        <label className="pi-label">
          Occupation
          <input type="text" required className="pi-input"/>
        </label>
         <label className="pi-label">
            Phone Number 
          <input type="text" required className="pi-input"/>
        </label>
        

      </div>
        </div>
        <div>
        
        <p className="nomineepara">Reference 2</p>
         <div className="pi-grid-3">
        <label className="pi-label">
            Name
          <input type="text" required className="pi-input"/>
        </label>

        <label className="pi-label">
          Occupation
          <input type="text" required className="pi-input" />
        </label>
         <label className="pi-label">
          Phone Number
          <input type="text" required className="pi-input"/>
        </label>
        

      </div>
        </div>


</div>
       
          
     
    </div>
  );
}

export default Nominee_Bankdetails;
