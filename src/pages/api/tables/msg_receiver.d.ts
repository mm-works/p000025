/**
 * 消息接收者表
 */
interface ITbmsg_receiver {
	/**
	 * 
	 */
	is_read: number;
	/**
	 * 
	 */
	receiver: string;
	/**
	 * 
	 */
	read_time: number;
	/**
	 * 
	 */
	productid: string;
	/**
	 * 
	 */
	bin_box: string;
	/**
	 * 
	 */
	msgid: string;
	/**
	 * 
	 */
	recipient_type: string;
	/**
	 * 
	 */
	_id: string;
	/**
	 * 
	 */
	receiver_no: string;
	/**
	 * 
	 */
	is_del: number;
}
