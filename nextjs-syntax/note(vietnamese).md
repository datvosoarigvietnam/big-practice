# Kết xuất phía máy chủ là gì và tại sao nó lại quan trọng?

- Kết xuất phía máy chủ (SSR) là quá trình kết xuất một trang web trên máy chủ trước khi gửi nó tới trình duyệt của khách hàng.

- SSR rất quan trọng vì nó cho phép các công cụ tìm kiếm thu thập dữ liệu và lập chỉ mục nội dung trang web của bạn, điều này có thể cải thiện SEO trang web của bạn.

- Ngoài ra, SSR có thể cải thiện thời gian tải trang ban đầu và cải thiện trải nghiệm người dùng cho người dùng có kết nối internet hoặc thiết bị chậm.

# Kết xuất phía máy khách là gì và nó khác với kết xuất phía máy chủ như thế nào?

- Kết xuất phía máy khách (CSR) là quá trình hiển thị trang web trên trình duyệt của máy khách bằng JavaScript sau khi nhận được HTML, CSS và JavaScript ban đầu từ máy chủ.

- Sự khác biệt chính giữa SSR và CSR là SSR gửi một trang HTML được hiển thị đầy đủ tới trình duyệt của khách hàng, trong khi CSR gửi một trang HTML trống được điền bằng JavaScript.

# Pre-rendering là gì?

- **Pre-rendering**: Next.js sẽ tạo trước HTML cho từng trang, thay vì tất cả được thực hiện ở client như Reactjs.

- **Có 2 loại Pre-rendering:** `Static generation` và `Server-side rendering`

- **Static generation:** HTML sẽ được generate **tất cả ngay từ đầu** và được sử dụng **mỗi lần request**.

- **Server-side rendering:** HTML sẽ được generate **mỗi lần request**.

#### Pre-rendering giúp trang web của chúng ta có hiệu năng và khả năng SEO tốt hơn

![Re&Pre Rendering](https://images.viblo.asia/full/be129f53-a445-4a43-89a9-43310f3bf08d.png)
