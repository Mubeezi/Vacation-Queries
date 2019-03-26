$(function()
  {
    $('#form').validate(
      {
      rules:
        {
          age:{ required:true },
          other:
          {
            required:
            {
            depends:function()
            {
              var sel = $('input[name=age]:checked', '#form').val();

              if(sel =='other')
                {
                return true;
                }
              else
                {
                return false;
                }
            }
            }
          }
        },
        messages:
        {
          channel:
          {
            required:"Please select an option"
          }
        },
        errorPlacement: function(error, element) {
            if ( element.is(":radio") )
            {
                error.appendTo( element.parents('.container') );
            }
            else
            { // This is the default behavior
                error.insertAfter( element );
            }
         }
      });

  });
