### Một số lợi ích của react-query

- Caching data cho API
- Hạn chế gọi nhiều request trùng nhau

- Tự động cập nhật data của API bên dưới, giúp data luôn mới và đồng bộ với server (sử dụng **refetchInterval**)
- Phân trang và lazy loading

- Điều khiển được data khi nó bị cũ, có thể gọi lại dễ dàng

- Giúp tăng trải nghiệm UX cho web app với **“instant” data(dữ liệu tức thì)**

`Hướng dẫn này minh họa quá trình lưu trữ cache dữ liệu và các vòng đời của truy vấn trong React Query, đặc biệt là trong tình huống sử dụng cacheTime mặc định là 5 phút và staleTime mặc định là 0.`

1. Một thể hiện mới của `useQuery({ queryKey: ['todos'], queryFn: fetchTodos })` được mount.
   - Vì chưa có truy vấn nào khác được thực hiện với khóa truy vấn `['todos']`, nên truy vấn này sẽ hiển thị trạng thái "loading" và thực hiện một yêu cầu mạng để lấy dữ liệu.
2. Khi yêu cầu mạng hoàn thành, dữ liệu được trả về sẽ được lưu vào cache dưới khóa `['todos']`.

   - Hook sẽ đánh dấu dữ liệu là cũ sau thời gian staleTime được cấu hình (mặc định là 0, tức là ngay lập tức).

3. Một thể hiện thứ hai của `useQuery({ queryKey: ['todos'], queryFn: fetchTodos })` được mount ở một nơi khác.

   - Vì cache đã có dữ liệu cho khóa `['todos']` từ truy vấn đầu tiên, dữ liệu này được trả ngay lập tức từ cache.
   - Thể hiện mới này kích hoạt một yêu cầu mạng mới bằng cách sử dụng hàm truy vấn của nó.

4. Lưu ý rằng bất kể các hàm truy vấn fetchTodos có giống nhau hay không, trạng thái của cả hai truy vấn được cập nhật (bao gồm isFetching, isLoading và các giá trị liên quan khác) vì chúng có cùng khóa truy vấn.

5. Khi yêu cầu hoàn thành thành công, dữ liệu trong cache dưới khóa `['todos']` được cập nhật với dữ liệu mới và cả hai thể hiện được cập nhật với dữ liệu mới.

6. Cả hai thể hiện của truy vấn `useQuery({ queryKey: ['todos'], queryFn: fetchTodos })` bị unmount và không còn sử dụng nữa.

   - Vì không còn thể hiện hoạt động nào của truy vấn này nữa, một hẹn giờ cache được thiết lập bằng cách sử dụng cacheTime để xóa và thu gom rác truy vấn (mặc định là 5 phút).

7. Trước khi hết hạn thời gian cache, một thể hiện khác của `useQuery({ queryKey: ['todos'], queryFn: fetchTodos })` được mount. Truy vấn ngay lập tức trả về dữ liệu cache có sẵn trong khi hàm fetchTodos đang chạy trong nền. Khi hoàn thành thành công, nó sẽ điền dữ liệu mới vào cache.

8. Thể hiện cuối cùng của `useQuery({ queryKey: ['todos'], queryFn: fetchTodos })` bị unmount.

   - Không còn thể hiện nào của `useQuery({ queryKey: ['todos'], queryFn: fetchTodos })` xuất hiện trong vòng 5 phút.

9. Dữ liệu cache dưới khóa `['todos']` sẽ bị xóa và thu gom rác.

### cacheTime: Thời gian data được lưu cache tồn tại. Nếu hết thời gian, giá trị của query tương ứng với key này sẽ là undefined.

### staleTime: Thời gian data trong cache được tính là mới, tức là nếu data query này trong cache được tính là mới thì khi gọi query sẽ không call queryFuntion để lấy dữ liệu cập nhật vào cache nữa. "Còn mới thì gọi api làm gì 😃". Mặc định staleTime là 0, tức là cứ dùng query sẽ gọi đến queryFunction.
