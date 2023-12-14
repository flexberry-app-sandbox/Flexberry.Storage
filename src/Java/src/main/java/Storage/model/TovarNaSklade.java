package Storage.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Storage.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТоварНаСкладе
 */
@Entity(name = "IISStorageТоварНаСкладе")
@Table(schema = "public", name = "ТоварНаСкладе")
public class TovarNaSklade {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЯчейки")
    private String номерячейки;

    @Column(name = "Ряд")
    private String ряд;

    @Column(name = "Этаж")
    private String этаж;

    @Column(name = "Количество")
    private String количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklad")
    @Convert("Sklad")
    @Column(name = "Склад", length = 16, unique = true, nullable = false)
    private UUID _skladid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklad", insertable = false, updatable = false)
    private Sklad sklad;


    public TovarNaSklade() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНомерЯчейки() {
      return номерячейки;
    }

    public void setНомерЯчейки(String номерячейки) {
      this.номерячейки = номерячейки;
    }

    public String getРяд() {
      return ряд;
    }

    public void setРяд(String ряд) {
      this.ряд = ряд;
    }

    public String getЭтаж() {
      return этаж;
    }

    public void setЭтаж(String этаж) {
      this.этаж = этаж;
    }

    public String getКоличество() {
      return количество;
    }

    public void setКоличество(String количество) {
      this.количество = количество;
    }


}