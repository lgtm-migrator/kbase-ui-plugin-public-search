define(["./base"],(function(e){"use strict";class t extends e.BaseObject{
constructor(e){super(e)}getTitle(){return this.object.object_name}getDetail(){
return{gcContent:this.object.data.gc_content,libraryFiles:this.object.data.lib,
phredType:this.object.data.phred_type,
meanQualityScore:this.object.data.qual_mean,
readCount:this.object.data.read_count,
readMeanLength:this.object.data.read_length_mean,
sequencingTechnology:this.object.data.sequencing_tech}}}return t}));