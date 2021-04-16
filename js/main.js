myfunction();

function myfunction() {
    console.log("B")
    document.getElementById('product-list').innerHTML = `<div class="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/oyhemtbkghuegy9gpo0i/joyride-run-flyknit-running-shoe-sqfqGQ.jpg"
                  alt="Card image"
                />
                <div class="card-body text-center">
                  <b>Plain Notebook</b>
                  <p>$399.00 to $109.00</p>
                </div>
              </div>
            </div>`;
}
