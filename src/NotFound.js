import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          {/* 404 Error Text */}
          <div class="text-center">
            <div class="error mx-auto" data-text="404">
              404
            </div>
            <p class="lead text-gray-800 mb-5">Page Not Found</p>
            <p class="text-gray-500 mb-0">Aradığınız Sayfa Bulunamadı</p>
          </div>
        </div>
      </div>
    );
  }
}
