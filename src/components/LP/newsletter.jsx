import React from "react";

const NewsletterSubscription = () => {
  return (
    <div>
      {/* Newsletter Section */}
      <section style={{ backgroundColor: "#055c9d", color: "white", padding: "50px 0" }}>
        <div className="container text-center">
          <h2>Newsletter Subscription</h2>
          <p>Subscribe to our newsletter to get updates on new products and services</p>
          <form className="d-flex justify-content-center align-items-center" style={{ marginTop: "20px" }}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control"
              style={{
                maxWidth: "400px",
                marginRight: "10px",
                borderRadius: "25px",
                padding: "10px 15px",
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: "10px 20px", borderRadius: "25px" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    
    </div>
  );
};

export default NewsletterSubscription;
