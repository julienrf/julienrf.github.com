Index.PACKAGES = {"reactivemongo" : [], "reactivemongo.bson" : [], "reactivemongo.bson.derived" : [{"name" : "reactivemongo.bson.derived.DerivedDecoder", "members_trait" : [{"label" : "afterRead", "tail" : "(f: (A) ⇒ U): BSONReader[BSONDocument, U]", "member" : "reactivemongo.bson.BSONReader.afterRead", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#afterRead[U](f:T=>U):reactivemongo.bson.BSONReader[B,U]", "kind" : "final def"}, {"label" : "readTry", "tail" : "(bson: BSONDocument): Try[A]", "member" : "reactivemongo.bson.BSONReader.readTry", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#readTry(bson:B):scala.util.Try[T]", "kind" : "def"}, {"label" : "readOpt", "tail" : "(bson: BSONDocument): Option[A]", "member" : "reactivemongo.bson.BSONReader.readOpt", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#readOpt(bson:B):Option[T]", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}, {"label" : "read", "tail" : "(bson: BSONDocument): A", "member" : "reactivemongo.bson.BSONReader.read", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder.html#read(bson:B):T", "kind" : "abstract def"}], "shortDescription" : "", "object" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html", "members_object" : [{"label" : "decodeLabelledHList", "tail" : "(fieldName: Aux[K], decodeH: Lazy[BSONReader[_ <: BSONValue, H]], decodeT: Lazy[DerivedDecoder[A, T]]): DerivedDecoder[A, ::[FieldType[K, H], T]]", "member" : "reactivemongo.bson.derived.DerivedDecoder.decodeLabelledHList", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#decodeLabelledHList[A,K<:Symbol,H,T<:shapeless.HList](implicitfieldName:shapeless.Witness.Aux[K],implicitdecodeH:shapeless.Lazy[reactivemongo.bson.BSONReader[_<:reactivemongo.bson.BSONValue,H]],implicitdecodeT:shapeless.Lazy[reactivemongo.bson.derived.DerivedDecoder[A,T]]):reactivemongo.bson.derived.DerivedDecoder[A,shapeless.labelled.FieldType[K,H]::T]", "kind" : "implicit def"}, {"label" : "decodeCoproduct", "tail" : "(typeName: Aux[K], decodeL: Lazy[BSONDocumentReader[L]], decodeR: Lazy[DerivedDecoder[A, R]]): DerivedDecoder[A, :+:[FieldType[K, L], R]]", "member" : "reactivemongo.bson.derived.DerivedDecoder.decodeCoproduct", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#decodeCoproduct[A,K<:Symbol,L,R<:shapeless.Coproduct](implicittypeName:shapeless.Witness.Aux[K],implicitdecodeL:shapeless.Lazy[reactivemongo.bson.BSONDocumentReader[L]],implicitdecodeR:shapeless.Lazy[reactivemongo.bson.derived.DerivedDecoder[A,R]]):reactivemongo.bson.derived.DerivedDecoder[A,shapeless.labelled.FieldType[K,L]:+:R]", "kind" : "implicit def"}, {"label" : "decodeHNil", "tail" : "(): DerivedDecoder[A, HNil]", "member" : "reactivemongo.bson.derived.DerivedDecoder.decodeHNil", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#decodeHNil[A]:reactivemongo.bson.derived.DerivedDecoder[A,shapeless.HNil]", "kind" : "implicit def"}, {"label" : "decodeCNil", "tail" : "(labels: Labels[A]): DerivedDecoder[A, CNil]", "member" : "reactivemongo.bson.derived.DerivedDecoder.decodeCNil", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#decodeCNil[A](implicitlabels:enum.Labels[A]):reactivemongo.bson.derived.DerivedDecoder[A,shapeless.CNil]", "kind" : "implicit def"}, {"label" : "apply", "tail" : "(decoder: DerivedDecoder[A, A]): BSONDocumentReader[A]", "member" : "reactivemongo.bson.derived.DerivedDecoder.apply", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#apply[A](implicitdecoder:reactivemongo.bson.derived.DerivedDecoder[A,A]):reactivemongo.bson.BSONDocumentReader[A]", "kind" : "def"}, {"label" : "decodeGeneric", "tail" : "(gen: Aux[A, R], derivedDecoder: Lazy[DerivedDecoder[A, R]]): DerivedDecoder[A, A]", "member" : "reactivemongo.bson.derived.DerivedDecoderLowPriority.decodeGeneric", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#decodeGeneric[A,R](implicitgen:shapeless.LabelledGeneric.Aux[A,R],implicitderivedDecoder:shapeless.Lazy[reactivemongo.bson.derived.DerivedDecoder[A,R]]):reactivemongo.bson.derived.DerivedDecoder[A,A]", "kind" : "implicit def"}, {"label" : "decodeCoproductDerived", "tail" : "(typeName: Aux[K], decodeL: Lazy[DerivedDecoder[_, L]], decodeR: Lazy[DerivedDecoder[A, R]]): DerivedDecoder[A, :+:[FieldType[K, L], R]]", "member" : "reactivemongo.bson.derived.DerivedDecoderLowPriority.decodeCoproductDerived", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#decodeCoproductDerived[A,K<:Symbol,L,R<:shapeless.Coproduct](implicittypeName:shapeless.Witness.Aux[K],implicitdecodeL:shapeless.Lazy[reactivemongo.bson.derived.DerivedDecoder[_,L]],implicitdecodeR:shapeless.Lazy[reactivemongo.bson.derived.DerivedDecoder[A,R]]):reactivemongo.bson.derived.DerivedDecoder[A,shapeless.labelled.FieldType[K,L]:+:R]", "kind" : "implicit def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedDecoder$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "trait" : "reactivemongo\/bson\/derived\/DerivedDecoder.html", "kind" : "trait"}, {"name" : "reactivemongo.bson.derived.DerivedDecoderLowPriority", "members_trait" : [{"label" : "decodeGeneric", "tail" : "(gen: Aux[A, R], derivedDecoder: Lazy[DerivedDecoder[A, R]]): DerivedDecoder[A, A]", "member" : "reactivemongo.bson.derived.DerivedDecoderLowPriority.decodeGeneric", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#decodeGeneric[A,R](implicitgen:shapeless.LabelledGeneric.Aux[A,R],implicitderivedDecoder:shapeless.Lazy[reactivemongo.bson.derived.DerivedDecoder[A,R]]):reactivemongo.bson.derived.DerivedDecoder[A,A]", "kind" : "implicit def"}, {"label" : "decodeCoproductDerived", "tail" : "(typeName: Aux[K], decodeL: Lazy[DerivedDecoder[_, L]], decodeR: Lazy[DerivedDecoder[A, R]]): DerivedDecoder[A, :+:[FieldType[K, L], R]]", "member" : "reactivemongo.bson.derived.DerivedDecoderLowPriority.decodeCoproductDerived", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#decodeCoproductDerived[A,K<:Symbol,L,R<:shapeless.Coproduct](implicittypeName:shapeless.Witness.Aux[K],implicitdecodeL:shapeless.Lazy[reactivemongo.bson.derived.DerivedDecoder[_,L]],implicitdecodeR:shapeless.Lazy[reactivemongo.bson.derived.DerivedDecoder[A,R]]):reactivemongo.bson.derived.DerivedDecoder[A,shapeless.labelled.FieldType[K,L]:+:R]", "kind" : "implicit def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "shortDescription" : "", "trait" : "reactivemongo\/bson\/derived\/DerivedDecoderLowPriority.html", "kind" : "trait"}, {"name" : "reactivemongo.bson.derived.DerivedEncoder", "members_trait" : [{"label" : "beforeWrite", "tail" : "(f: (U) ⇒ A): BSONWriter[U, BSONDocument]", "member" : "reactivemongo.bson.BSONWriter.beforeWrite", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#beforeWrite[U](f:U=>T):reactivemongo.bson.BSONWriter[U,B]", "kind" : "final def"}, {"label" : "afterWrite", "tail" : "(f: (BSONDocument) ⇒ U): BSONWriter[A, U]", "member" : "reactivemongo.bson.BSONWriter.afterWrite", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#afterWrite[U<:reactivemongo.bson.BSONValue](f:B=>U):reactivemongo.bson.BSONWriter[T,U]", "kind" : "final def"}, {"label" : "writeTry", "tail" : "(t: A): Try[BSONDocument]", "member" : "reactivemongo.bson.BSONWriter.writeTry", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#writeTry(t:T):scala.util.Try[B]", "kind" : "def"}, {"label" : "writeOpt", "tail" : "(t: A): Option[BSONDocument]", "member" : "reactivemongo.bson.BSONWriter.writeOpt", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#writeOpt(t:T):Option[B]", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}, {"label" : "write", "tail" : "(t: A): BSONDocument", "member" : "reactivemongo.bson.BSONWriter.write", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder.html#write(t:T):B", "kind" : "abstract def"}], "shortDescription" : "", "object" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html", "members_object" : [{"label" : "encodeLabelledHList", "tail" : "(fieldName: Aux[K], encodeH: Lazy[BSONWriter[H, _ <: BSONValue]], encodeT: Lazy[DerivedEncoder[T]]): DerivedEncoder[::[FieldType[K, H], T]]", "member" : "reactivemongo.bson.derived.DerivedEncoder.encodeLabelledHList", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#encodeLabelledHList[K<:Symbol,H,T<:shapeless.HList](implicitfieldName:shapeless.Witness.Aux[K],implicitencodeH:shapeless.Lazy[reactivemongo.bson.BSONWriter[H,_<:reactivemongo.bson.BSONValue]],implicitencodeT:shapeless.Lazy[reactivemongo.bson.derived.DerivedEncoder[T]]):reactivemongo.bson.derived.DerivedEncoder[shapeless.labelled.FieldType[K,H]::T]", "kind" : "implicit def"}, {"label" : "encodeCoproduct", "tail" : "(typeName: Aux[K], encodeL: Lazy[BSONDocumentWriter[L]], encodeR: Lazy[DerivedEncoder[R]]): DerivedEncoder[:+:[FieldType[K, L], R]]", "member" : "reactivemongo.bson.derived.DerivedEncoder.encodeCoproduct", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#encodeCoproduct[K<:Symbol,L,R<:shapeless.Coproduct](implicittypeName:shapeless.Witness.Aux[K],implicitencodeL:shapeless.Lazy[reactivemongo.bson.BSONDocumentWriter[L]],implicitencodeR:shapeless.Lazy[reactivemongo.bson.derived.DerivedEncoder[R]]):reactivemongo.bson.derived.DerivedEncoder[shapeless.labelled.FieldType[K,L]:+:R]", "kind" : "implicit def"}, {"label" : "encodeHNil", "tail" : ": DerivedEncoder[HNil]", "member" : "reactivemongo.bson.derived.DerivedEncoder.encodeHNil", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#encodeHNil:reactivemongo.bson.derived.DerivedEncoder[shapeless.HNil]", "kind" : "implicit val"}, {"label" : "encodeCNil", "tail" : ": DerivedEncoder[CNil]", "member" : "reactivemongo.bson.derived.DerivedEncoder.encodeCNil", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#encodeCNil:reactivemongo.bson.derived.DerivedEncoder[shapeless.CNil]", "kind" : "implicit val"}, {"label" : "apply", "tail" : "(encoder: DerivedEncoder[A]): BSONDocumentWriter[A]", "member" : "reactivemongo.bson.derived.DerivedEncoder.apply", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#apply[A](implicitencoder:reactivemongo.bson.derived.DerivedEncoder[A]):reactivemongo.bson.BSONDocumentWriter[A]", "kind" : "def"}, {"label" : "encodeGeneric", "tail" : "(gen: Aux[A, R], derivedEncoder: Lazy[DerivedEncoder[R]]): DerivedEncoder[A]", "member" : "reactivemongo.bson.derived.DerivedEncoderLowPriority.encodeGeneric", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#encodeGeneric[A,R](implicitgen:shapeless.LabelledGeneric.Aux[A,R],implicitderivedEncoder:shapeless.Lazy[reactivemongo.bson.derived.DerivedEncoder[R]]):reactivemongo.bson.derived.DerivedEncoder[A]", "kind" : "implicit def"}, {"label" : "encodeCoproductDerived", "tail" : "(typeName: Aux[K], encodeL: Lazy[DerivedEncoder[L]], encodeR: Lazy[DerivedEncoder[R]]): DerivedEncoder[:+:[FieldType[K, L], R]]", "member" : "reactivemongo.bson.derived.DerivedEncoderLowPriority.encodeCoproductDerived", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#encodeCoproductDerived[K<:Symbol,L,R<:shapeless.Coproduct](implicittypeName:shapeless.Witness.Aux[K],implicitencodeL:shapeless.Lazy[reactivemongo.bson.derived.DerivedEncoder[L]],implicitencodeR:shapeless.Lazy[reactivemongo.bson.derived.DerivedEncoder[R]]):reactivemongo.bson.derived.DerivedEncoder[shapeless.labelled.FieldType[K,L]:+:R]", "kind" : "implicit def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedEncoder$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "trait" : "reactivemongo\/bson\/derived\/DerivedEncoder.html", "kind" : "trait"}, {"name" : "reactivemongo.bson.derived.DerivedEncoderLowPriority", "members_trait" : [{"label" : "encodeGeneric", "tail" : "(gen: Aux[A, R], derivedEncoder: Lazy[DerivedEncoder[R]]): DerivedEncoder[A]", "member" : "reactivemongo.bson.derived.DerivedEncoderLowPriority.encodeGeneric", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#encodeGeneric[A,R](implicitgen:shapeless.LabelledGeneric.Aux[A,R],implicitderivedEncoder:shapeless.Lazy[reactivemongo.bson.derived.DerivedEncoder[R]]):reactivemongo.bson.derived.DerivedEncoder[A]", "kind" : "implicit def"}, {"label" : "encodeCoproductDerived", "tail" : "(typeName: Aux[K], encodeL: Lazy[DerivedEncoder[L]], encodeR: Lazy[DerivedEncoder[R]]): DerivedEncoder[:+:[FieldType[K, L], R]]", "member" : "reactivemongo.bson.derived.DerivedEncoderLowPriority.encodeCoproductDerived", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#encodeCoproductDerived[K<:Symbol,L,R<:shapeless.Coproduct](implicittypeName:shapeless.Witness.Aux[K],implicitencodeL:shapeless.Lazy[reactivemongo.bson.derived.DerivedEncoder[L]],implicitencodeR:shapeless.Lazy[reactivemongo.bson.derived.DerivedEncoder[R]]):reactivemongo.bson.derived.DerivedEncoder[shapeless.labelled.FieldType[K,L]:+:R]", "kind" : "implicit def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "shortDescription" : "", "trait" : "reactivemongo\/bson\/derived\/DerivedEncoderLowPriority.html", "kind" : "trait"}]};