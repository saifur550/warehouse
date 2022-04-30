import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {

        return (
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-center mt-5 mx-auto">
                    <Button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        };


export default Loading;